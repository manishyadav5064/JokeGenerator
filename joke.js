const btn = document.querySelector(".btn");
const jokess = document.querySelector(".jokes1");

const apiKey = "7DLvc4m6ce+A7URYQbz0HA==hQSVM7vVHHpxaDW0";
const apiURL ="https://api.api-ninjas.com/v1/dadjokes?limit=1" ;

const options = {
    method : "GET" ,
    headers: {
        "X-Api-Key": apiKey,
    },
};

async function getJoke(){

    try {
        jokess.innerText = "Loading..." ;
        btn.disabled = true;
        btn.innerText = "Loading..." ;
        const response = await fetch(apiURL, options);
        const data = await response.json();
        
    
        jokess.innerText = data[0].joke ;
        btn.disabled = false;
        btn.innerText = "Tell me a joke" ;
    } catch (error) {
        
    }
 
       
   
}

btn.addEventListener("click", getJoke);

