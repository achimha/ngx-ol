import { Component, OnDestroy, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MapComponent } from '../map.component';
import { Modify } from 'ol/interaction';
import { Collection, Feature } from 'ol';
import { Style } from 'ol/style';
import { Vector } from 'ol/source';
import { ModifyEvent } from 'ol/interaction/Modify';
import { StyleFunction } from 'ol/style/Style';
import { Condition } from 'ol/events/condition';
import { ObjectEvent } from 'ol/Object';
import { DrawEvent } from 'ol/interaction/Draw';
import BaseEvent from 'ol/events/Event';

@Component({
  selector: 'aol-interaction-modify',
  template: '',
})
export class ModifyInteractionComponent implements OnInit, OnDestroy {
  @Input()
  condition?: Condition;
  @Input()
  deleteCondition?: Condition;
  @Input()
  pixelTolerance?: number;
  @Input()
  style?: Style | Style[] | StyleFunction;
  @Input()
  features: Collection<Feature>;
  @Input()
  wrapX?: boolean;
  @Input()
  source?: Vector;

  @Output()
  olChange = new EventEmitter<DrawEvent>();
  @Output()
  olChangeActive = new EventEmitter<ObjectEvent>();
  @Output()
  olError = new EventEmitter<BaseEvent>();
  @Output()
  olModifyEnd = new EventEmitter<ModifyEvent>();
  @Output()
  olModifyStart = new EventEmitter<ModifyEvent>();
  @Output()
  propertyChange = new EventEmitter<ObjectEvent>();

  instance: Modify;

  constructor(private map: MapComponent) {}

  ngOnInit() {
    this.instance = new Modify(this);
    this.instance.on('change', (event: DrawEvent) => this.olChange.emit(event));
    this.instance.on('change:active', (event: ObjectEvent) => this.olChangeActive.emit(event));
    this.instance.on('error', (event: BaseEvent) => this.olError.emit(event));
    this.instance.on('modifyend', (event: ModifyEvent) => this.olModifyEnd.emit(event));
    this.instance.on('modifystart', (event: ModifyEvent) => this.olModifyStart.emit(event));
    this.instance.on('propertychange', (event: ObjectEvent) => this.propertyChange.emit(event));
    this.map.instance.addInteraction(this.instance);
  }

  ngOnDestroy() {
    this.map.instance.removeInteraction(this.instance);
  }
}
