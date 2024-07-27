document.addEventListener("DOMContentLoaded", () => {
    const apiKey = 'a44711624e7b15de5a767dd9e66e4833';
    const weatherButton = document.getElementById("get-weather");

    weatherButton.addEventListener("click", () => {
        const city = document.getElementById("city-name").value;
        if (city) {
            getWeather(city, apiKey);
        }
    });
});

async function getWeather(city, apiKey) {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error("Сеть не отвечаает");
        }
        const data = await response.json();
        if (data.name && data.main && data.weather) {
            document.getElementById("city").textContent = data.name;
            document.getElementById("temp").textContent = data.main.temp;
            document.getElementById("cond").textContent = data.weather[0].main; 
        } else {
            throw new Error("Неверные данные с сервера");
        }   
    } catch (error) {
        console.log("Ошибка при получании данных", error);
    }
}


