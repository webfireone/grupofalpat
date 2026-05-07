(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const u of o.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&i(u)}).observe(document,{childList:!0,subtree:!0});function e(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(s){if(s.ep)return;s.ep=!0;const o=e(s);fetch(s.href,o)}})();var cs={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qs=function(n){const t=[];let e=0;for(let i=0;i<n.length;i++){let s=n.charCodeAt(i);s<128?t[e++]=s:s<2048?(t[e++]=s>>6|192,t[e++]=s&63|128):(s&64512)===55296&&i+1<n.length&&(n.charCodeAt(i+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++i)&1023),t[e++]=s>>18|240,t[e++]=s>>12&63|128,t[e++]=s>>6&63|128,t[e++]=s&63|128):(t[e++]=s>>12|224,t[e++]=s>>6&63|128,t[e++]=s&63|128)}return t},za=function(n){const t=[];let e=0,i=0;for(;e<n.length;){const s=n[e++];if(s<128)t[i++]=String.fromCharCode(s);else if(s>191&&s<224){const o=n[e++];t[i++]=String.fromCharCode((s&31)<<6|o&63)}else if(s>239&&s<365){const o=n[e++],u=n[e++],c=n[e++],f=((s&7)<<18|(o&63)<<12|(u&63)<<6|c&63)-65536;t[i++]=String.fromCharCode(55296+(f>>10)),t[i++]=String.fromCharCode(56320+(f&1023))}else{const o=n[e++],u=n[e++];t[i++]=String.fromCharCode((s&15)<<12|(o&63)<<6|u&63)}}return t.join("")},Ws={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,t){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const e=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let s=0;s<n.length;s+=3){const o=n[s],u=s+1<n.length,c=u?n[s+1]:0,f=s+2<n.length,g=f?n[s+2]:0,I=o>>2,w=(o&3)<<4|c>>4;let S=(c&15)<<2|g>>6,C=g&63;f||(C=64,u||(S=64)),i.push(e[I],e[w],e[S],e[C])}return i.join("")},encodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(n):this.encodeByteArray(Qs(n),t)},decodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(n):za(this.decodeStringToByteArray(n,t))},decodeStringToByteArray(n,t){this.init_();const e=t?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let s=0;s<n.length;){const o=e[n.charAt(s++)],c=s<n.length?e[n.charAt(s)]:0;++s;const g=s<n.length?e[n.charAt(s)]:64;++s;const w=s<n.length?e[n.charAt(s)]:64;if(++s,o==null||c==null||g==null||w==null)throw new Ga;const S=o<<2|c>>4;if(i.push(S),g!==64){const C=c<<4&240|g>>2;if(i.push(C),w!==64){const V=g<<6&192|w;i.push(V)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Ga extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Ka=function(n){const t=Qs(n);return Ws.encodeByteArray(t,!0)},bn=function(n){return Ka(n).replace(/\./g,"")},Qa=function(n){try{return Ws.decodeString(n,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wa(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xa=()=>Wa().__FIREBASE_DEFAULTS__,Ya=()=>{if(typeof process>"u"||typeof cs>"u")return;const n=cs.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Ja=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=n&&Qa(n[1]);return t&&JSON.parse(t)},Hr=()=>{try{return Xa()||Ya()||Ja()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Za=n=>{var t,e;return(e=(t=Hr())===null||t===void 0?void 0:t.emulatorHosts)===null||e===void 0?void 0:e[n]},tl=n=>{const t=Za(n);if(!t)return;const e=t.lastIndexOf(":");if(e<=0||e+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const i=parseInt(t.substring(e+1),10);return t[0]==="["?[t.substring(1,e-1),i]:[t.substring(0,e),i]},Xs=()=>{var n;return(n=Hr())===null||n===void 0?void 0:n.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class el{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}wrapCallback(t){return(e,i)=>{e?this.reject(e):this.resolve(i),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(e):t(e,i))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nl(n,t){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const e={alg:"none",type:"JWT"},i=t||"demo-project",s=n.iat||0,o=n.sub||n.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const u=Object.assign({iss:`https://securetoken.google.com/${i}`,aud:i,iat:s,exp:s+3600,auth_time:s,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}}},n);return[bn(JSON.stringify(e)),bn(JSON.stringify(u)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rl(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function il(){var n;const t=(n=Hr())===null||n===void 0?void 0:n.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function sl(){return!il()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function ol(){try{return typeof indexedDB=="object"}catch{return!1}}function al(){return new Promise((n,t)=>{try{let e=!0;const i="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(i);s.onsuccess=()=>{s.result.close(),e||self.indexedDB.deleteDatabase(i),n(!0)},s.onupgradeneeded=()=>{e=!1},s.onerror=()=>{var o;t(((o=s.error)===null||o===void 0?void 0:o.message)||"")}}catch(e){t(e)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ll="FirebaseError";class de extends Error{constructor(t,e,i){super(e),this.code=t,this.customData=i,this.name=ll,Object.setPrototypeOf(this,de.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ys.prototype.create)}}class Ys{constructor(t,e,i){this.service=t,this.serviceName=e,this.errors=i}create(t,...e){const i=e[0]||{},s=`${this.service}/${t}`,o=this.errors[t],u=o?ul(o,i):"Error",c=`${this.serviceName}: ${u} (${s}).`;return new de(s,c,i)}}function ul(n,t){return n.replace(cl,(e,i)=>{const s=t[i];return s!=null?String(s):`<${i}?>`})}const cl=/\{\$([^}]+)}/g;function Sr(n,t){if(n===t)return!0;const e=Object.keys(n),i=Object.keys(t);for(const s of e){if(!i.includes(s))return!1;const o=n[s],u=t[s];if(hs(o)&&hs(u)){if(!Sr(o,u))return!1}else if(o!==u)return!1}for(const s of i)if(!e.includes(s))return!1;return!0}function hs(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ue(n){return n&&n._delegate?n._delegate:n}class je{constructor(t,e,i){this.name=t,this.instanceFactory=e,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kt="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hl{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const i=new el;if(this.instancesDeferred.set(e,i),this.isInitialized(e)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:e});s&&i.resolve(s)}catch{}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const i=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),s=(e=t==null?void 0:t.optional)!==null&&e!==void 0?e:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(o){if(s)return null;throw o}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(dl(t))try{this.getOrInitializeService({instanceIdentifier:Kt})}catch{}for(const[e,i]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(e);try{const o=this.getOrInitializeService({instanceIdentifier:s});i.resolve(o)}catch{}}}}clearInstance(t=Kt){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...t.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Kt){return this.instances.has(t)}getOptions(t=Kt){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,i=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:i,options:e});for(const[o,u]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(o);i===c&&u.resolve(s)}return s}onInit(t,e){var i;const s=this.normalizeInstanceIdentifier(e),o=(i=this.onInitCallbacks.get(s))!==null&&i!==void 0?i:new Set;o.add(t),this.onInitCallbacks.set(s,o);const u=this.instances.get(s);return u&&t(u,s),()=>{o.delete(t)}}invokeOnInitCallbacks(t,e){const i=this.onInitCallbacks.get(e);if(i)for(const s of i)try{s(t,e)}catch{}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let i=this.instances.get(t);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:fl(t),options:e}),this.instances.set(t,i),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(i,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,i)}catch{}return i||null}normalizeInstanceIdentifier(t=Kt){return this.component?this.component.multipleInstances?t:Kt:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function fl(n){return n===Kt?void 0:n}function dl(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pl{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new hl(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var F;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(F||(F={}));const ml={debug:F.DEBUG,verbose:F.VERBOSE,info:F.INFO,warn:F.WARN,error:F.ERROR,silent:F.SILENT},gl=F.INFO,_l={[F.DEBUG]:"log",[F.VERBOSE]:"log",[F.INFO]:"info",[F.WARN]:"warn",[F.ERROR]:"error"},yl=(n,t,...e)=>{if(t<n.logLevel)return;const i=new Date().toISOString(),s=_l[t];if(s)console[s](`[${i}]  ${n.name}:`,...e);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Js{constructor(t){this.name=t,this._logLevel=gl,this._logHandler=yl,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in F))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?ml[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,F.DEBUG,...t),this._logHandler(this,F.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,F.VERBOSE,...t),this._logHandler(this,F.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,F.INFO,...t),this._logHandler(this,F.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,F.WARN,...t),this._logHandler(this,F.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,F.ERROR,...t),this._logHandler(this,F.ERROR,...t)}}const El=(n,t)=>t.some(e=>n instanceof e);let fs,ds;function vl(){return fs||(fs=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Tl(){return ds||(ds=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Zs=new WeakMap,br=new WeakMap,to=new WeakMap,vr=new WeakMap,zr=new WeakMap;function Il(n){const t=new Promise((e,i)=>{const s=()=>{n.removeEventListener("success",o),n.removeEventListener("error",u)},o=()=>{e(Mt(n.result)),s()},u=()=>{i(n.error),s()};n.addEventListener("success",o),n.addEventListener("error",u)});return t.then(e=>{e instanceof IDBCursor&&Zs.set(e,n)}).catch(()=>{}),zr.set(t,n),t}function Al(n){if(br.has(n))return;const t=new Promise((e,i)=>{const s=()=>{n.removeEventListener("complete",o),n.removeEventListener("error",u),n.removeEventListener("abort",u)},o=()=>{e(),s()},u=()=>{i(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",o),n.addEventListener("error",u),n.addEventListener("abort",u)});br.set(n,t)}let Cr={get(n,t,e){if(n instanceof IDBTransaction){if(t==="done")return br.get(n);if(t==="objectStoreNames")return n.objectStoreNames||to.get(n);if(t==="store")return e.objectStoreNames[1]?void 0:e.objectStore(e.objectStoreNames[0])}return Mt(n[t])},set(n,t,e){return n[t]=e,!0},has(n,t){return n instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in n}};function wl(n){Cr=n(Cr)}function Rl(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...e){const i=n.call(Tr(this),t,...e);return to.set(i,t.sort?t.sort():[t]),Mt(i)}:Tl().includes(n)?function(...t){return n.apply(Tr(this),t),Mt(Zs.get(this))}:function(...t){return Mt(n.apply(Tr(this),t))}}function Pl(n){return typeof n=="function"?Rl(n):(n instanceof IDBTransaction&&Al(n),El(n,vl())?new Proxy(n,Cr):n)}function Mt(n){if(n instanceof IDBRequest)return Il(n);if(vr.has(n))return vr.get(n);const t=Pl(n);return t!==n&&(vr.set(n,t),zr.set(t,n)),t}const Tr=n=>zr.get(n);function Sl(n,t,{blocked:e,upgrade:i,blocking:s,terminated:o}={}){const u=indexedDB.open(n,t),c=Mt(u);return i&&u.addEventListener("upgradeneeded",f=>{i(Mt(u.result),f.oldVersion,f.newVersion,Mt(u.transaction),f)}),e&&u.addEventListener("blocked",f=>e(f.oldVersion,f.newVersion,f)),c.then(f=>{o&&f.addEventListener("close",()=>o()),s&&f.addEventListener("versionchange",g=>s(g.oldVersion,g.newVersion,g))}).catch(()=>{}),c}const bl=["get","getKey","getAll","getAllKeys","count"],Cl=["put","add","delete","clear"],Ir=new Map;function ps(n,t){if(!(n instanceof IDBDatabase&&!(t in n)&&typeof t=="string"))return;if(Ir.get(t))return Ir.get(t);const e=t.replace(/FromIndex$/,""),i=t!==e,s=Cl.includes(e);if(!(e in(i?IDBIndex:IDBObjectStore).prototype)||!(s||bl.includes(e)))return;const o=async function(u,...c){const f=this.transaction(u,s?"readwrite":"readonly");let g=f.store;return i&&(g=g.index(c.shift())),(await Promise.all([g[e](...c),s&&f.done]))[0]};return Ir.set(t,o),o}wl(n=>({...n,get:(t,e,i)=>ps(t,e)||n.get(t,e,i),has:(t,e)=>!!ps(t,e)||n.has(t,e)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vl{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(Dl(e)){const i=e.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(e=>e).join(" ")}}function Dl(n){const t=n.getComponent();return(t==null?void 0:t.type)==="VERSION"}const Vr="@firebase/app",ms="0.10.13";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vt=new Js("@firebase/app"),Nl="@firebase/app-compat",Ol="@firebase/analytics-compat",kl="@firebase/analytics",Ml="@firebase/app-check-compat",xl="@firebase/app-check",Ll="@firebase/auth",Fl="@firebase/auth-compat",Bl="@firebase/database",Ul="@firebase/data-connect",jl="@firebase/database-compat",$l="@firebase/functions",ql="@firebase/functions-compat",Hl="@firebase/installations",zl="@firebase/installations-compat",Gl="@firebase/messaging",Kl="@firebase/messaging-compat",Ql="@firebase/performance",Wl="@firebase/performance-compat",Xl="@firebase/remote-config",Yl="@firebase/remote-config-compat",Jl="@firebase/storage",Zl="@firebase/storage-compat",tu="@firebase/firestore",eu="@firebase/vertexai-preview",nu="@firebase/firestore-compat",ru="firebase",iu="10.14.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dr="[DEFAULT]",su={[Vr]:"fire-core",[Nl]:"fire-core-compat",[kl]:"fire-analytics",[Ol]:"fire-analytics-compat",[xl]:"fire-app-check",[Ml]:"fire-app-check-compat",[Ll]:"fire-auth",[Fl]:"fire-auth-compat",[Bl]:"fire-rtdb",[Ul]:"fire-data-connect",[jl]:"fire-rtdb-compat",[$l]:"fire-fn",[ql]:"fire-fn-compat",[Hl]:"fire-iid",[zl]:"fire-iid-compat",[Gl]:"fire-fcm",[Kl]:"fire-fcm-compat",[Ql]:"fire-perf",[Wl]:"fire-perf-compat",[Xl]:"fire-rc",[Yl]:"fire-rc-compat",[Jl]:"fire-gcs",[Zl]:"fire-gcs-compat",[tu]:"fire-fst",[nu]:"fire-fst-compat",[eu]:"fire-vertex","fire-js":"fire-js",[ru]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cn=new Map,ou=new Map,Nr=new Map;function gs(n,t){try{n.container.addComponent(t)}catch(e){Vt.debug(`Component ${t.name} failed to register with FirebaseApp ${n.name}`,e)}}function Vn(n){const t=n.name;if(Nr.has(t))return Vt.debug(`There were multiple attempts to register component ${t}.`),!1;Nr.set(t,n);for(const e of Cn.values())gs(e,n);for(const e of ou.values())gs(e,n);return!0}function au(n,t){const e=n.container.getProvider("heartbeat").getImmediate({optional:!0});return e&&e.triggerHeartbeat(),n.container.getProvider(t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lu={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},xt=new Ys("app","Firebase",lu);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uu{constructor(t,e,i){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new je("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw xt.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cu=iu;function eo(n,t={}){let e=n;typeof t!="object"&&(t={name:t});const i=Object.assign({name:Dr,automaticDataCollectionEnabled:!1},t),s=i.name;if(typeof s!="string"||!s)throw xt.create("bad-app-name",{appName:String(s)});if(e||(e=Xs()),!e)throw xt.create("no-options");const o=Cn.get(s);if(o){if(Sr(e,o.options)&&Sr(i,o.config))return o;throw xt.create("duplicate-app",{appName:s})}const u=new pl(s);for(const f of Nr.values())u.addComponent(f);const c=new uu(e,i,u);return Cn.set(s,c),c}function hu(n=Dr){const t=Cn.get(n);if(!t&&n===Dr&&Xs())return eo();if(!t)throw xt.create("no-app",{appName:n});return t}function oe(n,t,e){var i;let s=(i=su[n])!==null&&i!==void 0?i:n;e&&(s+=`-${e}`);const o=s.match(/\s|\//),u=t.match(/\s|\//);if(o||u){const c=[`Unable to register library "${s}" with version "${t}":`];o&&c.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&u&&c.push("and"),u&&c.push(`version name "${t}" contains illegal characters (whitespace or "/")`),Vt.warn(c.join(" "));return}Vn(new je(`${s}-version`,()=>({library:s,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fu="firebase-heartbeat-database",du=1,$e="firebase-heartbeat-store";let Ar=null;function no(){return Ar||(Ar=Sl(fu,du,{upgrade:(n,t)=>{switch(t){case 0:try{n.createObjectStore($e)}catch(e){console.warn(e)}}}}).catch(n=>{throw xt.create("idb-open",{originalErrorMessage:n.message})})),Ar}async function pu(n){try{const e=(await no()).transaction($e),i=await e.objectStore($e).get(ro(n));return await e.done,i}catch(t){if(t instanceof de)Vt.warn(t.message);else{const e=xt.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});Vt.warn(e.message)}}}async function _s(n,t){try{const i=(await no()).transaction($e,"readwrite");await i.objectStore($e).put(t,ro(n)),await i.done}catch(e){if(e instanceof de)Vt.warn(e.message);else{const i=xt.create("idb-set",{originalErrorMessage:e==null?void 0:e.message});Vt.warn(i.message)}}}function ro(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mu=1024,gu=30*24*60*60*1e3;class _u{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new Eu(e),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){var t,e;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=ys();return((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(u=>u.date===o)?void 0:(this._heartbeatsCache.heartbeats.push({date:o,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(u=>{const c=new Date(u.date).valueOf();return Date.now()-c<=gu}),this._storage.overwrite(this._heartbeatsCache))}catch(i){Vt.warn(i)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=ys(),{heartbeatsToSend:i,unsentEntries:s}=yu(this._heartbeatsCache.heartbeats),o=bn(JSON.stringify({version:2,heartbeats:i}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(e){return Vt.warn(e),""}}}function ys(){return new Date().toISOString().substring(0,10)}function yu(n,t=mu){const e=[];let i=n.slice();for(const s of n){const o=e.find(u=>u.agent===s.agent);if(o){if(o.dates.push(s.date),Es(e)>t){o.dates.pop();break}}else if(e.push({agent:s.agent,dates:[s.date]}),Es(e)>t){e.pop();break}i=i.slice(1)}return{heartbeatsToSend:e,unsentEntries:i}}class Eu{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return ol()?al().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const e=await pu(this.app);return e!=null&&e.heartbeats?e:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var e;if(await this._canUseIndexedDBPromise){const s=await this.read();return _s(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:s.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var e;if(await this._canUseIndexedDBPromise){const s=await this.read();return _s(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...t.heartbeats]})}else return}}function Es(n){return bn(JSON.stringify({version:2,heartbeats:n})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vu(n){Vn(new je("platform-logger",t=>new Vl(t),"PRIVATE")),Vn(new je("heartbeat",t=>new _u(t),"PRIVATE")),oe(Vr,ms,n),oe(Vr,ms,"esm2017"),oe("fire-js","")}vu("");var Tu="firebase",Iu="10.14.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */oe(Tu,Iu,"app");var vs=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var io;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(E,d){function m(){}m.prototype=d.prototype,E.D=d.prototype,E.prototype=new m,E.prototype.constructor=E,E.C=function(_,y,T){for(var p=Array(arguments.length-2),Rt=2;Rt<arguments.length;Rt++)p[Rt-2]=arguments[Rt];return d.prototype[y].apply(_,p)}}function e(){this.blockSize=-1}function i(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}t(i,e),i.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(E,d,m){m||(m=0);var _=Array(16);if(typeof d=="string")for(var y=0;16>y;++y)_[y]=d.charCodeAt(m++)|d.charCodeAt(m++)<<8|d.charCodeAt(m++)<<16|d.charCodeAt(m++)<<24;else for(y=0;16>y;++y)_[y]=d[m++]|d[m++]<<8|d[m++]<<16|d[m++]<<24;d=E.g[0],m=E.g[1],y=E.g[2];var T=E.g[3],p=d+(T^m&(y^T))+_[0]+3614090360&4294967295;d=m+(p<<7&4294967295|p>>>25),p=T+(y^d&(m^y))+_[1]+3905402710&4294967295,T=d+(p<<12&4294967295|p>>>20),p=y+(m^T&(d^m))+_[2]+606105819&4294967295,y=T+(p<<17&4294967295|p>>>15),p=m+(d^y&(T^d))+_[3]+3250441966&4294967295,m=y+(p<<22&4294967295|p>>>10),p=d+(T^m&(y^T))+_[4]+4118548399&4294967295,d=m+(p<<7&4294967295|p>>>25),p=T+(y^d&(m^y))+_[5]+1200080426&4294967295,T=d+(p<<12&4294967295|p>>>20),p=y+(m^T&(d^m))+_[6]+2821735955&4294967295,y=T+(p<<17&4294967295|p>>>15),p=m+(d^y&(T^d))+_[7]+4249261313&4294967295,m=y+(p<<22&4294967295|p>>>10),p=d+(T^m&(y^T))+_[8]+1770035416&4294967295,d=m+(p<<7&4294967295|p>>>25),p=T+(y^d&(m^y))+_[9]+2336552879&4294967295,T=d+(p<<12&4294967295|p>>>20),p=y+(m^T&(d^m))+_[10]+4294925233&4294967295,y=T+(p<<17&4294967295|p>>>15),p=m+(d^y&(T^d))+_[11]+2304563134&4294967295,m=y+(p<<22&4294967295|p>>>10),p=d+(T^m&(y^T))+_[12]+1804603682&4294967295,d=m+(p<<7&4294967295|p>>>25),p=T+(y^d&(m^y))+_[13]+4254626195&4294967295,T=d+(p<<12&4294967295|p>>>20),p=y+(m^T&(d^m))+_[14]+2792965006&4294967295,y=T+(p<<17&4294967295|p>>>15),p=m+(d^y&(T^d))+_[15]+1236535329&4294967295,m=y+(p<<22&4294967295|p>>>10),p=d+(y^T&(m^y))+_[1]+4129170786&4294967295,d=m+(p<<5&4294967295|p>>>27),p=T+(m^y&(d^m))+_[6]+3225465664&4294967295,T=d+(p<<9&4294967295|p>>>23),p=y+(d^m&(T^d))+_[11]+643717713&4294967295,y=T+(p<<14&4294967295|p>>>18),p=m+(T^d&(y^T))+_[0]+3921069994&4294967295,m=y+(p<<20&4294967295|p>>>12),p=d+(y^T&(m^y))+_[5]+3593408605&4294967295,d=m+(p<<5&4294967295|p>>>27),p=T+(m^y&(d^m))+_[10]+38016083&4294967295,T=d+(p<<9&4294967295|p>>>23),p=y+(d^m&(T^d))+_[15]+3634488961&4294967295,y=T+(p<<14&4294967295|p>>>18),p=m+(T^d&(y^T))+_[4]+3889429448&4294967295,m=y+(p<<20&4294967295|p>>>12),p=d+(y^T&(m^y))+_[9]+568446438&4294967295,d=m+(p<<5&4294967295|p>>>27),p=T+(m^y&(d^m))+_[14]+3275163606&4294967295,T=d+(p<<9&4294967295|p>>>23),p=y+(d^m&(T^d))+_[3]+4107603335&4294967295,y=T+(p<<14&4294967295|p>>>18),p=m+(T^d&(y^T))+_[8]+1163531501&4294967295,m=y+(p<<20&4294967295|p>>>12),p=d+(y^T&(m^y))+_[13]+2850285829&4294967295,d=m+(p<<5&4294967295|p>>>27),p=T+(m^y&(d^m))+_[2]+4243563512&4294967295,T=d+(p<<9&4294967295|p>>>23),p=y+(d^m&(T^d))+_[7]+1735328473&4294967295,y=T+(p<<14&4294967295|p>>>18),p=m+(T^d&(y^T))+_[12]+2368359562&4294967295,m=y+(p<<20&4294967295|p>>>12),p=d+(m^y^T)+_[5]+4294588738&4294967295,d=m+(p<<4&4294967295|p>>>28),p=T+(d^m^y)+_[8]+2272392833&4294967295,T=d+(p<<11&4294967295|p>>>21),p=y+(T^d^m)+_[11]+1839030562&4294967295,y=T+(p<<16&4294967295|p>>>16),p=m+(y^T^d)+_[14]+4259657740&4294967295,m=y+(p<<23&4294967295|p>>>9),p=d+(m^y^T)+_[1]+2763975236&4294967295,d=m+(p<<4&4294967295|p>>>28),p=T+(d^m^y)+_[4]+1272893353&4294967295,T=d+(p<<11&4294967295|p>>>21),p=y+(T^d^m)+_[7]+4139469664&4294967295,y=T+(p<<16&4294967295|p>>>16),p=m+(y^T^d)+_[10]+3200236656&4294967295,m=y+(p<<23&4294967295|p>>>9),p=d+(m^y^T)+_[13]+681279174&4294967295,d=m+(p<<4&4294967295|p>>>28),p=T+(d^m^y)+_[0]+3936430074&4294967295,T=d+(p<<11&4294967295|p>>>21),p=y+(T^d^m)+_[3]+3572445317&4294967295,y=T+(p<<16&4294967295|p>>>16),p=m+(y^T^d)+_[6]+76029189&4294967295,m=y+(p<<23&4294967295|p>>>9),p=d+(m^y^T)+_[9]+3654602809&4294967295,d=m+(p<<4&4294967295|p>>>28),p=T+(d^m^y)+_[12]+3873151461&4294967295,T=d+(p<<11&4294967295|p>>>21),p=y+(T^d^m)+_[15]+530742520&4294967295,y=T+(p<<16&4294967295|p>>>16),p=m+(y^T^d)+_[2]+3299628645&4294967295,m=y+(p<<23&4294967295|p>>>9),p=d+(y^(m|~T))+_[0]+4096336452&4294967295,d=m+(p<<6&4294967295|p>>>26),p=T+(m^(d|~y))+_[7]+1126891415&4294967295,T=d+(p<<10&4294967295|p>>>22),p=y+(d^(T|~m))+_[14]+2878612391&4294967295,y=T+(p<<15&4294967295|p>>>17),p=m+(T^(y|~d))+_[5]+4237533241&4294967295,m=y+(p<<21&4294967295|p>>>11),p=d+(y^(m|~T))+_[12]+1700485571&4294967295,d=m+(p<<6&4294967295|p>>>26),p=T+(m^(d|~y))+_[3]+2399980690&4294967295,T=d+(p<<10&4294967295|p>>>22),p=y+(d^(T|~m))+_[10]+4293915773&4294967295,y=T+(p<<15&4294967295|p>>>17),p=m+(T^(y|~d))+_[1]+2240044497&4294967295,m=y+(p<<21&4294967295|p>>>11),p=d+(y^(m|~T))+_[8]+1873313359&4294967295,d=m+(p<<6&4294967295|p>>>26),p=T+(m^(d|~y))+_[15]+4264355552&4294967295,T=d+(p<<10&4294967295|p>>>22),p=y+(d^(T|~m))+_[6]+2734768916&4294967295,y=T+(p<<15&4294967295|p>>>17),p=m+(T^(y|~d))+_[13]+1309151649&4294967295,m=y+(p<<21&4294967295|p>>>11),p=d+(y^(m|~T))+_[4]+4149444226&4294967295,d=m+(p<<6&4294967295|p>>>26),p=T+(m^(d|~y))+_[11]+3174756917&4294967295,T=d+(p<<10&4294967295|p>>>22),p=y+(d^(T|~m))+_[2]+718787259&4294967295,y=T+(p<<15&4294967295|p>>>17),p=m+(T^(y|~d))+_[9]+3951481745&4294967295,E.g[0]=E.g[0]+d&4294967295,E.g[1]=E.g[1]+(y+(p<<21&4294967295|p>>>11))&4294967295,E.g[2]=E.g[2]+y&4294967295,E.g[3]=E.g[3]+T&4294967295}i.prototype.u=function(E,d){d===void 0&&(d=E.length);for(var m=d-this.blockSize,_=this.B,y=this.h,T=0;T<d;){if(y==0)for(;T<=m;)s(this,E,T),T+=this.blockSize;if(typeof E=="string"){for(;T<d;)if(_[y++]=E.charCodeAt(T++),y==this.blockSize){s(this,_),y=0;break}}else for(;T<d;)if(_[y++]=E[T++],y==this.blockSize){s(this,_),y=0;break}}this.h=y,this.o+=d},i.prototype.v=function(){var E=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);E[0]=128;for(var d=1;d<E.length-8;++d)E[d]=0;var m=8*this.o;for(d=E.length-8;d<E.length;++d)E[d]=m&255,m/=256;for(this.u(E),E=Array(16),d=m=0;4>d;++d)for(var _=0;32>_;_+=8)E[m++]=this.g[d]>>>_&255;return E};function o(E,d){var m=c;return Object.prototype.hasOwnProperty.call(m,E)?m[E]:m[E]=d(E)}function u(E,d){this.h=d;for(var m=[],_=!0,y=E.length-1;0<=y;y--){var T=E[y]|0;_&&T==d||(m[y]=T,_=!1)}this.g=m}var c={};function f(E){return-128<=E&&128>E?o(E,function(d){return new u([d|0],0>d?-1:0)}):new u([E|0],0>E?-1:0)}function g(E){if(isNaN(E)||!isFinite(E))return w;if(0>E)return N(g(-E));for(var d=[],m=1,_=0;E>=m;_++)d[_]=E/m|0,m*=4294967296;return new u(d,0)}function I(E,d){if(E.length==0)throw Error("number format error: empty string");if(d=d||10,2>d||36<d)throw Error("radix out of range: "+d);if(E.charAt(0)=="-")return N(I(E.substring(1),d));if(0<=E.indexOf("-"))throw Error('number format error: interior "-" character');for(var m=g(Math.pow(d,8)),_=w,y=0;y<E.length;y+=8){var T=Math.min(8,E.length-y),p=parseInt(E.substring(y,y+T),d);8>T?(T=g(Math.pow(d,T)),_=_.j(T).add(g(p))):(_=_.j(m),_=_.add(g(p)))}return _}var w=f(0),S=f(1),C=f(16777216);n=u.prototype,n.m=function(){if(M(this))return-N(this).m();for(var E=0,d=1,m=0;m<this.g.length;m++){var _=this.i(m);E+=(0<=_?_:4294967296+_)*d,d*=4294967296}return E},n.toString=function(E){if(E=E||10,2>E||36<E)throw Error("radix out of range: "+E);if(V(this))return"0";if(M(this))return"-"+N(this).toString(E);for(var d=g(Math.pow(E,6)),m=this,_="";;){var y=st(m,d).g;m=G(m,y.j(d));var T=((0<m.g.length?m.g[0]:m.h)>>>0).toString(E);if(m=y,V(m))return T+_;for(;6>T.length;)T="0"+T;_=T+_}},n.i=function(E){return 0>E?0:E<this.g.length?this.g[E]:this.h};function V(E){if(E.h!=0)return!1;for(var d=0;d<E.g.length;d++)if(E.g[d]!=0)return!1;return!0}function M(E){return E.h==-1}n.l=function(E){return E=G(this,E),M(E)?-1:V(E)?0:1};function N(E){for(var d=E.g.length,m=[],_=0;_<d;_++)m[_]=~E.g[_];return new u(m,~E.h).add(S)}n.abs=function(){return M(this)?N(this):this},n.add=function(E){for(var d=Math.max(this.g.length,E.g.length),m=[],_=0,y=0;y<=d;y++){var T=_+(this.i(y)&65535)+(E.i(y)&65535),p=(T>>>16)+(this.i(y)>>>16)+(E.i(y)>>>16);_=p>>>16,T&=65535,p&=65535,m[y]=p<<16|T}return new u(m,m[m.length-1]&-2147483648?-1:0)};function G(E,d){return E.add(N(d))}n.j=function(E){if(V(this)||V(E))return w;if(M(this))return M(E)?N(this).j(N(E)):N(N(this).j(E));if(M(E))return N(this.j(N(E)));if(0>this.l(C)&&0>E.l(C))return g(this.m()*E.m());for(var d=this.g.length+E.g.length,m=[],_=0;_<2*d;_++)m[_]=0;for(_=0;_<this.g.length;_++)for(var y=0;y<E.g.length;y++){var T=this.i(_)>>>16,p=this.i(_)&65535,Rt=E.i(y)>>>16,ge=E.i(y)&65535;m[2*_+2*y]+=p*ge,H(m,2*_+2*y),m[2*_+2*y+1]+=T*ge,H(m,2*_+2*y+1),m[2*_+2*y+1]+=p*Rt,H(m,2*_+2*y+1),m[2*_+2*y+2]+=T*Rt,H(m,2*_+2*y+2)}for(_=0;_<d;_++)m[_]=m[2*_+1]<<16|m[2*_];for(_=d;_<2*d;_++)m[_]=0;return new u(m,0)};function H(E,d){for(;(E[d]&65535)!=E[d];)E[d+1]+=E[d]>>>16,E[d]&=65535,d++}function W(E,d){this.g=E,this.h=d}function st(E,d){if(V(d))throw Error("division by zero");if(V(E))return new W(w,w);if(M(E))return d=st(N(E),d),new W(N(d.g),N(d.h));if(M(d))return d=st(E,N(d)),new W(N(d.g),d.h);if(30<E.g.length){if(M(E)||M(d))throw Error("slowDivide_ only works with positive integers.");for(var m=S,_=d;0>=_.l(E);)m=jt(m),_=jt(_);var y=gt(m,1),T=gt(_,1);for(_=gt(_,2),m=gt(m,2);!V(_);){var p=T.add(_);0>=p.l(E)&&(y=y.add(m),T=p),_=gt(_,1),m=gt(m,1)}return d=G(E,y.j(d)),new W(y,d)}for(y=w;0<=E.l(d);){for(m=Math.max(1,Math.floor(E.m()/d.m())),_=Math.ceil(Math.log(m)/Math.LN2),_=48>=_?1:Math.pow(2,_-48),T=g(m),p=T.j(d);M(p)||0<p.l(E);)m-=_,T=g(m),p=T.j(d);V(T)&&(T=S),y=y.add(T),E=G(E,p)}return new W(y,E)}n.A=function(E){return st(this,E).h},n.and=function(E){for(var d=Math.max(this.g.length,E.g.length),m=[],_=0;_<d;_++)m[_]=this.i(_)&E.i(_);return new u(m,this.h&E.h)},n.or=function(E){for(var d=Math.max(this.g.length,E.g.length),m=[],_=0;_<d;_++)m[_]=this.i(_)|E.i(_);return new u(m,this.h|E.h)},n.xor=function(E){for(var d=Math.max(this.g.length,E.g.length),m=[],_=0;_<d;_++)m[_]=this.i(_)^E.i(_);return new u(m,this.h^E.h)};function jt(E){for(var d=E.g.length+1,m=[],_=0;_<d;_++)m[_]=E.i(_)<<1|E.i(_-1)>>>31;return new u(m,E.h)}function gt(E,d){var m=d>>5;d%=32;for(var _=E.g.length-m,y=[],T=0;T<_;T++)y[T]=0<d?E.i(T+m)>>>d|E.i(T+m+1)<<32-d:E.i(T+m);return new u(y,E.h)}i.prototype.digest=i.prototype.v,i.prototype.reset=i.prototype.s,i.prototype.update=i.prototype.u,u.prototype.add=u.prototype.add,u.prototype.multiply=u.prototype.j,u.prototype.modulo=u.prototype.A,u.prototype.compare=u.prototype.l,u.prototype.toNumber=u.prototype.m,u.prototype.toString=u.prototype.toString,u.prototype.getBits=u.prototype.i,u.fromNumber=g,u.fromString=I,io=u}).apply(typeof vs<"u"?vs:typeof self<"u"?self:typeof window<"u"?window:{});var vn=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var so,Me,oo,Rn,Or,ao,lo,uo;(function(){var n,t=typeof Object.defineProperties=="function"?Object.defineProperty:function(r,a,l){return r==Array.prototype||r==Object.prototype||(r[a]=l.value),r};function e(r){r=[typeof globalThis=="object"&&globalThis,r,typeof window=="object"&&window,typeof self=="object"&&self,typeof vn=="object"&&vn];for(var a=0;a<r.length;++a){var l=r[a];if(l&&l.Math==Math)return l}throw Error("Cannot find global object")}var i=e(this);function s(r,a){if(a)t:{var l=i;r=r.split(".");for(var h=0;h<r.length-1;h++){var v=r[h];if(!(v in l))break t;l=l[v]}r=r[r.length-1],h=l[r],a=a(h),a!=h&&a!=null&&t(l,r,{configurable:!0,writable:!0,value:a})}}function o(r,a){r instanceof String&&(r+="");var l=0,h=!1,v={next:function(){if(!h&&l<r.length){var A=l++;return{value:a(A,r[A]),done:!1}}return h=!0,{done:!0,value:void 0}}};return v[Symbol.iterator]=function(){return v},v}s("Array.prototype.values",function(r){return r||function(){return o(this,function(a,l){return l})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var u=u||{},c=this||self;function f(r){var a=typeof r;return a=a!="object"?a:r?Array.isArray(r)?"array":a:"null",a=="array"||a=="object"&&typeof r.length=="number"}function g(r){var a=typeof r;return a=="object"&&r!=null||a=="function"}function I(r,a,l){return r.call.apply(r.bind,arguments)}function w(r,a,l){if(!r)throw Error();if(2<arguments.length){var h=Array.prototype.slice.call(arguments,2);return function(){var v=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(v,h),r.apply(a,v)}}return function(){return r.apply(a,arguments)}}function S(r,a,l){return S=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?I:w,S.apply(null,arguments)}function C(r,a){var l=Array.prototype.slice.call(arguments,1);return function(){var h=l.slice();return h.push.apply(h,arguments),r.apply(this,h)}}function V(r,a){function l(){}l.prototype=a.prototype,r.aa=a.prototype,r.prototype=new l,r.prototype.constructor=r,r.Qb=function(h,v,A){for(var b=Array(arguments.length-2),U=2;U<arguments.length;U++)b[U-2]=arguments[U];return a.prototype[v].apply(h,b)}}function M(r){const a=r.length;if(0<a){const l=Array(a);for(let h=0;h<a;h++)l[h]=r[h];return l}return[]}function N(r,a){for(let l=1;l<arguments.length;l++){const h=arguments[l];if(f(h)){const v=r.length||0,A=h.length||0;r.length=v+A;for(let b=0;b<A;b++)r[v+b]=h[b]}else r.push(h)}}class G{constructor(a,l){this.i=a,this.j=l,this.h=0,this.g=null}get(){let a;return 0<this.h?(this.h--,a=this.g,this.g=a.next,a.next=null):a=this.i(),a}}function H(r){return/^[\s\xa0]*$/.test(r)}function W(){var r=c.navigator;return r&&(r=r.userAgent)?r:""}function st(r){return st[" "](r),r}st[" "]=function(){};var jt=W().indexOf("Gecko")!=-1&&!(W().toLowerCase().indexOf("webkit")!=-1&&W().indexOf("Edge")==-1)&&!(W().indexOf("Trident")!=-1||W().indexOf("MSIE")!=-1)&&W().indexOf("Edge")==-1;function gt(r,a,l){for(const h in r)a.call(l,r[h],h,r)}function E(r,a){for(const l in r)a.call(void 0,r[l],l,r)}function d(r){const a={};for(const l in r)a[l]=r[l];return a}const m="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function _(r,a){let l,h;for(let v=1;v<arguments.length;v++){h=arguments[v];for(l in h)r[l]=h[l];for(let A=0;A<m.length;A++)l=m[A],Object.prototype.hasOwnProperty.call(h,l)&&(r[l]=h[l])}}function y(r){var a=1;r=r.split(":");const l=[];for(;0<a&&r.length;)l.push(r.shift()),a--;return r.length&&l.push(r.join(":")),l}function T(r){c.setTimeout(()=>{throw r},0)}function p(){var r=Xn;let a=null;return r.g&&(a=r.g,r.g=r.g.next,r.g||(r.h=null),a.next=null),a}class Rt{constructor(){this.h=this.g=null}add(a,l){const h=ge.get();h.set(a,l),this.h?this.h.next=h:this.g=h,this.h=h}}var ge=new G(()=>new ca,r=>r.reset());class ca{constructor(){this.next=this.g=this.h=null}set(a,l){this.h=a,this.g=l,this.next=null}reset(){this.next=this.g=this.h=null}}let _e,ye=!1,Xn=new Rt,ci=()=>{const r=c.Promise.resolve(void 0);_e=()=>{r.then(ha)}};var ha=()=>{for(var r;r=p();){try{r.h.call(r.g)}catch(l){T(l)}var a=ge;a.j(r),100>a.h&&(a.h++,r.next=a.g,a.g=r)}ye=!1};function Dt(){this.s=this.s,this.C=this.C}Dt.prototype.s=!1,Dt.prototype.ma=function(){this.s||(this.s=!0,this.N())},Dt.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function ot(r,a){this.type=r,this.g=this.target=a,this.defaultPrevented=!1}ot.prototype.h=function(){this.defaultPrevented=!0};var fa=function(){if(!c.addEventListener||!Object.defineProperty)return!1;var r=!1,a=Object.defineProperty({},"passive",{get:function(){r=!0}});try{const l=()=>{};c.addEventListener("test",l,a),c.removeEventListener("test",l,a)}catch{}return r}();function Ee(r,a){if(ot.call(this,r?r.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,r){var l=this.type=r.type,h=r.changedTouches&&r.changedTouches.length?r.changedTouches[0]:null;if(this.target=r.target||r.srcElement,this.g=a,a=r.relatedTarget){if(jt){t:{try{st(a.nodeName);var v=!0;break t}catch{}v=!1}v||(a=null)}}else l=="mouseover"?a=r.fromElement:l=="mouseout"&&(a=r.toElement);this.relatedTarget=a,h?(this.clientX=h.clientX!==void 0?h.clientX:h.pageX,this.clientY=h.clientY!==void 0?h.clientY:h.pageY,this.screenX=h.screenX||0,this.screenY=h.screenY||0):(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0),this.button=r.button,this.key=r.key||"",this.ctrlKey=r.ctrlKey,this.altKey=r.altKey,this.shiftKey=r.shiftKey,this.metaKey=r.metaKey,this.pointerId=r.pointerId||0,this.pointerType=typeof r.pointerType=="string"?r.pointerType:da[r.pointerType]||"",this.state=r.state,this.i=r,r.defaultPrevented&&Ee.aa.h.call(this)}}V(Ee,ot);var da={2:"touch",3:"pen",4:"mouse"};Ee.prototype.h=function(){Ee.aa.h.call(this);var r=this.i;r.preventDefault?r.preventDefault():r.returnValue=!1};var tn="closure_listenable_"+(1e6*Math.random()|0),pa=0;function ma(r,a,l,h,v){this.listener=r,this.proxy=null,this.src=a,this.type=l,this.capture=!!h,this.ha=v,this.key=++pa,this.da=this.fa=!1}function en(r){r.da=!0,r.listener=null,r.proxy=null,r.src=null,r.ha=null}function nn(r){this.src=r,this.g={},this.h=0}nn.prototype.add=function(r,a,l,h,v){var A=r.toString();r=this.g[A],r||(r=this.g[A]=[],this.h++);var b=Jn(r,a,h,v);return-1<b?(a=r[b],l||(a.fa=!1)):(a=new ma(a,this.src,A,!!h,v),a.fa=l,r.push(a)),a};function Yn(r,a){var l=a.type;if(l in r.g){var h=r.g[l],v=Array.prototype.indexOf.call(h,a,void 0),A;(A=0<=v)&&Array.prototype.splice.call(h,v,1),A&&(en(a),r.g[l].length==0&&(delete r.g[l],r.h--))}}function Jn(r,a,l,h){for(var v=0;v<r.length;++v){var A=r[v];if(!A.da&&A.listener==a&&A.capture==!!l&&A.ha==h)return v}return-1}var Zn="closure_lm_"+(1e6*Math.random()|0),tr={};function hi(r,a,l,h,v){if(Array.isArray(a)){for(var A=0;A<a.length;A++)hi(r,a[A],l,h,v);return null}return l=pi(l),r&&r[tn]?r.K(a,l,g(h)?!!h.capture:!1,v):ga(r,a,l,!1,h,v)}function ga(r,a,l,h,v,A){if(!a)throw Error("Invalid event type");var b=g(v)?!!v.capture:!!v,U=nr(r);if(U||(r[Zn]=U=new nn(r)),l=U.add(a,l,h,b,A),l.proxy)return l;if(h=_a(),l.proxy=h,h.src=r,h.listener=l,r.addEventListener)fa||(v=b),v===void 0&&(v=!1),r.addEventListener(a.toString(),h,v);else if(r.attachEvent)r.attachEvent(di(a.toString()),h);else if(r.addListener&&r.removeListener)r.addListener(h);else throw Error("addEventListener and attachEvent are unavailable.");return l}function _a(){function r(l){return a.call(r.src,r.listener,l)}const a=ya;return r}function fi(r,a,l,h,v){if(Array.isArray(a))for(var A=0;A<a.length;A++)fi(r,a[A],l,h,v);else h=g(h)?!!h.capture:!!h,l=pi(l),r&&r[tn]?(r=r.i,a=String(a).toString(),a in r.g&&(A=r.g[a],l=Jn(A,l,h,v),-1<l&&(en(A[l]),Array.prototype.splice.call(A,l,1),A.length==0&&(delete r.g[a],r.h--)))):r&&(r=nr(r))&&(a=r.g[a.toString()],r=-1,a&&(r=Jn(a,l,h,v)),(l=-1<r?a[r]:null)&&er(l))}function er(r){if(typeof r!="number"&&r&&!r.da){var a=r.src;if(a&&a[tn])Yn(a.i,r);else{var l=r.type,h=r.proxy;a.removeEventListener?a.removeEventListener(l,h,r.capture):a.detachEvent?a.detachEvent(di(l),h):a.addListener&&a.removeListener&&a.removeListener(h),(l=nr(a))?(Yn(l,r),l.h==0&&(l.src=null,a[Zn]=null)):en(r)}}}function di(r){return r in tr?tr[r]:tr[r]="on"+r}function ya(r,a){if(r.da)r=!0;else{a=new Ee(a,this);var l=r.listener,h=r.ha||r.src;r.fa&&er(r),r=l.call(h,a)}return r}function nr(r){return r=r[Zn],r instanceof nn?r:null}var rr="__closure_events_fn_"+(1e9*Math.random()>>>0);function pi(r){return typeof r=="function"?r:(r[rr]||(r[rr]=function(a){return r.handleEvent(a)}),r[rr])}function at(){Dt.call(this),this.i=new nn(this),this.M=this,this.F=null}V(at,Dt),at.prototype[tn]=!0,at.prototype.removeEventListener=function(r,a,l,h){fi(this,r,a,l,h)};function pt(r,a){var l,h=r.F;if(h)for(l=[];h;h=h.F)l.push(h);if(r=r.M,h=a.type||a,typeof a=="string")a=new ot(a,r);else if(a instanceof ot)a.target=a.target||r;else{var v=a;a=new ot(h,r),_(a,v)}if(v=!0,l)for(var A=l.length-1;0<=A;A--){var b=a.g=l[A];v=rn(b,h,!0,a)&&v}if(b=a.g=r,v=rn(b,h,!0,a)&&v,v=rn(b,h,!1,a)&&v,l)for(A=0;A<l.length;A++)b=a.g=l[A],v=rn(b,h,!1,a)&&v}at.prototype.N=function(){if(at.aa.N.call(this),this.i){var r=this.i,a;for(a in r.g){for(var l=r.g[a],h=0;h<l.length;h++)en(l[h]);delete r.g[a],r.h--}}this.F=null},at.prototype.K=function(r,a,l,h){return this.i.add(String(r),a,!1,l,h)},at.prototype.L=function(r,a,l,h){return this.i.add(String(r),a,!0,l,h)};function rn(r,a,l,h){if(a=r.i.g[String(a)],!a)return!0;a=a.concat();for(var v=!0,A=0;A<a.length;++A){var b=a[A];if(b&&!b.da&&b.capture==l){var U=b.listener,et=b.ha||b.src;b.fa&&Yn(r.i,b),v=U.call(et,h)!==!1&&v}}return v&&!h.defaultPrevented}function mi(r,a,l){if(typeof r=="function")l&&(r=S(r,l));else if(r&&typeof r.handleEvent=="function")r=S(r.handleEvent,r);else throw Error("Invalid listener argument");return 2147483647<Number(a)?-1:c.setTimeout(r,a||0)}function gi(r){r.g=mi(()=>{r.g=null,r.i&&(r.i=!1,gi(r))},r.l);const a=r.h;r.h=null,r.m.apply(null,a)}class Ea extends Dt{constructor(a,l){super(),this.m=a,this.l=l,this.h=null,this.i=!1,this.g=null}j(a){this.h=arguments,this.g?this.i=!0:gi(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ve(r){Dt.call(this),this.h=r,this.g={}}V(ve,Dt);var _i=[];function yi(r){gt(r.g,function(a,l){this.g.hasOwnProperty(l)&&er(a)},r),r.g={}}ve.prototype.N=function(){ve.aa.N.call(this),yi(this)},ve.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var ir=c.JSON.stringify,va=c.JSON.parse,Ta=class{stringify(r){return c.JSON.stringify(r,void 0)}parse(r){return c.JSON.parse(r,void 0)}};function sr(){}sr.prototype.h=null;function Ei(r){return r.h||(r.h=r.i())}function vi(){}var Te={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function or(){ot.call(this,"d")}V(or,ot);function ar(){ot.call(this,"c")}V(ar,ot);var $t={},Ti=null;function sn(){return Ti=Ti||new at}$t.La="serverreachability";function Ii(r){ot.call(this,$t.La,r)}V(Ii,ot);function Ie(r){const a=sn();pt(a,new Ii(a))}$t.STAT_EVENT="statevent";function Ai(r,a){ot.call(this,$t.STAT_EVENT,r),this.stat=a}V(Ai,ot);function mt(r){const a=sn();pt(a,new Ai(a,r))}$t.Ma="timingevent";function wi(r,a){ot.call(this,$t.Ma,r),this.size=a}V(wi,ot);function Ae(r,a){if(typeof r!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){r()},a)}function we(){this.g=!0}we.prototype.xa=function(){this.g=!1};function Ia(r,a,l,h,v,A){r.info(function(){if(r.g)if(A)for(var b="",U=A.split("&"),et=0;et<U.length;et++){var B=U[et].split("=");if(1<B.length){var lt=B[0];B=B[1];var ut=lt.split("_");b=2<=ut.length&&ut[1]=="type"?b+(lt+"="+B+"&"):b+(lt+"=redacted&")}}else b=null;else b=A;return"XMLHTTP REQ ("+h+") [attempt "+v+"]: "+a+`
`+l+`
`+b})}function Aa(r,a,l,h,v,A,b){r.info(function(){return"XMLHTTP RESP ("+h+") [ attempt "+v+"]: "+a+`
`+l+`
`+A+" "+b})}function ee(r,a,l,h){r.info(function(){return"XMLHTTP TEXT ("+a+"): "+Ra(r,l)+(h?" "+h:"")})}function wa(r,a){r.info(function(){return"TIMEOUT: "+a})}we.prototype.info=function(){};function Ra(r,a){if(!r.g)return a;if(!a)return null;try{var l=JSON.parse(a);if(l){for(r=0;r<l.length;r++)if(Array.isArray(l[r])){var h=l[r];if(!(2>h.length)){var v=h[1];if(Array.isArray(v)&&!(1>v.length)){var A=v[0];if(A!="noop"&&A!="stop"&&A!="close")for(var b=1;b<v.length;b++)v[b]=""}}}}return ir(l)}catch{return a}}var on={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Ri={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},lr;function an(){}V(an,sr),an.prototype.g=function(){return new XMLHttpRequest},an.prototype.i=function(){return{}},lr=new an;function Nt(r,a,l,h){this.j=r,this.i=a,this.l=l,this.R=h||1,this.U=new ve(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Pi}function Pi(){this.i=null,this.g="",this.h=!1}var Si={},ur={};function cr(r,a,l){r.L=1,r.v=hn(Pt(a)),r.m=l,r.P=!0,bi(r,null)}function bi(r,a){r.F=Date.now(),ln(r),r.A=Pt(r.v);var l=r.A,h=r.R;Array.isArray(h)||(h=[String(h)]),$i(l.i,"t",h),r.C=0,l=r.j.J,r.h=new Pi,r.g=os(r.j,l?a:null,!r.m),0<r.O&&(r.M=new Ea(S(r.Y,r,r.g),r.O)),a=r.U,l=r.g,h=r.ca;var v="readystatechange";Array.isArray(v)||(v&&(_i[0]=v.toString()),v=_i);for(var A=0;A<v.length;A++){var b=hi(l,v[A],h||a.handleEvent,!1,a.h||a);if(!b)break;a.g[b.key]=b}a=r.H?d(r.H):{},r.m?(r.u||(r.u="POST"),a["Content-Type"]="application/x-www-form-urlencoded",r.g.ea(r.A,r.u,r.m,a)):(r.u="GET",r.g.ea(r.A,r.u,null,a)),Ie(),Ia(r.i,r.u,r.A,r.l,r.R,r.m)}Nt.prototype.ca=function(r){r=r.target;const a=this.M;a&&St(r)==3?a.j():this.Y(r)},Nt.prototype.Y=function(r){try{if(r==this.g)t:{const ut=St(this.g);var a=this.g.Ba();const ie=this.g.Z();if(!(3>ut)&&(ut!=3||this.g&&(this.h.h||this.g.oa()||Wi(this.g)))){this.J||ut!=4||a==7||(a==8||0>=ie?Ie(3):Ie(2)),hr(this);var l=this.g.Z();this.X=l;e:if(Ci(this)){var h=Wi(this.g);r="";var v=h.length,A=St(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){qt(this),Re(this);var b="";break e}this.h.i=new c.TextDecoder}for(a=0;a<v;a++)this.h.h=!0,r+=this.h.i.decode(h[a],{stream:!(A&&a==v-1)});h.length=0,this.h.g+=r,this.C=0,b=this.h.g}else b=this.g.oa();if(this.o=l==200,Aa(this.i,this.u,this.A,this.l,this.R,ut,l),this.o){if(this.T&&!this.K){e:{if(this.g){var U,et=this.g;if((U=et.g?et.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!H(U)){var B=U;break e}}B=null}if(l=B)ee(this.i,this.l,l,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,fr(this,l);else{this.o=!1,this.s=3,mt(12),qt(this),Re(this);break t}}if(this.P){l=!0;let Et;for(;!this.J&&this.C<b.length;)if(Et=Pa(this,b),Et==ur){ut==4&&(this.s=4,mt(14),l=!1),ee(this.i,this.l,null,"[Incomplete Response]");break}else if(Et==Si){this.s=4,mt(15),ee(this.i,this.l,b,"[Invalid Chunk]"),l=!1;break}else ee(this.i,this.l,Et,null),fr(this,Et);if(Ci(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),ut!=4||b.length!=0||this.h.h||(this.s=1,mt(16),l=!1),this.o=this.o&&l,!l)ee(this.i,this.l,b,"[Invalid Chunked Response]"),qt(this),Re(this);else if(0<b.length&&!this.W){this.W=!0;var lt=this.j;lt.g==this&&lt.ba&&!lt.M&&(lt.j.info("Great, no buffering proxy detected. Bytes received: "+b.length),yr(lt),lt.M=!0,mt(11))}}else ee(this.i,this.l,b,null),fr(this,b);ut==4&&qt(this),this.o&&!this.J&&(ut==4?ns(this.j,this):(this.o=!1,ln(this)))}else qa(this.g),l==400&&0<b.indexOf("Unknown SID")?(this.s=3,mt(12)):(this.s=0,mt(13)),qt(this),Re(this)}}}catch{}finally{}};function Ci(r){return r.g?r.u=="GET"&&r.L!=2&&r.j.Ca:!1}function Pa(r,a){var l=r.C,h=a.indexOf(`
`,l);return h==-1?ur:(l=Number(a.substring(l,h)),isNaN(l)?Si:(h+=1,h+l>a.length?ur:(a=a.slice(h,h+l),r.C=h+l,a)))}Nt.prototype.cancel=function(){this.J=!0,qt(this)};function ln(r){r.S=Date.now()+r.I,Vi(r,r.I)}function Vi(r,a){if(r.B!=null)throw Error("WatchDog timer not null");r.B=Ae(S(r.ba,r),a)}function hr(r){r.B&&(c.clearTimeout(r.B),r.B=null)}Nt.prototype.ba=function(){this.B=null;const r=Date.now();0<=r-this.S?(wa(this.i,this.A),this.L!=2&&(Ie(),mt(17)),qt(this),this.s=2,Re(this)):Vi(this,this.S-r)};function Re(r){r.j.G==0||r.J||ns(r.j,r)}function qt(r){hr(r);var a=r.M;a&&typeof a.ma=="function"&&a.ma(),r.M=null,yi(r.U),r.g&&(a=r.g,r.g=null,a.abort(),a.ma())}function fr(r,a){try{var l=r.j;if(l.G!=0&&(l.g==r||dr(l.h,r))){if(!r.K&&dr(l.h,r)&&l.G==3){try{var h=l.Da.g.parse(a)}catch{h=null}if(Array.isArray(h)&&h.length==3){var v=h;if(v[0]==0){t:if(!l.u){if(l.g)if(l.g.F+3e3<r.F)_n(l),mn(l);else break t;_r(l),mt(18)}}else l.za=v[1],0<l.za-l.T&&37500>v[2]&&l.F&&l.v==0&&!l.C&&(l.C=Ae(S(l.Za,l),6e3));if(1>=Oi(l.h)&&l.ca){try{l.ca()}catch{}l.ca=void 0}}else zt(l,11)}else if((r.K||l.g==r)&&_n(l),!H(a))for(v=l.Da.g.parse(a),a=0;a<v.length;a++){let B=v[a];if(l.T=B[0],B=B[1],l.G==2)if(B[0]=="c"){l.K=B[1],l.ia=B[2];const lt=B[3];lt!=null&&(l.la=lt,l.j.info("VER="+l.la));const ut=B[4];ut!=null&&(l.Aa=ut,l.j.info("SVER="+l.Aa));const ie=B[5];ie!=null&&typeof ie=="number"&&0<ie&&(h=1.5*ie,l.L=h,l.j.info("backChannelRequestTimeoutMs_="+h)),h=l;const Et=r.g;if(Et){const En=Et.g?Et.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(En){var A=h.h;A.g||En.indexOf("spdy")==-1&&En.indexOf("quic")==-1&&En.indexOf("h2")==-1||(A.j=A.l,A.g=new Set,A.h&&(pr(A,A.h),A.h=null))}if(h.D){const Er=Et.g?Et.g.getResponseHeader("X-HTTP-Session-Id"):null;Er&&(h.ya=Er,q(h.I,h.D,Er))}}l.G=3,l.l&&l.l.ua(),l.ba&&(l.R=Date.now()-r.F,l.j.info("Handshake RTT: "+l.R+"ms")),h=l;var b=r;if(h.qa=ss(h,h.J?h.ia:null,h.W),b.K){ki(h.h,b);var U=b,et=h.L;et&&(U.I=et),U.B&&(hr(U),ln(U)),h.g=b}else ts(h);0<l.i.length&&gn(l)}else B[0]!="stop"&&B[0]!="close"||zt(l,7);else l.G==3&&(B[0]=="stop"||B[0]=="close"?B[0]=="stop"?zt(l,7):gr(l):B[0]!="noop"&&l.l&&l.l.ta(B),l.v=0)}}Ie(4)}catch{}}var Sa=class{constructor(r,a){this.g=r,this.map=a}};function Di(r){this.l=r||10,c.PerformanceNavigationTiming?(r=c.performance.getEntriesByType("navigation"),r=0<r.length&&(r[0].nextHopProtocol=="hq"||r[0].nextHopProtocol=="h2")):r=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=r?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Ni(r){return r.h?!0:r.g?r.g.size>=r.j:!1}function Oi(r){return r.h?1:r.g?r.g.size:0}function dr(r,a){return r.h?r.h==a:r.g?r.g.has(a):!1}function pr(r,a){r.g?r.g.add(a):r.h=a}function ki(r,a){r.h&&r.h==a?r.h=null:r.g&&r.g.has(a)&&r.g.delete(a)}Di.prototype.cancel=function(){if(this.i=Mi(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const r of this.g.values())r.cancel();this.g.clear()}};function Mi(r){if(r.h!=null)return r.i.concat(r.h.D);if(r.g!=null&&r.g.size!==0){let a=r.i;for(const l of r.g.values())a=a.concat(l.D);return a}return M(r.i)}function ba(r){if(r.V&&typeof r.V=="function")return r.V();if(typeof Map<"u"&&r instanceof Map||typeof Set<"u"&&r instanceof Set)return Array.from(r.values());if(typeof r=="string")return r.split("");if(f(r)){for(var a=[],l=r.length,h=0;h<l;h++)a.push(r[h]);return a}a=[],l=0;for(h in r)a[l++]=r[h];return a}function Ca(r){if(r.na&&typeof r.na=="function")return r.na();if(!r.V||typeof r.V!="function"){if(typeof Map<"u"&&r instanceof Map)return Array.from(r.keys());if(!(typeof Set<"u"&&r instanceof Set)){if(f(r)||typeof r=="string"){var a=[];r=r.length;for(var l=0;l<r;l++)a.push(l);return a}a=[],l=0;for(const h in r)a[l++]=h;return a}}}function xi(r,a){if(r.forEach&&typeof r.forEach=="function")r.forEach(a,void 0);else if(f(r)||typeof r=="string")Array.prototype.forEach.call(r,a,void 0);else for(var l=Ca(r),h=ba(r),v=h.length,A=0;A<v;A++)a.call(void 0,h[A],l&&l[A],r)}var Li=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Va(r,a){if(r){r=r.split("&");for(var l=0;l<r.length;l++){var h=r[l].indexOf("="),v=null;if(0<=h){var A=r[l].substring(0,h);v=r[l].substring(h+1)}else A=r[l];a(A,v?decodeURIComponent(v.replace(/\+/g," ")):"")}}}function Ht(r){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,r instanceof Ht){this.h=r.h,un(this,r.j),this.o=r.o,this.g=r.g,cn(this,r.s),this.l=r.l;var a=r.i,l=new be;l.i=a.i,a.g&&(l.g=new Map(a.g),l.h=a.h),Fi(this,l),this.m=r.m}else r&&(a=String(r).match(Li))?(this.h=!1,un(this,a[1]||"",!0),this.o=Pe(a[2]||""),this.g=Pe(a[3]||"",!0),cn(this,a[4]),this.l=Pe(a[5]||"",!0),Fi(this,a[6]||"",!0),this.m=Pe(a[7]||"")):(this.h=!1,this.i=new be(null,this.h))}Ht.prototype.toString=function(){var r=[],a=this.j;a&&r.push(Se(a,Bi,!0),":");var l=this.g;return(l||a=="file")&&(r.push("//"),(a=this.o)&&r.push(Se(a,Bi,!0),"@"),r.push(encodeURIComponent(String(l)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),l=this.s,l!=null&&r.push(":",String(l))),(l=this.l)&&(this.g&&l.charAt(0)!="/"&&r.push("/"),r.push(Se(l,l.charAt(0)=="/"?Oa:Na,!0))),(l=this.i.toString())&&r.push("?",l),(l=this.m)&&r.push("#",Se(l,Ma)),r.join("")};function Pt(r){return new Ht(r)}function un(r,a,l){r.j=l?Pe(a,!0):a,r.j&&(r.j=r.j.replace(/:$/,""))}function cn(r,a){if(a){if(a=Number(a),isNaN(a)||0>a)throw Error("Bad port number "+a);r.s=a}else r.s=null}function Fi(r,a,l){a instanceof be?(r.i=a,xa(r.i,r.h)):(l||(a=Se(a,ka)),r.i=new be(a,r.h))}function q(r,a,l){r.i.set(a,l)}function hn(r){return q(r,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),r}function Pe(r,a){return r?a?decodeURI(r.replace(/%25/g,"%2525")):decodeURIComponent(r):""}function Se(r,a,l){return typeof r=="string"?(r=encodeURI(r).replace(a,Da),l&&(r=r.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),r):null}function Da(r){return r=r.charCodeAt(0),"%"+(r>>4&15).toString(16)+(r&15).toString(16)}var Bi=/[#\/\?@]/g,Na=/[#\?:]/g,Oa=/[#\?]/g,ka=/[#\?@]/g,Ma=/#/g;function be(r,a){this.h=this.g=null,this.i=r||null,this.j=!!a}function Ot(r){r.g||(r.g=new Map,r.h=0,r.i&&Va(r.i,function(a,l){r.add(decodeURIComponent(a.replace(/\+/g," ")),l)}))}n=be.prototype,n.add=function(r,a){Ot(this),this.i=null,r=ne(this,r);var l=this.g.get(r);return l||this.g.set(r,l=[]),l.push(a),this.h+=1,this};function Ui(r,a){Ot(r),a=ne(r,a),r.g.has(a)&&(r.i=null,r.h-=r.g.get(a).length,r.g.delete(a))}function ji(r,a){return Ot(r),a=ne(r,a),r.g.has(a)}n.forEach=function(r,a){Ot(this),this.g.forEach(function(l,h){l.forEach(function(v){r.call(a,v,h,this)},this)},this)},n.na=function(){Ot(this);const r=Array.from(this.g.values()),a=Array.from(this.g.keys()),l=[];for(let h=0;h<a.length;h++){const v=r[h];for(let A=0;A<v.length;A++)l.push(a[h])}return l},n.V=function(r){Ot(this);let a=[];if(typeof r=="string")ji(this,r)&&(a=a.concat(this.g.get(ne(this,r))));else{r=Array.from(this.g.values());for(let l=0;l<r.length;l++)a=a.concat(r[l])}return a},n.set=function(r,a){return Ot(this),this.i=null,r=ne(this,r),ji(this,r)&&(this.h-=this.g.get(r).length),this.g.set(r,[a]),this.h+=1,this},n.get=function(r,a){return r?(r=this.V(r),0<r.length?String(r[0]):a):a};function $i(r,a,l){Ui(r,a),0<l.length&&(r.i=null,r.g.set(ne(r,a),M(l)),r.h+=l.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const r=[],a=Array.from(this.g.keys());for(var l=0;l<a.length;l++){var h=a[l];const A=encodeURIComponent(String(h)),b=this.V(h);for(h=0;h<b.length;h++){var v=A;b[h]!==""&&(v+="="+encodeURIComponent(String(b[h]))),r.push(v)}}return this.i=r.join("&")};function ne(r,a){return a=String(a),r.j&&(a=a.toLowerCase()),a}function xa(r,a){a&&!r.j&&(Ot(r),r.i=null,r.g.forEach(function(l,h){var v=h.toLowerCase();h!=v&&(Ui(this,h),$i(this,v,l))},r)),r.j=a}function La(r,a){const l=new we;if(c.Image){const h=new Image;h.onload=C(kt,l,"TestLoadImage: loaded",!0,a,h),h.onerror=C(kt,l,"TestLoadImage: error",!1,a,h),h.onabort=C(kt,l,"TestLoadImage: abort",!1,a,h),h.ontimeout=C(kt,l,"TestLoadImage: timeout",!1,a,h),c.setTimeout(function(){h.ontimeout&&h.ontimeout()},1e4),h.src=r}else a(!1)}function Fa(r,a){const l=new we,h=new AbortController,v=setTimeout(()=>{h.abort(),kt(l,"TestPingServer: timeout",!1,a)},1e4);fetch(r,{signal:h.signal}).then(A=>{clearTimeout(v),A.ok?kt(l,"TestPingServer: ok",!0,a):kt(l,"TestPingServer: server error",!1,a)}).catch(()=>{clearTimeout(v),kt(l,"TestPingServer: error",!1,a)})}function kt(r,a,l,h,v){try{v&&(v.onload=null,v.onerror=null,v.onabort=null,v.ontimeout=null),h(l)}catch{}}function Ba(){this.g=new Ta}function Ua(r,a,l){const h=l||"";try{xi(r,function(v,A){let b=v;g(v)&&(b=ir(v)),a.push(h+A+"="+encodeURIComponent(b))})}catch(v){throw a.push(h+"type="+encodeURIComponent("_badmap")),v}}function fn(r){this.l=r.Ub||null,this.j=r.eb||!1}V(fn,sr),fn.prototype.g=function(){return new dn(this.l,this.j)},fn.prototype.i=function(r){return function(){return r}}({});function dn(r,a){at.call(this),this.D=r,this.o=a,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}V(dn,at),n=dn.prototype,n.open=function(r,a){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=r,this.A=a,this.readyState=1,Ve(this)},n.send=function(r){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const a={headers:this.u,method:this.B,credentials:this.m,cache:void 0};r&&(a.body=r),(this.D||c).fetch(new Request(this.A,a)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Ce(this)),this.readyState=0},n.Sa=function(r){if(this.g&&(this.l=r,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=r.headers,this.readyState=2,Ve(this)),this.g&&(this.readyState=3,Ve(this),this.g)))if(this.responseType==="arraybuffer")r.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream<"u"&&"body"in r){if(this.j=r.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;qi(this)}else r.text().then(this.Ra.bind(this),this.ga.bind(this))};function qi(r){r.j.read().then(r.Pa.bind(r)).catch(r.ga.bind(r))}n.Pa=function(r){if(this.g){if(this.o&&r.value)this.response.push(r.value);else if(!this.o){var a=r.value?r.value:new Uint8Array(0);(a=this.v.decode(a,{stream:!r.done}))&&(this.response=this.responseText+=a)}r.done?Ce(this):Ve(this),this.readyState==3&&qi(this)}},n.Ra=function(r){this.g&&(this.response=this.responseText=r,Ce(this))},n.Qa=function(r){this.g&&(this.response=r,Ce(this))},n.ga=function(){this.g&&Ce(this)};function Ce(r){r.readyState=4,r.l=null,r.j=null,r.v=null,Ve(r)}n.setRequestHeader=function(r,a){this.u.append(r,a)},n.getResponseHeader=function(r){return this.h&&this.h.get(r.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const r=[],a=this.h.entries();for(var l=a.next();!l.done;)l=l.value,r.push(l[0]+": "+l[1]),l=a.next();return r.join(`\r
`)};function Ve(r){r.onreadystatechange&&r.onreadystatechange.call(r)}Object.defineProperty(dn.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(r){this.m=r?"include":"same-origin"}});function Hi(r){let a="";return gt(r,function(l,h){a+=h,a+=":",a+=l,a+=`\r
`}),a}function mr(r,a,l){t:{for(h in l){var h=!1;break t}h=!0}h||(l=Hi(l),typeof r=="string"?l!=null&&encodeURIComponent(String(l)):q(r,a,l))}function K(r){at.call(this),this.headers=new Map,this.o=r||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}V(K,at);var ja=/^https?$/i,$a=["POST","PUT"];n=K.prototype,n.Ha=function(r){this.J=r},n.ea=function(r,a,l,h){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+r);a=a?a.toUpperCase():"GET",this.D=r,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():lr.g(),this.v=this.o?Ei(this.o):Ei(lr),this.g.onreadystatechange=S(this.Ea,this);try{this.B=!0,this.g.open(a,String(r),!0),this.B=!1}catch(A){zi(this,A);return}if(r=l||"",l=new Map(this.headers),h)if(Object.getPrototypeOf(h)===Object.prototype)for(var v in h)l.set(v,h[v]);else if(typeof h.keys=="function"&&typeof h.get=="function")for(const A of h.keys())l.set(A,h.get(A));else throw Error("Unknown input type for opt_headers: "+String(h));h=Array.from(l.keys()).find(A=>A.toLowerCase()=="content-type"),v=c.FormData&&r instanceof c.FormData,!(0<=Array.prototype.indexOf.call($a,a,void 0))||h||v||l.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[A,b]of l)this.g.setRequestHeader(A,b);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Qi(this),this.u=!0,this.g.send(r),this.u=!1}catch(A){zi(this,A)}};function zi(r,a){r.h=!1,r.g&&(r.j=!0,r.g.abort(),r.j=!1),r.l=a,r.m=5,Gi(r),pn(r)}function Gi(r){r.A||(r.A=!0,pt(r,"complete"),pt(r,"error"))}n.abort=function(r){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=r||7,pt(this,"complete"),pt(this,"abort"),pn(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),pn(this,!0)),K.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?Ki(this):this.bb())},n.bb=function(){Ki(this)};function Ki(r){if(r.h&&typeof u<"u"&&(!r.v[1]||St(r)!=4||r.Z()!=2)){if(r.u&&St(r)==4)mi(r.Ea,0,r);else if(pt(r,"readystatechange"),St(r)==4){r.h=!1;try{const b=r.Z();t:switch(b){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var a=!0;break t;default:a=!1}var l;if(!(l=a)){var h;if(h=b===0){var v=String(r.D).match(Li)[1]||null;!v&&c.self&&c.self.location&&(v=c.self.location.protocol.slice(0,-1)),h=!ja.test(v?v.toLowerCase():"")}l=h}if(l)pt(r,"complete"),pt(r,"success");else{r.m=6;try{var A=2<St(r)?r.g.statusText:""}catch{A=""}r.l=A+" ["+r.Z()+"]",Gi(r)}}finally{pn(r)}}}}function pn(r,a){if(r.g){Qi(r);const l=r.g,h=r.v[0]?()=>{}:null;r.g=null,r.v=null,a||pt(r,"ready");try{l.onreadystatechange=h}catch{}}}function Qi(r){r.I&&(c.clearTimeout(r.I),r.I=null)}n.isActive=function(){return!!this.g};function St(r){return r.g?r.g.readyState:0}n.Z=function(){try{return 2<St(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(r){if(this.g){var a=this.g.responseText;return r&&a.indexOf(r)==0&&(a=a.substring(r.length)),va(a)}};function Wi(r){try{if(!r.g)return null;if("response"in r.g)return r.g.response;switch(r.H){case"":case"text":return r.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in r.g)return r.g.mozResponseArrayBuffer}return null}catch{return null}}function qa(r){const a={};r=(r.g&&2<=St(r)&&r.g.getAllResponseHeaders()||"").split(`\r
`);for(let h=0;h<r.length;h++){if(H(r[h]))continue;var l=y(r[h]);const v=l[0];if(l=l[1],typeof l!="string")continue;l=l.trim();const A=a[v]||[];a[v]=A,A.push(l)}E(a,function(h){return h.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function De(r,a,l){return l&&l.internalChannelParams&&l.internalChannelParams[r]||a}function Xi(r){this.Aa=0,this.i=[],this.j=new we,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=De("failFast",!1,r),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=De("baseRetryDelayMs",5e3,r),this.cb=De("retryDelaySeedMs",1e4,r),this.Wa=De("forwardChannelMaxRetries",2,r),this.wa=De("forwardChannelRequestTimeoutMs",2e4,r),this.pa=r&&r.xmlHttpFactory||void 0,this.Xa=r&&r.Tb||void 0,this.Ca=r&&r.useFetchStreams||!1,this.L=void 0,this.J=r&&r.supportsCrossDomainXhr||!1,this.K="",this.h=new Di(r&&r.concurrentRequestLimit),this.Da=new Ba,this.P=r&&r.fastHandshake||!1,this.O=r&&r.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=r&&r.Rb||!1,r&&r.xa&&this.j.xa(),r&&r.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&r&&r.detectBufferingProxy||!1,this.ja=void 0,r&&r.longPollingTimeout&&0<r.longPollingTimeout&&(this.ja=r.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=Xi.prototype,n.la=8,n.G=1,n.connect=function(r,a,l,h){mt(0),this.W=r,this.H=a||{},l&&h!==void 0&&(this.H.OSID=l,this.H.OAID=h),this.F=this.X,this.I=ss(this,null,this.W),gn(this)};function gr(r){if(Yi(r),r.G==3){var a=r.U++,l=Pt(r.I);if(q(l,"SID",r.K),q(l,"RID",a),q(l,"TYPE","terminate"),Ne(r,l),a=new Nt(r,r.j,a),a.L=2,a.v=hn(Pt(l)),l=!1,c.navigator&&c.navigator.sendBeacon)try{l=c.navigator.sendBeacon(a.v.toString(),"")}catch{}!l&&c.Image&&(new Image().src=a.v,l=!0),l||(a.g=os(a.j,null),a.g.ea(a.v)),a.F=Date.now(),ln(a)}is(r)}function mn(r){r.g&&(yr(r),r.g.cancel(),r.g=null)}function Yi(r){mn(r),r.u&&(c.clearTimeout(r.u),r.u=null),_n(r),r.h.cancel(),r.s&&(typeof r.s=="number"&&c.clearTimeout(r.s),r.s=null)}function gn(r){if(!Ni(r.h)&&!r.s){r.s=!0;var a=r.Ga;_e||ci(),ye||(_e(),ye=!0),Xn.add(a,r),r.B=0}}function Ha(r,a){return Oi(r.h)>=r.h.j-(r.s?1:0)?!1:r.s?(r.i=a.D.concat(r.i),!0):r.G==1||r.G==2||r.B>=(r.Va?0:r.Wa)?!1:(r.s=Ae(S(r.Ga,r,a),rs(r,r.B)),r.B++,!0)}n.Ga=function(r){if(this.s)if(this.s=null,this.G==1){if(!r){this.U=Math.floor(1e5*Math.random()),r=this.U++;const v=new Nt(this,this.j,r);let A=this.o;if(this.S&&(A?(A=d(A),_(A,this.S)):A=this.S),this.m!==null||this.O||(v.H=A,A=null),this.P)t:{for(var a=0,l=0;l<this.i.length;l++){e:{var h=this.i[l];if("__data__"in h.map&&(h=h.map.__data__,typeof h=="string")){h=h.length;break e}h=void 0}if(h===void 0)break;if(a+=h,4096<a){a=l;break t}if(a===4096||l===this.i.length-1){a=l+1;break t}}a=1e3}else a=1e3;a=Zi(this,v,a),l=Pt(this.I),q(l,"RID",r),q(l,"CVER",22),this.D&&q(l,"X-HTTP-Session-Id",this.D),Ne(this,l),A&&(this.O?a="headers="+encodeURIComponent(String(Hi(A)))+"&"+a:this.m&&mr(l,this.m,A)),pr(this.h,v),this.Ua&&q(l,"TYPE","init"),this.P?(q(l,"$req",a),q(l,"SID","null"),v.T=!0,cr(v,l,null)):cr(v,l,a),this.G=2}}else this.G==3&&(r?Ji(this,r):this.i.length==0||Ni(this.h)||Ji(this))};function Ji(r,a){var l;a?l=a.l:l=r.U++;const h=Pt(r.I);q(h,"SID",r.K),q(h,"RID",l),q(h,"AID",r.T),Ne(r,h),r.m&&r.o&&mr(h,r.m,r.o),l=new Nt(r,r.j,l,r.B+1),r.m===null&&(l.H=r.o),a&&(r.i=a.D.concat(r.i)),a=Zi(r,l,1e3),l.I=Math.round(.5*r.wa)+Math.round(.5*r.wa*Math.random()),pr(r.h,l),cr(l,h,a)}function Ne(r,a){r.H&&gt(r.H,function(l,h){q(a,h,l)}),r.l&&xi({},function(l,h){q(a,h,l)})}function Zi(r,a,l){l=Math.min(r.i.length,l);var h=r.l?S(r.l.Na,r.l,r):null;t:{var v=r.i;let A=-1;for(;;){const b=["count="+l];A==-1?0<l?(A=v[0].g,b.push("ofs="+A)):A=0:b.push("ofs="+A);let U=!0;for(let et=0;et<l;et++){let B=v[et].g;const lt=v[et].map;if(B-=A,0>B)A=Math.max(0,v[et].g-100),U=!1;else try{Ua(lt,b,"req"+B+"_")}catch{h&&h(lt)}}if(U){h=b.join("&");break t}}}return r=r.i.splice(0,l),a.D=r,h}function ts(r){if(!r.g&&!r.u){r.Y=1;var a=r.Fa;_e||ci(),ye||(_e(),ye=!0),Xn.add(a,r),r.v=0}}function _r(r){return r.g||r.u||3<=r.v?!1:(r.Y++,r.u=Ae(S(r.Fa,r),rs(r,r.v)),r.v++,!0)}n.Fa=function(){if(this.u=null,es(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var r=2*this.R;this.j.info("BP detection timer enabled: "+r),this.A=Ae(S(this.ab,this),r)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,mt(10),mn(this),es(this))};function yr(r){r.A!=null&&(c.clearTimeout(r.A),r.A=null)}function es(r){r.g=new Nt(r,r.j,"rpc",r.Y),r.m===null&&(r.g.H=r.o),r.g.O=0;var a=Pt(r.qa);q(a,"RID","rpc"),q(a,"SID",r.K),q(a,"AID",r.T),q(a,"CI",r.F?"0":"1"),!r.F&&r.ja&&q(a,"TO",r.ja),q(a,"TYPE","xmlhttp"),Ne(r,a),r.m&&r.o&&mr(a,r.m,r.o),r.L&&(r.g.I=r.L);var l=r.g;r=r.ia,l.L=1,l.v=hn(Pt(a)),l.m=null,l.P=!0,bi(l,r)}n.Za=function(){this.C!=null&&(this.C=null,mn(this),_r(this),mt(19))};function _n(r){r.C!=null&&(c.clearTimeout(r.C),r.C=null)}function ns(r,a){var l=null;if(r.g==a){_n(r),yr(r),r.g=null;var h=2}else if(dr(r.h,a))l=a.D,ki(r.h,a),h=1;else return;if(r.G!=0){if(a.o)if(h==1){l=a.m?a.m.length:0,a=Date.now()-a.F;var v=r.B;h=sn(),pt(h,new wi(h,l)),gn(r)}else ts(r);else if(v=a.s,v==3||v==0&&0<a.X||!(h==1&&Ha(r,a)||h==2&&_r(r)))switch(l&&0<l.length&&(a=r.h,a.i=a.i.concat(l)),v){case 1:zt(r,5);break;case 4:zt(r,10);break;case 3:zt(r,6);break;default:zt(r,2)}}}function rs(r,a){let l=r.Ta+Math.floor(Math.random()*r.cb);return r.isActive()||(l*=2),l*a}function zt(r,a){if(r.j.info("Error code "+a),a==2){var l=S(r.fb,r),h=r.Xa;const v=!h;h=new Ht(h||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||un(h,"https"),hn(h),v?La(h.toString(),l):Fa(h.toString(),l)}else mt(2);r.G=0,r.l&&r.l.sa(a),is(r),Yi(r)}n.fb=function(r){r?(this.j.info("Successfully pinged google.com"),mt(2)):(this.j.info("Failed to ping google.com"),mt(1))};function is(r){if(r.G=0,r.ka=[],r.l){const a=Mi(r.h);(a.length!=0||r.i.length!=0)&&(N(r.ka,a),N(r.ka,r.i),r.h.i.length=0,M(r.i),r.i.length=0),r.l.ra()}}function ss(r,a,l){var h=l instanceof Ht?Pt(l):new Ht(l);if(h.g!="")a&&(h.g=a+"."+h.g),cn(h,h.s);else{var v=c.location;h=v.protocol,a=a?a+"."+v.hostname:v.hostname,v=+v.port;var A=new Ht(null);h&&un(A,h),a&&(A.g=a),v&&cn(A,v),l&&(A.l=l),h=A}return l=r.D,a=r.ya,l&&a&&q(h,l,a),q(h,"VER",r.la),Ne(r,h),h}function os(r,a,l){if(a&&!r.J)throw Error("Can't create secondary domain capable XhrIo object.");return a=r.Ca&&!r.pa?new K(new fn({eb:l})):new K(r.pa),a.Ha(r.J),a}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function as(){}n=as.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function yn(){}yn.prototype.g=function(r,a){return new yt(r,a)};function yt(r,a){at.call(this),this.g=new Xi(a),this.l=r,this.h=a&&a.messageUrlParams||null,r=a&&a.messageHeaders||null,a&&a.clientProtocolHeaderRequired&&(r?r["X-Client-Protocol"]="webchannel":r={"X-Client-Protocol":"webchannel"}),this.g.o=r,r=a&&a.initMessageHeaders||null,a&&a.messageContentType&&(r?r["X-WebChannel-Content-Type"]=a.messageContentType:r={"X-WebChannel-Content-Type":a.messageContentType}),a&&a.va&&(r?r["X-WebChannel-Client-Profile"]=a.va:r={"X-WebChannel-Client-Profile":a.va}),this.g.S=r,(r=a&&a.Sb)&&!H(r)&&(this.g.m=r),this.v=a&&a.supportsCrossDomainXhr||!1,this.u=a&&a.sendRawJson||!1,(a=a&&a.httpSessionIdParam)&&!H(a)&&(this.g.D=a,r=this.h,r!==null&&a in r&&(r=this.h,a in r&&delete r[a])),this.j=new re(this)}V(yt,at),yt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},yt.prototype.close=function(){gr(this.g)},yt.prototype.o=function(r){var a=this.g;if(typeof r=="string"){var l={};l.__data__=r,r=l}else this.u&&(l={},l.__data__=ir(r),r=l);a.i.push(new Sa(a.Ya++,r)),a.G==3&&gn(a)},yt.prototype.N=function(){this.g.l=null,delete this.j,gr(this.g),delete this.g,yt.aa.N.call(this)};function ls(r){or.call(this),r.__headers__&&(this.headers=r.__headers__,this.statusCode=r.__status__,delete r.__headers__,delete r.__status__);var a=r.__sm__;if(a){t:{for(const l in a){r=l;break t}r=void 0}(this.i=r)&&(r=this.i,a=a!==null&&r in a?a[r]:void 0),this.data=a}else this.data=r}V(ls,or);function us(){ar.call(this),this.status=1}V(us,ar);function re(r){this.g=r}V(re,as),re.prototype.ua=function(){pt(this.g,"a")},re.prototype.ta=function(r){pt(this.g,new ls(r))},re.prototype.sa=function(r){pt(this.g,new us)},re.prototype.ra=function(){pt(this.g,"b")},yn.prototype.createWebChannel=yn.prototype.g,yt.prototype.send=yt.prototype.o,yt.prototype.open=yt.prototype.m,yt.prototype.close=yt.prototype.close,uo=function(){return new yn},lo=function(){return sn()},ao=$t,Or={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},on.NO_ERROR=0,on.TIMEOUT=8,on.HTTP_ERROR=6,Rn=on,Ri.COMPLETE="complete",oo=Ri,vi.EventType=Te,Te.OPEN="a",Te.CLOSE="b",Te.ERROR="c",Te.MESSAGE="d",at.prototype.listen=at.prototype.K,Me=vi,K.prototype.listenOnce=K.prototype.L,K.prototype.getLastError=K.prototype.Ka,K.prototype.getLastErrorCode=K.prototype.Ba,K.prototype.getStatus=K.prototype.Z,K.prototype.getResponseJson=K.prototype.Oa,K.prototype.getResponseText=K.prototype.oa,K.prototype.send=K.prototype.ea,K.prototype.setWithCredentials=K.prototype.Ha,so=K}).apply(typeof vn<"u"?vn:typeof self<"u"?self:typeof window<"u"?window:{});const Ts="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ht{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}ht.UNAUTHENTICATED=new ht(null),ht.GOOGLE_CREDENTIALS=new ht("google-credentials-uid"),ht.FIRST_PARTY=new ht("first-party-uid"),ht.MOCK_USER=new ht("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let pe="10.14.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yt=new Js("@firebase/firestore");function Oe(){return Yt.logLevel}function D(n,...t){if(Yt.logLevel<=F.DEBUG){const e=t.map(Gr);Yt.debug(`Firestore (${pe}): ${n}`,...e)}}function Jt(n,...t){if(Yt.logLevel<=F.ERROR){const e=t.map(Gr);Yt.error(`Firestore (${pe}): ${n}`,...e)}}function Dn(n,...t){if(Yt.logLevel<=F.WARN){const e=t.map(Gr);Yt.warn(`Firestore (${pe}): ${n}`,...e)}}function Gr(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(e){return JSON.stringify(e)}(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function x(n="Unexpected state"){const t=`FIRESTORE (${pe}) INTERNAL ASSERTION FAILED: `+n;throw Jt(t),new Error(t)}function X(n,t){n||x()}function $(n,t){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const P={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class O extends de{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wt{constructor(){this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class co{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class Au{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable(()=>e(ht.UNAUTHENTICATED))}shutdown(){}}class wu{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable(()=>e(this.token.user))}shutdown(){this.changeListener=null}}class Ru{constructor(t){this.t=t,this.currentUser=ht.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){X(this.o===void 0);let i=this.i;const s=f=>this.i!==i?(i=this.i,e(f)):Promise.resolve();let o=new Wt;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new Wt,t.enqueueRetryable(()=>s(this.currentUser))};const u=()=>{const f=o;t.enqueueRetryable(async()=>{await f.promise,await s(this.currentUser)})},c=f=>{D("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=f,this.o&&(this.auth.addAuthTokenListener(this.o),u())};this.t.onInit(f=>c(f)),setTimeout(()=>{if(!this.auth){const f=this.t.getImmediate({optional:!0});f?c(f):(D("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new Wt)}},0),u()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then(i=>this.i!==t?(D("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):i?(X(typeof i.accessToken=="string"),new co(i.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return X(t===null||typeof t=="string"),new ht(t)}}class Pu{constructor(t,e,i){this.l=t,this.h=e,this.P=i,this.type="FirstParty",this.user=ht.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const t=this.T();return t&&this.I.set("Authorization",t),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class Su{constructor(t,e,i){this.l=t,this.h=e,this.P=i}getToken(){return Promise.resolve(new Pu(this.l,this.h,this.P))}start(t,e){t.enqueueRetryable(()=>e(ht.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class bu{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Cu{constructor(t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(t,e){X(this.o===void 0);const i=o=>{o.error!=null&&D("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const u=o.token!==this.R;return this.R=o.token,D("FirebaseAppCheckTokenProvider",`Received ${u?"new":"existing"} token.`),u?e(o.token):Promise.resolve()};this.o=o=>{t.enqueueRetryable(()=>i(o))};const s=o=>{D("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(o=>s(o)),setTimeout(()=>{if(!this.appCheck){const o=this.A.getImmediate({optional:!0});o?s(o):D("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(e=>e?(X(typeof e.token=="string"),this.R=e.token,new bu(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vu(n){const t=typeof self<"u"&&(self.crypto||self.msCrypto),e=new Uint8Array(n);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(e);else for(let i=0;i<n;i++)e[i]=Math.floor(256*Math.random());return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ho{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let i="";for(;i.length<20;){const s=Vu(40);for(let o=0;o<s.length;++o)i.length<20&&s[o]<e&&(i+=t.charAt(s[o]%t.length))}return i}}function j(n,t){return n<t?-1:n>t?1:0}function le(n,t,e){return n.length===t.length&&n.every((i,s)=>e(i,t[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tt{constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new O(P.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new O(P.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new O(P.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new O(P.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return tt.fromMillis(Date.now())}static fromDate(t){return tt.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),i=Math.floor(1e6*(t-1e3*e));return new tt(e,i)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?j(this.nanoseconds,t.nanoseconds):j(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z{constructor(t){this.timestamp=t}static fromTimestamp(t){return new z(t)}static min(){return new z(new tt(0,0))}static max(){return new z(new tt(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qe{constructor(t,e,i){e===void 0?e=0:e>t.length&&x(),i===void 0?i=t.length-e:i>t.length-e&&x(),this.segments=t,this.offset=e,this.len=i}get length(){return this.len}isEqual(t){return qe.comparator(this,t)===0}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof qe?t.forEach(i=>{e.push(i)}):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,i=this.limit();e<i;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const i=Math.min(t.length,e.length);for(let s=0;s<i;s++){const o=t.get(s),u=e.get(s);if(o<u)return-1;if(o>u)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class Q extends qe{construct(t,e,i){return new Q(t,e,i)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const i of t){if(i.indexOf("//")>=0)throw new O(P.INVALID_ARGUMENT,`Invalid segment (${i}). Paths must not contain // in them.`);e.push(...i.split("/").filter(s=>s.length>0))}return new Q(e)}static emptyPath(){return new Q([])}}const Du=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class it extends qe{construct(t,e,i){return new it(t,e,i)}static isValidIdentifier(t){return Du.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),it.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new it(["__name__"])}static fromServerFormat(t){const e=[];let i="",s=0;const o=()=>{if(i.length===0)throw new O(P.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(i),i=""};let u=!1;for(;s<t.length;){const c=t[s];if(c==="\\"){if(s+1===t.length)throw new O(P.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const f=t[s+1];if(f!=="\\"&&f!=="."&&f!=="`")throw new O(P.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);i+=f,s+=2}else c==="`"?(u=!u,s++):c!=="."||u?(i+=c,s++):(o(),s++)}if(o(),u)throw new O(P.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new it(e)}static emptyPath(){return new it([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k{constructor(t){this.path=t}static fromPath(t){return new k(Q.fromString(t))}static fromName(t){return new k(Q.fromString(t).popFirst(5))}static empty(){return new k(Q.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&Q.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,e){return Q.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new k(new Q(t.slice()))}}function Nu(n,t){const e=n.toTimestamp().seconds,i=n.toTimestamp().nanoseconds+1,s=z.fromTimestamp(i===1e9?new tt(e+1,0):new tt(e,i));return new Ft(s,k.empty(),t)}function Ou(n){return new Ft(n.readTime,n.key,-1)}class Ft{constructor(t,e,i){this.readTime=t,this.documentKey=e,this.largestBatchId=i}static min(){return new Ft(z.min(),k.empty(),-1)}static max(){return new Ft(z.max(),k.empty(),-1)}}function ku(n,t){let e=n.readTime.compareTo(t.readTime);return e!==0?e:(e=k.comparator(n.documentKey,t.documentKey),e!==0?e:j(n.largestBatchId,t.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mu="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class xu{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fo(n){if(n.code!==P.FAILED_PRECONDITION||n.message!==Mu)throw n;D("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&x(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new R((i,s)=>{this.nextCallback=o=>{this.wrapSuccess(t,o).next(i,s)},this.catchCallback=o=>{this.wrapFailure(e,o).next(i,s)}})}toPromise(){return new Promise((t,e)=>{this.next(t,e)})}wrapUserFunction(t){try{const e=t();return e instanceof R?e:R.resolve(e)}catch(e){return R.reject(e)}}wrapSuccess(t,e){return t?this.wrapUserFunction(()=>t(e)):R.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction(()=>t(e)):R.reject(e)}static resolve(t){return new R((e,i)=>{e(t)})}static reject(t){return new R((e,i)=>{i(t)})}static waitFor(t){return new R((e,i)=>{let s=0,o=0,u=!1;t.forEach(c=>{++s,c.next(()=>{++o,u&&o===s&&e()},f=>i(f))}),u=!0,o===s&&e()})}static or(t){let e=R.resolve(!1);for(const i of t)e=e.next(s=>s?R.resolve(s):i());return e}static forEach(t,e){const i=[];return t.forEach((s,o)=>{i.push(e.call(this,s,o))}),this.waitFor(i)}static mapArray(t,e){return new R((i,s)=>{const o=t.length,u=new Array(o);let c=0;for(let f=0;f<o;f++){const g=f;e(t[g]).next(I=>{u[g]=I,++c,c===o&&i(u)},I=>s(I))}})}static doWhile(t,e){return new R((i,s)=>{const o=()=>{t()===!0?e().next(()=>{o()},s):i()};o()})}}function Lu(n){const t=n.match(/Android ([\d.]+)/i),e=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(e)}function jn(n){return n.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class po{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=i=>this.ie(i),this.se=i=>e.writeSequenceNumber(i))}ie(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.se&&this.se(t),t}}po.oe=-1;function Kr(n){return n==null}function Nn(n){return n===0&&1/n==-1/0}function Fu(n){return typeof n=="number"&&Number.isInteger(n)&&!Nn(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Is(n){let t=0;for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t++;return t}function Xe(n,t){for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t(e,n[e])}function mo(n){for(const t in n)if(Object.prototype.hasOwnProperty.call(n,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _t{constructor(t,e){this.comparator=t,this.root=e||nt.EMPTY}insert(t,e){return new _t(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,nt.BLACK,null,null))}remove(t){return new _t(this.comparator,this.root.remove(t,this.comparator).copy(null,null,nt.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const i=this.comparator(t,e.key);if(i===0)return e.value;i<0?e=e.left:i>0&&(e=e.right)}return null}indexOf(t){let e=0,i=this.root;for(;!i.isEmpty();){const s=this.comparator(t,i.key);if(s===0)return e+i.left.size;s<0?i=i.left:(e+=i.left.size+1,i=i.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((e,i)=>(t(e,i),!1))}toString(){const t=[];return this.inorderTraversal((e,i)=>(t.push(`${e}:${i}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Tn(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Tn(this.root,t,this.comparator,!1)}getReverseIterator(){return new Tn(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Tn(this.root,t,this.comparator,!0)}}class Tn{constructor(t,e,i,s){this.isReverse=s,this.nodeStack=[];let o=1;for(;!t.isEmpty();)if(o=e?i(t.key,e):1,e&&s&&(o*=-1),o<0)t=this.isReverse?t.left:t.right;else{if(o===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class nt{constructor(t,e,i,s,o){this.key=t,this.value=e,this.color=i??nt.RED,this.left=s??nt.EMPTY,this.right=o??nt.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,i,s,o){return new nt(t??this.key,e??this.value,i??this.color,s??this.left,o??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,i){let s=this;const o=i(t,s.key);return s=o<0?s.copy(null,null,null,s.left.insert(t,e,i),null):o===0?s.copy(null,e,null,null,null):s.copy(null,null,null,null,s.right.insert(t,e,i)),s.fixUp()}removeMin(){if(this.left.isEmpty())return nt.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let i,s=this;if(e(t,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(t,e),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),e(t,s.key)===0){if(s.right.isEmpty())return nt.EMPTY;i=s.right.min(),s=s.copy(i.key,i.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(t,e))}return s.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,nt.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,nt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw x();const t=this.left.check();if(t!==this.right.check())throw x();return t+(this.isRed()?0:1)}}nt.EMPTY=null,nt.RED=!0,nt.BLACK=!1;nt.EMPTY=new class{constructor(){this.size=0}get key(){throw x()}get value(){throw x()}get color(){throw x()}get left(){throw x()}get right(){throw x()}copy(t,e,i,s,o){return this}insert(t,e,i){return new nt(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dt{constructor(t){this.comparator=t,this.data=new _t(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((e,i)=>(t(e),!1))}forEachInRange(t,e){const i=this.data.getIteratorFrom(t[0]);for(;i.hasNext();){const s=i.getNext();if(this.comparator(s.key,t[1])>=0)return;e(s.key)}}forEachWhile(t,e){let i;for(i=e!==void 0?this.data.getIteratorFrom(e):this.data.getIterator();i.hasNext();)if(!t(i.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new As(this.data.getIterator())}getIteratorFrom(t){return new As(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach(i=>{e=e.add(i)}),e}isEqual(t){if(!(t instanceof dt)||this.size!==t.size)return!1;const e=this.data.getIterator(),i=t.data.getIterator();for(;e.hasNext();){const s=e.getNext().key,o=i.getNext().key;if(this.comparator(s,o)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(e=>{t.push(e)}),t}toString(){const t=[];return this.forEach(e=>t.push(e)),"SortedSet("+t.toString()+")"}copy(t){const e=new dt(this.comparator);return e.data=t,e}}class As{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class It{constructor(t){this.fields=t,t.sort(it.comparator)}static empty(){return new It([])}unionWith(t){let e=new dt(it.comparator);for(const i of this.fields)e=e.add(i);for(const i of t)e=e.add(i);return new It(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return le(this.fields,t.fields,(e,i)=>e.isEqual(i))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bu extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class At{constructor(t){this.binaryString=t}static fromBase64String(t){const e=function(s){try{return atob(s)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new Bu("Invalid base64 string: "+o):o}}(t);return new At(e)}static fromUint8Array(t){const e=function(s){let o="";for(let u=0;u<s.length;++u)o+=String.fromCharCode(s[u]);return o}(t);return new At(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(e){return btoa(e)}(this.binaryString)}toUint8Array(){return function(e){const i=new Uint8Array(e.length);for(let s=0;s<e.length;s++)i[s]=e.charCodeAt(s);return i}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return j(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}At.EMPTY_BYTE_STRING=new At("");const Uu=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Zt(n){if(X(!!n),typeof n=="string"){let t=0;const e=Uu.exec(n);if(X(!!e),e[1]){let s=e[1];s=(s+"000000000").substr(0,9),t=Number(s)}const i=new Date(n);return{seconds:Math.floor(i.getTime()/1e3),nanos:t}}return{seconds:rt(n.seconds),nanos:rt(n.nanos)}}function rt(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function He(n){return typeof n=="string"?At.fromBase64String(n):At.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qr(n){var t,e;return((e=(((t=n==null?void 0:n.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||e===void 0?void 0:e.stringValue)==="server_timestamp"}function go(n){const t=n.mapValue.fields.__previous_value__;return Qr(t)?go(t):t}function On(n){const t=Zt(n.mapValue.fields.__local_write_time__.timestampValue);return new tt(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ju{constructor(t,e,i,s,o,u,c,f,g){this.databaseId=t,this.appId=e,this.persistenceKey=i,this.host=s,this.ssl=o,this.forceLongPolling=u,this.autoDetectLongPolling=c,this.longPollingOptions=f,this.useFetchStreams=g}}class kn{constructor(t,e){this.projectId=t,this.database=e||"(default)"}static empty(){return new kn("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof kn&&t.projectId===this.projectId&&t.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const In={mapValue:{}};function ue(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Qr(n)?4:qu(n)?9007199254740991:$u(n)?10:11:x()}function wt(n,t){if(n===t)return!0;const e=ue(n);if(e!==ue(t))return!1;switch(e){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===t.booleanValue;case 4:return On(n).isEqual(On(t));case 3:return function(s,o){if(typeof s.timestampValue=="string"&&typeof o.timestampValue=="string"&&s.timestampValue.length===o.timestampValue.length)return s.timestampValue===o.timestampValue;const u=Zt(s.timestampValue),c=Zt(o.timestampValue);return u.seconds===c.seconds&&u.nanos===c.nanos}(n,t);case 5:return n.stringValue===t.stringValue;case 6:return function(s,o){return He(s.bytesValue).isEqual(He(o.bytesValue))}(n,t);case 7:return n.referenceValue===t.referenceValue;case 8:return function(s,o){return rt(s.geoPointValue.latitude)===rt(o.geoPointValue.latitude)&&rt(s.geoPointValue.longitude)===rt(o.geoPointValue.longitude)}(n,t);case 2:return function(s,o){if("integerValue"in s&&"integerValue"in o)return rt(s.integerValue)===rt(o.integerValue);if("doubleValue"in s&&"doubleValue"in o){const u=rt(s.doubleValue),c=rt(o.doubleValue);return u===c?Nn(u)===Nn(c):isNaN(u)&&isNaN(c)}return!1}(n,t);case 9:return le(n.arrayValue.values||[],t.arrayValue.values||[],wt);case 10:case 11:return function(s,o){const u=s.mapValue.fields||{},c=o.mapValue.fields||{};if(Is(u)!==Is(c))return!1;for(const f in u)if(u.hasOwnProperty(f)&&(c[f]===void 0||!wt(u[f],c[f])))return!1;return!0}(n,t);default:return x()}}function ze(n,t){return(n.values||[]).find(e=>wt(e,t))!==void 0}function ce(n,t){if(n===t)return 0;const e=ue(n),i=ue(t);if(e!==i)return j(e,i);switch(e){case 0:case 9007199254740991:return 0;case 1:return j(n.booleanValue,t.booleanValue);case 2:return function(o,u){const c=rt(o.integerValue||o.doubleValue),f=rt(u.integerValue||u.doubleValue);return c<f?-1:c>f?1:c===f?0:isNaN(c)?isNaN(f)?0:-1:1}(n,t);case 3:return ws(n.timestampValue,t.timestampValue);case 4:return ws(On(n),On(t));case 5:return j(n.stringValue,t.stringValue);case 6:return function(o,u){const c=He(o),f=He(u);return c.compareTo(f)}(n.bytesValue,t.bytesValue);case 7:return function(o,u){const c=o.split("/"),f=u.split("/");for(let g=0;g<c.length&&g<f.length;g++){const I=j(c[g],f[g]);if(I!==0)return I}return j(c.length,f.length)}(n.referenceValue,t.referenceValue);case 8:return function(o,u){const c=j(rt(o.latitude),rt(u.latitude));return c!==0?c:j(rt(o.longitude),rt(u.longitude))}(n.geoPointValue,t.geoPointValue);case 9:return Rs(n.arrayValue,t.arrayValue);case 10:return function(o,u){var c,f,g,I;const w=o.fields||{},S=u.fields||{},C=(c=w.value)===null||c===void 0?void 0:c.arrayValue,V=(f=S.value)===null||f===void 0?void 0:f.arrayValue,M=j(((g=C==null?void 0:C.values)===null||g===void 0?void 0:g.length)||0,((I=V==null?void 0:V.values)===null||I===void 0?void 0:I.length)||0);return M!==0?M:Rs(C,V)}(n.mapValue,t.mapValue);case 11:return function(o,u){if(o===In.mapValue&&u===In.mapValue)return 0;if(o===In.mapValue)return 1;if(u===In.mapValue)return-1;const c=o.fields||{},f=Object.keys(c),g=u.fields||{},I=Object.keys(g);f.sort(),I.sort();for(let w=0;w<f.length&&w<I.length;++w){const S=j(f[w],I[w]);if(S!==0)return S;const C=ce(c[f[w]],g[I[w]]);if(C!==0)return C}return j(f.length,I.length)}(n.mapValue,t.mapValue);default:throw x()}}function ws(n,t){if(typeof n=="string"&&typeof t=="string"&&n.length===t.length)return j(n,t);const e=Zt(n),i=Zt(t),s=j(e.seconds,i.seconds);return s!==0?s:j(e.nanos,i.nanos)}function Rs(n,t){const e=n.values||[],i=t.values||[];for(let s=0;s<e.length&&s<i.length;++s){const o=ce(e[s],i[s]);if(o)return o}return j(e.length,i.length)}function he(n){return kr(n)}function kr(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(e){const i=Zt(e);return`time(${i.seconds},${i.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(e){return He(e).toBase64()}(n.bytesValue):"referenceValue"in n?function(e){return k.fromName(e).toString()}(n.referenceValue):"geoPointValue"in n?function(e){return`geo(${e.latitude},${e.longitude})`}(n.geoPointValue):"arrayValue"in n?function(e){let i="[",s=!0;for(const o of e.values||[])s?s=!1:i+=",",i+=kr(o);return i+"]"}(n.arrayValue):"mapValue"in n?function(e){const i=Object.keys(e.fields||{}).sort();let s="{",o=!0;for(const u of i)o?o=!1:s+=",",s+=`${u}:${kr(e.fields[u])}`;return s+"}"}(n.mapValue):x()}function Mr(n){return!!n&&"integerValue"in n}function Wr(n){return!!n&&"arrayValue"in n}function Pn(n){return!!n&&"mapValue"in n}function $u(n){var t,e;return((e=(((t=n==null?void 0:n.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||e===void 0?void 0:e.stringValue)==="__vector__"}function xe(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const t={mapValue:{fields:{}}};return Xe(n.mapValue.fields,(e,i)=>t.mapValue.fields[e]=xe(i)),t}if(n.arrayValue){const t={arrayValue:{values:[]}};for(let e=0;e<(n.arrayValue.values||[]).length;++e)t.arrayValue.values[e]=xe(n.arrayValue.values[e]);return t}return Object.assign({},n)}function qu(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tt{constructor(t){this.value=t}static empty(){return new Tt({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let i=0;i<t.length-1;++i)if(e=(e.mapValue.fields||{})[t.get(i)],!Pn(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=xe(e)}setAll(t){let e=it.emptyPath(),i={},s=[];t.forEach((u,c)=>{if(!e.isImmediateParentOf(c)){const f=this.getFieldsMap(e);this.applyChanges(f,i,s),i={},s=[],e=c.popLast()}u?i[c.lastSegment()]=xe(u):s.push(c.lastSegment())});const o=this.getFieldsMap(e);this.applyChanges(o,i,s)}delete(t){const e=this.field(t.popLast());Pn(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return wt(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let i=0;i<t.length;++i){let s=e.mapValue.fields[t.get(i)];Pn(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},e.mapValue.fields[t.get(i)]=s),e=s}return e.mapValue.fields}applyChanges(t,e,i){Xe(e,(s,o)=>t[s]=o);for(const s of i)delete t[s]}clone(){return new Tt(xe(this.value))}}function _o(n){const t=[];return Xe(n.fields,(e,i)=>{const s=new it([e]);if(Pn(i)){const o=_o(i.mapValue).fields;if(o.length===0)t.push(s);else for(const u of o)t.push(s.child(u))}else t.push(s)}),new It(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vt{constructor(t,e,i,s,o,u,c){this.key=t,this.documentType=e,this.version=i,this.readTime=s,this.createTime=o,this.data=u,this.documentState=c}static newInvalidDocument(t){return new vt(t,0,z.min(),z.min(),z.min(),Tt.empty(),0)}static newFoundDocument(t,e,i,s){return new vt(t,1,e,z.min(),i,s,0)}static newNoDocument(t,e){return new vt(t,2,e,z.min(),z.min(),Tt.empty(),0)}static newUnknownDocument(t,e){return new vt(t,3,e,z.min(),z.min(),Tt.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(z.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=Tt.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=Tt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=z.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof vt&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new vt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mn{constructor(t,e){this.position=t,this.inclusive=e}}function Ps(n,t,e){let i=0;for(let s=0;s<n.position.length;s++){const o=t[s],u=n.position[s];if(o.field.isKeyField()?i=k.comparator(k.fromName(u.referenceValue),e.key):i=ce(u,e.data.field(o.field)),o.dir==="desc"&&(i*=-1),i!==0)break}return i}function Ss(n,t){if(n===null)return t===null;if(t===null||n.inclusive!==t.inclusive||n.position.length!==t.position.length)return!1;for(let e=0;e<n.position.length;e++)if(!wt(n.position[e],t.position[e]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xn{constructor(t,e="asc"){this.field=t,this.dir=e}}function Hu(n,t){return n.dir===t.dir&&n.field.isEqual(t.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yo{}class Z extends yo{constructor(t,e,i){super(),this.field=t,this.op=e,this.value=i}static create(t,e,i){return t.isKeyField()?e==="in"||e==="not-in"?this.createKeyFieldInFilter(t,e,i):new Gu(t,e,i):e==="array-contains"?new Wu(t,i):e==="in"?new Xu(t,i):e==="not-in"?new Yu(t,i):e==="array-contains-any"?new Ju(t,i):new Z(t,e,i)}static createKeyFieldInFilter(t,e,i){return e==="in"?new Ku(t,i):new Qu(t,i)}matches(t){const e=t.data.field(this.field);return this.op==="!="?e!==null&&this.matchesComparison(ce(e,this.value)):e!==null&&ue(this.value)===ue(e)&&this.matchesComparison(ce(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return x()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Bt extends yo{constructor(t,e){super(),this.filters=t,this.op=e,this.ae=null}static create(t,e){return new Bt(t,e)}matches(t){return Eo(this)?this.filters.find(e=>!e.matches(t))===void 0:this.filters.find(e=>e.matches(t))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((t,e)=>t.concat(e.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function Eo(n){return n.op==="and"}function vo(n){return zu(n)&&Eo(n)}function zu(n){for(const t of n.filters)if(t instanceof Bt)return!1;return!0}function xr(n){if(n instanceof Z)return n.field.canonicalString()+n.op.toString()+he(n.value);if(vo(n))return n.filters.map(t=>xr(t)).join(",");{const t=n.filters.map(e=>xr(e)).join(",");return`${n.op}(${t})`}}function To(n,t){return n instanceof Z?function(i,s){return s instanceof Z&&i.op===s.op&&i.field.isEqual(s.field)&&wt(i.value,s.value)}(n,t):n instanceof Bt?function(i,s){return s instanceof Bt&&i.op===s.op&&i.filters.length===s.filters.length?i.filters.reduce((o,u,c)=>o&&To(u,s.filters[c]),!0):!1}(n,t):void x()}function Io(n){return n instanceof Z?function(e){return`${e.field.canonicalString()} ${e.op} ${he(e.value)}`}(n):n instanceof Bt?function(e){return e.op.toString()+" {"+e.getFilters().map(Io).join(" ,")+"}"}(n):"Filter"}class Gu extends Z{constructor(t,e,i){super(t,e,i),this.key=k.fromName(i.referenceValue)}matches(t){const e=k.comparator(t.key,this.key);return this.matchesComparison(e)}}class Ku extends Z{constructor(t,e){super(t,"in",e),this.keys=Ao("in",e)}matches(t){return this.keys.some(e=>e.isEqual(t.key))}}class Qu extends Z{constructor(t,e){super(t,"not-in",e),this.keys=Ao("not-in",e)}matches(t){return!this.keys.some(e=>e.isEqual(t.key))}}function Ao(n,t){var e;return(((e=t.arrayValue)===null||e===void 0?void 0:e.values)||[]).map(i=>k.fromName(i.referenceValue))}class Wu extends Z{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return Wr(e)&&ze(e.arrayValue,this.value)}}class Xu extends Z{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return e!==null&&ze(this.value.arrayValue,e)}}class Yu extends Z{constructor(t,e){super(t,"not-in",e)}matches(t){if(ze(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return e!==null&&!ze(this.value.arrayValue,e)}}class Ju extends Z{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!Wr(e)||!e.arrayValue.values)&&e.arrayValue.values.some(i=>ze(this.value.arrayValue,i))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zu{constructor(t,e=null,i=[],s=[],o=null,u=null,c=null){this.path=t,this.collectionGroup=e,this.orderBy=i,this.filters=s,this.limit=o,this.startAt=u,this.endAt=c,this.ue=null}}function bs(n,t=null,e=[],i=[],s=null,o=null,u=null){return new Zu(n,t,e,i,s,o,u)}function Xr(n){const t=$(n);if(t.ue===null){let e=t.path.canonicalString();t.collectionGroup!==null&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map(i=>xr(i)).join(","),e+="|ob:",e+=t.orderBy.map(i=>function(o){return o.field.canonicalString()+o.dir}(i)).join(","),Kr(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(i=>he(i)).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(i=>he(i)).join(",")),t.ue=e}return t.ue}function Yr(n,t){if(n.limit!==t.limit||n.orderBy.length!==t.orderBy.length)return!1;for(let e=0;e<n.orderBy.length;e++)if(!Hu(n.orderBy[e],t.orderBy[e]))return!1;if(n.filters.length!==t.filters.length)return!1;for(let e=0;e<n.filters.length;e++)if(!To(n.filters[e],t.filters[e]))return!1;return n.collectionGroup===t.collectionGroup&&!!n.path.isEqual(t.path)&&!!Ss(n.startAt,t.startAt)&&Ss(n.endAt,t.endAt)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $n{constructor(t,e=null,i=[],s=[],o=null,u="F",c=null,f=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=i,this.filters=s,this.limit=o,this.limitType=u,this.startAt=c,this.endAt=f,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function tc(n,t,e,i,s,o,u,c){return new $n(n,t,e,i,s,o,u,c)}function ec(n){return new $n(n)}function Cs(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function nc(n){return n.collectionGroup!==null}function Le(n){const t=$(n);if(t.ce===null){t.ce=[];const e=new Set;for(const o of t.explicitOrderBy)t.ce.push(o),e.add(o.field.canonicalString());const i=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(u){let c=new dt(it.comparator);return u.filters.forEach(f=>{f.getFlattenedFilters().forEach(g=>{g.isInequality()&&(c=c.add(g.field))})}),c})(t).forEach(o=>{e.has(o.canonicalString())||o.isKeyField()||t.ce.push(new xn(o,i))}),e.has(it.keyField().canonicalString())||t.ce.push(new xn(it.keyField(),i))}return t.ce}function Xt(n){const t=$(n);return t.le||(t.le=rc(t,Le(n))),t.le}function rc(n,t){if(n.limitType==="F")return bs(n.path,n.collectionGroup,t,n.filters,n.limit,n.startAt,n.endAt);{t=t.map(s=>{const o=s.dir==="desc"?"asc":"desc";return new xn(s.field,o)});const e=n.endAt?new Mn(n.endAt.position,n.endAt.inclusive):null,i=n.startAt?new Mn(n.startAt.position,n.startAt.inclusive):null;return bs(n.path,n.collectionGroup,t,n.filters,n.limit,e,i)}}function Lr(n,t,e){return new $n(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),t,e,n.startAt,n.endAt)}function wo(n,t){return Yr(Xt(n),Xt(t))&&n.limitType===t.limitType}function Ro(n){return`${Xr(Xt(n))}|lt:${n.limitType}`}function ke(n){return`Query(target=${function(e){let i=e.path.canonicalString();return e.collectionGroup!==null&&(i+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(i+=`, filters: [${e.filters.map(s=>Io(s)).join(", ")}]`),Kr(e.limit)||(i+=", limit: "+e.limit),e.orderBy.length>0&&(i+=`, orderBy: [${e.orderBy.map(s=>function(u){return`${u.field.canonicalString()} (${u.dir})`}(s)).join(", ")}]`),e.startAt&&(i+=", startAt: ",i+=e.startAt.inclusive?"b:":"a:",i+=e.startAt.position.map(s=>he(s)).join(",")),e.endAt&&(i+=", endAt: ",i+=e.endAt.inclusive?"a:":"b:",i+=e.endAt.position.map(s=>he(s)).join(",")),`Target(${i})`}(Xt(n))}; limitType=${n.limitType})`}function Jr(n,t){return t.isFoundDocument()&&function(i,s){const o=s.key.path;return i.collectionGroup!==null?s.key.hasCollectionId(i.collectionGroup)&&i.path.isPrefixOf(o):k.isDocumentKey(i.path)?i.path.isEqual(o):i.path.isImmediateParentOf(o)}(n,t)&&function(i,s){for(const o of Le(i))if(!o.field.isKeyField()&&s.data.field(o.field)===null)return!1;return!0}(n,t)&&function(i,s){for(const o of i.filters)if(!o.matches(s))return!1;return!0}(n,t)&&function(i,s){return!(i.startAt&&!function(u,c,f){const g=Ps(u,c,f);return u.inclusive?g<=0:g<0}(i.startAt,Le(i),s)||i.endAt&&!function(u,c,f){const g=Ps(u,c,f);return u.inclusive?g>=0:g>0}(i.endAt,Le(i),s))}(n,t)}function ic(n){return(t,e)=>{let i=!1;for(const s of Le(n)){const o=sc(s,t,e);if(o!==0)return o;i=i||s.field.isKeyField()}return 0}}function sc(n,t,e){const i=n.field.isKeyField()?k.comparator(t.key,e.key):function(o,u,c){const f=u.data.field(o),g=c.data.field(o);return f!==null&&g!==null?ce(f,g):x()}(n.field,t,e);switch(n.dir){case"asc":return i;case"desc":return-1*i;default:return x()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class me{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),i=this.inner[e];if(i!==void 0){for(const[s,o]of i)if(this.equalsFn(s,t))return o}}has(t){return this.get(t)!==void 0}set(t,e){const i=this.mapKeyFn(t),s=this.inner[i];if(s===void 0)return this.inner[i]=[[t,e]],void this.innerSize++;for(let o=0;o<s.length;o++)if(this.equalsFn(s[o][0],t))return void(s[o]=[t,e]);s.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),i=this.inner[e];if(i===void 0)return!1;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],t))return i.length===1?delete this.inner[e]:i.splice(s,1),this.innerSize--,!0;return!1}forEach(t){Xe(this.inner,(e,i)=>{for(const[s,o]of i)t(s,o)})}isEmpty(){return mo(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oc=new _t(k.comparator);function Ln(){return oc}const Po=new _t(k.comparator);function An(...n){let t=Po;for(const e of n)t=t.insert(e.key,e);return t}function So(n){let t=Po;return n.forEach((e,i)=>t=t.insert(e,i.overlayedDocument)),t}function Qt(){return Fe()}function bo(){return Fe()}function Fe(){return new me(n=>n.toString(),(n,t)=>n.isEqual(t))}const ac=new _t(k.comparator),lc=new dt(k.comparator);function ft(...n){let t=lc;for(const e of n)t=t.add(e);return t}const uc=new dt(j);function cc(){return uc}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zr(n,t){if(n.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Nn(t)?"-0":t}}function Co(n){return{integerValue:""+n}}function hc(n,t){return Fu(t)?Co(t):Zr(n,t)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qn{constructor(){this._=void 0}}function fc(n,t,e){return n instanceof Ge?function(s,o){const u={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return o&&Qr(o)&&(o=go(o)),o&&(u.fields.__previous_value__=o),{mapValue:u}}(e,t):n instanceof Ke?Do(n,t):n instanceof Qe?No(n,t):function(s,o){const u=Vo(s,o),c=Vs(u)+Vs(s.Pe);return Mr(u)&&Mr(s.Pe)?Co(c):Zr(s.serializer,c)}(n,t)}function dc(n,t,e){return n instanceof Ke?Do(n,t):n instanceof Qe?No(n,t):e}function Vo(n,t){return n instanceof Fn?function(i){return Mr(i)||function(o){return!!o&&"doubleValue"in o}(i)}(t)?t:{integerValue:0}:null}class Ge extends qn{}class Ke extends qn{constructor(t){super(),this.elements=t}}function Do(n,t){const e=Oo(t);for(const i of n.elements)e.some(s=>wt(s,i))||e.push(i);return{arrayValue:{values:e}}}class Qe extends qn{constructor(t){super(),this.elements=t}}function No(n,t){let e=Oo(t);for(const i of n.elements)e=e.filter(s=>!wt(s,i));return{arrayValue:{values:e}}}class Fn extends qn{constructor(t,e){super(),this.serializer=t,this.Pe=e}}function Vs(n){return rt(n.integerValue||n.doubleValue)}function Oo(n){return Wr(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pc{constructor(t,e){this.field=t,this.transform=e}}function mc(n,t){return n.field.isEqual(t.field)&&function(i,s){return i instanceof Ke&&s instanceof Ke||i instanceof Qe&&s instanceof Qe?le(i.elements,s.elements,wt):i instanceof Fn&&s instanceof Fn?wt(i.Pe,s.Pe):i instanceof Ge&&s instanceof Ge}(n.transform,t.transform)}class gc{constructor(t,e){this.version=t,this.transformResults=e}}class bt{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new bt}static exists(t){return new bt(void 0,t)}static updateTime(t){return new bt(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function Sn(n,t){return n.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(n.updateTime):n.exists===void 0||n.exists===t.isFoundDocument()}class Hn{}function ko(n,t){if(!n.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return n.isNoDocument()?new xo(n.key,bt.none()):new Ye(n.key,n.data,bt.none());{const e=n.data,i=Tt.empty();let s=new dt(it.comparator);for(let o of t.fields)if(!s.has(o)){let u=e.field(o);u===null&&o.length>1&&(o=o.popLast(),u=e.field(o)),u===null?i.delete(o):i.set(o,u),s=s.add(o)}return new te(n.key,i,new It(s.toArray()),bt.none())}}function _c(n,t,e){n instanceof Ye?function(s,o,u){const c=s.value.clone(),f=Ns(s.fieldTransforms,o,u.transformResults);c.setAll(f),o.convertToFoundDocument(u.version,c).setHasCommittedMutations()}(n,t,e):n instanceof te?function(s,o,u){if(!Sn(s.precondition,o))return void o.convertToUnknownDocument(u.version);const c=Ns(s.fieldTransforms,o,u.transformResults),f=o.data;f.setAll(Mo(s)),f.setAll(c),o.convertToFoundDocument(u.version,f).setHasCommittedMutations()}(n,t,e):function(s,o,u){o.convertToNoDocument(u.version).setHasCommittedMutations()}(0,t,e)}function Be(n,t,e,i){return n instanceof Ye?function(o,u,c,f){if(!Sn(o.precondition,u))return c;const g=o.value.clone(),I=Os(o.fieldTransforms,f,u);return g.setAll(I),u.convertToFoundDocument(u.version,g).setHasLocalMutations(),null}(n,t,e,i):n instanceof te?function(o,u,c,f){if(!Sn(o.precondition,u))return c;const g=Os(o.fieldTransforms,f,u),I=u.data;return I.setAll(Mo(o)),I.setAll(g),u.convertToFoundDocument(u.version,I).setHasLocalMutations(),c===null?null:c.unionWith(o.fieldMask.fields).unionWith(o.fieldTransforms.map(w=>w.field))}(n,t,e,i):function(o,u,c){return Sn(o.precondition,u)?(u.convertToNoDocument(u.version).setHasLocalMutations(),null):c}(n,t,e)}function yc(n,t){let e=null;for(const i of n.fieldTransforms){const s=t.data.field(i.field),o=Vo(i.transform,s||null);o!=null&&(e===null&&(e=Tt.empty()),e.set(i.field,o))}return e||null}function Ds(n,t){return n.type===t.type&&!!n.key.isEqual(t.key)&&!!n.precondition.isEqual(t.precondition)&&!!function(i,s){return i===void 0&&s===void 0||!(!i||!s)&&le(i,s,(o,u)=>mc(o,u))}(n.fieldTransforms,t.fieldTransforms)&&(n.type===0?n.value.isEqual(t.value):n.type!==1||n.data.isEqual(t.data)&&n.fieldMask.isEqual(t.fieldMask))}class Ye extends Hn{constructor(t,e,i,s=[]){super(),this.key=t,this.value=e,this.precondition=i,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class te extends Hn{constructor(t,e,i,s,o=[]){super(),this.key=t,this.data=e,this.fieldMask=i,this.precondition=s,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}}function Mo(n){const t=new Map;return n.fieldMask.fields.forEach(e=>{if(!e.isEmpty()){const i=n.data.field(e);t.set(e,i)}}),t}function Ns(n,t,e){const i=new Map;X(n.length===e.length);for(let s=0;s<e.length;s++){const o=n[s],u=o.transform,c=t.data.field(o.field);i.set(o.field,dc(u,c,e[s]))}return i}function Os(n,t,e){const i=new Map;for(const s of n){const o=s.transform,u=e.data.field(s.field);i.set(s.field,fc(o,u,t))}return i}class xo extends Hn{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Ec extends Hn{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vc{constructor(t,e,i,s){this.batchId=t,this.localWriteTime=e,this.baseMutations=i,this.mutations=s}applyToRemoteDocument(t,e){const i=e.mutationResults;for(let s=0;s<this.mutations.length;s++){const o=this.mutations[s];o.key.isEqual(t.key)&&_c(o,t,i[s])}}applyToLocalView(t,e){for(const i of this.baseMutations)i.key.isEqual(t.key)&&(e=Be(i,t,e,this.localWriteTime));for(const i of this.mutations)i.key.isEqual(t.key)&&(e=Be(i,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const i=bo();return this.mutations.forEach(s=>{const o=t.get(s.key),u=o.overlayedDocument;let c=this.applyToLocalView(u,o.mutatedFields);c=e.has(s.key)?null:c;const f=ko(u,c);f!==null&&i.set(s.key,f),u.isValidDocument()||u.convertToNoDocument(z.min())}),i}keys(){return this.mutations.reduce((t,e)=>t.add(e.key),ft())}isEqual(t){return this.batchId===t.batchId&&le(this.mutations,t.mutations,(e,i)=>Ds(e,i))&&le(this.baseMutations,t.baseMutations,(e,i)=>Ds(e,i))}}class ti{constructor(t,e,i,s){this.batch=t,this.commitVersion=e,this.mutationResults=i,this.docVersions=s}static from(t,e,i){X(t.mutations.length===i.length);let s=function(){return ac}();const o=t.mutations;for(let u=0;u<o.length;u++)s=s.insert(o[u].key,i[u].version);return new ti(t,e,i,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tc{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Y,L;function Ic(n){switch(n){default:return x();case P.CANCELLED:case P.UNKNOWN:case P.DEADLINE_EXCEEDED:case P.RESOURCE_EXHAUSTED:case P.INTERNAL:case P.UNAVAILABLE:case P.UNAUTHENTICATED:return!1;case P.INVALID_ARGUMENT:case P.NOT_FOUND:case P.ALREADY_EXISTS:case P.PERMISSION_DENIED:case P.FAILED_PRECONDITION:case P.ABORTED:case P.OUT_OF_RANGE:case P.UNIMPLEMENTED:case P.DATA_LOSS:return!0}}function Ac(n){if(n===void 0)return Jt("GRPC error has no .code"),P.UNKNOWN;switch(n){case Y.OK:return P.OK;case Y.CANCELLED:return P.CANCELLED;case Y.UNKNOWN:return P.UNKNOWN;case Y.DEADLINE_EXCEEDED:return P.DEADLINE_EXCEEDED;case Y.RESOURCE_EXHAUSTED:return P.RESOURCE_EXHAUSTED;case Y.INTERNAL:return P.INTERNAL;case Y.UNAVAILABLE:return P.UNAVAILABLE;case Y.UNAUTHENTICATED:return P.UNAUTHENTICATED;case Y.INVALID_ARGUMENT:return P.INVALID_ARGUMENT;case Y.NOT_FOUND:return P.NOT_FOUND;case Y.ALREADY_EXISTS:return P.ALREADY_EXISTS;case Y.PERMISSION_DENIED:return P.PERMISSION_DENIED;case Y.FAILED_PRECONDITION:return P.FAILED_PRECONDITION;case Y.ABORTED:return P.ABORTED;case Y.OUT_OF_RANGE:return P.OUT_OF_RANGE;case Y.UNIMPLEMENTED:return P.UNIMPLEMENTED;case Y.DATA_LOSS:return P.DATA_LOSS;default:return x()}}(L=Y||(Y={}))[L.OK=0]="OK",L[L.CANCELLED=1]="CANCELLED",L[L.UNKNOWN=2]="UNKNOWN",L[L.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",L[L.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",L[L.NOT_FOUND=5]="NOT_FOUND",L[L.ALREADY_EXISTS=6]="ALREADY_EXISTS",L[L.PERMISSION_DENIED=7]="PERMISSION_DENIED",L[L.UNAUTHENTICATED=16]="UNAUTHENTICATED",L[L.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",L[L.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",L[L.ABORTED=10]="ABORTED",L[L.OUT_OF_RANGE=11]="OUT_OF_RANGE",L[L.UNIMPLEMENTED=12]="UNIMPLEMENTED",L[L.INTERNAL=13]="INTERNAL",L[L.UNAVAILABLE=14]="UNAVAILABLE",L[L.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new io([4294967295,4294967295],0);class wc{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function Fr(n,t){return n.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function Rc(n,t){return n.useProto3Json?t.toBase64():t.toUint8Array()}function Pc(n,t){return Fr(n,t.toTimestamp())}function ae(n){return X(!!n),z.fromTimestamp(function(e){const i=Zt(e);return new tt(i.seconds,i.nanos)}(n))}function Lo(n,t){return Br(n,t).canonicalString()}function Br(n,t){const e=function(s){return new Q(["projects",s.projectId,"databases",s.database])}(n).child("documents");return t===void 0?e:e.child(t)}function Sc(n){const t=Q.fromString(n);return X(Mc(t)),t}function Ur(n,t){return Lo(n.databaseId,t.path)}function bc(n){const t=Sc(n);return t.length===4?Q.emptyPath():Vc(t)}function Cc(n){return new Q(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Vc(n){return X(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function ks(n,t,e){return{name:Ur(n,t),fields:e.value.mapValue.fields}}function Dc(n,t){let e;if(t instanceof Ye)e={update:ks(n,t.key,t.value)};else if(t instanceof xo)e={delete:Ur(n,t.key)};else if(t instanceof te)e={update:ks(n,t.key,t.data),updateMask:kc(t.fieldMask)};else{if(!(t instanceof Ec))return x();e={verify:Ur(n,t.key)}}return t.fieldTransforms.length>0&&(e.updateTransforms=t.fieldTransforms.map(i=>function(o,u){const c=u.transform;if(c instanceof Ge)return{fieldPath:u.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof Ke)return{fieldPath:u.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof Qe)return{fieldPath:u.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof Fn)return{fieldPath:u.field.canonicalString(),increment:c.Pe};throw x()}(0,i))),t.precondition.isNone||(e.currentDocument=function(s,o){return o.updateTime!==void 0?{updateTime:Pc(s,o.updateTime)}:o.exists!==void 0?{exists:o.exists}:x()}(n,t.precondition)),e}function Nc(n,t){return n&&n.length>0?(X(t!==void 0),n.map(e=>function(s,o){let u=s.updateTime?ae(s.updateTime):ae(o);return u.isEqual(z.min())&&(u=ae(o)),new gc(u,s.transformResults||[])}(e,t))):[]}function Oc(n){let t=bc(n.parent);const e=n.structuredQuery,i=e.from?e.from.length:0;let s=null;if(i>0){X(i===1);const I=e.from[0];I.allDescendants?s=I.collectionId:t=t.child(I.collectionId)}let o=[];e.where&&(o=function(w){const S=Fo(w);return S instanceof Bt&&vo(S)?S.getFilters():[S]}(e.where));let u=[];e.orderBy&&(u=function(w){return w.map(S=>function(V){return new xn(se(V.field),function(N){switch(N){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(V.direction))}(S))}(e.orderBy));let c=null;e.limit&&(c=function(w){let S;return S=typeof w=="object"?w.value:w,Kr(S)?null:S}(e.limit));let f=null;e.startAt&&(f=function(w){const S=!!w.before,C=w.values||[];return new Mn(C,S)}(e.startAt));let g=null;return e.endAt&&(g=function(w){const S=!w.before,C=w.values||[];return new Mn(C,S)}(e.endAt)),tc(t,s,u,o,c,"F",f,g)}function Fo(n){return n.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const i=se(e.unaryFilter.field);return Z.create(i,"==",{doubleValue:NaN});case"IS_NULL":const s=se(e.unaryFilter.field);return Z.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const o=se(e.unaryFilter.field);return Z.create(o,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const u=se(e.unaryFilter.field);return Z.create(u,"!=",{nullValue:"NULL_VALUE"});default:return x()}}(n):n.fieldFilter!==void 0?function(e){return Z.create(se(e.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return x()}}(e.fieldFilter.op),e.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(e){return Bt.create(e.compositeFilter.filters.map(i=>Fo(i)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return x()}}(e.compositeFilter.op))}(n):x()}function se(n){return it.fromServerFormat(n.fieldPath)}function kc(n){const t=[];return n.fields.forEach(e=>t.push(e.canonicalString())),{fieldPaths:t}}function Mc(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xc{constructor(t){this.ct=t}}function Lc(n){const t=Oc({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Lr(t,t.limit,"L"):t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fc{constructor(){this.un=new Bc}addToCollectionParentIndex(t,e){return this.un.add(e),R.resolve()}getCollectionParents(t,e){return R.resolve(this.un.getEntries(e))}addFieldIndex(t,e){return R.resolve()}deleteFieldIndex(t,e){return R.resolve()}deleteAllFieldIndexes(t){return R.resolve()}createTargetIndexes(t,e){return R.resolve()}getDocumentsMatchingTarget(t,e){return R.resolve(null)}getIndexType(t,e){return R.resolve(0)}getFieldIndexes(t,e){return R.resolve([])}getNextCollectionGroupToUpdate(t){return R.resolve(null)}getMinOffset(t,e){return R.resolve(Ft.min())}getMinOffsetFromCollectionGroup(t,e){return R.resolve(Ft.min())}updateCollectionGroup(t,e,i){return R.resolve()}updateIndexEntries(t,e){return R.resolve()}}class Bc{constructor(){this.index={}}add(t){const e=t.lastSegment(),i=t.popLast(),s=this.index[e]||new dt(Q.comparator),o=!s.has(i);return this.index[e]=s.add(i),o}has(t){const e=t.lastSegment(),i=t.popLast(),s=this.index[e];return s&&s.has(i)}getEntries(t){return(this.index[t]||new dt(Q.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fe{constructor(t){this.Ln=t}next(){return this.Ln+=2,this.Ln}static Bn(){return new fe(0)}static kn(){return new fe(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uc{constructor(){this.changes=new me(t=>t.toString(),(t,e)=>t.isEqual(e)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,vt.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const i=this.changes.get(e);return i!==void 0?R.resolve(i):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jc{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $c{constructor(t,e,i,s){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=i,this.indexManager=s}getDocument(t,e){let i=null;return this.documentOverlayCache.getOverlay(t,e).next(s=>(i=s,this.remoteDocumentCache.getEntry(t,e))).next(s=>(i!==null&&Be(i.mutation,s,It.empty(),tt.now()),s))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next(i=>this.getLocalViewOfDocuments(t,i,ft()).next(()=>i))}getLocalViewOfDocuments(t,e,i=ft()){const s=Qt();return this.populateOverlays(t,s,e).next(()=>this.computeViews(t,e,s,i).next(o=>{let u=An();return o.forEach((c,f)=>{u=u.insert(c,f.overlayedDocument)}),u}))}getOverlayedDocuments(t,e){const i=Qt();return this.populateOverlays(t,i,e).next(()=>this.computeViews(t,e,i,ft()))}populateOverlays(t,e,i){const s=[];return i.forEach(o=>{e.has(o)||s.push(o)}),this.documentOverlayCache.getOverlays(t,s).next(o=>{o.forEach((u,c)=>{e.set(u,c)})})}computeViews(t,e,i,s){let o=Ln();const u=Fe(),c=function(){return Fe()}();return e.forEach((f,g)=>{const I=i.get(g.key);s.has(g.key)&&(I===void 0||I.mutation instanceof te)?o=o.insert(g.key,g):I!==void 0?(u.set(g.key,I.mutation.getFieldMask()),Be(I.mutation,g,I.mutation.getFieldMask(),tt.now())):u.set(g.key,It.empty())}),this.recalculateAndSaveOverlays(t,o).next(f=>(f.forEach((g,I)=>u.set(g,I)),e.forEach((g,I)=>{var w;return c.set(g,new jc(I,(w=u.get(g))!==null&&w!==void 0?w:null))}),c))}recalculateAndSaveOverlays(t,e){const i=Fe();let s=new _t((u,c)=>u-c),o=ft();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next(u=>{for(const c of u)c.keys().forEach(f=>{const g=e.get(f);if(g===null)return;let I=i.get(f)||It.empty();I=c.applyToLocalView(g,I),i.set(f,I);const w=(s.get(c.batchId)||ft()).add(f);s=s.insert(c.batchId,w)})}).next(()=>{const u=[],c=s.getReverseIterator();for(;c.hasNext();){const f=c.getNext(),g=f.key,I=f.value,w=bo();I.forEach(S=>{if(!o.has(S)){const C=ko(e.get(S),i.get(S));C!==null&&w.set(S,C),o=o.add(S)}}),u.push(this.documentOverlayCache.saveOverlays(t,g,w))}return R.waitFor(u)}).next(()=>i)}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next(i=>this.recalculateAndSaveOverlays(t,i))}getDocumentsMatchingQuery(t,e,i,s){return function(u){return k.isDocumentKey(u.path)&&u.collectionGroup===null&&u.filters.length===0}(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):nc(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,i,s):this.getDocumentsMatchingCollectionQuery(t,e,i,s)}getNextDocuments(t,e,i,s){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,i,s).next(o=>{const u=s-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,i.largestBatchId,s-o.size):R.resolve(Qt());let c=-1,f=o;return u.next(g=>R.forEach(g,(I,w)=>(c<w.largestBatchId&&(c=w.largestBatchId),o.get(I)?R.resolve():this.remoteDocumentCache.getEntry(t,I).next(S=>{f=f.insert(I,S)}))).next(()=>this.populateOverlays(t,g,o)).next(()=>this.computeViews(t,f,g,ft())).next(I=>({batchId:c,changes:So(I)})))})}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new k(e)).next(i=>{let s=An();return i.isFoundDocument()&&(s=s.insert(i.key,i)),s})}getDocumentsMatchingCollectionGroupQuery(t,e,i,s){const o=e.collectionGroup;let u=An();return this.indexManager.getCollectionParents(t,o).next(c=>R.forEach(c,f=>{const g=function(w,S){return new $n(S,null,w.explicitOrderBy.slice(),w.filters.slice(),w.limit,w.limitType,w.startAt,w.endAt)}(e,f.child(o));return this.getDocumentsMatchingCollectionQuery(t,g,i,s).next(I=>{I.forEach((w,S)=>{u=u.insert(w,S)})})}).next(()=>u))}getDocumentsMatchingCollectionQuery(t,e,i,s){let o;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,i.largestBatchId).next(u=>(o=u,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,i,o,s))).next(u=>{o.forEach((f,g)=>{const I=g.getKey();u.get(I)===null&&(u=u.insert(I,vt.newInvalidDocument(I)))});let c=An();return u.forEach((f,g)=>{const I=o.get(f);I!==void 0&&Be(I.mutation,g,It.empty(),tt.now()),Jr(e,g)&&(c=c.insert(f,g))}),c})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qc{constructor(t){this.serializer=t,this.hr=new Map,this.Pr=new Map}getBundleMetadata(t,e){return R.resolve(this.hr.get(e))}saveBundleMetadata(t,e){return this.hr.set(e.id,function(s){return{id:s.id,version:s.version,createTime:ae(s.createTime)}}(e)),R.resolve()}getNamedQuery(t,e){return R.resolve(this.Pr.get(e))}saveNamedQuery(t,e){return this.Pr.set(e.name,function(s){return{name:s.name,query:Lc(s.bundledQuery),readTime:ae(s.readTime)}}(e)),R.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hc{constructor(){this.overlays=new _t(k.comparator),this.Ir=new Map}getOverlay(t,e){return R.resolve(this.overlays.get(e))}getOverlays(t,e){const i=Qt();return R.forEach(e,s=>this.getOverlay(t,s).next(o=>{o!==null&&i.set(s,o)})).next(()=>i)}saveOverlays(t,e,i){return i.forEach((s,o)=>{this.ht(t,e,o)}),R.resolve()}removeOverlaysForBatchId(t,e,i){const s=this.Ir.get(i);return s!==void 0&&(s.forEach(o=>this.overlays=this.overlays.remove(o)),this.Ir.delete(i)),R.resolve()}getOverlaysForCollection(t,e,i){const s=Qt(),o=e.length+1,u=new k(e.child("")),c=this.overlays.getIteratorFrom(u);for(;c.hasNext();){const f=c.getNext().value,g=f.getKey();if(!e.isPrefixOf(g.path))break;g.path.length===o&&f.largestBatchId>i&&s.set(f.getKey(),f)}return R.resolve(s)}getOverlaysForCollectionGroup(t,e,i,s){let o=new _t((g,I)=>g-I);const u=this.overlays.getIterator();for(;u.hasNext();){const g=u.getNext().value;if(g.getKey().getCollectionGroup()===e&&g.largestBatchId>i){let I=o.get(g.largestBatchId);I===null&&(I=Qt(),o=o.insert(g.largestBatchId,I)),I.set(g.getKey(),g)}}const c=Qt(),f=o.getIterator();for(;f.hasNext()&&(f.getNext().value.forEach((g,I)=>c.set(g,I)),!(c.size()>=s)););return R.resolve(c)}ht(t,e,i){const s=this.overlays.get(i.key);if(s!==null){const u=this.Ir.get(s.largestBatchId).delete(i.key);this.Ir.set(s.largestBatchId,u)}this.overlays=this.overlays.insert(i.key,new Tc(e,i));let o=this.Ir.get(e);o===void 0&&(o=ft(),this.Ir.set(e,o)),this.Ir.set(e,o.add(i.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zc{constructor(){this.sessionToken=At.EMPTY_BYTE_STRING}getSessionToken(t){return R.resolve(this.sessionToken)}setSessionToken(t,e){return this.sessionToken=e,R.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ei{constructor(){this.Tr=new dt(J.Er),this.dr=new dt(J.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(t,e){const i=new J(t,e);this.Tr=this.Tr.add(i),this.dr=this.dr.add(i)}Rr(t,e){t.forEach(i=>this.addReference(i,e))}removeReference(t,e){this.Vr(new J(t,e))}mr(t,e){t.forEach(i=>this.removeReference(i,e))}gr(t){const e=new k(new Q([])),i=new J(e,t),s=new J(e,t+1),o=[];return this.dr.forEachInRange([i,s],u=>{this.Vr(u),o.push(u.key)}),o}pr(){this.Tr.forEach(t=>this.Vr(t))}Vr(t){this.Tr=this.Tr.delete(t),this.dr=this.dr.delete(t)}yr(t){const e=new k(new Q([])),i=new J(e,t),s=new J(e,t+1);let o=ft();return this.dr.forEachInRange([i,s],u=>{o=o.add(u.key)}),o}containsKey(t){const e=new J(t,0),i=this.Tr.firstAfterOrEqual(e);return i!==null&&t.isEqual(i.key)}}class J{constructor(t,e){this.key=t,this.wr=e}static Er(t,e){return k.comparator(t.key,e.key)||j(t.wr,e.wr)}static Ar(t,e){return j(t.wr,e.wr)||k.comparator(t.key,e.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gc{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.Sr=1,this.br=new dt(J.Er)}checkEmpty(t){return R.resolve(this.mutationQueue.length===0)}addMutationBatch(t,e,i,s){const o=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const u=new vc(o,e,i,s);this.mutationQueue.push(u);for(const c of s)this.br=this.br.add(new J(c.key,o)),this.indexManager.addToCollectionParentIndex(t,c.key.path.popLast());return R.resolve(u)}lookupMutationBatch(t,e){return R.resolve(this.Dr(e))}getNextMutationBatchAfterBatchId(t,e){const i=e+1,s=this.vr(i),o=s<0?0:s;return R.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return R.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(t){return R.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const i=new J(e,0),s=new J(e,Number.POSITIVE_INFINITY),o=[];return this.br.forEachInRange([i,s],u=>{const c=this.Dr(u.wr);o.push(c)}),R.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(t,e){let i=new dt(j);return e.forEach(s=>{const o=new J(s,0),u=new J(s,Number.POSITIVE_INFINITY);this.br.forEachInRange([o,u],c=>{i=i.add(c.wr)})}),R.resolve(this.Cr(i))}getAllMutationBatchesAffectingQuery(t,e){const i=e.path,s=i.length+1;let o=i;k.isDocumentKey(o)||(o=o.child(""));const u=new J(new k(o),0);let c=new dt(j);return this.br.forEachWhile(f=>{const g=f.key.path;return!!i.isPrefixOf(g)&&(g.length===s&&(c=c.add(f.wr)),!0)},u),R.resolve(this.Cr(c))}Cr(t){const e=[];return t.forEach(i=>{const s=this.Dr(i);s!==null&&e.push(s)}),e}removeMutationBatch(t,e){X(this.Fr(e.batchId,"removed")===0),this.mutationQueue.shift();let i=this.br;return R.forEach(e.mutations,s=>{const o=new J(s.key,e.batchId);return i=i.delete(o),this.referenceDelegate.markPotentiallyOrphaned(t,s.key)}).next(()=>{this.br=i})}On(t){}containsKey(t,e){const i=new J(e,0),s=this.br.firstAfterOrEqual(i);return R.resolve(e.isEqual(s&&s.key))}performConsistencyCheck(t){return this.mutationQueue.length,R.resolve()}Fr(t,e){return this.vr(t)}vr(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Dr(t){const e=this.vr(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kc{constructor(t){this.Mr=t,this.docs=function(){return new _t(k.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const i=e.key,s=this.docs.get(i),o=s?s.size:0,u=this.Mr(e);return this.docs=this.docs.insert(i,{document:e.mutableCopy(),size:u}),this.size+=u-o,this.indexManager.addToCollectionParentIndex(t,i.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const i=this.docs.get(e);return R.resolve(i?i.document.mutableCopy():vt.newInvalidDocument(e))}getEntries(t,e){let i=Ln();return e.forEach(s=>{const o=this.docs.get(s);i=i.insert(s,o?o.document.mutableCopy():vt.newInvalidDocument(s))}),R.resolve(i)}getDocumentsMatchingQuery(t,e,i,s){let o=Ln();const u=e.path,c=new k(u.child("")),f=this.docs.getIteratorFrom(c);for(;f.hasNext();){const{key:g,value:{document:I}}=f.getNext();if(!u.isPrefixOf(g.path))break;g.path.length>u.length+1||ku(Ou(I),i)<=0||(s.has(I.key)||Jr(e,I))&&(o=o.insert(I.key,I.mutableCopy()))}return R.resolve(o)}getAllFromCollectionGroup(t,e,i,s){x()}Or(t,e){return R.forEach(this.docs,i=>e(i))}newChangeBuffer(t){return new Qc(this)}getSize(t){return R.resolve(this.size)}}class Qc extends Uc{constructor(t){super(),this.cr=t}applyChanges(t){const e=[];return this.changes.forEach((i,s)=>{s.isValidDocument()?e.push(this.cr.addEntry(t,s)):this.cr.removeEntry(i)}),R.waitFor(e)}getFromCache(t,e){return this.cr.getEntry(t,e)}getAllFromCache(t,e){return this.cr.getEntries(t,e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wc{constructor(t){this.persistence=t,this.Nr=new me(e=>Xr(e),Yr),this.lastRemoteSnapshotVersion=z.min(),this.highestTargetId=0,this.Lr=0,this.Br=new ei,this.targetCount=0,this.kr=fe.Bn()}forEachTarget(t,e){return this.Nr.forEach((i,s)=>e(s)),R.resolve()}getLastRemoteSnapshotVersion(t){return R.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return R.resolve(this.Lr)}allocateTargetId(t){return this.highestTargetId=this.kr.next(),R.resolve(this.highestTargetId)}setTargetsMetadata(t,e,i){return i&&(this.lastRemoteSnapshotVersion=i),e>this.Lr&&(this.Lr=e),R.resolve()}Kn(t){this.Nr.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.kr=new fe(e),this.highestTargetId=e),t.sequenceNumber>this.Lr&&(this.Lr=t.sequenceNumber)}addTargetData(t,e){return this.Kn(e),this.targetCount+=1,R.resolve()}updateTargetData(t,e){return this.Kn(e),R.resolve()}removeTargetData(t,e){return this.Nr.delete(e.target),this.Br.gr(e.targetId),this.targetCount-=1,R.resolve()}removeTargets(t,e,i){let s=0;const o=[];return this.Nr.forEach((u,c)=>{c.sequenceNumber<=e&&i.get(c.targetId)===null&&(this.Nr.delete(u),o.push(this.removeMatchingKeysForTargetId(t,c.targetId)),s++)}),R.waitFor(o).next(()=>s)}getTargetCount(t){return R.resolve(this.targetCount)}getTargetData(t,e){const i=this.Nr.get(e)||null;return R.resolve(i)}addMatchingKeys(t,e,i){return this.Br.Rr(e,i),R.resolve()}removeMatchingKeys(t,e,i){this.Br.mr(e,i);const s=this.persistence.referenceDelegate,o=[];return s&&e.forEach(u=>{o.push(s.markPotentiallyOrphaned(t,u))}),R.waitFor(o)}removeMatchingKeysForTargetId(t,e){return this.Br.gr(e),R.resolve()}getMatchingKeysForTargetId(t,e){const i=this.Br.yr(e);return R.resolve(i)}containsKey(t,e){return R.resolve(this.Br.containsKey(e))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xc{constructor(t,e){this.qr={},this.overlays={},this.Qr=new po(0),this.Kr=!1,this.Kr=!0,this.$r=new zc,this.referenceDelegate=t(this),this.Ur=new Wc(this),this.indexManager=new Fc,this.remoteDocumentCache=function(s){return new Kc(s)}(i=>this.referenceDelegate.Wr(i)),this.serializer=new xc(e),this.Gr=new qc(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new Hc,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let i=this.qr[t.toKey()];return i||(i=new Gc(e,this.referenceDelegate),this.qr[t.toKey()]=i),i}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(t,e,i){D("MemoryPersistence","Starting transaction:",t);const s=new Yc(this.Qr.next());return this.referenceDelegate.zr(),i(s).next(o=>this.referenceDelegate.jr(s).next(()=>o)).toPromise().then(o=>(s.raiseOnCommittedEvent(),o))}Hr(t,e){return R.or(Object.values(this.qr).map(i=>()=>i.containsKey(t,e)))}}class Yc extends xu{constructor(t){super(),this.currentSequenceNumber=t}}class ni{constructor(t){this.persistence=t,this.Jr=new ei,this.Yr=null}static Zr(t){return new ni(t)}get Xr(){if(this.Yr)return this.Yr;throw x()}addReference(t,e,i){return this.Jr.addReference(i,e),this.Xr.delete(i.toString()),R.resolve()}removeReference(t,e,i){return this.Jr.removeReference(i,e),this.Xr.add(i.toString()),R.resolve()}markPotentiallyOrphaned(t,e){return this.Xr.add(e.toString()),R.resolve()}removeTarget(t,e){this.Jr.gr(e.targetId).forEach(s=>this.Xr.add(s.toString()));const i=this.persistence.getTargetCache();return i.getMatchingKeysForTargetId(t,e.targetId).next(s=>{s.forEach(o=>this.Xr.add(o.toString()))}).next(()=>i.removeTargetData(t,e))}zr(){this.Yr=new Set}jr(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return R.forEach(this.Xr,i=>{const s=k.fromPath(i);return this.ei(t,s).next(o=>{o||e.removeEntry(s,z.min())})}).next(()=>(this.Yr=null,e.apply(t)))}updateLimboDocument(t,e){return this.ei(t,e).next(i=>{i?this.Xr.delete(e.toString()):this.Xr.add(e.toString())})}Wr(t){return 0}ei(t,e){return R.or([()=>R.resolve(this.Jr.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Hr(t,e)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ri{constructor(t,e,i,s){this.targetId=t,this.fromCache=e,this.$i=i,this.Ui=s}static Wi(t,e){let i=ft(),s=ft();for(const o of e.docChanges)switch(o.type){case 0:i=i.add(o.doc.key);break;case 1:s=s.add(o.doc.key)}return new ri(t,e.fromCache,i,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jc{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zc{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return sl()?8:Lu(rl())>0?6:4}()}initialize(t,e){this.Ji=t,this.indexManager=e,this.Gi=!0}getDocumentsMatchingQuery(t,e,i,s){const o={result:null};return this.Yi(t,e).next(u=>{o.result=u}).next(()=>{if(!o.result)return this.Zi(t,e,s,i).next(u=>{o.result=u})}).next(()=>{if(o.result)return;const u=new Jc;return this.Xi(t,e,u).next(c=>{if(o.result=c,this.zi)return this.es(t,e,u,c.size)})}).next(()=>o.result)}es(t,e,i,s){return i.documentReadCount<this.ji?(Oe()<=F.DEBUG&&D("QueryEngine","SDK will not create cache indexes for query:",ke(e),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),R.resolve()):(Oe()<=F.DEBUG&&D("QueryEngine","Query:",ke(e),"scans",i.documentReadCount,"local documents and returns",s,"documents as results."),i.documentReadCount>this.Hi*s?(Oe()<=F.DEBUG&&D("QueryEngine","The SDK decides to create cache indexes for query:",ke(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,Xt(e))):R.resolve())}Yi(t,e){if(Cs(e))return R.resolve(null);let i=Xt(e);return this.indexManager.getIndexType(t,i).next(s=>s===0?null:(e.limit!==null&&s===1&&(e=Lr(e,null,"F"),i=Xt(e)),this.indexManager.getDocumentsMatchingTarget(t,i).next(o=>{const u=ft(...o);return this.Ji.getDocuments(t,u).next(c=>this.indexManager.getMinOffset(t,i).next(f=>{const g=this.ts(e,c);return this.ns(e,g,u,f.readTime)?this.Yi(t,Lr(e,null,"F")):this.rs(t,g,e,f)}))})))}Zi(t,e,i,s){return Cs(e)||s.isEqual(z.min())?R.resolve(null):this.Ji.getDocuments(t,i).next(o=>{const u=this.ts(e,o);return this.ns(e,u,i,s)?R.resolve(null):(Oe()<=F.DEBUG&&D("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),ke(e)),this.rs(t,u,e,Nu(s,-1)).next(c=>c))})}ts(t,e){let i=new dt(ic(t));return e.forEach((s,o)=>{Jr(t,o)&&(i=i.add(o))}),i}ns(t,e,i,s){if(t.limit===null)return!1;if(i.size!==e.size)return!0;const o=t.limitType==="F"?e.last():e.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(s)>0)}Xi(t,e,i){return Oe()<=F.DEBUG&&D("QueryEngine","Using full collection scan to execute query:",ke(e)),this.Ji.getDocumentsMatchingQuery(t,e,Ft.min(),i)}rs(t,e,i,s){return this.Ji.getDocumentsMatchingQuery(t,i,s).next(o=>(e.forEach(u=>{o=o.insert(u.key,u)}),o))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class th{constructor(t,e,i,s){this.persistence=t,this.ss=e,this.serializer=s,this.os=new _t(j),this._s=new me(o=>Xr(o),Yr),this.us=new Map,this.cs=t.getRemoteDocumentCache(),this.Ur=t.getTargetCache(),this.Gr=t.getBundleCache(),this.ls(i)}ls(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new $c(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",e=>t.collect(e,this.os))}}function eh(n,t,e,i){return new th(n,t,e,i)}async function Bo(n,t){const e=$(n);return await e.persistence.runTransaction("Handle user change","readonly",i=>{let s;return e.mutationQueue.getAllMutationBatches(i).next(o=>(s=o,e.ls(t),e.mutationQueue.getAllMutationBatches(i))).next(o=>{const u=[],c=[];let f=ft();for(const g of s){u.push(g.batchId);for(const I of g.mutations)f=f.add(I.key)}for(const g of o){c.push(g.batchId);for(const I of g.mutations)f=f.add(I.key)}return e.localDocuments.getDocuments(i,f).next(g=>({hs:g,removedBatchIds:u,addedBatchIds:c}))})})}function nh(n,t){const e=$(n);return e.persistence.runTransaction("Acknowledge batch","readwrite-primary",i=>{const s=t.batch.keys(),o=e.cs.newChangeBuffer({trackRemovals:!0});return function(c,f,g,I){const w=g.batch,S=w.keys();let C=R.resolve();return S.forEach(V=>{C=C.next(()=>I.getEntry(f,V)).next(M=>{const N=g.docVersions.get(V);X(N!==null),M.version.compareTo(N)<0&&(w.applyToRemoteDocument(M,g),M.isValidDocument()&&(M.setReadTime(g.commitVersion),I.addEntry(M)))})}),C.next(()=>c.mutationQueue.removeMutationBatch(f,w))}(e,i,t,o).next(()=>o.apply(i)).next(()=>e.mutationQueue.performConsistencyCheck(i)).next(()=>e.documentOverlayCache.removeOverlaysForBatchId(i,s,t.batch.batchId)).next(()=>e.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(i,function(c){let f=ft();for(let g=0;g<c.mutationResults.length;++g)c.mutationResults[g].transformResults.length>0&&(f=f.add(c.batch.mutations[g].key));return f}(t))).next(()=>e.localDocuments.getDocuments(i,s))})}function rh(n){const t=$(n);return t.persistence.runTransaction("Get last remote snapshot version","readonly",e=>t.Ur.getLastRemoteSnapshotVersion(e))}function ih(n,t){const e=$(n);return e.persistence.runTransaction("Get next mutation batch","readonly",i=>(t===void 0&&(t=-1),e.mutationQueue.getNextMutationBatchAfterBatchId(i,t)))}class Ms{constructor(){this.activeTargetIds=cc()}fs(t){this.activeTargetIds=this.activeTargetIds.add(t)}gs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Vs(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class sh{constructor(){this.so=new Ms,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,i){}addLocalQueryTarget(t,e=!0){return e&&this.so.fs(t),this.oo[t]||"not-current"}updateQueryState(t,e,i){this.oo[t]=e}removeLocalQueryTarget(t){this.so.gs(t)}isLocalQueryTarget(t){return this.so.activeTargetIds.has(t)}clearQueryState(t){delete this.oo[t]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(t){return this.so.activeTargetIds.has(t)}start(){return this.so=new Ms,Promise.resolve()}handleUserChange(t,e,i){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oh{_o(t){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xs{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(t){this.ho.push(t)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){D("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.ho)t(0)}lo(){D("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.ho)t(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let wn=null;function wr(){return wn===null?wn=function(){return 268435456+Math.round(2147483648*Math.random())}():wn++,"0x"+wn.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ah={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lh{constructor(t){this.Io=t.Io,this.To=t.To}Eo(t){this.Ao=t}Ro(t){this.Vo=t}mo(t){this.fo=t}onMessage(t){this.po=t}close(){this.To()}send(t){this.Io(t)}yo(){this.Ao()}wo(){this.Vo()}So(t){this.fo(t)}bo(t){this.po(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ct="WebChannelConnection";class uh extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const i=e.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.Do=i+"://"+e.host,this.vo=`projects/${s}/databases/${o}`,this.Co=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${o}`}get Fo(){return!1}Mo(e,i,s,o,u){const c=wr(),f=this.xo(e,i.toUriEncodedString());D("RestConnection",`Sending RPC '${e}' ${c}:`,f,s);const g={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(g,o,u),this.No(e,f,g,s).then(I=>(D("RestConnection",`Received RPC '${e}' ${c}: `,I),I),I=>{throw Dn("RestConnection",`RPC '${e}' ${c} failed with error: `,I,"url: ",f,"request:",s),I})}Lo(e,i,s,o,u,c){return this.Mo(e,i,s,o,u)}Oo(e,i,s){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+pe}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),i&&i.headers.forEach((o,u)=>e[u]=o),s&&s.headers.forEach((o,u)=>e[u]=o)}xo(e,i){const s=ah[e];return`${this.Do}/v1/${i}:${s}`}terminate(){}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}No(t,e,i,s){const o=wr();return new Promise((u,c)=>{const f=new so;f.setWithCredentials(!0),f.listenOnce(oo.COMPLETE,()=>{try{switch(f.getLastErrorCode()){case Rn.NO_ERROR:const I=f.getResponseJson();D(ct,`XHR for RPC '${t}' ${o} received:`,JSON.stringify(I)),u(I);break;case Rn.TIMEOUT:D(ct,`RPC '${t}' ${o} timed out`),c(new O(P.DEADLINE_EXCEEDED,"Request time out"));break;case Rn.HTTP_ERROR:const w=f.getStatus();if(D(ct,`RPC '${t}' ${o} failed with status:`,w,"response text:",f.getResponseText()),w>0){let S=f.getResponseJson();Array.isArray(S)&&(S=S[0]);const C=S==null?void 0:S.error;if(C&&C.status&&C.message){const V=function(N){const G=N.toLowerCase().replace(/_/g,"-");return Object.values(P).indexOf(G)>=0?G:P.UNKNOWN}(C.status);c(new O(V,C.message))}else c(new O(P.UNKNOWN,"Server responded with status "+f.getStatus()))}else c(new O(P.UNAVAILABLE,"Connection failed."));break;default:x()}}finally{D(ct,`RPC '${t}' ${o} completed.`)}});const g=JSON.stringify(s);D(ct,`RPC '${t}' ${o} sending request:`,s),f.send(e,"POST",g,i,15)})}Bo(t,e,i){const s=wr(),o=[this.Do,"/","google.firestore.v1.Firestore","/",t,"/channel"],u=uo(),c=lo(),f={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},g=this.longPollingOptions.timeoutSeconds;g!==void 0&&(f.longPollingTimeout=Math.round(1e3*g)),this.useFetchStreams&&(f.useFetchStreams=!0),this.Oo(f.initMessageHeaders,e,i),f.encodeInitMessageHeaders=!0;const I=o.join("");D(ct,`Creating RPC '${t}' stream ${s}: ${I}`,f);const w=u.createWebChannel(I,f);let S=!1,C=!1;const V=new lh({Io:N=>{C?D(ct,`Not sending because RPC '${t}' stream ${s} is closed:`,N):(S||(D(ct,`Opening RPC '${t}' stream ${s} transport.`),w.open(),S=!0),D(ct,`RPC '${t}' stream ${s} sending:`,N),w.send(N))},To:()=>w.close()}),M=(N,G,H)=>{N.listen(G,W=>{try{H(W)}catch(st){setTimeout(()=>{throw st},0)}})};return M(w,Me.EventType.OPEN,()=>{C||(D(ct,`RPC '${t}' stream ${s} transport opened.`),V.yo())}),M(w,Me.EventType.CLOSE,()=>{C||(C=!0,D(ct,`RPC '${t}' stream ${s} transport closed`),V.So())}),M(w,Me.EventType.ERROR,N=>{C||(C=!0,Dn(ct,`RPC '${t}' stream ${s} transport errored:`,N),V.So(new O(P.UNAVAILABLE,"The operation could not be completed")))}),M(w,Me.EventType.MESSAGE,N=>{var G;if(!C){const H=N.data[0];X(!!H);const W=H,st=W.error||((G=W[0])===null||G===void 0?void 0:G.error);if(st){D(ct,`RPC '${t}' stream ${s} received error:`,st);const jt=st.status;let gt=function(m){const _=Y[m];if(_!==void 0)return Ac(_)}(jt),E=st.message;gt===void 0&&(gt=P.INTERNAL,E="Unknown error status: "+jt+" with message "+st.message),C=!0,V.So(new O(gt,E)),w.close()}else D(ct,`RPC '${t}' stream ${s} received:`,H),V.bo(H)}}),M(c,ao.STAT_EVENT,N=>{N.stat===Or.PROXY?D(ct,`RPC '${t}' stream ${s} detected buffering proxy`):N.stat===Or.NOPROXY&&D(ct,`RPC '${t}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{V.wo()},0),V}}function Rr(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zn(n){return new wc(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uo{constructor(t,e,i=1e3,s=1.5,o=6e4){this.ui=t,this.timerId=e,this.ko=i,this.qo=s,this.Qo=o,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(t){this.cancel();const e=Math.floor(this.Ko+this.zo()),i=Math.max(0,Date.now()-this.Uo),s=Math.max(0,e-i);s>0&&D("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Ko} ms, delay with jitter: ${e} ms, last attempt: ${i} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,s,()=>(this.Uo=Date.now(),t())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ch{constructor(t,e,i,s,o,u,c,f){this.ui=t,this.Ho=i,this.Jo=s,this.connection=o,this.authCredentialsProvider=u,this.appCheckCredentialsProvider=c,this.listener=f,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new Uo(t,e)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(t){this.u_(),this.stream.send(t)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(t,e){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,t!==4?this.t_.reset():e&&e.code===P.RESOURCE_EXHAUSTED?(Jt(e.toString()),Jt("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):e&&e.code===P.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.mo(e)}l_(){}auth(){this.state=1;const t=this.h_(this.Yo),e=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([i,s])=>{this.Yo===e&&this.P_(i,s)},i=>{t(()=>{const s=new O(P.UNKNOWN,"Fetching auth token failed: "+i.message);return this.I_(s)})})}P_(t,e){const i=this.h_(this.Yo);this.stream=this.T_(t,e),this.stream.Eo(()=>{i(()=>this.listener.Eo())}),this.stream.Ro(()=>{i(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(s=>{i(()=>this.I_(s))}),this.stream.onMessage(s=>{i(()=>++this.e_==1?this.E_(s):this.onNext(s))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(t){return D("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}h_(t){return e=>{this.ui.enqueueAndForget(()=>this.Yo===t?e():(D("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class hh extends ch{constructor(t,e,i,s,o,u){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,i,s,u),this.serializer=o}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(t,e){return this.connection.Bo("Write",t,e)}E_(t){return X(!!t.streamToken),this.lastStreamToken=t.streamToken,X(!t.writeResults||t.writeResults.length===0),this.listener.f_()}onNext(t){X(!!t.streamToken),this.lastStreamToken=t.streamToken,this.t_.reset();const e=Nc(t.writeResults,t.commitTime),i=ae(t.commitTime);return this.listener.g_(i,e)}p_(){const t={};t.database=Cc(this.serializer),this.a_(t)}m_(t){const e={streamToken:this.lastStreamToken,writes:t.map(i=>Dc(this.serializer,i))};this.a_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fh extends class{}{constructor(t,e,i,s){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=i,this.serializer=s,this.y_=!1}w_(){if(this.y_)throw new O(P.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(t,e,i,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,u])=>this.connection.Mo(t,Br(e,i),s,o,u)).catch(o=>{throw o.name==="FirebaseError"?(o.code===P.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new O(P.UNKNOWN,o.toString())})}Lo(t,e,i,s,o){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([u,c])=>this.connection.Lo(t,Br(e,i),s,u,c,o)).catch(u=>{throw u.name==="FirebaseError"?(u.code===P.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),u):new O(P.UNKNOWN,u.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class dh{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(t){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.C_("Offline")))}set(t){this.x_(),this.S_=0,t==="Online"&&(this.D_=!1),this.C_(t)}C_(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}F_(t){const e=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(Jt(e),this.D_=!1):D("OnlineStateTracker",e)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ph{constructor(t,e,i,s,o){this.localStore=t,this.datastore=e,this.asyncQueue=i,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=o,this.k_._o(u=>{i.enqueueAndForget(async()=>{Ze(this)&&(D("RemoteStore","Restarting streams for network reachability change."),await async function(f){const g=$(f);g.L_.add(4),await Je(g),g.q_.set("Unknown"),g.L_.delete(4),await Gn(g)}(this))})}),this.q_=new dh(i,s)}}async function Gn(n){if(Ze(n))for(const t of n.B_)await t(!0)}async function Je(n){for(const t of n.B_)await t(!1)}function Ze(n){return $(n).L_.size===0}async function jo(n,t,e){if(!jn(t))throw t;n.L_.add(1),await Je(n),n.q_.set("Offline"),e||(e=()=>rh(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{D("RemoteStore","Retrying IndexedDB access"),await e(),n.L_.delete(1),await Gn(n)})}function $o(n,t){return t().catch(e=>jo(n,e,t))}async function Kn(n){const t=$(n),e=Ut(t);let i=t.O_.length>0?t.O_[t.O_.length-1].batchId:-1;for(;mh(t);)try{const s=await ih(t.localStore,i);if(s===null){t.O_.length===0&&e.o_();break}i=s.batchId,gh(t,s)}catch(s){await jo(t,s)}qo(t)&&Ho(t)}function mh(n){return Ze(n)&&n.O_.length<10}function gh(n,t){n.O_.push(t);const e=Ut(n);e.r_()&&e.V_&&e.m_(t.mutations)}function qo(n){return Ze(n)&&!Ut(n).n_()&&n.O_.length>0}function Ho(n){Ut(n).start()}async function _h(n){Ut(n).p_()}async function yh(n){const t=Ut(n);for(const e of n.O_)t.m_(e.mutations)}async function Eh(n,t,e){const i=n.O_.shift(),s=ti.from(i,t,e);await $o(n,()=>n.remoteSyncer.applySuccessfulWrite(s)),await Kn(n)}async function vh(n,t){t&&Ut(n).V_&&await async function(i,s){if(function(u){return Ic(u)&&u!==P.ABORTED}(s.code)){const o=i.O_.shift();Ut(i).s_(),await $o(i,()=>i.remoteSyncer.rejectFailedWrite(o.batchId,s)),await Kn(i)}}(n,t),qo(n)&&Ho(n)}async function Ls(n,t){const e=$(n);e.asyncQueue.verifyOperationInProgress(),D("RemoteStore","RemoteStore received new credentials");const i=Ze(e);e.L_.add(3),await Je(e),i&&e.q_.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.L_.delete(3),await Gn(e)}async function Th(n,t){const e=$(n);t?(e.L_.delete(2),await Gn(e)):t||(e.L_.add(2),await Je(e),e.q_.set("Unknown"))}function Ut(n){return n.U_||(n.U_=function(e,i,s){const o=$(e);return o.w_(),new hh(i,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,s)}(n.datastore,n.asyncQueue,{Eo:()=>Promise.resolve(),Ro:_h.bind(null,n),mo:vh.bind(null,n),f_:yh.bind(null,n),g_:Eh.bind(null,n)}),n.B_.push(async t=>{t?(n.U_.s_(),await Kn(n)):(await n.U_.stop(),n.O_.length>0&&(D("RemoteStore",`Stopping write stream with ${n.O_.length} pending writes`),n.O_=[]))})),n.U_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ii{constructor(t,e,i,s,o){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=i,this.op=s,this.removalCallback=o,this.deferred=new Wt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(u=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,e,i,s,o){const u=Date.now()+i,c=new ii(t,e,u,s,o);return c.start(i),c}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new O(P.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function zo(n,t){if(Jt("AsyncQueue",`${t}: ${n}`),jn(n))return new O(P.UNAVAILABLE,`${t}: ${n}`);throw n}class Ih{constructor(){this.queries=Fs(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(e,i){const s=$(e),o=s.queries;s.queries=Fs(),o.forEach((u,c)=>{for(const f of c.j_)f.onError(i)})})(this,new O(P.ABORTED,"Firestore shutting down"))}}function Fs(){return new me(n=>Ro(n),wo)}function Ah(n){n.Y_.forEach(t=>{t.next()})}var Bs,Us;(Us=Bs||(Bs={})).ea="default",Us.Cache="cache";class wh{constructor(t,e,i,s,o,u){this.localStore=t,this.remoteStore=e,this.eventManager=i,this.sharedClientState=s,this.currentUser=o,this.maxConcurrentLimboResolutions=u,this.Ca={},this.Fa=new me(c=>Ro(c),wo),this.Ma=new Map,this.xa=new Set,this.Oa=new _t(k.comparator),this.Na=new Map,this.La=new ei,this.Ba={},this.ka=new Map,this.qa=fe.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function Rh(n,t,e){const i=Ch(n);try{const s=await function(u,c){const f=$(u),g=tt.now(),I=c.reduce((C,V)=>C.add(V.key),ft());let w,S;return f.persistence.runTransaction("Locally write mutations","readwrite",C=>{let V=Ln(),M=ft();return f.cs.getEntries(C,I).next(N=>{V=N,V.forEach((G,H)=>{H.isValidDocument()||(M=M.add(G))})}).next(()=>f.localDocuments.getOverlayedDocuments(C,V)).next(N=>{w=N;const G=[];for(const H of c){const W=yc(H,w.get(H.key).overlayedDocument);W!=null&&G.push(new te(H.key,W,_o(W.value.mapValue),bt.exists(!0)))}return f.mutationQueue.addMutationBatch(C,g,G,c)}).next(N=>{S=N;const G=N.applyToLocalDocumentSet(w,M);return f.documentOverlayCache.saveOverlays(C,N.batchId,G)})}).then(()=>({batchId:S.batchId,changes:So(w)}))}(i.localStore,t);i.sharedClientState.addPendingMutation(s.batchId),function(u,c,f){let g=u.Ba[u.currentUser.toKey()];g||(g=new _t(j)),g=g.insert(c,f),u.Ba[u.currentUser.toKey()]=g}(i,s.batchId,e),await Qn(i,s.changes),await Kn(i.remoteStore)}catch(s){const o=zo(s,"Failed to persist write");e.reject(o)}}function js(n,t,e){const i=$(n);if(i.isPrimaryClient&&e===0||!i.isPrimaryClient&&e===1){const s=[];i.Fa.forEach((o,u)=>{const c=u.view.Z_(t);c.snapshot&&s.push(c.snapshot)}),function(u,c){const f=$(u);f.onlineState=c;let g=!1;f.queries.forEach((I,w)=>{for(const S of w.j_)S.Z_(c)&&(g=!0)}),g&&Ah(f)}(i.eventManager,t),s.length&&i.Ca.d_(s),i.onlineState=t,i.isPrimaryClient&&i.sharedClientState.setOnlineState(t)}}async function Ph(n,t){const e=$(n),i=t.batch.batchId;try{const s=await nh(e.localStore,t);Ko(e,i,null),Go(e,i),e.sharedClientState.updateMutationState(i,"acknowledged"),await Qn(e,s)}catch(s){await fo(s)}}async function Sh(n,t,e){const i=$(n);try{const s=await function(u,c){const f=$(u);return f.persistence.runTransaction("Reject batch","readwrite-primary",g=>{let I;return f.mutationQueue.lookupMutationBatch(g,c).next(w=>(X(w!==null),I=w.keys(),f.mutationQueue.removeMutationBatch(g,w))).next(()=>f.mutationQueue.performConsistencyCheck(g)).next(()=>f.documentOverlayCache.removeOverlaysForBatchId(g,I,c)).next(()=>f.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(g,I)).next(()=>f.localDocuments.getDocuments(g,I))})}(i.localStore,t);Ko(i,t,e),Go(i,t),i.sharedClientState.updateMutationState(t,"rejected",e),await Qn(i,s)}catch(s){await fo(s)}}function Go(n,t){(n.ka.get(t)||[]).forEach(e=>{e.resolve()}),n.ka.delete(t)}function Ko(n,t,e){const i=$(n);let s=i.Ba[i.currentUser.toKey()];if(s){const o=s.get(t);o&&(e?o.reject(e):o.resolve(),s=s.remove(t)),i.Ba[i.currentUser.toKey()]=s}}async function Qn(n,t,e){const i=$(n),s=[],o=[],u=[];i.Fa.isEmpty()||(i.Fa.forEach((c,f)=>{u.push(i.Ka(f,t,e).then(g=>{var I;if((g||e)&&i.isPrimaryClient){const w=g?!g.fromCache:(I=void 0)===null||I===void 0?void 0:I.current;i.sharedClientState.updateQueryState(f.targetId,w?"current":"not-current")}if(g){s.push(g);const w=ri.Wi(f.targetId,g);o.push(w)}}))}),await Promise.all(u),i.Ca.d_(s),await async function(f,g){const I=$(f);try{await I.persistence.runTransaction("notifyLocalViewChanges","readwrite",w=>R.forEach(g,S=>R.forEach(S.$i,C=>I.persistence.referenceDelegate.addReference(w,S.targetId,C)).next(()=>R.forEach(S.Ui,C=>I.persistence.referenceDelegate.removeReference(w,S.targetId,C)))))}catch(w){if(!jn(w))throw w;D("LocalStore","Failed to update sequence numbers: "+w)}for(const w of g){const S=w.targetId;if(!w.fromCache){const C=I.os.get(S),V=C.snapshotVersion,M=C.withLastLimboFreeSnapshotVersion(V);I.os=I.os.insert(S,M)}}}(i.localStore,o))}async function bh(n,t){const e=$(n);if(!e.currentUser.isEqual(t)){D("SyncEngine","User change. New user:",t.toKey());const i=await Bo(e.localStore,t);e.currentUser=t,function(o,u){o.ka.forEach(c=>{c.forEach(f=>{f.reject(new O(P.CANCELLED,u))})}),o.ka.clear()}(e,"'waitForPendingWrites' promise is rejected due to a user change."),e.sharedClientState.handleUserChange(t,i.removedBatchIds,i.addedBatchIds),await Qn(e,i.hs)}}function Ch(n){const t=$(n);return t.remoteStore.remoteSyncer.applySuccessfulWrite=Ph.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=Sh.bind(null,t),t}class Bn{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(t){this.serializer=zn(t.databaseInfo.databaseId),this.sharedClientState=this.Wa(t),this.persistence=this.Ga(t),await this.persistence.start(),this.localStore=this.za(t),this.gcScheduler=this.ja(t,this.localStore),this.indexBackfillerScheduler=this.Ha(t,this.localStore)}ja(t,e){return null}Ha(t,e){return null}za(t){return eh(this.persistence,new Zc,t.initialUser,this.serializer)}Ga(t){return new Xc(ni.Zr,this.serializer)}Wa(t){return new sh}async terminate(){var t,e;(t=this.gcScheduler)===null||t===void 0||t.stop(),(e=this.indexBackfillerScheduler)===null||e===void 0||e.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Bn.provider={build:()=>new Bn};class jr{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=i=>js(this.syncEngine,i,1),this.remoteStore.remoteSyncer.handleCredentialChange=bh.bind(null,this.syncEngine),await Th(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new Ih}()}createDatastore(t){const e=zn(t.databaseInfo.databaseId),i=function(o){return new uh(o)}(t.databaseInfo);return function(o,u,c,f){return new fh(o,u,c,f)}(t.authCredentials,t.appCheckCredentials,i,e)}createRemoteStore(t){return function(i,s,o,u,c){return new ph(i,s,o,u,c)}(this.localStore,this.datastore,t.asyncQueue,e=>js(this.syncEngine,e,0),function(){return xs.D()?new xs:new oh}())}createSyncEngine(t,e){return function(s,o,u,c,f,g,I){const w=new wh(s,o,u,c,f,g);return I&&(w.Qa=!0),w}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}async terminate(){var t,e;await async function(s){const o=$(s);D("RemoteStore","RemoteStore shutting down."),o.L_.add(5),await Je(o),o.k_.shutdown(),o.q_.set("Unknown")}(this.remoteStore),(t=this.datastore)===null||t===void 0||t.terminate(),(e=this.eventManager)===null||e===void 0||e.terminate()}}jr.provider={build:()=>new jr};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vh{constructor(t,e,i,s,o){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=i,this.databaseInfo=s,this.user=ht.UNAUTHENTICATED,this.clientId=ho.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=o,this.authCredentials.start(i,async u=>{D("FirestoreClient","Received user=",u.uid),await this.authCredentialListener(u),this.user=u}),this.appCheckCredentials.start(i,u=>(D("FirestoreClient","Received new app check token=",u),this.appCheckCredentialListener(u,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Wt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const i=zo(e,"Failed to shutdown persistence");t.reject(i)}}),t.promise}}async function Pr(n,t){n.asyncQueue.verifyOperationInProgress(),D("FirestoreClient","Initializing OfflineComponentProvider");const e=n.configuration;await t.initialize(e);let i=e.initialUser;n.setCredentialChangeListener(async s=>{i.isEqual(s)||(await Bo(t.localStore,s),i=s)}),t.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=t}async function $s(n,t){n.asyncQueue.verifyOperationInProgress();const e=await Dh(n);D("FirestoreClient","Initializing OnlineComponentProvider"),await t.initialize(e,n.configuration),n.setCredentialChangeListener(i=>Ls(t.remoteStore,i)),n.setAppCheckTokenChangeListener((i,s)=>Ls(t.remoteStore,s)),n._onlineComponents=t}async function Dh(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){D("FirestoreClient","Using user provided OfflineComponentProvider");try{await Pr(n,n._uninitializedComponentsProvider._offline)}catch(t){const e=t;if(!function(s){return s.name==="FirebaseError"?s.code===P.FAILED_PRECONDITION||s.code===P.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(e))throw e;Dn("Error using user provided cache. Falling back to memory cache: "+e),await Pr(n,new Bn)}}else D("FirestoreClient","Using default OfflineComponentProvider"),await Pr(n,new Bn);return n._offlineComponents}async function Nh(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(D("FirestoreClient","Using user provided OnlineComponentProvider"),await $s(n,n._uninitializedComponentsProvider._online)):(D("FirestoreClient","Using default OnlineComponentProvider"),await $s(n,new jr))),n._onlineComponents}function Oh(n){return Nh(n).then(t=>t.syncEngine)}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qo(n){const t={};return n.timeoutSeconds!==void 0&&(t.timeoutSeconds=n.timeoutSeconds),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qs=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wo(n,t,e){if(!e)throw new O(P.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${t}.`)}function kh(n,t,e,i){if(t===!0&&i===!0)throw new O(P.INVALID_ARGUMENT,`${n} and ${e} cannot be used together.`)}function Hs(n){if(!k.isDocumentKey(n))throw new O(P.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function zs(n){if(k.isDocumentKey(n))throw new O(P.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function si(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const t=function(i){return i.constructor?i.constructor.name:null}(n);return t?`a custom ${t} object`:"an object"}}return typeof n=="function"?"a function":x()}function Xo(n,t){if("_delegate"in n&&(n=n._delegate),!(n instanceof t)){if(t.name===n.constructor.name)throw new O(P.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const e=si(n);throw new O(P.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${e}`)}}return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gs{constructor(t){var e,i;if(t.host===void 0){if(t.ssl!==void 0)throw new O(P.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(e=t.ssl)===null||e===void 0||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new O(P.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}kh("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Qo((i=t.experimentalLongPollingOptions)!==null&&i!==void 0?i:{}),function(o){if(o.timeoutSeconds!==void 0){if(isNaN(o.timeoutSeconds))throw new O(P.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (must not be NaN)`);if(o.timeoutSeconds<5)throw new O(P.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (minimum allowed value is 5)`);if(o.timeoutSeconds>30)throw new O(P.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(i,s){return i.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class Wn{constructor(t,e,i,s){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=i,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Gs({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new O(P.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new O(P.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Gs(t),t.credentials!==void 0&&(this._authCredentials=function(i){if(!i)return new Au;switch(i.type){case"firstParty":return new Su(i.sessionIndex||"0",i.iamToken||null,i.authTokenFactory||null);case"provider":return i.client;default:throw new O(P.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const i=qs.get(e);i&&(D("ComponentProvider","Removing Datastore"),qs.delete(e),i.terminate())}(this),Promise.resolve()}}function Mh(n,t,e,i={}){var s;const o=(n=Xo(n,Wn))._getSettings(),u=`${t}:${e}`;if(o.host!=="firestore.googleapis.com"&&o.host!==u&&Dn("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},o),{host:u,ssl:!1})),i.mockUserToken){let c,f;if(typeof i.mockUserToken=="string")c=i.mockUserToken,f=ht.MOCK_USER;else{c=nl(i.mockUserToken,(s=n._app)===null||s===void 0?void 0:s.options.projectId);const g=i.mockUserToken.sub||i.mockUserToken.user_id;if(!g)throw new O(P.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");f=new ht(g)}n._authCredentials=new wu(new co(c,f))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oi{constructor(t,e,i){this.converter=e,this._query=i,this.type="query",this.firestore=t}withConverter(t){return new oi(this.firestore,t,this._query)}}class Ct{constructor(t,e,i){this.converter=e,this._key=i,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Lt(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new Ct(this.firestore,t,this._key)}}class Lt extends oi{constructor(t,e,i){super(t,e,ec(i)),this._path=i,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new Ct(this.firestore,null,new k(t))}withConverter(t){return new Lt(this.firestore,t,this._path)}}function xh(n,t,...e){if(n=Ue(n),Wo("collection","path",t),n instanceof Wn){const i=Q.fromString(t,...e);return zs(i),new Lt(n,null,i)}{if(!(n instanceof Ct||n instanceof Lt))throw new O(P.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=n._path.child(Q.fromString(t,...e));return zs(i),new Lt(n.firestore,null,i)}}function Lh(n,t,...e){if(n=Ue(n),arguments.length===1&&(t=ho.newId()),Wo("doc","path",t),n instanceof Wn){const i=Q.fromString(t,...e);return Hs(i),new Ct(n,null,new k(i))}{if(!(n instanceof Ct||n instanceof Lt))throw new O(P.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=n._path.child(Q.fromString(t,...e));return Hs(i),new Ct(n.firestore,n instanceof Lt?n.converter:null,new k(i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ks{constructor(t=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new Uo(this,"async_queue_retry"),this.Vu=()=>{const i=Rr();i&&D("AsyncQueue","Visibility state changed to "+i.visibilityState),this.t_.jo()},this.mu=t;const e=Rr();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.fu(),this.gu(t)}enterRestrictedMode(t){if(!this.Iu){this.Iu=!0,this.Au=t||!1;const e=Rr();e&&typeof e.removeEventListener=="function"&&e.removeEventListener("visibilitychange",this.Vu)}}enqueue(t){if(this.fu(),this.Iu)return new Promise(()=>{});const e=new Wt;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(t().then(e.resolve,e.reject),e.promise)).then(()=>e.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Pu.push(t),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(t){if(!jn(t))throw t;D("AsyncQueue","Operation failed with retryable error: "+t)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(t){const e=this.mu.then(()=>(this.du=!0,t().catch(i=>{this.Eu=i,this.du=!1;const s=function(u){let c=u.message||"";return u.stack&&(c=u.stack.includes(u.message)?u.stack:u.message+`
`+u.stack),c}(i);throw Jt("INTERNAL UNHANDLED ERROR: ",s),i}).then(i=>(this.du=!1,i))));return this.mu=e,e}enqueueAfterDelay(t,e,i){this.fu(),this.Ru.indexOf(t)>-1&&(e=0);const s=ii.createAndSchedule(this,t,e,i,o=>this.yu(o));return this.Tu.push(s),s}fu(){this.Eu&&x()}verifyOperationInProgress(){}async wu(){let t;do t=this.mu,await t;while(t!==this.mu)}Su(t){for(const e of this.Tu)if(e.timerId===t)return!0;return!1}bu(t){return this.wu().then(()=>{this.Tu.sort((e,i)=>e.targetTimeMs-i.targetTimeMs);for(const e of this.Tu)if(e.skipDelay(),t!=="all"&&e.timerId===t)break;return this.wu()})}Du(t){this.Ru.push(t)}yu(t){const e=this.Tu.indexOf(t);this.Tu.splice(e,1)}}class Yo extends Wn{constructor(t,e,i,s){super(t,e,i,s),this.type="firestore",this._queue=new Ks,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new Ks(t),this._firestoreClient=void 0,await t}}}function Fh(n,t){const e=typeof n=="object"?n:hu(),i=typeof n=="string"?n:"(default)",s=au(e,"firestore").getImmediate({identifier:i});if(!s._initialized){const o=tl("firestore");o&&Mh(s,...o)}return s}function Bh(n){if(n._terminated)throw new O(P.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||Uh(n),n._firestoreClient}function Uh(n){var t,e,i;const s=n._freezeSettings(),o=function(c,f,g,I){return new ju(c,f,g,I.host,I.ssl,I.experimentalForceLongPolling,I.experimentalAutoDetectLongPolling,Qo(I.experimentalLongPollingOptions),I.useFetchStreams)}(n._databaseId,((t=n._app)===null||t===void 0?void 0:t.options.appId)||"",n._persistenceKey,s);n._componentsProvider||!((e=s.localCache)===null||e===void 0)&&e._offlineComponentProvider&&(!((i=s.localCache)===null||i===void 0)&&i._onlineComponentProvider)&&(n._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),n._firestoreClient=new Vh(n._authCredentials,n._appCheckCredentials,n._queue,o,n._componentsProvider&&function(c){const f=c==null?void 0:c._online.build();return{_offline:c==null?void 0:c._offline.build(f),_online:f}}(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class We{constructor(t){this._byteString=t}static fromBase64String(t){try{return new We(At.fromBase64String(t))}catch(e){throw new O(P.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(t){return new We(At.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jo{constructor(...t){for(let e=0;e<t.length;++e)if(t[e].length===0)throw new O(P.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new it(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ai{constructor(t){this._methodName=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zo{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new O(P.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new O(P.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return j(this._lat,t._lat)||j(this._long,t._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ta{constructor(t){this._values=(t||[]).map(e=>e)}toArray(){return this._values.map(t=>t)}isEqual(t){return function(i,s){if(i.length!==s.length)return!1;for(let o=0;o<i.length;++o)if(i[o]!==s[o])return!1;return!0}(this._values,t._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jh=/^__.*__$/;class $h{constructor(t,e,i){this.data=t,this.fieldMask=e,this.fieldTransforms=i}toMutation(t,e){return this.fieldMask!==null?new te(t,this.data,this.fieldMask,e,this.fieldTransforms):new Ye(t,this.data,e,this.fieldTransforms)}}function ea(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw x()}}class li{constructor(t,e,i,s,o,u){this.settings=t,this.databaseId=e,this.serializer=i,this.ignoreUndefinedProperties=s,o===void 0&&this.vu(),this.fieldTransforms=o||[],this.fieldMask=u||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(t){return new li(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(t){var e;const i=(e=this.path)===null||e===void 0?void 0:e.child(t),s=this.Fu({path:i,xu:!1});return s.Ou(t),s}Nu(t){var e;const i=(e=this.path)===null||e===void 0?void 0:e.child(t),s=this.Fu({path:i,xu:!1});return s.vu(),s}Lu(t){return this.Fu({path:void 0,xu:!0})}Bu(t){return Un(t,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(t){return this.fieldMask.find(e=>t.isPrefixOf(e))!==void 0||this.fieldTransforms.find(e=>t.isPrefixOf(e.field))!==void 0}vu(){if(this.path)for(let t=0;t<this.path.length;t++)this.Ou(this.path.get(t))}Ou(t){if(t.length===0)throw this.Bu("Document fields must not be empty");if(ea(this.Cu)&&jh.test(t))throw this.Bu('Document fields cannot begin and end with "__"')}}class qh{constructor(t,e,i){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=i||zn(t)}Qu(t,e,i,s=!1){return new li({Cu:t,methodName:e,qu:i,path:it.emptyPath(),xu:!1,ku:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Hh(n){const t=n._freezeSettings(),e=zn(n._databaseId);return new qh(n._databaseId,!!t.ignoreUndefinedProperties,e)}function zh(n,t,e,i,s,o={}){const u=n.Qu(o.merge||o.mergeFields?2:0,t,e,s);sa("Data must be an object, but it was:",u,i);const c=ra(i,u);let f,g;if(o.merge)f=new It(u.fieldMask),g=u.fieldTransforms;else if(o.mergeFields){const I=[];for(const w of o.mergeFields){const S=Gh(t,w,e);if(!u.contains(S))throw new O(P.INVALID_ARGUMENT,`Field '${S}' is specified in your field mask but missing from your input data.`);Wh(I,S)||I.push(S)}f=new It(I),g=u.fieldTransforms.filter(w=>f.covers(w.field))}else f=null,g=u.fieldTransforms;return new $h(new Tt(c),f,g)}class ui extends ai{_toFieldTransform(t){return new pc(t.path,new Ge)}isEqual(t){return t instanceof ui}}function na(n,t){if(ia(n=Ue(n)))return sa("Unsupported field value:",t,n),ra(n,t);if(n instanceof ai)return function(i,s){if(!ea(s.Cu))throw s.Bu(`${i._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Bu(`${i._methodName}() is not currently supported inside arrays`);const o=i._toFieldTransform(s);o&&s.fieldTransforms.push(o)}(n,t),null;if(n===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),n instanceof Array){if(t.settings.xu&&t.Cu!==4)throw t.Bu("Nested arrays are not supported");return function(i,s){const o=[];let u=0;for(const c of i){let f=na(c,s.Lu(u));f==null&&(f={nullValue:"NULL_VALUE"}),o.push(f),u++}return{arrayValue:{values:o}}}(n,t)}return function(i,s){if((i=Ue(i))===null)return{nullValue:"NULL_VALUE"};if(typeof i=="number")return hc(s.serializer,i);if(typeof i=="boolean")return{booleanValue:i};if(typeof i=="string")return{stringValue:i};if(i instanceof Date){const o=tt.fromDate(i);return{timestampValue:Fr(s.serializer,o)}}if(i instanceof tt){const o=new tt(i.seconds,1e3*Math.floor(i.nanoseconds/1e3));return{timestampValue:Fr(s.serializer,o)}}if(i instanceof Zo)return{geoPointValue:{latitude:i.latitude,longitude:i.longitude}};if(i instanceof We)return{bytesValue:Rc(s.serializer,i._byteString)};if(i instanceof Ct){const o=s.databaseId,u=i.firestore._databaseId;if(!u.isEqual(o))throw s.Bu(`Document reference is for database ${u.projectId}/${u.database} but should be for database ${o.projectId}/${o.database}`);return{referenceValue:Lo(i.firestore._databaseId||s.databaseId,i._key.path)}}if(i instanceof ta)return function(u,c){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:u.toArray().map(f=>{if(typeof f!="number")throw c.Bu("VectorValues must only contain numeric values.");return Zr(c.serializer,f)})}}}}}}(i,s);throw s.Bu(`Unsupported field value: ${si(i)}`)}(n,t)}function ra(n,t){const e={};return mo(n)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):Xe(n,(i,s)=>{const o=na(s,t.Mu(i));o!=null&&(e[i]=o)}),{mapValue:{fields:e}}}function ia(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof tt||n instanceof Zo||n instanceof We||n instanceof Ct||n instanceof ai||n instanceof ta)}function sa(n,t,e){if(!ia(e)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(e)){const i=si(e);throw i==="an object"?t.Bu(n+" a custom object"):t.Bu(n+" "+i)}}function Gh(n,t,e){if((t=Ue(t))instanceof Jo)return t._internalPath;if(typeof t=="string")return Qh(n,t);throw Un("Field path arguments must be of type string or ",n,!1,void 0,e)}const Kh=new RegExp("[~\\*/\\[\\]]");function Qh(n,t,e){if(t.search(Kh)>=0)throw Un(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,e);try{return new Jo(...t.split("."))._internalPath}catch{throw Un(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,e)}}function Un(n,t,e,i,s){const o=i&&!i.isEmpty(),u=s!==void 0;let c=`Function ${t}() called with invalid data`;e&&(c+=" (via `toFirestore()`)"),c+=". ";let f="";return(o||u)&&(f+=" (found",o&&(f+=` in field ${i}`),u&&(f+=` in document ${s}`),f+=")"),new O(P.INVALID_ARGUMENT,c+n+f)}function Wh(n,t){return n.some(e=>e.isEqual(t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xh(n,t,e){let i;return i=n?n.toFirestore(t):t,i}function Yh(n,t){const e=Xo(n.firestore,Yo),i=Lh(n),s=Xh(n.converter,t);return Jh(e,[zh(Hh(n.firestore),"addDoc",i._key,s,n.converter!==null,{}).toMutation(i._key,bt.exists(!1))]).then(()=>i)}function Jh(n,t){return function(i,s){const o=new Wt;return i.asyncQueue.enqueueAndForget(async()=>Rh(await Oh(i),s,o)),o.promise}(Bh(n),t)}function Zh(){return new ui("serverTimestamp")}(function(t,e=!0){(function(s){pe=s})(cu),Vn(new je("firestore",(i,{instanceIdentifier:s,options:o})=>{const u=i.getProvider("app").getImmediate(),c=new Yo(new Ru(i.getProvider("auth-internal")),new Cu(i.getProvider("app-check-internal")),function(g,I){if(!Object.prototype.hasOwnProperty.apply(g.options,["projectId"]))throw new O(P.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new kn(g.options.projectId,I)}(u,s),u);return o=Object.assign({useFetchStreams:e},o),c._setSettings(o),c},"PUBLIC").setMultipleInstances(!0)),oe(Ts,"4.7.3",t),oe(Ts,"4.7.3","esm2017")})();const tf={apiKey:"AIzaSyAisXGZC_EdxGooYtcnXjIPDBifn4gOnw8",authDomain:"grupofalpat-80428.firebaseapp.com",projectId:"grupofalpat-80428",storageBucket:"grupofalpat-80428.firebasestorage.app",messagingSenderId:"730249631470",appId:"1:730249631470:web:32739ab9123cf53f6a05ff",measurementId:"G-LQM9S9207K"},ef=eo(tf),nf=Fh(ef),rf=async n=>{try{const t=await Yh(xh(nf,"contact_messages"),{...n,timestamp:Zh()});return console.log("Mensaje guardado con ID: ",t.id),!0}catch(t){return console.error("Error al añadir el mensaje: ",t),!1}};lucide.createIcons();AOS.init({duration:1e3,once:!0,easing:"ease-out-cubic"});window.addEventListener("scroll",()=>{const n=document.querySelector("nav");window.scrollY>50?n.classList.add("scrolled"):n.classList.remove("scrolled")});const oa=document.getElementById("theme-btn"),$r=document.body,aa=n=>{const t=oa.querySelector("i");n==="dark"?t.setAttribute("data-lucide","sun"):t.setAttribute("data-lucide","moon"),lucide.createIcons()},sf=()=>{const t=$r.getAttribute("data-theme")==="light"?"dark":"light";$r.setAttribute("data-theme",t),aa(t)};oa.addEventListener("click",sf);aa($r.getAttribute("data-theme"));const of=document.querySelectorAll(".counter"),af=200,la=n=>{const t=+n.getAttribute("data-target"),e=+n.innerText,i=t/af;e<t?(n.innerText=Math.ceil(e+i),setTimeout(()=>la(n),1)):n.innerText=t+(t===15?"+":"")},qr=document.querySelector(".stats"),ua=new IntersectionObserver(n=>{n[0].isIntersecting&&(of.forEach(t=>la(t)),ua.unobserve(qr))},{threshold:.5});qr&&ua.observe(qr);const Gt=document.querySelector(".contact-form");Gt&&Gt.addEventListener("submit",async n=>{n.preventDefault();const t=Gt.querySelector("button"),e=t.innerHTML;t.innerHTML='Enviando... <span class="loader"></span>',t.disabled=!0;const i={nombre:Gt.querySelector('input[type="text"]').value,email:Gt.querySelector('input[type="email"]').value,mensaje:Gt.querySelector("textarea").value};let s=!1;try{s=await Promise.race([rf(i),new Promise((o,u)=>setTimeout(()=>u(new Error("Timeout")),1e4))])}catch(o){console.error("Error detallado del envío:",o),s=!1}s?(alert("¡Gracias por tu consulta! El equipo de Grupo Falpat se pondrá en contacto pronto."),Gt.reset()):alert("No pudimos conectar con el servidor. Por favor, verifica tu conexión o intenta por WhatsApp. (Revisa la consola F12 para más detalles)"),t.innerHTML=e,t.disabled=!1});
