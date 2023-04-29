import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ScoreComponent } from './components/score/score.component';
import { AddMatchComponent } from './components/add-match/add-match.component';
import { HeroComponent } from './components/hero/hero.component';
import { NewsComponent } from './components/news/news.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SingupComponent } from './components/singup/singup.component';
import { MatchesComponent } from './components/matches/matches.component';
import { PlayersComponent } from './components/players/players.component';
import { PlayrComponent } from './components/playr/playr.component';
import { AddteamComponent } from './components/addteam/addteam.component';
import { AdminComponent } from './components/admin/admin.component';
import { MatchinfoComponent } from './components/matchinfo/matchinfo.component';
import { AddplayerComponent } from './components/addplayer/addplayer.component';
import { LoginComponent } from './components/login/login.component';
import { ReversePipe } from './pipes/reverse.pipe';
import { HttpClientModule } from '@angular/common/http';
import { PlayerinfoComponent } from './components/playerinfo/playerinfo.component';
import { SearchComponent } from './components/search/search.component';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    HeaderComponent,
    FooterComponent,
    ScoreComponent,
    AddMatchComponent,
    HeroComponent,
    NewsComponent,
    SingupComponent,
    MatchesComponent,
    PlayersComponent,
    PlayrComponent,
    AddteamComponent,
    AdminComponent,
    MatchinfoComponent,
    AddplayerComponent,
    LoginComponent,
    ReversePipe,
    PlayerinfoComponent,
    SearchComponent
   
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
