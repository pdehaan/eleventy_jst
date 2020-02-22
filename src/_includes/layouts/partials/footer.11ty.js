let copyYear = new Date().getFullYear()

module.exports = {
  footerMod: function() {
    return `
  <footer>
    <p>&copy; ${copyYear} Bryce Wray. This is our footer content. If you can see this, it works. Just requires the NodeJS method.</p>
  </footer>
    `
  }
}