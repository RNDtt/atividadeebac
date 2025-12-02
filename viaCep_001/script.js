const dataCep = localStorage.getItem("info");
document.getElementById("cep").value=dataCep;
this.cepInformado= console.log(dataCep);

document.getElementById("cep").addEventListener("blur", function(evento){
    const elemento=evento.target;  
    
    const cepInformado = elemento.value;
    localStorage.setItem("info", cepInformado);

    if(!(cepInformado.length ===8)){
        return;
    }
    fetch(`https://viacep.com.br/ws/${cepInformado}/json/`)
        .then(response=>response.json())
        .then(data=>{
            console.log(data);
            document.getElementById("logradouro").value=data.logradouro;
            document.getElementById("bairro").value=data.bairro;
            document.getElementById("cidade").value=data.localidade;
            document.getElementById("estado").value=data.uf;
        })
        .catch(error => console.error(error));
}
);
