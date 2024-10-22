// Array to hold the freelancers
const freelancers = [
    { name: "Alice", occupation: "Writer", price: 30 },
    { name: "Bob", occupation: "Teacher", price: 50 }
  ];
  
  // Function to display freelancers on the page
  function displayFreelancers() {
    const freelancerList = document.getElementById("freelancer-list");
    freelancerList.innerHTML = ''; // Clear the list
  
    freelancers.forEach(freelancer => {
      const freelancerDiv = document.createElement("div");
      freelancerDiv.classList.add("freelancer");
      freelancerDiv.textContent = `${freelancer.name} - ${freelancer.occupation}, Starting Price: $${freelancer.price}`;
      freelancerList.appendChild(freelancerDiv);
    });
  }
  
  // Function to calculate the average price of freelancers
  function updateAveragePrice() {
    const total = freelancers.reduce((sum, freelancer) => sum + freelancer.price, 0);
    const average = total / freelancers.length;
    document.getElementById("average-price").textContent = average.toFixed(2);
  }
  
  // Function to add a new freelancer
  function addFreelancer(name, occupation, price) {
    freelancers.push({ name, occupation, price });
    displayFreelancers();
    updateAveragePrice();
  }
  
  // Initial display of freelancers
  displayFreelancers();
  updateAveragePrice();
  
  // Add a new freelancer after a few seconds
  setTimeout(() => {
    addFreelancer("Carol", "Programmer", 70);
  }, 3000);
  
  // Continue adding new freelancers every few seconds
  setInterval(() => {
    const randomFreelancers = [
      { name: "Dave", occupation: "Designer", price: 40 },
      { name: "Eve", occupation: "Marketer", price: 60 },
      { name: "Frank", occupation: "Consultant", price: 80 }
    ];
  
    const randomFreelancer = randomFreelancers[Math.floor(Math.random() * randomFreelancers.length)];
    addFreelancer(randomFreelancer.name, randomFreelancer.occupation, randomFreelancer.price);
  }, 5000);
  