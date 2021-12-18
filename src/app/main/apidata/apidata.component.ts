import { UniversityService } from 'src/app/services/university.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-apidata',
  templateUrl: './apidata.component.html',
  styleUrls: ['./apidata.component.scss']
})
export class ApidataComponent implements OnInit {

  constructor( private uni:UniversityService ) { }

  ngOnInit(): void {

  }

}
