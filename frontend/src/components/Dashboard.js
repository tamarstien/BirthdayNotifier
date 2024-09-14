import axios from 'axios';
import React, {useEffect,useState} from 'react';
import '../styles/Dashboard.css'; 


const Dashboard = ()=>{

    const [contacts, setContacts] = useState([]);
    const [filteredContacts, setFilteredContacts] = useState([]);

    useEffect(()=>{
        // console.log("dina")
        const fetchContacts=async()=>{
        try{
            const response= await axios.get('http://localhost:4000/user/')
            setContacts(response.data);
            // console.log(response.data[0]._id);
           
        }catch{
            console.error("error");
        }};
        fetchContacts();
    },[]);

    useEffect(() => {
        const filterContactsByCurrentMonth = () => {
          const currentMonth = new Date().getMonth()+1;
        //   console.log(currentMonth)
        //   console.log('currentMonth')
          const contactsInCurrentMonth = contacts.filter(contact => {
            const contactMonth = new Date(contact.birthDate).getMonth()+1;
            console.log(contactMonth)
            return contactMonth === currentMonth;
          });
          setFilteredContacts(contactsInCurrentMonth);
        };
    
        filterContactsByCurrentMonth();
      }, [contacts]);

    return (
        <div>
            {/* // קריאת שרת גט לקבלת כל המשתמשים ☝
            //פלטור לפי החודש הקרוב-☝
            לראות את התאריך של החודש ולהציג את כל מי שהחודש שלו שווה לתאריך
            //הצגת המשתמשים בטבלה
            <h1>Dashboard</h1> */}
            <p>Birthdays This Month</p>
            <ul className='ul'>
        {filteredContacts.map(contact => (
          <li key={contact.id}>
            {contact.userName} - {new Date(contact.birthDate).toLocaleDateString()}-{contact.email}
          </li>
        ))}
      </ul>
        </div>
    )
}

export default Dashboard;