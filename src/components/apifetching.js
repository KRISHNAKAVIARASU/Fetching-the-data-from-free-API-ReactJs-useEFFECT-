import React,{useState,useEffect} from "react";
function Userdemo(){
    const[users,setUsers] = useState([]);
    const[loading,setLoading] = useState(true);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => {
        setUsers(data);
        setLoading(false);
      })
      .catch(error =>{
        console.error("NoResponce From API");
        setLoading(false);
      });
    },[]);
    if(loading){
        return<p>Loading</p>
    }
    return(
        <div>
            <h1>List out the users in API</h1>
            <ui>
                {
                    users.map(user=>(
                        <li key = {user.id}>{user.name}</li>
                    ))
                }
            </ui>
        </div>
    )
}
export default Userdemo;