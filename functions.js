let { player } = require('../stored/userItems')

const ranDecision = () => {
    return Math.round(Math.random())
}

const healthUp = () => {
    if(player.health === 10){
        return player.health
    }else{
        return player.health++
    }
}

const healthDown = () => {
     if(player.health === 0){
        return player.health
     }else{
        return player.health--
     }
}


module.exports = {
    ranDecision,
    healthUp,
    healthDown,
}