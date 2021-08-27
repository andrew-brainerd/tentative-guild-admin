import React, { useState, useEffect } from 'react';
import { getSuggestions } from '../../api/feedback';
import styles from './Suggestions.module.scss';

const Suggestions = () => {
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    getSuggestions().then(({ data }) => {
      console.log('suggestions', data);
      setSuggestions(data);
    });
  }, []);

  return (
    <div className={styles.suggestions}>
      <h1>Suggestions</h1>
      <div className={styles.content}>
        {suggestions.map((app, a) => (
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
