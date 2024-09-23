// Example: 

// Input: heights_array = [1,1,4,2,1,3]
// Output: 3

// Input: heights_array = [2,7,4,2,1,3] 
// Output: 6

function checkHeightOrder(studentHeights) {
    var sortedHeightsCopy = [];
    var countOfDifferences = 0; 
    
    for (var i = 0; i < studentHeights.length; i++) {
      sortedHeightsCopy.push(studentHeights[i]);
    }
  
   for (var i = 0; i < studentHeights.length - 1; i++) {
      for (var j = 0; j < studentHeights.length - i - 1; j++) {
        if (studentHeights[j] > studentHeights[j + 1]) {
          var temp = studentHeights[j];
          studentHeights[j] = studentHeights[j + 1];
          studentHeights[j + 1] = temp;
        }
      }
    }
  
    for (var i = 0; i < studentHeights.length; i++) {
      if (studentHeights[i] !== sortedHeightsCopy[i]) {
        countOfDifferences++;
      }
    }
  
    return countOfDifferences;
  }
  
  var studentHeights = [1, 1, 4, 2, 5, 3];
  var result = checkHeightOrder(studentHeights);
  console.log(result);