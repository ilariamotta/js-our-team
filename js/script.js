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


const teamList = document.getElementById("card-container");

for (i = 0; i < teamMembers.length; i++) {
    const curMember = teamMembers[i];
    const { name, role, email, img } = curMember;
    const card = `
    <div class="col mb-3">
      <div class="card h-100" style="max-width: 500px;">
        <div class="row g-0">
          <div class="col-md-4 d-flex align-items-center justify-content-center">
            <img src="${img}" class="img-fluid rounded-start" alt="${name}">
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 id="nome" class="card-title">${name}</h5>
              <p id="ruolo" class="card-text">${role}</p>
              <p id="email" class="card-text"><a href="">${email}</a></p>
            </div>
          </div>
        </div>
      </div>
    </div>`

        teamList.innerHTML += card;
}

const form = document.querySelector("form")
const addButton = document.querySelector("button")
const nameInput = document.querySelector("#name")
const roleInput = document.querySelector("#role")
const emailInput = document.querySelector("#email")
const imgInput = document.querySelector("#formfile")

form.addEventListener("submit", function (event) {
    event.preventDefault();
    console.log("submit")
});
