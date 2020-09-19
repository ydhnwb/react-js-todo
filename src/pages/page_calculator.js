import React, { useState } from 'react';
import { CalculatorKey } from '../components/calculator_key';
import { CalculatorPanel } from '../components/calculator_panel';

export function PageCalculator(){
    const [result, setResult] = useState("") 

    const onKeyClick = (e) => {
        const val = e
        if(val === "="){
            calculate()
        }

        else if(val === "C"){
            reset()
        }
        else if(val === "CE"){
            backspace()
        }else{
            setResult(`${result}${val}`)
        }
    }

    const calculate = () => {
        try {
            setResult((eval(result) || "" ) + "")
        } catch (e) {
            setResult("Error occured")
        }
    };

    const reset = () => {
        setResult("")
    };

    const backspace = () => {
        const res = result.slice(0,-1)
        setResult(res)
    };


    return(
        <div className="row">
            <div className="col-md-12 p-5">
                <CalculatorPanel result={result}/>
                <CalculatorKey onKeyClick={onKeyClick}/>
            </div>

        </div>
    )
}