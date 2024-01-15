
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DialogData } from '../../DialogData';
import { Component, Inject } from '@angular/core';

@Component({
  selector: 'app-loserdialog',
  templateUrl: './loserdialog.component.html',
  styleUrl: './loserdialog.component.css'
})
export class LoserdialogComponent {
  constructor(
    public dialogRef: MatDialogRef<LoserdialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
