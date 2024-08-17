import ReactDOM from "react-dom";
import React, {useState,useEffect} from "react";

//step 01:
function Examplerender(){
    const[count,setCount]=useState(0);


//step 03:
useEffect(()=>{
    setTimeout(()=>{
        setCount(count => count+1)
    },1000)
})
    
//step 02:
return(
    <h1>Website Counting details {count} times</h1>
)
}
export default Examplerender;
// ReactDOM.render(<Examplerender />, document.getElementById("root"));