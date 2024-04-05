import { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import RefreshIcon from '@mui/icons-material/Refresh';
import CreateModal from "./CreateModal";

function ActionBar() {
    const [open, setOpen] = useState(false);
    const handleClose = () => setOpen(false); 
    return (
      <div className="action-bar">
        <button onClick={ () => setOpen(true)} className='action-button'>
          <AddIcon sx={{ color: '#0078d4' }} />  
          Create logical network
        </button>
        <button onClick={() => window.location.reload()} className='action-button'>
          <RefreshIcon sx={{ color: '#0078d4' }} />  
          Refresh
        </button>
        <CreateModal isOpen={open} onClose={handleClose}/>
      </div>
    );
}

export default ActionBar;