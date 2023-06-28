import { useContext, useState } from "react"
import { SettingsContext } from "../../Context/Settings";
import { Pagination } from "@mantine/core";




function List({ list, toggleComplete}){
    const {
        displayCount,
        showCompleted,
        sortField,
    } = useContext(SettingsContext);

    const [activePage, setActivePage] = useState(1);
    

//proof of life

// our renderable list will conditionally render based on the settings context, it will show or hide completed tasks
const renderList = showCompleted ? list : list.filter(item => !item.complete);

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
        </>
    )
}

export default List;