let develtool=function() {

	let node=null;
	let external_pack=null;

	let load_section=function(url) {
		var r=new XMLHttpRequest();
		r.onreadystatechange=function() {
			if(r.readyState=== XMLHttpRequest.DONE) {

				document.getElementById("main-content").innerHTML=r.response.getElementById("useless-container").innerHTML;

				let css=document.getElementById("css-public");
				let newcss=css.cloneNode(true);
				let pn=css.parentNode;
				pn.removeChild(css);
				pn.appendChild(newcss);

				if(external_pack) {
					external_pack.end();
				}
				
				let js=r.response.getElementById('javascript-import');
				//TODO: I hate this.
				if(js) {
					eval(js.innerHTML);
				}

				if(external_pack) {
					external_pack.begin();
				}

				external_pack=null;
			}
		}
		r.open("GET", url);
		r.responseType="document";
		r.send();
	};

	let toggle=function() {
		node.classList.toggle("away");
	}

	let createbutton=function(v, n) {
		let btn=document.createElement('input');
		btn.type='button';
		btn.value=v;
		if(n) n.appendChild(btn);
		return btn;
	}

	this.init=function(data) {
		node=document.createElement('div');
		node.classList.add('devel');
		let togglebtn=createbutton("x", node);
		togglebtn.onclick=() => {toggle();}
		
		data.forEach( (v) => {
			let btn=createbutton(v, node);
			btn.onclick=() => {load_section(v);};
		});

		document.body.appendChild(node);
	}

	this.register_js_pack=function(f) {
		if(f) external_pack=f;
	}
}
