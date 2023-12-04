const x = window.matchMedia("(max-width: 400px)");

const createMenuIcon = () => {
  var menu = document.createElement("img");
  menu.src = "./images/icon-hamburger.svg";
  menu.alt = "hamberger icon";
  menu.className = "menu";
  return menu;
};

// const createCrossIcon = () => {
//   var cross = document.createElement("img");
//   cross.src = "../images/";
// };

const mobileNavigation = () => {
  var mobile = document.createElement("div");
  mobile.className = "mobile-navigation";

  mobile.innerHTML = `<nav class="mobile-main-navigation">
    <ul class="mobile-nav-bar">
      <li class="nav-items">
        <a href="#" class="about">About</a>
      </li>
      <li class="nav-items">
        <a href="#" class="services">Services</a>
      </li>
      <li class="nav-items">
        <a href="#" class="projects">Projects</a>
      </li>
      <li class="nav-items">
        <a href="#" class="contact">Contact</a>
      </li>
    </ul>
  </nav>`;

  return mobile;
};

if (x.matches) {
  let menuStatus = false;

  const changeMenuStatus = (newStatus) => {
    menuStatus = newStatus;
  };
  document.querySelector(".main-navigation").remove();
  var menuIcon = createMenuIcon();

  document.querySelector(".logo").after(menuIcon);

  var mobileMenu = mobileNavigation();

  document.querySelector(".menu").addEventListener("click", () => {
    if (menuStatus === false) {
      document.querySelector(".navigation").after(mobileMenu);
      changeMenuStatus(true);
    } else if (menuStatus === true) {
      document.querySelector(".mobile-navigation").remove();
      changeMenuStatus(false);
    }
  });
}
