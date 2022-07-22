import { OnDestroy } from '@angular/core';
import Source from 'ol/source/Source';
import { LayerComponent } from '../layers/layer.component';
import * as ɵngcc0 from '@angular/core';
export declare abstract class SourceComponent implements OnDestroy {
    protected host: LayerComponent;
    instance: Source;
    componentType: string;
    attributions: any;
    protected constructor(host: LayerComponent);
    ngOnDestroy(): void;
    protected _register(s: Source): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<SourceComponent, never>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<SourceComponent, never, never, { "attributions": "attributions"; }, {}, never>;
}

//# sourceMappingURL=source.component.d.ts.map