import React, { useState } from 'react';
import DataList from './DataList';
import './CrudApplication.css';

const CrudApplication = () => {
  // console.log(DataList);
  const [initialData, setInitialData] = useState(DataList);
  const [editId, setEditId] = useState(null);
  const [editValue, setEditValue] = useState('');
  const [addData, setAddData] = useState(false);
  // const [addedValues, setAddedValues] = useState([]);

  const [newItem, setNewItem] = useState({
    id: '',
    name: '',
    age: '',
    petname: '',
  });

  const handleEdit = (item) => {
    setEditId(item.id);
    setEditValue(item.name);
  };

  const handleSave = (id) => {
    let newDatas = initialData.map((ele) => {
      if (ele.id === id) {
        return { ...ele, name: editValue };
      }
      return ele;
    });
    // console.log(newDatas);
    setInitialData(newDatas);
    setEditId(null);
  };

  const handleInputChange = (e) => {
    setEditValue(e.target.value);
  };

  const handleDeleta = (id) => {
    let deletedDatas = initialData.filter((data) => data.id !== id);
    setInitialData(deletedDatas);
  };

  const handleAdd = () => {
    setAddData(true);
  };

  const handleClose = () => {
    setAddData(false);
  };

  const handleInputs = (e) => {
    const { name, value } = e.target;
    setNewItem((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSaveData = () => {
    console.log('DATA SAVED');
    setInitialData([...initialData, newItem]);
    console.log(initialData);
  };

  const handleCancel = () => {
    setEditId(null);
  };

  return (
    <div>
      <h4>Crud App</h4>
      <ul>
        {initialData.map((item) => (
          <li key={item.id}>
            {editId === item.id ? (
              <>
                <input onChange={handleInputChange} value={editValue} />
                <button onClick={() => handleSave(item.id)}>Save</button>
                <button onClick={handleCancel}>Cancel</button>
              </>
            ) : (
              <>
                <span>{item.name}</span>
                <button onClick={() => handleEdit(item)}>Edit</button>
                <button onClick={() => handleDeleta(item.id)}>Delete</button>
                <button onClick={handleAdd}>Add</button>
              </>
            )}
          </li>
        ))}
      </ul>
      {addData ? (
        <div>
          <button onClick={handleClose}>Close</button> <br />
          <label> Name :</label> <input name="name" onChange={handleInputs} />
          <br />
          <label> id :</label> <input name="id" onChange={handleInputs} />
          <br />
          <label> age :</label> <input name="age" onChange={handleInputs} />
          <br />
          <label> petname :</label>{' '}
          <input name="petname" onChange={handleInputs} />
          <br />
          <button onClick={handleSaveData}>Save</button>
        </div>
      ) : null}
    </div>
  );
};
export default CrudApplication;
