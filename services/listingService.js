import { setTimeout } from 'timers'
import { resolve } from 'path'

class ListingService {
  constructor () {

  }

  getListing () {
    return {
      number: 1,
      listing: 'listing pertama'
    }
  }
}

export default new ListingService()
