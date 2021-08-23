import { React } from 'react';
import { Route } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import routes from '../../constants/routes';
import Header from '../Header/Header';
import ScrollToTop from '../ScrollToTop/ScrollToTop';
import styles from './App.module.scss';

const App = () => {
  return (
    <div className={styles.app}>
      <Header />
      <div className={styles.content}>
        {routes.map(({ path, Component }) => (
          <Route key={path} exact path={path}>
            {({ match }) => (
              <CSSTransition
                in={match != null}
                timeout={300}
                classNames='fadeAnimation'
                unmountOnExit
              >
                <div className='fadeAnimation'>
                  <ScrollToTop>
                    <Component />
                  </ScrollToTop>
                </div>
              </CSSTransition>
            )}
          </Route>
        ))}
      </div>
    </div>
  );
};

export default App;
