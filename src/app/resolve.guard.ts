import { Injectable } from '@angular/core';
import {  ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { AlbumService } from './album.service';
import { album } from './classes/app-class';



@Injectable({
  providedIn: 'root'
})
export class ResolveGuard implements Resolve<album> {
  constructor(private router : Router, private albumservice : AlbumService){}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): album | Observable<album> | Promise<album> {
   const id = route.paramMap.get('id');
   let album=this.albumservice.albums.find(album => album.id === +id);
if(!album){
return of(null).pipe(
  tap(() => this.router.navigate(['notfound']))
);
}else{
return of(album).pipe();
}
  }
  
  
}


function tap(arg0: () => Promise<boolean>): import("rxjs").OperatorFunction<any, album> {
  throw new Error('Function not implemented.');
}



