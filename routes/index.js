import homepage from 'routes/routers/homepage_router'
import listing from 'routes/routers/listing_router'
import test from 'routes/routers/test_router'

export default (app) => {
  app.use('/', homepage)
  app.use('/listing', listing)
  app.use('/test', test)
}
