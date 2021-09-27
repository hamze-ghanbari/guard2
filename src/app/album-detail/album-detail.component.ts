import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data, Router } from '@angular/router';
import { AlbumService } from '../album.service';
import { album } from '../classes/app-class';

@Component({
  selector: 'app-album-detail',
  templateUrl: './album-detail.component.html',
  styleUrls: ['./album-detail.component.css']
})
export class AlbumDetailComponent implements OnInit {
album : album = new album();
showmessage : string;
  constructor( private activerouter : ActivatedRoute) { }

  ngOnInit(): void {
   //this.album=this.albumservice.albums.find(album => album.id === +this.activerouter.snapshot.params['id'] )!;
  //  this.activerouter.params.subscribe((result) =>{
  //   let selectedid : number =+result.id;
  //   setTimeout(() => {
  //     this.album=  this.albumservice.albums.find(album => album.id === selectedid)!;
  //     if(!this.album){
  //       this.router.navigate(['notfound']);
  //     }
  //   }, 3000);
  // });
  this.activerouter.data.subscribe((data : Data) =>{
this.album=data['album']
  });
  this.showmessage=this.activerouter.snapshot.data['message'];
  }

}
