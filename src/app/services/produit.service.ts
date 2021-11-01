import { Injectable } from '@angular/core';
import { Produit } from '../model/produit';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {
  private lesProduits: Produit[] = [
    new Produit(32, 'trousse', 11.2),
    new Produit(47, 'stylo', 0.5),
    new Produit(51, 'cartable', 37.2),
    new Produit(64, 'tablier', 24.8)
  ]
  getproduits() {
    return this.lesProduits;
  }
  constructor() { }
}
