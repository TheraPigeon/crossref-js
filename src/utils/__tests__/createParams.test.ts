// write tests here
import { RequestConfig } from '../../types/RequestConfig';
import { createParams } from '../createParams';

describe('create params function', () => {
  describe('handles RequestConfig object', () => {
    it('returns empty string when given no input', () => {
      expect(createParams()).toBe('');
    });

    it('returns empty string when given empty object', () => {
      const emptyObj = {};
      expect(createParams(emptyObj)).toBe('');
    });

    it('adds mailto param when mailto is provided in config', () => {
      const config: RequestConfig = {
        mailto: 'johndoe@gmail.com',
      };
      const result = createParams(config);

      expect(result).toBe('?mailto=johndoe@gmail.com');
    });

    it('adds rows param when rows is provided in config', () => {
      const config: RequestConfig = {
        rows: 5,
      };
      const result = createParams(config);

      expect(result).toBe('?rows=5');
    });

    it('adds offset to params when offset is provided in config', () => {
      const config: RequestConfig = {
        offset: 5,
      };
      const result = createParams(config);

      expect(result).toBe('?offset=5');
    });
  });
});
