// Procurar o botão
document.querySelector("#add-time")
// Ao clicar no botão
.addEventListener('click', cloneField)
// Executar a ação
function cloneField(){
    // Informar o campo para executar a ação: (".schedule-item")
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true)
    
    // Procurando todos os Inputs dentro do newFieldContainer
    const fields = newFieldContainer.querySelectorAll('input')
    
    //Para cada campo: limpar
    fields.forEach(function(field){
        field.value = ""
    })

    // Informa em qual lugar da página irá aplicar
    document.querySelector('#schedule-items').appendChild(newFieldContainer)
}

    