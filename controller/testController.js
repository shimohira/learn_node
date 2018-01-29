import testService from 'services/testService'

export const promiseAsync = async (req, res, next) => {
  let test = await testService.asyncAwait();
  console.log(test);
  let test1 = testService.promise();
  console.log(test1);
  res.send(test)
}