import React from "react";
import { CountryUserData } from "./countryuserdata";


function Users () {
    return(
        <>
        <table border="1px" className="datatable">
            {CountryUserData.map((data,key)=>{
                <tr>
                    <td>{data.id}</td>
                    <td>{data.email}</td>
                    <td>{data.first}</td>
                    <td>{data.last}</td>
                    <td>{data.company}</td>
                    <td>{data.country}</td>
                </tr>
            })}
        </table>

        </>

    );
}
export default Users;