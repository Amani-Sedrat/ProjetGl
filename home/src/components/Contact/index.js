import React from 'react';
import {Container, FormWrap, Form, FormContent,  FormH1, FormLabel,FormInput,FormButton} from './ContactElements';

const Contact=() => {
    return (
        <Container id="contact">
        <FormH1>Contactez-nous</FormH1>
        <FormWrap>
        <FormContent>
                    <Form action='#'>
                        <FormLabel htmlFor='for'>Nom</FormLabel>
                        <FormInput type='text' required />
                        <FormLabel htmlFor='for'>Prénom</FormLabel>
                        <FormInput type='text' required />
                        <FormLabel htmlFor='for'>Email</FormLabel>
                        <FormInput type='email' required />
                        <FormLabel htmlFor='for'>Commentaire</FormLabel>                            
				        <FormInput type='text' required />
                        <FormButton type='submit'>Envoyer</FormButton> 
                    </Form>
                </FormContent>
        </FormWrap>
    </Container>
    );
};

export default Contact;