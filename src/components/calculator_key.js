import React from 'react';

export function CalculatorKey({ onKeyClick }){
    return(

        <div className="row mt-2" >
            <div className="col-md-3 col-sm-3 col-xs-3">
                <button className="btn btn-info btn-block" name="(" onClick={e => onKeyClick(e.target.name)}>(</button>
            </div>
            <div className="col-md-3 col-sm-3 col-xs-3">
                <button className="btn btn-info btn-block" name="CE" onClick={e => onKeyClick(e.target.name)}>CE</button>
            </div>
            <div className="col-md-3 col-sm-3 col-xs-3">
                <button className="btn btn-info btn-block" name=")" onClick={e => onKeyClick(e.target.name)}>)</button>
            </div>
            <div className="col-md-3 col-sm-3 col-xs-3">
                <button className="btn btn-info btn-block" name="C" onClick={e => onKeyClick(e.target.name)}>C</button>
            </div>

            <div className="col-md-3 col-sm-3 col-xs-3 mt-2">
                <button className="btn btn-light btn-block" name="1" onClick={e => onKeyClick(e.target.name)}>1</button>
            </div>
            <div className="col-md-3 col-sm-3 col-xs-3 mt-2">
                <button className="btn btn-light btn-block" name="2" onClick={e => onKeyClick(e.target.name)}>2</button>        
            </div>
            <div className="col-md-3 col-sm-3 col-xs-3 mt-2">
                <button className="btn btn-light btn-block" name="3" onClick={e => onKeyClick(e.target.name)}>3</button>
            </div>
            <div className="col-md-3 col-sm-3 col-xs-3 mt-2">
                <button className="btn btn-info btn-block" name="+" onClick={e => onKeyClick(e.target.name)}>+</button>
            </div>


            <div className="col-md-3 col-sm-3 col-xs-3 mt-2">
                <button className="btn btn-light btn-block" name="4" onClick={e => onKeyClick(e.target.name)}>4</button>
            </div>
            <div className="col-md-3 col-sm-3 col-xs-3 mt-2">
                <button className="btn btn-light btn-block" name="5" onClick={e => onKeyClick(e.target.name)}>5</button>
            </div>
            <div className="col-md-3 col-sm-3 col-xs-3 mt-2">
                <button className="btn btn-light btn-block" name="6" onClick={e => onKeyClick(e.target.name)}>6</button>
            </div>
            <div className="col-md-3 col-sm-3 col-xs-3 mt-2">
                <button className="btn btn-info btn-block" name="-" onClick={e => onKeyClick(e.target.name)}>-</button>
            </div>

            <div className="col-md-3 col-sm-3 col-xs-3 mt-2">
                <button className="btn btn-light btn-block" name="7" onClick={e => onKeyClick(e.target.name)}>7</button>
            </div>
            <div className="col-md-3 col-sm-3 col-xs-3 mt-2">
                <button className="btn btn-light btn-block" name="8" onClick={e => onKeyClick(e.target.name)}>8</button>
            </div>
            <div className="col-md-3 col-sm-3 col-xs-3 mt-2">
                <button className="btn btn-light btn-block" name="9" onClick={e => onKeyClick(e.target.name)}>9</button>
            </div>

            <div className="col-md-3 col-sm-3 col-xs-3 mt-2">
                <button className="btn btn-info btn-block" name="*" onClick={e => onKeyClick(e.target.name)}>x</button>
            </div>
            <div className="col-md-3 col-sm-3 col-xs-3 mt-2">
                <button className="btn btn-light btn-block" name="." onClick={e => onKeyClick(e.target.name)}>.</button>
            </div>
            <div className="col-md-3 col-sm-3 col-xs-3 mt-2">
               <button className="btn btn-light btn-block" name="0" onClick={e => onKeyClick(e.target.name)}>0</button>
            </div>
            <div className="col-md-3 col-sm-3 col-xs-3 mt-2">
                <button className="btn btn-success btn-block" name="=" onClick={e => onKeyClick(e.target.name)}>=</button>
            </div>
            <div className="col-md-3 col-sm-3 col-xs-3 mt-2">
                <button className="btn btn-info btn-block" name="/" onClick={e => onKeyClick(e.target.name)}>÷</button><br/>
            </div>
    </div>
    )
}