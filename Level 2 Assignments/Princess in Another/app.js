
class Player {
    constructor(name, totalCoins, status, hasStar) {
        this.name = name
        this.totalCoins = totalCoins
        this.status = status
        this.hasStar = hasStar
    }
}

const status = ["Powered Up", "Big", "Small", "Dead"]
const luigi = new Player ("Luigi", 0, "Powered Up", false)

randomRange()

function randomRange() {
    let actionVal = Math.floor(Math.random() * 3)
    if (actionVal === 0) {
        gotHit()
    } else if (actionVal === 1) {
        gotPowerup()
    }else if (actionVal ===2){
        addCoin()
    }

}

function gotHit() {
    if(luigi.status === "Powered Up") {
        luigi.status = "Big"
    }else if (luigi.status === "Big") {
        luigi.status = "Small"
    }else if(luigi.status === "Small") {
        luigi.status = "Dead"
    }
    console.log(luigi.status)
}

function gotPowerup () {
    console.log("gotPowerup")    
    }


function addCoin() {
    luigi.totalCoins ++
    console.log(luigi.totalCoins)
}

function setName() {

}

function print() {
    return player.name
    return player.totalCoins
    return player.status
    return player.hasStar
}