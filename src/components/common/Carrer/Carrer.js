import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import clsx from 'clsx';
import { connect } from 'react-redux';
import { carrer } from '../../../redux/carrerRedux';

import styles from './Carrer.module.scss';

const Component = ({ className, carrer}) => (

  <div className={clsx(className, styles.root)}>
    {carrer.map( c =>(
      <div className={styles.carrer} key={c.id}>
        <Grid item md={12} lg={6} className={styles.carrerGrid}>
          <img src={c.photo} alt={c.proffesion} className={styles.carrerPhoto}/>
        </Grid>
        <Grid item md={12} lg={6} className={styles.carrerGrid}>
          <h2 className={styles.carrerTitle}>{c.proffesion}</h2>
          <p className={styles.carrerText}>{c.description}</p>
        </Grid>
      </div>
    ))
    }
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
