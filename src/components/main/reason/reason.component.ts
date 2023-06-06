import { Component, Input } from "@angular/core";

@Component({
  selector: 'reason-item',
  templateUrl: './reason.component.html',
  styleUrls: ['./reason.component.sass']
})
export class ReasonItem {
  @Input('reasonImageUrl') reasonImageUrl?: string;

  @Input('reasonTitle') reasonTitle?: string;

  @Input('reasonContent') reasonContent?: string;
}
