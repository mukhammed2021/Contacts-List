import { useState } from "react";
import Button from "../Button/Button";

export default function AddContact({ onAddContact, onCancel, setIsAddOpen }) {
   const [name, setName] = useState("");
   const [phone, setPhone] = useState("");
   const [avatar, setAvatar] = useState("https://i.pravatar.cc/48");

   function handleSubmit(e) {
      e.preventDefault();
      if (name.trim() && phone.trim() && avatar.trim()) {
         const id = crypto.randomUUID();
         const newContact = {
            id,
            name,
            phone,
            avatar: `${avatar}?=${id}`,
         };

         onAddContact(newContact);

         setName("");
         setPhone("");
         setAvatar("https://i.pravatar.cc/48");
         setIsAddOpen(false);
      }
   }

   return (
      <form className="form" onSubmit={handleSubmit}>
         <div className="form__line">
            <label htmlFor="name" className="form__label">
               Name
            </label>
            <input
               id="name"
               type="text"
               className="form__input input"
               value={name}
               onChange={(e) => setName(e.target.value)}
            />
         </div>
         <div className="form__line">
            <label htmlFor="phone" className="form__label">
               Phone number
            </label>
            <input
               id="phone"
               type="tel"
               className="form__input input"
               value={phone}
               onChange={(e) => setPhone(e.target.value)}
            />
         </div>
         <div className="form__line">
            <label htmlFor="avatar" className="form__label">
               Avatar
            </label>
            <input
               id="avatar"
               type="url"
               className="form__input input"
               value={avatar}
               onChange={(e) => setAvatar(e.target.value)}
            />
         </div>
         <div className="form__line">
            <div className="form__actions">
               <Button save="button--add" submit="submit">
                  Save
               </Button>
               <Button cancel="button--cancel" button="button" onCancel={onCancel}>
                  Cancel
               </Button>
            </div>
         </div>
      </form>
   );
}
