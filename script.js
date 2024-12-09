const charitiesList = document.querySelector("#charitiesList");
fetch("https://api.example.com/charities")
    .then(response => response.json())
    .then(data => {
        data.forEach(charity => {
            const charityItem = document.createElement("li");
            charityItem.innerHTML =
                <h3>${charity.name}</h3
                <p>${charity.description}</p
                <a href="${charity.website}" target=_blank">Learn More</a>
            `;
            charitiesList.appendChild(charityItem);
        });
      })
      .catch(error => {
          console.error("Error fetching data:", error);
          charitiesList.innerHTML = "<p>Failed ro load charity data. Please try again later.</p>";
       });
