import { useContext, useState } from "react"
import { SettingsContext } from "../../Context/Settings";
import { Pagination } from "@mantine/core";




function List({ list, toggleComplete, deleteItem}){
    const {
        displayCount,
        showCompleted,
        sortField,
        setSortField,
    } = useContext(SettingsContext);

    const [activePage, setActivePage] = useState(1);
    

  // Sort the list based on the selected sort field
  const sortedList = list.sort((a, b) => {
    if (a[sortField] < b[sortField]) return -1;
    if (a[sortField] > b[sortField]) return 1;
    return 0;
  });

//proof of life

  // Determine the renderable list based on showCompleted setting
  const renderList = showCompleted ? sortedList : sortedList.filter(item => !item.complete);

//TODO: determine how many pages will be in our pagination component
const pageCount = Math.ceil(renderList.length / displayCount);

//TODO: determine where to start rendering display data
const listStart = displayCount * (activePage - 1);

//TODO where to end rendering display data using slice
const listEnd = listStart + displayCount;

//TODO: list that is displayed on the page
const displayList = renderList.slice(listStart, listEnd);

    return (
        <>

              {displayList.map(item => (
        <div key={item.id}>
          <p>{item.text}</p>
          <p><small>Assigned to: {item.assignee}</small></p>
          <p><small>Difficulty: {item.difficulty}</small></p>
          <div onClick={() => toggleComplete(item.id)}>Complete: {item.complete.toString()}</div>
          <hr />
        </div>
      ))}

        <Pagination value={activePage} onChange={setActivePage} size="md" total={pageCount} radius={0} />

        <div>
        <label>
          Sort By:
          <select value={sortField} onChange={(e) => setSortField(e.target.value)}>
            <option value="difficulty">Difficulty</option>
            <option value="assignee">Assignee</option>
            <option value="text">Text</option>
            {/* Add more options for other fields if needed */}
          </select>
        </label>
      </div>
      
        </>
    )
}

export default List;