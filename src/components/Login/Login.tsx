import {SyntheticEvent, useState, useEffect, FC} from 'react';
import {useHistory} from 'react-router-dom';
import {Routes} from '../../constants';
import ErrorBlock from '../ErrorBlock';
import * as yup from 'yup';
import YupPassword from 'yup-password';
import Spinner from '../../components/Spinner'
import { trackPromise } from 'react-promise-tracker';

YupPassword(yup); // extend yup

import './login-style.scss';

interface ILogin {
  onLogin: (username:string, password:string) => Promise<void>
}

const Login: FC<ILogin> = ({ onLogin }) => {
  const {push} = useHistory();
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [usernameIsValid, setUsernameIsValid] = useState<string>('');
  const [passwordIsValid, setPasswordIsValid] = useState<string>('');


  const passwordSchema = yup.string().password().required()
  const usernameSchema = yup.string().min(5).required()

  const handleSubmit = async (event: SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();
    setErrorMessage(null);

    try {
      try {
        try {
          await usernameSchema.validate(username);
        } catch {
          setUsernameIsValid("Minimum 5 characters");
          setTimeout(() => setUsernameIsValid(''), 6500);
        }
        try {
          await passwordSchema.validate(password);
        } catch {
          setPasswordIsValid('Min 8 characters, at least 1 uppercase letter, at least 1 number and at least one symbol. "Password: Gau1234. \"');
            setTimeout(() => setPasswordIsValid(''), 6500);
        }
      } finally {
        await trackPromise(onLogin(username, password));
        push(Routes.Users);
      }
    } catch (error) {
        //console.error(error.message)
        setErrorMessage("Wrong credentials");
    }
  };

  useEffect(() => {
      return () => {
        setErrorMessage('')
      }
      })

  return (
    <div className="login-page">
      <form className="login-form" onSubmit={handleSubmit}>
        <h1 className="text-center">
          Mygom.tech
        </h1>
        <input
          value={username}
          onChange={(event) => setUsername(event.target.value)}
          placeholder="Username"
          type="text"
          className="input mt-52px"
        />
        <div className="credentials-error">{usernameIsValid}</div>
        <input
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          placeholder="Password"
          type="password"
          className="input mt-24px"
        />
        <div className="credentials-error">{passwordIsValid}</div>
        <ErrorBlock  error={errorMessage}/>
        <Spinner />
        <button type="submit" className="button mt-24px">
          Login
        </button>
      </form>
    </div>
  )
};

export default Login;
