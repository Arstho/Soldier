const soldier = {
    name: 'Халк',
    health: 10,
    weapon: {
        weapon_name: 'ПП',
        ammo: 30,
    },
    supplies: 3,
    fire: function () {
        this.weapon.ammo--
        console.log('бах-бах');
        if (this.weapon.ammo === 0) {
            console.log('обойма пуста. Перезаредитесь');
        }
    },
    recharge: function () {
        this.weapon.ammo = 30;
        this.supplies--;
        console.log('перезарядка...');
        if (this.supplies === 0) {
            console.log('не осталось припасов');
        }
    },
    hurt: function () {
        this.health--;
        if (this.health === 0) {
            console.log('Ты проиграл');
        }
    },
};
