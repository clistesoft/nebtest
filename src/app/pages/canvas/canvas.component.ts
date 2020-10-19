import { Component, HostListener, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'ngx-canvas',
  templateUrl: './canvas.component.html',
})
export class CanvasComponent implements OnInit, OnChanges {
  public keypressed;
  public bordCanvasMode;
  public cavasId;

  constructor(private route: ActivatedRoute) {
    this.bordCanvasMode = 'selection';
  }

  @HostListener('window:keydown', ['$event'])
  @HostListener('window:keyup', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    // console.log('window:keyevent',event.type ,event);
    this.keypressed = event.code;

    if (event.type === 'keyup' && event.code === 'KeyA') {
      // console.log("selection mode ON");
      this.bordCanvasMode = 'selection';
    }

    if (event.code === 'AltLeft' || event.code === 'AltRight') {
      switch (event.type) {
        case 'keydown':
          console.log('1. start Draw');
          this.bordCanvasMode = 'drawing';
          break;
        case 'keyup':
          console.log('2. stop Draw');
          this.bordCanvasMode = 'selection';
          break;

        default:
          this.bordCanvasMode = 'selection';
          break;
      }
    }

    event.preventDefault();
    event.stopPropagation();
    return false;
  }

  // @HostListener('document:keydown.control.z')
  @HostListener('window:keydown.control.z')
  handleUndo(event: KeyboardEvent) {
    console.log('undo');
    // responds to control+z
  }

  @HostListener('window:keydown.shift.control.z')
  handleRedo(event: KeyboardEvent) {
    console.log('redo');
    // responds to control+z
  }

  ngOnInit() {
    this.cavasId = this.route.snapshot.paramMap.get('id');
  }

  ngOnChanges(changes: SimpleChanges): void {
    // Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    // Add '${implements OnChanges}' to the class.

   }
}
