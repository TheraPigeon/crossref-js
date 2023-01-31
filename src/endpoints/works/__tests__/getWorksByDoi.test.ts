import { getWorksByDoi } from '../getWorksByDoi';
import { worksDoi } from '../testUtils';

describe('getWorksByDoi method', () => {
  describe('data', () => {
    it('returns metadata when provided a valid DOI', async () => {
      const data = await getWorksByDoi(worksDoi);
      expect(data).not.toBeNull();
    });
  });
});
