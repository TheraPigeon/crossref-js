import axios from 'axios';
import { endpoints } from '../../constants';
import { RequestConfig } from '../../types/RequestConfig';
import { createParams } from '../../utils/createParams';

// Returns a list of works in the journal identified by {issn}.
export const getJournalWorksByISSN = async (id: string[], config?: RequestConfig) => {
    try {
        const {BASE_URL, JOURNALS, WORKS} = endpoints
        const params = createParams(config)

    }
}