//function to generate random numeric values
var randomNumber = function(min, max) {
    var value = Math.floor(Math.random() * (max - min + 1) + min);

    return value;
}

var fightOrSkip = function () {
    //asl player if they'd like to fight or skip using fightOrSkip function
    var promptFight = window.prompt('Would you like to FIGHT or SKIP this battle? Enter "FIGHT" or "SKIP" to choose');

    //Enter the conditional recursive function call here!
    if (promptFight === "" || promptFight === null) {
        window.alert("You need to provide a valid answer! Please try again.");
        return fightOrSkip();
    }

    promptFight = promptFight.toLowerCase();

    //If player picks skip confirm and the stop loop
    if (promptFight === "skip" || promptFight === "SKIP") {
        //confirm player wants to skip
        var confirmSkip = window.confirm("Are you sure you'd like to quit?");

        //if yes (true), leave fight
        if (confirmSkip) {
            window.alert;(playerInfo.name + " has decided to skip this fight. Goodbye!");
            playerInfo.money = Math.max (0, playerInfo.money - 10);

            return true;
        }
        shop();
    }
    return false;
}

var fight = function (enemy) {
    //repeat and execute as long as the enemy robot is alive
    while (playerInfo.health > 0 && enemy.health > 0) {
        if (fightOrSkip()) {
            //if true, leave fight by breaking loop
            break;
        }

        /*Subtract the value of 'playerInfo.attack' from the value of 'enemy.health' 
        and use that result to update the value in the `enemy.health` variable*/
        //generate random damage based on player's attack power
        var damage = randomNumber(playerInfo.attack-3, playerInfo.attack);

        enemy.health = Math.max(0, enemy.health - damage);

        //Log a resulting message to the console so we know it worked
        console.log(
            playerInfo.name + " attacked " + enemy.name + ". " + enemy.name + " now has " + enemy.health + " health remaining."
        );

        //check enemy's health
        if (enemy.health <= 0) {
            window.alert(enemy.name + " has died!");

            //award player money for winning
            playerInfo.money = playerInfo.money + 20;
            break;

        } else {
            window.alert(enemy.name + " still has " + enemy.health + " health left.");
        }

        /*Subtract the value of `enemy.attack` from the value of `playerInfo.health` 
        and use that result to update the value in the `playerInfo.health` variable.*/
        var damage = randomNumber(enemy.attack-3, enemy.attack);

        playerInfo.health = Math.max(0, playerInfo.health - damage);

        //Log a resulting message to console so we know it worked
        console.log(
            enemy.name + " attacked " + playerInfo.name + ". " + playerInfo.name + " now has " + playerInfo.health + " health remaining."
        );

        //check player's health
        if (playerInfo.health <= 0) {
            window.alert(playerInfo.name + " has died!");
            break;
        } else {
            window.alert(playerInfo.name + " still has " + playerInfo.health + " health left.");
        }
    }
};

//function to start a new game
var startGame = function () {
    //reset player stats
    playerInfo.reset();

    for (var i = 0; i < enemyInfo.length; i++) {
        if (playerInfo.health > 0) {
            window.alert("Welcome to Robot Gladiators! Round " + (i + 1));
        
            var pickedEnemyObj = enemyInfo[i];

            pickedEnemyObj.health = randomNumber(40,60);

            //debugger;

            fight(pickedEnemyObj);

            //if we're not at the last enemy in the array
            if(playerInfo.health > 0 && i < enemyInfo.length -1) {
                //ask if player wants to shop before round
                var storeConfirm = window.confirm("The fight is over, visit the store before the next round?");
                shop();

                //if yes, take them to the store()
                if(storeConfirm){
                    shop();
                }
            }
        }
        else {
            window.alert("You have lost your robot in battle! Game Over!");
            break;
        }
    }

    //play again
    endGame();
};

//function to end the entire game
var endGame = function() {
    window.alert("The game has now ended. Let's see how you did!")
    
    //if player is still alive, player wins!
    if(playerInfo.health > 0) {
        window.alert("Great job, you've survived the game! You now a score of " + playerInfo.money + ".");
    }
    else{
        window.alert("You've lost your robot in battle.");
    }

    //as player if they'd like to play again
    var playAgainConfirm = window.confirm("Would you like play again?");

    if(playAgainConfirm) {
        //restart game
        startGame();
    }
    else{
        window.alert("Thank you for play Robot Gladiators! Come back soon!");
    }
};

//function to shop between battles
var shop = function() {
    //ask player what they'd like to do
    var shopOptionPrompt = window.prompt(
        "Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one: 'REFILL', 'UPGRADE' or 'LEAVE' to make a choice."
    );

    //use switch to carry out action
    switch (shopOptionPrompt) {
        case "REFILL": //new case
        case "refill":
            playerInfo.refillHealth();
            break;
        case "UPGRADE":
        case "upgrade":
            playerInfo.upgradeAttack();
            break;
        case "LEAVE":
        case "leave":
            window.alert("Leaving the store.");
            break;
        default:
            window.alert("You did not pick a valid option. Try again.");

            // call shop() again to force player to pick a valid option
            shop();
            break;
    }
};

//function to set name
var getPlayerName = function() {
    var name = "";
    while (name === "" || name === null){
        name = prompt("What is your robot's name?");
    }

    console.log("Your robot's name is + name");
    return name;
};

var playerInfo = {
    name: getPlayerName(),
    health: 100,
    attack: 10,
    money: 10,
    reset: function(){
        this.health = 100;
        this.money = 10;
        this.attack = 10;
    },
    refillHealth: function(){
        if(this.money >=7) {
            window.alert("Refilling player's health by 20 for 7 dollars");
            this.health += 20;
            this.money -= 7;
        }
        else {
            window.alert("You don't have enough money!")
        }
    },
    upgradeAttack: function(){
        if (this.money >=7) {
            window.alert("Upgrading player's attack by 6 for 7 dollars.");
            this.attack += 6;
            this.money -= 7;
        }
        else{
            window.alert("You don't have enough money!");
        }
    }
};

var enemyInfo = [
    {
        name: "Roborto",
        attack: randomNumber(10,14)
    },
    {
        name: "Amy Android",
        attack: randomNumber(10,14)
    },
    {
        name: "Robo Trumble",
        attack: randomNumber(10,14)
    }
];

console.log(enemyInfo);
console.log(enemyInfo[0]);
console.log(enemyInfo[0].name);
console.log(enemyInfo[0]['attack']);

//start game when page loads
startGame();
