import { DOCUMENT } from '@angular/common';
import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {
  darkMode: boolean = false;

  constructor(@Inject(DOCUMENT) private document: Document) {}

  onDarkMode() {
    this.document.body.classList.toggle('dark');
  }

  ngOnInit(): void {}
}
