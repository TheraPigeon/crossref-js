import { getAgencyWorksByDoi } from '../getAgencyWorksByDoi';
import { worksDoi } from '../testUtils';

describe('getAgencyWorksByDoi method', () => {
  describe('data', () => {
    it('Gets the agency associated with a specific work by its DOI', async () => {
      const data = await getAgencyWorksByDoi(worksDoi);
      expect(data).not.toBeNull();
    });
  });
});
