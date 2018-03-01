import testService from 'services/testService'

export const promiseAsync = async (req, res, next) => {
  let test = await testService.asyncAwait()
  console.log(test)
  let test1 = testService.promise()
  console.log(test1)
  res.send(test)
}

export const IIFE = async (req, res, next) => {
  let oke = ((bisa) => {
    console.log('oke')
  })(this)
  console.log(oke)
  res.send({IIFE: true})
}
