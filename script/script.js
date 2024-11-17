const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "img/male1.png"
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "img/female1.png"
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "img/male2.png"
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "img/female2.png"
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "img/male3.png"
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "img/female3.png"
  }
];


const cards = document.getElementById("cards");

// const card = document.getElementById("card");
for (let i = 0; i < teamMembers.length; i++) {
  // console.log(teamMembers[0].name);
  let cardsContainer = document.createElement('div');

  cardsContainer.classList.add("bg-dark")
  cardsContainer.classList.add("col-4")
  cardsContainer.innerHTML = `
  <div class="w-100">
  <div class="d-flex">
   <div class="row">
      <div class="col-4 p-0 pb-0">
          <img src="${teamMembers[i].img}">
      </div>
  
                    
      <div class="col-8" style="top: 10px";>
         <p class="text-white"> ${teamMembers[i].name} </p>
          <p class="text-white"> ${teamMembers[i].role} </p>
          <p class="text-white"> ${teamMembers[i].email} </p>
      </div>
    </div>
   </div>
   </div>`


  cards.appendChild(cardsContainer)
}
