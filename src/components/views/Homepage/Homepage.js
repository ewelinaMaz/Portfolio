import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { Carrer } from '../../common/Carrer/Carrer';
import { Interests } from '../../common/Interests/Interests';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import Typical from 'react-typical';
import { connect } from 'react-redux';
import { getAll } from '../../../redux/postsRedux.js';
import styles from './Homepage.module.scss';

const Component = ({ className, projects}) => (
  <div className={clsx(className, styles.root)}>
    <Container className={styles.Container}>
      <Grid item xs={12} sm={6} className={styles.Grid}>
        <img
          src="/image/DSC_2181.JPG"
          alt="Ewelina"
          className={styles.image}
        ></img>
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
        ></Typical>
      </Grid>
      <Grid item xs={12}>
        <h1>Skills</h1>
      </Grid>
      {projects.map((project) => (
        <Grid item xs={12} sm={6} md={4} key={project.id}>
          <Button
            className={styles.button}
            component={Link}
            href={project.link}
          >
            <img src={project.logo} alt="logo" className={styles.picture} />
            <img
              src={project.project}
              alt="project"
              className={styles.project}
            />
          </Button>
        </Grid>
      ))}
      <Grid item xs={12}>
        <h1>Carrer</h1>
      </Grid>
      <Carrer/>
      <Grid item xs={12}>
        <h1>Interests</h1>
      </Grid>
      <Interests/>
      <footer className={styles.pageFooter}> 
        <p>Made with ❤ by © Ewelina Mazurek</p> 
      </footer>
    </Container>
  
  </div>
);

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  projects: PropTypes.array,
};

const mapStateToProps = (state) => ({
  projects: getAll(state),
});

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

const ContainerComponent = connect(mapStateToProps)(Component);

export {
  //Component as Homepage,
  ContainerComponent as Homepage,
  Component as HomepageComponent,
};
