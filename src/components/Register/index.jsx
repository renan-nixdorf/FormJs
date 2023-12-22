import React from 'react';
import Container from '../Container';
import Input from '../Form/Input';
import Button from '../Form/Button';
import Title from '../Title';
import LinkRoute from '../LinkRoute';
import { useForm } from 'react-hook-form';
import Error from '../Form/Error';
import Success from '../Form/Success';

const Register = () => {
  const [user, setUser] = React.useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function createUser(data) {
    alert(JSON.stringify(data));
    setUser(true);
  }

  return (
    <Container>
      <Title>Create Account</Title>
      <form onSubmit={handleSubmit(createUser)}>
        <Input
          label="user name"
          idvalue="name"
          type="text"
          onplaceholder="username"
          $registerValue={{
            ...register('name', {
              required: { value: true, message: 'Name is required' },
              maxLength: {
                value: 20,
                message: 'Maximum of 20 characters',
              },
            }),
          }}
        />
        {errors?.name?.type === 'required' && (
          <Error>{errors.name.message}</Error>
        )}
        {errors?.name?.type === 'maxLength' && (
          <Error>{errors.name.message}</Error>
        )}
        <Input
          label="email"
          idvalue="email"
          type="text"
          onplaceholder="nameemail@domain.com"
          $registerValue={{
            ...register('email', {
              required: { value: true, message: 'email is required' },
              pattern: {
                value:
                  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                message: 'Please enter a valid email',
              },
            }),
          }}
        />
        {errors?.email?.type === 'required' && (
          <Error>{errors.email.message}</Error>
        )}
        {errors?.email?.type === 'pattern' && (
          <Error>{errors.email.message}</Error>
        )}
        <Input
          label="password"
          type="password"
          idvalue="password"
          onplaceholder={'password'}
          $registerValue={{
            ...register('password', {
              required: { value: true, message: 'password is required' },
              pattern: {
                value:
                  /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
                message:
                  'Minimum 8 characters, at least 1 letter, 1 number and 1 special character',
              },
            }),
          }}
        />
        {errors?.password?.type === 'required' && (
          <Error>{errors.password.message}</Error>
        )}
        {errors?.password?.type === 'pattern' && (
          <Error>{errors.password.message}</Error>
        )}
        <Input
          label="phone"
          type="text"
          idvalue="number"
          onplaceholder="(XX) XXXXX-XXXX"
          $registerValue={{
            ...register('phone', {
              pattern: {
                value: /^[0-9]*$/,
                message: 'Only numbers',
              },
            }),
          }}
        />
        {errors?.phone?.type === 'pattern' && (
          <Error>{errors.phone.message}</Error>
        )}
        <Button>Create</Button>
        {user && <Success>user created</Success>}
        <LinkRoute route={'/'}>Already have an account?</LinkRoute>
      </form>
    </Container>
  );
};

export default Register;
