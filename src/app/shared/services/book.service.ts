import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  books = [{
    Id: 1,
    Cover: 'https://m.media-amazon.com/images/I/51DgYTEd49L.jpg',
    Name: 'Harry Potter e a Pedra Filosofal',
    Author: 'J.K Rowling',
    Genre: 'Fantasy1',
    Active: true,
    Lent: true,
  },
  {
    Id: 2,
    Cover: 'https://m.media-amazon.com/images/I/51qbxOEtBrL.jpg',
    Name: 'Harry Potter e A Câmara Secreta',
    Author: 'Paulo Vinicius de Oliveira Tárcio',
    Genre: 'Fantasy2',
    Active: true,
    Lent: false,
  },
  {
    Id: 3,
    Cover: 'https://m.media-amazon.com/images/I/41prSQnkSiL.jpg',
    Name: 'Harry Potter e a O Prisioneiro de Askabam',
    Author: 'J.K Rowling',
    Genre: 'Fantasy3',
    Active: false,
    Lent: true,
  },
  {
    Id: 4,
    Cover: 'https://m.media-amazon.com/images/I/511p8jnsATL.jpg',
    Name: 'Harry Potter e O Calice de Fogo',
    Author: 'J.K Rowling',
    Genre: 'Fantasy4',
    Active: false,
    Lent: false,
  },
  {
    Id: 5,
    Cover: 'https://m.media-amazon.com/images/I/41I1NK83piL.jpg',
    Name: 'Harry Potter e a Ordem da Fenix',
    Author: 'Vinicius de Oliveira Tárcio',
    Genre: 'Fantas5',
    Active: true,
    Lent: true,
  },
  {
    Id: 6,
    Cover: 'https://m.media-amazon.com/images/I/516lFndZ+cL.jpg',
    Name: 'Orgulho de Preconceito',
    Author: 'Jane Austen',
    Genre: 'Romance',
    Active: false,
    Lent: false,
  },
  {
    Id: 7,
    Cover: 'https://m.media-amazon.com/images/I/51tWWKmO72L.jpg',
    Name: 'Rei Leão',
    Author: '??',
    Genre: 'Infatil',
    Active: false,
    Lent: true,
  },
  {
    Id: 8,
    Cover: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTSmfwrB_JwYLAzE_mXU2EEtTPmQl0C9VTpQbnh9KHOs2ZzFbhoozSKedSJ8OqfT5YXvvxZ-vD5iHc4Qvfwh11bFKuM3Xfi&usqp=CAE',
    Name: 'O Poderoso Chefão',
    Author: 'Mario Puzo',
    Genre: 'Romance',
    Active: true,
    Lent: true,
  },

];

  constructor() { }

  getBooks() {
    return this.books;
  }

  getLastBooks(amount = 5) {
    return this.books
  }

  getBookById(id){
    return this.books;
  }
}
