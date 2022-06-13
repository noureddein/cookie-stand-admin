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

export function getHourlyTotals(data) {
  data.forEach((item) => {
    for (let i = 0; i < item["cookiesPerHour"].length; i++) {
      dailyHourlyTotal[hours[i]] += item["cookiesPerHour"][i];
    }
  });
  return dailyHourlyTotal;
}
