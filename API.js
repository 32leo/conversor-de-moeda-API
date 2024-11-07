const apiKey = '750e5cbab3fc2522ab79b19c'
const apiURL = ` https://v6.exchangerate-api.com/v6/${apiKey}750e5cbab3fc2522ab79b19c/latest/USD`;


// função apara consulta de taxa de cambio de API
// -----------------------------------------------------------------------------------------------------------------------------------------
async function getExchangeRate(daMoeda,paraMoeda){
    try{ 
        const response = await fetch(`${apiURL}${daMoeda}`); 
        const data = response.json();
        if(data.reslt === "succes"){
            return data.conversion_rates[paraMoeda];
            
        }else{
            throw new error('erro ao buscar taxa de cambio');
         }

    }catch (error){
    console.error("erro:",error);
        return null;
    }

    }
//------------------------------------------------------------------------------------------------------------------------------------------
//
document.getElementById('currency-form').addEventListener('submit',async function(event){
    event.preventDefault();

    // Obter valoresde entrada
const valor = parseFloat(document.getElementById('valor').value);
const daMoeda =  document.getElementById('daMoeda').value;
const paraMoeda =  document.getElementById('paraMoeda').value;

const getExgaente = await getExchangeRate(daMoeda, paraMoeda);

if(getExgaente){
    const converterValue = valor * getExgaente;

    // console.log
    const conversao = document.getElementById('conversao');
    conversao.textContent = `resultado: ${converterValue.toFixed(2)}${paraMoeda}`
}else{
    alert('Erro ao buscar o cotação. Tente novamente')
}
});