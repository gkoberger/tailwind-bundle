Usually, Tailwind should be built on the fly. But sometimes, you need to bundle it up and save it.

To install:

```bash
npm install tailwind-bundle --save
```

```javascript
const tailwind = require('tailwind-bundle');

const tailwindConfig = { ... }; // This is the config https://tailwindcss.com/docs/configuration (content is ignored)

tailwind('<div class="bg-blue-300"></div>', { selector: '.test' }, tailwindConfig).then(r => console.log(r.css));
```

Or you can await using:

```javascript
await tailwind('<div class="bg-blue-300"></div>', { selector: '.test' }, tailwindConfig);
```

Here's the `config` options:

  * **selector** Prefix each generated selector with this, for the sake of scoping
  * **includeBase** This will include `@tailwind base`, which resets a lot of CSS
