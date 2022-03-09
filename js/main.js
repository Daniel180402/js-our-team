const team = [
    {
        name: 'Wayne Barnett',
        role: 'Founder & CEO',
        image: 'wayne-barnett-founder-ceo.jpg',
    },
    {
        name: 'Angela Caroll',
        role: 'Chief Editor',
        image: 'angela-caroll-chief-editor.jpg',
    },
    {
        name: 'Walter Gordon',
        role: 'Office Manager',
        image: 'walter-gordon-office-manager.jpg',
    },
    {
        name: 'Angela Lopez',
        role: 'Social Media Manager',
        image: 'angela-lopez-social-media-manager.jpg',
    },
    {
        name: 'Scott Estrada',
        role: 'Developer',
        image: 'scott-estrada-developer.jpg',
    },
    {
        name: 'Barbara Ramos',
        role: 'Graphic Designer',
        image: 'barbara-ramos-graphic-designer.jpg',
    },
];


for(let i = 0 ; i < team.length ; i++){
    console.log(team[i]);
}

let teamCard = '';

for (let i = 0 ; i < team.length ; i++){
    teamCard += `
    <div class="my-card">
        <img class="pb-2" src="${"img/" + team[i].image}" alt="Team member picture">
        <p> ${team[i].name} </p>
        <p> ${team[i].role} </p>
    </div>
    `
}

const cardWrapper = document.querySelector('#pictures');
cardWrapper.innerHTML += teamCard;