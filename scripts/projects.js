const projects = [
  {
    name: "Amazon_Clone",
    date: "July, 23",
    purpose: ["markZero"],
    desc: "Give a try on Amazon clone . Learnt a lot of things while making this project",
    liveLink: "https://e-commerce-clone-l3rt.onrender.com/",
    srcLink: "https://github.com/kk-kuldeep/amazon_clone",
  },
  {
    name: "Portfolio",
    date: "July, 22",
    purpose: ["markOne"],
    desc: "A web app that tells my portfolio.",
    liveLink: "https://kk-kuldeep.github.io/MY_PORTFOLIO/",
    srcLink: "https://github.com/kk-kuldeep/MY_PORTFOLIO",
  },
  {
    name: "Disney_Clone",
    date: "July, 22",
    purpose: ["markTwo"],
    desc: "Give a try on disney clone . Learnt a lot of things while making this project",
    liveLink: "https://hotstar-clone-hr40.onrender.com/",
    srcLink: "https://github.com/kk-kuldeep/Hotstar_clone",
  },
  {
    name: "GIthub_user_finder",
    date: "Aug, 22",
    purpose: ["markThree"],
    desc: "Built an program to find user with their username. Used GitHub Api to search users and react js for frontend",
    liveLink: "https://github-user-finder-y19g.onrender.com/",
    srcLink: "https://github.com/kk-kuldeep/github_user_finder",
  },
  {
    name: "Flag-mania",
    date: "July, 22",
    purpose: ["markFour"],
    desc: "Want to know what all those flag emojis mean in your chats. Flag Mania can help you in getting a quick idea of what that flag represents, and whether you should engage in a conversation where the flag is being used.",
    liveLink: "https://prismatic-centaur-0cb2d8.netlify.app/",
    srcLink: "https://github.com/kk-kuldeep/flag_mania",
  },
  {
    name: "Cash-register",
    date: "July, 22",
    purpose: ["markFive"],
    desc: "A web app that can help you to calculate how much minimum number of notes can be given when returning change.",
    liveLink: "https://kk-kuldeep.github.io/cash_register/",
    srcLink: "https://github.com/kk-kuldeep/cash_register",
  },
  {
    name: "Lucky-birthday",
    date: "July, 22",
    purpose: ["markSix"],
    desc: "A web app that tells you if your birthday is lucky or not.",
    liveLink: "https://kk-kuldeep.github.io/Lucky_birthday/",
    srcLink: "https://github.com/kk-kuldeep/Lucky_birthday",
  },
  {
    name: "Watch",
    date: "jan, 22",
    purpose: ["markSeven"],
    desc: "a special watch with buttons that start, stop, and then zero the hands, used to time races.",
    liveLink: "https://kk-kuldeep.github.io/watch/",
    srcLink: "https://github.com/kk-kuldeep/watch",
  },
  {
    name: "Leetcode Automation",
    date: "jan, 22",
    purpose: ["markEight"],
    desc: "Hey folks! Getting bored of copy paste codes at leetcode ? so here is the ultimate solution....... Leetcode Automation.",
    liveLink: "https://www.linkedin.com/posts/kuldeep-singhal-b81808234_project-puppeteer-op-activity-6923116920850264064-BEos?utm_source=linkedin_share&utm_medium=member_desktop_web",
    srcLink: "https://github.com/kk-kuldeep/web-development/tree/main/Node/4.automation/leetcode",
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
