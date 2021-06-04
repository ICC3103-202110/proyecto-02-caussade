const {printTable} = require('console-table-printer')
const {Table, getTitle, SelectAction, AddCity,
        UpdateCity,DeleteCity} = require('./view')
const {Data,EList} = require('./update')


const TestList = ['hola','chao','hola']
//const list1 = []

async function app(){
        console.clear()
        console.log(getTitle(getTitle))
        printTable(Table(1,2,3,4))
        const Select = await SelectAction()
        const String1 = Select['select']
        const Check = Data(String1,EList)
}

    /*const Add = await AddCity()
    const Delete = await DeleteCity(TestList)
    const Update = await UpdateCity(TestList)*/
app()