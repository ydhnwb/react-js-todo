import React, { useState } from "react";
import { Link } from "react-router-dom";


export function PageAdd() {
    const [title, setTitle] = useState("")

    const titleChangeListener = (e) => {
        setTitle(e.target.value);
    }

    const createTodo = async () => {
        const obj = {
            title: title
        }
        const resp = await fetch("http://btm-rn.herokuapp.com/api/v1/todo", {
            method: "POST",
            headers: {
                "Content-Type":"application/json"
            },
            body: JSON.stringify(obj)
        })
        .then(res => res.json())
        .catch(err => console.log(err))

        console.log(resp)
        if(resp.results){
            window.location.href = "/"
        }else{
            console.log("Failed when create")
        }
    }


  return (
    <div>
      <nav className="navbar navbar-light bg-primary">
        <Link className="navbar-brand" to="/">
        <i className="fa fa-arrow-left content_white"></i>
        </Link>
      </nav>
      <div className="row p-5">
          <div className="col-md-12" >
              <input required onChange={ e => titleChangeListener(e) } type="text" className="form-control" id="title"placeholder="Enter title" />
              <button className="mt-4" onClick={() => createTodo()} type="submit" className="btn btn-primary btn-block">Simpan</button>
          </div>
        </div>

    </div>
  );
}
