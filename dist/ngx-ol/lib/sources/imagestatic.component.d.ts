import { EventEmitter, OnChanges, SimpleChanges, OnInit } from '@angular/core';
import { ImageStatic } from 'ol/source';
import { SourceComponent } from './source.component';
import { LayerImageComponent } from '../layers/layerimage.component';
import { ProjectionLike } from 'ol/proj';
import { Extent } from 'ol/extent';
import { AttributionLike } from 'ol/source/Source';
import { LoadFunction } from 'ol/Image';
import { Size } from 'ol/size';
import { ImageSourceEvent } from 'ol/source/Image';
import * as ɵngcc0 from '@angular/core';
export declare class SourceImageStaticComponent extends SourceComponent implements OnInit, OnChanges {
    instance: ImageStatic;
    projection: ProjectionLike | string;
    imageExtent: Extent;
    url: string;
    attributions: AttributionLike;
    crossOrigin?: string;
    imageLoadFunction?: LoadFunction;
    imageSize?: Size;
    imageLoadStart: EventEmitter<ImageSourceEvent>;
    imageLoadEnd: EventEmitter<ImageSourceEvent>;
    imageLoadError: EventEmitter<ImageSourceEvent>;
    constructor(layer: LayerImageComponent);
    setLayerSource(): void;
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<SourceImageStaticComponent, [{ host: true; }]>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<SourceImageStaticComponent, "aol-source-imagestatic", never, { "url": "url"; "projection": "projection"; "imageExtent": "imageExtent"; "attributions": "attributions"; "crossOrigin": "crossOrigin"; "imageLoadFunction": "imageLoadFunction"; "imageSize": "imageSize"; }, { "imageLoadStart": "imageLoadStart"; "imageLoadEnd": "imageLoadEnd"; "imageLoadError": "imageLoadError"; }, never, ["*"]>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1hZ2VzdGF0aWMuY29tcG9uZW50LmQudHMiLCJzb3VyY2VzIjpbImltYWdlc3RhdGljLmNvbXBvbmVudC5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEV2ZW50RW1pdHRlciwgT25DaGFuZ2VzLCBTaW1wbGVDaGFuZ2VzLCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEltYWdlU3RhdGljIH0gZnJvbSAnb2wvc291cmNlJztcbmltcG9ydCB7IFNvdXJjZUNvbXBvbmVudCB9IGZyb20gJy4vc291cmNlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBMYXllckltYWdlQ29tcG9uZW50IH0gZnJvbSAnLi4vbGF5ZXJzL2xheWVyaW1hZ2UuY29tcG9uZW50JztcbmltcG9ydCB7IFByb2plY3Rpb25MaWtlIH0gZnJvbSAnb2wvcHJvaic7XG5pbXBvcnQgeyBFeHRlbnQgfSBmcm9tICdvbC9leHRlbnQnO1xuaW1wb3J0IHsgQXR0cmlidXRpb25MaWtlIH0gZnJvbSAnb2wvc291cmNlL1NvdXJjZSc7XG5pbXBvcnQgeyBMb2FkRnVuY3Rpb24gfSBmcm9tICdvbC9JbWFnZSc7XG5pbXBvcnQgeyBTaXplIH0gZnJvbSAnb2wvc2l6ZSc7XG5pbXBvcnQgeyBJbWFnZVNvdXJjZUV2ZW50IH0gZnJvbSAnb2wvc291cmNlL0ltYWdlJztcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIFNvdXJjZUltYWdlU3RhdGljQ29tcG9uZW50IGV4dGVuZHMgU291cmNlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMge1xuICAgIGluc3RhbmNlOiBJbWFnZVN0YXRpYztcbiAgICBwcm9qZWN0aW9uOiBQcm9qZWN0aW9uTGlrZSB8IHN0cmluZztcbiAgICBpbWFnZUV4dGVudDogRXh0ZW50O1xuICAgIHVybDogc3RyaW5nO1xuICAgIGF0dHJpYnV0aW9uczogQXR0cmlidXRpb25MaWtlO1xuICAgIGNyb3NzT3JpZ2luPzogc3RyaW5nO1xuICAgIGltYWdlTG9hZEZ1bmN0aW9uPzogTG9hZEZ1bmN0aW9uO1xuICAgIGltYWdlU2l6ZT86IFNpemU7XG4gICAgaW1hZ2VMb2FkU3RhcnQ6IEV2ZW50RW1pdHRlcjxJbWFnZVNvdXJjZUV2ZW50PjtcbiAgICBpbWFnZUxvYWRFbmQ6IEV2ZW50RW1pdHRlcjxJbWFnZVNvdXJjZUV2ZW50PjtcbiAgICBpbWFnZUxvYWRFcnJvcjogRXZlbnRFbWl0dGVyPEltYWdlU291cmNlRXZlbnQ+O1xuICAgIGNvbnN0cnVjdG9yKGxheWVyOiBMYXllckltYWdlQ29tcG9uZW50KTtcbiAgICBzZXRMYXllclNvdXJjZSgpOiB2b2lkO1xuICAgIG5nT25Jbml0KCk6IHZvaWQ7XG4gICAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQ7XG59XG4iXX0=