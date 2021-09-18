import React from "react";
import { ProductsData } from "./productsdata";


function Product () {
    return(
        <>
        <table border="1px" className="datatable">
            {ProductsData.map((data,key)=>{
                return(
                <tr>
                    <td>{data.title}</td>
                    <td>{data.type}</td>
                    <td>{data.description}</td>
                    <td><img src={data.filename} width="300px" height="200px"/></td>
                    <td>{data.height}</td>
                    <td>{data.width}</td>
                    <td>{data.price}</td>
                    <td>{data.rating}</td>
                </tr>
                );
            })}
        </table>

        </>

    );
}
export default Product;