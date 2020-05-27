import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-table-info',
  templateUrl: './table-info.component.html',
  styleUrls: ['./table-info.component.css']
})
export class TableInfoComponent implements OnInit {

  @Input() rota: string;
  @Input() color: string;
  @Input() datas: any;
  @Input() caption: string;
  @Input() tableheaders = [] ;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  redirectToRoute() { this.router.navigate(['/' + this.rota, 'new']); }

  toInactivateRegister = ( { Name } ) => alert(`Tem certeza que deseja inativar o registro "${Name}"?`)

};
