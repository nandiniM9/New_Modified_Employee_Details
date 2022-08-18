import image from './user.jpg'
import React,{useState,useEffect} from 'react';
import './App.css';

function App() {
 
       const [user,setUser]=useState([]);
       const fetchData=()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) =>{return response.json();
        }).then((data)=>{
          let nandini= data
          console.log(nandini);
          setUser(nandini)
        })
       }
       useEffect(()=>{
        fetchData();
       },[])
  return (
   <div>
  <div class="h1">
    <span> Employee Details</span>
  </div>

          {user.map(data =>(
  <button className="App">
          <img src={image} alt="no" height="50" width="50" align="center"/><br/>
            <pre class="App-logo">
            {"Name :"+data.name} <br/>
            {"UserName  :"+data.username}<br/>
            {"Employee ID:"+data.id}  <br/>
            {"phone   :"+data.phone}     <br/>
            {"email   :"+data.email} <br/>  
            {"Address   :"}<br/>
            {"Street      :"+data.address.street}  <br/>
            {"suite     :"+data.address.suite}  <br/>
            {"city      :"+data.address.city}<br/>
            {"zipcode     :"+data.address.zipcode}     
            </pre>
          </button>
       
          ))  }
        
</div>
  );
}
export default App;