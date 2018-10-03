import React from 'react';
import { Button } from 'reactstrap';
import fire from '../firebase';

const Home = (props) => {
    const logOut = () => {
        fire.auth()
            .signOut()
            .then( () => { props.history.push('/log-in') } )
            .catch( e => console.log(e) );
    }

    const user = fire.auth().currentUser ?
                    fire.auth().currentUser.email : null;
    return(
        <div>
            <h1>  You are home </h1>
            <p> { user } </p>
            <Button
                onClick={ logOut }
                color="secondary"
                size="lg"
            > Log out </Button>
        </div>
    );
}


export default Home;    