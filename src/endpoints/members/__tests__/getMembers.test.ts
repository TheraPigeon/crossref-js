import { getMembers } from '../getMembers';

describe('getMembers method', () => {
  describe('data', () => {
    it('Return a list of all members', async () => {
      const data = await getMembers();

      expect(data).not.toBeNull();
    });
  });
});
