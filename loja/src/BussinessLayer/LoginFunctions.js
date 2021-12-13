import DataLayer from "../DataLayer";


const loginFunction = (target) =>{
    return new Promise(async (resovle, reject)=>{
        var form  = target.closest("form");
        if(form != undefined){
            var inputs  = form.querySelectorAll("input");
            var dataToSend = new Object();
            inputs.forEach(element => {
                if(element.placeholder.trim() != "" && element.value.trim() != ""){
                    dataToSend[element.placeholder] = element.value;
                }
            });
            
            await DataLayer.loginDataLayer(dataToSend).then((customer)=>{
                resovle(customer);
            }).catch((error)=>{
                reject(error);
            })
    
    
        }else{
            console.log("target não fornecido");
        }
    })
    
}


export default loginFunction;