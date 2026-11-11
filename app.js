// Portfolio content, taken from aboutMe.md. Edit here to update the site.
const profile = {
  name: "Will T",
  role: "Sales Manager",
  about: [
    "6 years in KAM management. Previously worked in sales.",
    "Interested in AI tools, no-code products, and developer tooling."
  ],
  skills: [
    "Coating industry expertise",
    "Market analysis",
    "Cross-functional collaboration",
    "Results-driven sales"
  ],
  projects: [
    {
      title: "Key Account Retention",
      description: "Maintained and strengthened relationships with key customers to protect existing business. Worked closely with accounts to understand their needs and keep them satisfied over the long term."
    },
    {
      title: "Business Development",
      description: "Grew revenue by introducing new products to existing accounts and winning new customers. Identified opportunities in the market and turned them into lasting business."
    }
  ],
  contact: [
    { label: "Email", text: "regis@example.com", href: "mailto:regis@example.com" },
    { label: "LinkedIn", text: "linkedin.com/in/...", href: "https://linkedin.com/in/" }
  ]
};

// Creates an element with an optional CSS class and text content.
function createElement(tag, className, text) {
  const el = document.createElement(tag);
  if (className) el.className = className;
  if (text) el.textContent = text;
  return el;
}

// Fills in the header with the name and role.
function renderHeader(data) {
  document.getElementById("name").textContent = data.name;
  document.getElementById("role").textContent = data.role;
}

// Renders each About paragraph.
function renderAbout(paragraphs) {
  const container = document.getElementById("about-text");
  paragraphs.forEach(function (text) {
    container.appendChild(createElement("p", null, text));
  });
}

// Renders the skills as a list of chips.
function renderSkills(skills) {
  const list = document.getElementById("skills-list");
  skills.forEach(function (skill) {
    list.appendChild(createElement("li", null, skill));
  });
}

// Renders one card per project.
function renderProjects(projects) {
  const grid = document.getElementById("projects-grid");
  projects.forEach(function (project) {
    const card = createElement("article", "card");
    card.appendChild(createElement("h3", null, project.title));
    card.appendChild(createElement("p", null, project.description));
    grid.appendChild(card);
  });
}

// Renders the contact rows with a label and a link.
function renderContact(items) {
  const list = document.getElementById("contact-list");
  items.forEach(function (item) {
    const row = createElement("li");
    row.appendChild(createElement("span", "contact-label", item.label));
    const link = createElement("a", null, item.text);
    link.href = item.href;
    if (item.href.startsWith("http")) {
      link.target = "_blank";
      link.rel = "noopener";
    }
    row.appendChild(link);
    list.appendChild(row);
  });
}

// Writes the footer line with the current year.
function renderFooter(name) {
  const year = new Date().getFullYear();
  document.getElementById("footer-text").textContent = "© " + year + " " + name;
}

// Builds the whole page from the profile data.
function init() {
  renderHeader(profile);
  renderAbout(profile.about);
  renderSkills(profile.skills);
  renderProjects(profile.projects);
  renderContact(profile.contact);
  renderFooter(profile.name);
}

init();
