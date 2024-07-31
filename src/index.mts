// Author: Igor Dimitrijević (@igorskyflyer)

type StringValue = string | string[]

export class MagicString {
  #rxWhitespace: RegExp = /\s+/gm

  #accumulator: string
  #shouldTrim: boolean

  constructor() {
    this.#accumulator = ''
    this.#shouldTrim = false
  }

  #trimAccumulator(): MagicString {
    this.#accumulator = this.#accumulator.replace(this.#rxWhitespace, ' ')
    return this
  }

  #arrayToString(array: string[]): string {
    if (!Array.isArray(array)) {
      return ''
    }

    if (this.#shouldTrim) {
      array = array.map((value) => value.trim())
    }

    return array.join(' ')
  }

  #makeValue(value: StringValue): string {
    if (Array.isArray(value)) {
      value = this.#arrayToString(value)
    } else if (typeof value !== 'string') {
      return ''
    }

    if (this.#shouldTrim) {
      value = value.trim()
    }

    return value
  }

  #lastChar(): string {
    return this.#accumulator.at(-1) || ''
  }

  #wrapString(value: StringValue, wrapChar?: string): MagicString {
    value = this.#makeValue(value)

    if (!this.isEmpty() && this.#lastChar() !== ' ') {
      this.#accumulator += ' '
    }

    if (wrapChar) {
      if (this.#lastChar() !== wrapChar && value.at(-1) !== wrapChar) {
        this.#accumulator += `${wrapChar}${value}`
      } else {
        this.#accumulator += value
      }

      if (this.#lastChar() !== wrapChar && value.at(-1) !== wrapChar) {
        this.#accumulator += wrapChar
      }
    } else {
      this.#accumulator += value
    }

    return this
  }

  isEmpty(): boolean {
    return this.#accumulator.length === 0
  }

  clear(): MagicString {
    this.#accumulator = ''
    return this
  }

  append(value: StringValue): MagicString {
    return this.#wrapString(value)
  }

  singleQuoted(value: StringValue): MagicString {
    return this.#wrapString(value, "'")
  }

  quoted(value: StringValue): MagicString {
    return this.#wrapString(value, '"')
  }

  trimAll(): MagicString {
    return this.#trimAccumulator()
  }

  trim(): MagicString {
    this.#accumulator = this.#accumulator.trim()
    return this
  }

  trimOn(): MagicString {
    this.#shouldTrim = true
    return this
  }

  trimOff(): MagicString {
    this.#shouldTrim = false
    return this
  }

  path(value: StringValue): MagicString {
    value = this.#makeValue(value)

    if (value.indexOf(' ') > -1) {
      return this.#wrapString(value, '"')
    }

    this.#accumulator += value

    return this
  }

  prepend(value: StringValue): MagicString {
    value = this.#makeValue(value)

    const oldValue: string = this.#accumulator
    this.#accumulator = `${value}`

    if (this.#lastChar() !== ' ' && oldValue.at(0) !== ' ') {
      this.#accumulator += ' '
    }

    this.#accumulator += oldValue

    return this
  }

  toLowerCase(): MagicString {
    this.#accumulator = this.#accumulator.toLowerCase()
    return this
  }

  toUpperCase(): MagicString {
    this.#accumulator = this.#accumulator.toUpperCase()
    return this
  }

  toString(): string {
    return this.#accumulator
  }
}
