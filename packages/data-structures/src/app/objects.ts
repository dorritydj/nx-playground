const instructor = {
  firstName: 'Kelly',
  isInstructor: true,
  favoriteNumbers: [1, 2, 3, 4],
};

// accessing, removing, deleting all O(1)
// searching O(n)

Object.keys(instructor); // O(n), same with values and entries
Object.hasOwn(instructor, 'firstName'); // O(1)
