import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-macchina',
  templateUrl: './macchina.component.html',
  styleUrls: ['./macchina.component.css']
})

export class MacchinaComponent implements OnInit {
  @Input() macchina: string;
  pezzi: string[];
  constructor() {
    this.macchina = ''
    this.pezzi = ['vite', 'sacco', 'sandalo']
  } ngOnInit() {}
}
