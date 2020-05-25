var directionsService,directionsRenderer,intervalx;function initMap(e,t,n){clearInterval(intervalx),directionsService=new google.maps.DirectionsService,directionsRenderer=new google.maps.DirectionsRenderer;var i,o,s,a=new google.maps.Map(document.getElementById("map"),{zoom:7,disableAutoPan:!0,center:{lat:32.140734,lng:36.154633}});directionsRenderer.setMap(a),intervalx=setInterval((function(){output=firebase.firestore().collection("user_locations").doc(n),output.get().then((function(e){e.exists?(console.log("Document data:",e.data()),i=e.data().geo_point.latitude,o=e.data().geo_point.longitude,s=i+","+o,console.log("geopoint "+i),console.log("geopoint "+o),calculateAndDisplayRoute(directionsService,directionsRenderer,s,t)):console.log("not found")})).catch((function(e){console.log("Error ",e)}))}),1e3)}function calculateAndDisplayRoute(e,t,n,i){console.log("called"),e.route({origin:{query:n},destination:{query:i},travelMode:"DRIVING"},(function(e,n){"OK"===n?t.setDirections(e):console.log("error")}))}async function deleteBakeryFirebase(e){var t;console.log("Called"),firebase.firestore().collection("Users").where("email","==",e).get().then((function(e){e.forEach((function(e){console.log(e.id," => ",e.data()),t=e.id,console.log("id after "+t),firebase.firestore().collection("Bakerys_Location").doc(t).delete().then((function(){console.log("Account successfully deleted! Bakery Location")})).catch((function(e){console.error("Error removing document: ",e)})),firebase.firestore().collection("Users").doc(t).delete().then((function(){console.log("Account successfully deleted! Bakery User")})).catch((function(e){console.error("Error removing document: ",e)}))}))})).catch((function(e){console.log("Error getting documents: ",e)}))}function deleteAdminFirebase(e){console.log("Called 2"),firebase.firestore().collection("flourmill_location").doc(e+"").delete().then((function(){console.log("Account successfully deleted! Admin Location")})).catch((function(e){console.error("Error removing document: ",e)}))}async function deleteTruckDriver(e){firebase.firestore().collection("user_locations").doc(e).delete().then((function(){console.log("Account successfully deleted! TruckDriver Location")})).catch((function(e){console.error("Error removing document: ",e)})),firebase.firestore().collection("Users").doc(e).delete().then((function(){console.log("Account successfully deleted! TruckDriver User")})).catch((function(e){console.error("Error removing document: ",e)}))}!function(e){"use strict";function t(e,t){e.className+=" "+t}function n(e,t){for(var n=e.className.split(" "),i=t.split(" "),o=0;o<i.length;o+=1){var s=n.indexOf(i[o]);s>-1&&n.splice(s,1)}e.className=n.join(" ")}function i(){return"rtl"===e.getComputedStyle(document.body).direction}function o(){return document.documentElement&&document.documentElement.scrollTop||document.body.scrollTop}function s(){return document.documentElement&&document.documentElement.scrollLeft||document.body.scrollLeft}function a(e){for(;e.lastChild;)e.removeChild(e.lastChild)}function l(e){if(null===e)return e;var t;if(Array.isArray(e)){t=[];for(var n=0;n<e.length;n+=1)t.push(l(e[n]));return t}if(e instanceof Date)return new Date(e.getTime());if(e instanceof RegExp)return(t=new RegExp(e.source)).global=e.global,t.ignoreCase=e.ignoreCase,t.multiline=e.multiline,t.lastIndex=e.lastIndex,t;if("object"==typeof e){for(var i in t={},e)e.hasOwnProperty(i)&&(t[i]=l(e[i]));return t}return e}function r(e,t){if(e.elements){var n=e.elements.root;n.parentNode.removeChild(n),delete e.elements,e.settings=l(e.__settings),e.__init=t,delete e.__internal}}function c(e,t){return function(){if(arguments.length>0){for(var n=[],i=0;i<arguments.length;i+=1)n.push(arguments[i]);return n.push(e),t.apply(e,n)}return t.apply(e,[null,e])}}function d(e,t){return{index:e,button:t,cancel:!1}}function u(e,t){if("function"==typeof t.get(e))return t.get(e).call(t)}var m=":not(:disabled):not(.ajs-reset)",f=13,h=27,p=112,b=123,g=37,v=39,y=9,_={autoReset:!0,basic:!1,closable:!0,closableByDimmer:!0,invokeOnCloseOff:!1,frameless:!1,defaultFocusOff:!1,maintainFocus:!0,maximizable:!0,modal:!0,movable:!0,moveBounded:!1,overflow:!0,padding:!0,pinnable:!0,pinned:!0,preventBodyShift:!1,resizable:!0,startMaximized:!1,transition:"pulse",transitionOff:!1,tabbable:["button","[href]","input","select","textarea",'[tabindex]:not([tabindex^="-"])'+m].join(m+","),notifier:{delay:5,position:"bottom-right",closeButton:!1,classes:{base:"alertify-notifier",prefix:"ajs-",message:"ajs-message",top:"ajs-top",right:"ajs-right",bottom:"ajs-bottom",left:"ajs-left",center:"ajs-center",visible:"ajs-visible",hidden:"ajs-hidden",close:"ajs-close"}},glossary:{title:"AlertifyJS",ok:"OK",cancel:"Cancel",acccpt:"Accept",deny:"Deny",confirm:"Confirm",decline:"Decline",close:"Close",maximize:"Maximize",restore:"Restore"},theme:{input:"ajs-input",ok:"ajs-ok",cancel:"ajs-cancel"},hooks:{preinit:function(){},postinit:function(){}}},k=[],x=!1;try{var H=Object.defineProperty({},"passive",{get:function(){x=!0}});e.addEventListener("test",H,H),e.removeEventListener("test",H,H)}catch(j){}var O=function(e,t,n,i,o){e.addEventListener(t,n,x?{capture:i,passive:o}:!0===i)},w=function(e,t,n,i,o){e.removeEventListener(t,n,x?{capture:i,passive:o}:!0===i)},z=function(){var e,t,n=!1,i={animation:"animationend",OAnimation:"oAnimationEnd oanimationend",msAnimation:"MSAnimationEnd",MozAnimation:"animationend",WebkitAnimation:"webkitAnimationEnd"};for(e in i)if(void 0!==document.documentElement.style[e]){t=i[e],n=!0;break}return{type:t,supported:n}}(),T=function(){function m(e){if(!e.__internal){var n;M.defaults.hooks.preinit(e),delete e.__init,e.__settings||(e.__settings=l(e.settings)),"function"==typeof e.setup?((n=e.setup()).options=n.options||{},n.focus=n.focus||{}):n={buttons:[],focus:{element:null,select:!1},options:{}},"object"!=typeof e.hooks&&(e.hooks={});var i=[];if(Array.isArray(n.buttons))for(var o=0;o<n.buttons.length;o+=1){var s=n.buttons[o],a={};for(var r in s)s.hasOwnProperty(r)&&(a[r]=s[r]);i.push(a)}var d=e.__internal={isOpen:!1,activeElement:document.body,timerIn:void 0,timerOut:void 0,buttons:i,focus:n.focus,options:{title:void 0,modal:void 0,basic:void 0,frameless:void 0,defaultFocusOff:void 0,pinned:void 0,movable:void 0,moveBounded:void 0,resizable:void 0,autoReset:void 0,closable:void 0,closableByDimmer:void 0,invokeOnCloseOff:void 0,maximizable:void 0,startMaximized:void 0,pinnable:void 0,transition:void 0,transitionOff:void 0,padding:void 0,overflow:void 0,onshow:void 0,onclosing:void 0,onclose:void 0,onfocus:void 0,onmove:void 0,onmoved:void 0,onresize:void 0,onresized:void 0,onmaximize:void 0,onmaximized:void 0,onrestore:void 0,onrestored:void 0},resetHandler:void 0,beginMoveHandler:void 0,beginResizeHandler:void 0,bringToFrontHandler:void 0,modalClickHandler:void 0,buttonsClickHandler:void 0,commandsClickHandler:void 0,transitionInHandler:void 0,transitionOutHandler:void 0,destroy:void 0},u={};u.root=document.createElement("div"),u.root.style.display="none",u.root.className=xe.base+" "+xe.hidden+" ",u.root.innerHTML=ke.dimmer+ke.modal,u.dimmer=u.root.firstChild,u.modal=u.root.lastChild,u.modal.innerHTML=ke.dialog,u.dialog=u.modal.firstChild,u.dialog.innerHTML=ke.reset+ke.commands+ke.header+ke.body+ke.footer+ke.resizeHandle+ke.reset,u.reset=[],u.reset.push(u.dialog.firstChild),u.reset.push(u.dialog.lastChild),u.commands={},u.commands.container=u.reset[0].nextSibling,u.commands.pin=u.commands.container.firstChild,u.commands.maximize=u.commands.pin.nextSibling,u.commands.close=u.commands.maximize.nextSibling,u.header=u.commands.container.nextSibling,u.body=u.header.nextSibling,u.body.innerHTML=ke.content,u.content=u.body.firstChild,u.footer=u.body.nextSibling,u.footer.innerHTML=ke.buttons.auxiliary+ke.buttons.primary,u.resizeHandle=u.footer.nextSibling,u.buttons={},u.buttons.auxiliary=u.footer.firstChild,u.buttons.primary=u.buttons.auxiliary.nextSibling,u.buttons.primary.innerHTML=ke.button,u.buttonTemplate=u.buttons.primary.firstChild,u.buttons.primary.removeChild(u.buttonTemplate);for(var m=0;m<e.__internal.buttons.length;m+=1){var f=e.__internal.buttons[m];for(var h in ve.indexOf(f.key)<0&&ve.push(f.key),f.element=u.buttonTemplate.cloneNode(),f.element.innerHTML=f.text,"string"==typeof f.className&&""!==f.className&&t(f.element,f.className),f.attrs)"className"!==h&&f.attrs.hasOwnProperty(h)&&f.element.setAttribute(h,f.attrs[h]);"auxiliary"===f.scope?u.buttons.auxiliary.appendChild(f.element):u.buttons.primary.appendChild(f.element)}for(var p in e.elements=u,d.resetHandler=c(e,K),d.beginMoveHandler=c(e,ee),d.beginResizeHandler=c(e,oe),d.bringToFrontHandler=c(e,C),d.modalClickHandler=c(e,R),d.buttonsClickHandler=c(e,U),d.commandsClickHandler=c(e,L),d.transitionInHandler=c(e,J),d.transitionOutHandler=c(e,Q),d.options)void 0!==n.options[p]?e.set(p,n.options[p]):M.defaults.hasOwnProperty(p)?e.set(p,M.defaults[p]):"title"===p&&e.set(p,M.defaults.glossary[p]);"function"==typeof e.build&&e.build(),M.defaults.hooks.postinit(e)}document.body.appendChild(e.elements.root)}function f(){be=s(),ge=o()}function x(){e.scrollTo(be,ge)}function H(){for(var e=0,i=0;i<k.length;i+=1){var o=k[i];(o.isModal()||o.isMaximized())&&(e+=1)}0===e&&document.body.className.indexOf(xe.noOverflow)>=0?(n(document.body,xe.noOverflow),T(!1)):e>0&&document.body.className.indexOf(xe.noOverflow)<0&&(T(!0),t(document.body,xe.noOverflow))}function T(i){M.defaults.preventBodyShift&&(i&&document.documentElement.scrollHeight>document.documentElement.clientHeight?(Oe=ge,He=e.getComputedStyle(document.body).top,t(document.body,xe.fixed),document.body.style.top=-ge+"px"):i||(ge=Oe,document.body.style.top=He,n(document.body,xe.fixed),x()))}function C(e,t){for(var n=k.indexOf(t)+1;n<k.length;n+=1)if(k[n].isModal())return;return document.body.lastChild!==t.elements.root&&(document.body.appendChild(t.elements.root),k.splice(k.indexOf(t),1),k.push(t),Y(t)),!1}function j(e,i,o,s){switch(i){case"title":e.setHeader(s);break;case"modal":!function(e){e.get("modal")?(n(e.elements.root,xe.modeless),e.isOpen()&&(ue(e),B(e),H())):(t(e.elements.root,xe.modeless),e.isOpen()&&(de(e),B(e),H()))}(e);break;case"basic":!function(e){e.get("basic")?t(e.elements.root,xe.basic):n(e.elements.root,xe.basic)}(e);break;case"frameless":!function(e){e.get("frameless")?t(e.elements.root,xe.frameless):n(e.elements.root,xe.frameless)}(e);break;case"pinned":!function(e){e.get("pinned")?(n(e.elements.root,xe.unpinned),e.isOpen()&&W(e)):(t(e.elements.root,xe.unpinned),e.isOpen()&&!e.isModal()&&D(e))}(e);break;case"closable":!function(e){e.get("closable")?(t(e.elements.root,xe.closable),function(e){O(e.elements.modal,"click",e.__internal.modalClickHandler)}(e)):(n(e.elements.root,xe.closable),function(e){w(e.elements.modal,"click",e.__internal.modalClickHandler)}(e))}(e);break;case"maximizable":!function(e){e.get("maximizable")?t(e.elements.root,xe.maximizable):n(e.elements.root,xe.maximizable)}(e);break;case"pinnable":!function(e){e.get("pinnable")?t(e.elements.root,xe.pinnable):n(e.elements.root,xe.pinnable)}(e);break;case"movable":!function(e){e.get("movable")?(t(e.elements.root,xe.movable),e.isOpen()&&me(e)):(ie(e),n(e.elements.root,xe.movable),e.isOpen()&&fe(e))}(e);break;case"resizable":!function(e){e.get("resizable")?(t(e.elements.root,xe.resizable),e.isOpen()&&he(e)):(le(e),n(e.elements.root,xe.resizable),e.isOpen()&&pe(e))}(e);break;case"padding":s?n(e.elements.root,xe.noPadding):e.elements.root.className.indexOf(xe.noPadding)<0&&t(e.elements.root,xe.noPadding);break;case"overflow":s?n(e.elements.root,xe.noOverflow):e.elements.root.className.indexOf(xe.noOverflow)<0&&t(e.elements.root,xe.noOverflow);break;case"transition":!function(e,i,o){"string"==typeof o&&n(e.elements.root,xe.prefix+o),t(e.elements.root,xe.prefix+i),e.elements.root.offsetWidth}(e,s,o);break;case"transitionOff":!function(e){e.get("transitionOff")?t(e.elements.root,xe.noTransition):n(e.elements.root,xe.noTransition)}(e)}"function"==typeof e.hooks.onupdate&&e.hooks.onupdate.call(e,i,o,s)}function E(e,t,n,i,o){var s,a={op:void 0,items:[]};if(void 0===o&&"string"==typeof i)a.op="get",t.hasOwnProperty(i)?(a.found=!0,a.value=t[i]):(a.found=!1,a.value=void 0);else if(a.op="set","object"==typeof i){var l=i;for(var r in l)t.hasOwnProperty(r)?(t[r]!==l[r]&&(s=t[r],t[r]=l[r],n.call(e,r,s,l[r])),a.items.push({key:r,value:l[r],found:!0})):a.items.push({key:r,value:l[r],found:!1})}else{if("string"!=typeof i)throw new Error("args must be a string or object");t.hasOwnProperty(i)?(t[i]!==o&&(s=t[i],t[i]=o,n.call(e,i,s,o)),a.items.push({key:i,value:o,found:!0})):a.items.push({key:i,value:o,found:!1})}return a}function N(e){var t;F(e,(function(n){return t=!0!==e.get("invokeOnCloseOff")&&!0===n.invokeOnClose})),!t&&e.isOpen()&&e.close()}function L(e,t){switch(e.srcElement||e.target){case t.elements.commands.pin:t.isPinned()?I(t):A(t);break;case t.elements.commands.maximize:t.isMaximized()?S(t):P(t);break;case t.elements.commands.close:N(t)}return!1}function A(e){e.set("pinned",!0)}function I(e){e.set("pinned",!1)}function P(e){u("onmaximize",e),t(e.elements.root,xe.maximized),e.isOpen()&&H(),u("onmaximized",e)}function S(e){u("onrestore",e),n(e.elements.root,xe.maximized),e.isOpen()&&H(),u("onrestored",e)}function D(e){var t=s();e.elements.modal.style.marginTop=o()+"px",e.elements.modal.style.marginLeft=t+"px",e.elements.modal.style.marginRight=-t+"px"}function W(e){var t=parseInt(e.elements.modal.style.marginTop,10),n=parseInt(e.elements.modal.style.marginLeft,10);if(e.elements.modal.style.marginTop="",e.elements.modal.style.marginLeft="",e.elements.modal.style.marginRight="",e.isOpen()){var i=0,a=0;""!==e.elements.dialog.style.top&&(i=parseInt(e.elements.dialog.style.top,10)),e.elements.dialog.style.top=i+(t-o())+"px",""!==e.elements.dialog.style.left&&(a=parseInt(e.elements.dialog.style.left,10)),e.elements.dialog.style.left=a+(n-s())+"px"}}function B(e){e.get("modal")||e.get("pinned")?W(e):D(e)}function R(e,t){if(e.timeStamp-ze>200&&(ze=e.timeStamp)&&!we){var n=e.srcElement||e.target;!0===t.get("closableByDimmer")&&n===t.elements.modal&&N(t)}we=!1}function F(e,t){if(Date.now()-Te>200&&(Te=Date.now()))for(var n=0;n<e.__internal.buttons.length;n+=1){var i=e.__internal.buttons[n];if(!i.element.disabled&&t(i)){var o=d(n,i);"function"==typeof e.callback&&e.callback.apply(e,[o]),!1===o.cancel&&e.close();break}}}function U(e,t){var n=e.srcElement||e.target;F(t,(function(e){return e.element===n&&(Ce=!0)}))}function q(e){if(!Ce){var t=k[k.length-1],n=e.keyCode;return 0===t.__internal.buttons.length&&n===h&&!0===t.get("closable")?(N(t),!1):ve.indexOf(n)>-1?(F(t,(function(e){return e.key===n})),!1):void 0}Ce=!1}function X(e){var t=k[k.length-1],n=e.keyCode;if(n===g||n===v){for(var i=t.__internal.buttons,o=0;o<i.length;o+=1)if(document.activeElement===i[o].element)switch(n){case g:return void i[(o||i.length)-1].element.focus();case v:return void i[(o+1)%i.length].element.focus()}}else if(n<b+1&&n>p-1&&ve.indexOf(n)>-1)return e.preventDefault(),e.stopPropagation(),F(t,(function(e){return e.key===n})),!1}function Y(e,t){if(t)t.focus();else{var n=e.__internal.focus,i=n.element;switch(typeof n.element){case"number":e.__internal.buttons.length>n.element&&(i=!0===e.get("basic")?e.elements.reset[0]:e.__internal.buttons[n.element].element);break;case"string":i=e.elements.body.querySelector(n.element);break;case"function":i=n.element.call(e)}!0!==e.get("defaultFocusOff")&&(null!=i||0!==e.__internal.buttons.length)||(i=e.elements.reset[0]),i&&i.focus&&(i.focus(),n.select&&i.select&&i.select())}}function K(e,t){if(!t)for(var n=k.length-1;n>-1;n-=1)if(k[n].isModal()){t=k[n];break}if(t&&t.isModal()){var i,o=t.elements.reset[0],s=t.elements.reset[1],a=e.relatedTarget,l=t.elements.root.contains(a),r=e.srcElement||e.target;if(r===o&&!l||r===s&&a===o)return;r===s||r===document.body?i=o:r===o&&a===s?i=V(t):r===o&&l&&(i=V(t,!0)),Y(t,i)}}function V(e,t){var n=[].slice.call(e.elements.dialog.querySelectorAll(_.tabbable));t&&n.reverse();for(var i=0;i<n.length;i+=1){var o=n[i];if(o.offsetParent||o.offsetWidth||o.offsetHeight||o.getClientRects().length)return o}}function G(e){var t=k[k.length-1];t&&e.shiftKey&&e.keyCode===y&&t.elements.reset[1].focus()}function J(e,t){clearTimeout(t.__internal.timerIn),Y(t),Ce=!1,u("onfocus",t),w(t.elements.dialog,z.type,t.__internal.transitionInHandler),n(t.elements.root,xe.animationIn)}function Q(e,t){clearTimeout(t.__internal.timerOut),w(t.elements.dialog,z.type,t.__internal.transitionOutHandler),ie(t),le(t),t.isMaximized()&&!t.get("startMaximized")&&S(t),"function"==typeof t.__internal.destroy&&t.__internal.destroy.apply(t)}function Z(e,t){var n=e[Ne]-je,i=e[Le]-Ee;Ie&&(i-=document.body.scrollTop),t.style.left=n+"px",t.style.top=i+"px"}function $(e,t){var n=e[Ne]-je,i=e[Le]-Ee;Ie&&(i-=document.body.scrollTop),t.style.left=Math.min(Ae.maxLeft,Math.max(Ae.minLeft,n))+"px",t.style.top=Ie?Math.min(Ae.maxTop,Math.max(Ae.minTop,i))+"px":Math.max(Ae.minTop,i)+"px"}function ee(e,n){if(null===Se&&!n.isMaximized()&&n.get("movable")){var i,o=0,s=0;if("touchstart"===e.type?(e.preventDefault(),i=e.targetTouches[0],Ne="clientX",Le="clientY"):0===e.button&&(i=e),i){var a=n.elements.dialog;if(t(a,xe.capture),a.style.left&&(o=parseInt(a.style.left,10)),a.style.top&&(s=parseInt(a.style.top,10)),je=i[Ne]-o,Ee=i[Le]-s,n.isModal()?Ee+=n.elements.modal.scrollTop:n.isPinned()&&(Ee-=document.body.scrollTop),n.get("moveBounded")){var l=a,r=-o,c=-s;do{r+=l.offsetLeft,c+=l.offsetTop}while(l=l.offsetParent);Ae={maxLeft:r,minLeft:-r,maxTop:document.documentElement.clientHeight-a.clientHeight-c,minTop:-c},Pe=$}else Ae=null,Pe=Z;return u("onmove",n),Ie=!n.isModal()&&n.isPinned(),Me=n,Pe(i,a),t(document.body,xe.noSelection),!1}}}function te(e){var t;Me&&("touchmove"===e.type?(e.preventDefault(),t=e.targetTouches[0]):0===e.button&&(t=e),t&&Pe(t,Me.elements.dialog))}function ne(){if(Me){var e=Me;Me=Ae=null,n(document.body,xe.noSelection),n(e.elements.dialog,xe.capture),u("onmoved",e)}}function ie(e){Me=null;var t=e.elements.dialog;t.style.left=t.style.top=""}function oe(e,n){var i;if(!n.isMaximized()&&("touchstart"===e.type?(e.preventDefault(),i=e.targetTouches[0]):0===e.button&&(i=e),i)){u("onresize",n),Se=n,Re=n.elements.resizeHandle.offsetHeight/2;var o=n.elements.dialog;return t(o,xe.capture),De=parseInt(o.style.left,10),o.style.height=o.offsetHeight+"px",o.style.minHeight=n.elements.header.offsetHeight+n.elements.footer.offsetHeight+"px",o.style.width=(We=o.offsetWidth)+"px","none"!==o.style.maxWidth&&(o.style.minWidth=(Be=o.offsetWidth)+"px"),o.style.maxWidth="none",t(document.body,xe.noSelection),!1}}function se(e){var t;Se&&("touchmove"===e.type?(e.preventDefault(),t=e.targetTouches[0]):0===e.button&&(t=e),t&&function(e,t,n){var o,s,a=t,l=0,r=0;do{l+=a.offsetLeft,r+=a.offsetTop}while(a=a.offsetParent);!0===n?(o=e.pageX,s=e.pageY):(o=e.clientX,s=e.clientY);var c=i();if(c&&(o=document.body.offsetWidth-o,isNaN(De)||(l=document.body.offsetWidth-l-t.offsetWidth)),t.style.height=s-r+Re+"px",t.style.width=o-l+Re+"px",!isNaN(De)){var d=.5*Math.abs(t.offsetWidth-We);c&&(d*=-1),t.offsetWidth>We?t.style.left=De+d+"px":t.offsetWidth>=Be&&(t.style.left=De-d+"px")}}(t,Se.elements.dialog,!Se.get("modal")&&!Se.get("pinned")))}function ae(){if(Se){var e=Se;Se=null,n(document.body,xe.noSelection),n(e.elements.dialog,xe.capture),we=!0,u("onresized",e)}}function le(e){Se=null;var t=e.elements.dialog;"none"===t.style.maxWidth&&(t.style.maxWidth=t.style.minWidth=t.style.width=t.style.height=t.style.minHeight=t.style.left="",De=Number.Nan,We=Be=Re=0)}function re(){for(var e=0;e<k.length;e+=1){var t=k[e];t.get("autoReset")&&(ie(t),le(t))}}function ce(t){1===k.length&&(O(e,"resize",re),O(document.body,"keyup",q),O(document.body,"keydown",X),O(document.body,"focus",K),O(document.documentElement,"mousemove",te),O(document.documentElement,"touchmove",te,!1,!1),O(document.documentElement,"mouseup",ne),O(document.documentElement,"touchend",ne),O(document.documentElement,"mousemove",se),O(document.documentElement,"touchmove",se,!1,!1),O(document.documentElement,"mouseup",ae),O(document.documentElement,"touchend",ae)),O(t.elements.commands.container,"click",t.__internal.commandsClickHandler),O(t.elements.footer,"click",t.__internal.buttonsClickHandler),O(t.elements.reset[0],"focusin",t.__internal.resetHandler),O(t.elements.reset[0],"keydown",G),O(t.elements.reset[1],"focusin",t.__internal.resetHandler),Ce=!0,O(t.elements.dialog,z.type,t.__internal.transitionInHandler),t.get("modal")||de(t),t.get("resizable")&&he(t),t.get("movable")&&me(t)}function de(e){O(e.elements.dialog,"focus",e.__internal.bringToFrontHandler,!0)}function ue(e){w(e.elements.dialog,"focus",e.__internal.bringToFrontHandler,!0)}function me(e){O(e.elements.header,"mousedown",e.__internal.beginMoveHandler),O(e.elements.header,"touchstart",e.__internal.beginMoveHandler,!1,!1)}function fe(e){w(e.elements.header,"mousedown",e.__internal.beginMoveHandler),w(e.elements.header,"touchstart",e.__internal.beginMoveHandler,!1,!1)}function he(e){O(e.elements.resizeHandle,"mousedown",e.__internal.beginResizeHandler),O(e.elements.resizeHandle,"touchstart",e.__internal.beginResizeHandler,!1,!1)}function pe(e){w(e.elements.resizeHandle,"mousedown",e.__internal.beginResizeHandler),w(e.elements.resizeHandle,"touchstart",e.__internal.beginResizeHandler,!1,!1)}var be,ge,ve=[],ye=!1,_e=e.navigator.userAgent.indexOf("Safari")>-1&&e.navigator.userAgent.indexOf("Chrome")<0,ke={dimmer:'<div class="ajs-dimmer"></div>',modal:'<div class="ajs-modal" tabindex="0"></div>',dialog:'<div class="ajs-dialog" tabindex="0"></div>',reset:'<button class="ajs-reset"></button>',commands:'<div class="ajs-commands"><button class="ajs-pin"></button><button class="ajs-maximize"></button><button class="ajs-close"></button></div>',header:'<div class="ajs-header"></div>',body:'<div class="ajs-body"></div>',content:'<div class="ajs-content"></div>',footer:'<div class="ajs-footer"></div>',buttons:{primary:'<div class="ajs-primary ajs-buttons"></div>',auxiliary:'<div class="ajs-auxiliary ajs-buttons"></div>'},button:'<button class="ajs-button"></button>',resizeHandle:'<div class="ajs-handle"></div>'},xe={animationIn:"ajs-in",animationOut:"ajs-out",base:"alertify",basic:"ajs-basic",capture:"ajs-capture",closable:"ajs-closable",fixed:"ajs-fixed",frameless:"ajs-frameless",hidden:"ajs-hidden",maximize:"ajs-maximize",maximized:"ajs-maximized",maximizable:"ajs-maximizable",modeless:"ajs-modeless",movable:"ajs-movable",noSelection:"ajs-no-selection",noOverflow:"ajs-no-overflow",noPadding:"ajs-no-padding",pin:"ajs-pin",pinnable:"ajs-pinnable",prefix:"ajs-",resizable:"ajs-resizable",restore:"ajs-restore",shake:"ajs-shake",unpinned:"ajs-unpinned",noTransition:"ajs-no-transition"},He="",Oe=0,we=!1,ze=0,Te=0,Ce=!1,Me=null,je=0,Ee=0,Ne="pageX",Le="pageY",Ae=null,Ie=!1,Pe=null,Se=null,De=Number.Nan,We=0,Be=0,Re=0;return{__init:m,isOpen:function(){return this.__internal.isOpen},isModal:function(){return this.elements.root.className.indexOf(xe.modeless)<0},isMaximized:function(){return this.elements.root.className.indexOf(xe.maximized)>-1},isPinned:function(){return this.elements.root.className.indexOf(xe.unpinned)<0},maximize:function(){return this.isMaximized()||P(this),this},restore:function(){return this.isMaximized()&&S(this),this},pin:function(){return this.isPinned()||A(this),this},unpin:function(){return this.isPinned()&&I(this),this},bringToFront:function(){return C(0,this),this},moveTo:function(e,t){if(!isNaN(e)&&!isNaN(t)){u("onmove",this);var n=this.elements.dialog,o=n,s=0,a=0;n.style.left&&(s-=parseInt(n.style.left,10)),n.style.top&&(a-=parseInt(n.style.top,10));do{s+=o.offsetLeft,a+=o.offsetTop}while(o=o.offsetParent);var l=e-s,r=t-a;i()&&(l*=-1),n.style.left=l+"px",n.style.top=r+"px",u("onmoved",this)}return this},resizeTo:function(e,t){var n=parseFloat(e),i=parseFloat(t),o=/(\d*\.\d+|\d+)%/;if(!isNaN(n)&&!isNaN(i)&&!0===this.get("resizable")){u("onresize",this),(""+e).match(o)&&(n=n/100*document.documentElement.clientWidth),(""+t).match(o)&&(i=i/100*document.documentElement.clientHeight);var s=this.elements.dialog;"none"!==s.style.maxWidth&&(s.style.minWidth=(Be=s.offsetWidth)+"px"),s.style.maxWidth="none",s.style.minHeight=this.elements.header.offsetHeight+this.elements.footer.offsetHeight+"px",s.style.width=n+"px",s.style.height=i+"px",u("onresized",this)}return this},setting:function(e,t){var n=this,i=E(this,this.__internal.options,(function(e,t,i){j(n,e,t,i)}),e,t);if("get"===i.op)return i.found?i.value:void 0!==this.settings?E(this,this.settings,this.settingUpdated||function(){},e,t).value:void 0;if("set"===i.op){if(i.items.length>0)for(var o=this.settingUpdated||function(){},s=0;s<i.items.length;s+=1){var a=i.items[s];a.found||void 0===this.settings||E(this,this.settings,o,a.key,a.value)}return this}},set:function(e,t){return this.setting(e,t),this},get:function(e){return this.setting(e)},setHeader:function(t){return"string"==typeof t?(a(this.elements.header),this.elements.header.innerHTML=t):t instanceof e.HTMLElement&&this.elements.header.firstChild!==t&&(a(this.elements.header),this.elements.header.appendChild(t)),this},setContent:function(t){return"string"==typeof t?(a(this.elements.content),this.elements.content.innerHTML=t):t instanceof e.HTMLElement&&this.elements.content.firstChild!==t&&(a(this.elements.content),this.elements.content.appendChild(t)),this},showModal:function(e){return this.show(!0,e)},show:function(e,i){if(m(this),this.__internal.isOpen){ie(this),le(this),t(this.elements.dialog,xe.shake);var o=this;setTimeout((function(){n(o.elements.dialog,xe.shake)}),200)}else{if(this.__internal.isOpen=!0,k.push(this),M.defaults.maintainFocus&&(this.__internal.activeElement=document.activeElement),document.body.hasAttribute("tabindex")||document.body.setAttribute("tabindex",ye="0"),"function"==typeof this.prepare&&this.prepare(),ce(this),void 0!==e&&this.set("modal",e),f(),H(),"string"==typeof i&&""!==i&&(this.__internal.className=i,t(this.elements.root,i)),this.get("startMaximized")?this.maximize():this.isMaximized()&&S(this),B(this),this.elements.root.removeAttribute("style"),n(this.elements.root,xe.animationOut),t(this.elements.root,xe.animationIn),clearTimeout(this.__internal.timerIn),this.__internal.timerIn=setTimeout(this.__internal.transitionInHandler,z.supported?1e3:100),_e){var s=this.elements.root;s.style.display="none",setTimeout((function(){s.style.display="block"}),0)}this.elements.root.offsetWidth,n(this.elements.root,xe.hidden),x(),"function"==typeof this.hooks.onshow&&this.hooks.onshow.call(this),u("onshow",this)}return this},close:function(){return this.__internal.isOpen&&!1!==u("onclosing",this)&&(function(t){1===k.length&&(w(e,"resize",re),w(document.body,"keyup",q),w(document.body,"keydown",X),w(document.body,"focus",K),w(document.documentElement,"mousemove",te),w(document.documentElement,"mouseup",ne),w(document.documentElement,"mousemove",se),w(document.documentElement,"mouseup",ae)),w(t.elements.commands.container,"click",t.__internal.commandsClickHandler),w(t.elements.footer,"click",t.__internal.buttonsClickHandler),w(t.elements.reset[0],"focusin",t.__internal.resetHandler),w(t.elements.reset[0],"keydown",G),w(t.elements.reset[1],"focusin",t.__internal.resetHandler),O(t.elements.dialog,z.type,t.__internal.transitionOutHandler),t.get("modal")||ue(t),t.get("movable")&&fe(t),t.get("resizable")&&pe(t)}(this),n(this.elements.root,xe.animationIn),t(this.elements.root,xe.animationOut),clearTimeout(this.__internal.timerOut),this.__internal.timerOut=setTimeout(this.__internal.transitionOutHandler,z.supported?1e3:100),t(this.elements.root,xe.hidden),this.elements.modal.offsetWidth,M.defaults.maintainFocus&&this.__internal.activeElement&&(this.__internal.activeElement.focus(),this.__internal.activeElement=null),void 0!==this.__internal.className&&""!==this.__internal.className&&n(this.elements.root,this.__internal.className),"function"==typeof this.hooks.onclose&&this.hooks.onclose.call(this),u("onclose",this),k.splice(k.indexOf(this),1),this.__internal.isOpen=!1,H()),k.length||"0"!==ye||document.body.removeAttribute("tabindex"),this},closeOthers:function(){return M.closeAll(this),this},destroy:function(){return this.__internal&&(this.__internal.isOpen?(this.__internal.destroy=function(){r(this,m)},this.close()):this.__internal.destroy||r(this,m)),this}}}(),C=function(){function i(e){e.__internal||(e.__internal={position:M.defaults.notifier.position,delay:M.defaults.notifier.delay},d=document.createElement("DIV"),("transitionOff"in _.notifier?_.notifier.transitionOff:_.transitionOff)&&(f=m.base+" ajs-no-transition"),l(e)),d.parentNode!==document.body&&document.body.appendChild(d)}function o(e){e.__internal.pushed=!0,u.push(e)}function s(e){u.splice(u.indexOf(e),1),e.__internal.pushed=!1}function l(e){switch(d.className=f,e.__internal.position){case"top-right":t(d,m.top+" "+m.right);break;case"top-left":t(d,m.top+" "+m.left);break;case"top-center":t(d,m.top+" "+m.center);break;case"bottom-left":t(d,m.bottom+" "+m.left);break;case"bottom-center":t(d,m.bottom+" "+m.center);break;default:case"bottom-right":t(d,m.bottom+" "+m.right)}}function r(i,l){function r(e,t){t.__internal.closeButton&&"true"!==e.target.getAttribute("data-close")||t.dismiss(!0)}function u(e,t){w(t.element,z.type,u),d.removeChild(t.element)}function f(e){clearTimeout(e.__internal.timer),clearTimeout(e.__internal.transitionTimeout)}return function(e){return e.__internal||(e.__internal={pushed:!1,delay:void 0,timer:void 0,clickHandler:void 0,transitionEndHandler:void 0,transitionTimeout:void 0},e.__internal.clickHandler=c(e,r),e.__internal.transitionEndHandler=c(e,u)),e}({element:i,push:function(e,n){if(!this.__internal.pushed){var i,s;switch(o(this),f(this),arguments.length){case 0:s=this.__internal.delay;break;case 1:"number"==typeof e?s=e:(i=e,s=this.__internal.delay);break;case 2:i=e,s=n}return this.__internal.closeButton=M.defaults.notifier.closeButton,void 0!==i&&this.setContent(i),C.__internal.position.indexOf("top")<0?d.appendChild(this.element):d.insertBefore(this.element,d.firstChild),this.element.offsetWidth,t(this.element,m.visible),O(this.element,"click",this.__internal.clickHandler),this.delay(s)}return this},ondismiss:function(){},callback:l,dismiss:function(e){return this.__internal.pushed&&(f(this),"function"==typeof this.ondismiss&&!1===this.ondismiss.call(this)||(w(this.element,"click",this.__internal.clickHandler),void 0!==this.element&&this.element.parentNode===d&&(this.__internal.transitionTimeout=setTimeout(this.__internal.transitionEndHandler,z.supported?1e3:100),n(this.element,m.visible),"function"==typeof this.callback&&this.callback.call(this,e)),s(this))),this},delay:function(e){if(f(this),this.__internal.delay=void 0===e||isNaN(+e)?C.__internal.delay:+e,this.__internal.delay>0){var t=this;this.__internal.timer=setTimeout((function(){t.dismiss()}),1e3*this.__internal.delay)}return this},setContent:function(n){if("string"==typeof n?(a(this.element),this.element.innerHTML=n):n instanceof e.HTMLElement&&this.element.firstChild!==n&&(a(this.element),this.element.appendChild(n)),this.__internal.closeButton){var i=document.createElement("span");t(i,m.close),i.setAttribute("data-close",!0),this.element.appendChild(i)}return this},dismissOthers:function(){return C.dismissAll(this),this}})}var d,u=[],m=_.notifier.classes,f=m.base;return{setting:function(e,t){if(i(this),void 0===t)return this.__internal[e];switch(e){case"position":this.__internal.position=t,l(this);break;case"delay":this.__internal.delay=t}return this},set:function(e,t){return this.setting(e,t),this},get:function(e){return this.setting(e)},create:function(e,t){i(this);var n=document.createElement("div");return n.className=m.message+("string"==typeof e&&""!==e?" "+m.prefix+e:""),r(n,t)},dismissAll:function(e){for(var t=u.slice(0),n=0;n<t.length;n+=1){var i=t[n];void 0!==e&&e===i||i.dismiss()}}}}(),M=new function(){function e(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n]);return e}function t(e){var t=i[e].dialog;return t&&"function"==typeof t.__init&&t.__init(t),t}function n(t,n,o,s){var a={dialog:null,factory:n};return void 0!==s&&(a.factory=function(){return e(new i[s].factory,new n)}),o||(a.dialog=e(new a.factory,T)),i[t]=a}var i={};return{defaults:_,dialog:function(i,o,s,a){if("function"!=typeof o)return t(i);if(this.hasOwnProperty(i))throw new Error("alertify.dialog: name already exists");var l=n(i,o,s,a);this[i]=s?function(){if(0===arguments.length)return l.dialog;var t=e(new l.factory,T);return t&&"function"==typeof t.__init&&t.__init(t),t.main.apply(t,arguments),t.show.apply(t)}:function(){if(l.dialog&&"function"==typeof l.dialog.__init&&l.dialog.__init(l.dialog),0===arguments.length)return l.dialog;var e=l.dialog;return e.main.apply(l.dialog,arguments),e.show.apply(l.dialog)}},closeAll:function(e){for(var t=k.slice(0),n=0;n<t.length;n+=1){var i=t[n];void 0!==e&&e===i||i.close()}},setting:function(e,n,i){if("notifier"===e)return C.setting(n,i);var o=t(e);return o?o.setting(n,i):void 0},set:function(e,t,n){return this.setting(e,t,n)},get:function(e,t){return this.setting(e,t)},notify:function(e,t,n,i){return C.create(t,i).push(e,n)},message:function(e,t,n){return C.create(null,n).push(e,t)},success:function(e,t,n){return C.create("success",n).push(e,t)},error:function(e,t,n){return C.create("error",n).push(e,t)},warning:function(e,t,n){return C.create("warning",n).push(e,t)},dismissAll:function(){C.dismissAll()}}};M.dialog("alert",(function(){return{main:function(e,t,n){var i,o,s;switch(arguments.length){case 1:o=e;break;case 2:"function"==typeof t?(o=e,s=t):(i=e,o=t);break;case 3:i=e,o=t,s=n}return this.set("title",i),this.set("message",o),this.set("onok",s),this},setup:function(){return{buttons:[{text:M.defaults.glossary.ok,key:h,invokeOnClose:!0,className:M.defaults.theme.ok}],focus:{element:0,select:!1},options:{maximizable:!1,resizable:!1}}},build:function(){},prepare:function(){},setMessage:function(e){this.setContent(e)},settings:{message:void 0,onok:void 0,label:void 0},settingUpdated:function(e,t,n){switch(e){case"message":this.setMessage(n);break;case"label":this.__internal.buttons[0].element&&(this.__internal.buttons[0].element.innerHTML=n)}},callback:function(e){if("function"==typeof this.get("onok")){var t=this.get("onok").call(this,e);void 0!==t&&(e.cancel=!t)}}}})),M.dialog("confirm",(function(){function e(e){null!==n.timer&&(clearInterval(n.timer),n.timer=null,e.__internal.buttons[n.index].element.innerHTML=n.text)}function t(t,i,o){e(t),n.duration=o,n.index=i,n.text=t.__internal.buttons[i].element.innerHTML,n.timer=setInterval(c(t,n.task),1e3),n.task(null,t)}var n={timer:null,index:null,text:null,duration:null,task:function(t,i){if(i.isOpen()){if(i.__internal.buttons[n.index].element.innerHTML=n.text+" (&#8207;"+n.duration+"&#8207;) ",n.duration-=1,-1===n.duration){e(i);var o=i.__internal.buttons[n.index],s=d(n.index,o);"function"==typeof i.callback&&i.callback.apply(i,[s]),!1!==s.close&&i.close()}}else e(i)}};return{main:function(e,t,n,i){var o,s,a,l;switch(arguments.length){case 1:s=e;break;case 2:s=e,a=t;break;case 3:s=e,a=t,l=n;break;case 4:o=e,s=t,a=n,l=i}return this.set("title",o),this.set("message",s),this.set("onok",a),this.set("oncancel",l),this},setup:function(){return{buttons:[{text:M.defaults.glossary.ok,key:f,className:M.defaults.theme.ok},{text:M.defaults.glossary.cancel,key:h,invokeOnClose:!0,className:M.defaults.theme.cancel}],focus:{element:0,select:!1},options:{maximizable:!1,resizable:!1}}},build:function(){},prepare:function(){},setMessage:function(e){this.setContent(e)},settings:{message:null,labels:null,onok:null,oncancel:null,defaultFocus:null,reverseButtons:null},settingUpdated:function(e,t,n){switch(e){case"message":this.setMessage(n);break;case"labels":"ok"in n&&this.__internal.buttons[0].element&&(this.__internal.buttons[0].text=n.ok,this.__internal.buttons[0].element.innerHTML=n.ok),"cancel"in n&&this.__internal.buttons[1].element&&(this.__internal.buttons[1].text=n.cancel,this.__internal.buttons[1].element.innerHTML=n.cancel);break;case"reverseButtons":!0===n?this.elements.buttons.primary.appendChild(this.__internal.buttons[0].element):this.elements.buttons.primary.appendChild(this.__internal.buttons[1].element);break;case"defaultFocus":this.__internal.focus.element="ok"===n?0:1}},callback:function(t){var n;switch(e(this),t.index){case 0:"function"==typeof this.get("onok")&&void 0!==(n=this.get("onok").call(this,t))&&(t.cancel=!n);break;case 1:"function"==typeof this.get("oncancel")&&void 0!==(n=this.get("oncancel").call(this,t))&&(t.cancel=!n)}},autoOk:function(e){return t(this,0,e),this},autoCancel:function(e){return t(this,1,e),this}}})),M.dialog("prompt",(function(){var t=document.createElement("INPUT"),n=document.createElement("P");return{main:function(e,t,n,i,o){var s,a,l,r,c;switch(arguments.length){case 1:a=e;break;case 2:a=e,l=t;break;case 3:a=e,l=t,r=n;break;case 4:a=e,l=t,r=n,c=i;break;case 5:s=e,a=t,l=n,r=i,c=o}return this.set("title",s),this.set("message",a),this.set("value",l),this.set("onok",r),this.set("oncancel",c),this},setup:function(){return{buttons:[{text:M.defaults.glossary.ok,key:f,className:M.defaults.theme.ok},{text:M.defaults.glossary.cancel,key:h,invokeOnClose:!0,className:M.defaults.theme.cancel}],focus:{element:t,select:!0},options:{maximizable:!1,resizable:!1}}},build:function(){t.className=M.defaults.theme.input,t.setAttribute("type","text"),t.value=this.get("value"),this.elements.content.appendChild(n),this.elements.content.appendChild(t)},prepare:function(){},setMessage:function(t){"string"==typeof t?(a(n),n.innerHTML=t):t instanceof e.HTMLElement&&n.firstChild!==t&&(a(n),n.appendChild(t))},settings:{message:void 0,labels:void 0,onok:void 0,oncancel:void 0,value:"",type:"text",reverseButtons:void 0},settingUpdated:function(e,n,i){switch(e){case"message":this.setMessage(i);break;case"value":t.value=i;break;case"type":switch(i){case"text":case"color":case"date":case"datetime-local":case"email":case"month":case"number":case"password":case"search":case"tel":case"time":case"week":t.type=i;break;default:t.type="text"}break;case"labels":i.ok&&this.__internal.buttons[0].element&&(this.__internal.buttons[0].element.innerHTML=i.ok),i.cancel&&this.__internal.buttons[1].element&&(this.__internal.buttons[1].element.innerHTML=i.cancel);break;case"reverseButtons":!0===i?this.elements.buttons.primary.appendChild(this.__internal.buttons[0].element):this.elements.buttons.primary.appendChild(this.__internal.buttons[1].element)}},callback:function(e){var n;switch(e.index){case 0:this.settings.value=t.value,"function"==typeof this.get("onok")&&void 0!==(n=this.get("onok").call(this,e,this.settings.value))&&(e.cancel=!n);break;case 1:"function"==typeof this.get("oncancel")&&void 0!==(n=this.get("oncancel").call(this,e))&&(e.cancel=!n),e.cancel||(t.value=this.settings.value)}}}})),"object"==typeof module&&"object"==typeof module.exports?module.exports=M:"function"==typeof define&&define.amd?define([],(function(){return M})):e.alertify||(e.alertify=M)}("undefined"!=typeof window?window:this);