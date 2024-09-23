// Input: tickets = [7,1,1,1], k = 0
// Output: 10

// Input: tickets = [2,3,2], k = 2
// Output: 6

function calculateTimeToPurchase(tickets, targetPosition) {
    const numberOfPeople = tickets.length;
    let elapsedTime = 0;
    let queue = Array.from({ length: numberOfPeople }, (_, i) => i); // Create an array representing the queue
  
    while (true) {
      const currentPerson = queue.shift(); // Get the front person from the queue
  
      if (currentPerson === targetPosition) {
        return elapsedTime; // Return the time if it's the target person
      }
  
      if (tickets[currentPerson] > 0) {
        tickets[currentPerson]--; // Reduce the number of tickets for the current person
        queue.push(currentPerson); // Send the current person to the end of the queue
      }
  
      elapsedTime++; // Increment the time
    }
  }
  
  // Example usage
  const ticketQuantities = [2,3,2];
  const targetPersonPosition = 2;
  
  const timeSpent = calculateTimeToPurchase(ticketQuantities, targetPersonPosition);
  console.log(
    `Time taken for person at position ${targetPersonPosition} to finish buying tickets: ${timeSpent} seconds`
  );

  //I dont think this is right