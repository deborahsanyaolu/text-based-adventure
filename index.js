const {
    playerName,
    selectVehicle,
    selectWeapon,
    whichWay,
    confirmQuit
} = require('./functions/inq')



let player = {
    playerName: "",
    playerVehicle: "",
    playerWeapon: "",
    playerHunger: 5,
    playerHealth:100,
    
}

const start = async () => {
    console.log('Hello, What is your name?')
    player.playerName = await playerName()
    console.log(`Hello ${player.playerName}`)
    console.log('Welcome, you have been set on a mission to collect a secret package from a secret location')
    pickVehicle()
};

const pickVehicle = async () => {
    console.log(`${player.playerName} it is crucial that you do not get yourself injured on your journey.`)
    console.log('The correct vehicle and weapon is needed in order for you to survive and remain in good health...')
    console.log('Please choose a vehicle.')
    player.selectVehicle = await selectVehicle()
    console.log('Good choice! You have chosen there!')
    pickWeapon()
}

const pickWeapon = async () => {
    console.log(`${player.playerName} it is now time to choose your weapon...`)
    console.log('Please choose a weapon.')
    player.selectWeapon = await selectWeapon()
    console.log(`Fantastic choice! You have chosen, ${player.playerWeapon}`)
    console.log(`${player.playerName} your current health is ${player.playerHealth}`)
    console.log('Now lets continue on our journey, you will be sent regular instructions in order to locate th secret location')
    console.log('.....')
    console.log(`***ring ring*** ${player.playerName} you have received a text message with instructions that reads *Go straight, do not turn back*`)
    dragonApproach()
}

const dragonApproach = async () => {
    console.log('...ROOOOOAR!!!!!!!')
    console.log(`${player.playerName} You are under attack by a dragon. QUICK, grab your ${player.selectWeapon} and take care of business`)
    console.log('Phew that was close! Now lets get a move on')
    pickWay()
}

const pickWay = async () => {
    console.log('BLAST! We have hit a path that leads to 2 different areas. There is no sign of any further instructions coming through! Time to use your initiative')
    console.log('Please choose whether to go left or right')
    let route = await whichWay();
    if (route != 'left'){
        console.log('You are turning left...')
    } else if (route != 'right'){
        console.log ('You are turning right, the secret package is in sight!')
        console.log('Congratulations! You found the secret package!')
        quit()
    } else {
        console.log(`Hey! ${player.playerName} We need you to pick a route, we are running out of time. Please go either left, right or random if you can't decide`)
        ranDecision()
    }

}

let quit = async () => {
    console.log ("Are you sure you want to quit?")
    let result = await confirmQuit()
    if(result){
        start()
    }
}

start();
