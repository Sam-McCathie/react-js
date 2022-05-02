import {toHaveStyle} from "@testing-library/jest-dom/dist/matchers";
import React from "react";

const Basics = () => {
  class Character {
    //if no argument is passed when creating class it will default to 100
    constructor(initialHp = 100) {
      // set a value e.g. hp
      this.hp = initialHp;
    }

    // initialise hardcoded value
    alive = true;

    // call this method with the "this" and can therefore update the value of hp
    updateHp(amount) {
      const calc = this.hp + amount;
      if (calc <= 0) {
        this.hp = 0;
        this.alive = false;
      } else {
        this.hp = calc;
      }
    }
  }

  class Enemy extends Character {
    constructor(hp, lootToDrop) {
      super(hp);
      this.lootToDrop = lootToDrop;
    }
  }

  class Hero extends Character {
    constructor(hp) {
      super(hp);
    }

    inventory = [];

    defeatEnemy(enemy) {
      if (enemy.lootToDrop) {
        this.inventory.push(enemy.lootToDrop);
      }
      enemy.updateHp(enemy.hp * -1);
    }
  }

  const enemy = new Enemy(25, "Cheese Burger");
  const sammy = new Hero(9001);
  console.log(enemy, sammy);

  sammy.updateHp(999); // heal -> calling method
  console.log(sammy);

  sammy.defeatEnemy(enemy);
  console.log(enemy);
  console.log("My inventory:", sammy.inventory);

  return (
    <div>
      <h1>Basics</h1>
      <p>Review code</p>
    </div>
  );
};

export default Basics;
