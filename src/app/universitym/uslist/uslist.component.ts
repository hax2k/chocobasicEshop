import { countryList } from './countrylist';
import { University } from 'src/models/products';
import { Component, OnInit, ViewChild } from '@angular/core';
import { UniversityService } from 'src/app/services/university.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-uslist',
  templateUrl: './uslist.component.html',
  styleUrls: ['./uslist.component.scss']
})
export class UslistComponent implements OnInit {
  dataSource: MatTableDataSource<University>;
  universityList: University[]
  displayedColumns: string[] = ['State Province', 'Name', 'Country', 'Link', 'Code', 'Domain']
  country: string[] = countryList;
  selectedCountry: string;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private us: UniversityService) {

  }


  ngOnInit(): void {
    this.getContry();
    this.getAllUs();

  }
  getContry() {
    let a: string = !this.selectedCountry ? 'canada' : this.selectedCountry
    this.selectedCountry = a;
  }
  getAllUs() {
    this.us.getAllUniversity(this.selectedCountry).subscribe({
      next: (x) => {
        this.universityList = x;
        console.log(this.universityList)
        this.dataSource = new MatTableDataSource(this.universityList);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        console.log("state", this.dataSource);
      },
      error: err => {
        console.log('Error', err)
      },
    })
  }
  getUsByCountry() {
    this.us.setCountry(this.selectedCountry);
    this.us.getAllUniversity(this.selectedCountry).subscribe({
      next: (x) => {
        this.universityList = x;
        console.log(this.universityList)
        this.dataSource = new MatTableDataSource(this.universityList);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        console.log("state", this.dataSource);
      },
      error: err => {
        console.log('Error', err)
      },
    })
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}

