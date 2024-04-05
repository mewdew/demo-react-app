import { useList, useListDispatch } from '../store/List'

function List({query}) {
    const data = useList();
    const dispatch = useListDispatch();

    const columns = [
      {id: 'name', label: 'Name'},
      {id: 'status', label: 'Status'},
    ];

    const getFilteredList = () => {
        return data.filter(item => item.name.toLowerCase().includes(query.toLowerCase()));
    };
    
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
              (query ? getFilteredList() : data).map((row) => (
                <tr key={row.id}>
                  {
                    columns.map((column) => (
                      <td key={column.id}>{row[column.id]}</td>
                    ))
                  }
                  <td onClick={ () => {
                      dispatch({
                          type: 'removed',
                          id: row.id
                        })
                    }
                  }>Remove</td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    );
}

export default List;