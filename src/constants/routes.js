import Home from '../components/Home/Home';
import Recruitment from '../components/Recruitment/Recruitment';
import Roster from '../components/Roster/Roster';
import Gear from '../components/Gear/Gear';
import Suggestions from '../components/Suggestions/Suggestions';
import ManageGear from '../components/ManageGear/ManageGear';

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
    path: '/roster',
    name: 'Roster',
    Component: Roster
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
  },
  {
    path: '/gear-data',
    name: 'Data',
    Component: ManageGear
  }
];
