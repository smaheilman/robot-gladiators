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

var shop = function() {
    //ask player what they'd like to do
    var shopOptionPrompt = window.prompt(
        "Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one: 'REFILL', 'UPGRADE' or 'LEAVE' to make a choice."
    );

    //use switch to carry out action
    switch (shopOptionPrompt) {
        case "REFILL": //new case
        case "refill":
            if (playerMoney >= 7){
                window.alert("Refilling palyer's health by 20 for 7 dollars.");

                //increase health and decrease money
                playerHealth = playerHealth + 20;
                playerMoney = playerMoney -7;
            }
            else{
                window.alert("You don't have enough money!");
            }
            break;

        case "UPGRADE":
        case "upgrade":
            if (playerMoney >=7) {
                window.alert("Upgrading player's attack by 6 for 7 dollars.");

                //increase attach and decrease money
                playerAttack = playerAttack + 6;
                playerMoney = playerMoney -7;
            }
            else{
                window.alert("You don't have enough money!");
            }
             break;

        case "LEAVE":
        case "leave":
            window.alert("Leaving the store.");
            break;
        
        defualt:
            window.alert("You did not pick a valid option. Try again.");

            // call shop() again to force player to pick a valid option
            shop();
            break;
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

            //if we're not at the last enemy in the array
            if(playerHealth > 0 && i < enemyNames.length -1) {
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

//start game when page loads
startGame();
