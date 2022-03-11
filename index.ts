import { AsyncSubject, BehaviorSubject, ReplaySubject, Subject } from 'rxjs';

//Subject
// const sub = new Subject<number>();
// sub.next(0);      here this value is not shown becasue subject is not subscribed
// sub.subscribe({
//   next: (v) => console.log('value of subject is:' + v),
// });
// sub.next(1);

//BehaviorSubject
// const bsub = new BehaviorSubject<number>(0);
// bsub.next(1);
// bsub.next(2); // behavior subject is return only one previous value
// bsub.subscribe({
//   next: (v) => console.log('value of behavior subject is: ' + v),
// });
// bsub.next(3);

//         here this 1 is a count that how many old records do you want to see => below
//ReplaySubject                        |
// const rsub = new ReplaySubject<number>(1);
// rsub.next(1);
// rsub.next(2);
// rsub.subscribe( {
//   next: (v) => console.log('value of replay subject is :'+v),
// })
// rsub.next(3);

//Async subject
//this is subject return value only when subject is subscribed in it is completed
const asub = new AsyncSubject();
asub.next(1);
asub.subscribe({
  next: (v) => console.log('value of async subject is : ' + v),
});
asub.next(2);
asub.complete();
