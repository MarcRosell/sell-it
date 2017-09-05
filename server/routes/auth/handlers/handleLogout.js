
function handleLogout (req, res) {
  const cookie = req.cookies
  for (var prop in cookie) {
    if (!cookie.hasOwnProperty(prop)) {
      continue
    }
    res.cookie(prop, '', {expires: new Date(0)})
  }
  res.redirect('/')
}
module.exports = handleLogout
