const btnLanguage = document.querySelector("#btn-language");

btnLanguage.addEventListener("click", (event) => {

  let es = document.querySelectorAll(".es");
  let en = document.querySelectorAll(".en");
  
  if (btnLanguage.classList[0] == "english") {
    es.forEach((item) => {
      item.style.display = "block";
    });

    en.forEach((item) => {
      item.style.display = "none";
    })

    btnLanguage.className = "español icon-lang";

  } else if (btnLanguage.classList[0] == "español") {

    en.forEach((item) => {
      item.style.display = "block";
    })

    es.forEach((item) => {
      item.style.display = "none";
    });

    btnLanguage.className = "english icon-lang";
  }

});

let projectItem = document.querySelectorAll(".project-item");
projectItem.forEach((item) => {
  item.addEventListener("click", () => {  
    projectItem.forEach((item, i) => {
      if(item.classList[1] == "project-item-active"){
        item.classList.remove("project-item-active") 
      }         
    }) 
    item.classList.add("project-item-active")
    })
})

document.querySelector('#btn-menu-list').addEventListener('click', () => {
  document.querySelector('#nav-bar-list').classList.toggle('nav-bar-list-active');
  document.querySelector('#btn-menu-list').classList.toggle('btn-menu-list-active');
});

let menuListoption = document.querySelectorAll(".menu-list-item-option");
menuListoption.forEach((option) => {
  option.addEventListener("click", () => {
    document.querySelector('#nav-bar-list').classList.toggle('nav-bar-list-active');
    document.querySelector('#btn-menu-list').classList.toggle('btn-menu-list-active');
  })
})





