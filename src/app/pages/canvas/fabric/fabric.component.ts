import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { fabric } from 'fabric';

@Component({
  selector: 'ngx-fabric',
  templateUrl: './fabric.component.html',
  styleUrls: ['./fabric.component.scss'],
})
export class FabricComponent implements OnInit, OnChanges {
  private bordCanvas: any;

  constructor() {}
  @Input() mode: string;

  ngOnInit(): void {
    this.bordCanvas = new fabric.Canvas('canvasBord', {
      selection: this.mode === 'selection',
      isDrawingMode: this.mode === 'drawing',
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('changed in fabric', this.mode);
    this.bordCanvas?.set({
      selection: this.mode === 'selection',
      isDrawingMode: this.mode === 'drawing',
    });
  }
}
