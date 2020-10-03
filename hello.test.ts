import * as firebase from '@firebase/rules-unit-testing';

beforeEach(() => firebase.clearFirestoreData({projectId: 'hello'}))
afterAll(() => Promise.all(firebase.apps().map(a => a.delete())))

test('hello', () => {
  const db = firebase.initializeTestApp({projectId: 'hello'}).firestore()
  const adminDb = firebase.initializeAdminApp({projectId: 'hello'}).firestore()
  firebase.assertSucceeds(adminDb.collection('sup').add({hello: 'world'}))
  firebase.assertSucceeds(db.collection('hello').add({hello: 'world'}))
})
