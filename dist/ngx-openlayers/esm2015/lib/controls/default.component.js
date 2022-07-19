import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
import { defaults } from 'ol/control';
import { MapComponent } from '../map.component';
let DefaultControlComponent = class DefaultControlComponent {
    constructor(map) {
        this.map = map;
    }
    ngOnInit() {
        // console.log('ol.control.defaults init: ', this);
        this.instance = defaults(this);
        this.instance.forEach((c) => this.map.instance.addControl(c));
    }
    ngOnDestroy() {
        // console.log('removing aol-control-defaults');
        this.instance.forEach((c) => this.map.instance.removeControl(c));
    }
};
DefaultControlComponent.ctorParameters = () => [
    { type: MapComponent }
];
__decorate([
    Input()
], DefaultControlComponent.prototype, "attribution", void 0);
__decorate([
    Input()
], DefaultControlComponent.prototype, "attributionOptions", void 0);
__decorate([
    Input()
], DefaultControlComponent.prototype, "rotate", void 0);
__decorate([
    Input()
], DefaultControlComponent.prototype, "rotateOptions", void 0);
__decorate([
    Input()
], DefaultControlComponent.prototype, "zoom", void 0);
__decorate([
    Input()
], DefaultControlComponent.prototype, "zoomOptions", void 0);
DefaultControlComponent = __decorate([
    Component({
        selector: 'aol-control-defaults',
        template: ''
    })
], DefaultControlComponent);
export { DefaultControlComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVmYXVsdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtb3BlbmxheWVycy8iLCJzb3VyY2VzIjpbImxpYi9jb250cm9scy9kZWZhdWx0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBcUIsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3BFLE9BQU8sRUFBVyxRQUFRLEVBQUUsTUFBTSxZQUFZLENBQUM7QUFNL0MsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBTWhELElBQWEsdUJBQXVCLEdBQXBDLE1BQWEsdUJBQXVCO0lBZWxDLFlBQW9CLEdBQWlCO1FBQWpCLFFBQUcsR0FBSCxHQUFHLENBQWM7SUFBRyxDQUFDO0lBRXpDLFFBQVE7UUFDTixtREFBbUQ7UUFDbkQsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDL0IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2hFLENBQUM7SUFFRCxXQUFXO1FBQ1QsZ0RBQWdEO1FBQ2hELElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNuRSxDQUFDO0NBQ0YsQ0FBQTs7WUFaMEIsWUFBWTs7QUFackM7SUFEQyxLQUFLLEVBQUU7NERBQ2E7QUFFckI7SUFEQyxLQUFLLEVBQUU7bUVBQytCO0FBRXZDO0lBREMsS0FBSyxFQUFFO3VEQUNRO0FBRWhCO0lBREMsS0FBSyxFQUFFOzhEQUNxQjtBQUU3QjtJQURDLEtBQUssRUFBRTtxREFDTTtBQUVkO0lBREMsS0FBSyxFQUFFOzREQUNpQjtBQWJkLHVCQUF1QjtJQUpuQyxTQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsc0JBQXNCO1FBQ2hDLFFBQVEsRUFBRSxFQUFFO0tBQ2IsQ0FBQztHQUNXLHVCQUF1QixDQTJCbkM7U0EzQlksdUJBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkRlc3Ryb3ksIE9uSW5pdCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbnRyb2wsIGRlZmF1bHRzIH0gZnJvbSAnb2wvY29udHJvbCc7XG5pbXBvcnQgeyBDb2xsZWN0aW9uIH0gZnJvbSAnb2wnO1xuaW1wb3J0IHsgT3B0aW9ucyBhcyBBdHRyaWJ1dGlvbk9wdGlvbnMgfSBmcm9tICdvbC9jb250cm9sL0F0dHJpYnV0aW9uJztcbmltcG9ydCB7IE9wdGlvbnMgYXMgUm90YXRlT3B0aW9ucyB9IGZyb20gJ29sL2NvbnRyb2wvUm90YXRlJztcbmltcG9ydCB7IE9wdGlvbnMgYXMgWm9vbU9wdGlvbnMgfSBmcm9tICdvbC9jb250cm9sL1pvb20nO1xuXG5pbXBvcnQgeyBNYXBDb21wb25lbnQgfSBmcm9tICcuLi9tYXAuY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYW9sLWNvbnRyb2wtZGVmYXVsdHMnLFxuICB0ZW1wbGF0ZTogJycsXG59KVxuZXhwb3J0IGNsYXNzIERlZmF1bHRDb250cm9sQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBpbnN0YW5jZTogQ29sbGVjdGlvbjxDb250cm9sPjtcbiAgQElucHV0KClcbiAgYXR0cmlidXRpb246IGJvb2xlYW47XG4gIEBJbnB1dCgpXG4gIGF0dHJpYnV0aW9uT3B0aW9uczogQXR0cmlidXRpb25PcHRpb25zO1xuICBASW5wdXQoKVxuICByb3RhdGU6IGJvb2xlYW47XG4gIEBJbnB1dCgpXG4gIHJvdGF0ZU9wdGlvbnM6IFJvdGF0ZU9wdGlvbnM7XG4gIEBJbnB1dCgpXG4gIHpvb206IGJvb2xlYW47XG4gIEBJbnB1dCgpXG4gIHpvb21PcHRpb25zOiBab29tT3B0aW9ucztcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIG1hcDogTWFwQ29tcG9uZW50KSB7fVxuXG4gIG5nT25Jbml0KCkge1xuICAgIC8vIGNvbnNvbGUubG9nKCdvbC5jb250cm9sLmRlZmF1bHRzIGluaXQ6ICcsIHRoaXMpO1xuICAgIHRoaXMuaW5zdGFuY2UgPSBkZWZhdWx0cyh0aGlzKTtcbiAgICB0aGlzLmluc3RhbmNlLmZvckVhY2goKGMpID0+IHRoaXMubWFwLmluc3RhbmNlLmFkZENvbnRyb2woYykpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgLy8gY29uc29sZS5sb2coJ3JlbW92aW5nIGFvbC1jb250cm9sLWRlZmF1bHRzJyk7XG4gICAgdGhpcy5pbnN0YW5jZS5mb3JFYWNoKChjKSA9PiB0aGlzLm1hcC5pbnN0YW5jZS5yZW1vdmVDb250cm9sKGMpKTtcbiAgfVxufVxuIl19