import React, { Component } from 'react';
import './index.css';
import { Form, FormGroup, Input, Button, FormFeedback, Label } from 'reactstrap';
import fire from '../../firebase';
import { findName } from '../../helpers';
 
class SignInForm extends Component {

    state = {
        email: '',
        password: '',
        emailMessage: '',
        passwordMessage: ''
    }

    handleCange = ( e, flag ) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
        if ( !flag ) {
            const error = this.validate( e.target.value,  e.target.name );
            this.setState({
                [e.target.name+'Message']: error
            });
        } else {
            this.setState({
                [e.target.name + 'Message']: ''   
            });
        }
    }
    
    validate = ( value, name ) => {
        let error = '';
        if( value === '' && value.trim() === '' ) {
            error = 'This field is required';
        }
        if( name === 'password' && value.length <= 5 ) {
            error = 'The password must be 6 characters long or more.';
        }
        if( name ==='email' && !(/\S+@\S+\.\S+/.test(value)) ) {
            error = 'Email must be valid'
        } 
        return error;
    }

    login = (e) => {
        e.preventDefault();
        const { email, password } = this.state;
        fire.auth()
                .signInWithEmailAndPassword( email, password )
                .then( () => this.props.history.push('/') )
                .catch( e => { 
                    const name = findName(e.code);
                    this.setState({ [name+'Message']: e.message });
                });
    }

    signup = (e) => {
        e.preventDefault();
        const { email, password } = this.state;
        fire.auth()
                .createUserWithEmailAndPassword( email, password )
                .then( () => this.props.history.push('/') )
                .catch( e => { 
                    this.setState({ emailMessage: e.message });
                });
    }

    render() {
        return(
            <div className="wrapper">
                <h2> Register / Login </h2>
                <Form>
                    <FormGroup>
                        <Label> Email </Label>
                        <Input 
                            bsSize="lg"
                            type="email" 
                            name="email"
                            placeholder="Email..."
                            value={ this.state.email }
                            onChange={ (e) => this.handleCange(e, true) }
                            onBlur={ (e) => this.handleCange(e, false) }
                            invalid={ this.state.emailMessage ? true: false}
                        />
                        <FormFeedback tooltip> { this.state.emailMessage } </FormFeedback>
                    </FormGroup>
                    <FormGroup>
                        <Label> Password </Label>
                        <Input 
                            bsSize="lg" 
                            type="password" 
                            name="password" 
                            placeholder="Password..."
                            value={ this.state.password }
                            onChange={ (e) => this.handleCange(e, true) }
                            onBlur={ (e) => this.handleCange(e, false) }
                            invalid={this.state.passwordMessage ? true : false}
                        />
                        <FormFeedback tooltip> {this.state.passwordMessage} </FormFeedback>
                    </FormGroup> 
                        <Button
                            color="secondary"
                            size="lg"
                            style={{ marginRight: 20 }}
                            onClick={ this.signup }
                        > Register now </Button>
                        <Button
                            color="secondary"
                            size="lg"
                            onClick={ this.login }
                        > Log in </Button>  
                </Form>
            </div>
        );
    }
}

export default SignInForm;