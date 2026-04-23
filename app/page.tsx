
'use client';

import { useEffect, useState } from 'react';

export default function Home() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('/api/predict')
      .then(r => r.json())
      .then(setData);
  }, []);

  return (
    <main>
      <h1>⛽ FillUpNow MVP v2</h1>

      {!data ? (
        <p>Loading real signal model...</p>
      ) : (
        <>
          <h2>Spike Probability: {(data.spikeProbability * 100).toFixed(0)}%</h2>
          <p>Expected Increase: {data.expectedIncrease}¢</p>
          <p>Confidence: {data.confidence}%</p>
        </>
      )}
    </main>
  );
}
