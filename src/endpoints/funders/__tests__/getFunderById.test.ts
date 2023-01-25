import { getFunderById } from '../getFunderById';
import { VALID_FUNDER_ID } from '../testUtils';

describe('getFunderById method', () => {
  describe('input', () => {
    it('returns funder data when provided a valid funder ID', async () => {
      const data = await getFunderById(VALID_FUNDER_ID);
      expect(data).not.toBeNull();
    });
  });
});
