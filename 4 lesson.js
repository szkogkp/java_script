
'use strict'

//1.1


//es5
function product(name, price) {
    this.name = name;
    this.price = price;
}

product.prototype.make25PercentDiscount = function (price) {
    this.price = price * 0.75;
};

//es6

class P {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    make25PercentDiscount(price) {
        this.price = price * 0.75;
    }
}



//1.2


//es 5

function Post(author, text, date) {
    this.author = author;
    this.text = text;
    this.date = date;
}

Post.prototype.edit = function (text) {
    this.text = prompt('text');
};

let post1 = new Post('textt');

function AttachedPost(author, text, date) {
    Post.call(this, author, text, date);
    this.highlighted = false;
}

AttachedPost.prototype = Object.create(Post.prototype);

AttachedPost.prototype.constructor = AttachedPost;

AttachedPost.prototype.makeTextHighlighted = function () {
    this.highlighted = true;
};

let post = newAttachedPost();

//es6

class Post {
    constructor(author, text, date) {
        this.author = author;
        this.text = text;
        this.date = date;
    }

    edit(text) {
        this.text = prompt('text');
    }
}

let post3 = new Post('James', 'text3', '31.12.2021');


class AttachedPost extends Post {
    constructor(author, text, date, highlighted) {
        super(author, text, date)
        this.highlighted = false;
    }


    makeTextHighlighted() {
        highlighted = true;
    }
}
