import { useState, useEffect } from "react";
import Header from "./Header";
import Main from "./Main";
import RenderHead from "./RenderHead";
import Footer from "./Footer";

const Home = () => {
  const [data, setData] = useState([]);
  const [totalOfTotal, setTotalOfTotal] = useState(0);

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

  const getHourlyCookies = (max, min, avg) => {
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
  };
  console.log(totalOfTotal);
  // useEffect(() => {
  //   //! Depends on update the data from the form
  //   console.log("Updates depends on the form");
  // }, []);

  // useEffect(() => {
  //   //! Any change to the stat will this effect will run
  //   if (data.length != 0) {
  //     localStorage.setItem("cookies", JSON.stringify([...data]));
  //   }
  //   console.log("always will work");
  // });

  return (
    <>
      <RenderHead title="Cookie Stand Admin" />
      <Header />
      <Main handleForm={handleForm} data={data} />
      <Footer total_locations={data.length} />
    </>
  );
};

export default Home;
