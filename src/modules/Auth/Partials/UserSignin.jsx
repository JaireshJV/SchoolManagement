
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { THEME } from '@theme/index'
import { setCredentials, selectCurrentUser } from '@modules/Auth/authSlice'
import SignInForm from './SignInForm'
import { baseRequest } from '@request/request'
import { OpenNotification } from '@components/common'
import NewSignInForm from './NewSignInForm'
import errorHandler from '@request/errorHandler'
import axios from 'axios'
import { setAuthHeader } from '@utils/authUtils'
import { APIURLS } from 'src/api/urls'

export const Wrapper = styled.div`
  height: 100vh;
  width: 100%;
  margin:auto;
  display:grid;
  background:${THEME.BLUE_T_69} ;
`

const SignInCard = styled.div`
  background-color:${THEME.PRIMARY_PURPLE};
  backdrop-filter:blur(1px);
  padding: 40px 32px;
  border-radius:0px 40px 0px 40px;
  max-width: 450px;
  width: 100%;
  margin: auto;
  height: 50%;
  border: 2px solid #949292;
`

const UserSignin = () => {

  const navigate = useNavigate()

  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false)


  const handleSignIn = async (data) => {
    const { email, password } = data;

    setLoading(true);
    try {
      const response = await baseRequest.post(`${APIURLS.LOGIN}`, data);
      const authData = response?.data;
      console.log(authData,'authData');
      
      setAuthHeader(email, password);
      if (authData && response.status === 200) {
        localStorage.setItem('persist', JSON.stringify({ ...authData, email, password }));
        dispatch(setCredentials(authData));
        OpenNotification({
          type: 'success',
          msg: `Welcome Back ${authData?.name}`,
        });
        navigate('/', { replace: true });
      } else {
        OpenNotification({ type: 'error', msg: response.data});
      }
    } catch (error) {
      OpenNotification({
        type: 'error',
        msg: error?.response.data.message || 'Login failed. Please try again.',
      });
    } finally {
      setLoading(false);
    }
  };



  const token = useSelector(selectCurrentUser);

  useEffect(() => {
    if (!token) {
      // if()
      navigate('/signin')
    }

  }, [token])

  return (
    // <Wrapper column>
    //   <SignInCard>
    //     <SignInForm handleSignIn={handleSignIn} />
    //   </SignInCard>
    // </Wrapper>
    <NewSignInForm loading={loading} handleSignIn={handleSignIn} />
  )
}
export default UserSignin
