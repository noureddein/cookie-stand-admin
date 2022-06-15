import { hours } from "../../lib/helpers";
import { useState, useEffect } from "react";

const TableFooter = ({ dailyHourlyTotal, haveData }) => {
  const [dailyTotal, setDailyTotal] = useState(0);
  const getDailyTotal = () => {
    let total = 0;
    for (const hour in dailyHourlyTotal) {
      total += dailyHourlyTotal[hour];
    }
    return total;
  };

  useEffect(() => {
    setDailyTotal(getDailyTotal());
  }, [getDailyTotal]);

  return (
    <>
      {haveData && (
        <tfoot>
          <tr>
            <th className="px-4 py-2 font-extrabold border rounded-lg font-display border-slate-600">
              Total
            </th>
            {hours.map((hour, idx) => {
              return (
                <th
                  key={idx}
                  className="px-4 py-2 font-extrabold border rounded-lg font-display border-slate-600"
                >
                  {dailyHourlyTotal[hour]}
                </th>
              );
            })}
            <th
              colSpan="2"
              className="px-4 py-2 font-extrabold border rounded-lg font-display border-slate-600"
            >
              {dailyTotal}
            </th>
          </tr>
        </tfoot>
      )}
    </>
  );
};

export default TableFooter;
