!function(t){var e={};function i(s){if(e[s])return e[s].exports;var a=e[s]={i:s,l:!1,exports:{}};return t[s].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=t,i.c=e,i.d=function(t,e,s){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(i.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)i.d(s,a,function(e){return t[e]}.bind(null,a));return s},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i(i.s=0)}([function(t,e,i){"use strict";i.r(e);i(1),i(2),i(3),i(4),i(5),i(6),i(7);console.time("t"),console.timeEnd("t")},function(t,e,i){"use strict";!function(){const t=Object.create(null,{main:{value:"c-avatar"},link:{value:"c-avatar__link"},img:{value:"c-avatar__image"},xs:{value:"c-avatar--xs"},sm:{value:"c-avatar--sm"},md:{value:"c-avatar--md"},lg:{value:"c-avatar--lg"},xl:{value:"c-avatar--xl"}});class i extends HTMLElement{connectedCallback(){this._children=Array.from(this.children),this.render().cleanup()}render(){let{src:e,href:i,size:s,shadow:a,target:n}=this.dataset;return this._container=document.createElement("figure"),this._container.classList.add(t.main),this.appendChild(this._container),~["xs","sm","md","lg","xl"].indexOf(s)?this._container.classList.add(t[s]):s&&console.warn("Size can take values 'xs', 'sm', 'md', 'lg' or 'xl'"),~["2dp","3dp","4dp","6dp","8dp","16dp","24dp"].indexOf(a)?this._container.classList.add(`s-shadow-${a}`):a&&"inset"!=a&&console.warn("Shadow can take values '2dp', '3dp', '4dp', '6dp', '8dp', '16dp' or '24dp'"),i&&(this._link=document.createElement("a"),this._link.classList.add(t.link),this._link.href=i,this._link.target=n||"_self",this._container.appendChild(this._link)),e&&("inset"==a?this._container.style.backgroundImage=`url(${e})`:(this._img=document.createElement("img"),this._img.classList.add(t.img),this._img.src=e,this._link?this._link.appendChild(this._img):this._container.appendChild(this._img))),this._children.length&&this._children.forEach(t=>this._container.appendChild(t)),this}cleanup(){return this.removeAttribute("data-src"),this.removeAttribute("data-href"),this.removeAttribute("data-size"),this.removeAttribute("data-shadow"),this.removeAttribute("data-target"),this}}customElements&&customElements.define("c-avatar",i),e.nodeType||(e.AvatarElement=i)}()},function(t,e,i){"use strict";!function(){const t=Object.create(null,{main:{value:"c-button"},sm:{value:"c-button--sm"},lg:{value:"c-button--lg"},xl:{value:"c-button--xl"}});class i extends HTMLElement{connectedCallback(){this.render().cleanup()}render(){let{glyph:e,glyphAtRight:i,size:s,text:n}=this.dataset;return this.classList.add(t.main),this.hasAttribute("type")||this.setAttribute("type","button"),e&&this.appendChild(a(e)),i&&this.appendChild(a(i)),n&&this.appendChild(function(t){let e=document.createElement("span");return e.classList.add("c-button__text"),e.innerText=t,e}(n)),~["sm","lg","xl"].indexOf(s)?this.classList.add(t[s]):s&&console.warn('Size can take values "xs", "sm", "md", "lg" or "xl"'),this}cleanup(){this.removeAttribute("data-glyph"),this.removeAttribute("data-glyph-at-right"),this.removeAttribute("data-size"),this.removeAttribute("data-text")}}class s extends HTMLElement{connectedCallback(){this.classList.add("c-button-group")}}function a(t){let e=document.createElement("span");return e.classList.add("c-button__icon"),e.innerHTML=`<span class="iconic" data-glyph="${t}"></span>`,e}customElements&&customElements.define("c-button",i),e.nodeType||(e.ButtonElement=i),customElements&&customElements.define("c-button-group",s),e.nodeType||(e.ButtonGroupElement=s)}()},function(t,e,i){!function(){const t=Object.create(null,{box:{value:"c-field-box"},button:{value:"c-field-button"},buttonIcon:{value:"iconic"},error:{value:"c-field-error"},field:{value:"c-field"},filled:{value:"is-filled"},focused:{value:"is-focused"},label:{value:"c-field-label"},icon:{value:"c-field-icon"},info:{value:"c-field-info"},invalid:{value:"is-invalid"},valid:{value:"is-valid"}});class i extends HTMLElement{connectedCallback(){this._children=Array.from(this.children),this._defaultValue=this.dataset.value,this.classList.add(t.box),this.render().cleanup(),this.addEventListener("click",t=>this.focus()),this._field.addEventListener("blur",t=>this.blur()),this._field.addEventListener("change",t=>this.change()),this._field.addEventListener("focus",t=>this.focus()),this._field.addEventListener("input",t=>this.input()),this._button&&this._button.addEventListener("click",t=>this.clickButton(t)),this.blur().change()}blur(){return this.isFilled(),this.classList.remove(t.focused),this}change(){switch(this.isFilled(),this.type){case"checkbox":case"radio":this.setAttribute("aria-checked",this._field.checked);break;case"email":this.isValid("^\\S+@\\S+\\.\\S+$");break;case"file":break;case"password":this.isValid("^\\w{6,20}$");break;default:this.pattern&&this.isValid()}return this}clickButton(e){switch(this.type){case"password":case"text":"eye-closed"===this.buttonGlyph?(e.preventDefault(),this.buttonGlyph="eye-open",this.type="text"):"eye-open"===this.buttonGlyph&&(e.preventDefault(),this.buttonGlyph="eye-closed",this.type="password");break;case"search":this.value?this.classList.remove(t.invalid):(e.preventDefault(),this.classList.add(t.invalid))}return this}focus(){return!this.disabled&&(this.classList.add(t.focused),this._field.focus(),this.isCheckable()&&this._field.click(),this)}input(){return this.pattern&&!~["email","password"].indexOf(this.type)&&this.isValid(),this}isFilled(){let e=this.value,i=!!e&&"0"!==e&&"null"!==e;return this.classList[i?"add":"remove"](t.filled),i}isValid(e=null){let i=this.value,s=e||this.pattern;if(!i||!s)return this.classList.remove(t.invalid,t.valid),null;let a=new RegExp(s).test(i);return a?(this.classList.add(t.valid),this.classList.remove(t.invalid)):(this.classList.add(t.invalid),this.classList.remove(t.valid)),a}cleanup(){return this.removeAttribute("data-button"),this.removeAttribute("data-button-glyph"),this.removeAttribute("data-error"),this.removeAttribute("data-glyph"),this.removeAttribute("data-glyph-at-right"),this.removeAttribute("data-label"),this.removeAttribute("data-info"),this.removeAttribute("data-info-tooltip"),this.removeAttribute("data-name"),this.removeAttribute("data-pattern"),this.removeAttribute("data-type"),this.removeAttribute("data-value"),this.removeAttribute("placeholder"),this}isCheckable(){return~["radio","checkbox"].indexOf(this.type)}render(){return this.glyph&&(this._icon=this.renderIcon(this.glyph)),this.label&&!this.isCheckable()&&(this._label=this.renderLabel(this.label)),this._field=this.renderField(),this.label&&this.isCheckable()&&(this._label=this.renderLabel(this.label)),this.glyphAtRight&&(this._iconAtRight=this.renderIcon(this.glyphAtRight)),this.button&&(this._button=this.renderButton({text:this.button,type:this.buttonType})),this.buttonGlyph&&(this._button=this.renderButton({glyph:this.buttonGlyph,type:this.buttonType})),this.error&&(this._error=this.renderError(this.error)),this.info&&(this._info=this.renderInfo(this.info)),this.disabled="true"===this.getAttribute("aria-disabled"),this}renderButton(e){let{glyph:i,text:a,type:n="button"}=e,r=s("button",t.button),l=s("span",i?t.buttonIcon:"");return r.type=n,i&&(l.dataset.glyph=i),a&&(l.innerText=a),r.appendChild(l),this.appendChild(r),r}renderError(e){let i=s("span",t.error,e);return this.appendChild(i),i}renderField(){let t=function(t={}){let e,{children:i,name:s,pattern:a,placeholder:n,type:r="text",value:l}=t;switch(r){case"select":e=document.createElement("select"),i.length&&Array.from(i).forEach(t=>{t instanceof HTMLOptionElement&&e.appendChild(t)});break;case"textarea":e=document.createElement("textarea");break;default:e=document.createElement("input"),e.setAttribute("role","text"===r?"textbox":r),e.setAttribute("type",r),a&&e.setAttribute("name",a),n&&e.setAttribute("placeholder",n),l&&e.setAttribute("value",l)}return e.classList.add("c-field"),s&&e.setAttribute("name",s),e}({children:this._children,name:this.name,pattern:this.pattern,placeholder:this.placeholder,type:this.type,value:this._defaultValue});return this.appendChild(t),t}renderIcon(e){let i=function(e){let i=document.createElement("span");return i.classList.add(t.icon),i.innerHTML=`<span class="iconic" data-glyph="${e}"></span>`,i}(e);return this.appendChild(i),i}renderInfo(e){let i=s("span",t.info,e);return this.appendChild(i),i}renderLabel(e){let i=s("span",t.label,e);return this.appendChild(i),i}get disabled(){return this._field.hasAttribute("disabled")}set disabled(t){!1!==t?(this.setAttribute("aria-disabled",!0),this._field.setAttribute("disabled","disabled")):(this.setAttribute("aria-disabled",!1),this._field.removeAttribute("disabled"))}get button(){return this.dataset.button||this.getAttribute("button")}get buttonGlyph(){let t=this.dataset.buttonGlyph||this.getAttribute("button-glyph");return!t&&this._button&&(t=this._button.children[0].dataset.glyph),t}set buttonGlyph(t){this._button?this._button.children[0].dataset.glyph=t:this.dataset.buttonGlyph=t}get buttonType(){return this.dataset.buttonType||this.getAttribute("button-type")}get error(){return this.dataset.error}get glyph(){return this.dataset.glyph||this.getAttribute("glyph")}set glyph(t){this.dataset.glyph=t,this.renderIcon(t)}get glyphAtRight(){return this.dataset.glyphAtRight||this.getAttribute("glyph-at-right")}get label(){return this.dataset.label||this.getAttribute("label")}set label(t){this.dataset.glyph=t,this.renderLabel(t)}get info(){return this.dataset.info||this.getAttribute("info")}get name(){return this.dataset.name||this.getAttribute("name")}get pattern(){return this.dataset.pattern||this.getAttribute("pattern")}get placeholder(){return this.dataset.placeholder||this.getAttribute("placeholder")}get type(){let t=this.dataset.type||this.getAttribute("type");return!t&&this._field&&(t=this._field.getAttribute("type")),t||"text"}set type(t){this._field?this._field.setAttribute("type",t):this.dataset.type=t}get value(){return this._field.value.trim()}}function s(t,e,i){let s=document.createElement(t);return s.classList.add(e),i&&(s.innerText=i),s}customElements&&customElements.define("c-field",i),e.nodeType||(e.FieldElement=i)}()},function(t,e,i){"use strict";!function(){const t=["data-displayed","data-current","data-pagesize","data-total"],i=Object.create(null,{main:{value:"c-pagination"},ellipsis:{value:"c-pagination__ellipsis"},next:{value:"c-pagination__next"},page:{value:"c-pagination__page"},prev:{value:"c-pagination__prev"}});class s extends HTMLElement{connectedCallback(){this.render(),this.addEventListener("click",a,!1),new MutationObserver(()=>this.render()).observe(this,{attributes:!0,attributeFilter:t})}render(){let{current:t,pages:e,disabledFirst:i,disabledLast:s,prev:a,next:n,end:r,start:l}=this.calc(),o=`\n                <a class="c-pagination__prev" href="#page=${a}" data-page="${a}" aria-disabled="${1==a}"></a>\n                <a class="c-pagination__page" href="#page=1" data-page="1" aria-disabled="${i}">1</a>\n                <span class="c-pagination__ellipsis" aria-disabled="${i}">&hellip;</span>\n            `;for(let e=l;e<=r;e++)o+=`<a class="c-pagination__page" href="#page=${e}" data-page="${e}" aria-selected="${t==e}">${e}</a>`;return o+=`\n                <span class="c-pagination__ellipsis" aria-disabled="${s}">&hellip;</span>\n                <a class="c-pagination__page" href="#page=${e}" data-page="${e}" aria-disabled="${s}">${e}</a>\n                <a class="c-pagination__next" href="#page=${n}" data-page="${n}" aria-disabled="${n==e}"></a>\n            `,this.innerHTML=o.replace(/[\s]{2,}/g,""),this}calc(){let{current:t=1,displayed:e=5,pagesize:s=20,total:a=0}=this.options();this.classList.add(i.main),this.setAttribute("aria-disabled",!a);let n=Math.floor((e-1)/2),r=Math.ceil((e-1)/2),l=Math.ceil(a/s);e>l&&(e=l);let o=t-1,h=t+1;o<1&&(o=1),h>l&&(h=l);let d=t-n,c=t+r;return d<1&&(d=1,c=e),c>l&&(c=l,d=c-e+1),{current:t,pages:l,disabledFirst:t<n+1,disabledLast:t>l-r,prev:o,next:h,end:c,start:d}}options(){let{current:t=1,displayed:e=5,pagesize:i=20,total:s=0}=this.dataset;return t=parseInt(t),e=parseInt(e),i=parseInt(i),s=parseInt(s),{current:t,displayed:e,pagesize:i,total:s}}}function a(t){t.preventDefault(),t.target.dataset.hasOwnProperty("page")&&(t.currentTarget.dataset.current=t.target.dataset.page)}customElements&&customElements.define("c-pagination",s),e.nodeType||(e.PaginationElement=s)}()},function(t,e,i){"use strict";!function(){const t=Object.create(null,{main:{value:"c-popover"},body:{value:"c-popover__body"},show:{value:"is-visible"},hide:{value:"is-hidden"}});class i extends HTMLElement{connectedCallback(){this._control=document.body.querySelector(`*[aria-controls=${this.id}]`),this.render(),s.call(this)}disconnectedCallback(){h.call(this)}render(){return this._innerHTML=this.innerHTML,this.innerHTML="",this.classList.add(t.main),this._body=r.call(this),this.hide(),this.placement(),this}placement({mouseX:t,mouseY:e}={}){let i;return this.style.transform=l.call(this),i=a.call(this),this.position!=i&&(this.position=i,this.style.transform=l.call(this)),this.floating&&t&&e&&(i=n.call(this,t,e),this.position!=i&&(this.position=i,this.style.transform=l.call(this))),this}show(){return this.classList.add(t.show),this.classList.remove(t.hide),this}hide(){return this.classList.add(t.hide),this.classList.remove(t.show),this.__position&&(this.position=this.__position),this}toggle(){return this.classList.contains(t.show)?this.hide():(this.show(),this.placement()),this}get floating(){let t=this.dataset.floating;return~["true","false"].indexOf(t)||(t=this.dataset.floating=!0),t}get position(){let t=this.dataset.position;return o(t)&&(t=this.position="top"),this.__position||(this.__position=t),t}set position(t){o(t)||(this.dataset.position=t)}get trigger(){return(this.dataset.trigger||"hover").split(/[\s,]/g)}set trigger(t){this.dataset.trigger=t.toString()}}function s(){return this.__onShow=t=>{t.preventDefault(),this.show().placement()},this.__onHide=t=>{t.preventDefault(),this.hide()},this.__onMove=t=>{t.preventDefault(),this.placement({mouseX:t.clientX,mouseY:t.clientY})},this.__onToggle=t=>{t.preventDefault(),this.toggle()},~this.trigger.indexOf("hover")&&(this._control.addEventListener("mouseenter",this.__onShow),this._control.addEventListener("mouseleave",this.__onHide),this.floating&&this._control.addEventListener("mousemove",this.__onMove)),~this.trigger.indexOf("focus")&&(this._control.addEventListener("focus",this.__onShow),this._control.addEventListener("blur",this.__onHide)),~this.trigger.indexOf("click")&&this._control.addEventListener("click",this.__onToggle),this}function a(){let t=this.position.split("-"),e=this.getBoundingClientRect(),i=document.body.getBoundingClientRect();return"bottom"==t[0]&&i.height<=e.bottom&&(t[0]="top"),"top"==t[0]&&e.top<0&&(t[0]="bottom"),"right"==t[0]&&i.right<=e.right&&(t[0]="left"),"left"==t[0]&&e.left<0&&(t[0]="right"),t.join("-")}function n(t,e){let i=this.position.split("-"),s=this.getBoundingClientRect(),a=this._control.getBoundingClientRect();if(!s.width||!s.height)return this.position;if(~["top","bottom"].indexOf(i[0])&&a.width>1.1*s.width){let e=a.width/3;return t<=a.left+e?i[1]="left":t<=a.left+2*e?i.splice(1,1):t<=a.right&&(i[1]="right"),i.join("-")}if(~["left","right"].indexOf(i[0])&&a.height>1.1*s.height){let t=a.height/3;return e<=a.top+t?i[1]="top":e<=a.top+2*t?i.splice(1,1):e<=a.bottom&&(i[1]="bottom"),i.join("-")}return i}function r(){let e=document.createElement("div");return e.classList.add(t.body),e.innerHTML=this._innerHTML,this.appendChild(e),e}function l(){let t,e,i=this._control.getBoundingClientRect(),s=this.getBoundingClientRect(),a=window.getComputedStyle(this),n={top:parseInt(a.marginTop),right:parseInt(a.marginRight),bottom:parseInt(a.marginBottom),left:parseInt(a.marginLeft)};switch(n.vertical=n.top+n.bottom,n.horizontal=n.left+n.right,this.position){case"top":t=i.left+i.width/2-(s.width+n.horizontal)/2,e=i.top-s.height-n.vertical;break;case"top-left":t=i.left-n.left,e=i.top-s.height-n.vertical;break;case"top-right":t=i.right-s.width-n.right,e=i.top-s.height-n.vertical;break;case"right":t=i.right+n.left,e=i.top+i.height/2-(s.height+n.horizontal)/2;break;case"right-top":t=i.right+n.left,e=i.top-n.top;break;case"right-bottom":t=i.right+n.left,e=i.bottom-s.height-n.bottom;break;case"bottom":t=i.left+i.width/2-(s.width+n.horizontal)/2,e=i.bottom;break;case"bottom-left":t=i.left-n.left,e=i.bottom;break;case"bottom-right":t=i.right-s.width-n.right,e=i.bottom;break;case"left":t=i.left-s.width-n.horizontal,e=i.top+i.height/2-(s.height+n.horizontal)/2;break;case"left-top":t=i.left-s.width-n.horizontal,e=i.top-n.top;break;case"left-bottom":t=i.left-s.width-n.horizontal,e=i.bottom-s.height-n.bottom}return`translate(${Math.round(t)}px,${Math.round(e)}px)`}function o(t){return!~["top","top-left","top-right","right","right-top","right-bottom","bottom","bottom-left","bottom-right","left","left-top","left-bottom"].indexOf(t)}function h(){this._control.removeEventListener("blur",this.__onHide),this._control.removeEventListener("click",this.__onToggle),this._control.removeEventListener("focus",this.__onShow),this._control.removeEventListener("mouseenter",this.__onShow),this._control.removeEventListener("mouseleave",this.__onHide),this._control.removeEventListener("mousemove",this.__onMove)}window.addEventListener("scroll",(function(){Array.from(document.querySelectorAll("c-popover.is-visible")).forEach(t=>{t.classList.add("is-hidden"),t.classList.remove("is-visible")})}),!1),customElements&&customElements.define("c-popover",i),e.nodeType||(e.PopoverElement=i)}()},function(t,e,i){!function(){class t extends HTMLElement{get activeTab(){return this.dataset.activeTab}get activeTabpanel(){return this.dataset.activeTabpanel}connectedCallback(){this.classList.add("c-tabs-container"),this.setAttribute("role","tablist"),this.indicator||(this.indicator=function(){let t=document.createElement("span");return t.classList.add("c-tab-indicator"),t}(),this.appendChild(this.indicator)),this.addEventListener("click",this.onSelectTab,!1),setTimeout(this.activate.bind(this),0)}activate(){let t=this.querySelector(".c-tab[aria-selected=true]");t||(t=this.children[0]),t.dispatchEvent(new Event("click",{bubbles:!0}))}onSelectTab(t){let e;this.querySelectorAll(".c-tab").forEach(i=>{i.contains(t.target)?e=i:i.ariaSelected=!1}),e&&(this.dataset.activeTab=e.id,this.dataset.activeTabpanel=e.ariaControls,this.dispatchEvent(new Event("change",{bubbles:!0}))),this.renderIndicator()}renderIndicator(){let t=this.querySelector(".c-tab[aria-selected=true]");this.indicator.setAttribute("aria-hidden",!t),t&&(this.indicator.style.width=t.clientWidth+"px",this.indicator.style.transform=`translateX(${t.offsetLeft}px)`)}}class i extends HTMLElement{get ariaControls(){return this.getAttribute("aria-controls")||""}set ariaSelected(t){this.setAttribute("aria-selected",!!t&&"false"!=t)}connectedCallback(){this.classList.add("c-tab"),this.setAttribute("role","tab"),this.dataset.glyph&&(this.appendChild(function(t){let e=document.createElement("span");return e.classList.add("c-tab__icon"),e.innerHTML=`<span class="iconic" data-glyph="${t}"></span>`,e}(this.dataset.glyph)),delete this.dataset.glyph),this.dataset.text&&(this.appendChild(function(t){let e=document.createElement("span");return e.classList.add("c-tab__label"),e.innerText=t,e}(this.dataset.text)),delete this.dataset.text),this.addEventListener("click",this.onSelectTab)}onSelectTab(t){t.preventDefault(),this.setAttribute("aria-selected",!0)}}customElements&&(customElements.define("c-tablist",t),customElements.define("c-tab",i)),e.nodeType||(e.TablistElement=t,e.TabElement=i)}()},function(t,e,i){"use strict";!function(){const t=Object.create(null,{main:{value:"c-thumbnail"},caption:{value:"c-thumbnail__caption"},link:{value:"c-thumbnail__link"},img:{value:"c-thumbnail__image"},shutter:{value:"c-thumbnail__shutter"},xs:{value:"c-thumbnail--xs"},sm:{value:"c-thumbnail--sm"},md:{value:"c-thumbnail--md"},lg:{value:"c-thumbnail--lg"},xl:{value:"c-thumbnail--xl"}});class i extends HTMLElement{connectedCallback(){this.render().cleanup()}render(){let{src:e,href:i,size:s,target:a}=this.dataset,n=this.innerText;this.innerHTML="",this.classList.add(t.main),~["xs","sm","md","lg","xl"].indexOf(s)?this.classList.add(t[s]):s&&console.warn('Size can take values "xs", "sm", "md", "lg" or "xl"');let r=this;return i&&(this._link=document.createElement("a"),this._link.classList.add(t.link),this._link.href=i,this._link.target=a||"_self",r.appendChild(this._link),r=this._link),e&&(this._img=document.createElement("img"),this._img.classList.add(t.img),this._img.src=e,r.appendChild(this._img)),n&&(i?(this._text=document.createElement("span"),this._text.classList.add(t.shutter)):(this._text=document.createElement("figcaption"),this._text.classList.add(t.caption)),this._text.innerText=n,r.appendChild(this._text)),this}cleanup(){return this.removeAttribute("data-src"),this.removeAttribute("data-href"),this.removeAttribute("data-size"),this.removeAttribute("data-shadow"),this.removeAttribute("data-target"),this}}customElements&&customElements.define("c-thumbnail",i),e.nodeType||(e.AvatarElement=i)}()}]);
//# sourceMappingURL=uikit.js.map