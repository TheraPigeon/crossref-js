import { getFunderById } from '../getFunderById';
import { VALID_FUNDER_ID } from '../testUtils';

describe('getPrefix method', () => {
  describe('input', () => {
    it('returns data when provided a valid prefix', async () => {
      const data = await getFunderById(VALID_FUNDER_ID);
      expect(data).not.toBeNull();
    });
  });
});
