import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { tr } from './util';

@Component({
  selector: 'app-connexion',
  standalone: true,
  imports: [ FormsModule ],
  templateUrl: './connexion.component.html',
  styleUrl: './connexion.component.css'
})
export class ConnexionComponent {
  matricule=""
  motDePasse=""

  valider_connexion()
  {
    alert("tentative de connexion ed " + this.matricule)    
  }

  triche()
  {
        
  }
}
