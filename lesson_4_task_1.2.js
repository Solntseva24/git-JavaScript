'use strict';
/*
1.2
Сделайте в стиле es5, а затем в стиле es6 (по аналогии из урока),
а) конструктор Post, который принимает параметры author, text, date и сохраняет их как свойства
объекта. Объекты типа Post должны иметь метод edit, который будет принимать текст и записывать
его в свойство text объекта.
б) конструктор AttachedPost, который принимает параметры author, text, date.
Проинициализируйте эти свойства с помощью конструктора Post, чтобы не дублировать код. Также
в конструкторе AttachedPost должно создаваться свойство highlighted со значением false.
Унаследуйте в объектах типа AttachedPost методы из Post.
Объекты типа AttachedPost должны иметь метод makeTextHighlighted, который будет назначать
свойству highlighted значение true.
 */
//a)
//es5

function Post(author, text, date) {
    this.author = author;
    this.text = text;
    this.date = Date();   // подумала, что так можно
}

Product.prototype.edit = function (text) {
    this.text = text;
};

const post1 = new Post ('Alex', 'Alex writed text');
console.log(post1);


//es6

class PostEs6 {
    constructor(author, text, date) {
        this.name = author;
        this.text = text;
        this.date = Date();  //подумала , что так можно
    }
    edit(userText) {
        this.text = text;
    }
}

const post2 = new PostEs6('Jhon', 'Jhon writed text');
console.log(post2);

//б)

//es5

function AttachedPost(author, text, date) {
    Post.call(this, author, text, date);
    this.highlighted = false;
}

AttachedPost.prototype = Object.create(Product.prototype);
AttachedPost.prototype.constructor = AttachedPost;

AttachedPost.prototype.makeTextHighlighted = function () {
    this.highlighted = true;
};

const post3 = new AttachedPost ('Sara', 'Sara writed text');
post3.makeTextHighlighted();
console.log(post3);

//es6

class AttachedPostEs6 extends PostEs6 {
    constructor(author, text, date){
        super(author, text, date);
        this.highlighted = false;
    }
    makeTextHighlighted() {
        this.highlighted = true;
    }
}

const post4 = new AttachedPostEs6 ('Mike', 'Mike writed text');
post4.makeTextHighlighted();
console.log(post4);