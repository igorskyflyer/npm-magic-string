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
   * @param initialValue The initial value to assign to the accumulator.
   *
   * The value is assigned to the accumulator as-is, no processing is performed.
   */
  constructor(initialValue?: StringValue) {
    this.#shouldTrim = false

    if (initialValue) {
      this.#accumulator = this.#makeValue(initialValue)
    } else {
      this.#accumulator = ''
    }
  }

  #trimAccumulator(): MagicString {
    this.#accumulator = this.#accumulator.replace(this.#rxWhitespace, ' ')
    return this
  }

  #arrayToString(array: string[]): string {
    if (!Array.isArray(array)) {
      return ''
    }

    array = array.filter((value) => value.length > 0)

    if (array.length === 0) {
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

  addToAccumulator(value: StringValue, wrapChar?: string): MagicString {
    value = this.#makeValue(value)

    if (value.length === 0) {
      return this
    }

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
   * Gets the length of the accumulator.
   * @returns Returns the length of the accumulator.
   */
  get length(): number {
    return this.#accumulator.length
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
    return this.addToAccumulator(value)
  }

  /**
   * Conditionally appends values to the accumulator only if the primary value is followed by other non-empty values.
   *
   * This method checks if the provided rest values are non-empty before appending them.
   * Supports passing multiple string values as rest parameters or a single array of strings.
   *
   * @param value - The primary value to append.
   * @param rest - Additional values to check and append.
   * @returns Returns the current instance of MagicString.
   */
  appendIf(value: StringValue, ...rest: StringValue[]): MagicString {
    if (!(value && Array.isArray(rest))) {
      return this
    }

    // single string array
    if (rest.length === 1 && Array.isArray(rest.at(0))) {
      const additional: string = this.#arrayToString(rest.at(0) as string[])

      if (additional.length === 0) {
        return this
      }

      return this.append(value).append(additional)
    }

    // rest params
    const additional: string = this.#arrayToString(rest as string[])

    if (additional.length === 0) {
      return this
    }

    return this.append(value).append(additional)
  }

  /**
   * Appends a single-quoted value to the accumulator.
   * @param value - The value to append.
   * @returns Returns the current instance of MagicString.
   */
  appendSingleQuoted(value: StringValue): MagicString {
    return this.addToAccumulator(value, "'")
  }

  /**
   * Appends a double-quoted value to the accumulator.
   * @param value - The value to append.
   * @returns Returns the current instance of MagicString.
   */
  appendQuoted(value: StringValue): MagicString {
    return this.addToAccumulator(value, '"')
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
   * Trims only leading whitespace from the accumulator.
   * @returns Returns the current instance of MagicString.
   */
  trimStart(): MagicString {
    this.#accumulator = this.#accumulator.trimStart()
    return this
  }

  /**
   * Trims only trailing whitespace from the accumulator.
   * @returns Returns the current instance of MagicString.
   */
  trimEnd(): MagicString {
    this.#accumulator = this.#accumulator.trimEnd()
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
      return this.addToAccumulator(value, '"')
    }

    return this.addToAccumulator(value)
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

  /**
   * Replaces occurrences of a substring in the accumulator with a new substring.
   * @param searchValue - The substring to search for.
   * @param replaceValue - The substring to replace with.
   * @returns Returns the current instance of MagicString.
   */
  replace(searchValue: string, replaceValue: string): MagicString {
    this.#accumulator = this.#accumulator.replace(searchValue, replaceValue)
    return this
  }

  /**
   * Inserts a value at a specified index in the accumulator.
   *
   * If the `index` is negative or zero, the value is prepended.
   *
   * If the `index` is greater than or equal to the length of the current accumulator, the value is appended.
   *
   * @param value - The value to insert.
   * @param index - The position at which to insert the value.
   * @returns Returns the current instance of MagicString.
   */
  insert(value: StringValue, index: number): MagicString {
    if (typeof index !== 'number') {
      return this
    }

    value = this.#makeValue(value)

    if (value.length === 0) {
      return this
    }

    if (index <= 0) {
      return this.prepend(value)
    }

    if (index >= this.length) {
      return this.append(value)
    }

    this.#accumulator = `${this.#accumulator.slice(0, index)}${value}${this.#accumulator.slice(index)}`

    return this
  }

  /**
   * Extracts a substring from the accumulator between specified indices.
   * @param start - The starting index of the substring.
   * @param end - The ending index of the substring (optional).
   * @returns Returns the current instance of MagicString.
   */
  substring(start: number, end?: number): MagicString {
    this.#accumulator = this.#accumulator.substring(start, end)
    return this
  }
}
