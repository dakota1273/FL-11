class Fighter {
    constructor({name, damage, agility, hp}) {
        this._name = name;
        this._damage = damage;
        this._agility = agility;
        this._hp = hp;
        this._wins = 0;
        this._losses = 0
    }

    getName() {
        return this._name;
    }

    getDamage() {
        return this._damage;
    }

    getAgility() {
        return this._agility;
    }

    getHealth() {
        return this._hp;
    }

    attack(Fighter) {
        const percent = 100;
        const separation = 100;
        let success = (percent - Fighter.getAgility()) / separation;

        if (Math.random() < success) {
            console.log(this.getName() + ' attack missed')

        } else {
            console.log(this.getName() + ' make ' + this.getDamage() + ' damage to ' + Fighter.getName());
            Fighter.dealDamage(this.getDamage());
        }
    }

    heal(hp) {
        const MAX_HP = 100;
        if (this._hp + hp <= MAX_HP) {
            this._hp = this._hp + hp;
        }
    }

    dealDamage(amount) {
        this._hp = this._hp - amount;
    }

    addWin() {
        this._wins = this._wins + 1;
    }

    addLoss() {
        this._losses = this._losses + 1;
    }

    getWins() {
        return this._wins;
    }

    getLosses() {
        return this._losses;
    }

    logCombatHistory() {
        return 'Name: ' + this.getName() + ' Wins: ' + this.getWins()+ ' Losses: ' + this.getLosses();
    }
}

const battle = (Fighter1, Fighter2) => {
    const fighter1Hp = Fighter1.getHealth();
    const fighter2Hp = Fighter2.getHealth();

    if (fighter1Hp <= 0) {
        console.log(Fighter1.getName() + ' is dead and cant fight')
    }

    if (fighter2Hp <= 0) {
        console.log(Fighter2.getName() + ' is dead and cant fight')
    }

    if (fighter1Hp > 0 && fighter2Hp > 0) {

        while (fighter1Hp > 0 && fighter2Hp > 0) {

            if (fighter1Hp > 0 ) {
                Fighter1.attack(Fighter2);
                if (Fighter2.getHealth() <= 0) {
                    Fighter1.addWin();
                    Fighter2.addLoss();
                    break;
                }
            }

            if (fighter2Hp > 0) {
                Fighter2.attack(Fighter1);
                if (Fighter1.getHealth() <= 0) {
                    Fighter1.addLoss();
                    Fighter2.addWin();
                    break;
                }
            }
        }

        console.log(Fighter1.getHealth());
        console.log(Fighter2.getHealth());
        console.log(Fighter1.logCombatHistory());
        console.log(Fighter2.logCombatHistory());
    }
}

// передача данных в js (обьекты по ссылке, примитивы по значению)


const fighter1 = new Fighter({
    name: 'John',
    damage: 20,
    agility: 25,
    hp: 100
});
const fighter2 = new Fighter({
    name: 'Jim',
    damage: 10,
    agility: 40,
    hp: 120
});

battle(fighter1, fighter2);
battle(fighter1, fighter2);