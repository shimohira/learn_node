import testService from 'services/testService'

export const promiseAsync = async (req, res, next) => {
  let test = await testService.asyncAwait();
  console.log(test);
  res.send(test)
}
