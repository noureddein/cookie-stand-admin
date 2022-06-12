import Header from "./Header";
import Footer from "./Footer";
import RenderHead from "./RenderHead";
import CookiesTable from "./components/CookiesTable";

const Details = () => {
  return (
    <>
      <RenderHead title="Details" />
      <Header />
      <CookiesTable />
      <Footer />
    </>
  );
};

export default Details;
