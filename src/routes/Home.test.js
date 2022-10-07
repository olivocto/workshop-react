import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom'
import Home from './Home';

describe('Home Page', () => {
  it('possède un titre de niveau h1', () => {
    render(<Home />, {wrapper: BrowserRouter});
    const titleElement = screen.getByRole('heading', {level: 1})
    expect(titleElement).toBeInTheDocument();
  })

  it('possède un lien qui redirige vers la page articles', () => {
    render(<Home />, {wrapper: BrowserRouter});
    const linkElement = screen.getByRole('link')
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveAttribute('href', '/articles');
  })
});
