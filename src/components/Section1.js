import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

// import tileData from './tileData';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 500,
    height: 450,
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
}));

const tileData = [
  {
   img: 'img',
    title: 'Image',
    author: 'author',
  },
 ];

/**
 * The example data is structured as follows:
 *
 * import image from 'path/to/image.jpg';
 * [etc...]
 *
 * const tileData = [
 *   {
 *     img: image,
 *     title: 'Image',
 *     author: 'author',
 *   },
 *   {
 *     [etc...]
 *   },
 * ];
 */
export default function Section1() {
  const classes = useStyles();
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <div id="main">
    <div class="inner">

    
    <section>
      <header class="major">
        <h2>Welcome to Neural World</h2>
      </header>
      <div class="features">
        <article>
          <span class="icon fa-gem"></span>
          <div class="content">
            <Link to='/intromaterials'
                className='nav-links'
                onClick={closeMobileMenu}>
              <h3>Introductory material</h3>
            </Link>
            <p>Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.</p>
          </div>
        </article>
        <article>
          <span class="icon solid fa-paper-plane"></span>
          <div class="content">
            <h3>Join Slack</h3>
            <p>Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.</p>
          </div>
        </article>
        <article>
          <span class="icon solid fa-rocket"></span>
          <div class="content">
            <Link
                to='/bibliography'
                className='nav-links'
                onClick={closeMobileMenu}
              >
            <h3>The papers!</h3>
            </Link>
            <p>Refer to Papers Here Refer to Papers Here Refer to Papers Here Refer to Papers Here Refer to Papers Here</p>
          </div>
        </article>
        <article>
          <span class="icon solid fa-signal"></span>
          <div class="content">
            <Link
                to='/resources'
                className='nav-links'
                onClick={closeMobileMenu}
              >
            <h3>Computational resources</h3>
            </Link>
            <p>Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.</p>
          </div>
        </article>
      </div>
    </section>
    </div>
  </div>
  );
}