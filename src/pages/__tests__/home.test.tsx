import React from 'react';
import { render } from '@testing-library/react';

import Home from '../Home';

describe('Home', () => {
  it('should my name be rendered', () => {
    const { getByText } = render(<Home />);
    const nameHeader = getByText('Mateus Andrade');

    expect(nameHeader).toBeTruthy();
  });

  it("should linkedin button's href be filled ", async () => {
    const { getByTestId } = render(<Home />);

    const linkedinButton = getByTestId('linkedinButton');

    const linkedinURL = linkedinButton.getAttribute('href');

    expect(linkedinURL).toBe('https://br.linkedin.com/in/mateus-andrade-832bb7b4');
  });

  it("should github button's href be filled ", async () => {
    const { getByTestId } = render(<Home />);

    const githubButton = getByTestId('githubButton');

    const githubURL = githubButton.getAttribute('href');

    expect(githubURL).toBe('https://github.com/mcodex');
  });
});
