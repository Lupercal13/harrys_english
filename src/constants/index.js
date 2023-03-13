import knowledge from '../assets/Knowledge.svg'
import brainstorming from '../assets/brainstorming_lightbulb.svg'
import success from '../assets/success.svg'
import progress from '../assets/Progress.svg'

export const navLinks = [
  {
    id: "home",
    title: "Home",
  },
  {
    id: "about",
    title: "About",
  },
  {
    id: "classes",
    title: "Classes",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

export const classes = [
  {
    id: 'pre-k',
    image: brainstorming,
    title: 'Age 3-4',
    description: '30 minute class designed to get children involved in learning by moving their bodies through fun classroom activites. The focus at this level is Listening and Speaking',
    price: '800/lesson',
    date: 'Mon, Weds, Fri @ 3:30pm',


  },
  {
    id: 'elementary1',
    image: knowledge,
    title: 'Elementary 1-4',
    description: '50 minute designed to help students with learning key vocabulary and listening skills.',
    price: '1000/lesson',
    date: 'Mon, Weds, Fri @ 4:00pm',
  },
  {
    id: 'elementary2',
    image: progress,
    title: 'Elementary 5-6',
    description: '50 minute lesson designed to help students learn key vocabulary and phonetics. This class focuses mainly on listening, reading, and writing in order to prepare students for Junior High School English classes.',
    price: '1000/lesson',
    date: 'Mon, Weds, Fri @ 5:00pm',


  },
  {
    id: 'middleSchool',
    image: success,
    title: 'Jr. High School 1-3',
    description: '50 minute lesson designed to help students understand key grammar concepts and vocabulary used in English lessons at their Junior High School. The main focus on this class is reading, writing, and listening.',
    price: '1000/lesson',
    date: 'Mon, Weds, Fri @ 6:00pm',


  },
]
