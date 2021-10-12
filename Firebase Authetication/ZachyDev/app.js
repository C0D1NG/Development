document.addEventListener('DOMContentLoaded', event => {
    const app = firebase.app();

    console.log(app);

    const db = firebase.firestore();

    const user = db.collection('students').doc('personal_info')
        .onSnapshot(doc => {
            const data = doc.data()

            document.write(`${ data.firstname }
                ${ data.time }
            `);
        })
});

const googleLogin = () => {
    const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

    firebase.auth().signInWithPopup(googleAuthProvider)
        .then(result => {
            const user = result.user;

            document.write(`Hello ${ user.displayName }`);
        })
        .catch(err => window.alert(err.message));
}