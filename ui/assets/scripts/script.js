var Headlines_array = new Array();
Headlines_array['Rams'] = 'Aware that he was a significant contributor to that world, he asked himself an important question: is my design good design?'
Headlines_array['Vignelli'] = 'Linear Genius, Bold and Transformative ‘Design Is One’ Centers on the Vignelli Team'
Headlines_array['Bass'] = 'Saul Bass On His Approach To Title Sequences'
// Headlines_array['Escher'] = "The ultimate mind-benders: MC Escher's incredible optical illusions are set to have fans questioning reality with his first major UK exhibition"

var Authors_array = new Array();
Authors_array['Rams'] = 'Dieter Rams via Vitsœ'
Authors_array['Vignelli'] = 'Lella & Massimo Vignelli via NYTimes'
Authors_array['Bass'] = 'Saul Bass via Medium'
// Authors_array['Escher'] = 'MC Escher via Dailymail'

var Archetypes_array = new Array();
Archetypes_array[0] = 'Rams';
Archetypes_array[1] = 'Vignelli';
Archetypes_array[2] = 'Bass';
// Archetypes_array[3] = 'Escher';

var composition = Archetypes_array[Math.floor(Math.random() * Archetypes_array.length)];
var covers = document.querySelectorAll('.Cover img');
var headlines = document.querySelectorAll('.Headline span');
var authors = document.querySelectorAll('.Author');
changePhotos();

document.querySelector('#Composition-input').addEventListener("change", changeComposition);
function changeComposition() {
  composition = document.querySelector('#Composition-input').value;
  document.querySelector('.Composition').className = "Composition " + composition;
  changePhotos();
}
function changePhotos() {
  for (var i=0; i<covers.length; i++ ) {
    covers[i].setAttribute('src','images/'+composition+'.jpg');
  }
  for (var i=0; i<headlines.length; i++ ) {
    authors[i].textContent = Authors_array[composition]
    headlines[i].textContent = Headlines_array[composition]
  }
}

// CLASS LISTS
var section_size = [
  'section-size-fullscreen',
  'section-size-auto'
]
var flex = [
  'flex-row',
  'flex-col'
]
var is_bg = [
  'is-bg',
  'no-bg',
  'both-bg'
]
var bg_fit = [
  'bg-fit-cover',
  'bg-fit-contain'
]
var bg_size = [
  'bg-size-full',
  'bg-size-half',
  'bg-size-third',
  'bg-size-quarter'
]
var bg_align = [
  'bg-align-top',
  'bg-align-center',
  'bg-align-bottom',
  'bg-align-stretch'
]
var bg_justify = [
  'bg-justify-left',
  'bg-justify-center',
  'bg-justify-right',
  'bg-justify-stretch'
]
var bg_color = [
  'bg-color-light',
  'bg-color-dark',
  'bg-color-none'
]

var title_size = [
  'title-size-xxsmall',
  'title-size-xsmall',
  'title-size-small',
  'title-size-medium',
  'title-size-large',
  'title-size-xlarge',
  // 'title-size-xxlarge'
]
var text_align = [
  'text-align-left',
  'text-align-center',
  'text-align-right',
  // 'text-align-justify'
]
var group_align = [
  'align-start',
  'align-center',
  'align-end',
  'align-stretch',
  'align-baseline'
]
var group_justify = [
  'justify-start',
  'justify-center',
  'justify-end',
  'justify-between',
  'justify-around'
]
var class_lists = [section_size, flex, is_bg, bg_fit, bg_size, bg_color, bg_align, bg_justify, title_size, text_align, group_align, group_justify]

var sections = document.querySelectorAll('.Section');
for (var i=0; i<sections.length; i++ ) {
  assignClasses(i);
}
var composition = Archetypes_array[Math.floor(Math.random() * Archetypes_array.length)];
document.querySelector('.Composition').className = "Composition "+ composition

function assignClasses(num){
  var section = sections[num];

  var list = document.createElement('div');
  list.classList.add('Class-list');
  list.setAttribute('contenteditable',true);
  section.insertBefore(list,section.firstChild);

  for (var i=0; i<class_lists.length; i++){
    var listItem = document.createElement('li')
    var newClass = class_lists[i][Math.floor(Math.random()*class_lists[i].length)];
    listItem.innerHTML = newClass;
    list.appendChild(listItem);
    section.classList.add(newClass)
  }

  list.addEventListener('keypress',function(e){
    if (e.keyCode == 13) {
      e.preventDefault();
      var items = list.querySelectorAll('li');
      var myClass = 'Section Section--components-' + section.querySelectorAll('.Component').length + " ";
      for (var i=0;i<items.length;i++){
        myClass += items[i].textContent;
        if(myClass.substr(myClass.length-1) != " "){
          myClass = myClass + ' '
        }
      }
      section.className = myClass;
    }
  })
}
