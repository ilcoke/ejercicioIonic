import { Component } from '@angular/core';
import { WishesService } from '../../services/wishes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor( public WishesService: WishesService,
               private router: Router ) {}

  agregarLista(){
    this.router.navigateByUrl('/tabs/tab1/agregar');
  }

}