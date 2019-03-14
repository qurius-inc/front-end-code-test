import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Button, Welcome } from '@storybook/react/demo';
import Dashboard from '../src/Dashboard';

import movies from '../data/movies_small.json';

import imgFile from '../static/logo-deep6.png';

const image = {
  src: imgFile,
  alt: "Deep 6 Blockbuster"
}
console.log('image', image);

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Button', module)
  .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
  .add('with some emoji', () => (
    <Button onClick={action('clicked')}>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>
  ));

storiesOf('Dashboard', module)
    .add('with movies', () => (
      <Dashboard
        image={image}
        movies={movies}
      />
    ))