# 🌤️ Weather Dashboard

A beautiful and fully functional weather dashboard that fetches real-time weather data from the OpenWeatherMap API. Get current weather, 5-day forecasts, and hourly predictions for any city in the world.

## Features

✨ **Current Weather Display**
- Real-time temperature, weather description, and "feels like" temperature
- High and low temperatures
- Current weather icon from OpenWeatherMap

📊 **Detailed Weather Information**
- Humidity percentage
- Wind speed (m/s)
- Atmospheric pressure (hPa)
- Visibility (km)
- Cloud cover percentage

🔮 **5-Day Forecast**
- Visual forecast cards for the next 5 days
- Weather conditions and temperature predictions

⏰ **Hourly Forecast**
- Horizontal scrollable hourly forecast
- Next 24 hours (8 data points at 3-hour intervals)

🔍 **Smart Search**
- Search for any city worldwide
- Auto-complete suggestions as you type
- City and country display

📍 **Location Services**
- Get weather for your current location
- Uses browser's geolocation API

🎨 **Responsive Design**
- Works perfectly on desktop, tablet, and mobile devices
- Beautiful gradient backgrounds and smooth animations
- Dark mode optimized UI

🚀 **Performance**
- Smooth loading with loading spinner
- Error handling with user-friendly messages
- Optimized API calls

## Getting Started

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- Internet connection
- OpenWeatherMap API key (free tier available)

### Setup

1. **Clone or download this repository**
   ```bash
   git clone https://github.com/Razhy12/code-with-hassan-portfolio.git
   cd code-with-hassan-portfolio
   ```

2. **Get a Free API Key**
   - Visit [OpenWeatherMap](https://openweathermap.org/api)
   - Sign up for a free account
   - Generate a new API key from your account dashboard

3. **Configure API Key**
   - Open `script.js`
   - Replace `const API_KEY = 'demo'` with your actual API key:
     ```javascript
     const API_KEY = 'your_actual_api_key_here';
     ```

4. **Open in Browser**
   - Double-click `index.html` or open it with your preferred browser
   - Or use a local server (recommended):
     ```bash
     # Using Python 3
     python -m http.server 8000
     
     # Using Node.js http-server
     npx http-server
     ```
   - Visit `http://localhost:8000` in your browser

## How to Use

1. **Search by City**
   - Type a city name in the search box
   - Click the "Search" button or press Enter
   - Select from auto-complete suggestions if desired

2. **Use Your Location**
   - Click the "Use My Location" button
   - Allow browser permission to access your location
   - Weather for your location will display automatically

3. **View Weather Details**
   - Current weather information is displayed immediately
   - Scroll down to see 5-day forecast and hourly forecast
   - Hover over cards for interactive effects

## File Structure

```
code-with-hassan-portfolio/
├── index.html          # HTML structure
├── styles.css          # Styling and animations
├── script.js           # JavaScript functionality
└── README.md           # Documentation
```

## API Reference

### Current Weather
```
GET /weather?q={city}&appid={API_KEY}&units=metric
```

### Forecast Data
```
GET /forecast?lat={lat}&lon={lon}&appid={API_KEY}&units=metric
```

### Geolocation
```
GET /geo/1.0/direct?q={city_name}&limit=5&appid={API_KEY}
```

## Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with gradients and animations
- **JavaScript (ES6+)** - Async/await, Fetch API
- **OpenWeatherMap API** - Real-time weather data
- **Font Awesome** - Icons
- **Geolocation API** - User location detection

## Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers

## Features to Add

- [ ] Save favorite cities
- [ ] Weather alerts
- [ ] Air quality index
- [ ] UV index information
- [ ] Sunrise/Sunset times
- [ ] Rain probability
- [ ] Dark/Light theme toggle
- [ ] Multiple language support
- [ ] Historical weather data
- [ ] Weather maps

## API Limits

**Free Tier Limits:**
- Up to 60 calls/minute
- Up to 1,000 calls/day
- 5-day forecast
- No historical data

For more details, visit [OpenWeatherMap Pricing](https://openweathermap.org/api)

## Troubleshooting

### "City not found" Error
- Check spelling of the city name
- Try with country code (e.g., "London, GB")
- Ensure your internet connection is active

### Location Not Working
- Allow browser permission for geolocation
- Check if your browser supports Geolocation API
- Ensure location services are enabled on your device

### API Key Error
- Verify API key is correctly copied
- Check that API key is active in OpenWeatherMap dashboard
- Allow some time for new API keys to become active (up to 10 minutes)

### No Data Displaying
- Check browser console for error messages
- Verify internet connection
- Ensure JavaScript is enabled
- Try clearing browser cache

## Performance Tips

1. Use HTTPS in production
2. Implement caching for recent searches
3. Consider using service workers for offline capability
4. Optimize API calls to reduce daily usage

## Security Notes

- Never commit your API key to version control
- Use environment variables in production
- Consider implementing a backend proxy for API calls
- Rate limit API requests on the client side

## License

This project is open source and available under the MIT License.

## Credits

- Weather data: [OpenWeatherMap](https://openweathermap.org/)
- Icons: [Font Awesome](https://fontawesome.com/)
- Developed by: Code With Hassan

## Support

For issues, suggestions, or contributions:
- Open an issue on GitHub
- Create a pull request with improvements
- Contact: [Your Contact Info]

## Live Demo

Visit the live dashboard: [Weather Dashboard](https://your-deployed-url.com)

---

**Made with ❤️ by Code With Hassan**
