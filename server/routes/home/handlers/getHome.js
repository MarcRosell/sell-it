
function getHome (req, res) {
  res.render('pages/home', {idSection: 'home'})
}

module.exports = getHome