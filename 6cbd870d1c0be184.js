(self["webpackChunk_canva_web"] = self["webpackChunk_canva_web"] || []).push([[9222],{

/***/ 26998:
function(_, __, __webpack_require__) {__webpack_require__.n_x = __webpack_require__.n;const __web_req__ = __webpack_require__;__web_req__(813110);__web_req__(955508);self._fe4d99ebe0d2d259646a80d250150d47 = self._fe4d99ebe0d2d259646a80d250150d47 || {};(function(__c) {var D=__c.D;var A=__c.A;
var tEb=function(a,b,c,d){c=new sEb(c,d);A(1===a.count(),"Only single widget root element is supported");a=a.first();A(null!=a&&"layout"===a.type,`Unexpected widget root found: ${null===a||void 0===a?void 0:a.type}`);c.v$(a,b)},vEb=function(a){return{...__c.pK,...G6,top:0,left:0,width:a.width,height:a.height,viewBox:{top:0,left:0,width:a.t$.width,height:a.t$.height},cb:a.cb.map(uEb)}},wEb=function(a){switch(a.wG){case 0:var b=__c.Oj.Pc().attrs({"font-size":a.fontSize,leading:a.lineHeight?1E3*a.lineHeight:
void 0,"text-align":a.textAlign||"start","font-weight":a.fontWeight,"font-family":a.fontFamily,"font-kerning":"normal","font-feature-liga":"on","font-feature-clig":"on","font-feature-calt":"on",direction:a.direction});a.color&&b.nh("color",a.color);b=b.ec(a.text.endsWith("\n")?a.text:`${a.text}\n`).build();var c;return{...__c.uN,...H6,...G6,Ia:null!==(c=a.Ia)&&void 0!==c?c:0,text:b,qg:2};case 1:return b=a.text,{...__c.uN,...H6,...G6,text:b,qg:2};default:throw new D(a);}},L6=function({content:a,fill:b,
border:c,V:d}){b={...__c.F_a,fill:I6(b),border:J6(c),V:K6(d)};switch(a.type){case "shape":return{...b,element:vEb(a)};case "text":return{...b,element:wEb(a)};case "layout":return{...b,element:xEb(a)};default:throw new D(a);}},xEb=function({cells:a,border:b,fill:c,V:d,gridTemplateColumns:e,gridTemplateRows:f,columnGap:g,rowGap:h}){return{...__c.G_a,...H6,...G6,F:H6.width,N:H6.height,fill:I6(c),border:J6(b),direction:1,V:K6(d),cells:new Map(a.map(k=>[k.id,L6(k)])),behavior:{rules:[{Rf:void 0,grid:{gridTemplateColumns:e,
gridTemplateRows:f,columnGap:null!==g&&void 0!==g?g:0,rowGap:null!==h&&void 0!==h?h:0,cg:yEb(a)}}]},gf:void 0}},yEb=function(a){return new Map(a.map(b=>[b.id,zEb(b)]))},zEb=function(a){const b=a.placement.padding;return{...__c.sE,...a.placement,alignSelf:"center",padding:{...__c.TS,...(null!=b?"number"===typeof b?{all:b}:b:{})}}},J6=function(a){var b;const c=null!==(b=null===a||void 0===a?void 0:a.color)&&void 0!==b?b:"#000000";var d;return{...__c.nE,all:a?{...__c.US,weight:null!==(d=a.weight)&&void 0!==
d?d:1,color:c,Bg:!0}:void 0}},K6=function(a){return{...__c.SS,...(null!=a?"number"===typeof a?{all:a}:a:{})}},uEb=function(a){return{...__c.qK,...a,fill:I6(a.fill),stroke:AEb(a.stroke)}},AEb=function(a){return a?{...__c.US,color:a.color,weight:a.weight}:void 0},I6=function(a){var b;const c={...__c.sK,Ia:null!==(b=null===a||void 0===a?void 0:a.Ia)&&void 0!==b?b:0};switch(null===a||void 0===a?void 0:a.type){case "color":return{...c,color:a.color};case "gradient":return{...c,bb:a.bb};case void 0:return c;
default:throw new D(a);}},GEb=function(a,b){const c=new Map(b.cells.map(e=>[e.id,e]));BEb(a.cells,c,(e,f)=>{let g=!1;CEb(e.element,f.content,()=>{a.cells.delete(f.id);a.cells.set(f.id,L6(f));g=!0});g||(M6(e.fill,f.fill),DEb(e.border,f.border),EEb(e.V,f.V))},e=>L6(e));FEb(a.behavior,b,c);M6(a.fill,b.fill);EEb(a.V,b.V);DEb(a.border,b.border);var d;a.Ia=null!==(d=b.Ia)&&void 0!==d?d:0},FEb=function(a,b,c){N6(a.rules,[b],d=>{HEb(d.grid.gridTemplateColumns,b.gridTemplateColumns)||(d.grid.gridTemplateColumns=
b.gridTemplateColumns);HEb(d.grid.gridTemplateRows,b.gridTemplateRows)||(d.grid.gridTemplateRows=b.gridTemplateRows);var e;d.grid.columnGap=null!==(e=b.columnGap)&&void 0!==e?e:0;var f;d.grid.rowGap=null!==(f=b.rowGap)&&void 0!==f?f:0;BEb(d.grid.cg,c,(g,h)=>{const k=h.placement.padding,l=h.placement.gridColumnEnd,m=h.placement.gridRowStart,n=h.placement.gridRowEnd,p=h.placement.alignSelf;g.gridColumnStart=h.placement.gridColumnStart;g.gridColumnEnd=l;g.gridRowStart=m;g.gridRowEnd=n;"number"===typeof k&&
g.padding.all!==k?g.padding.all=k:"number"!==typeof k&&(g.padding.ua=null===k||void 0===k?void 0:k.ua,g.padding.Ca=null===k||void 0===k?void 0:k.Ca,g.padding.qa=null===k||void 0===k?void 0:k.qa,g.padding.Ha=null===k||void 0===k?void 0:k.Ha);g.alignSelf=p},g=>zEb(g))},d=>{var e,f;return{Rf:void 0,grid:{gridTemplateColumns:b.gridTemplateColumns,gridTemplateRows:b.gridTemplateRows,columnGap:null!==(e=b.columnGap)&&void 0!==e?e:0,rowGap:null!==(f=b.rowGap)&&void 0!==f?f:0,cg:yEb(d.cells)}}})},IEb=function(a,
b){N6(a.cb,b.cb,(e,f)=>{e.d=f.d;M6(e.fill,f.fill);e.stroke.ref&&f.stroke?(e=e.stroke.ref,f=f.stroke,e.color=f.color,e.weight=f.weight):e.stroke.set(AEb(f.stroke))},e=>uEb(e));const {viewBox:c,width:d}=vEb(b);a.width=d;__c.ns(a.viewBox).equals(__c.ns(c))||(a.viewBox=c)},CEb=function(a,b,c){switch(b.type){case "shape":"shape"===a.type?IEb(a,b):c();break;case "text":"text"===a.type&&__c.Oj.domain.Mb(__c.Oj.ya(a.text),wEb(b).text)||c();break;case "layout":"layout"===a.type?GEb(a,b):c();break;default:throw new D(b);
}},BEb=function(a,b,c,d){const e=new Set(a.keys());for(const [f,g]of b)(b=a.get(f))?(e.delete(f),c(b,g)):a.set(f,d(g));e.forEach(f=>a.delete(f))},N6=function(a,b,c,d){const e=a.toArray();for(let f=0;f<Math.max(e.length,b.length);f++)if(f<e.length&&f<b.length)c(e[f],b[f]);else if(f<e.length&&f>=b.length)a.delete(e[f]);else if(f>=e.length&&f<b.length){const g=d(b[f]);a.append(g)}},M6=function(a,b){switch(null===b||void 0===b?void 0:b.type){case "color":a.color=b.color;a.bb.set(void 0);var c;a.Ia=null!==
(c=b.Ia)&&void 0!==c?c:0;break;case "gradient":if(a.bb.ref&&__c.HQa.domain.Mb(a.bb.ref,b.bb))break;a.color=void 0;a.bb.set(b.bb);var d;a.Ia=null!==(d=b.Ia)&&void 0!==d?d:0;break;default:a.color=void 0,a.bb.set(void 0)}},EEb=function(a,b){b=K6(b);a.all=b.all;a.CA=b.CA;a.AA=b.AA;a.BA=b.BA;a.zA=b.zA},DEb=function(a,b){b=J6(b).all;var c;if(c=b)c=a.all.ref,c=!(c&&b?__c.oE.domain.Mb(__c.oE.ya(c),b):!c&&!b);c&&a.all.set(b)},HEb=function(a,b){return a.length===b.length&&a.every(c=>b.includes(c))},KEb=function(a,
b,c,d){let e=a.oGa.get(b);if(e)return e;e={L1:new JEb(c.Dw,b,d,c.xha),Rsa:void 0,HBa:void 0,zCa:__c.dX.mode};a.oGa.set(b,e);return e},MEb=function(a,b,c,d,e){var f,g;e=KEb(a,c,b,e);const h=e.L1,k=e.HBa,l=e.Rsa,m=e.zCa;c=__c.hS.ya(c);const n=(null===(f=(g=a.nx).Dya)||void 0===f?void 0:f.call(g,d))||__c.dX;h.Dj===k&&LEb.structural(c,l)&&n.mode===m||(e.Rsa=c,e.HBa=h.Dj,e.zCa=n.mode,b=b.render(h,n),a.i1a.update(d,b),tEb(d,b,(p,q)=>a.tL.Kha.set(p,q),(p,q,r)=>a.tL.refs.set(p,{ref:q,key:r})))},OEb=function(a,
b){return{cN:({Dk:c})=>{var d;const {L1:e}=KEb(a.renderer,c,b,a.YV),f=__c.kS.create([]),g=[];g.push(NEb(()=>{var k,l;return[null===(k=(l=a.nx).Dya)||void 0===k?void 0:k.call(l,f),__c.hS.ya(c),e.Dj]},()=>{MEb(a.renderer,b,c,f,a.YV)},{fireImmediately:!0,equals:LEb.structural}));const h=null===(d=b.qW)||void 0===d?void 0:d.call(b,{L1:e});h&&g.push(h);return{hb:f,Kr:()=>{g.forEach(k=>k())}}}}},QEb=function(a,b){let c=a.z_.get(b);c||(c=PEb("weakKey"),a.z_.set(b,c));c.reportObserved()},O6=__webpack_require__(42782),
LEb=O6.p6,REb=O6.Fl,PEb=O6.cp,P6=O6.LO,NEb=O6.U5;var SEb=class{static j(a){__c.P(a,{y3a:P6.ref,qW:P6.ref})}constructor(){SEb.j(this)}};var TEb=class{constructor(){this.sources=new WeakMap}},JEb=class{static j(a){__c.P(a,{ij:REb})}get IBa(){var a=this.YV,b=this.Dk,c=this.xha;let d=a.sources.get(b);d||(d=P6.box(c),a.sources.set(b,d));return d}get Dj(){return this.IBa.get()}get ij(){return this.Dw.ns({type:"dict",value:this.Dk})}jq(a){this.IBa.set(a instanceof Function?{...this.Dj,...a()}:{...this.Dj,...a})}constructor(a,b,c,d){JEb.j(this);this.Dw=a;this.Dk=b;this.YV=c;this.xha=d}};var sEb=class{EZ(a,b){this.hGa(a,b);b.ref&&this.oma(a,b.ref,b.key)}x$(a,b){b.ref&&this.oma(a.text,b.ref,b.key)}fqa(a,b){switch(b.content.type){case "shape":A("shape"===a.element.type);this.EZ(a.element,b.content);break;case "text":A("text"===a.element.type);this.x$(a.element,b.content);break;case "layout":A("layout"===a.element.type);this.v$(a.element,b.content);break;default:throw new D(b.content);}}v$(a,b){this.hGa(a,b);b.ref&&this.oma(a,b.ref,b.key);for(const [c,d]of a.cells)a=b.cells.find(e=>
e.id===c),A(!!d&&!!a),this.fqa(d,a)}constructor(a,b){this.hGa=a;this.oma=b}};var G6={locked:!0,Bp:{Jda:!1,v9:!1},zi:!0},H6={top:0,left:0,width:1,height:1};var UEb=class{constructor(a){this.tm=a;this.update=(b,c)=>{N6(b,[c],(d,e)=>{switch(d.type){case "layout":GEb(d,e);break;default:throw Error(`Not supported element type: ${d.type}`);}},d=>{a:switch(d.type){case "layout":d={...xEb(d),width:d.minWidth,height:d.minHeight,F:d.minWidth,N:d.minHeight,locked:!1,zi:!1,Bp:void 0};break a;default:throw new D(d.type);}return d});for(const d of b)A("layout"===d.type),d.width=c.minWidth,d.height=c.minHeight,d.F=c.minWidth,d.N=c.minHeight,c.direction&&(d.direction=
c.direction),this.tm.mma(d)}}};var VEb=class{constructor(a,b,c){this.i1a=a;this.tL=b;this.nx=c;this.oGa=new WeakMap}};var WEb=!1,XEb=class{register(a,b){this.JA.has(a)||(this.JA.set(a,b),WEb||(__c.jS.set(a,OEb(this,b)),WEb=!0))}get(a){return this.JA.get(a)}constructor(a,b,c){this.renderer=a;this.YV=b;this.nx=c;this.JA=new Map}};var YEb=class{delete(a){var b;const c=this.map.delete(a);c&&(null===(b=this.z_.get(a))||void 0===b?void 0:b.reportChanged());return c}get(a){QEb(this,a);return this.map.get(a)}has(a){QEb(this,a);return this.map.has(a)}set(a,b){if(!this.map.has(a)||this.map.get(a)!==b){var c;this.map.set(a,b);null===(c=this.z_.get(a))||void 0===c?void 0:c.reportChanged()}return this}constructor(){this.z_=new WeakMap;this.map=new WeakMap}};var ZEb=class{constructor(){this.Kha=new YEb;this.refs=new YEb}},$Eb=class{getContext(a){return this.tL.refs.get(a)}EI(a){return this.tL.Kha.get(a)}constructor(a,b,c){this.tL=a;this.YV=b;this.renderer=c}};__c.Owa={mZa:function(a){const b=new SEb;switch(a.Zc){case "fixed":const c=new ZEb;a=new VEb(new UEb(a.tm),c,b);const d=new TEb;return{nx:b,ktb:new $Eb(c,d,a),H$a:new XEb(a,d,b),tL:c};case "responsive":throw Error("Not implemented");default:throw new D(a);}}};
}).call(self, self._fe4d99ebe0d2d259646a80d250150d47);}

}])
//# sourceMappingURL=sourcemaps/6cbd870d1c0be184.js.map