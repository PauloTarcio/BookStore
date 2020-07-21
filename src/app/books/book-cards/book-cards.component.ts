import { Component, OnInit, Input, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-book-cards',
  templateUrl: './book-cards.component.html',
  styleUrls: ['./book-cards.component.css']
})
export class BookCardsComponent implements OnInit {
  modalRef: BsModalRef;

  @Input() cardBook;
  @Input() details = false;
  @Input() edit = false;
  @Input() lean = false;
  @Input() reservation = false;
  @Input() deleteBook = false;

  constructor(private modalService: BsModalService) { }

  ngOnInit(): void {}

  toDelete = ( { Name } ) => alert(`Tem certeza que deseja inativar o registro "${Name}"?`);

  showModal = (template: TemplateRef<any>) => this.modalRef = this.modalService.show(template);

  hideModal = () => this.modalRef.hide();
}
