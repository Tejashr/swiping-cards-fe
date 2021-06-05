import React, { useEffect, useState } from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import { GetuserbyId, Getuserhistory } from "./api";

function History(props) {

    let [userData, setuserData] = useState([])
    let [up,setUp]=useState();


    useEffect(async () => {
        let userid = await GetuserbyId(props.match.params.id)
        let users = await Getuserhistory(userid.data.phone)
        setuserData(...userData, users.data)
        console.log("Mounted")
    }, [])


 
    return (
        <>
            <table class="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">Number</th>
                        <th scope="col">State</th>
                        <th scope="col">Time  & Date </th>

                    </tr>
                </thead>
                <tbody>

                    {
                        
                        userData.map((use, index) => {
                            return (
                                <tr>
                                    <th scope="row">{use.nameToDelete}</th>
                                    <td>{use.direction}</td>
                                    <td>{use.date}</td>
                                </tr>
                            )
                        })
                    }


                </tbody>
            </table>
        </>
    )
}

export default History;