module.exports = function (eleventyConfig) {

  // eleventyConfig.setTemplateFormats('html,njk,11ty.js')

  eleventyConfig.setQuietMode(true)

  let markdownIt = require('markdown-it')
  let markdownItOpts = {
    html: true,
    linkify: true,
    typographer: true
  }
  const markdownEngine = markdownIt(markdownItOpts)
  eleventyConfig.setLibrary('md', markdownEngine)

  return {
    dir: {
      input: 'src',
      includes: '_includes', // relative to the input dir
    },
    templateFormats: [
      'html', 
      'md',
      'njk', 
      '11ty.js'
    ],
    passthroughFileCopy: true
  }
}