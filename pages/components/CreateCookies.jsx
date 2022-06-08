import React from 'react'  

class CreateCookie extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div className='w-2/6 mt-8 bg-green-700 rounded-xl font-display'>
                <form onSubmit={this.props.handleForm} >
                    <legend className='w-full p-4 text-2xl font-thin text-orange-300 bg-green-900 rounded-t-xl'>Create cookie stand</legend>
                    <fieldset className='flex flex-col p-4'>
                        <label htmlFor="location" className='pt-4 text-slate-200'>Location</label>
                        <input className='p-1 border-none rounded-md' type="text" name="location" id="location" />

                        <label htmlFor="minCostumer" className='pt-4 text-slate-200'>Min. costumers per hour</label>
                        <input className='p-1 border-none rounded-md' type="text" name="minCostumer" id="minCostumer" />

                        <label htmlFor="maxCostumer" className='pt-4 text-slate-200'>Max. Customers per Hour</label>
                        <input className='p-1 border-none rounded-md' type="text" name="maxCostumer" id="maxCostumer" />

                        <label htmlFor="avgCookie" className='pt-4 text-slate-200'>Avg. Cookies per sale</label>
                        <input className='p-1 border-none rounded-md' type="text" name="avgCookie" id="avgCookie" />

                        <button type='submit' className='w-2/6 p-1 m-auto mt-4 bg-green-900 rounded text-slate-200'>Create</button>
                    </fieldset>

                </form>
            </div>
        )
    }
}

export default CreateCookie