
//1 задание

'use sctrict'

for (let i = 0; i <= 10; i++) {
    if (i == 0) {
        console.log(`${i} - это ноль`);
    } else if (i % 2 == 0) {
        console.log(`${i} - четное число`);
    } else if (i % 2 == 1) {
        console.log(`${i} - нечетное число`);
    }
}

//2 задание

'use strict'

const post = {
    author: "John", //вывести этот текст
    postId: 23,
    comments: [
        {
            userId: 10,
            userName: "Alex",
            text: "lorem ipsum",
            rating: {
                likes: 10,
                dislikes: 2 //вывести это число
            }
        },
        {
            userId: 5, //вывести это число
            userName: "Jane",
            text: "lorem ipsum 2", //вывести этот текст
            rating: {
                likes: 3,
                dislikes: 1
            }
        },
    ]
};

//2.1

console.log(post.author);

//2.2

console.log(post.comments[0].rating.dislikes);

//2.3

console.log(post.comments[1].userId);

//2.4

console.log(post.comments[1].text);

//3 задание

const products = [
    {
        id: 3,
        price: 200,
    },
    {
        id: 4,
        price: 900,
    },
    {
        id: 1,
        price: 1000,
    },
];

products.map(function (object) {
    object.price = object.price * 0.85;
});

//4 задание

//4.1
const products = [
    {
        id: 3,
        price: 127,
        photos: [
            "1.jpg",
            "2.jpg",
        ]
    },
    {
        id: 5,
        price: 499,
        photos: []
    },
    {
        id: 10,
        price: 26,
        photos: [
            "3.jpg"
        ]
    },
    {
        id: 8,
        price: 78,
    },
];

let withPhoto = products.filter((object) =>
    object.hasOwnProperty('photos') && object.photos.length > 0);

console.log(withPhoto);

//4.2

sortArr = products.sort((a, b) => a.price - b.price);

console.log(sortArr);

//5

for (let i = 0; i < 10; console.log(i), i++);

//6

for (let i = "x"; i.length < 21; console.log(i), i += "x");