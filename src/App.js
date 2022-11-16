
import { useEffect, useState } from 'react';
import './App.css';
import Loading from './component/Loading';
const URL ='https://course-api.com/react-tours-project';
function App() {

const [loading, setLoading] = useState(true);


const fetchData = async() => {
  const response = await fetch(URL);
  const tourData = await response.json();
  console.log(tourData)
};


useEffect(()=>{
  fetchData()
},[])

if(loading){
  return (
    <div className="App bg-orange-200 w-full h-screen font-sans">
<Loading/>
    </div>
  );
}

}

export default App;
