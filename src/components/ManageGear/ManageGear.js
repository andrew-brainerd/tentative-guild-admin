import React, { useEffect, useState } from 'react';
import { getGear, deleteGearSet } from '../../api/gear';
import Loading from '../Loading/Loading';
import styles from './ManageGear.module.scss';

const ManageGear = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [gearSets, setGearSets] = useState([]);

  const loadGear = () => {
    getGear().then(({ data }) => {
      console.log(data);
      setGearSets([
        {
          character: {
            characterName: 'Name',
            characterClass: 'Class'
          },
          gear: 'Gear',
          delete: ''
        },
        ...data
      ]);
      setIsLoading(false);
    });
  };

  useEffect(() => {
    loadGear();
  }, []);

  const deleteSet = id => {
    deleteGearSet(id).then(() => loadGear());
  };

  return (
    <div className={styles.manageGear}>
      <h1>Manage Data</h1>
      <div className={styles.content}>
        {isLoading ? <Loading /> : gearSets.map((data, d) => (
          <div key={d} className={[
            styles.gearSet,
            d === 0 ? styles.header : ''
          ].join(' ')}
          >
            <div className={styles.name}>
              {(data.character ? data.character.characterName : data.name)}
            </div>
            <div className={styles.class}>
              {(data.character || {}).characterClass}
            </div>
            <div className={styles.gear}>
              {d === 0 ?
                <span>{data.gear}</span> :
                <div className={styles.code}>
                  <code>{JSON.stringify(data.gear, null, '\t')}</code>
                </div>
              }
            </div>
            {d !== 0 && (
              <div className={styles.delete}>
                <span onClick={() => deleteSet(data._id)}>Delete</span>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManageGear;
