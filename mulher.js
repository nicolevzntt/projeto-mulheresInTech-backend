const express = require("express") //inicio o pacote express
const router = express.Router() // criar uma constante que armazene a função Router que está dentro do express

const app = express() //inicio o app
const porta = 3333 //defino o nome da porta

function mostraMulher(request, response) {
    response.json({
        nome: 'Stephanie Cardoso',
        imagem: 'https://media.licdn.com/dms/image/v2/C4D03AQH97rA5u7j9kA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1651850939335?e=1747267200&v=beta&t=6vIQ2jfoAdeWEZihz5gYknxxf475fySE76Nu2qZBTvY',
        minibio: 'Desenvolvedora Back-end'
    }) // um objeto será enviado, por isso é usado o formato json
}


function mostraPorta() {
    console.log("Servidor criado e rodando na porta ", porta)
}

app.use(router.get('/mulher', mostraMulher)) // configuro a rota get (mando informação pro navegador)
app.listen(porta, mostraPorta) // aqui o servidor escuta se a porta esta funcionando, se sim, irá chamar a função/
//  (mando informação pro terminal)
