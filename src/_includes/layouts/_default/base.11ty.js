// borrowing shamelessly from the example of Reuben Lillie
// at https://gitlab.com/reubenlillie/reubenlillie.cmn-toggle

const headImp = require ('../partials/head.11ty')
const headerImp = require('../partials/header.11ty')
const footerImp = require('../partials/footer.11ty')
let 
  headSec = headImp.headMod(), 
  headerSec = headerImp.headerMod(), 
  footerSec = footerImp.footerMod()

module.exports = function (data) {
  return `
<!DOCTYPE html>
<html lang="en">
  ${headSec}
  <body>
    ${headerSec}
    ${data.content}
    ${footerSec}
  </body>
</html>
  `
}