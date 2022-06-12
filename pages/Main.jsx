import CreateCookies from "./components/CreateCookies";
import CookiesTable from "./components/CookiesTable";

const Main = ({ handleForm, data }) => {
  // console.log("from main component", data);
  return (
    <main className="flex flex-col items-center justify-center pb-16">
      <CreateCookies handleForm={handleForm} />
      <CookiesTable cookiesData={data} />
    </main>
  );
};

export default Main;
