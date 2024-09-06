import React from "react";

//הוספת משתמשים ועריכה
//1.להוסיף אפשרות של מייל
//2.להוסיף פונקציה של ADD
//3.להוסיף פונקציה של UPDATE
//post-
//פקדים להכנסת מייל תאריך ושם
//שליפת הערך מהפקדים ושליחה לפונקציה ADD שהיא פונה לשרת
//UPDATE-
//על פי הזויהוי של הכניסה הוא ממלא תפרטים בפקדין וניתן לערוך אותם...
//


const AddContact=()=>{
    return(
        <div>
            <form>
                <input type="text" placeholder="Name" />
                <input type="text" placeholder="Email" />
                <input type="date" placeholder="Birthday" />
                <button type="submit">Add</button>
            </form>
        </div>
    )
}

export default AddContact;