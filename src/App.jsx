// App.js
import React, { useEffect, useState } from 'react';
import TeacherTable from './TeacherTable';
import SearchBar from './Searchbar';
import BlockFilter from './BlockFilter';
import './App.css';




function App() {


  const [searchTerm, setSearchTerm] = useState('');
  const [selectedBlock, setSelectedBlock] = useState('');

  const [teacherData, setTeacherData] = useState([]);

  const fetchData=async ()=>{
    const response = await fetch('https://facultymanager-nk28.vercel.app/api/data');
    const data = await response.json();
    console.log(data);
    setTeacherData(data);
  }
  useEffect(()=>{
    fetchData();

  },[])
  const filteredData = teacherData.filter(teacher => 
    teacher.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (selectedBlock === '' || teacher.block === selectedBlock)
  );

  return (
    <div className="App">
      <h1>Teacher Information</h1>
      <div className="controls">
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <BlockFilter selectedBlock={selectedBlock} setSelectedBlock={setSelectedBlock} />
      </div>
      <TeacherTable data={filteredData} />
    </div>
  );
}

export default App;