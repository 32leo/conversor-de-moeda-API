const apiKey = '750e5cbab3fc2522ab79b19c'
const apiURL = ` https://v6.exchangerate-api.com/v6/${apiKey}750e5cbab3fc2522ab79b19c/latest/USD`;


// função apara consulta de taxa de cambio de API
// -----------------------------------------------------------------------------------------------------------------------------------------
async function getExgaente(daMoeda,paraMoeda){
    try{ 
        const response = await fetch(`${apiURL}${daMoeda}`); 
        const data =response.json();
        if(data.reslt=== "succes"){
            return data.conversion_rates[paraMoeda];
            
        }else{
            throw new error('erro ao buscar taxa de cambio');
         }

    }catch (error){
        console.error("erro:", error);
        return null;
    }

    }
//------------------------------------------------------------------------------------------------------------------------------------------