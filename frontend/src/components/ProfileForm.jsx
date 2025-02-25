// import React, { useState } from 'react';
// import { Button, Form, InputGroup } from 'react-bootstrap';
// import { setCredentials } from '../slices/authSlice';
// import { toast } from 'react-toastify';
// import { useDispatch, useSelector } from 'react-redux';
// import { useProfileMutation } from '../slices/usersApiSlice';
// import { FaEye, FaEyeSlash } from 'react-icons/fa';
// import Loader from './Loader';

// const ProfileForm = () => {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const [showPassword, setShowPassword] = useState(false);
//   const [showConfirmPassword, setConfirmShowPassword] = useState(false);

//   const { userInfo } = useSelector(state => state.auth);

//   const [updateProfile, { isLoading: isUpdateProfileLoading }] =
//     useProfileMutation();

//   const dispatch = useDispatch();

//   const togglePasswordVisibility = () => {
//     setShowPassword(!showPassword);
//   };
//   const toggleConfirmPasswordVisibility = () => {
//     setConfirmShowPassword(!showConfirmPassword);
//   };

//   const submitHandler = async e => {
//     e.preventDefault();

//     try {
//       if (password !== confirmPassword) {
//         return toast.error('Passwords do not match!');
//       }
//       const res = await updateProfile({ name, email, password }).unwrap();
//       dispatch(setCredentials({ ...res }));
//       setName('');
//       setEmail('');
//       setPassword('');
//       setConfirmPassword('');
//       toast.success(res.message);
//     } catch (error) {
//       toast.error(error?.data?.message || error.error);
//     }
//   };
//   return (
//     <Form onSubmit={submitHandler}>
//       <Form.Group className='mb-3' controlId='name'>
//         <Form.Label>Name</Form.Label>
//         <Form.Control
//           value={name}
//           type='text'
//           placeholder='Enter name'
//           onChange={e => setName(e.target.value)}
//         />
//       </Form.Group>
//       <Form.Group className='mb-3' controlId='email'>
//         <Form.Label>Email address</Form.Label>
//         <Form.Control
//           value={email}
//           type='email'
//           placeholder='Enter email'
//           onChange={e => setEmail(e.target.value)}
//         />
//       </Form.Group>
//       <Form.Group className='mb-3' controlId='password'>
//         <Form.Label>Password</Form.Label>
//         <InputGroup>
//           <Form.Control
//             type={showPassword ? 'text' : 'password'}
//             value={password}
//             placeholder='Enter password'
//             onChange={e => setPassword(e.target.value)}
//           />
//           <InputGroup.Text
//             onClick={togglePasswordVisibility}
//             id='togglePasswordVisibility'
//             style={{ cursor: 'pointer' }}
//           >
//             {showPassword ? <FaEye /> : <FaEyeSlash />}
//           </InputGroup.Text>
//         </InputGroup>
//       </Form.Group>
//       <Form.Group className='mb-3' controlId='confirmPassword'>
//         <Form.Label>Confirm Password</Form.Label>
//         <InputGroup>
//           <Form.Control
//             type={showConfirmPassword ? 'text' : 'password'}
//             value={confirmPassword}
//             placeholder='Confirm password'
//             onChange={e => setConfirmPassword(e.target.value)}
//           />
//           <InputGroup.Text
//             onClick={toggleConfirmPasswordVisibility}
//             id='toggleConfirmPasswordVisibility'
//             style={{ cursor: 'pointer' }}
//           >
//             {showConfirmPassword ? <FaEye /> : <FaEyeSlash />}
//           </InputGroup.Text>
//         </InputGroup>
//       </Form.Group>
//       <Button className='mb-3 w-100' variant='warning' type='submit'>
//         Update
//       </Button>
//       {isUpdateProfileLoading && <Loader />}
//     </Form>
//   );
// };

// export default ProfileForm;
import React, { useState } from 'react';
import { setCredentials } from '../slices/authSlice';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { useProfileMutation } from '../slices/usersApiSlice';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import Loader from './Loader';
import styled from 'styled-components';

// Styled Components
const FormContainer = styled.form`
  padding: 25px;
  border-radius: 8px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  color: #333;
  max-width: 400px;
  margin: auto;
  background: #fff;
`;

const FormGroup = styled.div`
  margin-bottom: 15px;
`;

const Label = styled.label`
  font-size: 15px;
  font-weight: 600;
  display: block;
  margin-bottom: 5px;
  color: #444;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 15px;
  color: #333;
  transition: border 0.3s ease;
  &:focus {
    border-color: #007bff;
    outline: none;
  }
`;

const PasswordWrapper = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #ccc;
  border-radius: 5px;
  overflow: hidden;
  background: #fff;
`;

const PasswordInput = styled(Input)`
  border: none;
  flex: 1;
`;

const ToggleButton = styled.span`
  padding: 10px;
  cursor: pointer;
  color: #555;
  transition: all 0.3s ease;
  &:hover {
    color: #007bff;
  }
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 12px;
  font-size: 16px;
  font-weight: bold;
  background: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  transition: background 0.3s ease-in-out;
  cursor: pointer;
  &:hover {
    background: #0056b3;
  }
`;

const ProfileForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setConfirmShowPassword] = useState(false);

  const { userInfo } = useSelector((state) => state.auth);
  const [updateProfile, { isLoading: isUpdateProfileLoading }] = useProfileMutation();
  const dispatch = useDispatch();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setConfirmShowPassword(!showConfirmPassword);
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      if (password !== confirmPassword) {
        return toast.error('Passwords do not match!');
      }
      const res = await updateProfile({ name, email, password }).unwrap();
      dispatch(setCredentials({ ...res }));
      setName('');
      setEmail('');
      setPassword('');
      setConfirmPassword('');
      toast.success(res.message);
    } catch (error) {
      toast.error(error?.data?.message || error.error);
    }
  };

  return (
    <FormContainer onSubmit={submitHandler}>
      <FormGroup>
        <Label>Name</Label>
        <Input type="text" value={name} placeholder="Enter name" onChange={(e) => setName(e.target.value)} />
      </FormGroup>

      <FormGroup>
        <Label>Email Address</Label>
        <Input type="email" value={email} placeholder="Enter email" onChange={(e) => setEmail(e.target.value)} />
      </FormGroup>

      <FormGroup>
        <Label>Password</Label>
        <PasswordWrapper>
          <PasswordInput type={showPassword ? 'text' : 'password'} value={password} placeholder="Enter password" onChange={(e) => setPassword(e.target.value)} />
          <ToggleButton onClick={togglePasswordVisibility}>{showPassword ? <FaEye /> : <FaEyeSlash />}</ToggleButton>
        </PasswordWrapper>
      </FormGroup>

      <FormGroup>
        <Label>Confirm Password</Label>
        <PasswordWrapper>
          <PasswordInput type={showConfirmPassword ? 'text' : 'password'} value={confirmPassword} placeholder="Confirm password" onChange={(e) => setConfirmPassword(e.target.value)} />
          <ToggleButton onClick={toggleConfirmPasswordVisibility}>{showConfirmPassword ? <FaEye /> : <FaEyeSlash />}</ToggleButton>
        </PasswordWrapper>
      </FormGroup>

      <SubmitButton type="submit">Update</SubmitButton>

      {isUpdateProfileLoading && <Loader />}
    </FormContainer>
  );
};

export default ProfileForm;
