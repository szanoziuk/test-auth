import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyDt12flSNuK1aUll0pbYIYXNVnT-wvxe7E",
        authDomain: "my-awesome-test-app-bff2e.firebaseapp.com",
        databaseURL: "https://my-awesome-test-app-bff2e.firebaseio.com",
        projectId: "my-awesome-test-app-bff2e",
        storageBucket: "my-awesome-test-app-bff2e.appspot.com",
        messagingSenderId: "682218473392"
};

firebase.initializeApp(config);

const database = firebase.database();

export { 
    database
};
