const {SelectAction, AddCity,
    UpdateCity,DeleteCity} = require('./view')

var EList = []


async function Data(string, list){
    if(string === 'Add City'){
        const add = await AddCity()
        const city = add['Add']
        list.push(city)
        return list
    }
}


module.exports = {
    Data,
    EList
}