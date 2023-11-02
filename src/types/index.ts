// Response types
export type OpenLibrarySearchResults = {
  numFound: number;
  start: number;
  numFoundExact: boolean;
  docs: Doc[];
  num_found: number;
  q: string;
  offset: null;
};

export type Doc = {
  key: string;
  type: string;
  title: string;
  publish_year: number[];
  oclc: string[];
  author_name: string[];
  first_sentence: string;
};

export type SearchBook = {
  key: string;
  type: string;
  title: string;
  cover: string;
  publish_year: number | string;
  author_name: string;
  first_sentence: string;
};

export type OpenLibraryBook = {
  description: string;
  links: [];
  title: string;
  covers: number[];
  subject_places: string[];
  subjects: string[];
  subject_people: string[];
  key: string;
  authors: {
    author: {
      key: string;
    };
    type: {
      key: string;
    };
  }[];
  type: {
    key: string;
  };
};

export type Book = {
  title: string;
  cover: string | number | null;
  links: {url: string; title: string}[];
  description: string | {type: string; value: string};
  subject_people: string[];
};
