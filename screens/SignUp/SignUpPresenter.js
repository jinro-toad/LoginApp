import React from 'react';
import styled from 'styled-components/native'
import PropTypes from 'prop-types';
import CustomButton from "../../components/CustomButton";
import CustomInput from "../../components/CustomInput";

const Container = styled.View`
  flex :1;
  align-items: center;
  justify-content: center;
`

const FormContainer = styled.View`
  align-items: center;
  width: 80%;
  height: 50%;
  justify-content: space-around;  
`

const ButtonContainer = styled.View`
  margin-top: 25px;
  width: 100%;  
  margin-bottom: 80px;
`


const SignUpPresenter = () => (
    <Container>
        <FormContainer>
            <CustomInput placeholder="First Name" />
            <CustomInput placeholder="Last Name" />
            <CustomInput placeholder="Email" />
            <CustomInput placeholder="Password" />
            <ButtonContainer>
                <CustomButton text={'Sign Up'} command={() => console.log('Sign')} />
            </ButtonContainer>
        </FormContainer>
    </Container>
)


SignUpPresenter.propTypes = {
    
};

export default SignUpPresenter;
