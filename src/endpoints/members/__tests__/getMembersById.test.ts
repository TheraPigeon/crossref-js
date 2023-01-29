import { getMembersById } from '../getMembersById';
import { memberId } from '../testUtils';

describe('getMemberById method', () => {
  describe('id', () => {
    it('Return member info under given id', async () => {
      const data = await getMembersById(memberId);

      expect(data).not.toBeNull();
    });
  });
});
