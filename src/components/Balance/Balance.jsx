import { useSelector, useDispatch } from "react-redux";

import { useState, useEffect, useRef } from "react";

export default function () {
  let historyData = useSelector(
    (initialHistory) => initialHistory.transationHistoryReducer
  );
  console.log(historyData);

  let [transationHistory, setTransationHistory] = useState(historyData);

  let dispatch = useDispatch();
  let discription = useRef();
  let transation = useRef();

  let data = useSelector((initialBalance) => initialBalance.transationReducer);

  console.log(data);

  const [balance, setBalance] = useState(data);

  // useEffect(()=>{

  //     setBalance(data);

  // } , [data])

  return (
    <>
      <div>
        <h1>Balance Tracker App</h1>

        <h3> Current Balance </h3>
        <h1>
          {" "}
          {balance.balance} <span>$</span>
        </h1>

       
      </div>

      <div className="inc-exp-container ">
        <div className="money">
          <div className="plus">
            <label htmlFor="">INCOME</label>{" "}
            <h3>
              {" "}
              {balance.income} <span>$</span>
            </h3>
          </div>

          <div className="minus">
            <label htmlFor="">EXPENCE</label>{" "}
            <h3>
              {" "}
              {balance.expence} <span>$</span>
            </h3>
          </div>
        </div>
      </div>


      {/* {transation history} */}

      <div>
        <h3>Transation History</h3>

        { transationHistory.length==0 ? null :  transationHistory.map((item, index) => {
          return  (
            <>
              
              <div className="history inc-exp-container ">
                <div className="inline">{item.transationAmount} </div>
                <div className="inline  two">{item.discription} </div>
              </div>
              <button
                className="btn"
                  onClick={() => {
                    dispatch({
                    type: "DELETE_HISTORY",
                    payload: {
                      index: index,
                    },
                   });

                 

                  if (item.transationAmount < 0) {
                    dispatch({
                      type: "DELETE_EXPENCE",
                      payload: {
                        expence: item.transationAmount,
                      },
                    });
                  } else {
                    dispatch({
                      type: "DELETE_INCOME",
                      payload: {
                        income: item.transationAmount,
                      },
                    });
                  }
                  setTransationHistory([...historyData]);
                  setBalance(data);
                }
                
            
            
                  }
              >
              
                Delete
              </button>
            </>
          );
        })            }
      </div>

      {/* {new trasation0} */}

      <>
        <h3>New Transation</h3>
        <form
          action=""
          onSubmit={(event) => {

                dispatch({
                    type: "NEW_HISTORY",
                    payload: {
                      transationAmount: +transation.current.value,
                      discription: discription.current.value,
                    },
                  });

                  if (+transation.current.value < 0) {
                    dispatch({
                      type: "EXPENCE",
                      payload: {
                        expence: +transation.current.value,
                      },
                    });
                  } else {
                    dispatch({
                      type: "INCOME",
                      payload: {
                        income: +transation.current.value,
                      },
                    });
                  }
                  setTransationHistory([...historyData]);
            setBalance(data);
            event.preventDefault();
          }}
        >
          <h4 style={{ float: "left" }}>Discription</h4>
          <input ref={discription} required type="text" />

          <h4 style={{ float: "left" }}>Transation</h4>
          <input ref={transation} required type="number" />

          <button type="submit" className="btn">
            Do Transation
          </button>
        </form>
      </>
    </>
  );
}
