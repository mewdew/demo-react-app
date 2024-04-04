import { useState } from "react";
function CreateModal({ onAddItem }) {
    const [formData, setFormData] = useState({
        name: '',
        status: ''
    });
    const inputFields = [
        {id: 'name', label: 'Name'},
        {id: 'status', label: 'Status'},
    ];  

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Form submitted');
        onAddItem(formData);
    }

    const handleOnChange = (id, event) => {
        const { value } = event.target;
        setFormData({
            ...formData,
            [id]: value
        });
    }
    return (
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
    );
}

export default CreateModal;