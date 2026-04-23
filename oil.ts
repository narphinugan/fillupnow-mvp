export async function getOilPrices() {
  try {
    const res = await fetch('https://api.oilpriceapi.com/v1/prices/latest', {
      headers: {
        Authorization: `Token ${process.env.OIL_API_KEY || ''}`
      }
    });
    return await res.json();
  } catch {
    return { price: 75 };
  }
}
