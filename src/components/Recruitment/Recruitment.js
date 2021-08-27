import React, { useEffect, useState } from 'react';
import { getApplications } from '../../api/recruitment';
import styles from './Recruitment.module.scss';

const Recruitment = () => {
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    getApplications().then(({ data }) => {
      console.log('apps', data);
      setApplications([
        {
          name: 'Name',
          race: 'Race',
          class: 'Class',
          spec: 'Spec'
        },
        ...data
      ]);
    });
  }, []);

  return (
    <div className={styles.recruitment}>
      <h1>Applications</h1>
      <div className={styles.content}>
        {applications.map((app, a) => (
          <div key={a} className={[
            styles.application,
            a === 0 ? styles.header : ''
          ].join(' ')}
          >
            <div className={styles.name}>
              {app.name}
            </div>
            <div className={styles.race}>
              {app.race}
            </div>
            <div className={styles.class}>
              {app.class}
            </div>
            <div className={styles.spec}>
              {app.spec}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Recruitment;
