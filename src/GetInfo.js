import React, { useEffect, useState } from "react";

function GetInfo({ prop ,dark}) {
  const [fdata, setFdata] = useState(null);
  const [isError, setError] = useState(false);
  const sty = {color:dark?"#E0E0E0":"black"};

  useEffect(() => {
    try {
      async function getData(prop) {
        console.log(prop);
        const data = await fetch(`https://api.github.com/users/${prop}`);
        const results = await data.json();
        console.log("res", results);
        if (results.message == "Not Found") {
          setError(true);
        } else {
          setFdata(results);
          setError(false);
        }
      }
      getData(prop);
    } catch (error) {
      console.log(error, "error");
    }
  }, [prop]);

  return !isError ? (
    fdata != null && fdata.id ? (
      <div id="content" style={sty}>
        <div>
          <img src={fdata?.avatar_url} />
        </div>
        <div id="info">
          {fdata && fdata.name ? (
            <h1 className="name" style={sty}>Name -{fdata?.name}</h1>
          ) : (
            <h1 className="name" style={sty}>Name -{fdata?.login}</h1>
          )}
          <h1 style={sty}>
            following {fdata?.following}
            {/* <span>followers {fdata?.followers}</span> */}
          </h1>
          <h1 style={sty}>followers {fdata?.followers}</h1>
          {fdata && fdata.bio && <h1 style={sty}>Bio- {fdata?.bio}</h1>}
          <a href={"https://github.com/" + prop}>Open Profile</a>{" "}
        </div>
      </div>
    ) : (
      <h1>loading</h1>
    )
  ) : (
    <h1 style={sty}>Coudn't Find Username</h1>
  );
}

export default GetInfo;
