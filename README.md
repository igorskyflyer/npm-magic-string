<h1 align="center">MagicString</h1>

<br>

<div align="center">
  🧵 An expressive and chainable library for advanced string manipulations.
  <br>
  Supports appending, prepending, trimming, quoting, and
  <br>
  path formatting with customizable whitespace handling. 🦥
  <br>
  <br>
  <em>Makes advanced String manipulations a piece of cake.</em>
</div>

<br>
<br>

<div align="center">
  <blockquote>
    <br>
    <h4>💖 Support further development</h4>
    <span>I work hard for every project, including this one
    <br>
    and your support means a lot to me!
    <br>
    <br>
    Consider buying me a coffee. ☕
    <br>
    <strong>Thank you for supporting my efforts! 🙏😊</strong></span>
    <br>
    <br>
    <a href="https://ko-fi.com/igorskyflyer" target="_blank"><img src="https://raw.githubusercontent.com/igorskyflyer/igorskyflyer/main/assets/ko-fi.png" alt="Donate to igorskyflyer" width="150"></a>
    <br>
    <br>
    <a href="https://github.com/igorskyflyer"><em>@igorskyflyer</em></a>
    <br>
    <br>
    <br>
  </blockquote>
</div>

<br>
<br>

## 📃 Table of contents

- [Features](#-features)
- [API](#-api)
  - [StringValue](#type-stringvalue--string--string)
  - [constructor()](#constructorinitialvalue-stringvalue-magicstring)
  - [value](#value-string)
  - [isEmpty()](#isempty-boolean)
  - [clear()](#clear-magicstring)
  - [append()](#appendvalue-stringvalue-magicstring)
  - [appendSingleQuoted()](#appendsinglequotedvalue-stringvalue-magicstring)
  - [appendQuoted()](#appendquotedvalue-stringvalue-magicstring)
  - [trimAll()](#trimall-magicstring)
  - [trim()](#trim-magicstring)
  - [trimOn()](#trimon-magicstring)
  - [trimOff()](#trimoff-magicstring)
  - [path()](#pathvalue-stringvalue-magicstring)
  - [prepend()](#prependvalue-stringvalue-magicstring)
  - [toLowerCase()](#tolowercase-magicstring)
  - [toUpperCase()](#touppercase-magicstring)
- [Examples](#-examples)
- [Changelog](#-changelog)
- [License](#-license)
- [Related](#-related)
- [Author](#-author)

<br>
<br>

## 🤖 Features

- 🗣️ expressive and chainable
- 📃 with many string manipulation methods
- 👽 increases productiveness

---

## 🕵🏼 Usage

Install it by executing:

```shell
npm i '@igor.dvlpr/magic-string'
```

---

## 🤹🏼 API

All string-related methods use a common string type that can either be a string or a string array. `StringValue` defined as:

### `type StringValue = string | string[]`

---

### `constructor(initialValue?: StringValue): MagicString` 

*Creates a new instance of MagicString.*

`initialValue` - Optional, the initial value to assign to the accumulator.

<br>

> [!NOTE]
> The value is assigned to the accumulator as-is, no processing is performed.
>

---

### `value: string`

*Gets the accumulator value.*

<br>

Returns the accumulator as a string.

---

### `length: number`

*Gets the length of the accumulator.*

<br>

Returns the length of the accumulator.

---

### `isEmpty(): boolean`

*Checks if the accumulator is empty.*  

Returns true if the accumulator is empty, false otherwise.

---

### `clear(): MagicString`

*Clears the accumulator.*

Returns the current instance of `MagicString`.

---

### `append(value: StringValue): MagicString`

*Appends a value to the accumulator.*

`value` - The value to append.

<br>

Returns the current instance of `MagicString`.

---

### `appendIf(value: StringValue, ...rest: StringValue[]): MagicString`

*Conditionally appends a value to the accumulator if followed by other non-empty values.*  

*This method checks if the provided rest values are non-empty before appending them.*  

*Supports passing multiple string values as rest parameters or a single array of strings.*  

`value` - The primary value to append.  
`rest` - Additional values to check and append.

<br>

Returns the current instance of `MagicString`.

---

### `appendSingleQuoted(value: StringValue): MagicString`

*Appends a single-quoted value to the accumulator.*

`value` - The value to append.

<br>

Returns the current instance of `MagicString`.

---

### `appendQuoted(value: StringValue): MagicString`

*Appends a double-quoted value to the accumulator.*

`value` - The value to append.

<br>

Returns the current instance of `MagicString`.

---

### `trimAll(): MagicString`

*Trims all whitespace in the accumulator.*

<br>

Returns the current instance of `MagicString`.

---

### `trim(): MagicString`

*Trims only leading and trailing whitespace from the accumulator.*

<br>

Returns the current instance of `MagicString`.

---

### `trimOn(): MagicString`

*Enables trimming of values before adding them to the accumulator.*

<br>

Returns the current instance of `MagicString`.

---

### `trimOff(): MagicString`

*Disables trimming of values before adding them to the accumulator.*

<br>

Returns the current instance of `MagicString`.

---

### `trimStart(): MagicString`

*Trims only leading whitespace from the accumulator.*

<br>

Returns the current instance of `MagicString`.

---

### `trimEnd(): MagicString`

*Trims only trailing whitespace from the accumulator.*

<br>

Returns the current instance of `MagicString`.

---

### `path(value: StringValue): MagicString`

*Appends a value representing a path to the accumulator, wrapping it in double quotes if necessary.*

`value` - The path value to append.

<br>

Returns the current instance of `MagicString`.

---

### `prepend(value: StringValue): MagicString`

*Prepends a value to the accumulator.*

`value` - The value to prepend.

<br>

Returns the current instance of `MagicString`.

---

### `toLowerCase(): MagicString`

*Converts the accumulator to lower case.*

<br>

Returns the current instance of `MagicString`.

---

### `toUpperCase(): MagicString`

*Converts the accumulator to upper case.*

<br>

Returns the current instance of `MagicString`.

---

### `replace(searchValue: string, replaceValue: string): MagicString`

*Replaces occurrences of a substring in the accumulator with a new substring.*  

`searchValue` - The substring to search for.  
`replaceValue` - The substring to replace with.

<br>

Returns the current instance of `MagicString`.

---

## ✨ Examples

`example.mts`
```ts
import { MagicString } from '@igor.dvlpr/magic-string'


console.log(
  new MagicString()
    .append('Hello')
    .appendSingleQuoted('world')
    .appendQuoted('this is     a test')
    .prepend('Start:    ')
    .trimAll()
    .path('/usr/local/bin')
    .toUpperCase()
    .path('/usr/local/my file.txt"') // intentional stray quote
    .toLowerCase()
    .toUpperCase()
    .trimOn()
    .append('   Trimmed   ')
    .trimOff()
    .append('  Not trimmed')
    .trim().value
)

// prints 'START: HELLO \'WORLD\' "THIS IS A TEST" /USR/LOCAL/BIN "/USR/LOCAL/MY FILE.TXT" Trimmed   Not trimmed'
```

---

## 📝 Changelog

📑 The changelog is available here: [CHANGELOG.md](https://github.com/igorskyflyer/npm-magic-string/blob/main/CHANGELOG.md).

---

## 🪪 License

Licensed under the MIT license which is available here, [MIT license](https://github.com/igorskyflyer/npm-magic-string/blob/main/LICENSE).

---

## 🧬 Related

[@igor.dvlpr/extendable-string](https://www.npmjs.com/package/@igor.dvlpr/extendable-string)

> _🦀 ExtendableString allows you to create strings on steroids that have custom transformations applied to them, unlike common, plain strings. 🪀_

<br>

[@igor.dvlpr/str-is-in](https://www.npmjs.com/package/@igor.dvlpr/str-is-in)

> _🧵 Provides ways of checking whether a String is present in an Array of Strings using custom Comparators. 🔍_

<br>

[@igor.dvlpr/normalized-string](https://www.npmjs.com/package/@igor.dvlpr/normalized-string)

> _💊 NormalizedString provides you with a String type with consistent line-endings, guaranteed. 📮_

<br>

[@igor.dvlpr/astro-escaped-component](https://www.npmjs.com/package/@igor.dvlpr/astro-escaped-component)

> _🏃🏻‍♂️‍➡️ An Astro component that holds only HTML-encoded content. 📜_

<br>

[@igor.dvlpr/strip-html](https://www.npmjs.com/package/@igor.dvlpr/strip-html)

> _🥞 Removes HTML code from the given string. Can even extract text-only from the given an HTML string. ✨_

---

## 👨🏻‍💻 Author
Created by **Igor Dimitrijević** ([*@igorskyflyer*](https://github.com/igorskyflyer/)).
