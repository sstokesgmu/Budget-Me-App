//libraries
import { useState } from "react";
//styles
import classes from "./Debrief.module.css";
//utilities
import { PERCENTAGE_CHANGE_INTERFACE, FORMATTER } from "../utilities/Math";

//Componenets
import SearchableDropdown from "./SearchableDropdown";

//props percentage change, current amount, change amount
export default function Debrief({
  percentage,
  totalAmount,
  accountName,
  dropdownConfig,
}) {
  const [isOptionsOpened,setOptions] = useState(false);
  
  totalAmount = 1000000;
  
  function openOptions()
  {
    setOptions(previous => !previous);
  }
  //for each character return a span insert '$' at the start of the string
  let digitContainer = FORMATTER.format(totalAmount ?? 0).split("");
  return (
    <section className={classes.container}>
        <section className={classes.card}>
          <div>
            {/*Debrief-show account information */}
            <h5>Total Balance in {accountName}</h5>
            <section
              style={{
                display: "flex",
                gap: "10px",
                justifyContent: "space-between",
              }}
            >
              <span className={classes.amount_heading}>
                {digitContainer.map((char, index) => (
                  <span key={index}>{char}</span>
                ))}
              </span>
              <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-1s"
                  onClick={openOptions}
                  width={50}
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm4.28 10.28a.75.75 0 0 0 0-1.06l-3-3a.75.75 0 1 0-1.06 1.06l1.72 1.72H8.25a.75.75 0 0 0 0 1.5h5.69l-1.72 1.72a.75.75 0 1 0 1.06 1.06l3-3Z"
                    clipRule="evenodd"
                  />
                </svg>
            </section>
            <div className={classes.footer}>
              <p>
                {percentage.change === PERCENTAGE_CHANGE_INTERFACE.NO_CHANGE && (
                  <span style={{ marginRight: "10px" }}>{percentage.amount}%</span>
                )}
                {percentage.change === PERCENTAGE_CHANGE_INTERFACE.INCREASE && (
                  <span style={{ marginRight: "10px", color: "green" }}>
                    {percentage.amount.toFixed(2)}%
                  </span>
                )}
                {percentage.change === PERCENTAGE_CHANGE_INTERFACE.DECREASE && (
                  <span style={{ marginRight: "10px", color: "red" }}>
                    {percentage.amount.toFixed(2)}%
                  </span>
                )}
                Return
              </p>
              <p>3/1/2025</p>
            </div>
          </div>
        </section>
        {isOptionsOpened && dropdownConfig && <SearchableDropdown options={[...dropdownConfig?.options]} 
            handleChange= { (value) =>{
                openOptions()
                dropdownConfig?.func(value)
              }  
            }/>}
    </section>
  );
}
