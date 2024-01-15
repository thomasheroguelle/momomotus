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
  isDisabled: { [key: string]: boolean } = {};


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
    var things = ["Chat", "Chien", "Maison", "Table", "Pomme", "Banane", "Plante", "Soleil", "Lune", "Arbre", "Fleurs", "Montagne", "Rivière", "Voiture", "Vélo", "Téléphone", "Ordinateur", "Astuce",];
    var thing = things[Math.floor(Math.random() * things.length)];
    console.log('The computer chose:' + thing);
    
    this.result = thing[0];
   
    Object.keys(this.motusForm.controls).forEach(key => {
      this.isDisabled[key] = false;
    })

  }

  isResultEqual(lettre: string): boolean {
    return this.result === this.motusForm.get(lettre)?.value;
  }

  updateValue(lettre: string): void {
    this.lettreCliquee += lettre;
    console.log(lettre);
    this.isDisabled[lettre] = true;
  }
  onSubmit(): void {
  }

  randomString(length: number, chars: string): string {
    let result = '';
    for (let i = length; i > 0; --i) {
      result += chars[Math.floor(Math.random() * chars.length)];
    }
    return result;
  }



}

