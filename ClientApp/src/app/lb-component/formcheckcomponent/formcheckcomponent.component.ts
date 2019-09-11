import { Component, OnInit, ViewChild } from '@angular/core';
import { MultiComboboxComponent } from '../multi-combobox/multi-combobox.component';

@Component({
  selector: 'app-formcheckcomponent',
  templateUrl: './formcheckcomponent.component.html',
  styleUrls: ['./formcheckcomponent.component.css']
})
export class FormcheckcomponentComponent implements OnInit {


  @ViewChild('combo1', {static: false}) cbo1:MultiComboboxComponent;
  @ViewChild('combo2', {static: false}) cbo2:MultiComboboxComponent;
  constructor() {
  }

  ngOnInit() {
    
  }
  showdata()
  {
    console.log(this.cbo1.selectedItems);
    console.log(this.cbo2.selectedItems);
  }

}
