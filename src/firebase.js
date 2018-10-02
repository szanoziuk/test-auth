import firebase from 'firebase/app';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDt12flSNuK1aUll0pbYIYXNVnT-wvxe7E",
        authDomain: "my-awesome-test-app-bff2e.firebaseapp.com",
        databaseURL: "https://my-awesome-test-app-bff2e.firebaseio.com",
        projectId: "my-awesome-test-app-bff2e",
        storageBucket: "my-awesome-test-app-bff2e.appspot.com",
        messagingSenderId: "682218473392"
};

const fire = firebase.initializeApp(config);

export default fire; 

    