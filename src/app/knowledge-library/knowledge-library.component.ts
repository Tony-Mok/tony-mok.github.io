import { Component } from '@angular/core';
import { LibraryService } from '../library.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-knowledge-library',
  templateUrl: './knowledge-library.component.html',
  styleUrls: ['./knowledge-library.component.scss']
})
export class KnowledgeLibraryComponent {
  content: Observable<string> = this.libraryService.getContent();

  constructor(private libraryService: LibraryService) {}
}
