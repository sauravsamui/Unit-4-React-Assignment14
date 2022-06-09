import {useDispatch,useSelector} from "react-redux"
import { COUNTER_DECREMENT,COUNTER_INCREMENT,INCREMENTBY_VALUE,DECREMENTBY_VALUE,MULTIPLYBY_VALUE,DIVIDEBY_VALUE } from "./store/action.types";
import './App.css';
import { useRef } from "react";
import styles from "./store/counter.module.css"

function App() {
  const ref = useRef(0)
 
  const dispatch = useDispatch()
  const count = useSelector((state)=>state)

  return (
    <div className="App">
      <h1>Counter: {count}</h1>
      <div className={styles.btn1Div}>
      <button className={styles.btn1} onClick={()=>{dispatch({type:COUNTER_DECREMENT})}}>-</button>
      <button className={styles.btn1} onClick={()=>{dispatch({type:COUNTER_INCREMENT})}}>+</button>
      </div>
      <div>
      <input className={styles.input} type="number" placeholder="enter number" onChange={(e)=>{ref.current=e.target.value}}/>
      <br/>
      <div className={styles.btn2Div}>
      <button className={styles.btn} onClick={()=>{dispatch({type:INCREMENTBY_VALUE,payload:ref.current})}}>increment by input</button>
      <button className={styles.btn} onClick={()=>{dispatch({type:DECREMENTBY_VALUE,payload:ref.current})}}>decrement by input</button>
      <button className={styles.btn} onClick={()=>{dispatch({type:DIVIDEBY_VALUE,payload:ref.current})}}>divide by input</button>
      <button className={styles.btn} onClick={()=>{dispatch({type:MULTIPLYBY_VALUE,payload:ref.current})}}>multiply by input</button>
      </div>
         
      </div>
    </div>
   
  );
}

export default App;
