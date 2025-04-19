const users = [
  {
    name: "Liam Carter",
    role: "Software Engineer",
    company: "CodeNest",
    skills: ["Java", "Spring Boot", "SQL"],
    description: "Writes scalable backend services.",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
    available: "Stranger",
    ratePerHour: 60,
  },
  {
    name: "Sophia Walker",
    role: "Frontend Developer",
    company: "UXFlow",
    skills: ["Vue.js", "Tailwind", "JavaScript"],
    description: "Crafts sleek user experiences.",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
    available: "Stranger",
    ratePerHour: 55,
  },
  {
    name: "Jackson Lee",
    role: "Cloud Engineer",
    company: "SkyCore",
    skills: ["AWS", "Terraform", "Bash"],
    description: "Deploys and scales cloud infra.",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
    available: "Stranger",
    ratePerHour: 75,
  },
  {
    name: "Emily Rivera",
    role: "Product Designer",
    company: "LoopStudio",
    skills: ["Figma", "Sketch", "Prototyping"],
    description: "Designs smooth, user-first products.",
    image: "https://randomuser.me/api/portraits/women/2.jpg",
    available: "Stranger",
    ratePerHour: 50,
  },
  {
    name: "Noah Brooks",
    role: "Machine Learning Engineer",
    company: "PredictIQ",
    skills: ["TensorFlow", "Python", "Scikit-learn"],
    description: "Builds intelligent prediction models.",
    image: "https://randomuser.me/api/portraits/men/3.jpg",
    available: "Stranger",
    ratePerHour: 85,
  },
  {
    name: "Isabella Nguyen",
    role: "Data Analyst",
    company: "InsightEdge",
    skills: ["SQL", "Power BI", "Python"],
    description: "Visualizes insights that matter.",
    image: "https://randomuser.me/api/portraits/women/3.jpg",
    available: "Stranger",
    ratePerHour: 45,
  },
  {
    name: "Ethan Moore",
    role: "DevOps Engineer",
    company: "Pipelines.io",
    skills: ["Docker", "CI/CD", "Linux"],
    description: "Automates everything, breaks nothing.",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
    available: "Stranger",
    ratePerHour: 70,
  },
  {
    name: "Chloe Adams",
    role: "QA Engineer",
    company: "BugCrush",
    skills: ["Selenium", "Jest", "TestRail"],
    description: "Breaks code before users do.",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
    available: "Stranger",
    ratePerHour: 40,
  },
  {
    name: "Benjamin Foster",
    role: "Security Analyst",
    company: "CyberGuard",
    skills: ["Wireshark", "Splunk", "Python"],
    description: "Finds flaws before hackers do.",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
    available: "Stranger",
    ratePerHour: 90,
  },
  {
    name: "Ava Scott",
    role: "Mobile Developer",
    company: "PocketDev",
    skills: ["Flutter", "Dart", "Firebase"],
    description: "Builds smooth mobile apps fast.",
    image: "https://randomuser.me/api/portraits/women/5.jpg",
    available: "Stranger",
    ratePerHour: 55,
  },
  {
    name: "Lucas Bennett",
    role: "Full Stack Developer",
    company: "DevForge",
    skills: ["React", "Node.js", "PostgreSQL"],
    description: "Handles frontend and backend cleanly.",
    image: "https://randomuser.me/api/portraits/men/6.jpg",
    available: "Stranger",
    ratePerHour: 65,
  },
  {
    name: "Harper Martinez",
    role: "AI Engineer",
    company: "NeuroMind",
    skills: ["PyTorch", "NLP", "Deep Learning"],
    description: "Builds neural nets that learn.",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
    available: "Stranger",
    ratePerHour: 100,
  },
  {
    name: "Mason Wright",
    role: "Blockchain Developer",
    company: "ChainStack",
    skills: ["Solidity", "Web3.js", "Ethereum"],
    description: "Codes trustless smart contracts.",
    image: "https://randomuser.me/api/portraits/men/7.jpg",
    available: "Stranger",
    ratePerHour: 95,
  },
  {
    name: "Ella Simmons",
    role: "Systems Analyst",
    company: "SysFlex",
    skills: ["UML", "SQL", "BPMN"],
    description: "Bridges tech and business needs.",
    image: "https://randomuser.me/api/portraits/women/7.jpg",
    available: "Stranger",
    ratePerHour: 50,
  },
  {
    name: "Henry Thompson",
    role: "Database Administrator",
    company: "DataVault",
    skills: ["Oracle", "MySQL", "Backup Recovery"],
    description: "Keeps data secure and organized.",
    image: "https://randomuser.me/api/portraits/men/8.jpg",
    available: "Stranger",
    ratePerHour: 60,
  },
  {
    name: "Aria Collins",
    role: "Tech Support Specialist",
    company: "QuickFix IT",
    skills: ["Troubleshooting", "Networking", "Customer Support"],
    description: "Solves user problems fast.",
    image: "https://randomuser.me/api/portraits/women/8.jpg",
    available: "Stranger",
    ratePerHour: 30,
  },
  {
    name: "Logan Ramirez",
    role: "Game Developer",
    company: "PixelPlay",
    skills: ["Unity", "C#", "Game Physics"],
    description: "Codes immersive gaming experiences.",
    image: "https://randomuser.me/api/portraits/men/9.jpg",
    available: "Stranger",
    ratePerHour: 65,
  },
  {
    name: "Grace Perry",
    role: "UX Researcher",
    company: "UserSense",
    skills: ["Surveys", "Interviews", "Heatmaps"],
    description: "Finds what users truly want.",
    image: "https://randomuser.me/api/portraits/women/9.jpg",
    available: "Stranger",
    ratePerHour: 48,
  },
  {
    name: "Owen Hughes",
    role: "Network Engineer",
    company: "NetCore",
    skills: ["Cisco", "Routing", "Firewalls"],
    description: "Keeps networks fast and secure.",
    image: "https://randomuser.me/api/portraits/men/10.jpg",
    available: "Stranger",
    ratePerHour: 70,
  },
  {
    name: "Zoe Richardson",
    role: "Tech Lead",
    company: "ByteFoundry",
    skills: ["Leadership", "Code Review", "Agile"],
    description: "Leads teams to deliver better.",
    image: "https://randomuser.me/api/portraits/women/10.jpg",
    available: "Stranger",
    ratePerHour: 95,
  },
  {
    name: "Caleb Morgan",
    role: "Web Developer",
    company: "SiteSync",
    skills: ["HTML", "CSS", "JavaScript"],
    description: "Builds clean and fast websites.",
    image: "https://randomuser.me/api/portraits/men/11.jpg",
    available: "Stranger",
    ratePerHour: 40,
  },
  {
    name: "Lily Jenkins",
    role: "Tech Writer",
    company: "DocuFlow",
    skills: ["Markdown", "API Docs", "Git"],
    description: "Explains complex tech clearly.",
    image: "https://randomuser.me/api/portraits/women/11.jpg",
    available: "Stranger",
    ratePerHour: 35,
  },
  {
    name: "James Kelly",
    role: "IT Project Manager",
    company: "SprintLogic",
    skills: ["Scrum", "Kanban", "JIRA"],
    description: "Delivers projects on time.",
    image: "https://randomuser.me/api/portraits/men/12.jpg",
    available: "Stranger",
    ratePerHour: 80,
  },
  {
    name: "Nora Foster",
    role: "AI Product Manager",
    company: "AlgoCraft",
    skills: ["AI Ethics", "Strategy", "MLOps"],
    description: "Shapes AI products that scale.",
    image: "https://randomuser.me/api/portraits/women/12.jpg",
    available: "Stranger",
    ratePerHour: 90,
  },
  {
    name: "Matthew Green",
    role: "Site Reliability Engineer",
    company: "UptimeWorks",
    skills: ["Monitoring", "Incident Response", "Python"],
    description: "Keeps systems alive 24/7.",
    image: "https://randomuser.me/api/portraits/men/13.jpg",
    available: "Stranger",
    ratePerHour: 88,
  },
];

