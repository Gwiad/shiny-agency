import Card from '.';
import { fireEvent, render, screen } from '@testing-library/react';

describe('Card', () => {
  const label = 'test label';
  const title = 'test title';
  const picture = 'https://picsum.photos/200';
  test('renders the given picture and title', () => {
    render(<Card label={label} title={title} picture={picture} />);
    const cardImg = screen.getByRole('img');
    const cardTitle = screen.getByText(title);
    expect(cardImg).toHaveAttribute('src', picture);
    expect(cardTitle.textContent).toBe(` ${title} `);
  });
  test('renders the given picture and title', () => {
    render(<Card label={label} title={title} picture={picture} />);
    const cardImg = screen.getByRole('img');
    const cardTitle = screen.getByText(title);
    expect(cardImg).toHaveAttribute('src', picture);
    expect(cardTitle.textContent).toBe(` ${title} `);
  });
  test('onClick add star to title', () => {
    render(<Card label={label} title={title} picture={picture} />);
    const cardTitle = screen.getByText(title);
    fireEvent.click(cardTitle);
    expect(cardTitle.textContent).toBe(`⭐️ ${title} ⭐️`);
  });
});
