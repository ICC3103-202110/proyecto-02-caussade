const {printTable} = require('console-table-printer')
const {Table, getTitle, SelectAction, AddCity,
        UpdateCity,DeleteCity} = require('./view')
const {Data,EList} = require('./update')


const TestList = ['hola','chao','hola']
//const list1 = []

async function app(){
        console.clear()
        let i = 0
        console.log(getTitle(getTitle))
        printTable(Table(1,2,3,4))
        while (i<2){
            const Select = await SelectAction()
            const String1 = Select['select']
            const Check = await Data(String1,EList)
            console.log(Check)
            //console.clear()
            //console.log(getTitle(getTitle))
            //printTable(Table(1,2,3,4))
            i++;
    }
}

    /*const Add = await AddCity()
    const Delete = await DeleteCity(TestList)
    const Update = await UpdateCity(TestList)*/
app()