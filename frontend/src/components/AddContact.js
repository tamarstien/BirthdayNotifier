import React ,{useState} from "react";

//הוספת משתמשים ועריכה
//1.להוסיף אפשרות של מייל👍
//2.להוסיף פונקציה של ADD
//3.להוסיף פונקציה של UPDATE
//post-
//פקדים להכנסת מייל תאריך ושם
//שליפת הערך מהפקדים ושליחה לפונקציה ADD שהיא פונה לשרת
//UPDATE-
//על פי הזויהוי של הכניסה הוא ממלא תפרטים בפקדין וניתן לערוך אותם...
//


const AddContact=()=>{

    const [contact,setContact] =useState(
        {name:"", email:"", birthDate:new Date()}
    )

    const handleChange=(e)=>{
        // console.log(e.target.value);
        const name=e.target.value
        console.log(name)
        setContact({...contact.name,name})
        // console.log(contact.name);
    }
    return(
        <div>

       
            <form>
                <input type="text" placeholder="Name" onChange={handleChange}/>
                <input type="text" placeholder="Email" />
                <input type="date" placeholder="Birthday" />
                <button type="submit">Add</button>
            </form>
        </div>
    )
}

export default AddContact;