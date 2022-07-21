import { OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { Text } from 'ol/style';
import { StyleComponent } from './style.component';
import * as ɵngcc0 from '@angular/core';
export declare class StyleTextComponent implements OnInit, OnChanges {
    private host;
    instance: Text;
    componentType: string;
    font: string | undefined;
    offsetX: number | undefined;
    offsetY: number | undefined;
    scale: number | undefined;
    rotateWithView: boolean | undefined;
    rotation: number | undefined;
    text: string | undefined;
    textAlign: string | undefined;
    textBaseLine: string | undefined;
    constructor(host: StyleComponent);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<StyleTextComponent, [{ optional: true; }]>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<StyleTextComponent, "aol-style-text", never, { "font": "font"; "offsetX": "offsetX"; "offsetY": "offsetY"; "scale": "scale"; "rotateWithView": "rotateWithView"; "rotation": "rotation"; "text": "text"; "textAlign": "textAlign"; "textBaseLine": "textBaseLine"; }, {}, never, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGV4dC5jb21wb25lbnQuZC50cyIsInNvdXJjZXMiOlsidGV4dC5jb21wb25lbnQuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT25Jbml0LCBPbkNoYW5nZXMsIFNpbXBsZUNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFRleHQgfSBmcm9tICdvbC9zdHlsZSc7XG5pbXBvcnQgeyBTdHlsZUNvbXBvbmVudCB9IGZyb20gJy4vc3R5bGUuY29tcG9uZW50JztcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIFN0eWxlVGV4dENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzIHtcbiAgICBwcml2YXRlIGhvc3Q7XG4gICAgaW5zdGFuY2U6IFRleHQ7XG4gICAgY29tcG9uZW50VHlwZTogc3RyaW5nO1xuICAgIGZvbnQ6IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgICBvZmZzZXRYOiBudW1iZXIgfCB1bmRlZmluZWQ7XG4gICAgb2Zmc2V0WTogbnVtYmVyIHwgdW5kZWZpbmVkO1xuICAgIHNjYWxlOiBudW1iZXIgfCB1bmRlZmluZWQ7XG4gICAgcm90YXRlV2l0aFZpZXc6IGJvb2xlYW4gfCB1bmRlZmluZWQ7XG4gICAgcm90YXRpb246IG51bWJlciB8IHVuZGVmaW5lZDtcbiAgICB0ZXh0OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gICAgdGV4dEFsaWduOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gICAgdGV4dEJhc2VMaW5lOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gICAgY29uc3RydWN0b3IoaG9zdDogU3R5bGVDb21wb25lbnQpO1xuICAgIG5nT25Jbml0KCk6IHZvaWQ7XG4gICAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQ7XG59XG4iXX0=