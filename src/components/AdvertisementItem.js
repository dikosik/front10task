import React, { memo, useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteAdvertisement } from '../actions/advertisementActions';
import AdvertisementForm from './AdvertisementForm';

const AdvertisementItem = ({ advertisement }) => {
  const dispatch = useDispatch();
  const [editing, setEditing] = useState(false);

  const handleEdit = () => {
    setEditing(true);
  };

  const handleDelete = () => {
    dispatch(deleteAdvertisement(advertisement.id));
  };

  const handleCancelEdit = () => {
    setEditing(false);
  };

  return (
    <div>
      {editing ? (
        <AdvertisementForm advertisementToEdit={advertisement} onCancel={handleCancelEdit} />
      ) : (
        <>
          <h3>{advertisement.title}</h3>
          <p>{advertisement.description}</p>
          <button onClick={handleEdit}>Edit</button>
          <button onClick={handleDelete}>Delete</button>
        </>
      )}
    </div>
  );
};

export default memo(AdvertisementItem);
