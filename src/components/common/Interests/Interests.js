import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import clsx from 'clsx';
import { connect } from 'react-redux';
import { like } from '../../../redux/likeRedux.js';
import styles from './Interests.module.scss';

const Component = ({ className, interests }) => (
  <div className={clsx(className, styles.root)}>
    {interests.map((interest) => (
      <Grid item xs={12} sm={6} md={4} className={styles.galleryItem} key={interest.name}>
        <img src={interest.image} alt={interest.name}/>
        <p className={styles.name}>{interest.name}</p>
      </Grid>
    ))}
  </div>
);

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  interests: PropTypes.array,
};

const mapStateToProps = (state) => ({
  interests: like(state),
});

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

const ContainerComponent = connect(mapStateToProps)(Component);

export {
  //Component as Interests,
  ContainerComponent as Interests,
  Component as InterestsComponent,
};
