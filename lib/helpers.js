import http from "./httpService";

export const hours = [
  "6am",
  "7am",
  "8am",
  "9am",
  "10am",
  "11am",
  "12pm",
  "1pm",
  "2pm",
  "3pm",
  "4pm",
  "5pm",
  "6pm",
  "7pm",
];

export function getHourlyCookies(max, min, avg) {
  const hourlyCookies = [];
  let totalCookiesDaily = 0;
  for (let i = 0; i < 14; i++) {
    const cookiesPerHour = Math.floor(
      Math.abs(Math.random() * (max - min + 1) + min) * avg
    );

    hourlyCookies.push(cookiesPerHour);
    totalCookiesDaily += cookiesPerHour;
  }
  return { hourlyCookies, totalCookiesDaily };
}

export function regenerateData(data) {
  const getLocations = data.map((location) => {
    let { hourlyCookies, totalCookiesDaily } = getHourlyCookies(
      location.maxCostumer,
      location.minCostumer,
      location.avgCookie
    );
    return {
      id: location.id,
      location: location.location,
      cookiesPerHour: hourlyCookies,
      totalCookiesDaily,
    };
  });
  return getLocations;
}

export async function saveNewLocation(
  location,
  minCostumer,
  maxCostumer,
  avgCookie,
  config
) {
  try {
    await http.post(
      "/cookies-location",
      {
        location,
        minCostumer,
        maxCostumer,
        avgCookie,
      },
      config
    );
  } catch (error) {
    console.log(error);
  }
}

export function getHourlyTotals(data) {
  const dailyHourlyTotal = {
    "6am": 0,
    "7am": 0,
    "8am": 0,
    "9am": 0,
    "10am": 0,
    "11am": 0,
    "12pm": 0,
    "1pm": 0,
    "2pm": 0,
    "3pm": 0,
    "4pm": 0,
    "5pm": 0,
    "6pm": 0,
    "7pm": 0,
  };
  data.forEach((item) => {
    for (let i = 0; i < item["cookiesPerHour"].length; i++) {
      dailyHourlyTotal[hours[i]] += item["cookiesPerHour"][i];
    }
  });
  return dailyHourlyTotal;
}
