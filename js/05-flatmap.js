/**
 * Метод flatMap
 */

const tweets = [
  { id: "000", likes: 5, tags: ["js", "nodejs"] },
  { id: "001", likes: 2, tags: ["html", "css"] },
  { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
  { id: "003", likes: 8, tags: ["css", "react"] },
  { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
];

// const tags = tweets.map((tweet) => tweet.tags).flat();
const tags = tweets.flatMap((tweet) => tweet.tags);

// const uniqueTags = [...new Set(tags)];
console.log(tags);
// console.log(uniqueTags);

// .flat(depth) - метод, який вміє діставати вкладеності за параметром depth, повертає новий масив, прибираючи глибину вкладеностей, яку ви передали

// const arr = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
//   [[10], [11], [12]],
// ];

// console.log(arr.flat(2));
