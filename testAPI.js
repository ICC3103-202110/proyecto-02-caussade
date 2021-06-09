const axios = require('axios')
const city = "Santiago"
const URL = "http://api.openweathermap.org/data/2.5/weather?q="+
    city+"&appid=b3d305332d3d20eef4a7576772b761fe&units=metric"

axios.get(URL)
    .then(response => {
        console.log(response.data);
    },err => {
        console.log(err)
    })