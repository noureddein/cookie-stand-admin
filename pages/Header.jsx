import Image from 'next/image'
import Link from 'next/link'
// import CookiesTable from './components/CookiesTable'
// import {Route,Router} from 'next/router'
// import Details from './Details';

const Header=({data})=>{
    // const router = new Router()
    
    return(
        <>
            <header className='sticky top-0 flex items-center justify-between h-16 bg-green-400 '>
                <div className='flex flex-row items-center justify-center'>
                    <Image src='/logo.png' width='70' height='70'/>
                    <h2 className='text-4xl font-extrabold text-green-900 font-display'>Cookie Stand Admin</h2>
                </div>
                <div className='flex justify-around w-2/12 mr-4 text-lg font-bold text-green-900 font-display'>
                    
                    <Link  href='/'>
                        <a>Home</a>
                    </Link>

                    <Link href={{pathname:"/Details", query: data }} >
                        <a >Details</a>
                    </Link>
                    {/* <Router>
                        <Route component={Details}>
                        </Route>
                    </Router> */}
                </div>
            </header>
        </>
    )
}

export default Header;


{/* <Link href='/detail/[id].js' as={/detail/${item.id}}>
    <button id="bid-browse" className="w-24 my-2 font-bold text-white bg-yellow-600 rounded hover:bg-yellow-800">Bid Now</button>
  </Link> */}