(this.webpackJsonptipsrunda=this.webpackJsonptipsrunda||[]).push([[0],{38:function(e,t,a){e.exports=a(72)},43:function(e,t,a){},44:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},45:function(e,t,a){},72:function(e,t,a){"use strict";a.r(t);var n,s,l=a(0),r=a.n(l),o=a(30),i=a.n(o),c=(a(43),a(44),a(45),a(74)),u=(a(46),a(31)),d=a(32),m=a(36),h=a(35),g=a(11),p=a.n(g),v=(a(47),a(33)),b=a(34),f=a(73),q=a(75),E=a(76),A=[],_=function(e){Object(m.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(u.a)(this,a),(n=t.call(this,e)).mySubmitHandler=function(e){e.preventDefault(),A.push(n.state.cur_selected);var t=n.state.cur_q+1;if(n.setState({cur_q:t}),t===n.state.questions.length){var a=0;A.forEach((function(e,t){parseInt(e)===n.state.correct[t]&&++a})),document.getElementById("infotext").innerHTML="Bra jobbat! <br/> Skicka f\xf6ljande kod samt svaret p\xe5 utslagsfr\xe5gan till Ekonomichefen s\xe5 blir hon glad. <br/> Kod: "+btoa(a)+"<br/> <br/>Utslagsfr\xe5ga: Hur l\xe5ng tid \xe4gnade Ekonomichefen p\xe5 att skapa tipsrundan? "}else s.setLatLng(n.state.questions[t].coords[n.state.cur_selected]),n.setState({cur_selected:null})},n.onValueChange=function(e){n.setState({cur_selected:e.target.value})},n.update=function(e){var t=Object(v.getDistance)({latitude:s._latlng.lat,longitude:s._latlng.lng},{latitude:e.latlng.lat,longitude:e.latlng.lng});n.setState({close:t<1e5})},n.state={questions:[{question:"Fr\xe5ga 1: hur m\xe5nga kvitton har ni l\xe4mnat in?",alternatives:["1:  20","X: 30","2: 40 "],coords:[[58.393402,15.571559]]},{question:"Fr\xe5ga 2: \xc4r Anna sn\xe4ll?",alternatives:["1:  Alltid","X: Ibland","2: Nope "],coords:[[58.395042,15.573374],[58.394588,15.573764],[58.394128,15.573791]]},{question:"Fr\xe5ga 3: \xc4r Anna sn\xe4ll?",alternatives:["1:  Alltid","X: Ibland","2: Nope "],coords:[[58.395263,15.575809],[58.394909,15.575895],[58.394454,15.576185]]},{question:"Fr\xe5ga 4: \xc4r Anna sn\xe4ll?",alternatives:["1:  Alltid","X: Ibland","2: Nope "],coords:[[58.395209,15.579323],[58.394753,15.58092],[58.394112,15.581162]]},{question:"Fr\xe5ga 5: \xc4r Anna sn\xe4ll?",alternatives:["1:  Alltid","X: Ibland","2: Nope "],coords:[[58.397357,15.584412],[58.397957,15.585718],[58.398288,15.585109]]},{question:"Fr\xe5ga 6: \xc4r Anna sn\xe4ll?",alternatives:["1:  Alltid","X: Ibland","2: Nope "],coords:[[58.399052,15.58888],[58.39982,15.584758],[58.400277,15.584439]]},{question:"Fr\xe5ga 7: \xc4r Anna sn\xe4ll?",alternatives:["1:  Alltid","X: Ibland","2: Nope "],coords:[[58.400593,15.577492],[58.400473,15.57819],[58.400488,15.577109]]},{question:"Fr\xe5ga 8: \xc4r Anna sn\xe4ll?",alternatives:["1:  Alltid","X: Ibland","2: Nope "],coords:[[58.399805,15.572748],[58.399723,15.573215],[58.400095,15.573402]]},{question:"Fr\xe5ga 9: \xc4r Anna sn\xe4ll?",alternatives:["1:  Alltid","X: Ibland","2: Nope "],coords:[[58.396961,15.57265],[58.396708,15.573321],[58.396997,15.573738]]},{question:"Fr\xe5ga 10: \xc4r Anna sn\xe4ll?",alternatives:["1:  Alltid","X: Ibland","2: Nope "],coords:[[58.393476,15.569286],[58.393386,15.570079],[58.39322,15.568755]]}],cur_q:0,close:!0,cur_selected:null,correct:[0,0,0,0,0,0,0,0,0,0]},n}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=this;n=p.a.map("map",{center:[58.393709,15.571049],zoom:14,layers:[p.a.tileLayer("https://{s}.basemaps.cartocdn.com/rastertiles/voyager_labels_under/{z}/{x}/{y}.png",{attribution:"Antique"})]}),s=p.a.marker(this.state.questions[this.state.cur_q].coords[0]).addTo(n);var t=new p.a.Control.Gps({autoActive:!0,autoCenter:!1});t.on("gps:located",(function(t){e.update(t)})).on("gps:disabled",(function(e){e.marker.closePopup()})),t.addTo(n),t.activate()}},{key:"render",value:function(){return r.a.createElement(b.a,null,r.a.createElement(f.a,null,r.a.createElement("div",{id:"map",style:{width:"100vw",height:"100vw"}})),r.a.createElement(f.a,{className:"p-2"},r.a.createElement(b.a,{sm:12},!this.state.cur_q<this.state.questions.length&&r.a.createElement("h4",{id:"infotext"})),!this.state.close&&r.a.createElement("h1",null,"G\xe5 till n\xe4sta fr\xe5ga"),this.state.close&&this.state.cur_q<this.state.questions.length&&r.a.createElement(b.a,null,r.a.createElement("h3",null,this.state.questions[this.state.cur_q].question),r.a.createElement("h3",null,r.a.createElement(q.a,{onSubmit:this.mySubmitHandler},r.a.createElement("fieldset",null,r.a.createElement(q.a.Group,{as:f.a},r.a.createElement(b.a,{sm:10},r.a.createElement(q.a.Check,{type:"radio",label:this.state.questions[this.state.cur_q].alternatives[0],name:"Radios",id:"Radios1",value:0,onChange:this.onValueChange}),r.a.createElement(q.a.Check,{type:"radio",label:this.state.questions[this.state.cur_q].alternatives[1],name:"Radios",id:"Radios2",value:1,onChange:this.onValueChange}),r.a.createElement(q.a.Check,{type:"radio",label:this.state.questions[this.state.cur_q].alternatives[2],name:"Radios",id:"Radios3",value:2,onChange:this.onValueChange})))),this.state.cur_selected&&r.a.createElement(q.a.Group,{as:f.a},r.a.createElement(b.a,{sm:{span:10,offset:2}},r.a.createElement(E.a,{type:"submit"},"N\xe4sta"))))))))}}]),a}(r.a.Component);var k=function(){return r.a.createElement(c.a,{fluid:!0,className:"p-0 m-0"},r.a.createElement(_,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(k,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[38,1,2]]]);
//# sourceMappingURL=main.8adefe3b.chunk.js.map