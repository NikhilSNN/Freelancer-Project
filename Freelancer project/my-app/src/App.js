import React from "react";
import "./styles.css";
import Profile from "./profile";
import Login from "./login";
import Policy from "./policy";
import Search from "./search";
import Customer from "./customer";
import { BrowserRouter , Route , Link , Switch } from "react-router-dom";
import account from "./asset/account.png";
import login from "./asset/login.png";
import policy from "./asset/policy.png";
import search from "./asset/search.png";
import Product from "./product";

export default function App() {
  return (
    <>
    <table >
    <BrowserRouter>
      <tr>
        <td>
        <div className="App">
        <table cellPadding="15px" >
          <tr align="center" >
            <td colspan="2"><h1>ADMIN</h1></td>
          </tr>
          <tr>
            <td><img src={account} className="image"/></td>
            <td className="text"><Link to ="/Profile" className="link">USER PROFILE</Link></td>
          </tr>
          <tr>
            <td><img src={login} className="image"/></td>
            <td><Link to ="/Login" className="link">LOGIN</Link></td>
          </tr>
          <tr>
              <td><img src={search} className="image"/></td>
              <td><Link to ="/search" className="link">SEARCH</Link></td>
          </tr>
          <tr>
            <td><img src={policy} className="image"/></td>
            <td><Link to ="/Policy" className="link">POLICY</Link></td>
          </tr>
          <tr>
            <td><img src={policy} className="image"/></td>
            <td><Link to ="/Product" className="link">PRODUCT</Link></td>
          </tr>
          <tr>
            <td><img src={policy} className="image"/></td>
            <td><Link to ="/countryusers" className="link">Country User Data</Link></td>
          </tr>
        </table>
        </div>
        </td>
        
        <td>
        <div className="content">
        <Switch>
          <Route path="/Profile">
            <Profile/>
          </Route>
          <Route path="/Login">
            <Login/>
          </Route>
          <Route path="/Policy">
            <Policy/>
          </Route>
          <Route path="/Search">
            <Search/>
          </Route>
          <Route path="/Product">
            <Product/>
          </Route>
          <Route path="/countryusers">
           
          </Route>
        </Switch>
      </div>
        </td>
      </tr>
      </BrowserRouter>
      </table>
    </>
  );
}
