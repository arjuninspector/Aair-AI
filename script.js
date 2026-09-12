const agents = [
  ["🔎", "Research", "Research information and organize findings."],
  ["✍️", "Writing", "Create, edit and improve written content."],
  ["💻", "Coding", "Generate, debug, review and explain code."],
  ["📚", "Study", "Learn concepts and organize study workflows."],
  ["💼", "Business", "Business analysis, planning and strategy."],
  ["📊", "Data Analysis", "Analyze datasets and discover patterns."],
  ["📄", "Document", "Understand and work with documents."],
  ["🗓️", "Planning", "Turn goals into structured plans."],
  ["🎨", "Creator", "Develop creative ideas and content."],
  ["📣", "Marketing", "Marketing strategy and campaign workflows."],
  ["🖌️", "Designer", "Design concepts and creative direction."],
  ["🚀", "Career", "Career planning and professional workflows."],
  ["🤝", "Freelancer", "Manage freelance work and client workflows."]
];

const grid = document.getElementById("agentGrid");

agents.forEach(agent => {
  const card = document.createElement("div");
  card.className = "agent";

  card.innerHTML = `
    <div class="agent-icon">${agent[0]}</div>
    <h3>${agent[1]}</h3>
    <p>${agent[2]}</p>
  `;

  grid.appendChild(card);
});

function openLogin() {
  document.getElementById("loginModal").classList.add("show");
}

function closeLogin() {
  document.getElementById("loginModal").classList.remove("show");
}

function startAAIR() {
  document.getElementById("agents").scrollIntoView({
    behavior: "smooth"
  });
}

function scrollToAgents() {
  document.getElementById("agents").scrollIntoView({
    behavior: "smooth"
  });
}

function notConfigured() {
  alert(
    "Not configured\n\nReal authentication and payment backend are required before this action can be enabled."
  );
}

document.addEventListener("keydown", event => {
  if (event.key === "Escape") {
    closeLogin();
  }
});
