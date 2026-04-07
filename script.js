const apiKey = "5a3c810ee67e3fd033837fe2eca4fcf3";

async function getWeather() {
  const city = document.getElementById("city").value;

  if(city === "") {
    alert("Please enter city name");
    return;
  }

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(url);
    
    if (!response.ok) {
      throw new Error("API Error");
    }

    const data = await response.json();

    document.getElementById("cityName").innerText = data.name;
    document.getElementById("temp").innerText = data.main.temp + " °C";
    document.getElementById("desc").innerText = data.weather[0].description;
    document.getElementById("humidity").innerText = "Humidity: " + data.main.humidity + "%";

  } catch (error) {
    console.log(error);
    alert("Error fetching data. Check API or city name.");
  }
}