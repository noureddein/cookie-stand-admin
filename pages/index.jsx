import { useState, useEffect } from "react";
import {
  getHourlyCookies,
  regenerateData,
  saveNewLocation,
  getHourlyTotals,
} from "../lib/helpers";
import Header from "../components/Header";
import Main from "../components/Main";
import RenderHead from "./RenderHead";
import Footer from "../components/Footer";
import LoginForm from "./Login";
import http from "../lib/httpService";

const Home = () => {
  const [data, setData] = useState([]);
  const [totalOfTotal, setTotalOfTotal] = useState(0);
  const [hourlyTotal, setHourlyTotal] = useState({});
  const [token, setToken] = useState(null);
  const config = {
    headers: {
      authorization: `Bearer ${token}`,
    },
  };

  const handleForm = async (e) => {
    e.preventDefault();
    const getCookieStand = {};
    const location = e.target.location.value;
    const minCostumer = e.target.minCostumer.value;
    const maxCostumer = e.target.maxCostumer.value;
    const avgCookie = e.target.avgCookie.value;

    const { hourlyCookies, totalCookiesDaily } = getHourlyCookies(
      maxCostumer,
      minCostumer,
      avgCookie
    );
    getCookieStand["location"] = location;
    getCookieStand["cookiesPerHour"] = hourlyCookies;
    getCookieStand["totalCookiesDaily"] = totalCookiesDaily;

    setTotalOfTotal(totalOfTotal + totalCookiesDaily);
    setData(data.concat(getCookieStand));
    saveNewLocation(location, minCostumer, maxCostumer, avgCookie, config);
  };

  const deleteLocation = async (id) => {
    try {
      await http.delete(`cookies-location-details/${id}`, config);
      window.location.href = "/";
    } catch (error) {
      console.log(error);
    }
  };

  const getData = async () => {
    try {
      const res = await http.get("/cookies-location", config);
      const holder = regenerateData(res.data);
      setData(data.concat(holder));
    } catch (ex) {
      console.log(ex);
      if (ex.response.status == 401 && token) {
        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");
        window.location.href = "/";
      }
    }
  };

  useEffect(() => {
    setHourlyTotal(getHourlyTotals(data));
  }, [data]);

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken) setToken(accessToken);
  }, []);

  useEffect(() => {
    if (token) getData();
  }, [token]);

  return (
    <>
      <RenderHead title="Cookie Stand Admin" />
      <Header token={token} />
      {token ? (
        <Main
          handleForm={handleForm}
          data={data}
          dailyHourlyTotal={hourlyTotal}
          deleteLocation={deleteLocation}
        />
      ) : (
        <LoginForm />
      )}
      <Footer total_locations={data.length} />
    </>
  );
};

export default Home;
