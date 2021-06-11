const {printTable} = require('console-table-printer')
const {Table, TableList, getTitle, SelectAction, AddCity,
        UpdateCity,DeleteCity} = require('./view')
const {Data,MainList} = require('./update')







async function app(){
        console.clear()
        let i = 0
        console.log(getTitle(getTitle))
        printTable(Table("","","",""))
        while (i<6){
            const Select = await SelectAction()
            const String1 = Select['select']
            const Check = await Data(String1,MainList)
            console.log(Check)
            console.clear()                             /*commented to watch values change*/
            console.log(getTitle(getTitle))
            printTable(TableList(MainList))
            i++;
    }
}

//app()
module.exports = {
    app
}
