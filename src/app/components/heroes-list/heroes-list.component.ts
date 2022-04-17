import { Component, OnInit } from '@angular/core';
import { Hero } from '../../Hero';
import { HeroService } from 'src/app/services/hero.service';
import { CallService } from 'src/app/services/call.service';
import { faStar } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './heroes-list.component.html',
  styleUrls: ['./heroes-list.component.css']
})
export class HeroesListComponent implements OnInit {
  heroes: Hero[] = [];
  filteredHeroes: Hero[]=[];
  faStar=faStar;
  constructor(private heroService: HeroService, private call: CallService) { }

  ngOnInit(): void {
    this.heroService.getHeroes().subscribe((heroes)=> this.assignHeroes(heroes));
    this.call.getToggle().subscribe((checked)=> this.sortHeroes(checked))
    this.call.getSearch().subscribe((value)=> this.searchHeroes(value))

  }

  assignHeroes(heroes: Hero[]){
    this.heroes=heroes;
    this.sortHeroes(false)
    this.filteredHeroes=this.heroes
  }

  sortHeroes(checked:any){
    if(checked.message){
      this.heroes.sort((a, b) => a.powers.localeCompare(b.powers));
    }else{
      this.heroes.sort((a, b) => a.name.localeCompare(b.name));
    }
  }

  searchHeroes(value: any){
   this.filteredHeroes= this.heroes.filter((element)=>{
      return element.name.includes(value.message) || element.powers.includes(value.message)
    });
  }

  onRate(rate: number, hero: Hero) {
    hero.rate = rate;
    this.heroService
    .rateHero(hero)
    .subscribe();
  }

}
