import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { filterSpamCountries } from 'src/app/helpers/filter-spam';
import { ApiService } from 'src/app/services/api.service';
import { Worlds } from 'src/app/types/world';

@Component({
  selector: 'app-pageinfo',
  templateUrl: './pageinfo.component.html',
  styleUrls: ['./pageinfo.component.css'],
})
export class PageinfoComponent implements OnInit {
  query: string = '';
  subregion: string = '';
  dataCountries: Worlds[] = [];
  dataSubregion: Worlds[];

  constructor(
    private route: ActivatedRoute,
    private api: ApiService,
    private router: Router
  ) {}

  goToMap(link: string) {
    window.open(link, '_blank');
  }

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      this.query = params.get('name') || '';
      this.api.getSearch(this.query).subscribe(
        (data: Worlds[]) => {
          this.dataCountries = data;
          this.subregion = data[0].subregion;
          this.api.getSubregion(this.subregion).subscribe((data: Worlds[]) => {
            this.dataSubregion = filterSpamCountries(data);
          });
        },
        () => this.router.navigate(['404'])
      );
    });
  }
}
