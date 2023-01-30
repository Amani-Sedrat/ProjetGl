import React from 'react';
import {Container, FormWrap, Icon, FormContent, Form, FormH1, FormLabel,FormInput,FormButton, Text} from './ConnexionElements';

const Connexion=() => {
    return (
        <>
            <Container>
                <FormWrap>
                    <Icon to='/'>EDU Search</Icon>
                    <FormContent>
                        <Form action='#'>
                            <FormH1>Connectez à votre compte</FormH1>
                            <FormLabel htmlFor='for'>Email</FormLabel>
                            <FormInput type='email' required />
                            <FormLabel htmlFor='for'>Mot de passe</FormLabel>
                            <FormInput type='password' required />
                            <FormButton type='submit'>Continue</FormButton> <Text>Mot de passe oublié</Text>
                        </Form>
                    </FormContent>
                </FormWrap>
            </Container>
        </>
    );
};

export default Connexion;