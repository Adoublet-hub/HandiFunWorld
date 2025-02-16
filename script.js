fetch('team.json')
  .then(response => response.json())
  .then(data => {
    const teamContainer = document.getElementById("team");

    data.team.forEach(member => {
      const memberDiv = document.createElement("div");
      memberDiv.innerHTML = `
        <img src="${member.photo}" alt="${member.name}" width="150">
        <h3>${member.name}</h3>
        <p><strong>${member.role}</strong></p>
        <p>${member.description}</p>
      `;
      teamContainer.appendChild(memberDiv);
    });
  })
  .catch(error => console.error("Erreur lors du chargement des données:", error));
