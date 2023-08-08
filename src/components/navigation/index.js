import React from "react";
import './style.css'


const NavigationBar = ({searchNav,setSearch}) =>{
 console.log(searchNav)
return(
    <div className="nav">

      <h1 className="logo">M<strong className="os">oo</strong>vie</h1>
    
        <div className="searchbox">
        <input type="text" id="search" value={searchNav} onChange={(e)=> setSearch(e.target.value)} placeholder="Search a movie"></input>
        <li>Home</li>  
             <li>My list</li>
             <button>SignIn</button>  
    
        </div>
     
        

    </div>
)

}
export default NavigationBar