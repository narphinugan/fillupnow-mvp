export async function getWeatherAlerts() {
  try {
    const res = await fetch('https://api.weather.gov/alerts/active');
    return await res.json();
  } catch {
    return { alerts: [] };
  }
}
