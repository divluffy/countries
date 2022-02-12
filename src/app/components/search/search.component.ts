import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent {
  isLoading: boolean = false;
  isSubmit: boolean = false;
  query: string = '';
  selectedRegion: any;
  countries: object[] = [
    { name: 'Africa', code: 'africa' },
    { name: 'America', code: 'america' },
    { name: 'Asia', code: 'asia' },
    { name: 'Europe', code: 'europe' },
    { name: 'Oceania', code: 'oceania' },
  ];

  constructor(private router: Router) {}

  showSearch() {
    this.isLoading = !this.isLoading;
  }

  onRegion() {
    this.router.navigate([`region/${this.selectedRegion.code}`]);
  }

  onSubmit(event: any) {
    event.preventDefault();
    this.router.navigate([`search/${this.query}`]);
    this.query = '';
  }

}
