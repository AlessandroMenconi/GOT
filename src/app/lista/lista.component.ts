import { Component, Inject, OnInit } from '@angular/core';
import { ApiGameService } from '../services/api-game.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { NgxSpinnerService } from 'ngx-spinner';
import { elementAt } from 'rxjs';
import { SpinnerService } from '../services/spinner.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss'],


})
export class ListaComponent implements OnInit {

  POST: any[];
  page: number = 1;
  count: number = 100;
  listSize: number = 10;
  listSizes: any = [10, 15, 20];
  optionSelect: any = ['Male', 'Female']
  closeResult!: string;
  vettoreDetail: any[];
  searchName: any;
  searchGender: any;
  searchCulture: any;
  arrayM: any[];
  arrayF: any[];
  arrayC: any[];
  arrayCulture: any[];

  constructor(public tService: ApiGameService, private modalService: NgbModal, private spinnerService: SpinnerService) {
    this.vettoreDetail = [];
    this.POST = [];
    this.arrayM = [];
    this.arrayF = [];
    this.arrayC = [];
    this.arrayCulture = [];
  };

  ngOnInit(): void {

    this.listCharacters();
  }
  listCharacters(): void {
    this.tService.getListaPersonaggi(this.page, this.listSize).subscribe(res => {

      this.POST = res;
      var contF = 0;
      var contM = 0;

      for (let i = 0; i < this.POST.length; i++) {
        const element = this.POST[i];
        if (element.name != '') {
          if (element.gender === 'Male') {
            contM++;
          }
          if (element.gender === 'Female') {
            contF++;
          }
        }
      }
      for (let i = 0; i < this.POST.length; i++) {
        const element = this.POST[i];
        if (element.name != '') {
          if (element.culture === 'Valyrian') {
            this.arrayC.push(element.culture);
            break;
          }
        }
      }
      for (let i = 0; i < this.POST.length; i++) {
        const element = this.POST[i];
        if (element.name != '') {
          if (element.culture === 'Stormlands') {
            this.arrayC.push(element.culture);
            break;
          }
        }
      }
      for (let i = 0; i < this.POST.length; i++) {
        const element = this.POST[i];
        if (element.name != '') {
          if (element.culture === 'Ironborn') {
            this.arrayC.push(element.culture);
            break;
          }
        }
      }
      for (let i = 0; i < this.POST.length; i++) {
        const element = this.POST[i];
        if (element.name != '') {
          if (element.culture === 'Northmen') {
            this.arrayC.push(element.culture);
            break;
          }
        }
      }
      for (let i = 0; i < this.POST.length; i++) {
        const element = this.POST[i];
        if (element.name != '') {
          if (element.culture === 'Westeros') {
            this.arrayC.push(element.culture);
            break;
          }
        }
      }
      for (let i = 0; i < this.POST.length; i++) {
        const element = this.POST[i];
        if (element.name != '') {
          if (element.culture === 'Andal') {
            this.arrayC.push(element.culture);
            break;
          }
        }
      }

      this.arrayCulture.push(this.arrayC.length);
      this.arrayF.push(contF);
      this.arrayM.push(contM);

    });
  }
  filteredListGenderNameCharacters(): void {
    this.tService.getFilteredGenderNamePersonaggi(this.searchGender, this.searchName, this.searchCulture, this.listSize).subscribe(res => {
      this.POST = res;
      this.arrayM.shift();
      this.arrayF.shift();
      this.arrayC = [];
      this.arrayCulture = [];
      var contF = 0;
      var contM = 0;

      for (let i = 0; i < this.POST.length; i++) {
        const element = this.POST[i];
        if (element.name != '') {
          if (element.gender === 'Male') {
            contM++;
          }
          if (element.gender === 'Female') {
            contF++;
          }
        }
      } for (let i = 0; i < this.POST.length; i++) {
        const element = this.POST[i];
        if (element.name != '') {
          if (element.culture === 'Valyrian') {
            this.arrayC.push(element.culture);
            break;
          }
        }
      }
      for (let i = 0; i < this.POST.length; i++) {
        const element = this.POST[i];
        if (element.name != '') {
          if (element.culture === 'Stormlands') {
            this.arrayC.push(element.culture);
            break;
          }
        }
      }
      for (let i = 0; i < this.POST.length; i++) {
        const element = this.POST[i];
        if (element.name != '') {
          if (element.culture === 'Ironborn') {
            this.arrayC.push(element.culture);
            break;
          }
        }
      }
      for (let i = 0; i < this.POST.length; i++) {
        const element = this.POST[i];
        if (element.name != '') {
          if (element.culture === 'Northmen') {
            this.arrayC.push(element.culture);
            break;
          }
        }
      }
      for (let i = 0; i < this.POST.length; i++) {
        const element = this.POST[i];
        if (element.name != '') {
          if (element.culture === 'Westeros') {
            this.arrayC.push(element.culture);
            break;
          }
        }
      }
      for (let i = 0; i < this.POST.length; i++) {
        const element = this.POST[i];
        if (element.name != '') {
          if (element.culture === 'Andal') {
            this.arrayC.push(element.culture);
            break;
          }
        }
      }

      this.arrayCulture.push(this.arrayC.length);
      this.arrayF.push(contF);
      this.arrayM.push(contM);
    });
  }

  changeList(event: any): void {
    this.page = event;
    this.listCharacters();
    this.arrayM.shift();
    this.arrayF.shift();
    this.arrayC = [];
    this.arrayCulture = [];


  }
  changeSizeList(event: any): void {
    this.listSize = event.target.value;
    this.page = 1;
    this.listCharacters();
    this.arrayM.shift();
    this.arrayF.shift();
    this.arrayC = [];
    this.arrayCulture = [];
  }
  showDetail(event: any, post: any, content: any) {
    event.preventDefault();
    this.vettoreDetail.push(post);


    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result: any) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason: any) => {
      this.vettoreDetail.shift();
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';

    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';

    } else {
      return `with: ${reason}`;

    }
  }

  doGenderNameSearch() {
    this.filteredListGenderNameCharacters()
    this.searchName = ''
    this.searchGender = ''
    this.searchCulture = ''
  }


}
