import React from "react";
import contacts from "../contacts"
import Card from "./Card";
import Avatar from "./Avatar";

function createCard(contact){
   return <Card 
   id={contact.id}
   key={contact.id}
   name={contact.name} 
   img={contact.imgURL}
   tel={contact.phone}
   email={contact.email}
   /> 
}
function App(){
    return (
        <div>
        <h1 className="heading"> My Contacts</h1>
        <Avatar img="https://avatars.githubusercontent.com/u/8798027?v=4" />

        {contacts.map(createCard)}
      </div>
    );
}

export default App;