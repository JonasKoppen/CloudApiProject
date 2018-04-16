import { Component, OnInit } from '@angular/core';
import { IVertrekResult, DeLijnService } from '../services/delijn.service';

@Component({
  selector: 'app-de-lijn',
  templateUrl: './de-lijn.component.html',
  styleUrls: ['./de-lijn.component.scss']
})
export class DeLijnComponent implements OnInit {

  vertrekken : IVertrekResult;

  constructor(private _svc : DeLijnService) { }

  ngOnInit() {
    this._svc.getVertrekken()
            .subscribe(result => this.vertrekken = result);
  }
}
