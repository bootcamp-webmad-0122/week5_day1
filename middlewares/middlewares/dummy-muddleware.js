const myDummyMw = (req, res, next) => {

    // const loggedUser = true
    const loggedUser = false

    console.log('Comprobación del usuario realkizada')

    loggedUser ? next() : res.send('<h1>Desautorizado</h1>')
}



const myDummyMw2 = (req, res, next) => {

    console.log('Yo no hago nada más que este log jehejeh :3')

    next()

}

module.exports = { myDummyMw, myDummyMw2 }