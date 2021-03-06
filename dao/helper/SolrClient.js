import solr from 'solr-client'
import config from 'dao/config.json'
import bluebird from 'bluebird'

export default class SolrClient {
  constructor (core) {
    this.client = bluebird.promisifyAll(solr.createClient({
      host: config.solrHost,
      port: config.solrPort,
      path: config.solrPath,
      core: core
    }))
  }
}
