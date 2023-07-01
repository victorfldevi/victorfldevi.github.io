function validarForm()
{
    nome = document.getElementById("nome").value;
    email = document.getElementById("email").value;
    telefone = document.getElementById("telefone").value;

    if(nome == "")
    {
        alert("Preencha o campo nome");
        document.getElementById("nome").focus();
        return false;
    }else if(descricao == "")
    {
        alert("Preencha o campo de feedback");
        document.getElementById("descricao").focus();
        return false;
    }
    else if(!validarEmail(email))
    {
        alert("E-mail inválido");
        document.getElementById("email").focus();
        return false;
    }
    else if(!validarTelefone(telefone))
    {
        alert("Telefone inválido \n\nO telefone deve seguir o formato XXXX-XXXXX");
        document.getElementById("telefone").focus();
        return false;
    }
    else
    {
        alert("Formulário enviado com sucesso!");
        return true;
    }
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