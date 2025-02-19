import React, { useEffect, useState } from "react";

function GetInfo({ prop }) {
  const [fdata, setFdata] = useState(null);
  const sty={
   
  }

  useEffect(() => {
    try {
      async function getData(prop) {
        console.log(prop);
        const data = await fetch(`https://api.github.com/users/${prop}`);
        const results = await data.json();
        console.log('res',results);
        setFdata(results);
      }
      getData(prop);
    } catch (error) {
      console.log(error, "error");
    }
  }, [prop]);
  
  return (fdata!=null && fdata.id ?
  <div id="content" style={sty
  
  }>
    <div>

    <img src={fdata?.avatar_url}/>
    </div>
    <div id="info">

    {fdata && fdata.name ?<h1 className="name">Name -{fdata?.name}</h1> : <h1 className="name">Name -{fdata?.login}</h1>}
    <span>followers {fdata?.followers}</span>
    <span>following {fdata?.following}</span>
    {fdata && fdata.bio && <h1>Bio- {fdata?.bio}</h1>}
    
    <a href={"https://github.com/"+prop}>Open Profile</a>  </div></div>:null)
}

export default GetInfo;
