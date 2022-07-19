import { AfterContentInit, EventEmitter } from '@angular/core';
import { Raster, Source } from 'ol/source';
import { Operation, RasterOperationType, RasterSourceEvent } from 'ol/source/Raster';
import { LayerImageComponent } from '../layers/layerimage.component';
import { SourceComponent } from './source.component';
import * as ɵngcc0 from '@angular/core';
export declare class SourceRasterComponent extends SourceComponent implements AfterContentInit {
    instance: Raster;
    operation?: Operation;
    threads?: number;
    lib?: any;
    operationType?: RasterOperationType;
    beforeOperations: EventEmitter<RasterSourceEvent>;
    afterOperations: EventEmitter<RasterSourceEvent>;
    sources: Source[];
    set source(sourceComponent: SourceComponent);
    constructor(layer: LayerImageComponent);
    ngAfterContentInit(): void;
    init(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<SourceRasterComponent, [{ host: true; }]>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<SourceRasterComponent, "aol-source-raster", never, { "operation": "operation"; "threads": "threads"; "lib": "lib"; "operationType": "operationType"; }, { "beforeOperations": "beforeOperations"; "afterOperations": "afterOperations"; }, ["source"], ["*"]>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFzdGVyLmNvbXBvbmVudC5kLnRzIiwic291cmNlcyI6WyJyYXN0ZXIuY29tcG9uZW50LmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0EiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBZnRlckNvbnRlbnRJbml0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJhc3RlciwgU291cmNlIH0gZnJvbSAnb2wvc291cmNlJztcbmltcG9ydCB7IE9wZXJhdGlvbiwgUmFzdGVyT3BlcmF0aW9uVHlwZSwgUmFzdGVyU291cmNlRXZlbnQgfSBmcm9tICdvbC9zb3VyY2UvUmFzdGVyJztcbmltcG9ydCB7IExheWVySW1hZ2VDb21wb25lbnQgfSBmcm9tICcuLi9sYXllcnMvbGF5ZXJpbWFnZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgU291cmNlQ29tcG9uZW50IH0gZnJvbSAnLi9zb3VyY2UuY29tcG9uZW50JztcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIFNvdXJjZVJhc3RlckNvbXBvbmVudCBleHRlbmRzIFNvdXJjZUNvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyQ29udGVudEluaXQge1xuICAgIGluc3RhbmNlOiBSYXN0ZXI7XG4gICAgb3BlcmF0aW9uPzogT3BlcmF0aW9uO1xuICAgIHRocmVhZHM/OiBudW1iZXI7XG4gICAgbGliPzogYW55O1xuICAgIG9wZXJhdGlvblR5cGU/OiBSYXN0ZXJPcGVyYXRpb25UeXBlO1xuICAgIGJlZm9yZU9wZXJhdGlvbnM6IEV2ZW50RW1pdHRlcjxSYXN0ZXJTb3VyY2VFdmVudD47XG4gICAgYWZ0ZXJPcGVyYXRpb25zOiBFdmVudEVtaXR0ZXI8UmFzdGVyU291cmNlRXZlbnQ+O1xuICAgIHNvdXJjZXM6IFNvdXJjZVtdO1xuICAgIHNldCBzb3VyY2Uoc291cmNlQ29tcG9uZW50OiBTb3VyY2VDb21wb25lbnQpO1xuICAgIGNvbnN0cnVjdG9yKGxheWVyOiBMYXllckltYWdlQ29tcG9uZW50KTtcbiAgICBuZ0FmdGVyQ29udGVudEluaXQoKTogdm9pZDtcbiAgICBpbml0KCk6IHZvaWQ7XG59XG4iXX0=