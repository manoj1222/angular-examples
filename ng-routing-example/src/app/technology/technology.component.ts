import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-technology',
  templateUrl: './technology.component.html',
  styleUrls: ['./technology.component.css']
})
export class TechnologyComponent implements OnInit {

  constructor(private routeArgs: ActivatedRoute) { }

  ngOnInit(): void {
    this.routeArgs.paramMap.subscribe(data => {
      console.log(data.get("technology"));
    })
  }

}
