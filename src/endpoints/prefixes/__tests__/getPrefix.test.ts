import { getPrefix } from '../getPrefix';
import { VALID_PREFIX } from '../testUtils';

describe('getPrefix method', () => {
  describe('input', () => {
    it('returns data when provided a valid prefix', async () => {
      const data = await getPrefix(VALID_PREFIX);
      expect(data).not.toBeNull();
    });
  });
});
