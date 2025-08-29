// Author: Igor Dimitrijević (@igorskyflyer)

import { beforeEach, describe, expect, it, suite } from 'vitest'
import { MagicString } from '../src/index.js'

describe('🧪 MagicString tests 🧪', () => {
  let magicString: MagicString

  beforeEach(() => {
    magicString = new MagicString()
  })

  suite('constructor()', () => {
    it('should initialize with an empty accumulator', () => {
      expect(magicString.value).toBe('')
      expect(magicString.isEmpty()).toBe(true)
    })

    it('should initialize with an initial accumulator', () => {
      const magicWithValue: MagicString = new MagicString('Hello')
      magicWithValue.append('world')

      expect(magicWithValue.value).toBe('Hello world')
    })
  })

  suite('append()', () => {
    it('should append a value', () => {
      magicString.append('Hello')
      expect(magicString.value).toBe('Hello')
    })
  })

  suite('appendSingleQuoted()', () => {
    it('should append a single-quoted value', () => {
      magicString.appendSingleQuoted('Hello')
      expect(magicString.value).toBe("'Hello'")
    })
  })

  suite('appendQuoted()', () => {
    it('should append a double-quoted value', () => {
      magicString.appendQuoted('Hello')
      expect(magicString.value).toBe('"Hello"')
    })
  })

  suite('trimAll()', () => {
    it('should trim all whitespace', () => {
      magicString.append('Hello   World')
      magicString.trimAll()
      expect(magicString.value).toBe('Hello World')
    })
  })

  suite('trimStart()', () => {
    it('should only trim start', () => {
      magicString.append('   Hello   ').trimStart()
      expect(magicString.value).toBe('Hello   ')
    })
  })

  suite('trimEnd()', () => {
    it('should only trim end', () => {
      magicString.append('   Hello   ').trimEnd()
      expect(magicString.value).toBe('   Hello')
    })
  })

  suite('trim()', () => {
    it('should trim only leading and trailing whitespace', () => {
      magicString.append('   Hello    World   ')
      magicString.trim()
      expect(magicString.value).toBe('Hello    World')
    })
  })

  suite('trimOff() / trimOn()', () => {
    it('should enable and disable trimming', () => {
      magicString.trimOn().append('   Hello   ')
      expect(magicString.value).toBe('Hello')
      magicString.trimOff().append('   World   ')
      expect(magicString.value).toBe('Hello    World   ')
    })
  })

  suite('path()', () => {
    it('should append a path', () => {
      magicString.path('my/path')
      expect(magicString.value).toBe('my/path')
      magicString.path('my path')
      expect(magicString.value).toBe('my/path "my path"')
    })
  })

  suite('prepend()', () => {
    it('should prepend a value', () => {
      magicString.append('World').prepend('Hello')
      expect(magicString.value).toBe('Hello World')
    })
  })

  suite('toLowerCase()', () => {
    it('should convert to lower case', () => {
      magicString.append('HELLO').toLowerCase()
      expect(magicString.value).toBe('hello')
    })
  })

  suite('toUpperCase()', () => {
    it('should convert to upper case', () => {
      magicString.append('hello').toUpperCase()
      expect(magicString.value).toBe('HELLO')
    })
  })

  suite('clear()', () => {
    it('should clear the accumulator', () => {
      magicString.append('Hello').clear()
      expect(magicString.value).toBe('')
      expect(magicString.isEmpty()).toBe(true)
    })
  })

  suite('appendIf()', () => {
    it('should not append anything', () => {
      magicString.appendIf('Hello', '', '')
      expect(magicString.value).toBe('')
    })

    it('should not append anything', () => {
      magicString.appendIf('Hello', ['', ''])
      expect(magicString.value).toBe('')
    })

    it('should append string', () => {
      magicString.appendIf('Hello', 'world', '!')
      expect(magicString.value).toBe('Hello world !')
    })

    it('should append string[]', () => {
      magicString.appendIf('Hello', ['world', '!'])
      expect(magicString.value).toBe('Hello world !')
    })
  })

  suite('replace()', () => {
    it('should replace the value', () => {
      magicString.append('Weather is cloudy.').replace('cloudy', 'sunny')
      expect(magicString.value).toBe('Weather is sunny.')
    })
  })

  suite('insert()', () => {
    it('should insert a string', () => {
      magicString.append('ipsum').insert('Lorem', 0)
      expect(magicString.value).toBe('Lorem ipsum')
    })

    it('should insert a string[]', () => {
      magicString
        .append('Lorem ipsum dolor elit.')
        .insert([' sit amet,', 'consectetur', 'adipiscing'], 17)
      expect(magicString.value).toBe(
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
      )
    })
  })

  suite('substring()', () => {
    it('should return a substring', () => {
      magicString.append('Lorem ipsum dolor').substring(0, 5)
      expect(magicString.value).toBe('Lorem')
    })

    it('should return a substring', () => {
      magicString.append('Lorem ipsum dolor').substring(6)
      expect(magicString.value).toBe('ipsum dolor')
    })

    it('should return the full string', () => {
      // @ts-expect-error
      magicString.append('Lorem ipsum dolor').substring()
      expect(magicString.value).toBe('Lorem ipsum dolor')
    })
  })

  suite('scramble()', () => {
    it('should not match the original string', () => {
      const input: string =
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
      magicString.append(input).scramble()

      expect(magicString.value).not.toBe(input)
      expect(magicString.value).toHaveLength(input.length)
    })
  })
})
