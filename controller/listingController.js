import listingService from 'services/listingService'

export const getListing = async (req, res, next) => {
  const listings = await listingService.getAllListings()
  res.send(listings)
}
