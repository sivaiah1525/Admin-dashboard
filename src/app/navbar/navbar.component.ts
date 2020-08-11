import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  title = 'Gateways';
  constructor(private router: ActivatedRoute) {
    this.router.data.subscribe((data) => {
      //console.log(data);
      this.title = data.title;
    });
  }

  ngOnInit(): void {}

  openNav() {
    document.getElementById('mySidebar').style.width = '250px';
    document.getElementById('main').style.marginLeft = '250px';
  }

  closeNav() {
    document.getElementById('mySidebar').style.width = '0';
    document.getElementById('main').style.marginLeft = '0';
  }
  // my() {
  //   this.router.params.subscribe((data) => {
  //     console.log(data);
  //   });
  // }
}
