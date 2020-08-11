import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gateway',
  templateUrl: './gateway.component.html',
  styleUrls: ['./gateway.component.css']
})
export class GatewayComponent implements OnInit {
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
