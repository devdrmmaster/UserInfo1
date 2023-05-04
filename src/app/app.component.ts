import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  today: Date = new Date();
  transformedDate:any = '';

  constructor(private datePipe: DatePipe, private router:Router){
    
  }
  ngOnInit(): void {
    this.transformedDate = this.datePipe.transform(this.today, 'dd-MMM-yy');
  }

  userInfo() {
    this.router.navigateByUrl('/userinfo');
  }

  

  
}
