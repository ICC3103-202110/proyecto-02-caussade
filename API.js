const axios = require('axios')


/*const city = "London"
const URL = "http://api.openweathermap.org/data/2.5/weather?q="+
            city+"&appid=b3d305332d3d20eef4a7576772b761fe&units=metric"*/


async function CallTemp(city){
    //const CityString = String(city)
    let URL = "http://api.openweathermap.org/data/2.5/weather?q="+
            city+"&appid=b3d305332d3d20eef4a7576772b761fe&units=metric"
    var ListTemp = []
    let response = await axios.get(URL)
                    .catch(function (error) {
                    console.log("Enter a valid city")
                    })
    ListTemp.push(response.data.main.temp)
    ListTemp.push(response.data.main.temp_min)
    ListTemp.push(response.data.main.temp_max)
    return ListTemp
        
        
}

/*async function TestTemp(){
    const AllTemp = await CallTemp('Santiago')
    console.log(AllTemp)
}

TestTemp()*/


module.exports = {
    CallTemp
}