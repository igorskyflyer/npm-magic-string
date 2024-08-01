// Author: Igor Dimitrijević (@igorskyflyer)

import { beforeEach, describe, expect, it } from 'vitest'
import { MagicString } from '../src/index.mts'

describe('🧪 MagicString tests 🧪', () => {
  let magicString: MagicString

  beforeEach(() => {
    magicString = new MagicString()
  })

  it('#1 should initialize with an empty accumulator', () => {
    expect(magicString.value).toBe('')
    expect(magicString.isEmpty()).toBe(true)
  }) // #1

  it('#2 should append a value', () => {
    magicString.append('Hello')
    expect(magicString.value).toBe('Hello')
  }) // #2

  it('#3 should append a single-quoted value', () => {
    magicString.appendSingleQuoted('Hello')
    expect(magicString.value).toBe("'Hello'")
  }) // #3

  it('#4 should append a double-quoted value', () => {
    magicString.appendQuoted('Hello')
    expect(magicString.value).toBe('"Hello"')
  }) // #4

  it('#5 should trim all whitespace', () => {
    magicString.append('Hello   World')
    magicString.trimAll()
    expect(magicString.value).toBe('Hello World')
  }) // #5

  it('#6 should trim only leading and trailing whitespace', () => {
    magicString.append('   Hello    World   ')
    magicString.trim()
    expect(magicString.value).toBe('Hello    World')
  }) // #6

  it('#7 should enable and disable trimming', () => {
    magicString.trimOn().append('   Hello   ')
    expect(magicString.value).toBe('Hello')
    magicString.trimOff().append('   World   ')
    expect(magicString.value).toBe('Hello    World   ')
  }) // #7

  it('#8 should append a path', () => {
    magicString.path('my/path')
    expect(magicString.value).toBe('my/path')
    magicString.path('my path')
    expect(magicString.value).toBe('my/path "my path"')
  }) // #8

  it('#9 should prepend a value', () => {
    magicString.append('World').prepend('Hello')
    expect(magicString.value).toBe('Hello World')
  }) // #9

  it('#10 should convert to lower case', () => {
    magicString.append('HELLO').toLowerCase()
    expect(magicString.value).toBe('hello')
  }) // #10

  it('#11 should convert to upper case', () => {
    magicString.append('hello').toUpperCase()
    expect(magicString.value).toBe('HELLO')
  }) // #11

  it('#12 should clear the accumulator', () => {
    magicString.append('Hello').clear()
    expect(magicString.value).toBe('')
    expect(magicString.isEmpty()).toBe(true)
  }) // #12
})
