// Input: tickets = [7,1,1,1], k = 0
// Output: 10

// Input: tickets = [2,3,2], k = 2
// Output: 6

// function calculateTimeToPurchase(tickets, targetPosition) {
//     const numberOfPeople = tickets.length;
//     let elapsedTime = 0;
//     let queue = Array.from({ length: numberOfPeople }, (_, i) => i); 
  
//     while (true) {
//       const currentPerson = queue.shift(); 
  
//       if (currentPerson === targetPosition) {
//         return elapsedTime; 
//       }
  
//       if (tickets[currentPerson] > 0) {
//         tickets[currentPerson]--; 
//         queue.push(currentPerson);
//       }
  
//       elapsedTime++; 
//     }
//   }
  
  
//   const ticketQuantities = [2,3,2];
//   const targetPersonPosition = 2;
  
//   const timeSpent = calculateTimeToPurchase(ticketQuantities, targetPersonPosition);
//   console.log(
//     `Time taken for person at position ${targetPersonPosition} to finish buying tickets: ${timeSpent} seconds`
//   );

// Input: tickets = [7,1,1,1], k = 0
// Output: 10

// Input: tickets = [2,3,2], k = 2
// Output: 6

//code
const ticketTime = (tickets, k)=> {
  let i = 0;
  let time = 0;
  while(tickets[k]>0){

    if(i>=tickets.length){
      i=0;
    }
    if(tickets[i]>0){
      tickets[i]-= 1
      time++
    }

    i++
  }
  return time;
};
console.log(ticketTime([7,1,1,1],0),10)

