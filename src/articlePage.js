const firebase = require('firebase/app').default
require('firebase/firestore')

const firebaseConfig = {
  apiKey: "AIzaSyB3e2ThGt8e2pWxb0CpD3_LfifVCac3ayI",
  authDomain: "domestika-test.firebaseapp.com",
  projectId: "domestika-test",
  storageBucket: "domestika-test.appspot.com",
  messagingSenderId: "183461862852",
  appId: "1:183461862852:web:2285f57c70b9162a949891"
};

firebase.initializeApp(firebaseConfig);

const firestore = firebase.firestore()
const articles = firestore.collection('articles')

export const getImages = async () => {
  const res = await articles.doc("1").get()

  return res.data()
}