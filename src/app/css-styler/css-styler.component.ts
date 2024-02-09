import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, signal } from '@angular/core';
import { CssStyle, defaultStyle } from '../data';
import { outputAst } from '@angular/compiler';

@Component({
  selector: 'app-css-styler',
  templateUrl: './css-styler.component.html',
  styleUrls: ['./css-styler.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CssStylerComponent {

  @Input() cssStyle: CssStyle = defaultStyle;
  @Output() cssStyleChange = new EventEmitter<CssStyle>();

  public update(u : Partial<CssStyle>):void {

    this.cssStyleChange.emit({...this.cssStyle, ...u});
  }
}
