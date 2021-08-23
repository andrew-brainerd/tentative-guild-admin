import React from 'react';
import styles from './About.module.scss';

const About = () => {
  return (
    <div className={styles.content}>
      <h1>About Us</h1>
      <div className={styles.about}>
        <p>
          Welcome to Tentative! Our main focus is on TBC Classic.
          We are consisted of experience players who are always looking to progress themselves.
          Always in discord hanging out, always running normal and heroic dungeons and always leveling.
          We encourage everyone to work within the guild and to help each other out.
          There are gaps between officers, raiders, members and casuals.
          Everyone plays the game with each other and no one is left out.
          We expect everyone to be somewhat active and online more often than not.
          As mentioned above, please work within the guild as much as possible.
          Running a normal for reputation? Ask the guild first. Selling some primals? Ask the guild please!
        </p>
      </div>
    </div>
  );
};

export default About;
