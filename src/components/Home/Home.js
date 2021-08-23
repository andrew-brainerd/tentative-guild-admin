import React from 'react';
import { isMobile } from 'react-device-detect';
import { guildDiscordLink, guildWarcraftLogsLink } from '../../constants/links';
import guildLogo from '../../img/guild-logo.png';
import discordLogo from '../../img/discord-logo.svg';
import warcraftLogsLogo from '../../img/warcraft-logs-logo.png';
import styles from './Home.module.scss';

const Home = () => {
  return (
    <div className={styles.content}>
      <h1>
        &lt;Tentative&gt;
      </h1>
      <h2>WoW Classic Guild</h2>
      <img
        className={styles.guildLogo}
        src={guildLogo}
        alt="Guild Logo"
      />
      <div className={styles.guildButtons}>
        <a
          href={guildDiscordLink}
          className={[
            styles.button,
            !isMobile ? styles.animate : ''
          ].join(' ')}
          target="_blank"
          rel="noreferrer"
        >
          <img
            className={styles.discordLogo}
            src={discordLogo}
            alt="Discord Logo"
          />
        </a>
        <a
          href={guildWarcraftLogsLink}
          className={[
            styles.button,
            styles.warcraftLogsButton,
            !isMobile ? styles.animate : ''
          ].join(' ')}
          target="_blank"
          rel="noreferrer"
        >
          <img
            className={styles.warcraftLogsLogo}
            src={warcraftLogsLogo}
            alt="Warcraft Logs Logo"
          />
          <span className={styles.buttonText}>Warcraft Logs</span>
        </a>
      </div>
    </div>
  );
};

export default Home;
