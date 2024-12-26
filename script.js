// const api_key = '863242cfc2c'
// const api_url = ''

// async function checkWheather() {
//     const response = await fetch(api_url+`&appid=${api_key}`)
//     let data = await response.json();
//     console.log(data)
//     document.querySelector(".city").innerHTML =data.name
//     document.querySelector(".temp").innerHTML =data.main.temp
//     document.querySelector(".humidity").innerHTML =data.main.humidity
//     document.querySelector(".wind").innerHTML =data.mainwind.speed
// }
// checkWheather()

// fetch('./weather.json')
//     .then(res => res.json())
//     .then(data => {
//         console.log(data);

//     })

let weather_mumbai = {
    city: 'Mumbai',
    temp: '82.4F',
    humidity: '90%',
    wind: '34 KM/H',
}
let weather_delhi = {
    city: 'delhi',
    temp: '85.4F',
    humidity: '95%',
    wind: '30 KM/H',
}
let weather_indore = {
    city: 'indore',
    temp: '80.1F',
    humidity: '93%',
    wind: '35 KM/H',
}
function weather_fun() {
    let temp = document.getElementById('temp')
    temp.textContent = weather_mumbai.temp
    let city = document.getElementById('city')
    city.textContent = weather_mumbai.city
    let humaid = document.getElementById('humaid_persentage')
    humaid.textContent = weather_mumbai.humidity
    let wind = document.getElementById('wind_speed')
    wind.textContent = weather_mumbai.wind
}
function take_input() {

}
