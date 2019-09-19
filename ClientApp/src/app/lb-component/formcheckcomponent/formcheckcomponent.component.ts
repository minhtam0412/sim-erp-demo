import { Component, OnInit, ViewChild } from '@angular/core';
import { MultiComboboxComponent } from '../multi-combobox/multi-combobox.component';
import {  FileUploader, FileSelectDirective } from 'ng2-file-upload/ng2-file-upload';

export interface ComboboxInfo {
  value: string;
  viewValue: string;
}

const URL = 'http://localhost:3315/assets/upload/upload.php';

@Component({
  selector: 'app-formcheckcomponent',
  templateUrl: './formcheckcomponent.componentv2.html',
  styleUrls: ['./formcheckcomponent.component.css']
})

export class FormcheckcomponentComponent implements OnInit {

  title = 'ng8fileupload';
  public uploader: FileUploader = new FileUploader({ url: URL, itemAlias: 'photo' });

  minDate = new Date(2000, 0, 1);
  maxDate = new Date(2020, 0, 1);

  favoriteSeason: string;
  seasons: string[] = ['Nam', 'Nữ'];

  cboFamilyInfo: ComboboxInfo[] = [
        {value: '0', viewValue: 'Độc thân'},
        {value: '1', viewValue: 'Có gia đình'},
        {value: '2', viewValue: 'Li dị'}
      ];
  cboJob: ComboboxInfo[] = [
        {value: '0', viewValue: 'Bác sĩ'},
        {value: '1', viewValue: 'Kỹ sư'},
        {value: '2', viewValue: 'Giáo viên'}
      ];
  cboCountry: ComboboxInfo[] = [
        {value: '0', viewValue: 'Việt Nam'},
        {value: '1', viewValue: 'Mỹ'},
        {value: '2', viewValue: 'Trung Quốc'}
      ];
  cboRace: ComboboxInfo[] = [
        {value: '0', viewValue: 'Kinh'},
        {value: '1', viewValue: 'Thái'},
        {value: '2', viewValue: 'H`Mông'}
      ];
  cboReligion: ComboboxInfo[] = [
        {value: '0', viewValue: 'Phật'},
        {value: '1', viewValue: 'Thiên chúa'},
        {value: '2', viewValue: 'Cao đài'}
      ];
  cboProvice: ComboboxInfo[] = [
          {value: '0', viewValue: 'Tp.HCM'},
          {value: '1', viewValue: 'Hà Nội'},
          {value: '2', viewValue: 'Đà Nẵng'}
        ];
  cboDistric: ComboboxInfo[] = [
          {value: '0', viewValue: 'Tân phú'},
          {value: '1', viewValue: 'Bình Tân'},
          {value: '2', viewValue: 'Gò vấp'}
        ];
  cboWards: ComboboxInfo[] = [
          {value: '0', viewValue: 'Tây Thạnh'},
          {value: '1', viewValue: 'Long Biên'},
          {value: '2', viewValue: 'Cao đài'}
        ];
  cboRelationship: ComboboxInfo[] = [
            {value: '0', viewValue: 'Cha/Mẹ'},
            {value: '1', viewValue: 'Con/Cháu'},
            {value: '2', viewValue: 'Anh/Em'}
          ];

  ckbbanbe = false;
  ckbnguoithan=false;
  ckbgiadinh = false;
  ckbbaodai = false;
  ckbbacsi = false;
  ckbkhac = false;


  @ViewChild('combo1', {static: false}) cbo1:MultiComboboxComponent;
  constructor() {
  }

  ngOnInit() {
    this.uploader.onAfterAddingFile = (file) => { file.withCredentials = false; };
        this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
             console.log('ImageUpload:uploaded:', item, status, response);
             alert('File uploaded successfully');
        };
  }
  showdata()
  {
    console.log(this.cbo1.selectedItems);
  }

}
