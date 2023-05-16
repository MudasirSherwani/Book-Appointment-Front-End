/* eslint-disable import/extensions */
import { AiFillInstagram, AiOutlineTwitter } from 'react-icons/ai';
import { CgFacebook } from 'react-icons/cg';
import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Button from '../button';
import './doctor.css';
import baseUrl from '../../redux/base_url';
import Loading from '../Loading';

const Doctor = (doctor) => {
  const {
    doctor: {
      id, name, image, speciality, city, description,
    },
  } = doctor;

  const [doc, setDoctor] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleButtonClick = async () => {
    const token = localStorage.getItem('token');
    const headers = {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    };

    try {
      setIsLoading(true);
      const response = await fetch(`${baseUrl}doctors/${id}`, {
        method: 'GET',
        headers,
      });

      if (!response.ok) {
        throw new Error('Failed to fetch doctor');
      }

      const data = await response.json();
      setDoctor(data);
      setIsLoading(false);
    } catch (error) {
      throw new Error(error.message);
    }
    return isLoading ? <Loading /> : <Link to={`/doctors/${id}`} />;
  };

  return (
    <article className="doctor--card" id={doc}>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={image && image.url} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted d-flex column">
            {speciality}
            <span className="filler" />
            {city}
          </Card.Subtitle>
          <Card.Text>
            {description}
          </Card.Text>
          <Link to={`/doctors/${id}`}>
            <Button text="Talk to me" event={handleButtonClick} />
          </Link>
        </Card.Body>
        <Card.Body className="text-center">
          <Card.Link href="https://www.facebook.com" target="_blank">
            <CgFacebook className="social-m" />
          </Card.Link>
          <Card.Link href="https://www.twitter.com" target="_blank">
            <AiOutlineTwitter className="social-m" />
          </Card.Link>
          <Card.Link href="https://www.instagram.com" target="_blank">
            <AiFillInstagram className="social-m" />
          </Card.Link>
        </Card.Body>
      </Card>
    </article>
  );
};
export default Doctor;
