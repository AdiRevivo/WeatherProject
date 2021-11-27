
const request=require("request");


const requestApi = (city) => {
    return new Promise((resolve,reject) =>{
        
        let options = {
            method: "GET",
            url: `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=9d20c1cb58b6e2f5238d832d079ad639`
            
        }
        request(options, function (err, res, body) {
            if (err) {
                reject(err)
            }
            else
            resolve(body)
            console.log(body);
        });
    })
}
module.exports={requestApi}