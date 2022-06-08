import Header from "./Header";
import Footer from "./Footer";
import RenderHead from './RenderHead'
import CookiesTable from "./components/CookiesTable";

const Details=()=>{
    const dataInLocalStorage =  window.localStorage.getItem('cookies')
    console.log(dataInLocalStorage)
    return(
        <> 
            <RenderHead title="Details"/>
            <Header/>
            <CookiesTable />
            <Footer/>
        </>
    )
}

export default Details;