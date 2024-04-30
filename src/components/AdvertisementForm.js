import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addAdvertisement, updateAdvertisement } from '../actions/advertisementActions';

const AdvertisementForm = ({ advertisementToEdit, onCancel, onUpdate }) => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState(advertisementToEdit ? advertisementToEdit.title : '');
  const [description, setDescription] = useState(advertisementToEdit ? advertisementToEdit.description : '');

  const handleAdd = () => {
    dispatch(addAdvertisement({ title, description }));
    setTitle('');
    setDescription('');
  };

  const handleUpdate = () => {
    dispatch(updateAdvertisement({ ...advertisementToEdit, title, description }));
    setTitle('');
    setDescription('');
    onCancel(); 
  };

  return (
    <div className={`advertisement-form${advertisementToEdit ? ' advertisement-form-edit' : ''}`}>
      <h2>{advertisementToEdit ? 'Edit Advertisement' : 'Add Advertisement'}</h2>
      <form>
        <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
        <textarea placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
        {advertisementToEdit ? (
          <button type="button" onClick={handleUpdate}>Update</button>
        ) : (
          <button type="button" onClick={handleAdd}>Add</button>
        )}
        <button type="button" onClick={onCancel}>Cancel</button> 
      </form>
    </div>
  );
};

export default AdvertisementForm;
