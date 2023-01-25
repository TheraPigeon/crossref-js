import { getWorksByPrefix } from '../getWorksByPrefix';
import { VALID_PREFIX } from '../testUtils';

describe('getPrefix method', () => {
  describe('input', () => {
    it('returns data when provided a valid prefix', async () => {
      const data = await getWorksByPrefix(VALID_PREFIX);
      expect(data).not.toBeNull();
    });
  });
});
