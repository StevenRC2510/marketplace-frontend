import { MAX_LENGTH_WORD } from 'src/shared/constants';

export const stringLimit = (str: string): string =>
  `${str.substring(0, MAX_LENGTH_WORD)}...`;
