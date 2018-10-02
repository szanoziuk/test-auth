import React, { Component } from 'react';
import './index.css';
import { Form, FormGroup, Input, Button } from 'reactstrap';
import fire from '../firebase';
// import firebase from 'firebase/app';
// import 'firebase/auth';

class SignInForm extends Component {

    state = {
        email: '',
        password: '',
    }

    handleCange = ( e ) => {
        this.setState({
            [e.target.name]: e.target.value 
        });
    }

    handleSubmit = ( e, type ) => {
        e.preventDefault();
        const { email, password } = this.state;
        if( type ) {
            fire.auth()
                .signInWithEmailAndPassword( email, password )
                .then( () => console.log('log in') )
                .catch(e => {
                    console.log(e.code, e.message);
                });
        } else {
            fire.auth()
                .createUserWithEmailAndPassword( email, password )
                .then( () => console.log('Registration is succseful') )
                .catch( e => {
                    console.log( e.code, e.message );
                });
        }
    }


    render() {
        return(
            <div className="wrapper">
                <h2> Register / Login </h2>
                <Form onSubmit={ (e) => this.handleSubmit(e, null) }>
                    <FormGroup>
                        <Input 
                            bsSize="lg"
                            type="email" 
                            name="email"
                            placeholder="Email..."
                            value={ this.state.email }
                            onChange={ (e) => this.handleCange(e) }
                            required
                        />
                    </FormGroup>
                    <FormGroup>
                        <Input 
                            bsSize="lg" 
                            type="password" 
                            name="password" 
                            placeholder="Password..."
                            value={ this.state.password }
                            onChange={ (e) => this.handleCange(e) }
                            required
                        />
                    </FormGroup> 
                        <Button
                            color="secondary"
                            size="lg"
                            style={{ marginRight: 20 }}
                            onSubmit={ (e) => this.handleSubmit(e, false) }
                        > Register now </Button>
                        <Button
                            color="secondary"
                            size="lg"
                            onSubmit={ (e) => this.handleSubmit(e, true) }
                        > Log in </Button>  
                </Form>
            </div>
        );
    }
}

export default SignInForm;