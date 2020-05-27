import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  authors =
  [
  {
    Id: 1,
    Photo: 'https://res.cloudinary.com/mhmd/image/upload/v1570799922/profile-3_ybnq8v.jpg',
    Name: 'Paulo Vinicius de Oliveira Tárcio',
    Sex: 'Male',
    Active: true
  },
  {
    Id: 2,
    Photo: 'https://d19m59y37dris4.cloudfront.net/university/1-1-1/img/teacher-4.jpg',
    Name: 'Joanne Jo Rowling',
    Sex: 'Female',
    Active: true
  },
  {
    Id: 3,
    Photo: 'https://res.cloudinary.com/mhmd/image/upload/v1570799922/profile-2_ujssbj.jpg',
    Name: 'Vinicius De Oliveira Tárcio',
    Sex: 'Male',
    Active: false
  },
  {
    Id: 4,
    Photo: 'https://d19m59y37dris4.cloudfront.net/university/1-1-1/img/teacher-2.jpg',
    Name: 'Mario Puzo',
    Sex: 'Male',
    Active: true
  },
  {
    Id: 5,
    Photo: 'https://d19m59y37dris4.cloudfront.net/university/1-1-1/img/teacher-1.jpg',
    Name: 'Puzo',
    Sex: 'Male',
    Active: false
  },

  ]
  constructor() { }


  getAuthors(){
    return this.authors;
  }
}
