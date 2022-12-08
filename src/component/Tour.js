import React, { useState } from 'react'


const Tour = ({id,image,name, info,price, removeTour}) => {

  const [readMore, setReadMore] = useState(false)

  const buttonClicked =() =>{
    setReadMore(!readMore)
  }
  return (
    <section className='flex flex-col items-center w-[40%] m-auto bg-white mt-10'>
   <img src={image} alt={name} className="w-full h-[20rem] object-cover"/>
   <footer className='p-7'>
    <div className='flex justify-between'>
    <h4 className='text-lg  text-stone-900 font-bold'>{name}</h4>
    <span className='bg-gray-200 p-1 rounded font-medium cursor-pointer text-stone-900' >${price}</span>
    </div>
 
    <p className='pt-3 text-sm text-slate-600'>{readMore? info: `${info.substring(0, 190)} ....`}</p>
   <button onClick={buttonClicked} className='text-green-900 font-semibold text-sm pb-3'>
    {readMore? "Show Less" : "Read More"}
   </button>
  
  
   <button className='border border-solid border-green-300 text-base text-teal-900 w-full font-semibold' onCLick={()=> removeTour(id)}>Not Interested</button>
   </footer>
    </section>
  )
}

export default Tour