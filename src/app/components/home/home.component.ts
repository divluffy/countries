import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Error404 } from 'src/app/helpers/filter-spam';
import { ApiService } from 'src/app/services/api.service';
import { Worlds } from 'src/app/types/world';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  dataCountries: Worlds[] = [];
  query: string = '';
  region: string = '';

  constructor(private api: ApiService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.dataCountries = [];
      this.query = params.get('query') || '';
      this.region = params.get('region') || '';
      if (this.query) {
        let received = this.api.getSearch(this.query);
        this.handleData(received);
      }
      if (this.region) {
        let received = this.api.getRegion(this.region);
        this.handleData(received);
      }
    });
    if (!this.query && !this.region) {
      let received = this.api.getWorlds();
      this.handleData(received);
    }
  }

  handleData(event: any) {
    event.subscribe((data: Worlds[]) => {
      this.dataCountries = this.filterSpamCountries(data);
    }, Error404);
  }

  filterSpamCountries(data: Worlds[]): Worlds[] {
    return data?.filter((item: Worlds) => item.cca2 !== 'IL');
  }
}
