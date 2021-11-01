import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-selectedproduit',
  templateUrl: './selectedproduit.component.html',
  styleUrls: ['./selectedproduit.component.css']
})
export class SelectedproduitComponent implements OnInit {
identifiant:number=0;
  constructor(private activatedRoute:ActivatedRoute, private router:Router) { }
retour()
{
this.router.navigate(['/produits']);
}

  ngOnInit(): void {
    this.identifiant = this.activatedRoute.snapshot.params['id'];
  }

}
