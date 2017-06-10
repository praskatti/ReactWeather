// function getTempCallBack(location, callback) {
//
//   callback(undefined, 78);
//   callback('City not found', null);
//
//
// }
//
// getTempCallBack('Philly', function (err, temp) {
//   if(err) {
//     console.log('error', err);
//   } else {
//     console.log('success', temp);
//   }
// });
//
// function getTempPromise(location) {
//
//   return new Promise(function (resolve, reject) {
//     setTimeout(function() {
//       resolve(79);
//       reject('City not found');
//     } , 2000)
//
//   });
// }
//
// getTempPromise('Philly').then(function(temp){
//
//     console.log('promise success', temp);
// }, function(err) {
//   console.log('promise error', err);
// })

function addPromise(a, b) {

  return new Promise(function(resolve, reject) {
    if( a && b) {
     if(typeof a === 'number' && typeof b === 'number') {
       var sum = a +b;
       resolve(sum);
     } else {
       reject('Both arguments need to be numbers');
     }
   } else {
    reject('Need two arguments');

   }
  });
}


addPromise(2.2 , 4.5).then(function(sum) {
    console.log('Sum='+sum);
}, function(err) {
  console.log('Error: ', err);

} );
