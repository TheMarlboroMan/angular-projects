import {Component, ElementRef, AfterContentInit, OnDestroy} from '@angular/core';

declare var djs_simple_carousel : any;

@Component({
	selector: 'carousel',
	templateUrl: 'carousel.component.html'
})
export class CarouselComponent {

	private carousel_instance:any=null;

	public	constructor (private el : ElementRef) {

	}

	public	ngAfterContentInit():void {

		let container=this.el.nativeElement.querySelector('div#container');

		this.carousel_instance=new djs_simple_carousel();
		let data={
			delay:2000, largepics: true, width: 500, height: 100, loader_image:"assets/loader.gif",
			pics:[
				{src:'http://www.caballorenoir.net/undev/media/entradas/entrada_1.jpg', txt: 'Caption'},
				{src:'http://www.caballorenoir.net/undev/media/entradas/entrada_2.jpg', txt: 'Caption'},
				{src:'http://www.caballorenoir.net/undev/media/entradas/entrada_3.jpg', txt: 'Caption'},
				{src:'http://www.caballorenoir.net/undev/media/entradas/entrada_4.jpg', txt: 'Caption'},
				{src:'http://www.caballorenoir.net/undev/media/entradas/entrada_5.jpg', txt: 'Caption'},
				{src:'http://www.caballorenoir.net/undev/media/entradas/entrada_6.jpg', txt: 'Caption'},
				{src:'http://www.caballorenoir.net/undev/media/entradas/entrada_7.jpg', txt: 'Caption'},
				{src:'http://www.caballorenoir.net/undev/media/entradas/entrada_8.jpg', txt: 'Caption'}]
		};
		this.carousel_instance.init(container, data);
	}

	public	start():void {
		if(!this.carousel_instance.is_started()) this.carousel_instance.start();
	}

	public	stop():void {
		if(this.carousel_instance.is_started()) this.carousel_instance.stop();
	}

	public	ngOnDestroy():void {
		this.carousel_instance.destroy();
		delete this.carousel_instance;
	}
}
