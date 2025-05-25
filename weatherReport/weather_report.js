function showweatherDetails(event) {
      event.preventDefault();
}

 const city = document.getElementById('city').value;
      const apiKey = '8bc9d22b61a1b9600b289cf9c5552b62'; // Замените 'YOUR_API_KEY' на ваш фактический API ключ
      const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}`;