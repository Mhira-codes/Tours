
import { useEffect, useState } from 'react';
import './App.css';
import Loading from './component/Loading';
import Tours from './component/Tours';
const URL ='https://course-api.com/react-tours-project';
function App() {

const [loading, setLoading] = useState(true);
const [tourData,   setTourData] = useState([]);

const removeTour =(id) =>{
  const newTour = tourData.filter((tourItem)=> tourItem.id !== id)
}



const fetchData = async()=>{
  setLoading(true)


  try {
    const response = await fetch(URL);
    const data = await response.json() ;
    setLoading(false)
    setTourData(data)

  } catch (error) {
    setLoading(false)
    console.log(error)
  }


}
 

useEffect(()=>{
  fetchData()
},[])

if(loading){
  return (
    <div className="App bg-orange-100 w-full h-screen font-sans">
<Loading/>
    </div>
  );
}
  return(
  
    <div>
      <Tours tourData={tourData}/>
    </div>
  )


}

export default App;
