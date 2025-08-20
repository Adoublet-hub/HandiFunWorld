  fetch('/HandiFunWorld/json/team.json')
            .then(response => response.json())
            .then(data => {
                const teamContainer = document.getElementById('team-container');

                data.team.forEach(member => {
                    const memberDiv = document.createElement('div');
                    memberDiv.classList.add('member');

                    memberDiv.innerHTML = `
                    <img src="${member.photo}" alt="Photo de ${member.name}">
                    <div class="member-info">
                        <h2>${member.name}</h2>
                        <h3>${member.role}</h3>
                        <p>${member.description}</p>
                    </div>
                `;

                    teamContainer.appendChild(memberDiv);
                });
            })
            .catch(error => console.error('Erreur lors du chargement des membres:', error));