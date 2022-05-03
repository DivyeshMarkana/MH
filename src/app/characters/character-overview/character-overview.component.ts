import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContentFunctionalityService } from 'src/app/services/content-functionality.service';
import { GetContentService } from 'src/app/services/get-content.service';
import { Character } from '../characterModels/Character';

@Component({
  selector: 'app-character-overview',
  templateUrl: './character-overview.component.html',
  styleUrls: ['./character-overview.component.css']
})
export class CharacterOverviewComponent implements OnInit {

  characters: Character[];

  constructor(private _getContentService: GetContentService,
    private _contentFunctionality: ContentFunctionalityService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this._getContentService.getCharacterById(id).subscribe( (response) => {
      // console.log(response);
      this.characters = response.data.results;
    } )
  }

  goBack() {
    this._contentFunctionality.goBack()
  }

}
