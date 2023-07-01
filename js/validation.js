//Get form element
var form = document.getElementById("formLogin");
function submitForm(event){

   //Preventing page refresh
   event.preventDefault();
}
//Calling a function during form submission.
form.addEventListener('submit', submitForm);



function validarForm()
{
    nome = document.getElementById("nome");
    email = document.getElementById("email");
    telefone = document.getElementById("telefone");

    nomeFeedback = document.getElementById("nomeFeedback");
    telFeedback = document.getElementById("telFeedback");
    emailFeedback = document.getElementById("emailFeedback");

    ret = true;

    if(nome.value.length > 1)
    {
        nome.classList.remove("is-invalid");
        nome.classList.add("is-valid");
        nomeFeedback.innerText = "";
    }
    else
    {
        nome.classList.remove("is-valid");
        nome.classList.add("is-invalid");
        nomeFeedback.innerText = "Insira um nome válido";
        document.getElementById("nome").focus();
        ret = false;
    }

    if(validarTelefone(telefone.value))
    {
        telefone.classList.remove("is-invalid");
        telefone.classList.add("is-valid");
        telFeedback.innerText = "";
    }
    else
    {
        telefone.classList.remove("is-valid");
        telefone.classList.add("is-invalid");
        telFeedback.innerText = "Insira um telefone válido";
        document.getElementById("telefone").focus();
        ret = false;
    }

    if(validarEmail(email.value))
    {
        email.classList.remove("is-invalid");
        email.classList.add("is-valid");
        emailFeedback.innerText = "";
    }
    else
    {
        email.classList.remove("is-valid");
        email.classList.add("is-invalid");
        emailFeedback.innerText = "Insira um email válido";
        ret = false;
    }

    return ret;
}



function validarTelefone(telefone) {
    // O telefone deve seguir o formato (XX)XXXX-XXXXX
    const regex = /^[\+]?[(]?[0-9]{2}[)]?[-\s\.]?[0-9]{4,5}[-\s\.]?[0-9]{4,5}$/;
    return regex.test(telefone);
  }
  
function validarEmail(email) {
    // Validar formato de e-mail usando uma expressão regular básica
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}