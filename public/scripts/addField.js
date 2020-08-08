// Procurar o botão
document.querySelector("#add-time")
.addEventListener('click', cloneField)
//quando clicar no botão

// executar uma ação
function cloneField(){
    //duplicar os campos
    const newFieldsContainer = document.querySelector('.schedule-item').cloneNode(true) // boolean: true or false
    
    //limpar os campos que campos?
    const fields = newFieldsContainer.querySelectorAll('input')

    // para cada campo, limpar
    fields.forEach(function(field){
        //pegar o field do momento e limpa ele
        field.value = ""
    })


    //colocar na página onde?
    document.querySelector('#schedule-items').appendChild(newFieldsContainer)

}
    