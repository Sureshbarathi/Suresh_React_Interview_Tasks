import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ApiCrud = () => {
  const [listData, setListData] = useState([]);
  const [isEditing, setIsEditing] = useState(false);

  const [newItem, setNewItem] = useState({
    userId: 1,
    id: 1,
    title: '',
    body: '',
  });

  const url = `https://jsonplaceholder.typicode.com/posts`;

  // useEffect(() => {
  //   fetch(url)
  //     .then((res) => res.json())
  //     .then((json) => {
  //       console.log('json', json);
  //       setListData(json);
  //     });
  // }, [url]);

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        // console.log(res);
        setListData(res.data);
      })
      .catch((err) => console.log(err));
  }, [url]);

  // useEffect(() => {
  //   // console.log('newItem', newItem);
  //   console.log('listData', listData);
  // }, [listData]);

  const handleDelete = async (id) => {
    // await fetch(`${url}/${id}`, {
    //   method: 'DELETE',
    // });
    let removedList = listData.filter((item) => item.id !== id);
    setListData(removedList);
  };

  const handleEdit = (item) => {
    console.log('edit item', item);
    setNewItem(item);
    setIsEditing(true);
  };

  const handleAdd = async () => {
    // console.log('ADDED');
    if (!newItem.title.trim() || !newItem.body.trim()) {
      alert('Please fill all feilds');
      return;
    }

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newItem),
    });

    const data = await response.json();

    setListData((prev) => [data, ...prev]);
  };

  const handleInputs = (e) => {
    const { name, value } = e.target;
    setNewItem((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleUpdate = async () => {
    const response = await fetch(`${url}/${newItem.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newItem),
    });

    const updatedItem = await response.json();

    setListData((prev) =>
      prev.map((item) => (item.id === updatedItem.id ? updatedItem : item))
    );

    setIsEditing(false);

    setNewItem({
      userId: 1,
      id: null,
      title: '',
      body: '',
    });
  };

  return (
    <div>
      <h3>Crud with Dummy API</h3>
      <form>
        <label>Title</label>
        <input name="title" onChange={handleInputs} value={newItem.title} />
        <label>Body</label>
        <input name="body" onChange={handleInputs} value={newItem.body} />
      </form>
      {isEditing ? (
        <button onClick={handleUpdate}>Update</button>
      ) : (
        <button onClick={handleAdd}>Add</button>
      )}
      <ul>
        {listData.map((data) => (
          <li>
            ID_{data.id} - {data.title} <br />
            <button onClick={() => handleEdit(data)}>Edit</button>
            <button onClick={() => handleDelete(data.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default ApiCrud;
