var playerName = window.prompt("What is you robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

var enemyHealth = 50;
var enemyAttack = 12;
var enemyNames = ["Robort", "Amy Android", "Robo Trumble"];
//window.alert("Welcome to Robot Gladiators!");

var fight = function (enemyName) {
    //repeat and execute as long as the enemy robot is alive

    while (playerHealth > 0 && enemyHealth > 0) {
        var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");

        //if player chooses to skip
        if (promptFight === "skip" || promptFight === "SKIP") {
            //confirm player wants to skip
            var confirmSkip = window.confirm("Are you sure you'd like to quit?");

            //if yes (true), leave fight
            if (confirmSkip) {
                window.alert(playerName + " has decided to skip this fight. Goodbye!");
                //subtract money from playerMoney for skipping
                playerMoney = playerMoney - 10;
                console.log("playerMoney", playerMoney);
                break;
            }
        }

        /*Subtract the value of 'playerAttack' from the value of 'enemyHealth' 
        and use that result to update the value in the `enemyHealth` variable*/
        enemyHealth = enemyHealth - playerAttack;

        //Log a resulting message to the console so we know it worked
        console.log(
            playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
        );

        //check enemy's health
        if (enemyHealth <= 0) {
            window.alert(enemyName + " has died!");

            //award player money for winning
            playerMoney = playerMoney + 20;
            break;

        } else {
            window.alert(enemyName + " still has " + enemyHealth + " health left.");
        }

        /*Subtract the value of `enemyAttack` from the value of `playerHealth` 
        and use that result to update the value in the `playerHealth` variable.*/
        playerHealth = playerHealth - enemyAttack;

        //Log a resulting message to console so we know it worked
        console.log(
            enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
        );

        //check player's health
        if (playerHealth <= 0) {
            window.alert(playerName + " has died!");
            break;
        } else {
            window.alert(playerName + " still has " + playerHealth + " health left.");
        }
    }
};


//function to end the entire game
var endGame = function() {
    //if player is still alive, player wins!
    if(playerHealth > 0) {
        window.alert("Great job, you've survived the game! You now a score of " + playerMoney + ".");
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

//function to start a new game
var startGame = function () {
    //reset player stats
    playerHealth = 100;
    playerAttack = 10;
    playerMoney = 10;

    for (var i = 0; i < enemyNames.length; i++) {
        if (playerHealth > 0) {
            window.alert("Welcome to Robot Gladiators! Round " + (i + 1));
        

            var pickedEnemyName = enemyNames[i];

            enemyHealth = 50;

            //debugger;

            fight(pickedEnemyName);
        }
        else {
            window.alert("You have lost your robot in battle! Game Over!");
            break;
        }
    }

    //play again
    endGame();
};

//start game when page loads
startGame();
