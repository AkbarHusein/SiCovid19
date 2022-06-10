const API_ENDPOINT = {
  KASUS_HARIAN: `${CONFIG.BASE_URL_COVID}/countries/id?strict=true`,
  REGIONS: `${CONFIG.BASE_URL_VAKSIN}/regions`,
  LOCATION: (province, city) =>
    `${CONFIG.BASE_URL_VAKSIN}/locations/${province}?city=${city}`,
};
