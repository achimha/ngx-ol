import { OnDestroy } from '@angular/core';
import Source from 'ol/source/Source';
import { LayerComponent } from '../layers/layer.component';
export declare abstract class SourceComponent implements OnDestroy {
    protected host: LayerComponent;
    instance: Source;
    componentType: string;
    attributions: any;
    protected constructor(host: LayerComponent);
    ngOnDestroy(): void;
    protected _register(s: Source): void;
}
