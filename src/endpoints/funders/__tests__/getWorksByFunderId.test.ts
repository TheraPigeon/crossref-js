import { getWorksByFunderId } from '../getWorksByFunderId';
import { VALID_FUNDER_ID } from '../testUtils';

describe('getFunders method', () => {
  describe('data', () => {
    it('returns works data when given a valid funder ID', async () => {
      const data = await getWorksByFunderId(VALID_FUNDER_ID);
      expect(data).not.toBeNull();
    });
  });
});
