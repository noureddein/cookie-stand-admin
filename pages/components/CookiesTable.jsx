import { useState, useEffect } from "react";
import TableHead from "./TableHead";
import TableBody from "./TableBody";

const CookiesTable = ({ cookiesData }) => {
  // const [cookiesData, setCookiesData] = useState([]);
  // console.log("from Cookies Table component");

  // useEffect(() => {
  //   const data = JSON.parse(localStorage.getItem("cookies"));
  //   if (data) {
  //     setCookiesData(data);
  //   }
  //   console.log("3");
  // }, []);

  /*
  [{
    location: 'amman', 
    minCostumer: '5', 
    maxCostumer: '3', 
    avgCookie: '10'
    cookiesPerHour:[],
    totalCookiesDaily:0
  }]
*/
  let totalOfTotal = 0;

  console.log(totalOfTotal);
  return (
    <div className="m-4">
      <table className="border border-separate rounded-lg table-fixed border-slate-500">
        <TableHead />
        <TableBody cookiesData={cookiesData} />
      </table>
    </div>
  );
};

export default CookiesTable;
