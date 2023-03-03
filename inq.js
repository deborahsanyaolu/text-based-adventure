const inquirer = require('inquirer')

const playerName = async () => {
    const { userName } = await inquirer.prompt({
        name: "userName",
        type:"input",
        message:"Type in your name"
    })
    if(!userName.match(/^[a-zA-Z]+/g)){
        return 'use letters only'
    }else {
        return userName
    }
}

const selectVehicle = async () => {
    let { vehicles } = await inquirer.prompt({
        name: "vehicles",
        type: "list",
        message: "Please choose a vehicle...",
        choices: [`car`, `bike`, `truck`, `van`]
    })
    return vehicles
}

const selectWeapon = async () => {
    let { weapons } = await inquirer.prompt({
        name: "weapons",
        type: "list",
        message: "Please choose a weapon...",
        choices: [`sword`, `tennis racket`, `shoe`, `hanger`]
    })
    return weapons
}

const energy = async () => {
    let { health } = await inquirer.prompt({
        name:"health",
        type:"list",
        message: ""
    })
}

const whichWay = async () => {
    let { route } = await inquirer.prompt({
        name:"route",
        type: "list",
        message: "Please select which route to take",
        choices: [`left`, `right`, 'random']
    })
    return route
}


let confirmQuit = async () => {
    const { quitChoice } = await inquirer.prompt({
        name: "quitChoice",
        type: "list",
        message: "Are you sure you want to quit?",
        choices: [
            {
                key: "a",
                name: "Yes, I'm sure",
                value: "yes",
            },
            {
                key: "b",
                name:"No, I want to keep playing",
                value: "no",
            },
        ],
    });
    if (quitChoice === "yes") return true;
    else return false;
};

module.exports = {
    playerName,
    selectVehicle,
    selectWeapon,
    whichWay,
    confirmQuit
}
