const {printTable} = require('console-table-printer')
console 
const {Table, getTitle} = require('./view')


function app(){
    console.clear()
    console.log(getTitle(getTitle))
    printTable(Table(1,2,3,4))


}


app()