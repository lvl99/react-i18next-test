# `react-i18next` Test

Simple test to see how `react-i18next` differs from `react-intl`.

Other important features:

- `i18next-icu` to utilise the `yahoo/intl-messageformat` for translation strings (this means there's no React component interpolation within strings, which `react-i18next` does allow. All my app's existing translations are in this format)
- `i18next-localstorage-backend` to cache translations to localStorage (PWA)
- `i18next-xhr-backend` to load translation files asynchronously
- `i18next-chained-backend` to use both localStorage and XHR
- `i18next-browser-languagedetector` to automatically load translations based on the browser's configuration

## Explanation

I've used `react-intl` previously, but found it a hassle dealing with when testing in Jest.

I also like the async translation files that `react-i18next` has built in. Makes it leaner for building, needing only to update the translation file itself and not generate a whole new app build.

Additionally, I also async load the `i18next-icu/locale-data` when the language is changed.

### Layout

The implementation configuration is located in the [`src/i18n`](/src/i18n) folder:

- [`src/i18n/index.js`](/src/i18n/index.js) is the `react-i18next` configuration
- [`src/i18n/testI18nComponent.js`](/src/i18n/testI18nComponent.js) is a custom HOC to stub `react-i18next` functionality when testing components (@NOTE see testing below)

Translation files are located in the [`public/locales`](/public/locales) folder. It's important to note that the supported locales/languages need to be folders. The containing files should be named (the default name is `translation`) in a way which applies to using namespaces in `react-i18next` (since it's using the default I don't specify in the namespace when using `withNamespaces` or the `NamespaceConsumer` HOC). This tripped me up when I was initially starting out.

### Testing concerns

> @NOTE this is a legacy thing. Moving to Hooks removes the need for all this, I think.

When I previously used `react-intl` I found it difficult to test in Jest. There ended up being a lot of tight coupling between Components, translations and the `react-intl` which made snapshots very verbose.

Since `react-i18next` does not need to inject the full locale translations into the component, this already reduces the size of snapshots.

For this repo, I created dummy `intl` and `t` functions using a [custom HOC](/src/i18n/testI18nComponent.js) which can be optionally wrapped around a Component within the test file. See [`App.test.js`](/src/App.test.js) for how it works.

## MIT License

Copyright 2019 Matt Scheurich.

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
