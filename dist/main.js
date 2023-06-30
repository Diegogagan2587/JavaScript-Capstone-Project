"use strict";(self.webpackChunkJavaScript_Capstone_Project=self.webpackChunkJavaScript_Capstone_Project||[]).push([[179],{426:(n,e,t)=>{t.d(e,{Z:()=>s});var a=t(81),o=t.n(a),r=t(645),i=t.n(r)()(o());i.push([n.id,"* {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n  scroll-behavior: smooth;\n  text-decoration: none;\n  list-style: none;\n}\n\n.header {\n  display: flex;\n  margin: 0 auto;\n  background-color: darkred;\n}\n\nnav {\n  display: flex;\n  align-items: center;\n  font-size: 1.8rem;\n  gap: 2rem;\n  padding: 0 10%;\n  height: 12vh;\n}\n\nli a {\n  color: white;\n}\n\n.nav-list-container {\n  display: flex;\n  gap: 1.5rem;\n}\n\n.main-general-container {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  row-gap: 3rem;\n  column-gap: 3rem;\n}\n\n.cardContainer {\n  display: flex;\n  gap: 1rem;\n  flex-direction: column;\n  padding: 2rem;\n  border: solid rgb(0, 84, 117) 1px;\n  border-radius: 5px;\n}\n\nmain {\n  background-color: lightblue;\n  margin: 0 auto;\n  padding: 10%;\n}\n\n.countryFlag-img {\n  width: 100%;\n  height: 10rem;\n  border-radius: 5px;\n}\n\n.display-none {\n  display: none;\n}\n\n.nameLike {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.commentsBox {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\nbutton {\n  padding: 0.5rem 1rem;\n}\n\n#footer {\n  color: white;\n}\n\n.likeIcon {\n  width: 0.9rem;\n  height: 0.9rem;\n}\n\n/* ------Footer Section-------- */\nfooter {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: darkred;\n  font-size: 2.4rem;\n  height: 10vh;\n}\n\n/* s0000000000000000 */\n@media screen and (max-width: 900px) {\n  .main-general-container {\n    display: grid;\n    grid-template-columns: repeat(2, 1fr);\n    row-gap: 3rem;\n    column-gap: 3rem;\n  }\n}\n\n@media screen and (max-width: 550px) {\n  nav {\n    padding-left: 4%;\n    font-size: inherit;\n    width: 100%;\n  }\n\n  #footer {\n    font-size: 1rem;\n  }\n\n  .main-general-container {\n    grid-template-columns: 1fr;\n  }\n}\n",""]);const s=i},790:(n,e,t)=>{t.d(e,{Z:()=>s});var a=t(81),o=t.n(a),r=t(645),i=t.n(r)()(o());i.push([n.id,"/* ------Start Pop-Up Section-------- */\n.hide {\n  display: none;\n}\n\n.pop-up {\n  position: fixed;\n  top: 0;\n  padding-top: 2vh;\n  padding-bottom: 2vh;\n  width: 100%;\n  height: 100%;\n  background-color: #2222224f;\n  backdrop-filter: blur(5px);\n}\n\n.pop-up .card {\n  width: 80vmin;\n  max-height: 90vh;\n  margin-left: auto;\n  margin-right: auto;\n  border: 2px solid gray;\n  background-color: #fff;\n  padding: 3%;\n  padding-left: 15vmin;\n  padding-right: 15vmin;\n  display: flex;\n  gap: 1.25vmin;\n  flex-direction: column;\n  align-items: center;\n  overflow-y: auto;\n  overflow-x: hidden;\n}\n\n.card .close-pop-up {\n  color: red;\n  font-weight: bold;\n  margin-right: -10vmin;\n  margin-left: auto;\n  position: fixed;\n  align-self: flex-end;\n}\n\n.card img {\n  width: 100%;\n}\n\n.card .characteristics {\n  display: flex;\n  flex-wrap: wrap;\n  width: 100%;\n}\n\n.characteristics .element {\n  flex-basis: 50%;\n  padding: 3%;\n}\n\n.comments-box {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 1.25vmin;\n  width: 100%;\n}\n\n.comments-box .comments-list {\n  padding: 3%;\n}\n\n.add-comments {\n  display: flex;\n  flex-direction: column;\n  gap: 1vmin;\n  align-items: flex-start;\n  width: 100%;\n}\n\n.add-comments input,\ntextarea {\n  padding: 2%;\n}\n\n.add-comments textarea {\n  width: 100%;\n}\n\n.add-comments button {\n  width: fit-content;\n}\n\n/* ------End Pop-Up Section-------- */\n",""]);const s=i},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",a=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),a&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),a&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,a,o,r){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(a)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(i[c]=!0)}for(var l=0;l<n.length;l++){var d=[].concat(n[l]);a&&i[d[0]]||(void 0!==r&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=r),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),e.push(d))}},e}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,a=0;a<e.length;a++)if(e[a].identifier===n){t=a;break}return t}function a(n,a){for(var r={},i=[],s=0;s<n.length;s++){var c=n[s],l=a.base?c[0]+a.base:c[0],d=r[l]||0,m="".concat(l," ").concat(d);r[l]=d+1;var p=t(m),u={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)e[p].references++,e[p].updater(u);else{var f=o(u,a);a.byIndex=s,e.splice(s,0,{identifier:m,updater:f,references:1})}i.push(m)}return i}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var r=a(n=n||[],o=o||{});return function(n){n=n||[];for(var i=0;i<r.length;i++){var s=t(r[i]);e[s].references--}for(var c=a(n,o),l=0;l<r.length;l++){var d=t(r[l]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}r=c}}},569:n=>{var e={};n.exports=function(n,t){var a=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var a="";t.supports&&(a+="@supports (".concat(t.supports,") {")),t.media&&(a+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(a+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),a+=t.css,o&&(a+="}"),t.media&&(a+="}"),t.supports&&(a+="}");var r=t.sourceMap;r&&"undefined"!=typeof btoa&&(a+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),e.styleTagTransform(a,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},737:(n,e,t)=>{var a=t(379),o=t.n(a),r=t(795),i=t.n(r),s=t(569),c=t.n(s),l=t(565),d=t.n(l),m=t(216),p=t.n(m),u=t(589),f=t.n(u),h=t(426),g={};g.styleTagTransform=f(),g.setAttributes=d(),g.insert=c().bind(null,"head"),g.domAPI=i(),g.insertStyleElement=p(),o()(h.Z,g),h.Z&&h.Z.locals&&h.Z.locals;var y=t(790),v={};v.styleTagTransform=f(),v.setAttributes=d(),v.insert=c().bind(null,"head"),v.domAPI=i(),v.insertStyleElement=p(),o()(y.Z,v),y.Z&&y.Z.locals&&y.Z.locals;const x=document.querySelector(".pop-up"),b=async n=>{const e=n.target.parentNode,t=e.querySelector(".conutryName").innerText,a=e.querySelector(".countryFlag-img").src,o=e.querySelector(".itemliSecond").innerText,r=e.querySelector(".itemlithird").innerText,i=e.querySelector(".itemliforth").innerText,s=await(async n=>{const e=`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/yY6kfgXjWJt5yNZEfFYH/comments?item_id=item${n}`,t=await fetch(e);return await t.json()})(t),c=((n,e="#",t,a,o,r)=>`\n<div class="card">\n  <button type="button" class="close-pop-up">X</button>\n  <img src="${e}" alt="description here">\n  <h3>${n}</h3>\n  <div class="characteristics">\n      <span class="element">${t}</span>\n      <span class="element">${a}</span>\n      <span class="element">${o}</span>\n      <span class="element">${r}</span>\n  </div>\n\n  <div class="comments-box">\n    <h3>Comments<span id="comments-counter"></span></h3>\n    <ul class="comments-list">\n      <li>\n          <span class="date">03/11/2021</span>\n          <span class="user">Alex Marin :</span>\n          <span class="comment">I'd love to buty it!</span>\n      </li>\n    </ul>\n  </div>\n\n  <form class="add-comments">\n    <input type="text" placeholder="Your name" id="your-name" >\n    <textarea placeholder="Your Insights" id="input-your-comments"></textarea>\n    <button type="button" class="submit-comment-btn">Comment</button type="button">\n  </form>\n</div>\n`)(t,a,t,o,r,i);x.innerHTML=c;const l=x.querySelector(".close-pop-up"),d=x.querySelector(".comments-list");s.error?x.querySelector(".comments-list").innerHTML="<p>No Comments So far</p>":s.forEach((n=>{const e=document.createElement("li");e.innerHTML=`\n      <span class="date">${n.creation_date}</span>\n      <span class="user">${n.username} :</span>\n      <span class="comment">${n.comment}</span>\n      `,d.appendChild(e)}));const m=document.querySelector("#comments-counter"),p=document.createElement("span"),u=document.querySelectorAll(".comments-list li");p.innerText=`(${(n=>{let e=0;return n?(e=n.length,e):0})(u)})`,m.appendChild(p);const f=x.querySelector(".submit-comment-btn");x.classList.remove("hide"),l.addEventListener("click",(()=>{x.classList.add("hide")})),f.addEventListener("click",(n=>{(async(n,e,t,a)=>{const o=(await fetch("https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/yY6kfgXjWJt5yNZEfFYH/comments",{method:"POST",body:JSON.stringify({item_id:`item${n}`,username:e,comment:t}),headers:{"Content-type":"application/json; charset=UTF-8"}})).status,r=document.createElement("li");r.innerHTML=`\n  <span class="date">Today</span>\n  <span class="user">${e} :</span>\n  <span class="comment">${t}</span>\n  `,a.appendChild(r)})(t,n.target.parentNode.querySelector("#your-name").value,n.target.parentNode.querySelector("#input-your-comments").value,n.target.parentNode.parentNode.querySelector(".comments-box").querySelector(".comments-list"))}))},w=async n=>n?n.length:0,S=new class{constructor(){this.id="yY6kfgXjWJt5yNZEfFYH",this.baseURL=`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${this.id}/`}addLike=async n=>{try{await fetch(`${this.baseURL}likes`,{method:"POST",body:JSON.stringify({item_id:n}),headers:{"Content-type":"application/json; charset=UTF-8"}})}catch(n){throw new Error(n)}};getLikeAmount=async n=>{const e=await this.getAllLikeInfo();let t=await e.find((e=>e.item_id===n));return t=parseInt(t.likes,10),t||0};getAllLikeInfo=async()=>{const n=await fetch(`${this.baseURL}likes`);return[...await n.json()]}};(async()=>{const n=document.querySelector(".main-general-container"),e=(await(async()=>{const n=await fetch("https://restcountries.com/v3.1/all?fields=name,capital,area,population,subregion,flags");return(await n.json()).slice(0,12)})()).map((async e=>{const t=await(async n=>{try{const e=document.createElement("div");e.className="cardContainer";const t=document.createElement("img");t.className="countryFlag-img";const a=document.createElement("div");a.className="nameLike";const o=document.createElement("button");o.className="conutryName";const r=document.createElement("p");r.className="conutryName";const i=document.createElement("button");i.className="commentBtn",i.addEventListener("click",b);const s=document.createElement("p");s.className="likeNumber";const c=document.createElement("ion-icon");c.className="likeIcon";const l=document.createElement("ul");l.className="itemList",l.classList.add("display-none");const d=document.createElement("li");d.className="itemliSecond";const m=document.createElement("li");m.className="itemlithird";const p=document.createElement("li");p.className="itemliforth",r.textContent=`Name: ${n.name.common}`,c.setAttribute("name","heart-outline");const u=await S.getLikeAmount(n.name.common);return u?s.innerText=`${u} likes`:s.textContent="no likes",o.textContent="LIKE",o.addEventListener("click",(async()=>{await S.addLike(n.name.common);const e=await S.getLikeAmount(n.name.common);s.innerText=`${e} likes`})),i.textContent="COMMENTS",t.src=n.flags.png,d.textContent=`Area: ${n.area}`,m.textContent=`Subregion: ${n.subregion} `,p.textContent=`Population: ${n.population}`,e.append(t),a.append(r),a.append(s),o.append(c),l.appendChild(d),l.appendChild(m),l.appendChild(p),e.append(a),e.append(o),e.append(i),e.append(l),e}catch(n){return n}})(e);return t?(n.appendChild(t),t):0})),t=await Promise.all(e.filter(Boolean)),a=await w(t);document.querySelector(".country-numbers").textContent=`Countries (${a})`})(),w()}},n=>{n(n.s=737)}]);