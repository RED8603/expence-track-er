import { useState } from "react";
import { useSelector } from "react-redux"



export default function TransationHistory(){

       let data =  useSelector((initialHistory)=> (initialHistory.transationHistoryReducer))
       console.log(data);

       let [history , setHistory] = useState(data);

    return <div>

            <h3>
                Transation History
            </h3>

            

            {history.map((item , index)=>{

                return (<> <div className = 'history inc-exp-container ' >

              <div className = 'inline'>{item.transationAmount} </div> 
                <div className = 'inline  two'>{item.discription} </div> 

            </div>
            
                <button className= 'btn'> Delete  </button>
            </>
            ) ;
            })}

            

    </div>
}