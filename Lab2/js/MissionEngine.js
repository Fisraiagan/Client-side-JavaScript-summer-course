msg = document.querySelector('p');

let health = 65;
let ammo = 8;
let missionProgress = 40;
let shield = true;
let enemyNearby = true;


	
if(health < 30 && enemyNearby === true){
    msg.textContent = " CRITICAL ALERT: Immediate evacuation required!";
}
else if(ammo < 5 || shield === false){
    msg.textContent = "Warning: Low resources.";
}
else if(missionProgress > 1 && missionProgress < 70){
    msg.textContent = "Mission in progress.";
}
else if(missionProgress > 70 && enemyNearby === false){
    msg.textContent = "Approaching Mission Completion.";
    
}
else if(missionProgress === 100){
    msg.textContent = "Mission Complete successfully!";
}