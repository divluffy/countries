import { Worlds } from '../types/world';
import { Router } from '@angular/router';
export function filterSpamCountries(data: Worlds[]): Worlds[] {
  return data?.filter((item: Worlds) => item.cca2 !== 'IL');
}

export class Error404 {
  constructor(private router: Router) {}
  error404() {
    this.router?.navigate(['404']);
  }
}
