// Aşağıdaki görevleri tamamlayın

/*
  GÖREV 1
  - Input:  Bir dosya yolunu (path) parametre olarak alacak bir fonksiyon oluştur.
  - Output: Yazacağın fonksiyon, verilen bir dosya adresideki(path) dosyanın adını vermeli.
  * İpucu:  Dosya adresinin / işaretleri ile bölümlendiğine dikkat et.

  örnek input:  "C:/Users/johnsmith/Music/Beethoven_5.mp3"
  örnek output: "Beethoven_5.mp3"

  örnek input:  "Beethoven_5.mp3"
  örnek output: "Beethoven_5.mp3"

  örnek input:  ""
  örnek output: ""
*/

function dosyaAdiniBul(path) {
  const pathParted = path.split("/");
  let fileName = pathParted[pathParted.length - 1];
  return fileName;
}
//console.log(dosyaAdiniBul("C:/Users/johnsmith/Music/Beethoven_5.mp3"));

/*
  GÖREV 2
  - Input:  Bir sayı arrayini parametre olarak alacak bir fonksiyon oluştur.
  - Output: Yazacağın fonksiyon input olarak aldığı sayı arrayinin aritmetik ortalamasını dönmeli.

  örnek input:  []
  örnek output: null

  örnek input:  [4]
  örnek output: 4
  
  örnek input:  [50, -26, 153, 7]
  örnek output: 46

  örnek input:  [109, 216, 288, 143, 71, 185, -278, 194, 5]
  örnek output: 104
*/

function ortalamaBul(numberArr) {
  if (numberArr.length == 0) {
    return null;
  } else {
    let reducedNumber = numberArr.reduce((total, item) => total + item, 0);
    return reducedNumber / numberArr.length;
  }
}

//console.log(ortalamaBul([]));

/*
  GÖREV 3
  - Input:  Bir sayı arrayini ve ortalama bulmaya yarayacak bir fonksiyonu parametre olarak alacak bir fonksiyon oluştur.
  - Output: Yazacağın fonksiyon input olarak aldığı sayı arrayinin aritmetik ortalamasından büyük ya da eşit elemanlardan oluşan bir array dönmeli.
  * Çağırırken kendi ortalama fonksiyonunla çağırabilirsin, ama parametrenin tanımlama aşamasında soyut bir ifade olduğunu unutma.
  * f(x) = 2x+5 içerisindeki x değeri gibi.

  örnek input:  []
  örnek output: null

  örnek input:  [4]
  örnek output: 4
  
  örnek input:  [50, -26, 153, 7]
  örnek output: [50, 153]

  örnek input:  [109, 216, 288, 143, 71, 185, -278, 194, 5]
  örnek output: [109, 216, 288, 143, 185, 194]
*/

// const numbers = [50, -26, 153, 7];

// function ortalamadanBuyukleriBul(arr, cb) {
//   let average = cb(arr);
//   let moreOrEqualToAverage = arr.filter((item) => {
//     return item>=average})
//   return moreOrEqualToAverage;
// }

// console.log(ortalamadanBuyukleriBul(numbers,ortalamaBul))

const numbers = [50, -26, 153, 7];

function ortalamadanBuyukleriBul(arr, cb) {
  let average = cb(arr);
  let greaterOrEqualAvgNumbers;
  if (average !== null) {
    greaterOrEqualAvgNumbers = arr.filter((item) => {
      return item >= average;
    });
  } else {
    greaterOrEqualAvgNumbers = null;
  }
  return greaterOrEqualAvgNumbers;
}

console.log(ortalamadanBuyukleriBul(numbers, ortalamaBul));

/* !!!! Burdan aşağısını değiştirmeyin !!!! */
function as() {
  console.log("Kodlar sorunsuz çalışıyor!");
  return "sa";
}
as();
export { dosyaAdiniBul, ortalamaBul, ortalamadanBuyukleriBul, as };
