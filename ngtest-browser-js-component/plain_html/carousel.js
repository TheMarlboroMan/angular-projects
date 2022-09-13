
//TODO: Check config types.

function djs_simple_carousel() {

	let item=function(src, txt, cb) {

		let _src=src, _txt=txt || null;
		let _divnode=null, _imgnode=null, _spannode=null;

		//Callbacks...
		let signal_load=() => {cb(this, src);};
		let signal_error=() => {cb(null, src);};
		let signal_end_transition=(ev) => {
			if(ev.target.classList.contains(_classnames.itemwayout)) this.set_idle();
			else if(ev.target.classList.contains(_classnames.itemactive)) this.set_active();
		};
			
		let create_nodes=() => {
			_divnode=create_dom('div', _classnames.item);
			_divnode.addEventListener("transitionend", signal_end_transition);

			_imgnode=create_dom('img', null);
			_imgnode.addEventListener("load", signal_load);
			_imgnode.addEventListener("error", signal_error);
			_imgnode.src=src;
			_divnode.appendChild(_imgnode);

			if(txt) {
				_spannode=create_dom('span', null);
				_spannode.innerHTML=txt;
				_divnode.appendChild(_spannode);
			}
		}

		this.append=function(node) {
			if(_divnode.parentNode) _divnode.parentNode.removeChild(_divnode);
			node.appendChild(_divnode);
		}

		this.destroy=function() {
			_imgnode.removeEventListener("load", loadcb);
			_imgnode.removeEventListener("error", errorcb);
			_divnode.removeEventListener("transitionend", signal_end_transition);
			_divnode.parentNode.removeChild(_divnode);
			delete(_divnode);
			delete(_imgnode);
			if(_spannode) delete(_spannode);
		}

		this.set_idle=function() {
			_divnode.classList.add(_classnames.itemidle); 
			_divnode.classList.remove(_classnames.itemactive, _classnames.itemtransit, _classnames.itemwayout);
		}

		this.set_active=function() {
			_divnode.classList.add(_classnames.itemactive); 
			_divnode.classList.remove(_classnames.itemidle, _classnames.itemtransit, _classnames.itemwayout);
		}

		this.set_out=function() {
			_divnode.classList.add(_classnames.itemtransit, _classnames.itemwayout);
			_divnode.classList.remove(_classnames.itemactive, _classnames.itemidle); 
		}

		this.set_in=function() {
			_divnode.classList.add(_classnames.itemtransit, _classnames.itemactive);
			_divnode.classList.remove(_classnames.itemidle, _classnames.itemwayout);
		}

		create_nodes();
	}

	let create_dom=(tag, classname) => {
		let item=document.createElement(tag);
		item.classList.add(classname);
		return item;
	}

	let _classnames={
		'container' : 'djs-simple-carousel-container',
		'frame' : 'djs-simple-carousel-frame',
		'limbo' : 'djs-simple-carousel-limbo',
		'item' : 'djs-simple-carousel-item',
		'itemactive' : 'djs-simple-carousel-active',
		'itemidle': 'djs-simple-carousel-idle',
		'itemwayout': 'djs-simple-carousel-wayout',
		'itemtransit': 'djs-simple-carousel-in-transit',
		'loader': 'djs-simple-carousel-loader'
	};

	let _container=null, _frame=null, _limbo=null, _loader=null;
	let _loadedcount=0, _totalcount=0;
	let _items=[];
	let _currentitem=0;
	let _config={delay: 5000, largepics: false, width: 400, height: 200};
	let _timeout=null;

	this.error=function(msg){
		console.error(msg);
		throw new Error(msg);
	}

	let set_config_data=function(vkey, data) {vkey.forEach((key) => {_config[key]=data.hasOwnProperty(key) ? data[key] : _config[key];});}

	this.init=function(rootelem, data) {

		let image_load_callback=(item, src) => {
			if(!item) this.error("The image "+src+" failed");
			
			item.append(_config.largepics ? _limbo : _frame); //Pictures are "displayed" in the Limbo so the browser can get their size...
			++_loadedcount
			if(_loadedcount == _totalcount) finish_init();
		}

		let finish_init=() => {
			_items.forEach((val) => {if(_config.largepics) val.append(_frame); val.set_idle();});
			_items[0].set_active();
			_container.removeChild(_loader);
			_container.removeChild(_limbo);
			_container.appendChild(_frame);
			this.start();
		}

		if(!rootelem) this.error("djs-simple-carousel: no root element");
		if(!data || !this.validate_init_data(data)) this.error("djs-simple-carousel: invalid init data");

		_container=create_dom('div', _classnames.container);
		_frame=create_dom('div', _classnames.frame);
		_frame.style.width=_config.width+'px';
		_frame.style.height=_config.height+'px';
		_limbo=create_dom('div', _classnames.limbo);

		_loader=create_dom('img', _classnames.loader);
		_loader.src="loader.gif";

		_container.appendChild(_loader);
		_container.appendChild(_limbo);
		rootelem.appendChild(_container);

		set_config_data(['delay', 'largepics', 'width', 'height'], data);

		_totalcount=data.pics.length;
		data.pics.forEach((val) => {_items.push(new item(val.src, val.txt, image_load_callback));});
	}

	this.validate_init_data=function(data) {
		if(typeof data != 'object' ) return false;
		if(!data.hasOwnProperty('pics')) return false;
		if(!data.pics.every( (val) => val.hasOwnProperty('src'))) return false;
		return true;
	}

	this.start=function() {

		_timeout=setTimeout(() => {
			_items[_currentitem].set_out();
			_currentitem=_currentitem+1>=_totalcount ? 0 : _currentitem+1;
			_items[_currentitem].set_in();
			this.start();
		}, _config.delay);
	}

	this.stop=function() {
		clearTimeout(_timeout);
		_timeout=null;
	}

	this.is_started=function() {return _timeout!=null;}

	this.destroy=function() {
		_items.forEach((val) => {val.destroy(); delete val});
		_items.length=0;
	}
}
/*
let carousel=new djs_simple_carousel();
let data={
	delay:2000,
	largepics: true,  //Enable displaying in transparent dom limbo.
	width: 200, 
	height: 200,
	pics:[
		{src:'http://www.caballorenoir.net/undev/media/entradas/entrada_1.jpg', txt: 'Caption'},
		{src:'http://www.caballorenoir.net/undev/media/entradas/entrada_2.jpg', txt: 'Caption'},
		{src:'http://www.caballorenoir.net/undev/media/entradas/entrada_3.jpg', txt: 'Caption'},
		{src:'http://www.caballorenoir.net/undev/media/entradas/entrada_4.jpg', txt: 'Caption'},
		{src:'http://www.caballorenoir.net/undev/media/entradas/entrada_5.jpg', txt: 'Caption'},
		{src:'http://www.caballorenoir.net/undev/media/entradas/entrada_6.jpg', txt: 'Caption'},
		{src:'http://www.caballorenoir.net/undev/media/entradas/entrada_7.jpg', txt: 'Caption'},
		{src:'http://www.caballorenoir.net/undev/media/entradas/entrada_8.jpg', txt: 'Caption'}]
}

carousel.init(document.getElementById('container'), data);
function start() {if(!carousel.is_started()) carousel.start();}
function stop() {if(carousel.is_started()) carousel.stop();}
*/
