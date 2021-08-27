import React, { useState, useEffect } from 'react';
import { getSuggestions } from '../../api/feedback';
import Loading from '../Loading/Loading';
import styles from './Suggestions.module.scss';

const Suggestions = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    getSuggestions().then(({ data }) => {
      setSuggestions(data);
      setIsLoading(false);
    });
  }, []);

  return (
    <div className={styles.suggestions}>
      <h1>Suggestions</h1>
      <div className={styles.content}>
        {isLoading ? <Loading /> : suggestions.map((app, a) => (
          <div key={a} className={[
            styles.suggestion,
            a === 0 ? styles.header : ''
          ].join(' ')}
          >
            <div className={styles.name}>
              {app.name}
            </div>
            <div className={styles.suggestion}>
              {app.suggestion}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Suggestions;
