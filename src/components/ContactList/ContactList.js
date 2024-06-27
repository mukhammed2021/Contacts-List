import { useState } from "react";
import AddContact from "../AddContact/AddContact";
import Button from "../Button/Button";
import Items from "../Items/Items";

const initialContacts = [
   {
      id: 1,
      name: "Damir",
      phone: "88005553535",
      avatar: "https://i.pravatar.cc/48?u=118836",
   },
   {
      id: 2,
      name: "Aybek",
      phone: "+77774567890",
      avatar: "https://i.pravatar.cc/48?u=933372",
   },
   {
      id: 3,
      name: "Dimash",
      phone: "+70774567890",
      avatar: "https://i.pravatar.cc/48?u=499476",
   },
];

export default function ContactList() {
   const [contacts, setContacts] = useState(initialContacts);
   const [isAddOpen, setIsAddOpen] = useState(false);

   function handleAppOpen() {
      setIsAddOpen((open) => !open);
   }
   function handleDelete(id) {
      setContacts((contacts) => contacts.filter((contact) => contact.id !== id));
   }
   function handleAddContact(newContact) {
      setContacts((contacts) => [...contacts, newContact]);
   }

   return (
      <div className="contact-list">
         <div className="contact-list__body">
            <div className="contact-list__title title">Contacts</div>
            <Items contacts={contacts} onDelete={handleDelete} />
            <Button save="button--add" onAddOpen={handleAppOpen}>
               Add
            </Button>
         </div>
         {isAddOpen && (
            <div className="contact-list__body">
               <div className="contact-list__title title">Add Contact</div>
               <AddContact onAddContact={handleAddContact} onCancel={handleAppOpen} setIsAddOpen={setIsAddOpen} />
            </div>
         )}
      </div>
   );
}
