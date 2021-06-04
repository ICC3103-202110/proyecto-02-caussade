//const {printTable} = require('./console-table-printer')
const chalk = require('chalk')
const figlet = require('figlet')

function getTitle(){
    return chalk.blue(
        figlet.textSync(
            'Weather app',
            {
                horizontalLayout: 'full',
                font: 'ogre'
            }
        )
    )
}


function Table(name,temp,max,min){
    var Table1 = [
    {"Name": name, "Temp": temp,
    "Max": max, "Min": min},
    ]
    return Table1
}










module.exports = {
    Table,
    getTitle
}
