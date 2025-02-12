const tombolKonversi = document.querySelector('.tombol-konversi');
const tombolReset = document.querySelector('.tombol-reset');
const tombolReverse = document.querySelector('.tombol-reverse');
const except = document.querySelector('.exception');
const exceptBorder = document.querySelector('.textbox');

let labelCelcius = document.querySelector('label[for=input-celcius]');
let labelFahrenheit = document.querySelector('label[for=output-fahrenheit]');
let textCelcius = document.getElementById('input-celcius');
let textFahrenheit = document.getElementById('output-fahrenheit');
let caraKalkulasi = document.getElementById('cara-kalkulasi');

function konversiSuhu(){
    let value = textCelcius.value.trim();

    if(isNaN(value) || value === ""){
        except.classList.toggle('active-except');
        exceptBorder.classList.toggle('act-except');
        return;
    }

    if(!except.classList.contains('active-except')){
        except.classList.toggle('active-except');
        exceptBorder.classList.toggle('act-except');
    }

    if(labelCelcius.innerHTML.includes('Fahrenheit')) {
        textFahrenheit.value = ((parseFloat(value) - 32) * 5 / 9).toFixed(2);
        caraKalkulasi.value = `(${value}°F - 32) * 5/9 = ${textFahrenheit.value}°C`;
    }else {
        textFahrenheit.value = (parseFloat(value) * 1.8 + 32).toFixed(2);
        caraKalkulasi.value = `${value}°C * (9/5) + 32 = ${textFahrenheit.value}°F`;
    }
}

tombolKonversi.addEventListener('click', (e) => {
    e.preventDefault();
    konversiSuhu();
});

tombolReset.addEventListener('click', (e) => {
    e.preventDefault();
    textCelcius.value = "";
    textFahrenheit.value = "";
    caraKalkulasi.value = "";
});

tombolReverse.addEventListener('click', (e) => {
    e.preventDefault();

    if(!except.classList.contains('active-except')){
        except.classList.toggle('active-except');
        exceptBorder.classList.toggle('act-except');
    }

    let tempLabel = labelCelcius.innerHTML;
    labelCelcius.innerHTML = labelFahrenheit.innerHTML;
    labelFahrenheit.innerHTML = tempLabel;

    labelCelcius.setAttribute('for', textCelcius.id);
    labelFahrenheit.setAttribute('for', textFahrenheit.id);

    let tempValue = textCelcius.value;
    textCelcius.value = textFahrenheit.value;
    textFahrenheit.value = tempValue;

    if (textCelcius.value.trim() === "" && textFahrenheit.value.trim() === "") {
        caraKalkulasi.value = "";
        return;
    }

    konversiSuhu();
});

const tombolFkeC = document.querySelector('.f-ke-c');
const tombolCkeF = document.querySelector('.c-ke-f');
const toggleElements = document.querySelectorAll('.f-ke-c, .c-ke-f, .cara-c-f, .cara-f-c, .c-f, .f-c');

const toggleActive = () => toggleElements.forEach((el) => el.classList.toggle('active'));

tombolFkeC.addEventListener('click', toggleActive);
tombolCkeF.addEventListener('click', toggleActive);