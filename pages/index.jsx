import { useState, useEffect } from "react";
import Header from "./Header";
import Main from "./Main";
import RenderHead from "./RenderHead";
import Footer from "./Footer";
import { getHourlyCookies, hours } from "../data";

const Home = () => {
  const [data, setData] = useState([]);
  const [totalOfTotal, setTotalOfTotal] = useState(0);
  const [hourlyTotal, setHourlyTotal] = useState({});
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

  const handleForm = (e) => {
    e.preventDefault();
    const getCookieStand = {};
    getCookieStand["location"] = e.target.location.value;

    const minCostumer = e.target.minCostumer.value;
    const maxCostumer = e.target.maxCostumer.value;
    const avgCookie = e.target.avgCookie.value;

    const { hourlyCookies, totalCookiesDaily } = getHourlyCookies(
      maxCostumer,
      minCostumer,
      avgCookie
    );
    getCookieStand["cookiesPerHour"] = hourlyCookies;
    getCookieStand["totalCookiesDaily"] = totalCookiesDaily;

    setTotalOfTotal(totalOfTotal + totalCookiesDaily);
    setData(data.concat(getCookieStand));
  };

  function getHourlyTotals(data) {
    data.forEach((item) => {
      for (let i = 0; i < item["cookiesPerHour"].length; i++) {
        dailyHourlyTotal[hours[i]] += item["cookiesPerHour"][i];
      }
    });
    return dailyHourlyTotal;
  }

  useEffect(() => {
    setHourlyTotal(getHourlyTotals(data));
  }, [data]);

  const deleteLocation = (id) => {
    data.splice(id, 1);
    setData([...data]);
  };

  return (
    <>
      <RenderHead title="Cookie Stand Admin" />
      <Header />
      <Main
        handleForm={handleForm}
        data={data}
        dailyHourlyTotal={hourlyTotal}
        deleteLocation={deleteLocation}
      />
      <Footer total_locations={data.length} />
    </>
  );
};

export default Home;
