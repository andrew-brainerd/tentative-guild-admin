import React, { useState, useEffect } from 'react';
import { getGuild } from '../../api/guild';
import Loading from '../Loading/Loading';
import styles from './Roster.module.scss';

const Roster = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [roster, setGuild] = useState([]);

  useEffect(() => {
    getGuild().then(({ guild }) => {
      setGuild([
        {
          name: 'Name',
          // isOnline: '',
          class: 'Class',
          level: 'Level',
          zone: 'Zone',
          rank: 'Rank'
        },
        ...guild
      ]);
      setIsLoading(false);
    });
  }, []);

  return (
    <div className={styles.roster}>
      <h1>Roster</h1>
      <div className={styles.content}>
        {isLoading ? <Loading /> : roster.map((member, m) => (
          <div key={m} className={[
            styles.members,
            m === 0 ? styles.header : ''
          ].join(' ')}
          >
            <div className={styles.name}>
              {(member.name || '').replace('-Pagle', '')}
            </div>
            {/* <div className={[
              styles.status,
              member.isOnline ? styles.online : styles.offline
            ].join(' ')}>
              {m !== 0 && (member.isOnline ? 'Online' : 'Offline')}
              {m === 0 && ''}
            </div> */}
            <div className={styles.class}>
              {member.class}
            </div>
            <div className={styles.level}>
              {member.level}
            </div>
            <div className={styles.zone}>
              {member.zone}
            </div>
            <div className={styles.rank}>
              {member.rank}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Roster;
