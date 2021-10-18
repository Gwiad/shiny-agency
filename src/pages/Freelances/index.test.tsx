import { rest } from 'msw';
import { setupServer } from 'msw/node';
import render from 'utils/test';
import {
  waitFor,
  screen,
  waitForElementToBeRemoved,
} from '@testing-library/react';
import Freelances from './';
import ThemeProvider from 'utils/context/ThemeProvider';
function Wrapper({ children }: any) {
  return <ThemeProvider>{children}</ThemeProvider>;
}
const freelancersMockedData = [
  {
    name: 'Harry Potter',
    job: 'Magicien frontend',
    picture: '',
  },
  {
    name: 'Hermione Granger',
    job: 'Magicienne fullstack',
    picture: '',
  },
];

const server = setupServer(
  rest.get('http://localhost:8000/freelances', (req, res, ctx) => {
    return res(ctx.json({ freelancersList: freelancersMockedData }));
  }),
);
beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test('Should display loader', async () => {
  render(<Freelances />);
  await waitForElementToBeRemoved(() => screen.getByTestId('loader'));
  await waitFor(() => {
    expect(screen.getByText('Harry Potter')).toBeTruthy();
    expect(screen.getByText('Hermione Granger')).toBeTruthy();
  });
});
