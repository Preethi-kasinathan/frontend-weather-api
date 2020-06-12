var input = document.querySelector('.input_text');
var main = document.querySelector('#showPlace');
var temp = document.querySelector('.temp');
var desc = document.querySelector('.desc');
var clouds = document.querySelector('.clouds');
var button = document.querySelector('.submit');
var time = document.querySelector('.time')


button.addEventListener('click', function(name) {
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + input.value + '&appid=3d2f986f45064d5f6d21daa9109d5fb6')
        .then(response => response.json())
        .then(data => {
            var tempValue = data['main']['temp'];
            var nameValue = data['name'];
            var descValue = data['weather'][0]['description'];

            var today = new Date();
            var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

            main.innerHTML = nameValue;
            desc.innerHTML = descValue;
            temp.innerHTML = tempValue;
            today.innerHTML = today;

            input.value = "";

        })

    .catch(err => alert("Wrong city name!"));
})