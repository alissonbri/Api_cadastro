
//nome, sobrenome e email
const nome = document.getElementById("nome")
const sobrenome = document.getElementById("sobrenome")
const email = document.getElementById("email")

//campo de selection options
const senioridade = document.getElementById("senioridade")

//campo da experiencia 
const experiencia = document.getElementById("experiencia")

//botão
const submit = document.getElementById("submit")


async function init () {

    
   if (submit) { //passando o botão como parametro

    //atribuindo um evento de clique ao botão
    submit.addEventListener("click", (e) => {

        //segurando a pagina para não dar reload ao clicar em enviar
        e.preventDefault();

        //capturando o valor do option ao clicar no botão
        const optionsSenioridade = senioridade.value
  
        //preparando o pacote que vai ser enviado ao back-end
        data = JSON.stringify({ //JSON.stringify vai converter a string para json
            nome: nome.value,
            sobrenome: sobrenome.value,
            email: email.value,
            optionsSenioridade : optionsSenioridade,
            experiencia: experiencia.value
        })  

        //console.log para conferir os dados que vão ser enviados
        console.log(data)

            fetch('http://localhost:8090/projeto', { //link do servidor back-end
            method: "POST", //usando o metodo post do rest
           
            headers: { //dizendo que o conteudo do pacote a ser enviado vai ser um JSON
            "Content-Type": "application/json"
            },

             body: data //anexando o pacote preparado anteriormente com os dados do formulario
        })



        alert("Enviado");
    })

   }

}


//iniciando o script ao carregar a pagina
window.onload = init;   