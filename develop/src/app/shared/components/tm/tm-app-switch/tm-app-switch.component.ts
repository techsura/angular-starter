import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'tm-app-switch',
  templateUrl: './tm-app-switch.component.html',
  styleUrls: ['./tm-app-switch.component.scss']
})
export class TmAppSwitchComponent implements OnInit {
  @Input() activeApp!: string;

  constructor() { }

  ngOnInit(): void {
  }

}
