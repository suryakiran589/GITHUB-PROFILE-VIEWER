import React,{useState,useEffect} from "react"
import ReactDom from "react-dom/client"
import GetInfo from "./src/GetInfo"
import { Typewriter } from "react-simple-typewriter"

function App()
{
    const [pid,setPid] = useState("")
    const [curid,setCurid] = useState("")
    const [dark,setDark] =useState(false)
    
        const body= document.body
        body.style.background=dark ? "black" : "rgb(235, 235, 235)"

   
    useEffect(()=>{
    },[])
    return (
        <div className="container">
            <div id="inner">

            <div id="type">
            <div>

            <h1 id="heading" style={{color:dark?"rgb(16, 239, 243)":"#FFD700"}}> GitHub Profile Finder</h1>
            </div>
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
            <div>

            <button id="dark-mode"  style={{backgroundColor:"rgb(16, 239, 243)",border:dark?"0px solid white":"0px solid black"}} onClick={()=>setDark(!dark)}>{dark ? "⏾" : "☼"}</button>
            </div>
            </div>
            <div id="inp">
            <input id="textbox" style={{backgroundColor:dark?"rgb(198, 196, 196)":"rgba(221, 221, 221, 0.86)",color:dark?"black":"white"}} placeholder="Username..." type="text" value={pid} onChange={(e)=>setPid(e.target.value)}></input>
            <button style={{backgroundColor:"rgb(16, 239, 243)",color:"black"}} onClick={()=>{
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

const root = ReactDom.createRoot(document.getElementById("root"))
root.render(<App/>)