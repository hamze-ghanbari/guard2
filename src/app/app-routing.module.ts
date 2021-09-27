import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlbumDetailComponent } from './album-detail/album-detail.component';
import { AlbumComponent } from './album/album.component';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ResolveGuard } from './resolve.guard';

const routes: Routes = [
  {path : '' , component : HomeComponent },
  {path : 'album' , component : AlbumComponent },
  {path : 'album/:id' , component : AlbumDetailComponent , data : { message : 'this album is ....'},
resolve : {album : ResolveGuard}},
  {path : 'notfound' , component : NotfoundComponent},
  {path : '**' , redirectTo : '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
