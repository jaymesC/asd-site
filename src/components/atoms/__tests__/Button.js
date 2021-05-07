import React from 'react';
import renderer from 'react-test-renderer';
import Button from '../Button';

describe('Button', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Button>Default Starter</Button>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
