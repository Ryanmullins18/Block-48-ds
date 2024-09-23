// Input: [ [8, 0], [5, 5], [9, 0], [5, 0], [6, 2], [5, 2] ]
// Output: [ [ 5, 0 ], [ 8, 0 ], [ 5, 2 ], [ 9, 0 ], [ 6, 2 ], [ 5, 5 ] ]

//i still dont understand even with solution

function reconstructQueue(people) {
    // Custom sorting function
    const customSort = (a, b) => {
      if (b[0] !== a[0]) {
        return b[0] - a[0];
      } else {
        return a[1] - b[1];
      }
    };
   
  
    // Implementing custom sort
    for (let i = 1; i < people.length; i++) {
      let j = i;
      while (j > 0 && customSort(people[j - 1], people[j]) > 0) {
        // Swap if the custom sort condition is not satisfied
        [people[j - 1], people[j]] = [people[j], people[j - 1]];
        j--;
      }
    }
  
    const result = [];
    // Insert each person at their k index in the result array
    for (const person of people) {
      result.splice(person[1], 0, person);
    }
  
    return result;
  }



 