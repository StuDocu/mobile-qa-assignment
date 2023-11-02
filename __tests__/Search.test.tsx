import 'react-native';
import React from 'react';

import {server} from '../src/mocks/api/server';

import {it} from '@jest/globals';

import {render} from '@testing-library/react-native';

import {SearchScreen} from '../src/screens/search';
import {createWrapper} from './common/Wrapper';

jest.useFakeTimers();

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

jest.mock('../src/navigation/', () => {
  return {
    useSearchRoute: () => ({
      params: {search: 'test'},
    }),
    useRootNavigation: () => ({
      navigate: jest.fn(),
    }),
  };
});

it('Fetches and renders books', async () => {
  const {findByText} = render(<SearchScreen />, {wrapper: createWrapper()});
  expect(await findByText('Test Author')).toBeTruthy();
});
