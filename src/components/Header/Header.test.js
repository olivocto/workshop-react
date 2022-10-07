import { render, screen, within } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom'
import Header from './Header';

describe('Header Component', () => {
  it('possède le nom de notre application', () => {
    render(<Header />, {wrapper: BrowserRouter});
    const nameElement = screen.getByText('BasesDuDev')
    expect(nameElement).toBeInTheDocument();
  })

  it('possède un menu de navigation', () => {
    render(<Header />, {wrapper: BrowserRouter});
    const navElement = screen.getByRole('navigation')
    expect(navElement).toBeInTheDocument();
  })

  it('possède 4 liens de redirection', () => {
    render(<Header />, {wrapper: BrowserRouter});
    const navElement = screen.getByRole('navigation')
    const linkElementList = within(navElement).getAllByRole('link')
    expect(linkElementList[0]).toHaveTextContent('Accueil');
    expect(linkElementList[0]).toHaveAttribute('href', '/');
    expect(linkElementList[1]).toHaveTextContent('Publier');
    expect(linkElementList[1]).toHaveAttribute('href', '/post');
    expect(linkElementList[2]).toHaveTextContent('Articles');
    expect(linkElementList[2]).toHaveAttribute('href', '/articles');
    expect(linkElementList[3]).toHaveTextContent('Météo');
    expect(linkElementList[3]).toHaveAttribute('href', '/wheather');
  })

});
