/* eslint-disable import/no-extraneous-dependencies */
import { AiFillInstagram, AiOutlineTwitter } from 'react-icons/ai';
import { CgFacebook } from 'react-icons/cg';
import React from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Buttton from '../button';

const Doctor = ({
  id, name, city, intro, image, specialty,
}) => (
  <article className="doctor--card">
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={image && image.url} />
      <Card.Body>
        <Card.Title>{name.toUpperCase()}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          {specialty}
          <span className="filler" />
          {city}
        </Card.Subtitle>
        <Card.Text>
          {intro}
        </Card.Text>
        <Link to={`/doctors/${id}`}>
          <Buttton text="Talk to me" />
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

Doctor.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  city: PropTypes.string.isRequired,
  intro: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  specialty: PropTypes.string.isRequired,
};
export default Doctor;
