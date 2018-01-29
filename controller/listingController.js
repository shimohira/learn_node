import listingService from 'services/listingService'

export const getListing = async (req, res, next) => {
  let listing = await listingService.getListing();
  console.log(listing);
  res.send(listing)
}
