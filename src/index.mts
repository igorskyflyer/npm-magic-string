// Author: Igor Dimitrijević (@igorskyflyer)

/**
 * A common string type for all string-related methods that can either be a string or a string array.
 */
type StringValue = string | string[]

/**
 * The `MagicString` class provides an expressive and chainable API for advanced string manipulations.
 * It supports operations like appending, prepending, trimming, quoting, and path formatting, with options
 * for customization and whitespace management. This class is designed to make complex string transformations
 * simple and readable, allowing for clear and concise chaining of operations.
 */
export class MagicString {
  #rxWhitespace: RegExp = /\s+/gm

  #accumulator: string
  #shouldTrim: boolean

  /**
   * Creates a new instance of MagicString.
   */
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

  /**
   * Gets the accumulator value.
   * @returns Returns the accumulator as a string.
   */
  get value(): string {
    return this.#accumulator
  }

  /**
   * Checks if the accumulator is empty.
   * @returns Returns true if the accumulator is empty, false otherwise.
   */
  isEmpty(): boolean {
    return this.#accumulator.length === 0
  }

  /**
   * Clears the accumulator.
   * @returns Returns the current instance of MagicString.
   */
  clear(): MagicString {
    this.#accumulator = ''
    return this
  }

  /**
   * Appends a value to the accumulator.
   * @param value - The value to append.
   * @returns Returns the current instance of MagicString.
   */
  append(value: StringValue): MagicString {
    return this.#wrapString(value)
  }

  /**
   * Appends a single-quoted value to the accumulator.
   * @param value - The value to append.
   * @returns Returns the current instance of MagicString.
   */
  appendSingleQuoted(value: StringValue): MagicString {
    return this.#wrapString(value, "'")
  }

  /**
   * Appends a double-quoted value to the accumulator.
   * @param value - The value to append.
   * @returns Returns the current instance of MagicString.
   */
  appendQuoted(value: StringValue): MagicString {
    return this.#wrapString(value, '"')
  }

  /**
   * Trims all whitespace in the accumulator.
   * @returns Returns the current instance of MagicString.
   */
  trimAll(): MagicString {
    return this.#trimAccumulator()
  }

  /**
   * Trims only leading and trailing whitespace from the accumulator.
   * @returns Returns the current instance of MagicString.
   */
  trim(): MagicString {
    this.#accumulator = this.#accumulator.trim()
    return this
  }

  /**
   * Enables trimming of values before adding them to the accumulator.
   * @returns Returns the current instance of MagicString.
   */
  trimOn(): MagicString {
    this.#shouldTrim = true
    return this
  }

  /**
   * Disables trimming of values before adding them to the accumulator.
   * @returns Returns the current instance of MagicString.
   */
  trimOff(): MagicString {
    this.#shouldTrim = false
    return this
  }

  /**
   * Appends a value representing a path to the accumulator, wrapping it in double quotes if necessary.
   * @param value - The path value to append.
   * @returns Returns the current instance of MagicString.
   */
  path(value: StringValue): MagicString {
    value = this.#makeValue(value)

    if (value.indexOf(' ') > -1) {
      return this.#wrapString(value, '"')
    }

    this.#accumulator += value

    return this
  }

  /**
   * Prepends a value to the accumulator.
   * @param value - The value to prepend.
   * @returns Returns the current instance of MagicString.
   */
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

  /**
   * Converts the accumulator to lower case.
   * @returns Returns the current instance of MagicString.
   */
  toLowerCase(): MagicString {
    this.#accumulator = this.#accumulator.toLowerCase()
    return this
  }

  /**
   * Converts the accumulator to upper case.
   * @returns Returns the current instance of MagicString.
   */
  toUpperCase(): MagicString {
    this.#accumulator = this.#accumulator.toUpperCase()
    return this
  }
}
