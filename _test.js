//-----------------------------------------------------------------------
import React, { Fragment, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setAuthErrors, setAuthIsLoading } from '../redux/authState';
import AuthContext from '../../Context/authContext';
import { apiCall as updateProfile } from '../Utilities/apiUtil';
import { registerUser } from '../Utilities/apiUtil';
import styled from 'styled-components';
import { FormField } from '../Utilities/FormField';
import { Button } from '../Utilities/Button';
import { FormTitle } from '../Utilities/FormTitle';
import { Errors } from './Errors';

export const SignUp = props => {
    const updateAppState = useContext(AuthContext).setAppStateHandler;
    const [inputErrors, setInputErrors] = useState({ name: false, email: false, password: false });
    const navigate = useNavigate();

    const dispatch = useDispatch();
    const { authIsLoading, authErrors } = useSelector(state => state.authReducer);

    const setInputErrorsHandler = errors => {
        setInputErrors(prevState => {
            return { ...prevState, ...newState };
        });
        dispatch(setAuthErrors(errors));
    };

    const getInputErrors = authErrors => {
        const inputErrors = {};
        authErrors.forEach(error => {
            const inputName = error.param;
            Object.assign(inputErrors, { [inputName]: true });
        });
        return inputErrors;
    };

    const onChange = e => {
        if (e.target.name === 'email') {
            const emailLowerCase = e.target.value.toLowerCase();
            setFormData({ ...formData, [e.target.name]: emailLowerCase });
        } else {
            setFormData({ ...formData, [e.target.name]: e.target.value });
        }
        const clearInputError = { [e.target.name]: false };
        setInputErrorsHandler(clearInputError);
    };

    const [formData, setFormData] = useState({ name: '', email: '', password: '', password2: '' });
    const { name, email, password, password2 } = formData;

    const signUp = async () => {
        try {
            const token = await registerUser(formData);
            const defaultProfile = { defaultTeam: 0, position: 'Unknown' };
            if (token) {
                localStorage.setItem('token', token);
                await updateProfile('post', 'api/profile', token, defaultProfile);
                updateAppState({ token: token, authError: false, authErrors: false });
            }

            navigate('/editprofile');
        } catch (err) {
            updateAppState({ token: false, authError: true, authErrors: err.errors });
            const authErrors = err.errors;
            const inputErrors = getInputErrors(authErrors);
            setInputErrorsHandler(inputErrors);
        }
    };

    const passwordError = () => {
        const error = [{ msg: 'Password do not match. Please try again' }];
        updateAppState({ token: false, isAuth: false, authError: true, authErrors: error });
        setInputErrorsHandler({ password: true });
    };

    const onSubmit = async e => {
        e.preventDefault();
        password !== password2 ? passwordError() : signUp();
    };

    return (
        <Fragment>
            <Container>
                <SignUpForm onSubmit={e => onSubmit(e)}>
                    <FormTitle text="CREATE NEW ACCOUNT" />
                    {authErrors && <Errors errors={authErrors} />}
                    <FormField
                        error={inputErrors.name}
                        type="text"
                        placeholder="Name"
                        label="FIRST NAME AND SURNAME"
                        name="name"
                        value={name}
                        onChange={onChange}
                        required
                    />
                    <FormField
                        error={inputErrors.email}
                        type="email"
                        placeholder="Email"
                        label="EMAIL"
                        name="email"
                        value={email}
                        onChange={onChange}
                        required
                    />
                    <FormField
                        error={inputErrors.password}
                        type="password"
                        placeholder="Password"
                        label="PASSWORD"
                        name="password"
                        value={password}
                        onChange={onChange}
                        minLength="6"
                        required
                    />
                    <FormField
                        error={inputErrors.password}
                        type="password"
                        placeholder="Confirm Password"
                        label="CONFIRM PASSWORD"
                        name="password2"
                        value={password2}
                        onChange={onChange}
                        minLength="6"
                        required
                    />
                    <Button text="SIGN UP" />
                    <Footer></Footer>
                </SignUpForm>
            </Container>
        </Fragment>
    );
};

const Container = styled.section`
    position: absolute;
    top: 0;
    width: 100%;
`;

const SignUpForm = styled.form`
    margin: 3rem auto 3rem auto;
    width: 22rem;
    border-radius: 0.7rem;
    background: #003a68;
    border-left: 3px solid white;
    border-right: 3px solid white;

    @media (max-device-width: 440px) {
        width: 100vw;
        margin: 0 auto 0 auto;
        padding: 1rem 0 1rem 0;
        border-radius: 0rem;
        border-left: none;
        border-right: none;
    }
`;

const Footer = styled.h1`
    margin-top: 1rem;
    border-radius: 0rem 0rem 0.7rem 0.7rem;
    text-align: center;
    padding: 0.5rem;
    font-weight: 700;
    font-size: 1rem;
    color: #003a68;
    background: white;
    text-decoration: underline;
    margin: -2px;

    @media (max-device-width: 440px) {
        border-radius: 0rem;
        font-weight: 700;
        font-size: 1rem;
    }
`;


//----------------------------------------------------------------


export const createOrderMessage = createAsyncThunk<
  {
    success: boolean;
    data: DBOrderMessage[] | null;
    error: { status?: number; message?: string } | null;
  },
  { message: string; orderId: string },
  {
    rejectValue: {
      success: boolean;
      data: DBOrderMessage[] | null;
      error: { status?: number; message?: string } | null;
    };
  }
>(
  `${sliceName}/createOrderMessage`,
  async (arg: { message: string; orderId: string }, { rejectWithValue }) => {
    const res
    const response: {
      success: boolean;
      data: DBOrderMessage[] | null;
      error: { status?: number; message?: string } | null;
    } = await ApiClient.Dashboard.createOrderMessage(arg.message, arg.orderId);
    if (response.error) {
      showErrorToast(response.error.message);
      return rejectWithValue(response);
    }
    showSuccessToast('Order message successfully created');
    return response;
  },
);

builder.addCase(createUserContact.fulfilled, (state, action) => {
    state.isLoading = false;
    const contact = action.payload.data;
    state.contactDetails = contact;
    state.errors.createUserContact = null;
  });
  builder.addCase(createUserContact.pending, (state) => {
    state.isLoading = true;
  });
  builder.addCase(createUserContact.rejected, (state, action) => {
    state.errors.createUserContact = action.payload.error;
    state.isLoading = false;
  });
