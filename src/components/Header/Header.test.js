import { render, screen, within } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
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
    const navElement = screen.getByRole('navigation');
    const linkElementList = within(navElement).getAllByRole('link');
    const expected = [
      {
        textContent: 'Accueil',
        attributeHref: '/',
      },
      {
        textContent: 'Publier',
        attributeHref: '/post',
      },
      {
        textContent: 'Articles',
        attributeHref: '/articles',
      },
      {
        textContent: 'Météo',
        attributeHref: '/weather',
      },
    ]
    linkElementList.map((element, index) => {
      expect(linkElementList[index]).toHaveTextContent(expected[index].textContent);
      expect(linkElementList[index]).toHaveAttribute('href', expected[index.attributeHref]);
    })
  })

});
