import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'technft-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output()
  menuClicked = new EventEmitter<void>()

  constructor() { }

  ngOnInit(): void {
  }

}
