import { getLicenses } from '../getLicense';

describe('GetLicenses method', () => {
  describe('data', () => {
    it('returns list of licenses', async () => {
      const data = await getLicenses();
      expect(data).not.toBe(null);
    });
  });
});
