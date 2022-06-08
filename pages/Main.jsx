import CreateCookies from './components/CreateCookies'
import CookiesTable from './components/CookiesTable'


const Main=({handleForm,cookiesData})=>{
    return(
        <main className="flex flex-col items-center justify-center pb-16">
            <CreateCookies handleForm={handleForm} />
            <CookiesTable />
        </main>
    )
}

export default Main;