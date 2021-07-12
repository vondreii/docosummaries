import { Component, OnInit } from '@angular/core';
import { TagService } from 'src/app/services/tag.service';

@Component({
  selector: 'app-browse-by-tags',
  templateUrl: './browse-by-tags.component.html',
  styleUrls: ['./browse-by-tags.component.scss']
})
export class BrowseByTagsComponent implements OnInit {

  tagsList: any;

  constructor(
    private tagService: TagService
  ) { }

  ngOnInit(): void {
    this.getTagsList();
  }

  getTagsList() {
    this.tagsList = this.tagService.getAllTags();
  }
}
