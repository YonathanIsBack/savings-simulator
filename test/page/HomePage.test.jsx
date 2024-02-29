import { render, screen } from '@testing-library/react';
import HomePage from '../../src/page/HomePage';

describe('HomePage', () => {
  it('Should display welcome text', () => {
    render(<HomePage />);

    expect(screen.getByText('Welcome!')).toBeDefined();
  });

  it('should display deposit table', () => {
    render(<HomePage />);

    expect(document.querySelector('#deposit-table')).toBeDefined();
  });
});
