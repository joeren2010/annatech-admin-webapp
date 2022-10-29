import { Observable } from 'rxjs';
import { ClientsService } from 'src/app//services/clients.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clients-list',
  templateUrl: './clients-list.component.html',
  styleUrls: ['./clients-list.component.css']
})
export class ClientsListComponent implements OnInit {

  clientsObservable = new Observable<any[]>();

  constructor(private clientsService : ClientsService) { }

  ngOnInit(): void {
    this.clientsObservable = this.clientsService.getClients();
  }

}
