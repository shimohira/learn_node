import SolrClient from 'dao/helper/SolrClient'
const LISTING_COLLECTION = 'listing_v2'
const listingClient = new SolrClient(LISTING_COLLECTION).client

export default {
  search: async (id) => {
    const qCondition = id ? `documentid:${id}` : '*:*'
    const query = listingClient.createQuery().q(qCondition).start(0).rows(10)
    return listingClient.searchAsync(query)
  }
}
