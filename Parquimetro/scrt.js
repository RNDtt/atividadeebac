
//parquimetro usando class no js;
    //valores [1; 1,75; 3] tempo[30min, 60min, 120min(if (tempo>120){tempo acima do limite})];
        //relacionar preco e tempo dar troco caso haja ;
            //if valor<1 {valor insuficiente};
                //precisa usar POO [classes sao obrigatorias];
                    //tentar ao maximo fazer algo minimamente bonitinho no css;
 class parquimetro{
    constructor(){
        this.tabelaPrecos=[
        {valor:1.00, tempo: 30},
        {valor:1.75, tempo: 60},
        {valor:3.00,tempo:120},        
        ];
    }
    calcularTempo(valorinserido){
        const valorMinimo = this.tabelaPrecos[0].valor;
        if(valorinserido < valorMinimo){
            return{
                error:`Valor insuficiente. O valor minimo é de R$ ${valorMinimo.toFixed(2)}`
            };
            
        }
        let tempoCorrespondente =0;
        let custoDoTempo =0;
            for (let i = this.tabelaPrecos.length = 1; i>0; i-- )  {
                const faixa = this.tabelaPrecos[i];

                if (valorinserido>= faixa.valor){
                    tempoCorrespondente = faixa.valor;
                    break;
                }
            }
            const troco = valorinserido - custoDoTempo;
            return{
            tempo: tempoCorrespondente,
            troco: troco
            };
    }
 }
 document.addEventListener(`DOMContentLoaded`, ()=>{
    const meuParquimetro = new parquimetro
    const valorInput= document.getElementById(`valorInput`);
    const calcularBtn = document.getElementById(`calcularBtn`);
    const resultadoDiv = document.getElementById(`resultadoDiv`);
 
    calcularBtn.addEventListener(`click`,()=>{
        const valor = parseFloat(valorInput.value);
        if (isNaN(valor) || valor<=0 ){
            resultadoDiv.textContent=`por gentileza colocar valor valido`;
            resultadoDiv.className=`error`;
            return;
        }
        const resultado = meuParquimetro.calcularTempo(valor);
        resultadoDiv.className=``;
        
        if(resultado.error){
            resultadoDiv.textContent = resultado.error;
            resultadoDiv.classList.add(`error`);
        }
        else{
            const mensagem= `
            Tempor de permanencia: <stong>${resultado.tempo}minutos</strong>.
            <br>
            Troco: <strong>R$ ${resultado.troco.toFixed(2)}</strong>.
            `;
        }
    })})