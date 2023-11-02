import {rest} from 'msw';

export const handlers = [
  rest.get('https://openlibrary.org/search.json', (req, res, ctx) => {
    return res(
      ctx.json({
        docs: [
          {
            key: 'work/test',
            type: 'work',
            oclc: [12345],
            author_name: ['Test Author'],
            publish_year: [2020],
          },
        ],
      }),
    );
  }),
];
