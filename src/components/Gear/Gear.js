import React, { useState, useEffect } from 'react';
// import { authenticate, getItemInfo } from '../../api/blizzard';
import { getCharacters } from '../../api/gear';
import styles from './Gear.module.scss';

const Gear = () => {
  const [chars, setChars] = useState([]);

  // console.log(characters);

  // const head = 22267;
  // const staff = 25950;

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
      setChars(characters);
      console.log('Characters', characters);
    });
  }, []);

  return (
    <div className={styles.gear}>
      <pre>
        {chars}
      </pre>
    </div>
  );
};

export default Gear;
