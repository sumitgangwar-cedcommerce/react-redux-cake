import logo from './logo.svg';
import './App.css';
import { useDispatch , useSelector } from "react-redux";
import { storeReducer } from './index';
import { useEffect, useMemo, useRef } from 'react';

function App() {
  const dispatch = useDispatch()
  var err = useRef()
  const temp = useSelector(state => state)
  var t = useMemo(()=>{
    return <h1>Initial Number Of Cakes In Store = {temp.cake.value}</h1>
  },[])


  const myfun = ()=>{
    let t = dispatch(storeReducer.actions.buyCake(1))
    if(temp.cake.value===0){
      err.current.innerText="Can't Buy Stock is Over"
    }
  }

  // console.log(err.current)



  return (
    <div className="App">
      {t}
      <h1>Current Number Of Cakes In Store = {temp.cake.value} </h1>
      <button onClick={myfun}>Buy Cake</button>
      <h2 ref={err} style={{color:'red'}}></h2>
    </div>
  );
}

export default App;
