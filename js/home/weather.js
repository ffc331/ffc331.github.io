var weatherElem = document.getElementById("weatherImg");
// var audioElem = document.getElementById("audioImg");

changeWeather();

function changeWeather() {
    let _id = Math.ceil(Math.random() * 9);
    weatherElem.src="res/home/weather/weather0"+_id+".svg";
}

var audioBoxElem = document.getElementById('audioBox');
const audio = new Audio("res/home/Icons/dog.mp3");

audioBoxElem.addEventListener('click', function (event) {
    // alert('Hi!');
    audio.play();
});