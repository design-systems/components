// var Archetypes_array = new Array();
// Archetypes_array[0] = 'Rams';
// Archetypes_array[1] = 'Vignelli';
// Archetypes_array[2] = 'Bass';
// Archetypes_array[3] = 'Brockmann';
// // Archetypes_array[3] = 'Escher';

// var section_h_padding = [
//   'section_h_padding_none',
//   // 'section_h_padding_xxsmall',
//   'section_h_padding_xsmall',
//   'section_h_padding_small',
//   'section_h_padding_medium',
//   'section_h_padding_large',
//   'section_h_padding_xlarge'
// ]
// var section_v_padding = [
//   // 'section_v_padding_none',
//   'section_v_padding_xsmall',
//   'section_v_padding_small',
//   'section_v_padding_medium',
//   'section_v_padding_large',
//   'section_v_padding_xlarge'
// ]

var ImageCenter_array = new Array();
ImageCenter_array['Rams'] = '40% 40%';
ImageCenter_array['Vignelli'] = '70% 43%';
ImageCenter_array['Bass'] = '43% 22%';
ImageCenter_array['Brockmann'] = '52% 29%';

var theStylist =
{
  'the_beautician': {
    siteBeautyverse: {
      // 'design-style': {
      //   'Y_design-style': {
      //     'Rams': { $class: ['Rams'] },
      //     'Bass': { $class: ['Bass'] },
      //     'Vignelli': { $class: ['Vignelli'] },
      //     'Brockmann': { $class: ['Brockmann'] },
      //   },
      // },
      'section-h-padding': {
        'Y_section-h-padding': {
          // 'section-h-padding-none': { $class: ['section-h-padding-none'] },
          'section-h-padding-xsmall': { $class: ['section-h-padding-xsmall'] },
          'section-h-padding-small': { $class: ['section-h-padding-small'] },
          'section-h-padding-medium': { $class: ['section-h-padding-medium'] },
          'section-h-padding-large': { $class: ['section-h-padding-large'] },
          'section-h-padding-xlarge': { $class: ['section-h-padding-xlarge'] },
        },
      },
      'section-v-padding': {
        'Y_section-v-padding': {
          // 'section-v-padding-none': { $class: ['section-v-padding-none'] },
          'section-v-padding-xsmall': { $class: ['section-v-padding-xsmall'] },
          'section-v-padding-small': { $class: ['section-v-padding-small'] },
          'section-v-padding-medium': { $class: ['section-v-padding-medium'] },
          'section-v-padding-large': { $class: ['section-v-padding-large'] },
          'section-v-padding-xlarge': { $class: ['section-v-padding-xlarge'] },
        },
      },
    },
    sectionsBeautyverse: {
      'section-height': {
        'Y_section-height': {
          'section-height-fullscreen': { $class: ['section-height-fullscreen'] },
          'section-height-auto': { $class: ['section-height-auto'] },
        },
      },
      'section-flex': {
        'Y_section-flex': {
          'section-flex-row': { $class: ['section-flex-row'] },
          'section-flex-col': { $class: ['section-flex-col'] },
          // 'section-flex-col-reverse': { $class: ['section-flex-col-reverse'] },
          // 'section-flex-row-reverse': { $class: ['section-flex-row-reverse'] },
        },
      },
      'title-size': {
        'Y_title-size': {
          'title-size-xxsmall': { $class: ['title-size-xxsmall'] },
          'title-size-xsmall': { $class: ['title-size-xsmall'] },
          'title-size-small': { $class: ['title-size-small'] },
          'title-size-medium': { $class: ['title-size-medium'] },
          'title-size-large': { $class: ['title-size-large'] },
          // 'title-size-xlarge': { $class: ['title-size-xlarge'] },
        },
      },
      'text-align': {
        'Y_text-align': {
          'text-align-left': { $class: ['text-align-left'] },
          'text-align-center': { $class: ['text-align-center'] },
          'text-align-right': { $class: ['text-align-right'] },
        },
      },
      'group-bg-color': {
        'Y_group-bg-color': {
          'group-bg-color-none': { $class: ['group-bg-color-none'] },
          // 'group-bg-color-dark': { $class: ['group-bg-color-dark'] },
          // 'group-bg-color-light': { $class: ['group-bg-color-light'] },
          // 'group-bg-color-pattern': { $class: ['group-bg-color-pattern'] },
          // 'group-bg-color-neutral': { $class: ['group-bg-color-neutral'] },
        },
      },
      // 'group-h-inset': {
      //   'Y_group-h-inset': {
      //     'group-h-inset-none': { $class: ['group-h-inset-none'] },
      //     'group-h-inset-xsmall': { $class: ['group-h-inset-xsmall'] },
      //     'group-h-inset-small': { $class: ['group-h-inset-small'] },
      //     'group-h-inset-medium': { $class: ['group-h-inset-medium'] },
      //     'group-h-inset-large': { $class: ['group-h-inset-large'] },
      //   },
      // },
      // 'group-v-inset': {
      //   'Y_group-v-inset': {
      //     'group-v-inset-none': { $class: ['group-v-inset-none'] },
      //     'group-v-inset-xsmall': { $class: ['group-v-inset-xsmall'] },
      //     'group-v-inset-small': { $class: ['group-v-inset-small'] },
      //     'group-v-inset-medium': { $class: ['group-v-inset-medium'] },
      //     'group-v-inset-large': { $class: ['group-v-inset-large'] },
      //   },
      // },
      // 'group-h-overlap': {
      //   'Y_group-h-overlap': {
      //     'group-h-overlap-none': { $class: ['group-h-overlap-none'] },
      //     'group-h-overlap-xsmall': { $class: ['group-h-overlap-xsmall'] },
      //     'group-h-overlap-small': { $class: ['group-h-overlap-small'] },
      //     'group-h-overlap-medium': { $class: ['group-h-overlap-medium'] },
      //     'group-h-overlap-large': { $class: ['group-h-overlap-large'] },
      //   },
      // },
      // 'group-v-overlap': {
      //   'Y_group-v-overlap': {
      //     'group-v-overlap-none': { $class: ['group-v-overlap-none'] },
      //     'group-v-overlap-xsmall': { $class: ['group-v-overlap-xsmall'] },
      //     'group-v-overlap-small': { $class: ['group-v-overlap-small'] },
      //     'group-v-overlap-medium': { $class: ['group-v-overlap-medium'] },
      //     'group-v-overlap-large': { $class: ['group-v-overlap-large'] },
      //   },
      // },
      'group-align': {
        'Y_group-align': {
          'group-align-start': { $class: ['group-align-start'] },
          'group-align-center': { $class: ['group-align-center'] },
          'group-align-end': { $class: ['group-align-end'] },
          'group-align-stretch': { $class: ['group-align-stretch'] },
          'group-align-baseline': { $class: ['group-align-baseline'] },
        },
      },
      'group-justify': {
        'Y_group-justify': {
          'group-justify-start': { $class: ['group-justify-start'] },
          'group-justify-center': { $class: ['group-justify-center'] },
          'group-justify-end': { $class: ['group-justify-end'] },
          'group-justify-between': { $class: ['group-justify-between'] },
          'group-justify-around': { $class: ['group-justify-around'] },
        },
      },
      'component-bg-color': {
        'Y_component-bg-color': {
          'component-bg-color-none': { $class: ['component-bg-color-none'] },
          'component-bg-color-dark': { $class: ['component-bg-color-dark'] },
          'component-bg-color-light': { $class: ['component-bg-color-light'] },
        },
      },
      'component-h-padding': {
        'Y_component-h-padding': {
          'component-h-padding-none': { $class: ['component-h-padding-none'] },
          'component-h-padding-xsmall': { $class: ['component-h-padding-xsmall'] },
          'component-h-padding-small': { $class: ['component-h-padding-small'] },
          'component-h-padding-medium': { $class: ['component-h-padding-medium'] },
          'component-h-padding-large': { $class: ['component-h-padding-large'] },
          'component-h-padding-xlarge': { $class: ['component-h-padding-xlarge'] },
        },
      },
      'component-v-padding': {
        'Y_component-v-padding': {
          'component-v-padding-none': { $class: ['component-v-padding-none'] },
          'component-v-padding-xsmall': { $class: ['component-v-padding-xsmall'] },
          'component-v-padding-small': { $class: ['component-v-padding-small'] },
          'component-v-padding-medium': { $class: ['component-v-padding-medium'] },
          'component-v-padding-large': { $class: ['component-v-padding-large'] },
          'component-v-padding-xlarge': { $class: ['component-v-padding-xlarge'] },
        },
      },
      'section-bg-color': {
        'Y_section-bg-color': {
          'section-bg-color-none': { $class: ['section-bg-color-none'] },
          'section-bg-color-light': { $class: ['section-bg-color-light'] },
          'section-bg-color-dark': { $class: ['section-bg-color-dark'] },
        },
      },
      'section-bgcover': {
        'Y_section-bgcover': {
          'section-bgcover-w': { $class: ['section-bgcover-w'] },
          'section-bgcover-wo': { $class: ['section-bgcover-wo'] },
          'section-bgcover-and': { $class: ['section-bgcover-and'] },
        },
      },
      'section-bgcover-fit': {
        'Y_section-bgcover-fit': {
          'section-bgcover-fit-cover': { $class: ['section-bgcover-fit-cover'] },
          'section-bgcover-fit-contain': { $class: ['section-bgcover-fit-contain'] },
        },
      },
      'section-bgcover-size': {
        'Y_section-bgcover-size': {
          'section-bgcover-size-full': { $class: ['section-bgcover-size-full'] },
          'section-bgcover-size-half': { $class: ['section-bgcover-size-half'] },
          'section-bgcover-size-third': { $class: ['section-bgcover-size-third'] },
          'section-bgcover-size-quarter': { $class: ['section-bgcover-size-quarter'] },
        },
      },
      'section-bgcover-align': {
        'Y_section-bgcover-align': {
          'section-bgcover-align-top': { $class: ['section-bgcover-align-top'] },
          'section-bgcover-align-center': { $class: ['section-bgcover-align-center'] },
          'section-bgcover-align-bottom': { $class: ['section-bgcover-align-bottom'] },
          'section-bgcover-align-stretch': { $class: ['section-bgcover-align-stretch'] },
        },
      },
      'section-bgcover-justify': {
        'Y_section-bgcover-justify': {
          'section-bgcover-justify-left': { $class: ['section-bgcover-justify-left'] },
          'section-bgcover-justify-center': { $class: ['section-bgcover-justify-center'] },
          'section-bgcover-justify-right': { $class: ['section-bgcover-justify-right'] },
          'section-bgcover-justify-stretch': { $class: ['section-bgcover-justify-stretch'] },
        },
      },
      'section-bgcover-padding': {
        'Y_section-bgcover-padding': {
          'section-bgcover-padding-none': { $class: ['section-bgcover-padding-none'] },
          'section-bgcover-padding-xsmall': { $class: ['section-bgcover-padding-xsmall'] },
          'section-bgcover-padding-small': { $class: ['section-bgcover-padding-small'] },
          'section-bgcover-padding-medium': { $class: ['section-bgcover-padding-medium'] },
          'section-bgcover-padding-large': { $class: ['section-bgcover-padding-large'] },
        },
      },
    },
  },
}
var siteBeautyverse = theStylist.the_beautician.siteBeautyverse;
var sectionsBeautyverse = theStylist.the_beautician.sectionsBeautyverse;
// for (var branch in siteBeautyverse){
//   branch = Object.keys(siteBeautyverse[branch][Object.keys(siteBeautyverse[branch])[0]]);
//   var path = branch[Math.floor(Math.random()*branch.length)]
// }
// for (var branch in sectionsBeautyverse){
//   branch = Object.keys(sectionsBeautyverse[branch][Object.keys(sectionsBeautyverse[branch])[0]]);
//   var path = branch[Math.floor(Math.random()*branch.length)]
// }

