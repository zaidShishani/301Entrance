'use strict'

let container = document.getElementById('carTable');
let table = document.createElement('table');
container.appendChild(table);

let form = document.getElementById('addForm')

let carM = ['bmw', 'ford', 'kia'];
let carLogobmw = '/img/cars/bmw.jpg';
let carLogoford = '/img/cars/ford.jpg';
let carLogokia = '/img/cars/kia.jpg';
let carList = [];
let max = 10000;
let min = 1000;
let carP = getRandomPrice(max ,min);



function getRandomPrice(max, min) {
    return Math.floor(Math.random() * max - min +1) + min
}

function carDatabmw(customerName, carM, carP) {    
    this.customerName = customerName;
    carM = 'bmw';
    this. carP = carP;
}

function carDataford(customerName, carM, carP) {    
    this.customerName = customerName;
    tcarM = 'ford';
    this. carP = carP;
}

function carDatakia(customerName, carM, carP) {    
    this.customerName = customerName;
    carM = 'kia';
    this. carP = carP;
}

function tHeadCreate() {
    let thead = document.createElement('thead');
    table.appendChild(thead);
    let th1 = document.createElement('th')
    thead.appendChild(th1);
    th1.textContent = 'Order Image';

    let th2 = document.createElement('th')
    thead.appendChild(th2);
    th2.textContent = 'Order Details';
}

function tBodyCreate() {


    let tbody = document.createElement('tbody');
    table.appendChild(tbody);

    if(carM === 'bmw'){
        let r1d1 = document.createElement('td');
        r1d1.textContent = carLogobmw; 
        tbody.appendChild(r1d1);

        let r2d2 = document.createElement('td');
        r2d2.textContent = carDatabmw; 
        tbody.appendChild(r2d2);
    }

    if(carM === 'ford'){
        let r2d1 = document.createElement('td');
        r2d1.textContent = carDataford; 
        tbody.appendChild(r2d1);

        let r2d2 = document.createElement('td');
        r2d2.textContent = carDataford; 
        tbody.appendChild(r2d2);
    }

    if(carM === 'bmw'){
        let r3d1 = document.createElement('td');
        r3d1.textContent = carDataford; 
        tbody.appendChild(r3d1);

        let r3d2 = document.createElement('td');
        r3d2.textContent = carDatakia; 
        tbody.appendChild(r3d2);
    }
    
}
function addStudent(event) {
    event.preventDefault();
    let customerName = event.target.customerName.value;
    let carM = event.target.carM.value;
    let carP = event.target.carP.value;
    let newCar = new Student(customerName, carM, carP);
    newCar.render();
    saveToLocalStorage();
}

function saveToLocalStorage() {
    let stringObj = JSON.stringify(carList);
    localStorage.setItem('std', stringObj);
}


tHeadCreate();
tBodyCreate()