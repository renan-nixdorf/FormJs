import React from 'react';
import Input from '../Form/Input';
import Container from '../Container';
import Title from '../Title';
import Button from '../Form/Button';
import LinkRoute from '../LinkRoute';
import { useForm } from 'react-hook-form';
import Error from '../Form/Error';
import Success from '../Form/Success';

const Login = () => {
  const [login, setLogin] = React.useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function LoginUser(data) {
    alert(JSON.stringify(data));
    setLogin(true);
  }

  return (
    <Container>
      <Title>Login</Title>
      <form onSubmit={handleSubmit(LoginUser)}>
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
                  'Minimum 8 characters, at least one letter, one number and one special character',
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
        <Button>Login</Button>
        {login && <Success>Login...</Success>}
        <LinkRoute route={'register'}>{`Don't have an account?`}</LinkRoute>
      </form>
    </Container>
  );
};

export default Login;
