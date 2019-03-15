import { Component, OnInit } from '@angular/core';
import { NamesService } from '../names.service';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-names',
  templateUrl: './names.component.html',
  styleUrls: ['./names.component.css']
})
export class NamesComponent implements OnInit {

  constructor(public auth: AuthService, private namesService: NamesService) { }

  names: string;
  cred: any;

  ngOnInit() {
    this.getScoped();
  }

  getPrivate() {
    if (this.auth.isAuthenticated()) {
      this.namesService.getPrivate().subscribe(data => {
        this.names = data;
        console.log(this.auth.accessToken);
        
      })
    }
  }

   getScoped() { 
   if (this.auth.isAuthenticated()) {
      this.namesService.getScoped().subscribe(data => {
        this.names = data;
        console.log(data);
       })
    }
  }}