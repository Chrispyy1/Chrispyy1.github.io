const volunteerButton = document.querySelector("#volunteerNowButton");
volunteerButton.addEventListener("click", () => {
    const form = document.createElement("form");
    form.innerHTML = `
      <label for="firstName">First Name:</label>
      <input type="text" id="firstName" name"lastName" required>
      <label for="lastName">Last Name:</label>
      <input type="text" id="lastName" name="lastName" requiured>
      <label for="email">Email:</label>
      <input type="email" id="email" name="email" required>
      <button type="submit">Submit</button
    `;
    const formContainer =document.querySelector("#formContainer");
    formContainer.innerHTML = "";
    formContainer.appendChild(form);
});
const charityDetails = document.querySelectorALL(".charity-info");
charityDetails.forEach(charity => {
    charity.addEventListener("mouseover", () => {
    const details = document.createElement("p");
    details.textContent = "More about this charity...";
    charity.appendChild(details);
  });
  .catch(error) => {
      console.error("Error ffetching charity data:", error);
      charityDetails.innerHTML ="<p>Unable to load charity details. Please try again later.</p>";
  });
});
