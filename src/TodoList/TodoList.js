import React, { useState } from 'react';

const TodoList = () => {
  const [dataList, setDataList] = useState(['suresh', 'kutt', 'kuiiii']);
  const [data, setData] = useState('');
  const [editId, setEditId] = useState(null);

  const handleInputChange = (e) => {
    setData(e.target.value);
  };
  const handleAdd = () => {
    let newList = [...dataList, data];
    console.log(newList);
    setDataList(newList);
  };

  const handleEdit = (data, i) => {
    console.log(i, 'edit id');
    setData(data);
    setEditId(i);
  };
  const handleDelete = (i) => {
    setDataList((prev) => prev.filter((ele, ind) => ind !== i));
  };

  const handleUpdate = (i) => {
    setDataList((prev) => prev.map((ele, ind) => (ind === i ? data : ele)));
  };

  return (
    <div>
      <input
        value={data}
        onChange={handleInputChange}
        placeholder="Add to do list"
      />
      {editId !== null ? (
        <button onClick={() => handleUpdate(editId)}>update</button>
      ) : (
        <button onClick={handleAdd}>Add</button>
      )}
      <ul>
        {dataList.map((data, i) => (
          <li>
            {data}
            <button onClick={() => handleEdit(data, i)}>Edit</button>
            <button onClick={() => handleDelete(i)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
