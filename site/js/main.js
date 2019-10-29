window.onload = () => {
    'use strict';

    if ('serviceWorker' in navigator) {
        navigator.serviceWorker
            .register('/site/sw.js');
    }
    
    getInfo();
}

var batteryDiv;
function getInfo(){
    navigator.getBattery().then(battery => {

        const c = this.currentLevel(battery);

        this.currentLevel(c);
        this.isCharging(battery);
        this.chargingTimeChange(battery);
        this.dischargingTimeChange(battery);

        battery.addEventListener('levelchange', () => {
            const level = this.currentLevel(battery);
            // //this.batteryStateRender(level);
            //  batteryDiv = document.querySelector("#battery");
            // batteryDiv.textContent = level;
        });

        battery.addEventListener('chargingchange', () => {
            this.isCharging(battery);
        });

        battery.addEventListener('chargingtimechange', () => {
            this.chargingTimeChange(battery);
        });

        battery.addEventListener('dischargingtimechange', () => {
            this.dischargingTimeChange(battery);
        });

    })
}

function currentLevel(b) {    

    var level = b.level ? (b.level * 100) + '%' : '';
    console.log(level);
    batteryDiv = document.querySelector("#battery");
    batteryDiv.textContent = level;
    return level;
}

function isCharging(b) {    
    console.log(b.charging ? 'Charging...' : 'Not charging');
    return b.charging;
}

function chargingTimeChange(b) {
    console.log(b.chargingTime);
}

function dischargingTimeChange(b) {
    console.log(b.dischargingTime);
}