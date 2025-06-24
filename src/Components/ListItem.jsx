import React from 'react';

function ListItem(props) {
    const tasks = props.tasks;
    const handleDelete = props.handleDelete;
    const handleToggle = props.handleToggle;
    return <ul className="list">
            {tasks.map((item, index) => {
                return <li
                    key={index}
                    className={item.checked ? 'checked' : ''}
                    onClick={() => handleToggle(index)}
                    >
                        {item.text}
                        <span className="delete-btn" onClick={(e) => { 
                            e.stopPropagation(); handleDelete(index);
                        }}>
                        ×
                    </span>
                    </li>
            })}
        </ul >
}

export default ListItem