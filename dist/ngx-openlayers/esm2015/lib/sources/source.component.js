import { __decorate } from "tslib";
import { Input } from '@angular/core';
export class SourceComponent {
    constructor(host) {
        this.host = host;
        this.componentType = 'source';
    }
    ngOnDestroy() {
        if (this.host && this.host.instance) {
            this.host.instance.setSource(null);
        }
    }
    _register(s) {
        if (this.host) {
            this.host.instance.setSource(s);
        }
    }
}
__decorate([
    Input()
], SourceComponent.prototype, "attributions", void 0);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic291cmNlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1vcGVubGF5ZXJzLyIsInNvdXJjZXMiOlsibGliL3NvdXJjZXMvc291cmNlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLEtBQUssRUFBYSxNQUFNLGVBQWUsQ0FBQztBQUtqRCxNQUFNLE9BQWdCLGVBQWU7SUFPbkMsWUFBc0IsSUFBb0I7UUFBcEIsU0FBSSxHQUFKLElBQUksQ0FBZ0I7UUFMbkMsa0JBQWEsR0FBRyxRQUFRLENBQUM7SUFLYSxDQUFDO0lBRTlDLFdBQVc7UUFDVCxJQUFJLElBQUksQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDbkMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ3BDO0lBQ0gsQ0FBQztJQUVTLFNBQVMsQ0FBQyxDQUFTO1FBQzNCLElBQUksSUFBSSxDQUFDLElBQUksRUFBRTtZQUNiLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUNqQztJQUNILENBQUM7Q0FDRjtBQWZDO0lBREMsS0FBSyxFQUFFO3FEQUNVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5wdXQsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU291cmNlIH0gZnJvbSAnb2wnO1xuXG5pbXBvcnQgeyBMYXllckNvbXBvbmVudCB9IGZyb20gJy4uL2xheWVycy9sYXllci5jb21wb25lbnQnO1xuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgU291cmNlQ29tcG9uZW50IGltcGxlbWVudHMgT25EZXN0cm95IHtcbiAgcHVibGljIGluc3RhbmNlOiBTb3VyY2U7XG4gIHB1YmxpYyBjb21wb25lbnRUeXBlID0gJ3NvdXJjZSc7XG5cbiAgQElucHV0KClcbiAgYXR0cmlidXRpb25zOiBhbnk7XG5cbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIGhvc3Q6IExheWVyQ29tcG9uZW50KSB7fVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIGlmICh0aGlzLmhvc3QgJiYgdGhpcy5ob3N0Lmluc3RhbmNlKSB7XG4gICAgICB0aGlzLmhvc3QuaW5zdGFuY2Uuc2V0U291cmNlKG51bGwpO1xuICAgIH1cbiAgfVxuXG4gIHByb3RlY3RlZCBfcmVnaXN0ZXIoczogU291cmNlKSB7XG4gICAgaWYgKHRoaXMuaG9zdCkge1xuICAgICAgdGhpcy5ob3N0Lmluc3RhbmNlLnNldFNvdXJjZShzKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==