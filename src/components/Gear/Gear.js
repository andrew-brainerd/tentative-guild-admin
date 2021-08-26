import React, { useState, useEffect } from 'react';
// import { authenticate, getItemInfo } from '../../api/blizzard';
import { getCharacters, getGear } from '../../api/gear';
import styles from './Gear.module.scss';

const Gear = () => {
  const [chars, setChars] = useState([]);
  const [charGear, setCharGear] = useState({});

  useEffect(() => {
    // authenticate().then(({ access_token: token }) => {
    //   console.log(token);
    //   getItemInfo(token, '25950').then(response => {
    //     console.log(response);
    //     setGear(JSON.stringify(response, null, 2));

    //     console.log(Object.keys(response.full.preview_item));
    //   });
    // });

    getCharacters().then(({ characters }) => {
      console.log('Characters', characters);
      setChars(characters);
    });
  }, []);

  const getCharacterGear = character => {
    getGear(character).then(gear => {
      console.log('Gear', gear);
      setCharGear(gear);
      console.log(charGear);
    });
  };

  return (
    <div className={styles.content}>
      <div className={styles.characters}>
        {chars.map(character => (
          <div
            key={character}
            className={styles.character}
            onClick={() => getCharacterGear(character)}
          >
            {character}
            {charGear.gear && charGear.name === character && (
              <div className={styles.gear}>
                {charGear.gear.map(({ itemId, itemSlot, itemName, itemRarity }) => (
                  <div
                    key={itemSlot}
                    className={styles.item}
                  >
                    {itemName}
                  </div>
                ))}
              </div>
            )}
            {charGear.gear && charGear.name === character && charGear.gear.length === 0 && (
              <h2>No Gear Data</h2>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gear;
