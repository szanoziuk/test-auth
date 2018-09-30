import React, { Component } from 'react';
import './index.css';
import { Form, FormGroup, Label,  Input, Button } from 'reactstrap';

class  MyForm extends Component {
    render() {
        return(
            <div className="wrapper">
                <Form>
                    <FormGroup>
                        <Label>
                            <Input 
                                bsSize="lg"
                                type="text"
                                name="username"
                                placeholder="Enter user name" 
                            />
                        </Label>
                    </FormGroup>
                    <FormGroup>
                        <Label>
                            <Input 
                                bsSize="lg" 
                                type="email" 
                                name="email" 
                                placeholder="Enter email" 
                            />
                        </Label>
                    </FormGroup>
                    <FormGroup>
                        <Label>
                            <Input 
                                bsSize="lg" 
                                type="password" 
                                name="password" 
                                placeholder="Enter password" 
                            />
                        </Label>
                    </FormGroup> 
                    <Button color="secondary" size="lg" block type="submit"> Sign in </Button>
                </Form>
            </div>
        );
    }
}

export default MyForm;