const router = require("express").Router()

const { myDummyMw, myDummyMw2 } = require('./../middlewares/dummy-muddleware')

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
})

router.get('/ruta1', (req, res) => {
  res.send('RUTA 1 ALCANZADA')
})

router.get('/ruta2', myDummyMw, (req, res) => {       // Middleware de ruta
  res.send('RUTA 2 ALCANZADA')
})

router.use(myDummyMw2)                                // Middleware bloqueante

router.get('/ruta3', (req, res) => {
  res.send('RUTA 3 ALCANZADA')
})

module.exports = router;
