// borrowing shamelessly from the example of Reuben Lillie
// at https://gitlab.com/reubenlillie/reubenlillie.cmn-toggle

let copyYear = new Date().getFullYear()

module.exports = function (data) {
  return `
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Title from 11ty.js testing</title>
  </head>
  <body>
    <h1>This H1 is from the template.</h1>
    <p>This P is from the template. Anything between the HRs will come from the child MD file.</p>
    <hr />
    <main>
      ${data.content}
    </main>
    <hr />
    <p><em>Now, we&rsquo;re back to the template.</em></p>
    <footer>
      &copy; ${copyYear}
    </footer>
  </body>
</html>
  `
}