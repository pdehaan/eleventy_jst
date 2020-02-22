module.exports = function (eleventyConfig) {

  eleventyConfig.setTemplateFormats('html,njk,11ty.js')

  eleventyConfig.setQuietMode(true)

  return {
    dir: {
      input: 'src',
      includes: '_includes', // relative to the input dir
      layouts: '_includes/_layouts', // relative to the input dir
      output: '_site' // default, but noting here anyway
    },
    templateFormats: [
      'html', 
      'md',
      'njk', 
      '11ty.js'
    ],
  }
}