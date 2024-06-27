#! /usr/bin/env node
import inquirer from "inquirer";
class Hero {
    name;
    health = 100;
    constructor(name) {
        this.name = name;
    }
    decreaseHealth() {
        this.health -= 20;
    }
    increaseHealth() {
        this.health = 100;
    }
}
// step 2
class Enemy {
    name;
    health = 100;
    constructor(name) {
        this.name = name;
    }
    decreaseHealth() {
        this.health -= 20;
    }
    increaseHealth() {
        this.health = 100;
    }
}
// step 3 heero name 
async function main() {
    const { heroName } = await inquirer.prompt([
        {
            type: "input",
            name: "heroName",
            message: "Enter your Hero NAme"
        }
    ]);
    const { enemyType } = await inquirer.prompt([
        {
            type: "list",
            name: "enemyType",
            choices: ["alien", "witch", "zombie"],
            message: "Select the enemy you fightwith"
        }
    ]);
    //step 4 battle field 
    const hero = new Hero(heroName);
    const enemy = new Enemy(enemyType);
    console.log(`${hero.name} v/s ${enemy.name}`);
    // step 4 action
    do {
        const { action } = await inquirer.prompt([
            //action object
            {
                type: "list",
                name: "action",
                choices: ["attack", "defend", "range target", "run"],
                message: "choose the attack type to perform the action"
            }
        ]);
        // step 5 switch command
        switch (action) {
            case "attack":
                const randomnum = Math.random();
                if (randomnum > 0.5) {
                    hero.decreaseHealth();
                    console.log(`${hero.name} health: ${hero.health}`);
                    console.log(`${enemy.name} health: ${enemy.health}`);
                    if (hero.health <= 0) {
                        console.log("you loss! try again");
                        return;
                    }
                }
                else {
                    enemy.decreaseHealth();
                    console.log(`${hero.name} health: ${hero.health}`);
                    console.log(`${enemy.name} health: ${enemy.health}`);
                    if (enemy.health <= 0) {
                        console.log("congratulation!you won");
                        return;
                    }
                }
                break;
        }
    } while (true);
}
main();
