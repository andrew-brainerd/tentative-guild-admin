import React, { useState, useEffect } from 'react';
import { authenticate, getItemInfo } from '../../api/blizzard';
import { getCharacters, getCharacterGear } from '../../api/gear';
import { rarities } from '../../constants/items';
import styles from './Gear.module.scss';

const Gear = () => {
  const [chars, setChars] = useState([]);
  const [charGear, setCharGear] = useState({});
  const [blizzardToken, setBlizzardToken] = useState(null);
  const [gearDetails, setGearDetails] = useState(null);

  useEffect(() => {
    authenticate().then(({ access_token: token }) => {
      setBlizzardToken(token);
    });

    getCharacters().then(({ characters }) => {
      setChars(characters);
    });
  }, []);

  const getCharGear = character => {
    getCharacterGear(character).then(
      gear => setCharGear(gear)
    );
  };

  useEffect(() => {
    gearDetails && console.log('Gear Details', gearDetails);
  }, [gearDetails]);

  const getItemDetails = itemId => {
    getItemInfo(blizzardToken, itemId).then(response => {
      console.log(response);
      setGearDetails(JSON.stringify(response, null, 2));

      // console.log(Object.keys(response.full.preview_item));
    });
  };

  return (
    <div className={styles.gear}>
    <h1>Gear</h1>
    <div className={styles.content}>
      <div className={styles.characters}>
        {chars.map(character => (
          <div key={character}>
            <div
              className={styles.character}
              onClick={() => {
                if (charGear.gear && charGear.character.characterName === character) {
                  setCharGear({});
                } else {
                  getCharGear(character);
                }
              }}
            >
              {character}
            </div>
            {charGear.gear && charGear.character.characterName === character && (
              <div className={styles.gearContainer}>
                {charGear.gear.map(({ itemId, itemSlot, itemName, itemRarity }) => (
                  <div
                    key={itemSlot}
                    className={[
                      styles.item,
                      styles[rarities[itemRarity].name.toLowerCase()]
                    ].join(' ')}
                    onClick={() => getItemDetails(itemId)}
                  >
                    <a href={`https://www.wowhead.com/item=${itemId}`} target='_blank' rel='noreferrer'>
                      {itemRarity > 1 && <span>[</span>}
                      {itemName}
                      {itemRarity > 1 && <span>]</span>}
                    </a>
                  </div>
                ))}
              </div>
            )}
            {charGear.gear && charGear.character.characterName && charGear.gear.length === 0 && (
              <h2>No Gear Data</h2>
            )}
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default Gear;
