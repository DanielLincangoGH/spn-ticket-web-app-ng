import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SpnTicketsService {

  constructor(private http: HttpClient) { }

  findByState(state: string) {
    return this.http.post<any[]>('/spnContext/ticketWs/findByState', { state: state });
  }

  saveTicket(ticket: any) {
    return this.http.post<any[]>('/spnContext/ticketWs/saveTicket', ticket);
  }

  findTicketCatalogueByType(type: string) {
    return this.http.post<any[]>('/spnContext/ticketWs/findCataloguesByType', { type: type });
  }
}
