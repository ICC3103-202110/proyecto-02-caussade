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
    else if(string === 'Update City'){
        const update = await UpdateCity(MainList[0])
        const city = update['Update']
        const position = MainList[0].indexOf(city)
        MainList[1].splice(position,1)
        MainList[2].splice(position,1)
        MainList[3].splice(position,1)
        const Temp = Math.floor((Math.random()*30) + 1) + (Math.random()*1 + 0);
        const Max = Math.floor((Math.random()*30) + 1) + (Math.random()*1 + 0);
        const Min = Math.floor((Math.random()*30) + 1) + (Math.random()*1 + 0);
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