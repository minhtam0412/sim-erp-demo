import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EmployeeInfoComponent } from '../employee/employee-info/employee-info.component';

@Component({
  selector: 'app-testmodal',
  templateUrl: './testmodal.component.html',
  styleUrls: ['./testmodal.component.css']
})
export class TestmodalComponent implements OnInit {

  constructor(private modalService: NgbModal) { }

  ngOnInit() {
  }

  open() {
    const modalRef = this.modalService.open(EmployeeInfoComponent);
    modalRef.componentInstance.name = 'World';
  }
}
