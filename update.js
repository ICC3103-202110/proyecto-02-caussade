const {SelectAction, AddCity,
    UpdateCity,DeleteCity} = require('./view')

var EList = []


async function Data(string, list){
    if(string === 'Add City'){
        //console.log("a")
        const add = await AddCity()
        //console.log(add)
        const city = add['Add']
        console.log(city)
        list.push(city)
        console.log(list)
        return list
    }
}


module.exports = {
    Data,
    EList
}