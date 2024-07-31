<h1 align="center">MagicString</h1>

<br>

<div align="center">
  🧵 An expressive, chainable library for advanced string manipulations.
  <br>
  Supports appending, prepending, trimming, quoting, and path
  <br>
  formatting with customizable whitespace handling.
  <br>
  Makes advanced String manipulations a piece of cake. 🦥
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

- [Usage](#-usage)
- [API](#-api)
  - [constructor()](#constructor-magicstring)
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

## 🕵🏼 Usage

Install it by executing:

```shell
npm i '@igor.dvlpr/magic-string'
```

<br>

## 🤹🏼 API

### `constructor(): MagicString` 

*Creates a new instance of MagicString.*

---

### `value: string`

*Gets the accumulator value.*

Returns the accumulator as a string.

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

## ✨ Examples

`example.ts`
```ts
import { MagicString } from '@igor.dvlpr/magic-string'


console.log(new MagicString())
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

<br>

### 👨🏻‍💻 Author
Created by **Igor Dimitrijević** ([*@igorskyflyer*](https://github.com/igorskyflyer/)).
