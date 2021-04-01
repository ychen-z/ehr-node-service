import Home from './containers/Home';
import App from './App';
import NotFound from './containers/NotFound';

export default [{
  component: App,
  routes: [
    {
      path: '/',
      component: Home,
      exact: true,
      loadData: Home.loadData,
    },
    {
      path: '*',
      component: NotFound,
    }
  ]
}];


