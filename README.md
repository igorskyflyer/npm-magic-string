<div align="center">
  <img src="https://raw.githubusercontent.com/igorskyflyer/npm-magic-string/main/media/magic-string.png" alt="Icon of MagicString" width="256" height="256">
  <h1>MagicString</h1>
</div>

<br>

<h4 align="center">
  🧵 An expressive and chainable library for advanced string manipulations. Supports appending, prepending, trimming, quoting, and path formatting with customizable whitespace handling. Makes advanced String manipulations a piece of cake. 🦥
</h4>

<br>
<br>

## 📃 Table of Contents

- [Features](#-features)
- [Usage](#-usage)
- [API](#-api)
  - [StringValue](#type-stringvalue--string--string)
  - [constructor()](#constructorinitialvalue-stringvalue)
  - [value](#value-string)
  - [length](#length-number)
  - [isEmpty()](#isempty-boolean)
  - [clear()](#clear)
  - [append()](#appendvalue-stringvalue)
  - [appendIf()](#appendifvalue-stringvalue-rest-stringvalue)
  - [appendSingleQuoted()](#appendsinglequotedvalue-stringvalue)
  - [appendQuoted()](#appendquotedvalue-stringvalue)
  - [trimAll()](#trimall)
  - [trim()](#trim)
  - [trimOn()](#trimon)
  - [trimOff()](#trimoff)
  - [trimStart()](#trimstart)
  - [trimEnd()](#trimend)
  - [path()](#pathvalue-stringvalue)
  - [prepend()](#prependvalue-stringvalue)
  - [toLowerCase()](#tolowercase)
  - [toUpperCase()](#touppercase)
  - [replace()](#replacesearchvalue-string-replacevalue-string)
  - [insert()](#insertvalue-stringvalue-index-number)
  - [substring()](#substringstart-number-end-number)
  - [scramble()](#scramble)
- [Examples](#️-examples)
- [Changelog](#-changelog)
- [Support](#-support)
- [License](#-license)
- [Related](#-related)
- [Author](#-author)

<br>
<br>

## 🤖 Features

- 🪄 Chainable API - build complex string transformations step‑by‑step
- ➕ Append & prepend - add text anywhere with ease
- 🧹 Whitespace control - trim, normalize, or toggle trimming on/off
- 🗨 Smart quoting - wrap values in single or double quotes automatically
- 📂 Path‑safe formatting - auto‑quote paths with spaces
- 🔄 Case transforms - switch to upper or lower case instantly
- 🪢 Conditional append - add only when extra values exist
- ✂️ Substring & insert - extract or inject text at any position
- 🧩 Replace - swap substrings with precision
- 🎲 Scramble - randomize characters for fun or obfuscation (powered by [ScRaMbLe](https://www.npmjs.com/package/@igorskyflyer/scramble))
- 🧼 Array support - join string arrays into clean, single string
- ⚡ Lightweight & dependency‑free - minimal footprint, maximum utility

<br>
<br>

## 🕵🏼 Usage

Install it by executing any of the following, depending on your preferred package manager:

```bash
pnpm add @igorskyflyer/magic-string
```

```bash
yarn add @igorskyflyer/magic-string
```

```bash
npm i @igorskyflyer/magic-string
```

<br>
<br>

## 🤹🏼 API

All string-related methods use a common string type that can either be a string or a string array. `StringValue` defined as:

### `type StringValue = string | string[]`

---

### `constructor(initialValue?: StringValue)` 

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

### `clear()`

*Clears the accumulator.*

Returns the current instance of `MagicString`.

---

### `append(value: StringValue)`

*Appends a value to the accumulator.*

`value` - The value to append.

<br>

Returns the current instance of `MagicString`.

---

### `appendIf(value: StringValue, ...rest: StringValue[])`

*Conditionally appends values to the accumulator only if the primary value is followed by other non-empty values.*  

*This method checks if the provided rest values are non-empty before appending them.*  

*Supports passing multiple string values as rest parameters or a single array of strings.*  

`value` - The primary value to append.  

`rest` - Additional values to check and append.

<br>

Returns the current instance of `MagicString`.

---

### `appendSingleQuoted(value: StringValue)`

*Appends a single-quoted value to the accumulator.*

`value` - The value to append.

<br>

Returns the current instance of `MagicString`.

---

### `appendQuoted(value: StringValue)`

*Appends a double-quoted value to the accumulator.*

`value` - The value to append.

<br>

Returns the current instance of `MagicString`.

---

### `trimAll()`

*Trims all whitespace in the accumulator.*

<br>

Returns the current instance of `MagicString`.

---

### `trim()`

*Trims only leading and trailing whitespace from the accumulator.*

<br>

Returns the current instance of `MagicString`.

---

### `trimOn()`

*Enables trimming of values before adding them to the accumulator.*

<br>

Returns the current instance of `MagicString`.

---

### `trimOff()`

*Disables trimming of values before adding them to the accumulator.*

<br>

Returns the current instance of `MagicString`.

---

### `trimStart()`

*Trims only leading whitespace from the accumulator.*

<br>

Returns the current instance of `MagicString`.

---

### `trimEnd()`

*Trims only trailing whitespace from the accumulator.*

<br>

Returns the current instance of `MagicString`.

---

### `path(value: StringValue)`

*Appends a value representing a path to the accumulator, wrapping it in double quotes if necessary.*

`value` - The path value to append.

<br>

Returns the current instance of `MagicString`.

---

### `prepend(value: StringValue)`

*Prepends a value to the accumulator.*

`value` - The value to prepend.

<br>

Returns the current instance of `MagicString`.

---

### `toLowerCase()`

*Converts the accumulator to lower case.*

<br>

Returns the current instance of `MagicString`.

---

### `toUpperCase()`

*Converts the accumulator to upper case.*

<br>

Returns the current instance of `MagicString`.

---

### `replace(searchValue: string, replaceValue: string)`

*Replaces occurrences of a substring in the accumulator with a new substring.*  

`searchValue` - The substring to search for.  

`replaceValue` - The substring to replace with.

<br>

Returns the current instance of `MagicString`.

---

### `insert(value: StringValue, index: number)`

*Inserts a value at a specified index in the accumulator.*  

*If the `index` is negative or zero, the value is prepended.*  

*If the `index` is greater than or equal to the length of the current accumulator, the value is appended.*

<br>

`value` - The value to insert.  

`index` - The position at which to insert the value.

<br>

Returns the current instance of `MagicString`.

---

### `substring(start: number, end?: number)`

*Extracts a substring from the accumulator between specified indices.*  

`start` - The starting index of the substring.  

`end` - The ending index of the substring (optional).

<br>

Returns the current instance of `MagicString`.

---

### `scramble()`

*Scrambles (rearranges characters randomly) of the current accumulator.*  
   
*Requires that the current accumulator value has a `length` > 3.*

<br>

Returns the current instance of `MagicString`.

<br>
<br>

## 🗒️ Examples

`example.ts`
```ts
import { MagicString } from '@igorskyflyer/magic-string'


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


<br>
<br>

## 📝 Changelog

📑 The changelog is available here, [CHANGELOG.md](https://github.com/igorskyflyer/npm-magic-string/blob/main/CHANGELOG.md).

<br>
<br>

## 🪪 License

Licensed under the MIT license which is available here, [MIT license](https://github.com/igorskyflyer/npm-magic-string/blob/main/LICENSE).

<br>
<br>

## 💖 Support

<div align="center">
  I work hard for every project, including this one and your support means a lot to me!
  <br>
  Consider buying me a coffee. ☕
  <br>
  <br>
  <a href="https://ko-fi.com/igorskyflyer" target="_blank"><img src="https://raw.githubusercontent.com/igorskyflyer/igorskyflyer/main/assets/ko-fi.png" alt="Donate to igorskyflyer" width="180" height="46"></a>
  <br>
  <br>
  <em>Thank you for supporting my efforts!</em> 🙏😊
</div>

<br>
<br>

## 🧬 Related

[@igorskyflyer/extendable-string](https://www.npmjs.com/package/@igorskyflyer/extendable-string)

> _🦀 ExtendableString allows you to create strings on steroids that have custom transformations applied to them, unlike common, plain strings. 🪀_

<br>

[@igorskyflyer/str-is-in](https://www.npmjs.com/package/@igorskyflyer/str-is-in)

> _🧵 Provides ways of checking whether a String is present in an Array of Strings using custom Comparators. 🔍_

<br>

[@igorskyflyer/normalized-string](https://www.npmjs.com/package/@igorskyflyer/normalized-string)

> _💊 NormalizedString provides you with a String type with consistent line-endings, guaranteed. 📮_

<br>

[@igorskyflyer/astro-escaped-component](https://www.npmjs.com/package/@igorskyflyer/astro-escaped-component)

> _🏃🏻‍♂️‍➡️ An Astro component that holds only HTML-encoded content. 📜_

<br>

[@igorskyflyer/strip-html](https://www.npmjs.com/package/@igorskyflyer/strip-html)

> _🥞 Removes HTML code from the given string. Can even extract text-only from the given an HTML string. ✨_

<br>
<br>
<br>

## 👨🏻‍💻 Author
Created by **Igor Dimitrijević** ([*@igorskyflyer*](https://github.com/igorskyflyer/)).
