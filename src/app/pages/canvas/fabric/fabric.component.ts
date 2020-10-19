import {
  Component,
  HostListener,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import * as fromFabric from 'fabric';
import * as _ from 'lodash';
import { v4 as uuid } from 'uuid';

@Component({
  selector: 'ngx-fabric',
  templateUrl: './fabric.component.html',
  styleUrls: ['./fabric.component.scss'],
})
export class FabricComponent implements OnInit, OnChanges {
  private bordCanvas: fromFabric.fabric.Canvas;

  constructor() {

    fromFabric.fabric.Object.prototype.set({
      fill: null,
      strokeWidth: 4,
      stroke: '#000000',
      strokeUniform: true,
      originX: 'center',
      originY: 'center',
      noScaleCache: false,
    });
  }
  @Input() mode: string;

  @HostListener('window:keydown.delete')
  @HostListener('window:keydown.backspace')
  handleDelete(event: KeyboardEvent) {
    // console.log('Delete');
    this.deleteObjects();
    // responds to control+z
  }

  ngOnInit(): void {
    // console.log(uuid());
    this.bordCanvas = new fromFabric.fabric.Canvas('canvasBord', {
      renderOnAddRemove: false,
      selection: this.mode === 'selection',
      isDrawingMode: this.mode === 'drawing',
    });
    this.bordCanvas.freeDrawingBrush.width = 4;

    // strokeUniform: true

    this.bordCanvas.on('path:created', (obj: any) => {
      // console.log('path:created ', obj);
      obj.path.set({
        objId: uuid(),
        strokeUniform: true,
      });
      this.bordCanvas.requestRenderAll();
      // console.log('path:created ', obj);
    });

    const rect = new fromFabric.fabric.Rect({
      left: 100,
      top: 50,
      width: 50,
      height: 50,
      rx: 10,
      ry: 10,
    });
    // rect.set({ objId: uuid() });
    this.bordCanvas.add(rect);
    this.bordCanvas.requestRenderAll();
  }

  ngOnChanges(changes: SimpleChanges): void {
    // console.log('changed in fabric', this.mode);
    if (this.bordCanvas) {
      this.bordCanvas.selection = this.mode === 'selection';
      this.bordCanvas.isDrawingMode = this.mode === 'drawing';
    }
  }

  deleteObjects(objs?: []): void {
    if (!objs) { // no array to delete then delte active objects
      const activeObjects = this.bordCanvas.getActiveObjects();
        if (activeObjects) {
          this.bordCanvas.discardActiveObject();
          this.bordCanvas.remove(...activeObjects);
        }
    }
    this.bordCanvas.requestRenderAll();
  }
}
