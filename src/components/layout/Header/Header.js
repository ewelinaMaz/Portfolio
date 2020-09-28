import React from 'react';
import PropTypes from 'prop-types';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import CallIcon from '@material-ui/icons/Call';
import EmailIcon from '@material-ui/icons/Email';
import Link from '@material-ui/core/Link';
import clsx from 'clsx';
import styles from './Header.module.scss';

const Component = ({className}) => (
  <div className={clsx(className, styles.root)}>
    <h2 className={styles.Header}>Every project brings new possibilities</h2>
    <Grid item sm={4} className={styles.contact}>
      <IconButton 
        aria-label="linkedIn" 
        component={Link}
        href='www.linkedin.com/in/ewelina-mazurek-1a96a230'>
        <LinkedInIcon fontSize="large" className={styles.icon}/>
      </IconButton>
      <IconButton aria-label="phone" className={styles.iconButton}>
        <CallIcon/>
        <span> 531-062-374</span>
      </IconButton>
      <IconButton aria-label="e-mail" className={styles.iconButton}>
        <EmailIcon />
        <span>ewelina.laszczak7@gmail.com</span>
      </IconButton>
    </Grid>
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
  Component as Header,
  // Container as Header,
  Component as HeaderComponent,
};
