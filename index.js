
const labelinputfield = document.querySelector('#label value')
const form = document.querySelector('#form')
const inputtype = document.querySelector('#inputtype')
labelinputfield.addeventListener('keyup', (event) => {
    const keypressed = event.key
    

    if (keypressed === "enter")
       // create input    
    {
    const type = inputtype.Value
    const label= labelinputfield.Value

    const labelinput =document.createElement("label")
    const div =document.createElement("div")

    let input = null;


    if(type === 'textarea')
      input = document.createElement("textarea")
    else
     input = document.createElement('input')

    labelinput.innerHTML = label
    input.type = type
    input.classList.add('form-control')
    labelinput.classList.add("form-label")
    div.classList.add("mb-3")

if (type != 'submit'){
    input.classList.add("btn btn-shadow p-4")
}

    
    div.appendchild(input)

    form.appendchild(div)

    console.log(type,label);





    }

})