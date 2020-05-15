import React from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import CountUp from 'react-countup';
import cx from 'classnames';

import styles from './Cards.module.css';

const Info = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
  if (!confirmed) {
    return 'Loading...';
  }

  const cardInfo = [{
    title: 'Infected',
    css: 'infected',
    value: confirmed.value,
    description: 'Active cases of COVID-19.',
  }, {
    title: 'Recovered',
    css: 'recovered',
    value: recovered.value,
    description: 'Recoveries from COVID-19.',
  }, {
    title: 'Deaths',
    css: 'deaths',
    value: deaths.value,
    description: 'Deaths caused by COVID-19.',
  }];

  return (
    <div className={styles.container}>
      <Grid container spacing={3} justify="center">
        {cardInfo.map((object, i) => (
          <Grid key={i} item xs={12} md={3} component={Card} className={cx(styles.card, styles.infected)}>
            {/* Stuck here, cant make the "className" dynamic with cardInfo[{css}] */}

            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                {object.title}
              </Typography>
              <Typography variant="h5" component="h2">
                <CountUp start={0} end={object.value} duration={2.75} separator="," />
              </Typography>
              <Typography color="textSecondary">
                {new Date(lastUpdate).toDateString()}
              </Typography>
              <Typography variant="body2" component="p">
                {object.description}
              </Typography>
            </CardContent>
          </Grid>
        ))}

      </Grid>
    </div>
  );
};
export default Info;
