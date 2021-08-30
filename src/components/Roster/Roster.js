import React, { useState, useEffect } from 'react';
import { isEmpty } from 'ramda';
import { getGuild } from '../../api/guild';
import { roles } from '../../constants/guild';
import Loading from '../Loading/Loading';
import Select from 'react-select';
import styles from './Roster.module.scss';

const headerRow = {
  name: 'Name',
  // isOnline: '',
  class: 'Class',
  level: 'Level',
  zone: 'Zone',
  rank: 'Rank'
};

const Roster = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [roster, setRoster] = useState([]);
  const [filteredList, setFilteredList] = useState(null);

  useEffect(() => {
    getGuild().then(({ guild }) => {
      setRoster([headerRow, ...guild]);
      setIsLoading(false);
    });
  }, []);

  const onSelectRole = options => {
    const values = options.map(option => option.label);

    if (!isEmpty(options)) {
      setFilteredList([
        headerRow,
        ...roster.filter(member => values.includes(member.rank))
      ]);
    } else {
      setFilteredList(null);
    }
  };

  return (
    <div className={styles.roster}>
      <h1>Roster</h1>
      <div className={styles.content}>
        {isLoading ? (
          <Loading />
        ) : (
          <>
            <div className={styles.controls}>
              <Select
                options={roles}
                onChange={onSelectRole}
                isClearable
                isMulti
              />
              <div className={styles.numSelected}>
                {filteredList ? filteredList.length : roster.length} members{filteredList && ' selected'}
              </div>
            </div>
            {(filteredList || roster).map((member, m) => (
              <div key={m}>
                <div
                  className={[
                    styles.member,
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
                  <div className={styles.class}>{member.class}</div>
                  <div className={styles.level}>{member.level}</div>
                  <div className={styles.zone}>{member.zone}</div>
                  <div className={styles.rank}>{member.rank}</div>
                </div>
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default Roster;
