import DeleteOutlinedIcon from '@mui/icons-material/Delete';
import { useList, useListDispatch } from '../store/List';

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
            <tr></tr>
          </thead>
          <tbody>
            {
              (query ? getFilteredList() : data).map((row, index) => (
                <tr key={row.id}>
                  {
                    columns.map((column) => (
                      <td key={column.id}>{row[column.id]}</td>
                    ))
                  }
                  <td className="action-item" onClick={ () => {
                      dispatch({
                          type: 'removed',
                          id: row.id
                        })
                    }
                  }>
                    <DeleteOutlinedIcon sx={{ color: '#0078d4' }} />
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    );
}

export default List;