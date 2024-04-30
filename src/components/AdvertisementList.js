import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import AdvertisementItem from './AdvertisementItem';
import AdvertisementForm from './AdvertisementForm';
import { addAdvertisement, updateAdvertisement } from '../actions/advertisementActions';
import '../style/style.css';

const AdvertisementList = () => {
  const advertisements = useSelector(state => state.advertisements);
  const dispatch = useDispatch();
  const [editAdvertisementId, setEditAdvertisementId] = useState(null);
  const [showAddForm, setShowAddForm] = useState(false);

  const handleEditAdvertisement = (updatedAdvertisement) => {
    dispatch(updateAdvertisement(updatedAdvertisement));
    setEditAdvertisementId(null); 
  };

  const handleCancelEdit = () => {
    setEditAdvertisementId(null); 
  };

  const handleAddAdvertisement = (newAdvertisement) => {
    dispatch(addAdvertisement(newAdvertisement));
    setShowAddForm(false); 
  };

  return (
    <div>
      <h1>Advertisements</h1>
      <button className="advertisement-button" onClick={() => setShowAddForm(true)}>Add Advertisement</button>
      {showAddForm && (
        <AdvertisementForm 
          onCancel={() => setShowAddForm(false)} 
          onUpdate={handleAddAdvertisement} 
        />  
      )}
      {editAdvertisementId && (
        <AdvertisementForm 
          key={editAdvertisementId} 
          advertisementToEdit={advertisements.find(advertisement => advertisement.id === editAdvertisementId)} 
          onCancel={handleCancelEdit} 
          onUpdate={handleEditAdvertisement} 
        />
      )}
      <ul className="advertisement-list">
        {advertisements.map(advertisement => (
        <li key={advertisement.id} className="advertisement-list-item">
          <AdvertisementItem 
            key={advertisement.id} 
            advertisement={advertisement} 
            isEditing={editAdvertisementId === advertisement.id}
            onEdit={() => setEditAdvertisementId(advertisement.id)} 
            onCancelEdit={handleCancelEdit} 
            onUpdate={handleEditAdvertisement} 
          />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdvertisementList;
