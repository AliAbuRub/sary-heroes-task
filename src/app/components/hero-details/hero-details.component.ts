import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { HeroService } from 'src/app/services/hero.service';
import {Hero} from '../../Hero'



@Component({
  selector: 'app-hero-details',
  templateUrl: './hero-details.component.html',
  styleUrls: ['./hero-details.component.css']
})
export class HeroDetailsComponent implements OnInit {
  id! : number
  hero! : Hero
  constructor(private route: ActivatedRoute, private heroService: HeroService) { 
  }

  ngOnInit(): void {
   this.id= this.route.snapshot.params['id']
   this.heroService.getHero(this.id).subscribe((hero)=> this.hero=hero);

  }

}
