import { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import googleIcon from '../../assets/img/googleIcon.png';
import './styles.scss';

const RegistrationForm = () => {
  const [success, setSuccess] = useState(false);

  const validationSchema = Yup.object({
    firstName: Yup.string().required('First name is required'),
    lastName: Yup.string().required('Last name is required'),
    email: Yup.string()
      .matches(
        /^\d+$|(^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$)/,
        'Enter a valid email or phone number'
      )
      .required('Email or phone number is required'),
    password: Yup.string().required('Password is required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Passwords must match')
      .required('Confirm password is required'),
    dateOfBirth: Yup.date().required('Date of birth is required'),
    terms: Yup.bool().oneOf([true], 'You must accept the terms'),
    rememberMe: Yup.bool(),
  });

  const handleSuccessMessage = () => {
    setSuccess(true);
    setTimeout(() => {
      setSuccess(false);
    }, 5000);
  };

  return (
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
        dateOfBirth: '',
        terms: false,
        rememberMe: false,
      }}
      validationSchema={validationSchema}
      onSubmit={(values, { resetForm }) => {
        setSuccess(true);
        handleSuccessMessage();
        resetForm();
      }}
    >
      {() => (
        <Form className='registration-form'>
          <div className='form-wrap'>
            <div className='form-column'>
              <div className='form-group'>
                <label htmlFor='firstName'>First name</label>
                <Field
                  type='text'
                  id='firstName'
                  name='firstName'
                  className='form-control'
                />
                <ErrorMessage
                  name='firstName'
                  component='span'
                  className='error-message'
                />
              </div>

              <div className='form-group'>
                <label htmlFor='email'>Email or phone number</label>
                <Field
                  type='text'
                  id='email'
                  name='email'
                  className='form-control'
                />
                <ErrorMessage
                  name='email'
                  component='span'
                  className='error-message'
                />
              </div>

              <div className='form-group'>
                <label htmlFor='password'>Password</label>
                <Field
                  type='password'
                  id='password'
                  name='password'
                  className='form-control'
                />
                <ErrorMessage
                  name='password'
                  component='span'
                  className='error-message'
                />
              </div>
            </div>

            <div className='form-column'>
              <div className='form-group'>
                <label htmlFor='lastName'>Last name</label>
                <Field
                  type='text'
                  id='lastName'
                  name='lastName'
                  className='form-control'
                />
                <ErrorMessage
                  name='lastName'
                  component='span'
                  className='error-message'
                />
              </div>

              <div className='form-group'>
                <label htmlFor='dateOfBirth'>Date of birth (MM/DD/YY)</label>
                <Field
                  type='date'
                  id='dateOfBirth'
                  name='dateOfBirth'
                  className='form-control'
                />
                <ErrorMessage
                  name='dateOfBirth'
                  component='span'
                  className='error-message'
                />
              </div>

              <div className='form-group'>
                <label htmlFor='confirmPassword'>Confirm password</label>
                <Field
                  type='password'
                  id='confirmPassword'
                  name='confirmPassword'
                  className='form-control'
                />
                <ErrorMessage
                  name='confirmPassword'
                  component='span'
                  className='error-message'
                />
              </div>
            </div>
          </div>

          <div className='form-box'>
            <a href='/forgot-password' className='forgot-password'>
              Forgot password?
            </a>

            <div className='checkbox-group'>
              <Field
                type='checkbox'
                id='rememberMe'
                name='rememberMe'
                className='form-control-checkbox'
              />
              <label htmlFor='rememberMe'>Remember me</label>
            </div>

            <div className='checkbox-group'>
              <Field
                type='checkbox'
                id='terms'
                name='terms'
                className='form-control-checkbox'
              />
              <label htmlFor='terms'>
                I agree to all the
                <a href='/terms'> Terms </a> and
                <a href='/privacy-policy'> Privacy policy </a>
              </label>
              <ErrorMessage
                name='terms'
                component='span'
                className='error-message'
              />
            </div>
          </div>

          <div className='form-footer'>
            <button type='submit' className='btn-primary'>
              Create account
            </button>
            <button type='button' className='btn-secondary'>
              <img src={googleIcon} alt='google-icon' />
              Sign-in with Google
            </button>
          </div>

          {success && (
            <p className='success-popup'>Account created successfully!</p>
          )}
        </Form>
      )}
    </Formik>
  );
};

export default RegistrationForm;
