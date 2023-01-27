import { getJournalByISSN } from '../getJournalByISSN';
import { validISSN } from '../testUtils';

describe('getJournalsByISSN method', () => {
  describe('ISSN', () => {
    it('returns info on journal with given ISSN', async () => {
      const data = await getJournalByISSN(validISSN);

      expect(data).not.toBeNull();
    });
  });
});
