import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-network',
  templateUrl: './network.component.html',
  styleUrls: ['./network.component.css']
})
export class NetworkComponent implements OnInit {

  table: any;
  constructor() { }

  ngOnInit(): void {
    this.table = [
      {
        GatewayID: '123',
        GatewayIP: '1234567',
        NetWorkName: 'local',
        Mechinename: 'network',
        mechinepurpose: 'maintain',
        MechineIP: '12345678',
        CompanyName: 'Wipro'
      },
      {
        GatewayID: '123',
        GatewayIP: '1234567',
        NetWorkName: 'local',
        Mechinename: 'network',
        mechinepurpose: 'maintain',
        MechineIP: '12345678',
        CompanyName: 'Wipro'
      },
      {
        GatewayID: '123',
        GatewayIP: '1234567',
        NetWorkName: 'local',
        Mechinename: 'network',
        mechinepurpose: 'maintain',
        MechineIP: '12345678',
        CompanyName: 'Wipro'
      },
      {
        GatewayID: '123',
        GatewayIP: '1234567',
        NetWorkName: 'local',
        Mechinename: 'network',
        mechinepurpose: 'maintain',
        MechineIP: '12345678',
        CompanyName: 'Wipro'
      },
      {
        GatewayID: '123',
        GatewayIP: '1234567',
        NetWorkName: 'local',
        Mechinename: 'network',
        mechinepurpose: 'maintain',
        MechineIP: '12345678',
        CompanyName: 'Wipro'
      },
    ];

  }


}
