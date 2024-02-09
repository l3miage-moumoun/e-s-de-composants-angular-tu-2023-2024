import { ChangeDetectionStrategy, Component, Input, computed, signal } from '@angular/core';
import { CssStyle, defaultStyle } from './data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  private readonly _sigRacine = signal<CssStyle>(defaultStyle);
  public readonly sigRacine = computed<CssStyle>( () => this._sigRacine() );

  updateCssStyle(css: CssStyle): void {
    this._sigRacine.set(css);
  }
  
  essaiChange() {
    this._sigRacine.set({
      backgroundColor: "#ff0000",
      borderColor: "#aaaaaa",
      borderRadius: "50%"
    })
  }
}
