import { handler } from './lambdaGetProducts/index.mjs';

handler().then((res) => {
  console.log(JSON.stringify(res));
})
