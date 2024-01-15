import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { IWord, WORDS } from '../../RandomWords';

@Component({
  selector: 'app-letsplay',
  templateUrl: './letsplay.component.html',
  styleUrl: './letsplay.component.css'
})
export class LetsplayComponent implements OnInit {

  motusForm!: FormGroup;
  lettreCliquee: string = '';
  result: string = '';
  things: string = '';
  thing: string = '';
  classColors: { [key: string]: string } = {};

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.motusForm = this.formBuilder.group({
      A: ['A', [Validators.required, Validators.maxLength(1), Validators.pattern(/[a-zA-Z]/)]],
      B: ['B', [Validators.required, Validators.maxLength(1), Validators.pattern(/[a-zA-Z]/)]],
      C: ['C', [Validators.required, Validators.maxLength(1), Validators.pattern(/[a-zA-Z]/)]],
      D: ['D', [Validators.required, Validators.maxLength(1), Validators.pattern(/[a-zA-Z]/)]],
      E: ['E', [Validators.required, Validators.maxLength(1), Validators.pattern(/[a-zA-Z]/)]],
      F: ['F', [Validators.required, Validators.maxLength(1), Validators.pattern(/[a-zA-Z]/)]],
      G: ['G', [Validators.required, Validators.maxLength(1), Validators.pattern(/[a-zA-Z]/)]],
      H: ['H', [Validators.required, Validators.maxLength(1), Validators.pattern(/[a-zA-Z]/)]],
      I: ['I', [Validators.required, Validators.maxLength(1), Validators.pattern(/[a-zA-Z]/)]],
      J: ['J', [Validators.required, Validators.maxLength(1), Validators.pattern(/[a-zA-Z]/)]],
      K: ['K', [Validators.required, Validators.maxLength(1), Validators.pattern(/[a-zA-Z]/)]],
      L: ['L', [Validators.required, Validators.maxLength(1), Validators.pattern(/[a-zA-Z]/)]],
      M: ['M', [Validators.required, Validators.maxLength(1), Validators.pattern(/[a-zA-Z]/)]],
      N: ['N', [Validators.required, Validators.maxLength(1), Validators.pattern(/[a-zA-Z]/)]],
      O: ['O', [Validators.required, Validators.maxLength(1), Validators.pattern(/[a-zA-Z]/)]],
      P: ['P', [Validators.required, Validators.maxLength(1), Validators.pattern(/[a-zA-Z]/)]],
      Q: ['Q', [Validators.required, Validators.maxLength(1), Validators.pattern(/[a-zA-Z]/)]],
      R: ['R', [Validators.required, Validators.maxLength(1), Validators.pattern(/[a-zA-Z]/)]],
      S: ['S', [Validators.required, Validators.maxLength(1), Validators.pattern(/[a-zA-Z]/)]],
      T: ['T', [Validators.required, Validators.maxLength(1), Validators.pattern(/[a-zA-Z]/)]],
      U: ['U', [Validators.required, Validators.maxLength(1), Validators.pattern(/[a-zA-Z]/)]],
      V: ['V', [Validators.required, Validators.maxLength(1), Validators.pattern(/[a-zA-Z]/)]],
      W: ['W', [Validators.required, Validators.maxLength(1), Validators.pattern(/[a-zA-Z]/)]],
      X: ['X', [Validators.required, Validators.maxLength(1), Validators.pattern(/[a-zA-Z]/)]],
      Y: ['Y', [Validators.required, Validators.maxLength(1), Validators.pattern(/[a-zA-Z]/)]],
      Z: ['Z', [Validators.required, Validators.maxLength(1), Validators.pattern(/[a-zA-Z]/)]],
    });
    const things = ["Chat", "Chien", "Maison", "Table", "Pomme", "Banane", "Plante", "Soleil", "Lune", "Arbre", "Fleurs", "Montagne", "Riviere", "Voiture", "Velo", "Telephone", "Ordinateur", "Astuce",];
   this.thing = things[Math.floor(Math.random() * things.length)];
    console.log('The computer chose:' + this.thing); // random words
  }

  isResultEqual(lettre: string): boolean {
    return this.thing === this.motusForm.get(lettre)?.value; // [0] = red letter on keyboard
  }

    updateValue(lettre: string): void {
    this.lettreCliquee += lettre;
    console.log("lettreCliquee", this.lettreCliquee);
  }
  onSubmit(): void {
  }

  remove() {
    this.lettreCliquee = this.lettreCliquee.substring(0, this.lettreCliquee.length - 1);
    console.log(this.lettreCliquee);
  }

  reset() {
    this.lettreCliquee = "";
  }
  isLetterCorrect(lettre: string): boolean {
    const occurrences = this.thing.split('').filter(char => char === lettre);
    return occurrences.length > 0;
  }
  
  
}

