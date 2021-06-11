const axios = require('axios')
const city = "L"
const URL = "http://api.openweathermap.org/data/2.5/weather?q="+
    city+"&appid=b3d305332d3d20eef4a7576772b761fe&units=metric"



async function CallTemp(){
    var ListTemp = []
    let response = await axios.get(URL)
    ListTemp.push(response.data.main.temp)
    ListTemp.push(response.data.main.temp_min)
    ListTemp.push(response.data.main.temp_max)
    return ListTemp
        
        
}

async function TestTemp(){
    const AllTemp = await CallTemp()
    console.log(AllTemp)

}

TestTemp()


/* async function CallTemp(){
    var ListTemp = []
    axios.get(URL)
        .then(response => {
            //var temp = response.data['main']['temp']
            ListTemp.push(response.data.main.temp)
            ListTemp.push(response.data.main.temp_min)
            ListTemp.push(response.data.main.temp_max)
            //console.log(response.data.main);
            //console.log(ListTemp)
            //return ListTemp

        },err => {
            console.log(err)
        })
        
        
}*/