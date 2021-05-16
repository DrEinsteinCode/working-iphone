
    
function turnOn() {
    document.getElementById('screenId').style.backgroundColor = '#51abff';
    document.body.style.backgroundColor = '#eedb33';

    document.getElementById('homescreenId').style.opacity = 1;
    document.getElementById('rectangle2Id').style.opacity = 0.4;
}  

function turnOff() {
    document.getElementById('screenId').style.backgroundColor = '#333';
    document.body.style.backgroundColor = '#ee6e33';

    document.getElementById('homescreenId').style.opacity = 0;
    document.getElementById('rectangle2Id').style.opacity = 0;
}