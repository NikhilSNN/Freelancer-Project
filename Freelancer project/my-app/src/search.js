import React, { useState } from "react";
import {UserData} from "./userdata";

function Search (){
   


    return(
        <>
        <div>
        <table align="center" border="1px" className="datatable">
            {UserData.map((data,key)=>{

                return(
                    <>
                    
                        <tr>
                            <td>{data.id}</td>                     
                            <td>{data.name}</td>                       
                            <td>{data.username}</td>
                            <td>{data.email}</td>
                            <td>{data.street}</td>                      
                            <td>{data.address.street}</td>
                            <td>{data.address.suite}</td>
                            <td>{data.address.city}</td>
                            <td>{data.address.zipcode}</td>                     
                            <td>{data.address.geo.lat}</td>   
                            <td>{data.address.geo.lng}</td>                        
                            <td>{data.phone}</td>                     
                            <td>{data.website}</td>                       
                            <td>{data.company.name}</td>   
                            <td>{data.company.catchPhrase}</td> 
                            <td>{data.company.bs}</td>
                        </tr>      
                    </>
                );
            })}
        </table>
        </div>
        </>
    );
}
export default Search;
    
