import { useState,useEffect } from "react";

const CookiesTable = () => {
  const [cookiesData,setCookiesData] = useState([])
  
  useEffect( ()=>{
    const data = JSON.parse(localStorage.getItem('cookies'))
    if(data){
      setCookiesData(data)
    }
    console.log(data)
  },[])

  return (
    <div className="m-4">
      <table className="border border-separate rounded-lg table-fixed border-slate-500">
        <thead>
          <tr>
            <th className="px-4 py-2 font-extrabold border rounded-lg font-display border-slate-600">
              Location
            </th>
            <th className="px-4 py-2 font-extrabold border rounded-lg font-display border-slate-600">
              Min. Costumers
            </th>
            <th className="px-4 py-2 font-extrabold border rounded-lg font-display border-slate-600">
              Max. Costumers
            </th>
            <th className="px-4 py-2 font-extrabold border rounded-lg font-display border-slate-600">
              Avg. Costumers
            </th>
          </tr>
        </thead>
        <tbody>
          {
          !cookiesData.length ? (
            <tr>
              <td
                colSpan="4"
                className="p-1 border rounded-lg border-slate-700"
              >
                No records
              </td>
            </tr>
          )  :
          (
            cookiesData.map((item, idx) => {
              return (
                <tr key={idx}>
                  <td className="p-1 border rounded-lg border-slate-700">
                    {item.location}
                  </td>
                  <td className="p-1 border rounded-lg border-slate-700">
                    {item.minCostumer}
                  </td>
                  <td className="p-1 border rounded-lg border-slate-700">
                    {item.maxCostumer}
                  </td>
                  <td className="p-1 border rounded-lg border-slate-700">
                    {item.avgCookie}
                  </td>
                </tr>
              );
            })
          )}
        </tbody>
      </table>
    </div>
  );
};

export default CookiesTable;
