//! Funksiya number fahrenheit parameter qebul eden funskiya yaziriq. Celsiusa convert edib return etsin.

// function fahrenheitToCelsius(fahrenheit) {
//     var celsius = (fahrenheit - 32) * 5 / 9;
//     return celsius;
// }
// var fahrenheitValue = 32;
// var celsiusValue = fahrenheitToCelsius(fahrenheitValue);
// console.log(celsiusValue);



//! Kreditə götürdüyümüz pul və aylıq(necə ay ödəməliyəm)verilir.
//! Pul bərabər hissələrə bölünərək hər ay verilməlidir.
//! Məs:1000 manat götürülür, 3 ayliq.
//! Ekrana yazdirilmalidir: 1-ci ay 333manat, 2-ci ay 333manat, 3-cu ay 334 manat;


// function ayliqOdemeleriHesapla(pulMiqdar, aySayi) {
//     var herAyOdenilecekMiqdar = parseInt(pulMiqdar / aySayi);
//     var qalanMiqdar = pulMiqdar % aySayi;

//     var odemeler = [];
//     for (var i = 0; i < aySayi; i++) {
//         if (i < qalanMiqdar) {
//             odemeler.push(herAyOdenilecekMiqdar + 1);
//         } else {
//             odemeler.push(herAyOdenilecekMiqdar);
//         }
//     }

//     return odemeler;
// }
// var pulMiqdar = 1000;
// var aySayi = 3;
// var ayliqOdemeler = ayliqOdemeleriHesapla(pulMiqdar, aySayi);

// for (var i = 0; i < ayliqOdemeler.length; i++) {
//     console.log((i + 1) + "-ci ay " + ayliqOdemeler[i] + " manat");
// }



