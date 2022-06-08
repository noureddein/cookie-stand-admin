import { useState, useEffect } from "react";
import Header from "./Header";
import Main from "./Main";
import RenderHead from "./RenderHead";
import Footer from "./Footer";

const Home = () => {
  const [data, setData] = useState([]);

  const handleForm = (e) => {
    e.preventDefault();
    const getCookieStand = {};

    getCookieStand["location"] = e.target.location.value;
    getCookieStand["minCostumer"] = e.target.minCostumer.value;
    getCookieStand["maxCostumer"] = e.target.maxCostumer.value;
    getCookieStand["avgCookie"] = e.target.avgCookie.value;

    setData(data.concat(getCookieStand));
  };

  useEffect(() => {
    localStorage.setItem("cookies", JSON.stringify([...data]));
  });

  return (
    <>
      <RenderHead title="Cookie Stand Admin" />
      <Header />
      <Main handleForm={handleForm} />
      <Footer />
    </>
  );
};

export default Home;
