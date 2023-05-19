import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import { useDispatch, useSelector } from 'react-redux';
import { signup } from '../../redux/user/auth';

const SignupForm = () => {
  const [name, setName] = useState('');
  const [gender, setGender] = useState('');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const success = useSelector((state) => state.auth.success);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    if (event.cancelable) {
      event.preventDefault();
    }
    if (password !== confirmPassword) {
      toast.error('Confirm Passwords do not match');
      return;
    }
    const reqBody = {
      name,
      gender,
      age,
      email,
      password,
    };
    await dispatch(signup(reqBody));
  };

  useEffect(() => {
    if (success) {
      navigate('/login');
    }
  }, [success, navigate]);

  return (
    <div className="form-container">
      <Form className="login-form" onSubmit={handleSubmit}>
        <h2 className="form-title">Create Your Account Here!</h2>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Control
            type="name"
            placeholder="Enter your name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicGender">
          <Form.Select
            value={gender}
            onChange={(event) => setGender(event.target.value)}
            required
          >
            <option value="">Select your gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicAge">
          <Form.Control
            type="number"
            placeholder="Enter your age"
            value={age}
            onChange={(event) => setAge(event.target.value)}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formConfirmPassword">
          <Form.Control
            type="password"
            placeholder="Password Confirmation"
            value={confirmPassword}
            onChange={(event) => setConfirmPassword(event.target.value)}
            required
          />
        </Form.Group>
        <Button variant="primary" type="submit" className="main--btn">Create</Button>
        <div className="welcome-page">
          <p className="add-new">Already have an account? Click here to Log in</p>
          <Button variant="white" type="button" className="main--btn" onClick={() => navigate('/login')}>
            Login
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default SignupForm;
