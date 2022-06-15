import CreateCookies from "./CreateCookies";
import CookiesTable from "./CookiesTable";
const Main = ({ handleForm, data, dailyHourlyTotal, deleteLocation }) => {
  return (
    <main className="flex flex-col items-center justify-center pb-16">
      <CreateCookies handleForm={handleForm} />
      <CookiesTable
        cookiesData={data}
        dailyHourlyTotal={dailyHourlyTotal}
        deleteLocation={deleteLocation}
      />
    </main>
  );
};
export default Main;
