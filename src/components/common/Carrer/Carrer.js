import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import clsx from 'clsx';
import { connect } from 'react-redux';
import { carrer } from '../../../redux/carrerRedux';

import styles from './Carrer.module.scss';

class Component extends React.Component {
  render() {
    
    const {carrers, className} = this.props;
    return (
      <div className={clsx(className, styles.root)}>
        <div className={styles.carrer}>
          <Grid item xs={12} sm={6} className={styles.carrerGrid}>
            <img src={carrers[0].photo} alt={carrers[0].proffesion} className={styles.carrerPhoto}/>
          </Grid>
          <Grid item xs={12} sm={6} className={styles.carrerGrid}>
            <h2 className={styles.carrerTitle}>{carrers[0].proffesion}</h2>
            <p className={styles.carrerText}>{carrers[0].description}</p>
          </Grid>
        </div>
        <div className={styles.carrer}>
          <Grid item xs={12} sm={6} className={styles.carrerGrid}>
            <h2 className={styles.carrerTitle}>{carrers[1].proffesion}</h2>
            <p className={styles.carrerText}>{carrers[1].description}</p>
          </Grid>
          <Grid item xs={12} sm={6} className={styles.carrerGrid}>
            <img src={carrers[1].photo} alt={carrers[1].proffesion} className={styles.carrerPhoto}/>
          </Grid>
        </div>
        <div className={styles.carrer}>
          <Grid item xs={12} sm={6} className={styles.carrerGrid}>
            <img src={carrers[2].photo} alt={carrers[2].proffesion} className={styles.carrerPhoto}/>
          </Grid>
          <Grid item xs={12} sm={6} className={styles.carrerGrid}>
            <h2 className={styles.carrerTitle}>{carrers[2].proffesion}</h2>
            <p className={styles.carrerText}>{carrers[2].description}</p>
          </Grid>
        </div>
      </div>
    );
  }
}
Component.propTypes = {
  carrers: PropTypes.array,
  className: PropTypes.string,
};

const mapStateToProps = state => ({
  carrers: carrer(state),
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
