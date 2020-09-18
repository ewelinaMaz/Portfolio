import React from 'react';
import PropTypes from 'prop-types';
import image from '../../image/DSC_2181.JPG';
import clsx from 'clsx';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from './Homepage.module.scss';

const Component = ({className, children}) => (
  <div className={clsx(className, styles.root)}>
    <Container className={styles.Container}>
      <Grid item xs={12} sm={6} className={styles.Grid}>
        <img src={image} alt="Ewelina" className={styles.image}></img>
      </Grid>
      <Grid item xs={12} sm={6}>
        <h2 className={styles.name}>Ewelina Mazurek</h2>
      </Grid>
      <Grid item md={12}>
        <h1>Skills</h1>  
      </Grid>
      
    </Container>
    
  </div>
);

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

// const mapStateToProps = state => ({
//   someProp: reduxSelector(state),
// });

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

// const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Component as Homepage,
  // Container as Homepage,
  Component as HomepageComponent,
};
