class Parquimetro {
    valorInput = document.getElementById(entradaValor).value;

    

        constructor(){
    this.tabelaPrecos=[
        {valor:1.00, tempo: 30},
        {valor:1.75,tempo: 60},
        {valor:3.00,tempo:120},
    ];
        }
//onde as acoes ocorreram
    calcularTempo(valorInput){
    const valorMinimo=this.tabelaPrecos[0].valor;
    if (valor<valorMinimo){
        return{
            error:`Valor inserido menor do que o valor mínimo, por gentileza insira um valor válido.`
        };

    }
    let tempoCorrespondente =0;
    let custoDoTempo=0;
    for(let i = this.tabelaPrecos.length=1;i>0;i--){
        const faixa = this.tabelaPrecos[i];

            if (valorInput<=faixa.valor){
                tempoCorrespondente=faixa.valor;
                break;
            }
    }
    const troco = valorInput-custoDoTempo;
    return{
        tempo: tempoCorrespondente,
        troco:troco
    };
    }
}
document.addEventListener(`DOMContentLoaded`,()=>{
    const meuParquimetro = new Parquimetro
    const valorInput_snd = document.getElementById(`entradaValor`);
    const calcularBtn = document.getElementById(`botao-interativo`);
    const resultadoDiv = document.getElementById(`mostrador`);

    calcularBtn.addEventListener(`click`, ()=>{
        const valor= parseFloat (valorInput_snd.value);
        if (isNaN(valor)||valor<=0){
            resultadoDiv.textContent= `por gentileza colocar valor valido`;
            resultadoDiv.className=`error`;
            return;
        }
        const resultado = meuParquimetro.calcularTempo(valor);
        resultadoDiv.className=``;
        if(resultado.error){
            resultadoDiv.textContent= resultado.error;
            resultadoDiv.classList.add(`error`);
        }
        else{
            const mensagem= `
            tempo de permanencia: ${resultado.tempo} minutos.
            <br> 
            Troco: ${resultado.troco.toFixed(2)}.
            `;
        
        }
        })
}
)
