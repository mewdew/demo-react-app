function TaskList({data, onRemoveItem}) {
    const columns = [
      {id: 'name', label: 'Name'},
      {id: 'status', label: 'Status'},
    ]

    const handleOnRemove = (id) => {
      onRemoveItem(id);
    }
    
    return (
      <div className="task-list">
        <table>
          <thead>
            <tr>
              {
                columns.map((column) => (
                  <th key={column.id}>{column.label}</th>
                ))
              }
            </tr>
          </thead>
          <tbody>
            {
              data.map((row) => (
                <tr key={row.id}>
                  {
                    columns.map((column) => (
                      <td key={column.id}>{row[column.id]}</td>
                    ))
                  }
                  <td onClick={() => {handleOnRemove(row.id)}}>Remove</td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    );
}

export default TaskList;