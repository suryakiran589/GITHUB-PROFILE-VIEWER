import React, { useEffect, useState } from "react";

function GetInfo({ prop }) {
  const [fdata, setFdata] = useState(null);
  useEffect(() => {
    try {
      async function getData(prop) {
        console.log(prop);
        const data = await fetch(`https://api.github.com/users/${prop}`);
        const results = await data.json();
        console.log(results);
        setFdata(results);
      }
      getData(prop);
    } catch (error) {
      console.log(error, "error");
    }
  }, [prop]);
  
  return (fdata!=null ?
  <div id="content">
    <div>

    <img src={fdata?.avatar_url}/>
    </div>
    <div id="info">

    <h1>Name -{fdata?.name}</h1>
    <h1>followers {fdata?.followers}</h1>
    
    <a href={"https://github.com/"+prop}>Open Profile</a>  </div></div>:null)
}

export default GetInfo;
