import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ɵPlayState } from '@angular/core';

import { AppComponent } from './app.component';
import { PlayersComponent } from './players/players.component';
import { HttpClientModule } from '@angular/common/http';
import { AgePipe } from './age.pipe';
import { ScorePipe } from './score.pipe';
import { FilterPipe } from './filter.pipe';
import { FormsModule } from '@angular/forms'
import { PlayerService } from './player.service';

@NgModule({
  declarations: [
    AppComponent,
    PlayersComponent,
    AgePipe,
    ScorePipe,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [PlayerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
