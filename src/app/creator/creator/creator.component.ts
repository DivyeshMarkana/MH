import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Comic } from 'src/app/comics/comicsModels/Comic';
import { GetContentService } from 'src/app/services/get-content.service';
import { Creator } from './creatorModel/CreatorDataContainer';

@Component({
  selector: 'app-creator',
  templateUrl: './creator.component.html',
  styleUrls: ['./creator.component.css']
})
export class CreatorComponent implements OnInit {

  creators: Creator[] = []

  constructor(private _getContentService: GetContentService) { }

  ngOnInit(): void {
    this._getContentService.getAllcreator().subscribe( (response) => {
      this.creators = response.data.results
      console.log(response);
      
    })
  }


  

}
