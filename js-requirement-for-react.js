const data = [
    {
      id: 1,
      title: "The Lord of the Rings",
      publicationDate: "1954-07-29",
      author: "J. R. R. Tolkien",
      genres: [
        "fantasy",
        "high-fantasy",
        "adventure",
        "fiction",
        "novels",
        "literature",
      ],
      hasMovieAdaptation: true,
      pages: 1216,
      translations: {
        spanish: "El señor de los anillos",
        chinese: "魔戒",
        french: "Le Seigneur des anneaux",
      },
      reviews: {
        goodreads: {
          rating: 4.52,
          ratingsCount: 630994,
          reviewsCount: 13417,
        },
        librarything: {
          rating: 4.53,
          ratingsCount: 47166,
          reviewsCount: 452,
        },
      },
    },
    {
      id: 2,
      title: "The Cyberiad",
      publicationDate: "1965-01-01",
      author: "Stanislaw Lem",
      genres: [
        "science fiction",
        "humor",
        "speculative fiction",
        "short stories",
        "fantasy",
      ],
      hasMovieAdaptation: false,
      pages: 295,
      translations: {},
      reviews: {
        goodreads: {
          rating: 4.16,  
         
          ratingsCount: 11663,
          reviewsCount: 812,
        },
        librarything: {
          rating: 4.13,
          ratingsCount: 2434,
          reviewsCount: 0,
        },
      },
    },
    {
      id: 3,
      title: "Dune",
      publicationDate: "1965-01-01",
      author: "Frank Herbert",
      genres: ["science fiction", "novel", "adventure"],
      hasMovieAdaptation: true,
      pages: 658,
      translations: {
        spanish: "",
      },
      reviews: {
        goodreads: {
          rating: 4.25,
          ratingsCount: 1142893,
          reviewsCount: 49701,
        },
      },
    },
    {
      id: 4,
      title: "Harry Potter and the Philosopher's Stone",
      publicationDate: "1997-06-26",
      author: "J. K. Rowling",
      genres: ["fantasy", "adventure"],
      hasMovieAdaptation: true,
      pages: 223,
      translations: {
        spanish: "Harry Potter y la piedra filosofal",
        korean: "해리 포터와 마법사의 돌",
        bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
        portuguese: "Harry Potter e a Pedra Filosofal",
      },
      reviews: {
        goodreads: {
          rating: 4.47,
          ratingsCount: 8910059,
          reviewsCount: 140625,
        },
        librarything: {
          rating: 4.29,
          ratingsCount: 120941,
          reviewsCount: 1960,
        },
      },
    },
    {
      id: 5,
      title: "A Game of Thrones",
      publicationDate: "1996-08-01",
      author: "George R. R. Martin",
      genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
      hasMovieAdaptation: true,
      pages: 835,
      translations: {
        korean: "왕좌의 게임",
        polish: "Gra o tron",
        portuguese: "A Guerra dos Tronos",
        spanish: "Juego de tronos",
      },
      reviews: {
        goodreads: {
          rating: 4.44,
          ratingsCount: 2295233,
          reviewsCount: 59058,
        },
        librarything: {
          rating: 4.36,
          ratingsCount: 38358,
          reviewsCount: 1095,
        },
      },
    },
  ];
  
  function getBooks() {
    return data;
  }
  
  function getBook(id) {
    return data.find((d) => d.id === id);
  }
//   Destructuring 
const book = getBook(2);
const allBooks = getBooks();

// console.log(book);

const {title,author,pages,publicationDate,genres,hasMovieAdaptation} = book;

// console.log(author,title,pages,publicationDate,genres,hasMovieAdaptation);

// const primaryGenre = genres[0];
// const secondaryGenre = genres[1];

// console.log(primaryGenre,secondaryGenre); 

// const [primaryGenre,secondaryGenre] = genres;

// console.log(primaryGenre,secondaryGenre);

// REST SPREAD Operator
// REST : divides
// const [primaryGenre,,...otherGenres] = genres;


// // console.log(primaryGenre,otherGenres);

// // SPREAD : combines [makes a copy of reference datatypes]
// const newGenres = [...genres,`epic fantasy`];
// // console.log(newGenres);

// // update values using spread operator
// // const updatedBook = {...book,
// //     //overriding existing property
// //      moviePublicationDate:"2001-12-19",pages:1000,};
// // console.log(updatedBook);


// // template literals

// const summary = `${title}a book with ${pages} pages was written by ${author}; with publication date of ${publicationDate.split("-")[0]} . The book has ${hasMovieAdaptation?"":"not"} been adapted as a movie`

// console.log(summary);


// // TERNARY OPERATOR
// const pagesRange = pages > 1000 ? "over a 1000" : "less than 1000";

// console.log(`The book has ${pagesRange} pages`);


// ARROW FUNCTION
// function getYear(str)
// {
//   return str.split('-')[0];
// }


let ans = (str)=>str.split("-")[0];
console.log(ans);

// short circuting with logical operators with AND(false) , OR operator
// get perfect with nullish coalescing

// OPTIONAL CHAINING
// let a = 3.5 , b = 15;
// let result = a??b
// console.log(result);

// wt does that mean ?
//  if the first value is either null or undefined , it will display the second value , if the first value is an integer it will display the first variable.meaning;

// let result1 = (a!=null && a!=undefined)?a:b;
// console.log(result1); 
// the above example is nullish coalescing

// optional chaining example
//  const r1 = book.reviews.goodreads?.reviewsCount
//  const r2 = book.reviews.librarything?.reviewsCount
//  console.log(r1+r2);


// ARRAY MAP METHOD with IIFE
// console.log(allBooks);
// let arr = allBooks.map((book)=>({ 
//     title:book.title,
//     author:book.author,
  
// }))
// console.log(arr);

// FILTER METHOD
// let arr1 = allBooks.filter((book=>book.pages>500)).filter((book)=>book.hasMovieAdaptation).map((book)=>book.title);
// console.log(arr1);

// let arr2 = allBooks.filter((book)=>book.genres.includes("adventure")).map((book)=>book.title)
// console.log(arr2);

// // REDUCE METHOD
// let arr3 = allBooks.reduce((acc , book)=>acc+book.pages,0);
// console.log(arr3); 
// // In the place of 0 , u can use [],{},etc 

// // SORT method
// let arr4 = [3,1,7,5,9];
// // let sortedArray = arr4.slice().sort((a,b)=>a-b);
// // console.log(sortedArray);
// // console.log(arr4);

// let sortedByPages = arr4.slice().sort((a,b)=>a.pages - b.pages);
// console.log(arr4);
// console.log(sortedByPages);

// WORKING WITH IMMUTABLE ARRAYS
// let newBook = {
//   name:"Animal Farm",
//   author : "George Orwell"
// }
// let bookSetAfterAdd = [...allBooks,newBook];
// console.log(bookSetAfterAdd);

// let bookSetAfterDelete = bookSetAfterAdd.filter((book)=>book.id !== 3);
// console.log(bookSetAfterDelete);

// let updateBook = allBooks.map((book)=>book.id==1?{newBook}:book);
// console.log(updateBook);

// PROMISES
// let jsons = fetch("https://jsonplaceholder.typicode.com/posts").then((res)=>res.json()).then((result)=>console.log(result));
// console.log(jsons);


// ASYNC AWAIT
 async function getData(){
  let rawData = await fetch("https://jsonplaceholder.typicode.com/todos");
  let jsons = rawData.json();
  console.log(jsons);
 }
 getData();
