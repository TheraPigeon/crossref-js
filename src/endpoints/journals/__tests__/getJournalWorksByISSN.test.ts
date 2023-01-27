import { getJournalWorksByISSN } from '../getJournalWorksByISSN';
import { validISSN } from '../testUtils';

describe('getJournalsByISSN method', () => {
  describe('ISSN', () => {
    it('returns list of works under given ISSN', async () => {
      const data = await getJournalWorksByISSN(validISSN);

      expect(data).not.toBeNull();
    });
  });
});
