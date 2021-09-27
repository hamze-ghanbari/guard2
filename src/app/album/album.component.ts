import { Component, OnInit } from '@angular/core';
import { AlbumService } from '../album.service';
import { album } from '../classes/app-class';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {

  albums : any =new album;
  constructor(private albumservice  : AlbumService) { }

  ngOnInit(): void {
   this.albums=this.albumservice.albums;
  }

}
