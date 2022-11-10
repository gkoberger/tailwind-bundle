const tailwind = require("tailwindcss");
const postcss = require("postcss");
const prefixwrap = require("postcss-prefixwrap");

module.exports = (html, config, tailwindConfig) => {
  const plugins = [
    tailwind({
      ...tailwindConfig,
      content: [{ raw: html, extension: "html" }],
    }),
  ];

  if (config.selector) {
    plugins.push(prefixwrap(config.selector));
  }

  const includes = [
    "@tailwind components;",
    "@tailwind utilities;",
  ];

  if (config.includeBase) {
    includes.unshift("@tailwind base;");
  }

  return postcss(plugins).process(includes.join("\n"), {
    from: undefined,
  });
};
