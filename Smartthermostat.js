
async function getWeather(city) {
    const apiKey = "DIN_API_NYCKEL";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        const temperature = data.main.temp;

        console.log(`Temperatur i ${city}: ${temperature}°C`);

        if (temperature > 25) {
            console.log("Above 25°C — Turning on AC");
        } else if (temperature >= 18 && temperature <= 25) {
            console.log("Perfect temperature — No action needed");
        } else {
            console.log("Below 18°C — Turning on Heater");
        }

    } catch (error) {
        console.log("Något gick fel:", error);
    }
}

getWeather("Växjö");


//"DIN_API_NYCKEL:"
/*
*Så här skaffar du en:
*skapa ett gratis konto
*Efter registrering får du en API-nyckel (en lång sträng av bokstäver/siffror, typ a1b2c3d4e5f6g7h8i9j0)
*Klistra in den istället för DIN_API_NYCKEL
*/