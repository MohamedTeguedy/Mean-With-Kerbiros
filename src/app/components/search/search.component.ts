import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatchService } from 'src/app/services/match.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchForm!: FormGroup;
  obj: any = {};
  matchesTab: any = [];
  findedMatches: any = [];
  constructor(private matchService:MatchService) { }

  ngOnInit(): void {

  }

  search() {
    console.log("Here obj", this.obj);
    this.matchService.searchMatchesByScore(this.obj).subscribe(
      (response) => {
        console.log("Here response after search", response);
        this.findedMatches = response.matches;
      }
    )
  }
  
}
