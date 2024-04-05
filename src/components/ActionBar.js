import { useState } from 'react';
import CreateModal from "./CreateModal";

function ActionBar() {
    const [open, setOpen] = useState(false);
    const handleClose = () => setOpen(false); 
    return (
      <div className="action-bar">
        <button onClick={ () => setOpen(true)}>Create logical network</button>
        <button onClick={() => window.location.reload()}>Refresh</button>
        <CreateModal isOpen={open} onClose={handleClose}/>
      </div>
    );
}

export default ActionBar;