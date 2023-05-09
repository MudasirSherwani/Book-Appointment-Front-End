import React, { useState } from 'react';

function AddDoctor() {
  const user = JSON.parse(localStorage.getItem('user'));
  const [name, setName] = useState('');
  const [city, setCity] = useState('');
  const [discription, setDiscription] = useState('');
  const [image, setImage] = useState('');
  const [speciality, setSpeciality] = useState('');
  const [nameError, setNameError] = useState(false);
  const [cityError, setCityError] = useState(false);
  const [discriptionError, setDiscriptionError] = useState(false);
  const [imageError, setImageError] = useState(false);
  const [specialityError, setSpecialityError] = useState(false);

  const restValue = () => {
    setName('');
    setCity('');
    setDiscription('');
    setImage('');
    setSpeciality('');
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

    if (discription === '') {
      setDiscriptionError(true);
      errors = true;
    } else {
      setDiscriptionError(false);
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
        const response = await fetch('http://localhost:3000/doctors', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name,
            city,
            discription,
            image,
            speciality,
          }),
        });
        if (response.ok) {
          toast.success('Doctor created successfully!');
          restValue();
        } else {
          throw new Error('Failed to create doctor');
        }
      } catch (error) {
        toast.error(error.message || 'Failed to create doctor');
      }
    }
  };

  return (
    <section className="add-doctor">
      <form onSubmit={handleSubmit}>
        <h2>Add Doctor</h2>
        <div className="form-group">
            <span>Name:</span>
            <input
                type="text"
                id="name-input"
                value={name}
                onChange={(e) => setName(e.target.value)}
                datatestid = 'input-name'
            />
            {nameError && <span className="error">Name is required</span>}
        </div>
        <div className="form-group">
            <span>City:</span>
            <input
                type="text"
                id="city-input"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                datatestid = 'input-city'
            />
            {cityError && <span className="error">City is required</span>}
        </div>
        <div className="form-group">
            <span>Discription:</span>
            <input
                type="text"
                id="discription-input"
                value={discription}
                onChange={(e) => setDiscription(e.target.value)}
                datatestid = 'input-discription'
            />
            {discriptionError && <span className="error">Discription is required</span>}
        </div>


      </form>

    </section>
  );
}

export default AddDoctor;
