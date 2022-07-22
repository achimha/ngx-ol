import { OnInit, ElementRef, EventEmitter, AfterViewInit, SimpleChanges, OnChanges } from '@angular/core';
import { Map } from 'ol';
import MapBrowserEvent from 'ol/MapBrowserEvent';
import MapEvent from 'ol/MapEvent';
import { ObjectEvent } from 'ol/Object';
import RenderEvent from 'ol/render/Event';
import { Control } from 'ol/control';
import { Interaction } from 'ol/interaction';
import * as ɵngcc0 from '@angular/core';
export declare class MapComponent implements OnInit, AfterViewInit, OnChanges {
    private host;
    instance: Map;
    componentType: string;
    width: string;
    height: string;
    pixelRatio: number;
    keyboardEventTarget: HTMLElement | string;
    loadTilesWhileAnimating: boolean;
    loadTilesWhileInteracting: boolean;
    logo: string | boolean;
    renderer: 'canvas' | 'webgl';
    olClick: EventEmitter<MapBrowserEvent<MouseEvent>>;
    dblClick: EventEmitter<MapBrowserEvent<MouseEvent>>;
    moveStart: EventEmitter<MapEvent>;
    moveEnd: EventEmitter<MapEvent>;
    pointerDrag: EventEmitter<MapBrowserEvent<MouseEvent>>;
    pointerMove: EventEmitter<MapBrowserEvent<MouseEvent>>;
    onpostrender: EventEmitter<RenderEvent>;
    postRender: EventEmitter<MapEvent>;
    onprerender: EventEmitter<RenderEvent>;
    propertyChange: EventEmitter<ObjectEvent>;
    singleClick: EventEmitter<MapBrowserEvent<MouseEvent>>;
    controls: Control[];
    interactions: Interaction[];
    constructor(host: ElementRef);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    ngAfterViewInit(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<MapComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<MapComponent, "aol-map", never, { "width": "width"; "height": "height"; "pixelRatio": "pixelRatio"; "keyboardEventTarget": "keyboardEventTarget"; "loadTilesWhileAnimating": "loadTilesWhileAnimating"; "loadTilesWhileInteracting": "loadTilesWhileInteracting"; "logo": "logo"; "renderer": "renderer"; }, { "olClick": "olClick"; "dblClick": "dblClick"; "moveStart": "moveStart"; "moveEnd": "moveEnd"; "pointerDrag": "pointerDrag"; "pointerMove": "pointerMove"; "onpostrender": "onpostrender"; "postRender": "postRender"; "onprerender": "onprerender"; "propertyChange": "propertyChange"; "singleClick": "singleClick"; }, never, ["*"]>;
}

//# sourceMappingURL=map.component.d.ts.map