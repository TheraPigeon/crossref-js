import { getFunders } from '../getFunders';

describe('getFunders method', () => {
  describe('data', () => {
    it('returns funder data', async () => {
      const data = await getFunders();
      expect(data).not.toBeNull();
    });
  });
});
