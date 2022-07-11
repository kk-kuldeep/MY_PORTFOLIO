const projects = [
  {
    name: "Portfolio",
    date: "July, 22",
    purpose: ["markZero"],
    desc: "A web app that tells my portfolio.",
    liveLink: "https://kk-kuldeep.github.io/MY_PORTFOLIO/",
    srcLink: "https://github.com/kk-kuldeep/MY_PORTFOLIO",
  },
  {
    name: "Disney_Clone",
    date: "July, 22",
    purpose: ["markOne"],
    desc: "Give a try on disney clone . Learnt a lot of things while making this project",
    liveLink: "https://hotstar-clone-2.herokuapp.com/",
    srcLink: "https://github.com/kk-kuldeep/Hotstar_clone",
  },
  {
    name: "Flag-mania",
    date: "July, 22",
    purpose: ["markTwo"],
    desc: "Want to know what all those flag emojis mean in your chats. Flag Mania can help you in getting a quick idea of what that flag represents, and whether you should engage in a conversation where the flag is being used.",
    liveLink: "https://prismatic-centaur-0cb2d8.netlify.app/",
    srcLink: "https://github.com/kk-kuldeep/flag_mania",
  },
  {
    name: "Cash-register",
    date: "July, 22",
    purpose: ["markThree"],
    desc: "A web app that can help you to calculate how much minimum number of notes can be given when returning change.",
    liveLink: "https://kk-kuldeep.github.io/cash_register/",
    srcLink: "https://github.com/kk-kuldeep/cash_register",
  },
  {
    name: "Lucky-birthday",
    date: "July, 22",
    purpose: ["markFour"],
    desc: "A web app that tells you if your birthday is lucky or not.",
    liveLink: "https://kk-kuldeep.github.io/Lucky_birthday/",
    srcLink: "https://github.com/kk-kuldeep/Lucky_birthday",
  },
  {
    name: "Watch",
    date: "jan, 22",
    purpose: ["markFive"],
    desc: "a special watch with buttons that start, stop, and then zero the hands, used to time races.",
    liveLink: "https://kk-kuldeep.github.io/watch/",
    srcLink: "https://github.com/kk-kuldeep/watch",
  },
];

const content = document.querySelector("#primary-content");

projects.forEach((project, index) => {
  const purposesDiv = document.createElement("div");
  project.purpose.forEach((purpose) => {
    purposesDiv.innerHTML += `<span class="project-purpose">${purpose}</span>&nbsp;`;
  });
  const projectDiv = document.createElement("div");
  projectDiv.innerHTML = `
    <section class="container-centered">
      <div class="project-section">
        <h2 class="project-section__name">${project.name}</h2>
        <small class="project-section__date">${project.date}</small>&emsp;<div class="purpose-div">${purposesDiv.innerHTML}</div>
        <p class="project-section__desc">
          ${project.desc}
        </p>
        <a
          class="link--primary"
          target="_blank"
          rel="noreferrer noopener"
          href="${project.liveLink}"
          >Live Project</a
        >
        <br />
        <a
          class="link--secondary"
          target="_blank"
          rel="noreferrer noopener"
          href="${project.srcLink}"
          >View Source</a
        >
      </div>
    </section>
    `;
  content.appendChild(projectDiv);
  if (index !== projects.length - 1)
    content.innerHTML += `
    <hr class="hr--half" />
    `;
});
