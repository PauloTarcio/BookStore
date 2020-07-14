import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  users = [
    {
      UrlPhoto: 'https://previews.123rf.com/images/mimagephotography/mimagephotography1511/mimagephotography151100038/48581692-close-up-horizontal-portrait-of-a-serious-man-with-beard-isolated-on-white-background.jpg',
      Name: 'Paulo Vinicius de Oliveira Tárcio',
      LeanBooks: [],
      ReservationBooks: [],
    },
    {
      UrlPhoto: 'https://images.pexels.com/photos/736716/pexels-photo-736716.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      Name: 'Tárcio de Oliveira Tárcio',
      LeanBooks: [],
      ReservationBooks: [],
    },
    {
      UrlPhoto: 'https://img.freepik.com/fotos-gratis/retrato-de-homem-branco-isolado_53876-40306.jpg?size=626&ext=jpg',
      Name: 'CPM22',
      LeanBooks: [],
      ReservationBooks: [],
    }]

  constructor() { }

  getUsers() {
    return this.users;
  }
}
