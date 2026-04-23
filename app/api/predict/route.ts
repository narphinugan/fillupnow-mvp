
import { calculateSpikeScore } from '../../../lib/score';
import { getOilPrices } from '../../../lib/oil';
import { getWeatherAlerts } from '../../../lib/weather';

export async function GET() {
  const oil = await getOilPrices();
  const weather = await getWeatherAlerts();

  const oilTrend = oil?.price ? 0.7 : 0.5;
  const weatherRisk = weather?.alerts?.length ? 0.6 : 0.2;

  const result = calculateSpikeScore({
    gasTrend: 0.6,
    oilTrend,
    weatherRisk
  });

  return Response.json({
    ...result,
    confidence: Math.round(result.spikeProbability * 100)
  });
}
