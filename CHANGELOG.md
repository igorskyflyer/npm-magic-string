# 📒 Changelog

### of [@igorskyflyer/magic-string](https://github.com/igorskyflyer/npm-magic-string)

<br>

## v1.3.0 (*29-Aug-2025*)

- **💻 dev**: upgrade Node to >= v22
- **💻 dev**: upgrade dependencies

<br>
<br>

## v1.2.0 (*04-Aug-2024*)

- **✨ feat**: add [`scramble()`](https://github.com/igorskyflyer/npm-magic-string#scramble) - a string scramble method
- **📜 docs**: fix links

<br>
<br>

## v1.1.0 (*03-Aug-2024*)

- **✨ feat**: add [`appendIf()`](https://github.com/igorskyflyer/npm-magic-string#appendifvalue-stringvalue-rest-stringvalue) - a conditional appending method
- **✨ feat**: add [`trimStart()`](https://github.com/igorskyflyer/npm-magic-string#trimstart) - trims leading whitespace
- **✨ feat**: add [`trimEnd()`](https://github.com/igorskyflyer/npm-magic-string#trimend) - trims trailing whitespace
- **✨ feat**: add [`replace()`](https://github.com/igorskyflyer/npm-magic-string#replacesearchvalue-string-replacevalue-string) - replaces a value with another
- **✨ feat**: add [`insert()`](https://github.com/igorskyflyer/npm-magic-string#insertvalue-stringvalue-index-number) - inserts a string at the given index in the accumulator
- **✨ feat**: add [`substring()`](https://github.com/igorskyflyer/npm-magic-string#substringstart-number-end-number) - gets a substring of the current accumulator
- **✨ feat**: add [`length`](https://github.com/igorskyflyer/npm-magic-string#length-number) - returns the length of the accumulator value
- **✨ feat**: add support for setting the initial value of the accumulator in the [`constructor`](https://github.com/igorskyflyer/npm-magic-string#constructorinitialvalue-stringvalue)

<br>

- **✅ fix**: remove empty values from a passed [`StringValue`](https://github.com/igorskyflyer/npm-magic-string#type-stringvalue--string--string)
- **✅ fix**: don't append empty values with [`append()`](https://github.com/igorskyflyer/npm-magic-string#appendvalue-stringvalue), [`appendIf()`](https://github.com/igorskyflyer/npm-magic-string#appendifvalue-stringvalue-rest-stringvalue) and [`insert()`](https://github.com/igorskyflyer/npm-magic-string#insertvalue-stringvalue-index-number)

<br>
<br>

## v1.0.0 (*01-Aug-2024*)

- **🚀 launch**: initial release 🎉
