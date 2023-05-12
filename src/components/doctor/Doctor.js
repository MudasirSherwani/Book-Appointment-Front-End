/* eslint-disable import/no-extraneous-dependencies */
import { AiFillInstagram, AiOutlineTwitter } from 'react-icons/ai';
import { CgFacebook } from 'react-icons/cg';
import React from 'react';
// import React, { useNavigate } from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
// import { useDispatch } from 'react-redux';
import Buttton from '../button';
// import { fetchDoctor } from '../../redux/doctor/doctor';

const Doctor = (doctor) => {
  const {
    doctor: {
      id, name, speciality, city, description,
    },
  } = doctor;

  // const dispatch = useDispatch();
  // const redirect = useNavigate();
  const handleButtonClick = () => {
    console.log('button clicked');
    // dispatch(fetchDoctor());
    // redirect('/doctors/:id');
  };

  return (
    <article className="doctor--card" id={id}>
      <Card style={{ width: '18rem' }}>
        {/* <Card.Img variant="top" src={image && image.url} /> */}
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            {speciality}
            <span className="filler" />
            {city}
          </Card.Subtitle>
          <Card.Text>
            {description}
          </Card.Text>
          <Link to={`/doctors/${id}`}>
            <Buttton text="Talk to me" event={handleButtonClick} />
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
