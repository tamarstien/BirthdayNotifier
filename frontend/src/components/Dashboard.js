import axios from 'axios';
import React, {useEffect,useState} from 'react';

const Dashboard = ()=>{

    const [contacts, setContacts] = useState([]);


    useEffect(()=>{
        // console.log("dina")
        const fetchContacts=async()=>{
            console.log("dinahhhhhhhhhhhhhhhhhhhhhhhhh")
        try{
            const response= await axios.get('http://localhost:4000/user/')
            setContacts(response.data);
            console.log(response.data[0]._id);
           
        }catch{
            console.error("error");
        }};
        fetchContacts();
    },[]);

    return (
        <div>/
            {/* // קריאת שרת גט לקבלת כל המשתמשים
            //פלטור לפי החודש הקרוב
            //הצגת המשתמשים בטבלה
            <h1>Dashboard</h1> */}
            <p>Welcome to your dashboard!</p>
            <ul>
        {contacts.map(contact => (
          <li key={contact.id}>
            {contact.userName} - {new Date(contact.birthDate).toLocaleDateString()}
          </li>
        ))}
      </ul>
        </div>
    )
}

export default Dashboard;