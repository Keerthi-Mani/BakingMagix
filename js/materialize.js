//Side Menu
const sideNav = document.querySelector(".sidenav");
//Materialize js library - use M
M.Sidenav.init(sideNav, {});

//Slider
const slider = document.querySelector(".slider");
M.Slider.init(slider, {
  indicators: false,
  height: 500,
  interval: 6000
});

// Scrollspy
const ScrollSpy = document.querySelectorAll(".scrollspy");
M.ScrollSpy.init(ScrollSpy, {});

// Material Boxed
const materialBoxed = document.querySelectorAll(".materialboxed");
M.Materialbox.init(materialBoxed, {});
