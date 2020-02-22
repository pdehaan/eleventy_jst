module.exports = function (eleventyConfig) {

  // eleventyConfig.setTemplateFormats('html,njk,11ty.js')

  eleventyConfig.setQuietMode(true)

  // https://github.com/11ty/eleventy-base-blog/blob/master/.eleventy.js
  eleventyConfig.addLayoutAlias("posts", "src/_includes/layouts/posts/singlepost.11ty.js")

  let markdownIt = require('markdown-it')
  let markdownItOpts = {
    html: true,
    linkify: true,
    typographer: true
  }
  const markdownEngine = markdownIt(markdownItOpts)
  eleventyConfig.setLibrary('md', markdownEngine)

    /* === START, prev/next posts stuff === */
  // https://github.com/11ty/eleventy/issues/529#issuecomment-568257426

  eleventyConfig.addCollection("posts", function(collection) {
    const coll = collection.getFilteredByTag("post")

    for(let i = 0; i < coll.length; i++) {
      const prevPost = coll[i-1]
      const nextPost = coll[i+1]

      coll[i].data["prevPost"] = prevPost
      coll[i].data["nextPost"] = nextPost
    }

    return coll;
  })

  /* === END, prev/next posts stuff === */

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