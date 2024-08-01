// Author: Igor Dimitrijević (@igorskyflyer)

import { beforeEach, describe, expect, it } from 'vitest'
import { MagicString } from '../src/index.mts'

describe('🧪 MagicString tests 🧪', () => {
  let magicString: MagicString

  beforeEach(() => {
    magicString = new MagicString()
  })

  it('should initialize with an empty accumulator', () => {
    expect(magicString.value).toBe('')
    expect(magicString.isEmpty()).toBe(true)
  })

  it('should append a value', () => {
    magicString.append('Hello')
    expect(magicString.value).toBe('Hello')
  })

  it('should append a single-quoted value', () => {
    magicString.appendSingleQuoted('Hello')
    expect(magicString.value).toBe("'Hello'")
  })

  it('should append a double-quoted value', () => {
    magicString.appendQuoted('Hello')
    expect(magicString.value).toBe('"Hello"')
  })

  it('should trim all whitespace', () => {
    magicString.append('Hello   World')
    magicString.trimAll()
    expect(magicString.value).toBe('Hello World')
  })

  it('should trim only leading and trailing whitespace', () => {
    magicString.append('   Hello    World   ')
    magicString.trim()
    expect(magicString.value).toBe('Hello    World')
  })

  it('should enable and disable trimming', () => {
    magicString.trimOn().append('   Hello   ')
    expect(magicString.value).toBe('Hello')
    magicString.trimOff().append('   World   ')
    expect(magicString.value).toBe('Hello    World   ')
  })

  it('should append a path', () => {
    magicString.path('my/path')
    expect(magicString.value).toBe('my/path')
    magicString.path('my path')
    expect(magicString.value).toBe('my/path "my path"')
  })

  it('should prepend a value', () => {
    magicString.append('World').prepend('Hello')
    expect(magicString.value).toBe('Hello World')
  })

  it('should convert to lower case', () => {
    magicString.append('HELLO').toLowerCase()
    expect(magicString.value).toBe('hello')
  })

  it('should convert to upper case', () => {
    magicString.append('hello').toUpperCase()
    expect(magicString.value).toBe('HELLO')
  })

  it('should clear the accumulator', () => {
    magicString.append('Hello').clear()
    expect(magicString.value).toBe('')
    expect(magicString.isEmpty()).toBe(true)
  })
})