let main = document.querySelector("main");
let cardsContainer = document.querySelector("#cards-container");

function cardMaker() {
  let sum = "";

  users.forEach(function (user, idx) {
    sum += `        <div class="card">
          <div class="top-info">
            <div class="availability">${user.available}</div>
            <div class="rate">${user.ratePerHour}/hr</div>
          </div>

          <div class="mid-info">
            <div class="photo">
              <img src="${user.image}" />
            </div>

            <div class="name">
              <h1>${user.name}</h1>
            </div>

            <div class="role">
              <h2>${user.role}</h2>
            </div>

            <div class="company">
              <h3>${user.company}</h3>
            </div>

            <div class="skills">
              <h3 class="skill">${user.skills[0]}</h3>
              <h3 class="skill">${user.skills[1]}</h3>
              <h3 class="skill">${user.skills[2]}</h3>
              <h3 class="skill">+4</h3>
            </div>

            <div class="description-container">
              <p class="description">
                ${user.description}
              </p>
            </div>
          </div>

          <button class="bottom-info" id=${idx}>
            <h3 id=${idx}>Add Friend</h3>
          </button>
        </div>`;

    cardsContainer.innerHTML = sum;
  });
}

cardMaker();

main.addEventListener("click", function (dets) {
  let gold = users[dets.target.id];
  if (gold.available == "Stranger") {
    gold.available = "Friends";
  } else {
    gold.available = "Stranger";
  }
  cardMaker();
});
