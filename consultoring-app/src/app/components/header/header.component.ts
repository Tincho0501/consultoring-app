import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() menuToggle = new EventEmitter<void>();
  @Input() isAuthorized! : boolean | null;
  @Output() signOut = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

  onMenuToggleDispatch(): void {
    this.menuToggle.emit();
  }
}
