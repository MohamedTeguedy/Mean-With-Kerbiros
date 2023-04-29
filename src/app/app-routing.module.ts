import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddMatchComponent } from './components/add-match/add-match.component';
import { AddplayerComponent } from './components/addplayer/addplayer.component';
import { AddteamComponent } from './components/addteam/addteam.component';
import { AdminComponent } from './components/admin/admin.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { MatchesComponent } from './components/matches/matches.component';
import { MatchinfoComponent } from './components/matchinfo/matchinfo.component';
import { PlayerinfoComponent } from './components/playerinfo/playerinfo.component';
import { PlayersComponent } from './components/players/players.component';
import { PlayrComponent } from './components/playr/playr.component';
import { SearchComponent } from './components/search/search.component';
import { SingupComponent } from './components/singup/singup.component';


const routes: Routes = [
  {path:"home",component:HomeComponent},
  {path:"contact",component:ContactComponent},
  {path:"addmatch",component:AddMatchComponent},
  {path:"editmatch/:id",component:AddMatchComponent},
  {path:"sing-up",component:SingupComponent},
  {path:"sing-upAdmin",component:SingupComponent},
  {path:"allMatches",component:MatchesComponent},
  {path:"allPlayers",component:PlayersComponent},
  {path:"addteam",component:AddteamComponent},
  {path:"admin",component:AdminComponent},
  {path:"matchinfo/:id",component:MatchinfoComponent},
  {path:"addplayer",component:AddplayerComponent},
  {path:"editplayer/:id",component:AddplayerComponent},
  {path:"login",component:LoginComponent},
  {path:"playerinfo/:id",component:PlayerinfoComponent},
  {path:"search",component:SearchComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
