/**
 * const, letなどの変数宣言
 */

// 従来
// var val1 = "var変数";
// console.log(val1);

// // var変数は上書き可能
// val1 = "var変数を上書き";
// console.log(val1);

// // var変数は再宣言可能
// var val1 = "var変数を再宣言";
// console.log(val1);

// let val2 = "let変数";
// console.log(val2);

// // letは上書きが可能
// val2 = "let変数を上書き";
// console.log(val2);

// // letは再宣言不可能
// let val2 = "let変数を再宣言";
// console.log(val2);

// const val3 = "const変数";
// console.log(val3);

// val3 = "const変数を上書き";

// const val3 = "const変数を再宣言";

// constで定義したオブジェクトはプロパティの変更が可能
// const val4 = {
//   name: "tama",
//   age: "22"
// };
// console.log(val4);
// val4.name = "shiro";
// val4.addres = "okinawa";
// console.log(val4);

// constで定義した配列はプロパティの変更が可能
const val5 = ["cat", "dog"];
val5[0] = "bird";
val5.push("monkey");
console.log(val5);

// だいたいconstでやる

/**
 * テンプレート文字列
 */
const name = "tama";
const age = 22;
// 「私の名前はtamaです．年齢は22歳です．」
// 従来の方法
const message1 = "私の名前は" + name + "です．年齢は" + age + "です．";
console.log(message1);
