import { getMemberWorksById } from '../getMemberWorksById';
import { memberId } from '../testUtils';

describe('getMemberWorksById method', () => {
  describe('id', () => {
    it('Return member info under given id', async () => {
      const data = await getMemberWorksById(memberId);

      expect(data).not.toBeNull();
    });
  });
});
