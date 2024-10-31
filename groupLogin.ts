// List of valid team members
const members = {
    "Janine": "Janine Intrakul",
    "Abhiraj": "Abhiraj Abhiraj",
    "Himanshu": "Himanshu Shrikishan Agarwal",
    "Jerad": "Jerad Beauregard"
  };
  
  // Set the correct team number
  const correctTeamNumber = 4;  
  
  function groupLogin() {
    // Ask the user for the team number
    const teamNumber = prompt("Please enter your team number:");
    const isTeamNumberCorrect = (parseInt(teamNumber) === correctTeamNumber);
  
    if (isTeamNumberCorrect === true) {
        // If the team number is correct, ask for the user's first name
      const firstName = prompt("Please enter your first name:");
      const isValidMember = (members[firstName] !== undefined);
  
       // Check for valid member
      if (isValidMember === true) {
        alert(`Welcome, ${members[firstName]}!`);
      } else if (isValidMember === false) {
        alert("Access denied! You are not a valid team member.");
      }
    } else if (isTeamNumberCorrect === false) {
      alert("Access denied! Incorrect team number.");
    }
  }
  
  groupLogin();
  