import { Injectable } from '@angular/core';
import { album , song} from './classes/app-class'
@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  constructor() { }
  public albums : album[]=[
{
  id : 1,
  name : './assets/images/1.jpg',
  albumArt : 'altone',
  year : 2021,
  songs : [
    {
      trackNumer : 1,
      name : 'tranckone',
      duration : '1:09'
    }
  ]
},
{
  id : 2,
  name : './assets/images/2.jfif',
  albumArt : 'arttwo',
  year : 2021,
  songs : [
    {
      trackNumer : 2,
      name : 'tracktwo',
      duration : '2:09'
    }
  ]
},
{
  id : 3,
  name : './assets/images/3.jfif',
  albumArt : 'artthree',
  year : 2021,
  songs : [
    {
      trackNumer : 3,
      name : 'trackthree',
      duration : '3:09'
    }
  ]
},
{
  id : 4,
  name : './assets/images/4.jpg',
  albumArt : 'artfour',
  year : 2021,
  songs : [
    {
      trackNumer : 4,
      name : 'trackfour',
      duration : '4:09'
    }
  ]
},
{
  id : 5,
  name : './assets/images/5.webp',
  albumArt : 'artfive',
  year : 2021,
  songs : [
    {
      trackNumer : 5,
      name : 'trackfive',
      duration : '5:09'
    }
  ]
},
  ];
}
