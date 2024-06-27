import { useState } from "react";
import Item from "../Item/Item.js";

export default function Items({ contacts, onDelete }) {
   const [isOpen, setIsOpen] = useState(null);

   function handleOpen(id) {
      setIsOpen((open) => (open === id ? null : id));
   }

   return (
      <ul className="contact-list__list">
         {contacts.map((contact) => (
            <Item
               key={contact.id}
               id={contact.id}
               name={contact.name}
               phone={contact.phone}
               avatar={contact.avatar}
               onDelete={onDelete}
               isOpen={isOpen === contact.id}
               onOpen={handleOpen}
            />
         ))}
      </ul>
   );
}
