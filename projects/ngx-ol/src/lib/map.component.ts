import {
  Component,
  OnInit,
  ElementRef,
  Input,
  Output,
  EventEmitter,
  AfterViewInit,
  SimpleChanges,
  OnChanges,
} from '@angular/core';
import { Map } from 'ol';
import MapBrowserEvent from 'ol/MapBrowserEvent';
import MapEvent from 'ol/MapEvent';
import { ObjectEvent } from 'ol/Object';
import RenderEvent from 'ol/render/Event';
import { Control } from 'ol/control';
import { Interaction } from 'ol/interaction';
import { DrawEvent } from 'ol/interaction/Draw';
import BaseEvent from 'ol/events/Event';

@Component({
  selector: 'aol-map',
  template: `
    <div [style.width]="width" [style.height]="height"></div>
    <ng-content></ng-content>
  `,
})
export class MapComponent implements OnInit, AfterViewInit, OnChanges {
  public instance: Map;
  public componentType = 'map';

  @Input()
  width = '100%';
  @Input()
  height = '100%';
  @Input()
  pixelRatio: number;
  @Input()
  keyboardEventTarget: HTMLElement | string;
  @Input()
  loadTilesWhileAnimating: boolean;
  @Input()
  loadTilesWhileInteracting: boolean;
  @Input()
  logo: string | boolean;
  @Input()
  renderer: 'canvas' | 'webgl';

  @Output()
  olChange = new EventEmitter<DrawEvent>();
  @Output()
  olChangeLayerGroup = new EventEmitter<ObjectEvent>();
  @Output()
  olChangeSize = new EventEmitter<ObjectEvent>();
  @Output()
  olChangeTarget = new EventEmitter<ObjectEvent>();
  @Output()
  olChangeView = new EventEmitter<ObjectEvent>();
  @Output()
  olClick: EventEmitter<MapBrowserEvent<MouseEvent>>;
  @Output()
  dblClick: EventEmitter<MapBrowserEvent<MouseEvent>>;
  @Output()
  olError = new EventEmitter<BaseEvent>();
  @Output()
  loadEnd: EventEmitter<MapEvent>;
  @Output()
  loadStart: EventEmitter<MapEvent>;
  @Output()
  moveEnd: EventEmitter<MapEvent>;
  @Output()
  moveStart: EventEmitter<MapEvent>;
  @Output()
  pointerDrag: EventEmitter<MapBrowserEvent<MouseEvent>>;
  @Output()
  pointerMove: EventEmitter<MapBrowserEvent<MouseEvent>>;
  @Output()
  olPostCompose = new EventEmitter<RenderEvent>();
  @Output()
  olPostRender: EventEmitter<RenderEvent>;
  @Output()
  olPreCompose: EventEmitter<RenderEvent>;
  @Output()
  olPropertyChange = new EventEmitter<ObjectEvent>();
  @Output()
  postRender: EventEmitter<MapEvent>;
  @Output()
  propertyChange: EventEmitter<ObjectEvent>;
  @Output()
  singleClick: EventEmitter<MapBrowserEvent<MouseEvent>>;

  // we pass empty arrays to not get default controls/interactions because we have our own directives
  controls: Control[] = [];
  interactions: Interaction[] = [];

  constructor(private host: ElementRef) {
  }

  ngOnInit() {
    // console.log('creating ol.Map instance with:', this);
    this.instance = new Map(this);
    this.instance.setTarget(this.host.nativeElement.firstElementChild);
    this.instance.on('change', (event: DrawEvent) => this.olChange.emit(event));
    this.instance.on('change:layergroup', (event: ObjectEvent) => this.olChangeLayerGroup.emit(event));
    this.instance.on('change:size', (event: ObjectEvent) => this.olChangeSize.emit(event));
    this.instance.on('change:target', (event: ObjectEvent) => this.olChangeTarget.emit(event));
    this.instance.on('change:view', (event: ObjectEvent) => this.olChangeView.emit(event));
    this.instance.on('click', (event: MapBrowserEvent<MouseEvent>) => this.olClick.emit(event));
    this.instance.on('dblclick', (event: MapBrowserEvent<MouseEvent>) => this.dblClick.emit(event));
    this.instance.on('error', (event: BaseEvent) => this.olError.emit(event));
    this.instance.on('loadend', (event: MapEvent) => this.loadEnd.emit(event));
    this.instance.on('loadstart', (event: MapEvent) => this.loadStart.emit(event));
    this.instance.on('moveend', (event: MapEvent) => this.moveEnd.emit(event));
    this.instance.on('movestart', (event: MapEvent) => this.moveStart.emit(event));
    this.instance.on('pointerdrag', (event: MapBrowserEvent<MouseEvent>) => this.pointerDrag.emit(event));
    this.instance.on('pointermove', (event: MapBrowserEvent<MouseEvent>) => this.pointerMove.emit(event));
    this.instance.on('postcompose', (event: RenderEvent) => this.olPostCompose.emit(event));
    this.instance.on('postrender', (event: RenderEvent) => this.olPostRender.emit(event));
    this.instance.on('postrender', (event: MapEvent) => this.postRender.emit(event));
    this.instance.on('precompose', (event: RenderEvent) => this.olPreCompose.emit(event));
    this.instance.on('propertychange', (event: ObjectEvent) => this.olPropertyChange.emit(event));
    this.instance.on('singleclick', (event: MapBrowserEvent<MouseEvent>) => this.singleClick.emit(event));
  }

  ngOnChanges(changes: SimpleChanges) {
    const properties: { [index: string]: any } = {};
    if (!this.instance) {
      return;
    }
    for (const key in changes) {
      if (changes.hasOwnProperty(key)) {
        properties[key] = changes[key].currentValue;
      }
    }
    // console.log('changes detected in aol-map, setting new properties: ', properties);
    this.instance.setProperties(properties, false);
  }

  ngAfterViewInit() {
    this.instance.updateSize();
  }
}
