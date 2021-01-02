const summary = {
  main: "Self-Taught Python Developer",
  period: "in 100 days!",
  description:
    "we learn coding by coding! in this 100 days of code python bootcamp course we use all the knowledge gained into some real projects as this one! Thanks to Ms. Angela Yu!.",
  image: "../static/goal1.jpg",
};

const icons = [
  {
    name: "Twitter",
    icon: '<i class="fab fa-twitter"></i>',
  },
  {
    name: "Instagram",
    icon: '<i class="fab fa-instagram"></i>',
  },
  {
    name: "facebook",
    icon: '<i class="fab fa-facebook-f"></i>',
  },
  {
    name: "Linkedin",
    icon: '<i class="fab fa-linkedin-in"></i>',
  },
  {
    name: "Email",
    icon: '<i class="fas fa-envelope"></i>',
  },
];

const navbarElements = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "About",
    path: "/about",
  },
  {
    name: "Contact",
    path: "/contact",
  },
  {
    name: "Projects",
    path: "/projects",
  },
];

const parent = document.getElementById("grid-container");

const navbar = document.createElement("nav");
navbar.className = "navbar";
const ul1 = document.createElement("ul");
navbarElements.forEach((element) => {
  const li1 = document.createElement("li");
  const a = document.createElement("a");
  a.textContent = element.name;
  a.href = element.path;
  li1.appendChild(a);
  ul1.appendChild(li1);
});

navbar.appendChild(ul1);
parent.appendChild(navbar);

const h1 = document.createElement("h1");
h1.innerText = summary.main;
h1.className = "project-title";

const h4 = document.createElement("h4");
h4.innerText = summary.description;
h4.className = "project-description";

const img = document.createElement("img");
img.src = summary.image;
img.className = "project-img";

const content = document.createElement("div");
content.className = "content";
content.appendChild(h1);
content.appendChild(h4);
content.appendChild(img);

const container = document.createElement("div");
container.className = "container";
container.appendChild(content);
parent.appendChild(container);

const bottomNavbar = document.createElement("nav");
bottomNavbar.className = "bottom-navbar";
const ul2 = document.createElement("ul");
icons.forEach((icon) => {
  const li2 = document.createElement("li");
  li2.innerHTML = icon.icon;
  ul2.appendChild(li2);
});

bottomNavbar.appendChild(ul2);
parent.appendChild(bottomNavbar);
