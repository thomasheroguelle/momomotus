import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DialogData } from '../../DialogData';

@Component({
  selector: 'app-winnerdialog',
  templateUrl: './winnerdialog.component.html',
  styleUrl: './winnerdialog.component.css'
})
export class WinnerdialogComponent {
  constructor(
    public dialogRef: MatDialogRef<WinnerdialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }}
