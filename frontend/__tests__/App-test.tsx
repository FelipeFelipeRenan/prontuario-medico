/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../App';
import Home from '../src/screens/Home/Home';
import '@testing-library/jest-native/extend-expect';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders correctly Home page', () => {
  renderer.create(<Home />);
});
