import React, {useState , useEffect} from "react";


function App() {
  const [ timer , setTimer ] = useState(0) ;
 
  useEffect(() => {
   setInterval(() => {
     setTimer(timer => timer + 1); 
   }, 1000)
  }, [])
  


  return(
    <div  className="Container my-5"> 
     <div className="card text-center my-5">
      <div className="card-body">
        <h1>Chrono With React With State </h1>
        <div className="my-5">
          <h2 className="my-5">{timer}</h2>
          <button className="btn btn-success mx-3" 
          onClick={() => setTimer(timer + 1)}
          disabled = {timer === 0}
          >Increment</button>

          
          
          <button className="btn btn-danger mx-3" 
          onClick={() => setTimer(timer - 1)}
          disabled = {timer === 0}>
            Decrement</button>
          
          
          
          <button className="btn btn-secondary mx-3"
           onClick={() => setTimer(0)}
           disabled = {timer === 0}>
            Reset</button>
        </div>
      </div>
     </div>
    
    </div>

  );
}

export default App;
