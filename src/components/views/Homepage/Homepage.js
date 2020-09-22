import React from 'react';
import PropTypes from 'prop-types';
//import image from;
import clsx from 'clsx';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
//import JSicon from ;
//import ReactIcon from;
//import NodeIcon from;
import Link from '@material-ui/core/Link';
import Typical from 'react-typical';
// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from './Homepage.module.scss';

const Component = ({className, children}) => (
  <div className={clsx(className, styles.root)}>
    <Container className={styles.Container}>
      <Grid item xs={12} sm={6} className={styles.Grid}>
        <img src='/image/DSC_2181.JPG' alt="Ewelina" className={styles.image}></img>
      </Grid>
      <Grid item xs={12} sm={6}>
        <h2 className={styles.name}>Ewelina Mazurek</h2>
        <Typical
          className={styles.name}
          loop={Infinity}
          wrapper="h2"
          steps={[
            'Front-end Developer', 
            6000,
            'Engineer', 
            3000,
            'Writer',
            2000,
          ]}
        >
        </Typical>
      </Grid>
      <Grid item xs={12}>
        <h1>Skills</h1>  
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <Button className={styles.button} component={Link} href="https://immense-shelf-23632.herokuapp.com/#/home">
          <img src='/image/JS.png' alt='JS'/>
        </Button>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <Button className={styles.button} component={Link} href="https://sleepy-forest-92591.herokuapp.com/">
          <img src='/image/React.png' alt='React'/>
        </Button>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <Button className={styles.button} component={Link}>
          <img src='/image/node.png' alt='JS' className={styles.picture}/>
        </Button>
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
