import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';

export function PageHome() {
  const [todos, setTodos] = useState([]);

  const fetchTodos = async () => {
    const resp = await fetch("https://btm-rn.herokuapp.com/api/v1/todo", {
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .catch((err) => console.log(err));

    if (resp.results) {
      setTodos(resp.results);
    } else {
      console.log("Failed to get data");
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []);


  const deleteTodo = async (id) => {
    const resp = await fetch(`https://btm-rn.herokuapp.com/api/v1/todo/${id}`,{
      headers:{
        "Content-Type":"application/json"
      },
      method: "DELETE"
    })
    .then(res => res.json())
    .catch(err => console.log(err))

    console.log(resp)
    if(resp.success === true){
      fetchTodos();
    }else{
      console.log("Tidak dapat menghapus")
    }
  }

  const ask = (t) => {
    confirmAlert({
      title: 'Hapus',
      message: 'Apakah anda yakin ingin menghapus '+t.title,
      buttons: [
        {
          label: 'Hapus',
          onClick: () => deleteTodo(t._id)
        },
        {
          label: 'Batal',
          onClick: () => {}
        }
      ]
    });
  };

  return (
    <div>
      <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
        <li className="nav-item">
          <a
            className="nav-link active"
            id="pills-all-tab"
            data-toggle="pill"
            href="#pills-all"
            role="tab"
            aria-controls="pills-all"
            aria-selected="true"
          >
            All todos
          </a>
        </li>
        <li className="nav-item">
          <a
            className="nav-link"
            id="pills-completed-tab"
            data-toggle="pill"
            href="#pills-completed"
            role="tab"
            aria-controls="pills-completed"
            aria-selected="false"
          >
            Completed
          </a>
        </li>
      </ul>
      <div className="tab-content" id="pills-tabContent">
        <div
          className="tab-pane fade show active"
          id="pills-all"
          role="tabpanel"
          aria-labelledby="pills-all-tab"
        >
          <div>
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Name of task</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {todos.map((todo, index) => {
                  return (
                    <tr key={index}>
                      {
                        todo.isComplete ? <th scope="row"><s>{todo.title}</s></th> : <th scope="row">{todo.title}</th>
                      }

                      <td>
                      <Link to={{
                          pathname:"/edit",
                          state: {
                            passedTodo: todo
                          }}} 
                          type="button" className="btn btn-success m-2">
                          <i className="fa fa-edit"></i>
                        </Link>
                        <button onClick={() => ask(todo)} type="button" className="btn btn-danger m-2">
                          <i className="fa fa-trash"></i>
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
        <div
          className="tab-pane fade"
          id="pills-completed"
          role="tabpanel"
          aria-labelledby="pills-completed-tab"
        >
          <div>
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Name of completed task</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {
                todos.filter(td => td.isComplete === true).map((todo, index) => {
                  return (
                    <tr key={index}>
                      <th scope="row"><s>{todo.title}</s></th>
                      <td>
                        <Link to={{
                          pathname:"/edit",
                          state: {
                            passedTodo: todo
                          }}} 
                          type="button" className="btn btn-success m-2">
                          <i className="fa fa-edit"></i>
                        </Link>
                        <button onClick={() => ask(todo)} type="button" className="btn btn-danger m-2">
                          <i className="fa fa-trash"></i>
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <Link to="/add" className="float">
        <i className="fa fa-plus my-float"></i>
      </Link>
    </div>
  );
}
