import listing from 'dao/solr/listings'

class ListingService {
  constructor (listingModel) {
    this.listingModel = listingModel
  }

  async getAllListings () {
    const listingCollection = await this.listingModel.search()
    const slorStatus = listingCollection.responseHeader.status
    if (slorStatus !== 0) {
      throw new Error('Solr search error!')
    }
    return {
      number: listingCollection.response.numFound,
      listings: listingCollection.response.docs
    }
  }

  getListing () {
    return {
      number: 1,
      listing: 'listing pertama'
    }
  }
}

export default new ListingService(listing)
