import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	title = 'basic JS integration!';
	view_carousel:boolean=true;

	public	enable():void {this.view_carousel=true;}
	public	disable():void {this.view_carousel=false;}
}
