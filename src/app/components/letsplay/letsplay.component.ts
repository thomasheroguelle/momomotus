import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { WinnerdialogComponent } from '../winnerdialog/winnerdialog.component';
import { LoserdialogComponent } from '../loserdialog/loserdialog.component';

@Component({
  selector: 'app-letsplay',
  templateUrl: './letsplay.component.html',
  styleUrls: ['./letsplay.component.css']
})
export class LetsplayComponent implements OnInit {
  motusForm!: FormGroup;
  wordToGuess: string = '';
  guessedLetters: string[] = [];
  alphabet: string[] = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

  constructor(private formBuilder: FormBuilder, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.initializeForm();
    this.chooseRandomWord();
  }

  initializeForm(): void {
    const alphabetValidators = [Validators.required, Validators.pattern(/[a-zA-Z]/)];

    this.motusForm = this.formBuilder.group({});

    this.alphabet.forEach(letter => {
      this.motusForm.addControl(letter, this.formBuilder.control(letter, alphabetValidators));
    });
  }

  chooseRandomWord(): void {
    const words: string[] = ["Abricot", "Citron",  "Girafe", "Hibou",
    "Iguane","Mangue", "Orque", "Papillon"];
  

    this.wordToGuess = words[Math.floor(Math.random() * words.length)].toUpperCase();
    console.log('L\'ordinateur a choisi : ' + this.wordToGuess);
  }

  addLetter(letter: string): void {
    if (this.guessedLetters.length < 9) {
      const formControl = this.motusForm.get(letter);
      if (formControl?.value) {
        this.guessedLetters.push(formControl.value.toUpperCase());
        formControl.setValue('');
      }
    }
  }
  

  isLetterCorrect(letter: string): boolean {
    return this.guessedLetters.includes(letter) && this.wordToGuess.includes(letter);
  }

  onSubmit(): void {
    const areAllLettersValid = this.guessedLetters.every(letter => this.alphabet.includes(letter));
  
    if (areAllLettersValid) {
      const userGuess = this.guessedLetters.join('');
      if (userGuess === this.wordToGuess) {
        console.log('Félicitations, vous avez deviné le mot !');
        this.openDialog();
        this.onClickReset.emit();
      } else {
        console.log('Essayez à nouveau.');
      }
    } else {
      console.log('Veuillez saisir des lettres valides.');
    }
  }
  

  getSortedLetters(): string[] {
    return Array.from(new Set(this.wordToGuess.split(''))).sort();
  }

  deleteLetter(letter: string): void {
    const letterIndex = this.guessedLetters.indexOf(letter);
    if (letterIndex !== -1) {
      this.guessedLetters.splice(letterIndex, 1);
    }
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(WinnerdialogComponent, {
      data: { correctWord: this.wordToGuess }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  openDialogForTheLoser(): void {
    const dialogRef = this.dialog.open(LoserdialogComponent, {
      data: { correctWord: this.wordToGuess }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  @Output() onClickReset = new EventEmitter<string>();

  removeLastLetter(): void {
    if (this.guessedLetters.length > 0) {
      this.guessedLetters.pop();
    }
  }
  
  isLetterChosen(letter: string): boolean {
    return this.guessedLetters.includes(letter);
  }

  isLetterIncorrectButPresent(letter: string, index: number): boolean {
    return !this.isLetterCorrect(letter) && this.wordToGuess.includes(letter) && this.wordToGuess.indexOf(letter) !== this.guessedLetters.lastIndexOf(letter);
  }
}
