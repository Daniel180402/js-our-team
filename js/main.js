const team = [
    {
        name: 'Wayne Barnett',
        role: 'Founder & CEO',
        image: 'img/wayne-barnett-founder-ceo.jpg',
    },
    {
        name: 'Angela Caroll',
        role: 'Chief Editor',
        image: 'img/angela-caroll-chief-editor.jpg',
    },
    {
        name: 'Walter Gordon',
        role: 'Office Manager',
        image: 'img/walter-gordon-office-manager.jpg',
    },
    {
        name: 'Angela Lopez',
        role: 'Social Media Manager',
        image: 'img/angela-lopez-social-media-manager.jpg',
    },
    {
        name: 'Scott Estrada',
        role: 'Developer',
        image: 'img/scott-estrada-developer.jpg',
    },
    {
        name: 'Barbara Ramos',
        role: 'Graphic Designer',
        image: 'img/barbara-ramos-graphic-designer.jpg',
    },
];


for(let i = 0 ; i < team.length ; i++){
    console.log(team[i]);
}

let teamCard = '';

for (let i = 0 ; i < team.length ; i++){
    teamCard += `
    <div class="my-card">
        <img class="pb-2" src="${team[i].image}" alt="Team member picture">
        <p> ${team[i].name} </p>
        <p> ${team[i].role} </p>
    </div>
    `
}

const cardWrapper = document.querySelector('#pictures');
cardWrapper.innerHTML += teamCard;