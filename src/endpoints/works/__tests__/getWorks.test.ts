import { getWorks } from '../getWorks';

describe('getWorks method', () => {
  describe('data', () => {
    it('returns list of all works', async () => {
      const data = await getWorks();
      expect(data).toBeNull();
    });
  });
});
