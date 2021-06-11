const {SelectAction, AddCity,
    UpdateCity,DeleteCity} = require('./view')
const {CallTemp} = require('./API')


var MainList = [[],[],[],[]]

async function Data(string, list){
    if(string === 'Add City'){
        const add = await AddCity()
        const city = add['Add']
        const TempCity = await CallTemp(String(city))
        const Temp = TempCity[0]    
        const Max =  TempCity[2]      
        const Min = TempCity[1]  
        MainList[0].push(city)
        MainList[1].push(Temp)
        MainList[2].push(Max)
        MainList[3].push(Min)
        return list
    }
    else if(string === 'Update City'){
        const update = await UpdateCity(MainList[0])
        const city = update['Update']
        const position = MainList[0].indexOf(city)
        MainList[1].splice(position,1)
        MainList[2].splice(position,1)
        MainList[3].splice(position,1)
        const TempCity = await CallTemp(String(city))
        const Temp = TempCity[0]
        const Max = TempCity[2]
        const Min = TempCity[1]
        MainList[1].splice(position,0,(Temp.toFixed(1)))
        MainList[2].splice(position,0,(Max.toFixed(1)))
        MainList[3].splice(position,0,(Min.toFixed(1)))
        return list

    }
    else if(string === 'Delete City'){
        const delete1 = await DeleteCity(MainList[0])
        const city = delete1['Delete']
        const position = MainList[0].indexOf(city)
        MainList[0].splice(position,1)
        MainList[1].splice(position,1)
        MainList[2].splice(position,1)
        MainList[3].splice(position,1)
        return list

    }
}


module.exports = {
    Data,
    MainList
}