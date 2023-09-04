const principle = document.querySelector('#input-amount');
const interset = document.querySelector('#interset-amount');
const tenure = document.querySelector('#input-months');
const calulate =  document.querySelector('#calculate');
const emi =document.querySelector('#emi');

console.log(principle, interset, tenure);

function calculateEMI(){

    if(principle.value == '' || interset.value == '' || tenure.value == ''){
        alert('Please enter valid values');
        return;

    }else{

        const p = principle.value;
        const r = interset.value  / 1200;
        const n = tenure.value;

        const emiValue = (p * r * (1 + r ) ** n) / ((1 + r ) ** n -1 );
        emi.textContent = emiValue.toFixed(2);
    }
}


calulate.addEventListener('click',calculateEMI);
