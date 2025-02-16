import React,{useState,useEffect} from "react"
import ReactDom from "react-dom/client"
import GetInfo from "./src/GetInfo"


function App()
{
    const [pid,setPid] = useState("")
    const [curid,setCurid] = useState("")
   
    useEffect(()=>{
    },[])
    return (
        <div>
            <input type="text" value={pid} onChange={(e)=>setPid(e.target.value)}></input>
            <button onClick={()=>{
                setCurid(pid)
            }}>Get</button>
            {
                curid && curid.length >0 ? < GetInfo prop={curid}/>
                :null
            }
        </div>
    )
}

root = ReactDom.createRoot(document.getElementById("root"))
root.render(<App/>)