const {SelectAction, AddCity,
    UpdateCity,DeleteCity} = require('./view')

var MainList = [[],[],[],[]]

async function Data(string, list){
    if(string === 'Add City'){
        const add = await AddCity()
        const city = add['Add']
        const Temp = Math.floor((Math.random()*30) + 1) + (Math.random()*1 + 0);
        const Max = Math.floor((Math.random()*30) + 1) + (Math.random()*1 + 0);
        const Min = Math.floor((Math.random()*30) + 1) + (Math.random()*1 + 0);
        MainList[0].push(city)
        MainList[1].push(Temp.toFixed(1))
        MainList[2].push(Max.toFixed(1))
        MainList[3].push(Min.toFixed(1))
        return list
    }

}


module.exports = {
    Data,
    MainList  
}