import React, {useState, useEffect} from 'react'
import InputBox from './InputBox'
import ListItem from './ListItem';
import icon from '../assets/icon.png';

function TBContainer() {
    const [content, setContent] = useState("");
    const [tasks, setTasks] = useState([]);

    // Load tasks from localStorage on page load
    useEffect(() => {
      const storedTasks = localStorage.getItem('taskBuddyTasks');
      if (storedTasks) {
        setTasks(JSON.parse(storedTasks));
      }
    }, []);

    // Save tasks to localStorage whenever tasks state changes
    useEffect(() => {
      localStorage.setItem('taskBuddyTasks', JSON.stringify(tasks));
    }, [tasks]);



    const handleInput = (e)=> {
        setContent(e.target.value);
    }
    const handleAddItem = ()=> {
      if (content.trim() === '') return;
      const newItem = {text: content, checked: false };
      const newArr = [...tasks];
      newArr.push(newItem);
      setTasks(newArr)
      setContent("");
    }
    const handleDelete = (index)=> {
      console.log("Remove Item");
      const filteredArr = []
      for(let i = 0; i<tasks.length; i++) {
        if(i !=index)
          filteredArr.push(tasks[i]);
      }
      setTasks(filteredArr);
    }

    const handleToggle = (index) => {
      const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, checked: !task.checked } : task);
      setTasks(updatedTasks);
    }

  return (
    <div className='tb-list'>
        <h1>Task Buddy <img src={icon} alt="Task Buddy Icon" /> </h1>
        <InputBox handleInput={handleInput} content={content} handleAddItem={handleAddItem} ></InputBox>
        <ListItem tasks={tasks} handleDelete={handleDelete} handleToggle={handleToggle}></ListItem>
    </div>
  )
}

export default TBContainer;