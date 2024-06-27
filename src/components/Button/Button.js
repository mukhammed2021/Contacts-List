export default function Button({ children, save, cancel, submit, button, onDelete, onAddOpen, onCancel }) {
   return (
      <button type={submit || button} className={`button ${save || cancel}`} onClick={onDelete || onAddOpen || onCancel}>
         {children}
      </button>
   );
}
