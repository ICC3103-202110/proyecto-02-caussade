const {SelectAction, AddCity,
    UpdateCity,DeleteCity} = require('./view')

var MainList = [[],[],[],[]]

async function Data(string, list){
    if(string === 'Add City'){
        const add = await AddCity()
        const city = add['Add']
        const Temp = Math.floor((Math.random()*30) + 1)
        const Max = Math.floor((Math.random()*30) + 1)
        const Min = Math.floor((Math.random()*30) + 1)
        MainList[0].push(city)
        MainList[1].push(Temp)
        MainList[2].push(Max)
        MainList[3].push(Min)
        return list
    }
}


module.exports = {
    Data,
    MainList  
}