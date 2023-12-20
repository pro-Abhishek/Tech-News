import React from "react";
import { useGlobalContext } from "./Context";
const Search=()=>{
    
    const { query,SearchPost}=useGlobalContext();
    return(<>
    
      <div className="search">
        <input  
        type="text" 
        className="inp" 
        value={query}
        onChange={(e)=>{SearchPost(e.target.value)}}
        placeholder="search here..."/>
        
      </div>
     
    </>)
};
export default Search;