//initalize Dom selector variables
let agentTypeBtn = document.querySelector('#agentBtn');
let locationBtn = document.querySelector('#locationBtn');
let weaponLoadoutBtn = document.querySelector('#weaponLoadoutBtn');
let objectiveBtn = document.querySelector('#objectiveBtn');
let riskLevelBtn = document.querySelector('#riskBtn');
let generateBtn = document.querySelector('#generateBtn');
let resetBtn = document.querySelector('#resetBtn');
let agentTypeOutput = document.querySelector('#agentTypeOutput');
let locationOutput = document.querySelector('#locationOutput');
let weaponLoadoutOutput = document.querySelector('#weaponLoadoutOutput');
let objectiveOutput = document.querySelector('#objectiveOutput');
let riskLevelOutput = document.querySelector('#riskLevelOutput');
let missionOutput = document.querySelector('#missionOutput');

//initalize arrays for each category
const agentType = ['Bravo', 'Ghost Recon', '007', 'Maverick','Eagle Eye'];
let locations = ["Arctic Base", "MegaCity", "Jungle Fortress", "Underwater Lab"];
const weaponLoadout = ['Assault Rifle', 'Sniper Rifle', 'silenced pistol'];
const objective = ['Reconnaissance', 'Elimination', 'Extraction'];
const riskLevel = ['Low', 'Medium', 'High'];

//Initialize index variables for each category
let indexAgentType = 0;
let indexLocation = 0;
let indexWeaponLoadout = 0;
let indexObjective = 0;
let indexRiskLevel = 0;

// This function takes an array and an index, increments the index,
//  and resets it to zero if it exceeds the array length. 
// It returns the new index.
function cycle(array, index) {
    index++;
    if (index >= array.length)
        {
            index = 0;
        } 
    return index;
}
