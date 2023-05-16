import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import '../appointment/sohaib.css';
import baseUrl from '../../redux/base_url';

function AddDoctor() {
  const [name, setName] = useState('');
  const [city, setCity] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');
  const [speciality, setSpeciality] = useState('');
  const [nameError, setNameError] = useState(false);
  const [cityError, setCityError] = useState(false);
  const [descriptionError, setDescriptionError] = useState(false);
  const [imageError, setImageError] = useState(false);
  const [specialityError, setSpecialityError] = useState(false);

  const resetValues = () => {
    setName('');
    setCity('');
    setDescription('');
    setImage('');
    setSpeciality('');
  };

  const body = document.querySelector('body');
  const handleImageUpload = async (event) => {
    const file = event.target.files[0];
    const formData = new FormData();
    formData.append('image', file);
    try {
      body.style.cursor = 'wait';
      const response = await axios.post('https://api.imgbb.com/1/upload?key=8b33c005b4494d49345774dd0cde37db', formData);
      setImage(response.data.data.url);
    } catch (error) {
      body.style.cursor = 'default';
    } finally {
      body.style.cursor = 'default';
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let errors = false;

    if (name === '') {
      setNameError(true);
      errors = true;
    } else {
      setNameError(false);
    }

    if (city === '') {
      setCityError(true);
      errors = true;
    } else {
      setCityError(false);
    }

    if (description === '') {
      setDescriptionError(true);
      errors = true;
    } else {
      setDescriptionError(false);
    }

    if (image === '') {
      setImageError(true);
      errors = true;
    } else {
      setImageError(false);
    }

    if (speciality === '') {
      setSpecialityError(true);
      errors = true;
    } else {
      setSpecialityError(false);
    }

    if (!errors) {
      try {
        const token = localStorage.getItem('token');
        const response = await fetch(`${baseUrl}doctors`, {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name,
            city,
            description,
            image,
            speciality,
          }),
        });
        if (response.ok) {
          toast.success('Doctor created successfully!');
          resetValues();
        } else {
          throw new Error('Failed to create doctor');
        }
      } catch (error) {
        toast.error(error.message || 'Failed to create doctor');
      }
    }
  };

  return (
    <section className="content home--splitter flex">
      <div className="form-container">
        <div className="container">
          <form onSubmit={handleSubmit} className="doctor-form">
            <h2 className="page-title">Add Doctor</h2>
            <div className="form-group">
              <input
                type="text"
                id="name-input"
                className="doctor-input"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                data-testid="input-name"
              />
              {nameError && <span className="error">Name is required</span>}
            </div>
            <div className="form-group">
              <input
                type="text"
                id="city-input"
                className="doctor-input"
                placeholder="City"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                data-testid="input-city"
              />
              {cityError && <span className="error">City is required</span>}
            </div>
            <div className="form-group">
              <input
                type="text"
                id="description-input"
                className="doctor-input"
                placeholder="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                data-testid="input-description"
              />
              {descriptionError && <span className="error">Description is required</span>}
            </div>
            <div className="form-group">
              <input
                type="text"
                id="speciality-input"
                className="doctor-input"
                placeholder="Speciality"
                value={speciality}
                onChange={(e) => setSpeciality(e.target.value)}
                data-testid="input-speciality"
              />
              {specialityError && <span className="error">Speciality is required</span>}
            </div>
            <div className="form-group image-field">
              <input
                type="file"
                id="image-input"
                className="doctor-input"
                onChange={handleImageUpload}
                data-testid="input-image"
              />
              {imageError && <span className="error">Image is required</span>}
            </div>
            <div>
              <button type="submit" data-testid="button-submit" className="doctor-submit-button">
                Add Doctor
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default AddDoctor;
