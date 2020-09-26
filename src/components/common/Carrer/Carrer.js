import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import clsx from 'clsx';
import { connect } from 'react-redux';
import { carrer } from '../../../redux/carrerRedux';

import styles from './Carrer.module.scss';

const Component = ({ className, carrer}) => (

  <div className={clsx(className, styles.root)}>
    <div className={styles.carrer}>
      <Grid item xs={12} sm={6} className={styles.carrerGrid}>
        <img src={carrer[0].photo} alt={carrer[0].proffesion} className={styles.carrerPhoto}/>
      </Grid>
      <Grid item xs={12} sm={6} className={styles.carrerGrid}>
        <h2 className={styles.carrerTitle}>{carrer[0].proffesion}</h2>
        <p className={styles.carrerText}>{carrer[0].description}</p>
      </Grid>
    </div>
    <div className={styles.carrer}>
      <Grid item xs={12} sm={6} className={styles.carrerGrid}>
        <h2 className={styles.carrerTitle}>{carrer[1].proffesion}</h2>
        <p className={styles.carrerText}>{carrer[1].description}</p>
      </Grid>
      <Grid item xs={12} sm={6} className={styles.carrerGrid}>
        <img src={carrer[1].photo} alt={carrer[1].proffesion} className={styles.carrerPhoto}/>
      </Grid>
    </div>
    <div className={styles.carrer}>
      <Grid item xs={12} sm={6} className={styles.carrerGrid}>
        <img src={carrer[2].photo} alt={carrer[2].proffesion} className={styles.carrerPhoto}/>
      </Grid>
      <Grid item xs={12} sm={6} className={styles.carrerGrid}>
        <h2 className={styles.carrerTitle}>{carrer[2].proffesion}</h2>
        <p className={styles.carrerText}>{carrer[2].description}</p>
      </Grid>
    </div>
  </div>
);

Component.propTypes = {
  carrer: PropTypes.array,
  className: PropTypes.string,
};

const mapStateToProps = state => ({
  carrer: carrer(state),
});

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

const ContainerComponent = connect(mapStateToProps)(Component);

export {
//  Component as Carrer,
  ContainerComponent as Carrer,
  Component as CarrerComponent,
};
