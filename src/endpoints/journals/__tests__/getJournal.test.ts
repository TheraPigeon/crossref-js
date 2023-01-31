import { getJournals } from '../getJournals';

describe('getJournals method', () => {
  describe('data', () => {
    it('returns list of journals', async () => {
      const data = await getJournals();

      expect(data).not.toBeNull();
    });
  });
});
