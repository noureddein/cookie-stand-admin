import TableHead from "./TableHead";
import TableBody from "./TableBody";
import TableFooter from "./TableFooter";

const CookiesTable = ({ cookiesData, dailyHourlyTotal, deleteLocation }) => {
  return (
    <div className="m-8">
      <table className="border border-separate rounded-lg table-fixed border-slate-500">
        <TableHead />
        <TableBody cookiesData={cookiesData} deleteLocation={deleteLocation} />
        <TableFooter
          dailyHourlyTotal={dailyHourlyTotal}
          haveData={cookiesData.length == 0 ? false : true}
        />
      </table>
    </div>
  );
};

export default CookiesTable;
