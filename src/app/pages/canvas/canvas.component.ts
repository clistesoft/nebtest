import { Component, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { fabric } from 'fabric';

@Component({
  selector: 'ngx-canvas',
  templateUrl: './canvas.component.html',
})
export class CanvasComponent implements OnInit {
  public cavasId;
  public keypressed;
  private bordCanvas: any;

  constructor(private route: ActivatedRoute) {}

  @HostListener('window:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    // console.log('window:keydown',event.key,event.code);
    this.keypressed = event.code;

    //
    event.preventDefault();
    event.stopPropagation();
    return false;
  }

  ngOnInit() {
    this.cavasId = this.route.snapshot.paramMap.get('id');
    this.bordCanvas = new fabric.Canvas('canvasBord', {});
  }
}
