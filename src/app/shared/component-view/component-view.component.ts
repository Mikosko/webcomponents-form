import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  HostBinding,
} from '@angular/core';

@Component({
  selector: 'app-component-view',
  templateUrl: './component-view.component.html',
  styleUrls: ['./component-view.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ComponentViewComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  @Input()
  public label!: string;

  @Input()
  public actions!: any[];

  @HostBinding('class.d-block')
  public isVisible = false;

  @HostBinding('class.d-none')
  public isHidden = true;

  @Input()
  public set visible(isVisible: boolean) {
    this.isVisible = isVisible;
    this.isHidden = !isVisible;
  }
}
