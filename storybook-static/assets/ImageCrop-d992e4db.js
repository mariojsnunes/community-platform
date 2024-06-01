import{j as X,F,a as f}from"./jsx-runtime-913be41c.js";import{r as D,R as p}from"./index-2506bfc3.js";import{B as z}from"./Button-aae6b698.js";import{L as W}from"./Loader-c5bf74cb.js";import{B as P,b as $,F as A}from"./theme-ui-components.esm-600c41e5.js";const S={x:0,y:0,width:0,height:0,unit:"px"},_=(h,e,t)=>Math.min(Math.max(h,e),t),j=(...h)=>h.filter(e=>e&&typeof e=="string").join(" "),B=(h,e)=>h===e||h.width===e.width&&h.height===e.height&&h.x===e.x&&h.y===e.y&&h.unit===e.unit;function q(h,e,t,r){const n=v(h,t,r);return h.width&&(n.height=n.width/e),h.height&&(n.width=n.height*e),n.y+n.height>r&&(n.height=r-n.y,n.width=n.height*e),n.x+n.width>t&&(n.width=t-n.x,n.height=n.width/e),h.unit==="%"?E(n,t,r):n}function V(h,e,t){const r=v(h,e,t);return r.x=(e-r.width)/2,r.y=(t-r.height)/2,h.unit==="%"?E(r,e,t):r}function E(h,e,t){return h.unit==="%"?{...S,...h,unit:"%"}:{unit:"%",x:h.x?h.x/e*100:0,y:h.y?h.y/t*100:0,width:h.width?h.width/e*100:0,height:h.height?h.height/t*100:0}}function v(h,e,t){return h.unit?h.unit==="px"?{...S,...h,unit:"px"}:{unit:"px",x:h.x?h.x*e/100:0,y:h.y?h.y*t/100:0,width:h.width?h.width*e/100:0,height:h.height?h.height*t/100:0}:{...S,...h,unit:"px"}}function K(h,e,t,r,n,i=0,s=0,w=r,o=n){const a={...h};let l=Math.min(i,r),g=Math.min(s,n),d=Math.min(w,r),c=Math.min(o,n);e&&(e>1?(l=s?s*e:l,g=l/e,d=w*e):(g=i?i/e:g,l=g*e,c=o/e)),a.y<0&&(a.height=Math.max(a.height+a.y,g),a.y=0),a.x<0&&(a.width=Math.max(a.width+a.x,l),a.x=0);const u=r-(a.x+a.width);u<0&&(a.x=Math.min(a.x,r-l),a.width+=u);const m=n-(a.y+a.height);if(m<0&&(a.y=Math.min(a.y,n-g),a.height+=m),a.width<l&&((t==="sw"||t=="nw")&&(a.x-=l-a.width),a.width=l),a.height<g&&((t==="nw"||t=="ne")&&(a.y-=g-a.height),a.height=g),a.width>d&&((t==="sw"||t=="nw")&&(a.x-=d-a.width),a.width=d),a.height>c&&((t==="nw"||t=="ne")&&(a.y-=c-a.height),a.height=c),e){const b=a.width/a.height;if(b<e){const C=Math.max(a.width/e,g);(t==="nw"||t=="ne")&&(a.y-=C-a.height),a.height=C}else if(b>e){const C=Math.max(a.height*e,l);(t==="sw"||t=="nw")&&(a.x-=C-a.width),a.width=C}}return a}function Q(h,e,t,r){const n={...h};return e==="ArrowLeft"?r==="nw"?(n.x-=t,n.y-=t,n.width+=t,n.height+=t):r==="w"?(n.x-=t,n.width+=t):r==="sw"?(n.x-=t,n.width+=t,n.height+=t):r==="ne"?(n.y+=t,n.width-=t,n.height-=t):r==="e"?n.width-=t:r==="se"&&(n.width-=t,n.height-=t):e==="ArrowRight"&&(r==="nw"?(n.x+=t,n.y+=t,n.width-=t,n.height-=t):r==="w"?(n.x+=t,n.width-=t):r==="sw"?(n.x+=t,n.width-=t,n.height-=t):r==="ne"?(n.y-=t,n.width+=t,n.height+=t):r==="e"?n.width+=t:r==="se"&&(n.width+=t,n.height+=t)),e==="ArrowUp"?r==="nw"?(n.x-=t,n.y-=t,n.width+=t,n.height+=t):r==="n"?(n.y-=t,n.height+=t):r==="ne"?(n.y-=t,n.width+=t,n.height+=t):r==="sw"?(n.x+=t,n.width-=t,n.height-=t):r==="s"?n.height-=t:r==="se"&&(n.width-=t,n.height-=t):e==="ArrowDown"&&(r==="nw"?(n.x+=t,n.y+=t,n.width-=t,n.height-=t):r==="n"?(n.y+=t,n.height-=t):r==="ne"?(n.y+=t,n.width-=t,n.height-=t):r==="sw"?(n.x-=t,n.width+=t,n.height+=t):r==="s"?n.height+=t:r==="se"&&(n.width+=t,n.height+=t)),n}const k={capture:!0,passive:!1};let G=0;const M=class y extends D.PureComponent{constructor(){super(...arguments),this.docMoveBound=!1,this.mouseDownOnCrop=!1,this.dragStarted=!1,this.evData={startClientX:0,startClientY:0,startCropX:0,startCropY:0,clientX:0,clientY:0,isResize:!0},this.componentRef=D.createRef(),this.mediaRef=D.createRef(),this.initChangeCalled=!1,this.instanceId=`rc-${G++}`,this.state={cropIsActive:!1,newCropIsBeingDrawn:!1},this.onCropPointerDown=e=>{const{crop:t,disabled:r}=this.props,n=this.getBox();if(!t)return;const i=v(t,n.width,n.height);if(r)return;e.cancelable&&e.preventDefault(),this.bindDocMove(),this.componentRef.current.focus({preventScroll:!0});const s=e.target.dataset.ord,w=!!s;let o=e.clientX,a=e.clientY,l=i.x,g=i.y;if(s){const d=e.clientX-n.x,c=e.clientY-n.y;let u=0,m=0;s==="ne"||s=="e"?(u=d-(i.x+i.width),m=c-i.y,l=i.x,g=i.y+i.height):s==="se"||s==="s"?(u=d-(i.x+i.width),m=c-(i.y+i.height),l=i.x,g=i.y):s==="sw"||s=="w"?(u=d-i.x,m=c-(i.y+i.height),l=i.x+i.width,g=i.y):(s==="nw"||s=="n")&&(u=d-i.x,m=c-i.y,l=i.x+i.width,g=i.y+i.height),o=l+n.x+u,a=g+n.y+m}this.evData={startClientX:o,startClientY:a,startCropX:l,startCropY:g,clientX:e.clientX,clientY:e.clientY,isResize:w,ord:s},this.mouseDownOnCrop=!0,this.setState({cropIsActive:!0})},this.onComponentPointerDown=e=>{const{crop:t,disabled:r,locked:n,keepSelection:i,onChange:s}=this.props,w=this.getBox();if(r||n||i&&t)return;e.cancelable&&e.preventDefault(),this.bindDocMove(),this.componentRef.current.focus({preventScroll:!0});const o=e.clientX-w.x,a=e.clientY-w.y,l={unit:"px",x:o,y:a,width:0,height:0};this.evData={startClientX:e.clientX,startClientY:e.clientY,startCropX:o,startCropY:a,clientX:e.clientX,clientY:e.clientY,isResize:!0},this.mouseDownOnCrop=!0,s(v(l,w.width,w.height),E(l,w.width,w.height)),this.setState({cropIsActive:!0,newCropIsBeingDrawn:!0})},this.onDocPointerMove=e=>{const{crop:t,disabled:r,onChange:n,onDragStart:i}=this.props,s=this.getBox();if(r||!t||!this.mouseDownOnCrop)return;e.cancelable&&e.preventDefault(),this.dragStarted||(this.dragStarted=!0,i&&i(e));const{evData:w}=this;w.clientX=e.clientX,w.clientY=e.clientY;let o;w.isResize?o=this.resizeCrop():o=this.dragCrop(),B(t,o)||n(v(o,s.width,s.height),E(o,s.width,s.height))},this.onComponentKeyDown=e=>{const{crop:t,disabled:r,onChange:n,onComplete:i}=this.props;if(r)return;const s=e.key;let w=!1;if(!t)return;const o=this.getBox(),a=this.makePixelCrop(o),l=(navigator.platform.match("Mac")?e.metaKey:e.ctrlKey)?y.nudgeStepLarge:e.shiftKey?y.nudgeStepMedium:y.nudgeStep;if(s==="ArrowLeft"?(a.x-=l,w=!0):s==="ArrowRight"?(a.x+=l,w=!0):s==="ArrowUp"?(a.y-=l,w=!0):s==="ArrowDown"&&(a.y+=l,w=!0),w){e.cancelable&&e.preventDefault(),a.x=_(a.x,0,o.width-a.width),a.y=_(a.y,0,o.height-a.height);const g=v(a,o.width,o.height),d=E(a,o.width,o.height);n(g,d),i&&i(g,d)}},this.onHandlerKeyDown=(e,t)=>{const{aspect:r=0,crop:n,disabled:i,minWidth:s=0,minHeight:w=0,maxWidth:o,maxHeight:a,onChange:l,onComplete:g}=this.props,d=this.getBox();if(i||!n)return;if(e.key==="ArrowUp"||e.key==="ArrowDown"||e.key==="ArrowLeft"||e.key==="ArrowRight")e.stopPropagation(),e.preventDefault();else return;const c=(navigator.platform.match("Mac")?e.metaKey:e.ctrlKey)?y.nudgeStepLarge:e.shiftKey?y.nudgeStepMedium:y.nudgeStep,u=v(n,d.width,d.height),m=Q(u,e.key,c,t),b=K(m,r,t,d.width,d.height,s,w,o,a);if(!B(n,b)){const C=E(b,d.width,d.height);l(b,C),g&&g(b,C)}},this.onDocPointerDone=e=>{const{crop:t,disabled:r,onComplete:n,onDragEnd:i}=this.props,s=this.getBox();this.unbindDocMove(),!(r||!t)&&this.mouseDownOnCrop&&(this.mouseDownOnCrop=!1,this.dragStarted=!1,i&&i(e),n&&n(v(t,s.width,s.height),E(t,s.width,s.height)),this.setState({cropIsActive:!1,newCropIsBeingDrawn:!1}))},this.onDragFocus=()=>{var e;(e=this.componentRef.current)==null||e.scrollTo(0,0)}}get document(){return document}getBox(){const e=this.mediaRef.current;if(!e)return{x:0,y:0,width:0,height:0};const{x:t,y:r,width:n,height:i}=e.getBoundingClientRect();return{x:t,y:r,width:n,height:i}}componentDidUpdate(e){const{crop:t,onComplete:r}=this.props;if(r&&!e.crop&&t){const{width:n,height:i}=this.getBox();n&&i&&r(v(t,n,i),E(t,n,i))}}componentWillUnmount(){this.resizeObserver&&this.resizeObserver.disconnect()}bindDocMove(){this.docMoveBound||(this.document.addEventListener("pointermove",this.onDocPointerMove,k),this.document.addEventListener("pointerup",this.onDocPointerDone,k),this.document.addEventListener("pointercancel",this.onDocPointerDone,k),this.docMoveBound=!0)}unbindDocMove(){this.docMoveBound&&(this.document.removeEventListener("pointermove",this.onDocPointerMove,k),this.document.removeEventListener("pointerup",this.onDocPointerDone,k),this.document.removeEventListener("pointercancel",this.onDocPointerDone,k),this.docMoveBound=!1)}getCropStyle(){const{crop:e}=this.props;if(e)return{top:`${e.y}${e.unit}`,left:`${e.x}${e.unit}`,width:`${e.width}${e.unit}`,height:`${e.height}${e.unit}`}}dragCrop(){const{evData:e}=this,t=this.getBox(),r=this.makePixelCrop(t),n=e.clientX-e.startClientX,i=e.clientY-e.startClientY;return r.x=_(e.startCropX+n,0,t.width-r.width),r.y=_(e.startCropY+i,0,t.height-r.height),r}getPointRegion(e,t,r,n){const{evData:i}=this,s=i.clientX-e.x,w=i.clientY-e.y;let o;n&&t?o=t==="nw"||t==="n"||t==="ne":o=w<i.startCropY;let a;return r&&t?a=t==="nw"||t==="w"||t==="sw":a=s<i.startCropX,a?o?"nw":"sw":o?"ne":"se"}resolveMinDimensions(e,t,r=0,n=0){const i=Math.min(r,e.width),s=Math.min(n,e.height);return!t||!i&&!s?[i,s]:t>1?i?[i,i/t]:[s*t,s]:s?[s*t,s]:[i,i/t]}resizeCrop(){const{evData:e}=this,{aspect:t=0,maxWidth:r,maxHeight:n}=this.props,i=this.getBox(),[s,w]=this.resolveMinDimensions(i,t,this.props.minWidth,this.props.minHeight);let o=this.makePixelCrop(i);const a=this.getPointRegion(i,e.ord,s,w),l=e.ord||a;let g=e.clientX-e.startClientX,d=e.clientY-e.startClientY;(s&&l==="nw"||l==="w"||l==="sw")&&(g=Math.min(g,-s)),(w&&l==="nw"||l==="n"||l==="ne")&&(d=Math.min(d,-w));const c={unit:"px",x:0,y:0,width:0,height:0};a==="ne"?(c.x=e.startCropX,c.width=g,t?(c.height=c.width/t,c.y=e.startCropY-c.height):(c.height=Math.abs(d),c.y=e.startCropY-c.height)):a==="se"?(c.x=e.startCropX,c.y=e.startCropY,c.width=g,t?c.height=c.width/t:c.height=d):a==="sw"?(c.x=e.startCropX+g,c.y=e.startCropY,c.width=Math.abs(g),t?c.height=c.width/t:c.height=d):a==="nw"&&(c.x=e.startCropX+g,c.width=Math.abs(g),t?(c.height=c.width/t,c.y=e.startCropY-c.height):(c.height=Math.abs(d),c.y=e.startCropY+d));const u=K(c,t,a,i.width,i.height,s,w,r,n);return t||y.xyOrds.indexOf(l)>-1?o=u:y.xOrds.indexOf(l)>-1?(o.x=u.x,o.width=u.width):y.yOrds.indexOf(l)>-1&&(o.y=u.y,o.height=u.height),o.x=_(o.x,0,i.width-o.width),o.y=_(o.y,0,i.height-o.height),o}renderCropSelection(){const{ariaLabels:e=y.defaultProps.ariaLabels,disabled:t,locked:r,renderSelectionAddon:n,ruleOfThirds:i,crop:s}=this.props,w=this.getCropStyle();if(s)return p.createElement("div",{style:w,className:"ReactCrop__crop-selection",onPointerDown:this.onCropPointerDown,"aria-label":e.cropArea,tabIndex:0,onKeyDown:this.onComponentKeyDown,role:"group"},!t&&!r&&p.createElement("div",{className:"ReactCrop__drag-elements",onFocus:this.onDragFocus},p.createElement("div",{className:"ReactCrop__drag-bar ord-n","data-ord":"n"}),p.createElement("div",{className:"ReactCrop__drag-bar ord-e","data-ord":"e"}),p.createElement("div",{className:"ReactCrop__drag-bar ord-s","data-ord":"s"}),p.createElement("div",{className:"ReactCrop__drag-bar ord-w","data-ord":"w"}),p.createElement("div",{className:"ReactCrop__drag-handle ord-nw","data-ord":"nw",tabIndex:0,"aria-label":e.nwDragHandle,onKeyDown:o=>this.onHandlerKeyDown(o,"nw"),role:"button"}),p.createElement("div",{className:"ReactCrop__drag-handle ord-n","data-ord":"n",tabIndex:0,"aria-label":e.nDragHandle,onKeyDown:o=>this.onHandlerKeyDown(o,"n"),role:"button"}),p.createElement("div",{className:"ReactCrop__drag-handle ord-ne","data-ord":"ne",tabIndex:0,"aria-label":e.neDragHandle,onKeyDown:o=>this.onHandlerKeyDown(o,"ne"),role:"button"}),p.createElement("div",{className:"ReactCrop__drag-handle ord-e","data-ord":"e",tabIndex:0,"aria-label":e.eDragHandle,onKeyDown:o=>this.onHandlerKeyDown(o,"e"),role:"button"}),p.createElement("div",{className:"ReactCrop__drag-handle ord-se","data-ord":"se",tabIndex:0,"aria-label":e.seDragHandle,onKeyDown:o=>this.onHandlerKeyDown(o,"se"),role:"button"}),p.createElement("div",{className:"ReactCrop__drag-handle ord-s","data-ord":"s",tabIndex:0,"aria-label":e.sDragHandle,onKeyDown:o=>this.onHandlerKeyDown(o,"s"),role:"button"}),p.createElement("div",{className:"ReactCrop__drag-handle ord-sw","data-ord":"sw",tabIndex:0,"aria-label":e.swDragHandle,onKeyDown:o=>this.onHandlerKeyDown(o,"sw"),role:"button"}),p.createElement("div",{className:"ReactCrop__drag-handle ord-w","data-ord":"w",tabIndex:0,"aria-label":e.wDragHandle,onKeyDown:o=>this.onHandlerKeyDown(o,"w"),role:"button"})),n&&p.createElement("div",{className:"ReactCrop__selection-addon",onPointerDown:o=>o.stopPropagation()},n(this.state)),i&&p.createElement(p.Fragment,null,p.createElement("div",{className:"ReactCrop__rule-of-thirds-hz"}),p.createElement("div",{className:"ReactCrop__rule-of-thirds-vt"})))}makePixelCrop(e){const t={...S,...this.props.crop||{}};return v(t,e.width,e.height)}render(){const{aspect:e,children:t,circularCrop:r,className:n,crop:i,disabled:s,locked:w,style:o,ruleOfThirds:a}=this.props,{cropIsActive:l,newCropIsBeingDrawn:g}=this.state,d=i?this.renderCropSelection():null,c=j("ReactCrop",n,l&&"ReactCrop--active",s&&"ReactCrop--disabled",w&&"ReactCrop--locked",g&&"ReactCrop--new-crop",i&&e&&"ReactCrop--fixed-aspect",i&&r&&"ReactCrop--circular-crop",i&&a&&"ReactCrop--rule-of-thirds",!this.dragStarted&&i&&!i.width&&!i.height&&"ReactCrop--invisible-crop",r&&"ReactCrop--no-animate");return p.createElement("div",{ref:this.componentRef,className:c,style:o},p.createElement("div",{ref:this.mediaRef,className:"ReactCrop__child-wrapper",onPointerDown:this.onComponentPointerDown},t),i?p.createElement("svg",{className:"ReactCrop__crop-mask",width:"100%",height:"100%"},p.createElement("defs",null,p.createElement("mask",{id:`hole-${this.instanceId}`},p.createElement("rect",{width:"100%",height:"100%",fill:"white"}),r?p.createElement("ellipse",{cx:`${i.x+i.width/2}${i.unit}`,cy:`${i.y+i.height/2}${i.unit}`,rx:`${i.width/2}${i.unit}`,ry:`${i.height/2}${i.unit}`,fill:"black"}):p.createElement("rect",{x:`${i.x}${i.unit}`,y:`${i.y}${i.unit}`,width:`${i.width}${i.unit}`,height:`${i.height}${i.unit}`,fill:"black"}))),p.createElement("rect",{fill:"black",fillOpacity:.5,width:"100%",height:"100%",mask:`url(#hole-${this.instanceId})`})):void 0,d)}};M.xOrds=["e","w"],M.yOrds=["n","s"],M.xyOrds=["nw","ne","se","sw"],M.nudgeStep=1,M.nudgeStepMedium=10,M.nudgeStepLarge=100,M.defaultProps={ariaLabels:{cropArea:"Use the arrow keys to move the crop selection area",nwDragHandle:"Use the arrow keys to move the north west drag handle to change the crop selection area",nDragHandle:"Use the up and down arrow keys to move the north drag handle to change the crop selection area",neDragHandle:"Use the arrow keys to move the north east drag handle to change the crop selection area",eDragHandle:"Use the up and down arrow keys to move the east drag handle to change the crop selection area",seDragHandle:"Use the arrow keys to move the south east drag handle to change the crop selection area",sDragHandle:"Use the up and down arrow keys to move the south drag handle to change the crop selection area",swDragHandle:"Use the arrow keys to move the south west drag handle to change the crop selection area",wDragHandle:"Use the up and down arrow keys to move the west drag handle to change the crop selection area"}};let J=M;const Z=Math.PI/180;async function ee(h,e,t,r=1,n=0){const i=e.getContext("2d");if(!i)throw new Error("No 2d context");const s=h.naturalWidth/h.width,w=h.naturalHeight/h.height,o=window.devicePixelRatio;e.width=Math.floor(t.width*s*o),e.height=Math.floor(t.height*w*o),i.scale(o,o),i.imageSmoothingQuality="high";const a=t.x*s,l=t.y*w,g=n*Z,d=h.naturalWidth/2,c=h.naturalHeight/2;i.save(),i.translate(-a,-l),i.translate(d,c),i.rotate(g),i.scale(r,r),i.translate(-d,-c),i.drawImage(h,0,0,h.naturalWidth,h.naturalHeight,0,0,h.naturalWidth,h.naturalHeight),i.restore()}function te(h,e,t){return V(q({unit:"%",width:90},t,h,e),h,e)}function ne(h,e,t){D.useEffect(()=>{const r=setTimeout(()=>h.apply({...t}),e);return()=>{clearTimeout(r)}},t)}const ie=90,N=1,O=h=>{const e=D.useRef(null),t=D.useRef(null),r=D.useRef(""),{aspect:n,callbackFn:i,callbackLabel:s,imgSrc:w,subTitle:o,title:a}=h,[l,g]=D.useState(),[d,c]=D.useState(),[u,m]=D.useState(!1);function b(x){const{width:R,height:Y}=x.currentTarget;console.log(x),g(te(R,Y,n))}async function C(){m(!0);const x=t.current,R=e.current;if(!x||!R||!d)throw new Error("Crop canvas does not exist");const Y=x.naturalWidth/x.width,U=x.naturalHeight/x.height,I=new OffscreenCanvas(d.width*Y,d.height*U),L=I.getContext("2d");if(!L)throw new Error("No 2d context");L.drawImage(R,0,0,R.width,R.height,0,0,I.width,I.height);const T=await I.convertToBlob({type:"image/jpeg",quality:ie});r.current&&URL.revokeObjectURL(r.current),r.current=URL.createObjectURL(T),await i(r.current),m(!1)}ne(async()=>{d!=null&&d.width&&(d!=null&&d.height)&&t.current&&e.current&&ee(t.current,e.current,d,N)},100,[d,N]);const H=3;return X(F,{children:[X(P,{sx:{padding:H},children:[f($,{children:a}),f("br",{}),f($,{variant:"quiet",children:o})]}),X(A,{sx:{borderBottom:"2px dashed silver",borderTop:"2px dashed silver",padding:H},children:[u&&f(P,{sx:{flex:1},children:f(W,{label:"Uploading image now. It'll only a sec. Hopefully."})}),!u&&!!w&&f(A,{sx:{flex:1,justifyContent:"center"},children:f(J,{aspect:n,crop:l,minHeight:100,onChange:(x,R)=>g(R),onComplete:x=>c(x),children:f("img",{alt:"Crop me","data-testid":"cropImage",onLoad:b,ref:t,src:w})})})]}),f(P,{sx:{padding:H},children:f(z,{onClick:C,disabled:u,children:s})})]})};try{O.displayName="ImageCrop",O.__docgenInfo={description:"",displayName:"ImageCrop",props:{aspect:{defaultValue:null,description:"",name:"aspect",required:!0,type:{name:"number"}},callbackFn:{defaultValue:null,description:"",name:"callbackFn",required:!0,type:{name:"(imgSrc: string) => Promise<string>"}},callbackLabel:{defaultValue:null,description:"",name:"callbackLabel",required:!0,type:{name:"string"}},imgSrc:{defaultValue:null,description:"",name:"imgSrc",required:!0,type:{name:"string"}},subTitle:{defaultValue:null,description:"",name:"subTitle",required:!1,type:{name:"string"}},title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}}}}}catch{}export{O as I};
//# sourceMappingURL=ImageCrop-d992e4db.js.map
