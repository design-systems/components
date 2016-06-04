
var system = 'Rams'; // Archetypes_array[Math.floor(Math.random() * Archetypes_array.length)];
var system_el = document.querySelector('.System');
var images = document.querySelectorAll('.Image img');
var covers = document.querySelectorAll('.Cover img');
var headlines = document.querySelectorAll('.Headline span');
var authors = document.querySelectorAll('.Author');

var sections = document.querySelectorAll('.Section');
var sectionClasses = [];
for (var i = 0;i< sections.length; i++) {
  sectionClasses[i] = sections[i].classList + ' ';
}
// adjust if multiple sections

document.querySelector('#System-input').addEventListener("change", function(){
  system = document.querySelector('#System-input').value;
  changeSystem()
});
document.querySelector('.Shuffle').addEventListener("click", shuffle);

function changeSystem() {
  document.querySelector('#System-input').value = system
  system_el.className = "System " + system;
  changePhotos();
  for (var branch in siteBeautyverse){
    branch = Object.keys(siteBeautyverse[branch][Object.keys(siteBeautyverse[branch])[0]]);
    var path = branch[Math.floor(Math.random()*branch.length)]
    system_el.classList.add(path);
  }
  // for (var i=0; i<system_classes.length; i++){
  //   var newClass = system_classes[i][Math.floor(Math.random()*system_classes[i].length)];
  //   system_el.classList.add(newClass);
  // }
}
function changePhotos() {
  var system = Archetypes_array[Math.floor(Math.random() * Archetypes_array.length)]
  var headline = Headlines_array[Math.floor(Math.random() * Headlines_array.length)];
  var author = Authors_array[system]//Archetypes_array[Math.floor(Math.random() * Archetypes_array.length)]];
  var myPhoto = system; //Archetypes_array[Math.floor(Math.random() * Archetypes_array.length)];
  for (var i=0; i<images.length; i++ ) {
    images[i].style.objectPosition = ImageCenter_array[myPhoto]
    images[i].setAttribute('src','ui/assets/images/'+myPhoto+'.jpg');
  }
  for (var i=0; i<covers.length; i++ ) {
    covers[i].style.objectPosition = ImageCenter_array[myPhoto]
    covers[i].setAttribute('src','ui/assets/images/'+myPhoto+'.jpg');
  }
  for (var i=0; i<headlines.length; i++ ) {
    headlines[i].textContent = headline;
  }
  for (var i=0; i<authors.length; i++ ) {
    authors[i].textContent = author
  }
}

function init(){
  system_el.className = "System "+ system
  createItemClassList();
  changeSystem()
}
function shuffle(){
  system = Archetypes_array[Math.floor(Math.random() * Archetypes_array.length)];
  changeSystem();
  shuffleItemClassList();
}

function createItemClassList(){
  var section = sections[0];

  var list = document.createElement('span');
  list.classList.add('Class-list');
  list.setAttribute('contenteditable',true);
  section.insertBefore(list,section.firstChild);
  for (var branch in sectionsBeautyverse){
    var branchName = branch;
    branch = Object.keys(sectionsBeautyverse[branch][Object.keys(sectionsBeautyverse[branch])[0]]);
    if(mySectionClasses.indexOf(branchName) != -1){
      var path = branch[Math.floor(Math.random()*branch.length)]
      var listItem = document.createElement('li');
      listItem.innerHTML = path;
      list.appendChild(listItem);
      for (var j=0; j<sections.length; j++ ) {
        sections[j].classList.add(path);
      }
    }
  }
  // for (var i=0; i<item_classes.length; i++){
  //   var listItem = document.createElement('li');
  //   var newClass = item_classes[i][Math.floor(Math.random()*item_classes[i].length)];
  //   listItem.innerHTML = newClass;
  //   list.appendChild(listItem);
  //   for (var j=0; j<sections.length; j++ ) {
  //     sections[j].classList.add(newClass);
  //   }
  // }

  list.addEventListener('keypress',function(e){
    if (e.keyCode == 13) {
      e.preventDefault();
      applyClasses();
    }
  })
}
function shuffleItemClassList(){
  var section = sections[0];
  for (var j=0; j<sections.length; j++ ) {
    sections[j].className = sectionClasses[j];
  }
  for (var branch in sectionsBeautyverse){
    var branchName = branch;
    branch = Object.keys(sectionsBeautyverse[branch][Object.keys(sectionsBeautyverse[branch])[0]]);
    if(mySectionClasses.indexOf(branchName) != -1){
      var path = branch[Math.floor(Math.random()*branch.length)]
      for (var j=0; j<sections.length; j++ ) {
        sections[j].classList.add(path);
      }
    }
  }
  // for (var i=0; i<item_classes.length; i++){
  //   var listItem = list.querySelectorAll('li')[i];
  //   var newClass = item_classes[i][Math.floor(Math.random()*item_classes[i].length)];
  //   listItem.innerHTML = newClass;
  //   for (var j=0; j<sections.length; j++ ) {
  //     sections[j].classList.add(newClass);
  //   }
  // }
  // applyClasses();
}
function applyClasses() {
  var section = sections[0];

  var list = sections[0].querySelector('.Class-list')
  var items = list.querySelectorAll('li');
  for (var j=0; j<sections.length; j++ ) {
    var myClass = sectionClasses[j];
    for (var i=0;i<items.length;i++){
      myClass += items[i].textContent;
      if(myClass.substr(myClass.length-1) != " "){
        myClass = myClass + ' '
      }
    }
    sections[j].className = myClass;
  }
}
init()
