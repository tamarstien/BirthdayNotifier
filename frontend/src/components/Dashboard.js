import axios from 'axios';
import React, {useEffect,useState} from 'react';

const Dashboard = ()=>{

    const [contacts, setContacts] = useState([]);


    useEffect(()=>{
        console.log("dina")
        const fetchContacts=async()=>{
        try{
            const response= await axios.get('http://localhost:4000/user/')
            setContacts(response.data);
            console.log(response.data);
           
        }catch{
            console.error("error");
        }};
        fetchContacts();
    },[]);

    return (
        <div>/
            // קריאת שרת גט לקבלת כל המשתמשים
            //פלטור לפי החודש הקרוב
            //הצגת המשתמשים בטבלה
            <h1>Dashboard</h1>
            <p>Welcome to your dashboard!</p>
            <p>{contacts[0]}</p>
            
        </div>
    )
}

export default Dashboard;