import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-company-modal',
  templateUrl: './company-modal.component.html',
  styleUrls: ['./company-modal.component.scss']
})
export class CompanyModalComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<CompanyModalComponent>) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    this.dialogRef.close({ created: true });
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}
