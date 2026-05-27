msg = document.querySelector('p');

let health = 65;
let ammo = 8;
let missionProgress = 40;
let shield = true;
let enemyNearby = true;


	
if(health < 30 && enemyNearby === true){
    msg.textContent = " CRITICAL ALERT: Immediate evacuation required!";
}
