import { ChangeDetectionStrategy, Component, Input, signal } from '@angular/core';
import { CssStyle, defaultStyle } from './data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  public readonly _sigRacine = signal<CssStyle>(defaultStyle);
  /*public cssStylerComponent : CssStylerComponent = {cssStyle : this._sigRacine()} */

  @Input()
    get style(): CssStyle { return this._sigRacine() }

  essaiChange() {
    this._sigRacine.set({
      backgroundColor: "#ff0000",
      borderColor: "#aaaaaa",
      borderRadius: "50%"
    })
  }
}
