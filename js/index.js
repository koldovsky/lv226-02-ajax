document.querySelector('#page-loaded').innerHTML = (new Date()).toLocaleString();

document.querySelector('button').addEventListener('click', getCarData);

function getCarData() {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var carData = JSON.parse(xhr.responseText);
            document.querySelector('#car-make').innerHTML = carData.make;
            document.querySelector('#car-model').innerHTML = carData.model;
            document.querySelector('#car-year').innerHTML = carData.year;
        }
    }
    xhr.open('GET', 'auto-data.json', true);
    xhr.send();
}
