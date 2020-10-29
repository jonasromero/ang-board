import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BoardService } from '../../services/board.service';
import { Board } from '../../shared/models/schema.model';

@Component({
  selector: 'app-drawer',
  templateUrl: './drawer.component.html',
  styleUrls: ['./drawer.component.css']
})

export class DrawerComponent {
  boards: Board[];
  constructor(
    private breakpointObserver: BreakpointObserver,
    private boardService: BoardService
  ) {
    this.boards = boardService.getBoards();
  }

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
  .pipe(
    map(result => result.matches)
  );
}
