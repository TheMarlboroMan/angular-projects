import {Component, ElementRef, AfterContentInit, OnDestroy, HostBinding} from '@angular/core';

declare var djs_simple_carousel : any;

@Component({
	selector: 'app-public-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css'],
})
export class HomeComponent implements AfterContentInit, OnDestroy {

	private	carousel_instance=null;

	public	constructor(private el : ElementRef) {

	}

	public	ngAfterContentInit():void {

		let container=this.el.nativeElement.querySelector('div#carousel-container');
		this.carousel_instance=new djs_simple_carousel();
		let data={
			delay:4000, largepics: true, width: 800, height: 355, loader_image:"assets/loader.gif",
			pics:[
				{src:'assets/img/carousel/carousel-1.png', txt: '¡Cosas raras en platos metálicos!'},
				{src:'assets/img/carousel/carousel-2.png', txt: '¡Dieta carnívora!'},
				{src:'assets/img/carousel/carousel-3.png', txt: '¡También para aquellos que comen mucho naranja y verde!'},
				{src:'assets/img/carousel/carousel-4.png', txt: '¡Especias en Inglés sacadas de filemorgue!'}
			]
		};
		this.carousel_instance.init(container, data);
		this.carousel_instance.start();
	}

	public	ngOnDestroy():void {

		this.carousel_instance.destroy();
		delete this.carousel_instance;
	}
}
