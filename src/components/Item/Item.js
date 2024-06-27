import Button from "../Button/Button";

export default function Item({ id, name, phone, avatar, onDelete, isOpen, onOpen }) {
   return (
      <li className="contact-list__item">
         <img src={avatar} className="contact-list__avatar" alt={name} />
         <div className="contact-list__content">
            <div className="contact-list__name">{name}</div>
            <a href={`tel:${phone}`} className="contact-list__phone">
               {phone}
            </a>
         </div>
         <div className="contact-list__configure">
            <button type="button" className="contact-list__button" onClick={() => onOpen(id)}>
               <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 -960 960 960"
                  width="24px"
                  fill="#e8eaed"
               >
                  <path d="M480-160q-33 0-56.5-23.5T400-240q0-33 23.5-56.5T480-320q33 0 56.5 23.5T560-240q0 33-23.5 56.5T480-160Zm0-240q-33 0-56.5-23.5T400-480q0-33 23.5-56.5T480-560q33 0 56.5 23.5T560-480q0 33-23.5 56.5T480-400Zm0-240q-33 0-56.5-23.5T400-720q0-33 23.5-56.5T480-800q33 0 56.5 23.5T560-720q0 33-23.5 56.5T480-640Z" />
               </svg>
            </button>
            {isOpen && (
               <div className="contact-list__actions">
                  <Button onDelete={() => onDelete(id)}>Delete</Button>
               </div>
            )}
         </div>
      </li>
   );
}
