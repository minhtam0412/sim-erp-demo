import { Component, OnInit, ViewChild } from '@angular/core';
import { MultiComboboxComponent } from '../multi-combobox/multi-combobox.component';

@Component({
  selector: 'app-formcheckcomponent',
  templateUrl: './formcheckcomponent.component.html',
  styleUrls: ['./formcheckcomponent.component.css']
})
export class FormcheckcomponentComponent implements OnInit {

  minDate = new Date(2000, 0, 1);
  maxDate = new Date(2020, 0, 1);

  favoriteSeason: string;
  seasons: string[] = ['Nam', 'Nữ'];

  @ViewChild('combo1', {static: false}) cbo1:MultiComboboxComponent;
  constructor() {
  }

  ngOnInit() {
    
  }
  showdata()
  {
    console.log(this.cbo1.selectedItems);
  }

}
