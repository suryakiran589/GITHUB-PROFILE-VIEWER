import React,{useState,useEffect} from "react"
import ReactDom from "react-dom/client"
import GetInfo from "./src/GetInfo"
import { Typewriter } from "react-simple-typewriter"

function App()
{
    const [pid,setPid] = useState("")
    const [curid,setCurid] = useState("")
   
    useEffect(()=>{
    },[])
    return (
        <div className="container">
            <div id="inner">

            <div id="type ">
                
            <h1 id="heading"> GitHub Profile Finder</h1>
            {/* <Typewriter
            words={['GitHub','Profile','Finder']}
            loop={5}
            cursor
            cursorStyle='_'
            typeSpeed={100}
            deleteSpeed={100}
            delaySpeed={1000}
            // onLoopDone={handleDone}
            // onType={handleType}
            /> */}
            </div>
            <div id="inp">
            <input id="textbox" placeholder="Username..." type="text" value={pid} onChange={(e)=>setPid(e.target.value)}></input>
            <button onClick={()=>{
                setCurid(pid)
            }}>Search</button>
            </div>


            {
                curid && curid.length >0 ? < GetInfo prop={curid}/>
                :null
            }
            
            </div>
        </div>
    )
}

root = ReactDom.createRoot(document.getElementById("root"))
root.render(<App/>)