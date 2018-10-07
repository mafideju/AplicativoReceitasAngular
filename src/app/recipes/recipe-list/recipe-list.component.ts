import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model'

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Pizza', 'Receita de Pizza de Mussarela', '../../assets/pizza1.jpg'),
    new Recipe('Pizza', 'Receita de Pizza de Manjerona', '../../assets/pizza2.jpg')
  ]

  constructor() { }

  ngOnInit() {
  }

}
