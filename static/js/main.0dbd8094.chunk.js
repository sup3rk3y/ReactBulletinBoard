(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{12:function(e,t,n){e.exports=n(19)},18:function(e,t,n){},19:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),o=n(9),r=n.n(o),c=(n(18),n(10)),s=n(11),l=n(3),u=n(4),d=n(6),h=n(5),m=n(7),b=n(1),p=n(2),v=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(d.a)(this,Object(h.a)(t).call(this))).state={editing:!1},n.edit=n.edit.bind(Object(b.a)(Object(b.a)(n))),n.remove=n.remove.bind(Object(b.a)(Object(b.a)(n))),n.save=n.save.bind(Object(b.a)(Object(b.a)(n))),n.renderForm=n.renderForm.bind(Object(b.a)(Object(b.a)(n))),n.renderDisplay=n.renderDisplay.bind(Object(b.a)(Object(b.a)(n))),n.randomPlacement=n.randomPlacement.bind(Object(b.a)(Object(b.a)(n))),n}return Object(m.a)(t,e),Object(u.a)(t,[{key:"componentWillMount",value:function(){this.style={right:this.randomPlacement(0,window.innerWidth-150,"px"),top:this.randomPlacement(0,window.innerHeight-150,"px"),transform:"rotate(".concat(this.randomPlacement(-25,25,"deg"),")")}}},{key:"randomPlacement",value:function(e,t,n){return e+Math.ceil(Math.random()*(t-e))+n}},{key:"shouldComponentUpdate",value:function(e,t){return this.props.children!==e.children||this.state!==t}},{key:"componentDidUpdate",value:function(){var e;this.state.editing&&((e=this._newText).focus(),e.select())}},{key:"edit",value:function(){this.setState({editing:!0})}},{key:"remove",value:function(){this.props.onRemove(this.props.index)}},{key:"save",value:function(e){e.preventDefault(),this.props.onChange(this._newText.value,this.props.index),this.setState({editing:!1})}},{key:"renderForm",value:function(){var e=this;return i.a.createElement("div",{className:"note",style:this.style},i.a.createElement("form",{onSubmit:this.save},i.a.createElement("textarea",{ref:function(t){return e._newText=t},defaultValue:this.props.children}),i.a.createElement("button",{id:"save"},i.a.createElement(p.c,null))))}},{key:"renderDisplay",value:function(){return i.a.createElement("div",{className:"note",style:this.style},i.a.createElement("p",null,this.props.children),i.a.createElement("span",null,i.a.createElement("button",{onClick:this.edit,id:"edit"},i.a.createElement(p.a,null)),i.a.createElement("button",{onClick:this.remove,id:"remove"},i.a.createElement(p.d,null))))}},{key:"render",value:function(){return this.state.editing?this.renderForm():this.renderDisplay()}}]),t}(i.a.Component),f=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(d.a)(this,Object(h.a)(t).call(this))).state={notes:[]},n.add=n.add.bind(Object(b.a)(Object(b.a)(n))),n.allNotes=n.allNotes.bind(Object(b.a)(Object(b.a)(n))),n.update=n.update.bind(Object(b.a)(Object(b.a)(n))),n.remove=n.remove.bind(Object(b.a)(Object(b.a)(n))),n.nextId=n.nextId.bind(Object(b.a)(Object(b.a)(n))),n}return Object(m.a)(t,e),Object(u.a)(t,[{key:"componentWillMount",value:function(){var e=this;this.props.count&&fetch("https://baconipsum.com/api/?type=all-meat&sentences=".concat(this.props.count)).then(function(e){return e.json()}).then(function(t){return t[0].split(". ").forEach(function(t){return e.add(t.substring(0,25))})})}},{key:"update",value:function(e,t){console.log(e," at ",t),this.setState(function(n){return{notes:n.notes.map(function(n){return n.id!==t?n:Object(s.a)({},n,{note:e})})}})}},{key:"add",value:function(e){var t=this;this.setState(function(n){return{notes:[].concat(Object(c.a)(n.notes),[{id:t.nextId(),note:e}])}})}},{key:"nextId",value:function(){return this.uniqueId=this.uniqueId||0,this.uniqueId++}},{key:"remove",value:function(e){console.log("remove item at :",e),this.setState(function(t){return{notes:t.notes.filter(function(t){return t.id!==e})}})}},{key:"allNotes",value:function(e,t){return i.a.createElement(v,{key:e.id,index:e.id,onChange:this.update,onRemove:this.remove},e.note)}},{key:"render",value:function(){return i.a.createElement("div",{className:"board"},this.state.notes.map(this.allNotes),i.a.createElement("button",{onClick:this.add.bind(null,"New Note"),id:"add"},i.a.createElement(p.b,null)))}}]),t}(i.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(i.a.createElement(f,{count:50}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[12,1,2]]]);
//# sourceMappingURL=main.0dbd8094.chunk.js.map