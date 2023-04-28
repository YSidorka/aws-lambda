import { handler } from 'lambda-get-products';

handler().then((res) => {
  console.log(res);
})
