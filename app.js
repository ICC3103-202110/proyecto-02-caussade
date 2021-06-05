const {printTable} = require('console-table-printer')
const {Table, TableList, getTitle, SelectAction, AddCity,
        UpdateCity,DeleteCity} = require('./view')
const {Data,MainList} = require('./update')







async function app(){
        console.clear()
        let i = 0
        console.log(getTitle(getTitle))
        //printTable(Table(1,2,3,4))
        printTable(Table("","","",""))
        while (i<4){
            const Select = await SelectAction()
            const String1 = Select['select']
            const Check = await Data(String1,MainList)
            console.log(Check)
            //console.clear()
            //console.log(getTitle(getTitle))
            printTable(TableList(MainList))
            i++;
    }
}

app()

