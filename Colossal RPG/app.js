

let enemies = ["Big Bopper", "Red Roaster", "Slimmer"]
const button = document.getElementsByTagName("button")
let randEnemy = Math.floor(Math.random() * enemies.length)
const enemy = enemies[randEnemy]
const healthPoints = document.getElementById("healthPoints")
let heroHealth = healthPoints.innerText
let enemyHealth = 100
const heroHealthRemaining = heroHealth - getHit
const enemyHealthRemaining = enemyHealth - hitEnemy
const heroInventory = []
let key =Event.key
const form = document.form
const input = document.getElementsByTagName("input")
const player = form.textContent.value   
const name = form.fName.value
const nameGen = document.getElementById("namePlace")
const chanceValue = Math.random() 
const actionArea = document.getElementById("actionArea") 
const actionFrame = document.getElementById("actionFrame")
let attackHit = heroHealth - (Math.random() * 33)


form.addEventListener("submit", function(event)  {
    event.preventDefault()
    const name = form.fName.value
    form.fName.value = ""

    const playerName = document.getElementById("namePlace").textContent
        document.getElementById("namePlace").textContent = playerName.replace("Name Placeholder", name)
    
    
} )

document.addEventListener("keydown", (e) => {
    if (e.key === "w") {
        walk()
        
    }
})


function walk() {
    const chanceValue = Math.random()
    
    if (chanceValue <=.25 ) {
        let randEnemy = Math.floor(Math.random() * enemies.length)
        const enemyAttack = "You're being attacked by: " + enemy
        const frameName = document.getElementById("actionFrame")
            frameName.innerText = enemyAttack + " " + "(" + "Health :" + enemyHealth + ")"
            
            const attack = actionArea.addEventListener("click", (e) => {
               
               if(e.target.value === "run") {
                const evadeChance = Math.random()
                  if(evadeChance >.50) {
                    frameName.innerText = "You Have Escaped! w to keep walking"
                    return
                }else if (evadeChance <=.50) {
                    getHit()
                }
               }
               else if(e.target.value === "attack") {
                hitEnemy()
               }
               else if(e.target.value === "healthPot"){
                healthPot()
               }
            })
       
            }
        

            
        // append image for enemy?
 
     
     
     else if (chanceValue >.25) {
         return
     
      }

    }  

    function getHit() {
        let attackHit = heroHealth - (Math.random() * 30)
        healthPoints.innerText = attackHit
        heroHealth = healthPoints.innerText
            if (heroHealth <= 0) {
                const uhOh = document.getElementById("healthPoints")
                uhOh.innerText = "You have just died!  Refresh page to start again"
            }
        
        console.log(attackHit, healthPoints)
    }

    function hitEnemy() {
        const frameName = document.getElementById("actionFrame")
        const enemyAttack = "You're being attacked by: " + enemy

        let enHit = enemyHealth - (Math.random()* 40)
        enemyHealth = enHit
        frameName.innerText = enemyAttack + " " + "(" + "Health :" + enemyHealth + ")"

        getHit()
        if(enemyHealth <= 0) {
            heroInventory.push("Health Potion")
            frameName.innerText = enemyAttack + " " + "Has been killed"

        }
    }


    function healthPot() {
        if (heroInventory === undefined || heroInventory.length == 0) {
            return
        } else {
            let x = 50
            let y = Number(heroHealth) 
            let sum = x + y
            healthPoints.innerText = sum
        }
    }

    
