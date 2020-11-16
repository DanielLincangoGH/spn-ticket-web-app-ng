import { Component, OnInit } from '@angular/core';
import { MessageService, SelectItem } from 'primeng/api';
import { SpnTicketsService } from '../services/spn-tickets.service';

@Component({
  selector: 'app-spn-tickets-admin',
  templateUrl: './spn-tickets-admin.component.html',
  styleUrls: ['./spn-tickets-admin.component.css'],
  providers: [MessageService]
})
export class SpnTicketsAdminComponent implements OnInit {

  tickets: any[];

  ticketState: SelectItem[] = new Array();

  stateSelected: string;

  showRegisterNav: boolean;

  states: SelectItem[] = new Array();

  priorities: SelectItem[] = new Array();

  deals: SelectItem[] = new Array();

  newTicket: any = {};


  constructor(
    private spnTicketsService: SpnTicketsService,
    private messageService: MessageService
  ) { }

  ngOnInit() {

    this.spnTicketsService.findByState(null).subscribe((data: any[]) => {
      this.tickets = data;
    });

    this.initSelectItemsFromCatalogue(this.ticketState, 'STA', 'All tickets');

    this.initSelectItemsFromCatalogue(this.states, 'STA', 'Select state');

    this.initSelectItemsFromCatalogue(this.priorities, 'PRI', 'Select priority');

    this.initSelectItemsFromCatalogue(this.deals, 'DEA', 'Select deal');

  }

  initSelectItemsFromCatalogue(selectItems: SelectItem[], type: string, defaultValue: string) {
    selectItems.push({ label: defaultValue, value: null });
    this.spnTicketsService.findTicketCatalogueByType(type).subscribe((data: any[]) => {
      data?.forEach(state => {
        selectItems.push({ label: state.name, value: state.referenceCode });
      });
    });
  }

  onSelectState(event: any) {
    this.spnTicketsService.findByState(event.value).subscribe((data: any[]) => {
      this.tickets = data;
    });
  }

  onClickNewTicket() {
    this.showRegisterNav = true;
  }

  onClickSaveTicket() {
    this.newTicket.userId = 'USR1';
    this.newTicket.status = '1';
    this.spnTicketsService.saveTicket(this.newTicket).subscribe(() => {
      this.newTicket = {};
      this.showRegisterNav = false;
      this.spnTicketsService.findByState(null).subscribe((data: any[]) => {
        this.tickets = data;
      });
      this.messageService.add({ severity: 'success', summary: 'Register complete', detail: 'Ticket saved successfully' });
    });

  }

}
