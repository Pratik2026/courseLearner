import { db, collection, addDoc } from './firebase.js';
import coursesData from './dummydata.js';

const populateDatabase = async () => {
  try {
    const coursesCollection = collection(db, 'courses');

    for (const course of coursesData) {
      await addDoc(coursesCollection, course);
    }
    console.log('Database populated successfully!');
  } catch (error) {
    console.error('Error populating database:', error);
  }
};

populateDatabase();
