
const chalk = require('chalk')
const figlet = require('figlet')
const inquirer = require('inquirer')



function getTitle(){
    return chalk.blue(
        figlet.textSync(
            'Weather app',
            {
                horizontalLayout: 'half',
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


function TableList(listName,ListTemp,ListMax,ListMin){
    var len = ListTemp.lenght
    i=0
    while (i<len){
        var Table2 = [
        {"Name": ListName[i], "Temp": ListTemp[i],
        "Max": ListMax[i], "Min": ListMin[i]}]
        i++
    }
    return Table2
}


function SelectAction(){
    return inquirer.prompt(
        [{
        type: 'list',
        name: 'select',
        message: 'Select action:',
        choices: ['Add City', 'Update City', 'Delete City'],
        default: 'Add City'
        }]
    )
}


function AddCity(){
    return inquirer.prompt(
        [{
        type: 'input',
        name: 'Add',
        message: 'Location?'
        }]
    )
}


function UpdateCity(list1){
    return inquirer.prompt(
        [{
        type: 'list',
        name: 'Update',
        message: 'Update City:',
        choices: list1
        }]
    )
}


function DeleteCity(list1){
    return inquirer.prompt(
        [{
        type: 'list',
        name: 'Delete',
        message: 'Delete City:',
        choices: list1
        }]
    )
}




module.exports = {
    Table,
    TableList,
    getTitle, 
    SelectAction,
    AddCity,
    UpdateCity,
    DeleteCity
}
