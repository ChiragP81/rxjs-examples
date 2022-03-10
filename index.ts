import { Observable } from 'rxjs';

const foo = new Observable(() => {
  console.log('Hello');
});

foo.subscribe((x) => {
  console.log(x);
});
