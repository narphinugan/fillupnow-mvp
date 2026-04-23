export function calculateSpikeScore({ gasTrend, oilTrend, weatherRisk }) {
  let score = 0;

  score += gasTrend * 0.5;
  score += oilTrend * 0.3;
  score += weatherRisk * 0.2;

  const spikeProbability = Math.min(score, 0.95);

  return {
    spikeProbability,
    expectedIncrease: Math.round(spikeProbability * 28)
  };
}
