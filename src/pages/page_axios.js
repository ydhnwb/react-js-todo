import axios from 'axios';
import React, { useEffect, useState } from 'react';

export function PageAxios() {
    const [persons, setPersons] = useState([])

    const fetchUsers = async () => {
        axios.get(`https://btm-rn.herokuapp.com/api/v1/users`)
            .then(res => {
                if (res !== undefined && res.data.results) {
                    setPersons(res.data.results)
                } else {
                    console.log("failed")
                }
            })
    }

    useEffect(() => {
        fetchUsers()
    }, [])

    return (
        <div>
            <table className="table-responsive">
                <thead>
                    <tr>
                        <th scope="col">id</th>
                        <th scope="col">Name</th>
                        <th scope="col">Age</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        persons.map((person, index) => {
                            return (
                                <tr key={index}>
                                  <th scope="row">{person._id}</th>
                                  <td>{person.name}</td>
                                  <td>{person.age ? person.age : "~" }</td>
                                </tr>
                      
                            )
                        })
                    }
                </tbody>
            </table>

        </div>
    )
}
