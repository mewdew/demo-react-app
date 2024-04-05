import { useState } from "react";
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import { useListDispatch } from '../store/List';

function CreateModal({isOpen, onClose}) {
    const dispatch = useListDispatch();
    const [formData, setFormData] = useState({
        name: '',
        status: ''
    });
    const inputFields = [
        {id: 'name', label: 'Name'},
        {id: 'status', label: 'Status'},
    ];
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
      };
    

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch({
            type: 'added',
            item: formData
        })
        setFormData({
            name: '',
            status: ''
        });
    }

    const handleOnChange = (formField, event) => {
        const { value } = event.target;
        setFormData({
            ...formData,
            [formField]: value
        });
    }
    return (
        <Modal
            open={!!isOpen}
            onClose={onClose}
            aria-labelledby="create-modal-title"
            aria-describedby="create-modal-description"
        >
        <Box sx={style}>
            <div className="create-modal">
                <form>
                {
                    inputFields.map((inputField) => (
                    <div key={inputField.id}>
                        <label>{inputField.label}</label>
                        <input type="text"
                            value={formData[inputField.id]}
                            onChange={(event) => handleOnChange(inputField.id, event)}/>
                    </div>
                    ))
                }
                <button onClick={handleSubmit}>Done</button>
                </form>
            </div>
        </Box>
      </Modal>
    );
}

export default CreateModal;