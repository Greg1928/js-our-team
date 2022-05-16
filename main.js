const team = [
{
    name : "Angela Lopez",
    role : "Social Media Manager",
    photo : "img/angela-lopez-social-media-manager.jpg",
},
{
    name : "Angela Caroll",
    role : "Chief Editor",
    photo : "img/angela-caroll-chief-editor.jpg",
},
{
    name : "Barbara Ramos",
    role : "Graphic Designer",
    photo : "img/barbara-ramos-graphic-designer.jpg",
},
{
    name : "Scott Estrada",
    role : "Developer",
    photo : "img/scott-estrada-developer.jpg",
},
{
    name : "Walter Gordon",
    role : "Office Manager",
    photo : "img/walter-gordon-office-manager.jpg",
}
]

const teamContainer = document.querySelector(".team-container");

for(let i = 0; i<team.length; i++){
    console.log(team[i]);
    const teamMember = `
        <div class="team-card">
        <div class="card-image">
            <img
            src="${team[i].photo}"
            alt="Wayne Barnett"
            />
        </div>
        <div class="card-text">
            <h3>${team[i].name}</h3>
            <p>${team[i].role}</p>
        </div>
        </div>
    `;
    teamContainer.innerHTML += teamMember;
}
