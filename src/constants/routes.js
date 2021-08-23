import Home from '../components/Home/Home';
import Recruitment from '../components/Recruitment/Recruitment';
import Gear from '../components/Gear/Gear';
import Suggestions from '../components/Suggestions/Suggestions';

export default [
  {
    path: '/',
    name: 'Home',
    Component: Home
  },
  {
    path: '/recruitment',
    name: 'Recruitment',
    Component: Recruitment
  },
  {
    path: '/gear',
    name: 'Gear',
    Component: Gear
  },
  {
    path: '/suggestions',
    name: 'Suggestions',
    Component: Suggestions
  }
];
