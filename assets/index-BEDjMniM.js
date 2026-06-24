(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=e(i);fetch(i.href,s)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Vu="170",Fm=0,Ph=1,Om=2,Td=1,Bm=2,Di=3,dr=0,Mn=1,gi=2,Bi=0,Es=1,Na=2,Dh=3,Lh=4,zm=5,Lr=100,km=101,Vm=102,Hm=103,Gm=104,Wm=200,Xm=201,Ym=202,qm=203,Rc=204,Pc=205,$m=206,Zm=207,Km=208,jm=209,Jm=210,Qm=211,t_=212,e_=213,n_=214,Dc=0,Lc=1,Uc=2,Us=3,Ic=4,Nc=5,Fc=6,Oc=7,bd=0,i_=1,r_=2,cr=0,s_=1,a_=2,o_=3,wd=4,l_=5,c_=6,u_=7,Ad=300,Is=301,Ns=302,nl=303,Bc=304,gl=306,zc=1e3,Ir=1001,kc=1002,hi=1003,h_=1004,Qa=1005,ci=1006,wl=1007,Nr=1008,Hi=1009,Cd=1010,Rd=1011,Fa=1012,Hu=1013,Xr=1014,Ni=1015,zi=1016,Gu=1017,Wu=1018,Fs=1020,Pd=35902,Dd=1021,Ld=1022,ui=1023,Ud=1024,Id=1025,Ts=1026,Os=1027,Nd=1028,Xu=1029,Fd=1030,Yu=1031,qu=1033,Bo=33776,zo=33777,ko=33778,Vo=33779,Vc=35840,Hc=35841,Gc=35842,Wc=35843,Xc=36196,Yc=37492,qc=37496,$c=37808,Zc=37809,Kc=37810,jc=37811,Jc=37812,Qc=37813,tu=37814,eu=37815,nu=37816,iu=37817,ru=37818,su=37819,au=37820,ou=37821,Ho=36492,lu=36494,cu=36495,Od=36283,uu=36284,hu=36285,fu=36286,f_=3200,d_=3201,Bd=0,p_=1,nr="",vn="srgb",Ys="srgb-linear",vl="linear",ge="srgb",Jr=7680,Uh=519,m_=512,__=513,g_=514,zd=515,v_=516,x_=517,M_=518,S_=519,Ih=35044,Nh="300 es",Fi=2e3,il=2001;class qs{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const i=this._listeners[t];if(i!==void 0){const s=i.indexOf(e);s!==-1&&i.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let s=0,a=i.length;s<a;s++)i[s].call(this,t);t.target=null}}}const en=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Al=Math.PI/180,du=180/Math.PI;function qa(){const r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(en[r&255]+en[r>>8&255]+en[r>>16&255]+en[r>>24&255]+"-"+en[t&255]+en[t>>8&255]+"-"+en[t>>16&15|64]+en[t>>24&255]+"-"+en[e&63|128]+en[e>>8&255]+"-"+en[e>>16&255]+en[e>>24&255]+en[n&255]+en[n>>8&255]+en[n>>16&255]+en[n>>24&255]).toLowerCase()}function Tn(r,t,e){return Math.max(t,Math.min(e,r))}function y_(r,t){return(r%t+t)%t}function Cl(r,t,e){return(1-e)*r+e*t}function Qs(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function yn(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}class qt{constructor(t=0,e=0){qt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Tn(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),s=this.x-t.x,a=this.y-t.y;return this.x=s*n-a*i+t.x,this.y=s*i+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Kt{constructor(t,e,n,i,s,a,o,l,c){Kt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,a,o,l,c)}set(t,e,n,i,s,a,o,l,c){const u=this.elements;return u[0]=t,u[1]=i,u[2]=o,u[3]=e,u[4]=s,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,s=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],h=n[7],f=n[2],d=n[5],_=n[8],g=i[0],m=i[3],p=i[6],S=i[1],E=i[4],x=i[7],C=i[2],A=i[5],b=i[8];return s[0]=a*g+o*S+l*C,s[3]=a*m+o*E+l*A,s[6]=a*p+o*x+l*b,s[1]=c*g+u*S+h*C,s[4]=c*m+u*E+h*A,s[7]=c*p+u*x+h*b,s[2]=f*g+d*S+_*C,s[5]=f*m+d*E+_*A,s[8]=f*p+d*x+_*b,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8];return e*a*u-e*o*c-n*s*u+n*o*l+i*s*c-i*a*l}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],h=u*a-o*c,f=o*l-u*s,d=c*s-a*l,_=e*h+n*f+i*d;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/_;return t[0]=h*g,t[1]=(i*c-u*n)*g,t[2]=(o*n-i*a)*g,t[3]=f*g,t[4]=(u*e-i*l)*g,t[5]=(i*s-o*e)*g,t[6]=d*g,t[7]=(n*l-c*e)*g,t[8]=(a*e-n*s)*g,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-i*c,i*l,-i*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(Rl.makeScale(t,e)),this}rotate(t){return this.premultiply(Rl.makeRotation(-t)),this}translate(t,e){return this.premultiply(Rl.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Rl=new Kt;function kd(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function rl(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function E_(){const r=rl("canvas");return r.style.display="block",r}const Fh={};function ua(r){r in Fh||(Fh[r]=!0,console.warn(r))}function T_(r,t,e){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(t,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:n()}}setTimeout(s,e)})}function b_(r){const t=r.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function w_(r){const t=r.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const le={enabled:!0,workingColorSpace:Ys,spaces:{},convert:function(r,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===ge&&(r.r=ki(r.r),r.g=ki(r.g),r.b=ki(r.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(r.applyMatrix3(this.spaces[t].toXYZ),r.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===ge&&(r.r=bs(r.r),r.g=bs(r.g),r.b=bs(r.b))),r},fromWorkingColorSpace:function(r,t){return this.convert(r,this.workingColorSpace,t)},toWorkingColorSpace:function(r,t){return this.convert(r,t,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===nr?vl:this.spaces[r].transfer},getLuminanceCoefficients:function(r,t=this.workingColorSpace){return r.fromArray(this.spaces[t].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,t,e){return r.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace}};function ki(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function bs(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}const Oh=[.64,.33,.3,.6,.15,.06],Bh=[.2126,.7152,.0722],zh=[.3127,.329],kh=new Kt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Vh=new Kt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);le.define({[Ys]:{primaries:Oh,whitePoint:zh,transfer:vl,toXYZ:kh,fromXYZ:Vh,luminanceCoefficients:Bh,workingColorSpaceConfig:{unpackColorSpace:vn},outputColorSpaceConfig:{drawingBufferColorSpace:vn}},[vn]:{primaries:Oh,whitePoint:zh,transfer:ge,toXYZ:kh,fromXYZ:Vh,luminanceCoefficients:Bh,outputColorSpaceConfig:{drawingBufferColorSpace:vn}}});let Qr;class A_{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Qr===void 0&&(Qr=rl("canvas")),Qr.width=t.width,Qr.height=t.height;const n=Qr.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Qr}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=rl("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),s=i.data;for(let a=0;a<s.length;a++)s[a]=ki(s[a]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(ki(e[n]/255)*255):e[n]=ki(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let C_=0;class Vd{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:C_++}),this.uuid=qa(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?s.push(Pl(i[a].image)):s.push(Pl(i[a]))}else s=Pl(i);n.url=s}return e||(t.images[this.uuid]=n),n}}function Pl(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?A_.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let R_=0;class Sn extends qs{constructor(t=Sn.DEFAULT_IMAGE,e=Sn.DEFAULT_MAPPING,n=Ir,i=Ir,s=ci,a=Nr,o=ui,l=Hi,c=Sn.DEFAULT_ANISOTROPY,u=nr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:R_++}),this.uuid=qa(),this.name="",this.source=new Vd(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new qt(0,0),this.repeat=new qt(1,1),this.center=new qt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Kt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Ad)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case zc:t.x=t.x-Math.floor(t.x);break;case Ir:t.x=t.x<0?0:1;break;case kc:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case zc:t.y=t.y-Math.floor(t.y);break;case Ir:t.y=t.y<0?0:1;break;case kc:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Sn.DEFAULT_IMAGE=null;Sn.DEFAULT_MAPPING=Ad;Sn.DEFAULT_ANISOTROPY=1;class ve{constructor(t=0,e=0,n=0,i=1){ve.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,s=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*i+a[12]*s,this.y=a[1]*e+a[5]*n+a[9]*i+a[13]*s,this.z=a[2]*e+a[6]*n+a[10]*i+a[14]*s,this.w=a[3]*e+a[7]*n+a[11]*i+a[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,s;const l=t.elements,c=l[0],u=l[4],h=l[8],f=l[1],d=l[5],_=l[9],g=l[2],m=l[6],p=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-g)<.01&&Math.abs(_-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+g)<.1&&Math.abs(_+m)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const E=(c+1)/2,x=(d+1)/2,C=(p+1)/2,A=(u+f)/4,b=(h+g)/4,R=(_+m)/4;return E>x&&E>C?E<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(E),i=A/n,s=b/n):x>C?x<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(x),n=A/i,s=R/i):C<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(C),n=b/s,i=R/s),this.set(n,i,s,e),this}let S=Math.sqrt((m-_)*(m-_)+(h-g)*(h-g)+(f-u)*(f-u));return Math.abs(S)<.001&&(S=1),this.x=(m-_)/S,this.y=(h-g)/S,this.z=(f-u)/S,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class P_ extends qs{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ve(0,0,t,e),this.scissorTest=!1,this.viewport=new ve(0,0,t,e);const i={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ci,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const s=new Sn(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Vd(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class fi extends P_{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Hd extends Sn{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=hi,this.minFilter=hi,this.wrapR=Ir,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class D_ extends Sn{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=hi,this.minFilter=hi,this.wrapR=Ir,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class $a{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,s,a,o){let l=n[i+0],c=n[i+1],u=n[i+2],h=n[i+3];const f=s[a+0],d=s[a+1],_=s[a+2],g=s[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h;return}if(o===1){t[e+0]=f,t[e+1]=d,t[e+2]=_,t[e+3]=g;return}if(h!==g||l!==f||c!==d||u!==_){let m=1-o;const p=l*f+c*d+u*_+h*g,S=p>=0?1:-1,E=1-p*p;if(E>Number.EPSILON){const C=Math.sqrt(E),A=Math.atan2(C,p*S);m=Math.sin(m*A)/C,o=Math.sin(o*A)/C}const x=o*S;if(l=l*m+f*x,c=c*m+d*x,u=u*m+_*x,h=h*m+g*x,m===1-o){const C=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=C,c*=C,u*=C,h*=C}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h}static multiplyQuaternionsFlat(t,e,n,i,s,a){const o=n[i],l=n[i+1],c=n[i+2],u=n[i+3],h=s[a],f=s[a+1],d=s[a+2],_=s[a+3];return t[e]=o*_+u*h+l*d-c*f,t[e+1]=l*_+u*f+c*h-o*d,t[e+2]=c*_+u*d+o*f-l*h,t[e+3]=u*_-o*h-l*f-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,s=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(i/2),h=o(s/2),f=l(n/2),d=l(i/2),_=l(s/2);switch(a){case"XYZ":this._x=f*u*h+c*d*_,this._y=c*d*h-f*u*_,this._z=c*u*_+f*d*h,this._w=c*u*h-f*d*_;break;case"YXZ":this._x=f*u*h+c*d*_,this._y=c*d*h-f*u*_,this._z=c*u*_-f*d*h,this._w=c*u*h+f*d*_;break;case"ZXY":this._x=f*u*h-c*d*_,this._y=c*d*h+f*u*_,this._z=c*u*_+f*d*h,this._w=c*u*h-f*d*_;break;case"ZYX":this._x=f*u*h-c*d*_,this._y=c*d*h+f*u*_,this._z=c*u*_-f*d*h,this._w=c*u*h+f*d*_;break;case"YZX":this._x=f*u*h+c*d*_,this._y=c*d*h+f*u*_,this._z=c*u*_-f*d*h,this._w=c*u*h-f*d*_;break;case"XZY":this._x=f*u*h-c*d*_,this._y=c*d*h-f*u*_,this._z=c*u*_+f*d*h,this._w=c*u*h+f*d*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],s=e[8],a=e[1],o=e[5],l=e[9],c=e[2],u=e[6],h=e[10],f=n+o+h;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(u-l)*d,this._y=(s-c)*d,this._z=(a-i)*d}else if(n>o&&n>h){const d=2*Math.sqrt(1+n-o-h);this._w=(u-l)/d,this._x=.25*d,this._y=(i+a)/d,this._z=(s+c)/d}else if(o>h){const d=2*Math.sqrt(1+o-n-h);this._w=(s-c)/d,this._x=(i+a)/d,this._y=.25*d,this._z=(l+u)/d}else{const d=2*Math.sqrt(1+h-n-o);this._w=(a-i)/d,this._x=(s+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Tn(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,s=t._z,a=t._w,o=e._x,l=e._y,c=e._z,u=e._w;return this._x=n*u+a*o+i*c-s*l,this._y=i*u+a*l+s*o-n*c,this._z=s*u+a*c+n*l-i*o,this._w=a*u-n*o-i*l-s*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,s=this._z,a=this._w;let o=a*t._w+n*t._x+i*t._y+s*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=i,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const d=1-e;return this._w=d*a+e*this._w,this._x=d*n+e*this._x,this._y=d*i+e*this._y,this._z=d*s+e*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),h=Math.sin((1-e)*u)/c,f=Math.sin(e*u)/c;return this._w=a*h+this._w*f,this._x=n*h+this._x*f,this._y=i*h+this._y*f,this._z=s*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class z{constructor(t=0,e=0,n=0){z.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Hh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Hh.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*i,this.y=s[1]*e+s[4]*n+s[7]*i,this.z=s[2]*e+s[5]*n+s[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,s=t.elements,a=1/(s[3]*e+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*i+s[12])*a,this.y=(s[1]*e+s[5]*n+s[9]*i+s[13])*a,this.z=(s[2]*e+s[6]*n+s[10]*i+s[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,s=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*i-o*n),u=2*(o*e-s*i),h=2*(s*n-a*e);return this.x=e+l*c+a*h-o*u,this.y=n+l*u+o*c-s*h,this.z=i+l*h+s*u-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*i,this.y=s[1]*e+s[5]*n+s[9]*i,this.z=s[2]*e+s[6]*n+s[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,s=t.z,a=e.x,o=e.y,l=e.z;return this.x=i*l-s*o,this.y=s*a-n*l,this.z=n*o-i*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Dl.copy(this).projectOnVector(t),this.sub(Dl)}reflect(t){return this.sub(Dl.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Tn(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Dl=new z,Hh=new $a;class Za{constructor(t=new z(1/0,1/0,1/0),e=new z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(ri.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(ri.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=ri.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,ri):ri.fromBufferAttribute(s,a),ri.applyMatrix4(t.matrixWorld),this.expandByPoint(ri);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),to.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),to.copy(n.boundingBox)),to.applyMatrix4(t.matrixWorld),this.union(to)}const i=t.children;for(let s=0,a=i.length;s<a;s++)this.expandByObject(i[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,ri),ri.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ta),eo.subVectors(this.max,ta),ts.subVectors(t.a,ta),es.subVectors(t.b,ta),ns.subVectors(t.c,ta),qi.subVectors(es,ts),$i.subVectors(ns,es),xr.subVectors(ts,ns);let e=[0,-qi.z,qi.y,0,-$i.z,$i.y,0,-xr.z,xr.y,qi.z,0,-qi.x,$i.z,0,-$i.x,xr.z,0,-xr.x,-qi.y,qi.x,0,-$i.y,$i.x,0,-xr.y,xr.x,0];return!Ll(e,ts,es,ns,eo)||(e=[1,0,0,0,1,0,0,0,1],!Ll(e,ts,es,ns,eo))?!1:(no.crossVectors(qi,$i),e=[no.x,no.y,no.z],Ll(e,ts,es,ns,eo))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,ri).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(ri).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(wi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),wi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),wi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),wi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),wi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),wi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),wi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),wi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(wi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const wi=[new z,new z,new z,new z,new z,new z,new z,new z],ri=new z,to=new Za,ts=new z,es=new z,ns=new z,qi=new z,$i=new z,xr=new z,ta=new z,eo=new z,no=new z,Mr=new z;function Ll(r,t,e,n,i){for(let s=0,a=r.length-3;s<=a;s+=3){Mr.fromArray(r,s);const o=i.x*Math.abs(Mr.x)+i.y*Math.abs(Mr.y)+i.z*Math.abs(Mr.z),l=t.dot(Mr),c=e.dot(Mr),u=n.dot(Mr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const L_=new Za,ea=new z,Ul=new z;class xl{constructor(t=new z,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):L_.setFromPoints(t).getCenter(n);let i=0;for(let s=0,a=t.length;s<a;s++)i=Math.max(i,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ea.subVectors(t,this.center);const e=ea.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(ea,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Ul.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ea.copy(t.center).add(Ul)),this.expandByPoint(ea.copy(t.center).sub(Ul))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ai=new z,Il=new z,io=new z,Zi=new z,Nl=new z,ro=new z,Fl=new z;class Gd{constructor(t=new z,e=new z(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ai)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Ai.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Ai.copy(this.origin).addScaledVector(this.direction,e),Ai.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){Il.copy(t).add(e).multiplyScalar(.5),io.copy(e).sub(t).normalize(),Zi.copy(this.origin).sub(Il);const s=t.distanceTo(e)*.5,a=-this.direction.dot(io),o=Zi.dot(this.direction),l=-Zi.dot(io),c=Zi.lengthSq(),u=Math.abs(1-a*a);let h,f,d,_;if(u>0)if(h=a*l-o,f=a*o-l,_=s*u,h>=0)if(f>=-_)if(f<=_){const g=1/u;h*=g,f*=g,d=h*(h+a*f+2*o)+f*(a*h+f+2*l)+c}else f=s,h=Math.max(0,-(a*f+o)),d=-h*h+f*(f+2*l)+c;else f=-s,h=Math.max(0,-(a*f+o)),d=-h*h+f*(f+2*l)+c;else f<=-_?(h=Math.max(0,-(-a*s+o)),f=h>0?-s:Math.min(Math.max(-s,-l),s),d=-h*h+f*(f+2*l)+c):f<=_?(h=0,f=Math.min(Math.max(-s,-l),s),d=f*(f+2*l)+c):(h=Math.max(0,-(a*s+o)),f=h>0?s:Math.min(Math.max(-s,-l),s),d=-h*h+f*(f+2*l)+c);else f=a>0?-s:s,h=Math.max(0,-(a*f+o)),d=-h*h+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),i&&i.copy(Il).addScaledVector(io,f),d}intersectSphere(t,e){Ai.subVectors(t.center,this.origin);const n=Ai.dot(this.direction),i=Ai.dot(Ai)-n*n,s=t.radius*t.radius;if(i>s)return null;const a=Math.sqrt(s-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,s,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(n=(t.min.x-f.x)*c,i=(t.max.x-f.x)*c):(n=(t.max.x-f.x)*c,i=(t.min.x-f.x)*c),u>=0?(s=(t.min.y-f.y)*u,a=(t.max.y-f.y)*u):(s=(t.max.y-f.y)*u,a=(t.min.y-f.y)*u),n>a||s>i||((s>n||isNaN(n))&&(n=s),(a<i||isNaN(i))&&(i=a),h>=0?(o=(t.min.z-f.z)*h,l=(t.max.z-f.z)*h):(o=(t.max.z-f.z)*h,l=(t.min.z-f.z)*h),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,Ai)!==null}intersectTriangle(t,e,n,i,s){Nl.subVectors(e,t),ro.subVectors(n,t),Fl.crossVectors(Nl,ro);let a=this.direction.dot(Fl),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Zi.subVectors(this.origin,t);const l=o*this.direction.dot(ro.crossVectors(Zi,ro));if(l<0)return null;const c=o*this.direction.dot(Nl.cross(Zi));if(c<0||l+c>a)return null;const u=-o*Zi.dot(Fl);return u<0?null:this.at(u/a,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ce{constructor(t,e,n,i,s,a,o,l,c,u,h,f,d,_,g,m){Ce.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,a,o,l,c,u,h,f,d,_,g,m)}set(t,e,n,i,s,a,o,l,c,u,h,f,d,_,g,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=i,p[1]=s,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=u,p[10]=h,p[14]=f,p[3]=d,p[7]=_,p[11]=g,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ce().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/is.setFromMatrixColumn(t,0).length(),s=1/is.setFromMatrixColumn(t,1).length(),a=1/is.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,s=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(s),h=Math.sin(s);if(t.order==="XYZ"){const f=a*u,d=a*h,_=o*u,g=o*h;e[0]=l*u,e[4]=-l*h,e[8]=c,e[1]=d+_*c,e[5]=f-g*c,e[9]=-o*l,e[2]=g-f*c,e[6]=_+d*c,e[10]=a*l}else if(t.order==="YXZ"){const f=l*u,d=l*h,_=c*u,g=c*h;e[0]=f+g*o,e[4]=_*o-d,e[8]=a*c,e[1]=a*h,e[5]=a*u,e[9]=-o,e[2]=d*o-_,e[6]=g+f*o,e[10]=a*l}else if(t.order==="ZXY"){const f=l*u,d=l*h,_=c*u,g=c*h;e[0]=f-g*o,e[4]=-a*h,e[8]=_+d*o,e[1]=d+_*o,e[5]=a*u,e[9]=g-f*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const f=a*u,d=a*h,_=o*u,g=o*h;e[0]=l*u,e[4]=_*c-d,e[8]=f*c+g,e[1]=l*h,e[5]=g*c+f,e[9]=d*c-_,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const f=a*l,d=a*c,_=o*l,g=o*c;e[0]=l*u,e[4]=g-f*h,e[8]=_*h+d,e[1]=h,e[5]=a*u,e[9]=-o*u,e[2]=-c*u,e[6]=d*h+_,e[10]=f-g*h}else if(t.order==="XZY"){const f=a*l,d=a*c,_=o*l,g=o*c;e[0]=l*u,e[4]=-h,e[8]=c*u,e[1]=f*h+g,e[5]=a*u,e[9]=d*h-_,e[2]=_*h-d,e[6]=o*u,e[10]=g*h+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(U_,t,I_)}lookAt(t,e,n){const i=this.elements;return In.subVectors(t,e),In.lengthSq()===0&&(In.z=1),In.normalize(),Ki.crossVectors(n,In),Ki.lengthSq()===0&&(Math.abs(n.z)===1?In.x+=1e-4:In.z+=1e-4,In.normalize(),Ki.crossVectors(n,In)),Ki.normalize(),so.crossVectors(In,Ki),i[0]=Ki.x,i[4]=so.x,i[8]=In.x,i[1]=Ki.y,i[5]=so.y,i[9]=In.y,i[2]=Ki.z,i[6]=so.z,i[10]=In.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,s=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],h=n[5],f=n[9],d=n[13],_=n[2],g=n[6],m=n[10],p=n[14],S=n[3],E=n[7],x=n[11],C=n[15],A=i[0],b=i[4],R=i[8],M=i[12],v=i[1],D=i[5],P=i[9],I=i[13],V=i[2],q=i[6],H=i[10],Y=i[14],B=i[3],et=i[7],L=i[11],ot=i[15];return s[0]=a*A+o*v+l*V+c*B,s[4]=a*b+o*D+l*q+c*et,s[8]=a*R+o*P+l*H+c*L,s[12]=a*M+o*I+l*Y+c*ot,s[1]=u*A+h*v+f*V+d*B,s[5]=u*b+h*D+f*q+d*et,s[9]=u*R+h*P+f*H+d*L,s[13]=u*M+h*I+f*Y+d*ot,s[2]=_*A+g*v+m*V+p*B,s[6]=_*b+g*D+m*q+p*et,s[10]=_*R+g*P+m*H+p*L,s[14]=_*M+g*I+m*Y+p*ot,s[3]=S*A+E*v+x*V+C*B,s[7]=S*b+E*D+x*q+C*et,s[11]=S*R+E*P+x*H+C*L,s[15]=S*M+E*I+x*Y+C*ot,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],s=t[12],a=t[1],o=t[5],l=t[9],c=t[13],u=t[2],h=t[6],f=t[10],d=t[14],_=t[3],g=t[7],m=t[11],p=t[15];return _*(+s*l*h-i*c*h-s*o*f+n*c*f+i*o*d-n*l*d)+g*(+e*l*d-e*c*f+s*a*f-i*a*d+i*c*u-s*l*u)+m*(+e*c*h-e*o*d-s*a*h+n*a*d+s*o*u-n*c*u)+p*(-i*o*u-e*l*h+e*o*f+i*a*h-n*a*f+n*l*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],h=t[9],f=t[10],d=t[11],_=t[12],g=t[13],m=t[14],p=t[15],S=h*m*c-g*f*c+g*l*d-o*m*d-h*l*p+o*f*p,E=_*f*c-u*m*c-_*l*d+a*m*d+u*l*p-a*f*p,x=u*g*c-_*h*c+_*o*d-a*g*d-u*o*p+a*h*p,C=_*h*l-u*g*l-_*o*f+a*g*f+u*o*m-a*h*m,A=e*S+n*E+i*x+s*C;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const b=1/A;return t[0]=S*b,t[1]=(g*f*s-h*m*s-g*i*d+n*m*d+h*i*p-n*f*p)*b,t[2]=(o*m*s-g*l*s+g*i*c-n*m*c-o*i*p+n*l*p)*b,t[3]=(h*l*s-o*f*s-h*i*c+n*f*c+o*i*d-n*l*d)*b,t[4]=E*b,t[5]=(u*m*s-_*f*s+_*i*d-e*m*d-u*i*p+e*f*p)*b,t[6]=(_*l*s-a*m*s-_*i*c+e*m*c+a*i*p-e*l*p)*b,t[7]=(a*f*s-u*l*s+u*i*c-e*f*c-a*i*d+e*l*d)*b,t[8]=x*b,t[9]=(_*h*s-u*g*s-_*n*d+e*g*d+u*n*p-e*h*p)*b,t[10]=(a*g*s-_*o*s+_*n*c-e*g*c-a*n*p+e*o*p)*b,t[11]=(u*o*s-a*h*s-u*n*c+e*h*c+a*n*d-e*o*d)*b,t[12]=C*b,t[13]=(u*g*i-_*h*i+_*n*f-e*g*f-u*n*m+e*h*m)*b,t[14]=(_*o*i-a*g*i-_*n*l+e*g*l+a*n*m-e*o*m)*b,t[15]=(a*h*i-u*o*i+u*n*l-e*h*l-a*n*f+e*o*f)*b,this}scale(t){const e=this.elements,n=t.x,i=t.y,s=t.z;return e[0]*=n,e[4]*=i,e[8]*=s,e[1]*=n,e[5]*=i,e[9]*=s,e[2]*=n,e[6]*=i,e[10]*=s,e[3]*=n,e[7]*=i,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),s=1-n,a=t.x,o=t.y,l=t.z,c=s*a,u=s*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,u*o+n,u*l-i*a,0,c*l-i*o,u*l+i*a,s*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,s,a){return this.set(1,n,s,0,t,1,a,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,s=e._x,a=e._y,o=e._z,l=e._w,c=s+s,u=a+a,h=o+o,f=s*c,d=s*u,_=s*h,g=a*u,m=a*h,p=o*h,S=l*c,E=l*u,x=l*h,C=n.x,A=n.y,b=n.z;return i[0]=(1-(g+p))*C,i[1]=(d+x)*C,i[2]=(_-E)*C,i[3]=0,i[4]=(d-x)*A,i[5]=(1-(f+p))*A,i[6]=(m+S)*A,i[7]=0,i[8]=(_+E)*b,i[9]=(m-S)*b,i[10]=(1-(f+g))*b,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let s=is.set(i[0],i[1],i[2]).length();const a=is.set(i[4],i[5],i[6]).length(),o=is.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),t.x=i[12],t.y=i[13],t.z=i[14],si.copy(this);const c=1/s,u=1/a,h=1/o;return si.elements[0]*=c,si.elements[1]*=c,si.elements[2]*=c,si.elements[4]*=u,si.elements[5]*=u,si.elements[6]*=u,si.elements[8]*=h,si.elements[9]*=h,si.elements[10]*=h,e.setFromRotationMatrix(si),n.x=s,n.y=a,n.z=o,this}makePerspective(t,e,n,i,s,a,o=Fi){const l=this.elements,c=2*s/(e-t),u=2*s/(n-i),h=(e+t)/(e-t),f=(n+i)/(n-i);let d,_;if(o===Fi)d=-(a+s)/(a-s),_=-2*a*s/(a-s);else if(o===il)d=-a/(a-s),_=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,i,s,a,o=Fi){const l=this.elements,c=1/(e-t),u=1/(n-i),h=1/(a-s),f=(e+t)*c,d=(n+i)*u;let _,g;if(o===Fi)_=(a+s)*h,g=-2*h;else if(o===il)_=s*h,g=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=g,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const is=new z,si=new Ce,U_=new z(0,0,0),I_=new z(1,1,1),Ki=new z,so=new z,In=new z,Gh=new Ce,Wh=new $a;class Ei{constructor(t=0,e=0,n=0,i=Ei.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,s=i[0],a=i[4],o=i[8],l=i[1],c=i[5],u=i[9],h=i[2],f=i[6],d=i[10];switch(e){case"XYZ":this._y=Math.asin(Tn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Tn(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(Tn(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Tn(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Tn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-Tn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Gh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Gh,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Wh.setFromEuler(this),this.setFromQuaternion(Wh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ei.DEFAULT_ORDER="XYZ";class Wd{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let N_=0;const Xh=new z,rs=new $a,Ci=new Ce,ao=new z,na=new z,F_=new z,O_=new $a,Yh=new z(1,0,0),qh=new z(0,1,0),$h=new z(0,0,1),Zh={type:"added"},B_={type:"removed"},ss={type:"childadded",child:null},Ol={type:"childremoved",child:null};class Qe extends qs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:N_++}),this.uuid=qa(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Qe.DEFAULT_UP.clone();const t=new z,e=new Ei,n=new $a,i=new z(1,1,1);function s(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Ce},normalMatrix:{value:new Kt}}),this.matrix=new Ce,this.matrixWorld=new Ce,this.matrixAutoUpdate=Qe.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Qe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Wd,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return rs.setFromAxisAngle(t,e),this.quaternion.multiply(rs),this}rotateOnWorldAxis(t,e){return rs.setFromAxisAngle(t,e),this.quaternion.premultiply(rs),this}rotateX(t){return this.rotateOnAxis(Yh,t)}rotateY(t){return this.rotateOnAxis(qh,t)}rotateZ(t){return this.rotateOnAxis($h,t)}translateOnAxis(t,e){return Xh.copy(t).applyQuaternion(this.quaternion),this.position.add(Xh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Yh,t)}translateY(t){return this.translateOnAxis(qh,t)}translateZ(t){return this.translateOnAxis($h,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ci.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?ao.copy(t):ao.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),na.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ci.lookAt(na,ao,this.up):Ci.lookAt(ao,na,this.up),this.quaternion.setFromRotationMatrix(Ci),i&&(Ci.extractRotation(i.matrixWorld),rs.setFromRotationMatrix(Ci),this.quaternion.premultiply(rs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Zh),ss.child=t,this.dispatchEvent(ss),ss.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(B_),Ol.child=t,this.dispatchEvent(Ol),Ol.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ci.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ci.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ci),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Zh),ss.child=t,this.dispatchEvent(ss),ss.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(na,t,F_),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(na,O_,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];s(t.shapes,h)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(t.materials,this.material[l]));i.material=o}else i.material=s(t.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(s(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),c=a(t.textures),u=a(t.images),h=a(t.shapes),f=a(t.skeletons),d=a(t.animations),_=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),_.length>0&&(n.nodes=_)}return n.object=i,n;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}Qe.DEFAULT_UP=new z(0,1,0);Qe.DEFAULT_MATRIX_AUTO_UPDATE=!0;Qe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ai=new z,Ri=new z,Bl=new z,Pi=new z,as=new z,os=new z,Kh=new z,zl=new z,kl=new z,Vl=new z,Hl=new ve,Gl=new ve,Wl=new ve;class li{constructor(t=new z,e=new z,n=new z){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),ai.subVectors(t,e),i.cross(ai);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(t,e,n,i,s){ai.subVectors(i,e),Ri.subVectors(n,e),Bl.subVectors(t,e);const a=ai.dot(ai),o=ai.dot(Ri),l=ai.dot(Bl),c=Ri.dot(Ri),u=Ri.dot(Bl),h=a*c-o*o;if(h===0)return s.set(0,0,0),null;const f=1/h,d=(c*l-o*u)*f,_=(a*u-o*l)*f;return s.set(1-d-_,_,d)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,Pi)===null?!1:Pi.x>=0&&Pi.y>=0&&Pi.x+Pi.y<=1}static getInterpolation(t,e,n,i,s,a,o,l){return this.getBarycoord(t,e,n,i,Pi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Pi.x),l.addScaledVector(a,Pi.y),l.addScaledVector(o,Pi.z),l)}static getInterpolatedAttribute(t,e,n,i,s,a){return Hl.setScalar(0),Gl.setScalar(0),Wl.setScalar(0),Hl.fromBufferAttribute(t,e),Gl.fromBufferAttribute(t,n),Wl.fromBufferAttribute(t,i),a.setScalar(0),a.addScaledVector(Hl,s.x),a.addScaledVector(Gl,s.y),a.addScaledVector(Wl,s.z),a}static isFrontFacing(t,e,n,i){return ai.subVectors(n,e),Ri.subVectors(t,e),ai.cross(Ri).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return ai.subVectors(this.c,this.b),Ri.subVectors(this.a,this.b),ai.cross(Ri).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return li.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return li.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,s){return li.getInterpolation(t,this.a,this.b,this.c,e,n,i,s)}containsPoint(t){return li.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return li.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,s=this.c;let a,o;as.subVectors(i,n),os.subVectors(s,n),zl.subVectors(t,n);const l=as.dot(zl),c=os.dot(zl);if(l<=0&&c<=0)return e.copy(n);kl.subVectors(t,i);const u=as.dot(kl),h=os.dot(kl);if(u>=0&&h<=u)return e.copy(i);const f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return a=l/(l-u),e.copy(n).addScaledVector(as,a);Vl.subVectors(t,s);const d=as.dot(Vl),_=os.dot(Vl);if(_>=0&&d<=_)return e.copy(s);const g=d*c-l*_;if(g<=0&&c>=0&&_<=0)return o=c/(c-_),e.copy(n).addScaledVector(os,o);const m=u*_-d*h;if(m<=0&&h-u>=0&&d-_>=0)return Kh.subVectors(s,i),o=(h-u)/(h-u+(d-_)),e.copy(i).addScaledVector(Kh,o);const p=1/(m+g+f);return a=g*p,o=f*p,e.copy(n).addScaledVector(as,a).addScaledVector(os,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Xd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ji={h:0,s:0,l:0},oo={h:0,s:0,l:0};function Xl(r,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?r+(t-r)*6*e:e<1/2?t:e<2/3?r+(t-r)*6*(2/3-e):r}class jt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=vn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,le.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=le.workingColorSpace){return this.r=t,this.g=e,this.b=n,le.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=le.workingColorSpace){if(t=y_(t,1),e=Tn(e,0,1),n=Tn(n,0,1),e===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+e):n+e-n*e,a=2*n-s;this.r=Xl(a,s,t+1/3),this.g=Xl(a,s,t),this.b=Xl(a,s,t-1/3)}return le.toWorkingColorSpace(this,i),this}setStyle(t,e=vn){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=i[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=vn){const n=Xd[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ki(t.r),this.g=ki(t.g),this.b=ki(t.b),this}copyLinearToSRGB(t){return this.r=bs(t.r),this.g=bs(t.g),this.b=bs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=vn){return le.fromWorkingColorSpace(nn.copy(this),t),Math.round(Tn(nn.r*255,0,255))*65536+Math.round(Tn(nn.g*255,0,255))*256+Math.round(Tn(nn.b*255,0,255))}getHexString(t=vn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=le.workingColorSpace){le.fromWorkingColorSpace(nn.copy(this),e);const n=nn.r,i=nn.g,s=nn.b,a=Math.max(n,i,s),o=Math.min(n,i,s);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const h=a-o;switch(c=u<=.5?h/(a+o):h/(2-a-o),a){case n:l=(i-s)/h+(i<s?6:0);break;case i:l=(s-n)/h+2;break;case s:l=(n-i)/h+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=le.workingColorSpace){return le.fromWorkingColorSpace(nn.copy(this),e),t.r=nn.r,t.g=nn.g,t.b=nn.b,t}getStyle(t=vn){le.fromWorkingColorSpace(nn.copy(this),t);const e=nn.r,n=nn.g,i=nn.b;return t!==vn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(ji),this.setHSL(ji.h+t,ji.s+e,ji.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(ji),t.getHSL(oo);const n=Cl(ji.h,oo.h,e),i=Cl(ji.s,oo.s,e),s=Cl(ji.l,oo.l,e);return this.setHSL(n,i,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*i,this.g=s[1]*e+s[4]*n+s[7]*i,this.b=s[2]*e+s[5]*n+s[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const nn=new jt;jt.NAMES=Xd;let z_=0;class $s extends qs{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:z_++}),this.uuid=qa(),this.name="",this.blending=Es,this.side=dr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Rc,this.blendDst=Pc,this.blendEquation=Lr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new jt(0,0,0),this.blendAlpha=0,this.depthFunc=Us,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Uh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Jr,this.stencilZFail=Jr,this.stencilZPass=Jr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Es&&(n.blending=this.blending),this.side!==dr&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Rc&&(n.blendSrc=this.blendSrc),this.blendDst!==Pc&&(n.blendDst=this.blendDst),this.blendEquation!==Lr&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Us&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Uh&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Jr&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Jr&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Jr&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(e){const s=i(t.textures),a=i(t.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Ka extends $s{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new jt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ei,this.combine=bd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Be=new z,lo=new qt;class je{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Ih,this.updateRanges=[],this.gpuType=Ni,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)lo.fromBufferAttribute(this,e),lo.applyMatrix3(t),this.setXY(e,lo.x,lo.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Be.fromBufferAttribute(this,e),Be.applyMatrix3(t),this.setXYZ(e,Be.x,Be.y,Be.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Be.fromBufferAttribute(this,e),Be.applyMatrix4(t),this.setXYZ(e,Be.x,Be.y,Be.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Be.fromBufferAttribute(this,e),Be.applyNormalMatrix(t),this.setXYZ(e,Be.x,Be.y,Be.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Be.fromBufferAttribute(this,e),Be.transformDirection(t),this.setXYZ(e,Be.x,Be.y,Be.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Qs(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=yn(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Qs(e,this.array)),e}setX(t,e){return this.normalized&&(e=yn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Qs(e,this.array)),e}setY(t,e){return this.normalized&&(e=yn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Qs(e,this.array)),e}setZ(t,e){return this.normalized&&(e=yn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Qs(e,this.array)),e}setW(t,e){return this.normalized&&(e=yn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=yn(e,this.array),n=yn(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=yn(e,this.array),n=yn(n,this.array),i=yn(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,s){return t*=this.itemSize,this.normalized&&(e=yn(e,this.array),n=yn(n,this.array),i=yn(i,this.array),s=yn(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Ih&&(t.usage=this.usage),t}}class Yd extends je{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class qd extends je{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Ze extends je{constructor(t,e,n){super(new Float32Array(t),e,n)}}let k_=0;const Zn=new Ce,Yl=new Qe,ls=new z,Nn=new Za,ia=new Za,Ye=new z;class cn extends qs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:k_++}),this.uuid=qa(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(kd(t)?qd:Yd)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Kt().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Zn.makeRotationFromQuaternion(t),this.applyMatrix4(Zn),this}rotateX(t){return Zn.makeRotationX(t),this.applyMatrix4(Zn),this}rotateY(t){return Zn.makeRotationY(t),this.applyMatrix4(Zn),this}rotateZ(t){return Zn.makeRotationZ(t),this.applyMatrix4(Zn),this}translate(t,e,n){return Zn.makeTranslation(t,e,n),this.applyMatrix4(Zn),this}scale(t,e,n){return Zn.makeScale(t,e,n),this.applyMatrix4(Zn),this}lookAt(t){return Yl.lookAt(t),Yl.updateMatrix(),this.applyMatrix4(Yl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ls).negate(),this.translate(ls.x,ls.y,ls.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let i=0,s=t.length;i<s;i++){const a=t[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Ze(n,3))}else{for(let n=0,i=e.count;n<i;n++){const s=t[n];e.setXYZ(n,s.x,s.y,s.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Za);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new z(-1/0,-1/0,-1/0),new z(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const s=e[n];Nn.setFromBufferAttribute(s),this.morphTargetsRelative?(Ye.addVectors(this.boundingBox.min,Nn.min),this.boundingBox.expandByPoint(Ye),Ye.addVectors(this.boundingBox.max,Nn.max),this.boundingBox.expandByPoint(Ye)):(this.boundingBox.expandByPoint(Nn.min),this.boundingBox.expandByPoint(Nn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new xl);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new z,1/0);return}if(t){const n=this.boundingSphere.center;if(Nn.setFromBufferAttribute(t),e)for(let s=0,a=e.length;s<a;s++){const o=e[s];ia.setFromBufferAttribute(o),this.morphTargetsRelative?(Ye.addVectors(Nn.min,ia.min),Nn.expandByPoint(Ye),Ye.addVectors(Nn.max,ia.max),Nn.expandByPoint(Ye)):(Nn.expandByPoint(ia.min),Nn.expandByPoint(ia.max))}Nn.getCenter(n);let i=0;for(let s=0,a=t.count;s<a;s++)Ye.fromBufferAttribute(t,s),i=Math.max(i,n.distanceToSquared(Ye));if(e)for(let s=0,a=e.length;s<a;s++){const o=e[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)Ye.fromBufferAttribute(o,c),l&&(ls.fromBufferAttribute(t,c),Ye.add(ls)),i=Math.max(i,n.distanceToSquared(Ye))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,i=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new je(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let R=0;R<n.count;R++)o[R]=new z,l[R]=new z;const c=new z,u=new z,h=new z,f=new qt,d=new qt,_=new qt,g=new z,m=new z;function p(R,M,v){c.fromBufferAttribute(n,R),u.fromBufferAttribute(n,M),h.fromBufferAttribute(n,v),f.fromBufferAttribute(s,R),d.fromBufferAttribute(s,M),_.fromBufferAttribute(s,v),u.sub(c),h.sub(c),d.sub(f),_.sub(f);const D=1/(d.x*_.y-_.x*d.y);isFinite(D)&&(g.copy(u).multiplyScalar(_.y).addScaledVector(h,-d.y).multiplyScalar(D),m.copy(h).multiplyScalar(d.x).addScaledVector(u,-_.x).multiplyScalar(D),o[R].add(g),o[M].add(g),o[v].add(g),l[R].add(m),l[M].add(m),l[v].add(m))}let S=this.groups;S.length===0&&(S=[{start:0,count:t.count}]);for(let R=0,M=S.length;R<M;++R){const v=S[R],D=v.start,P=v.count;for(let I=D,V=D+P;I<V;I+=3)p(t.getX(I+0),t.getX(I+1),t.getX(I+2))}const E=new z,x=new z,C=new z,A=new z;function b(R){C.fromBufferAttribute(i,R),A.copy(C);const M=o[R];E.copy(M),E.sub(C.multiplyScalar(C.dot(M))).normalize(),x.crossVectors(A,M);const D=x.dot(l[R])<0?-1:1;a.setXYZW(R,E.x,E.y,E.z,D)}for(let R=0,M=S.length;R<M;++R){const v=S[R],D=v.start,P=v.count;for(let I=D,V=D+P;I<V;I+=3)b(t.getX(I+0)),b(t.getX(I+1)),b(t.getX(I+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new je(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);const i=new z,s=new z,a=new z,o=new z,l=new z,c=new z,u=new z,h=new z;if(t)for(let f=0,d=t.count;f<d;f+=3){const _=t.getX(f+0),g=t.getX(f+1),m=t.getX(f+2);i.fromBufferAttribute(e,_),s.fromBufferAttribute(e,g),a.fromBufferAttribute(e,m),u.subVectors(a,s),h.subVectors(i,s),u.cross(h),o.fromBufferAttribute(n,_),l.fromBufferAttribute(n,g),c.fromBufferAttribute(n,m),o.add(u),l.add(u),c.add(u),n.setXYZ(_,o.x,o.y,o.z),n.setXYZ(g,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,d=e.count;f<d;f+=3)i.fromBufferAttribute(e,f+0),s.fromBufferAttribute(e,f+1),a.fromBufferAttribute(e,f+2),u.subVectors(a,s),h.subVectors(i,s),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ye.fromBufferAttribute(t,e),Ye.normalize(),t.setXYZ(e,Ye.x,Ye.y,Ye.z)}toNonIndexed(){function t(o,l){const c=o.array,u=o.itemSize,h=o.normalized,f=new c.constructor(l.length*u);let d=0,_=0;for(let g=0,m=l.length;g<m;g++){o.isInterleavedBufferAttribute?d=l[g]*o.data.stride+o.offset:d=l[g]*u;for(let p=0;p<u;p++)f[_++]=c[d++]}return new je(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new cn,n=this.index.array,i=this.attributes;for(const o in i){const l=i[o],c=t(l,n);e.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let u=0,h=c.length;u<h;u++){const f=c[u],d=t(f,n);l.push(d)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){const d=c[h];u.push(d.toJSON(t.data))}u.length>0&&(i[l]=u,s=!0)}s&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const i=t.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(e))}const s=t.morphAttributes;for(const c in s){const u=[],h=s[c];for(let f=0,d=h.length;f<d;f++)u.push(h[f].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,u=a.length;c<u;c++){const h=a[c];this.addGroup(h.start,h.count,h.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const jh=new Ce,Sr=new Gd,co=new xl,Jh=new z,uo=new z,ho=new z,fo=new z,ql=new z,po=new z,Qh=new z,mo=new z;class wn extends Qe{constructor(t=new cn,e=new Ka){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const o=this.morphTargetInfluences;if(s&&o){po.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=o[l],h=s[l];u!==0&&(ql.fromBufferAttribute(h,t),a?po.addScaledVector(ql,u):po.addScaledVector(ql.sub(e),u))}e.add(po)}return e}raycast(t,e){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),co.copy(n.boundingSphere),co.applyMatrix4(s),Sr.copy(t.ray).recast(t.near),!(co.containsPoint(Sr.origin)===!1&&(Sr.intersectSphere(co,Jh)===null||Sr.origin.distanceToSquared(Jh)>(t.far-t.near)**2))&&(jh.copy(s).invert(),Sr.copy(t.ray).applyMatrix4(jh),!(n.boundingBox!==null&&Sr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Sr)))}_computeIntersections(t,e,n){let i;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,f=s.groups,d=s.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,g=f.length;_<g;_++){const m=f[_],p=a[m.materialIndex],S=Math.max(m.start,d.start),E=Math.min(o.count,Math.min(m.start+m.count,d.start+d.count));for(let x=S,C=E;x<C;x+=3){const A=o.getX(x),b=o.getX(x+1),R=o.getX(x+2);i=_o(this,p,t,n,c,u,h,A,b,R),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const _=Math.max(0,d.start),g=Math.min(o.count,d.start+d.count);for(let m=_,p=g;m<p;m+=3){const S=o.getX(m),E=o.getX(m+1),x=o.getX(m+2);i=_o(this,a,t,n,c,u,h,S,E,x),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let _=0,g=f.length;_<g;_++){const m=f[_],p=a[m.materialIndex],S=Math.max(m.start,d.start),E=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let x=S,C=E;x<C;x+=3){const A=x,b=x+1,R=x+2;i=_o(this,p,t,n,c,u,h,A,b,R),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const _=Math.max(0,d.start),g=Math.min(l.count,d.start+d.count);for(let m=_,p=g;m<p;m+=3){const S=m,E=m+1,x=m+2;i=_o(this,a,t,n,c,u,h,S,E,x),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}}}function V_(r,t,e,n,i,s,a,o){let l;if(t.side===Mn?l=n.intersectTriangle(a,s,i,!0,o):l=n.intersectTriangle(i,s,a,t.side===dr,o),l===null)return null;mo.copy(o),mo.applyMatrix4(r.matrixWorld);const c=e.ray.origin.distanceTo(mo);return c<e.near||c>e.far?null:{distance:c,point:mo.clone(),object:r}}function _o(r,t,e,n,i,s,a,o,l,c){r.getVertexPosition(o,uo),r.getVertexPosition(l,ho),r.getVertexPosition(c,fo);const u=V_(r,t,e,n,uo,ho,fo,Qh);if(u){const h=new z;li.getBarycoord(Qh,uo,ho,fo,h),i&&(u.uv=li.getInterpolatedAttribute(i,o,l,c,h,new qt)),s&&(u.uv1=li.getInterpolatedAttribute(s,o,l,c,h,new qt)),a&&(u.normal=li.getInterpolatedAttribute(a,o,l,c,h,new z),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const f={a:o,b:l,c,normal:new z,materialIndex:0};li.getNormal(uo,ho,fo,f.normal),u.face=f,u.barycoord=h}return u}class Zs extends cn{constructor(t=1,e=1,n=1,i=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:s,depthSegments:a};const o=this;i=Math.floor(i),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],u=[],h=[];let f=0,d=0;_("z","y","x",-1,-1,n,e,t,a,s,0),_("z","y","x",1,-1,n,e,-t,a,s,1),_("x","z","y",1,1,t,n,e,i,a,2),_("x","z","y",1,-1,t,n,-e,i,a,3),_("x","y","z",1,-1,t,e,n,i,s,4),_("x","y","z",-1,-1,t,e,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new Ze(c,3)),this.setAttribute("normal",new Ze(u,3)),this.setAttribute("uv",new Ze(h,2));function _(g,m,p,S,E,x,C,A,b,R,M){const v=x/b,D=C/R,P=x/2,I=C/2,V=A/2,q=b+1,H=R+1;let Y=0,B=0;const et=new z;for(let L=0;L<H;L++){const ot=L*D-I;for(let Ct=0;Ct<q;Ct++){const Vt=Ct*v-P;et[g]=Vt*S,et[m]=ot*E,et[p]=V,c.push(et.x,et.y,et.z),et[g]=0,et[m]=0,et[p]=A>0?1:-1,u.push(et.x,et.y,et.z),h.push(Ct/b),h.push(1-L/R),Y+=1}}for(let L=0;L<R;L++)for(let ot=0;ot<b;ot++){const Ct=f+ot+q*L,Vt=f+ot+q*(L+1),$=f+(ot+1)+q*(L+1),nt=f+(ot+1)+q*L;l.push(Ct,Vt,nt),l.push(Vt,$,nt),B+=6}o.addGroup(d,B,M),d+=B,f+=Y}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Zs(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Bs(r){const t={};for(const e in r){t[e]={};for(const n in r[e]){const i=r[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function pn(r){const t={};for(let e=0;e<r.length;e++){const n=Bs(r[e]);for(const i in n)t[i]=n[i]}return t}function H_(r){const t=[];for(let e=0;e<r.length;e++)t.push(r[e].clone());return t}function $d(r){const t=r.getRenderTarget();return t===null?r.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:le.workingColorSpace}const sl={clone:Bs,merge:pn};var G_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,W_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ln extends $s{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=G_,this.fragmentShader=W_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Bs(t.uniforms),this.uniformsGroups=H_(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?e.uniforms[i]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[i]={type:"m4",value:a.toArray()}:e.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Zd extends Qe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ce,this.projectionMatrix=new Ce,this.projectionMatrixInverse=new Ce,this.coordinateSystem=Fi}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ji=new z,tf=new qt,ef=new qt;class zn extends Zd{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=du*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Al*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return du*2*Math.atan(Math.tan(Al*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Ji.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Ji.x,Ji.y).multiplyScalar(-t/Ji.z),Ji.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ji.x,Ji.y).multiplyScalar(-t/Ji.z)}getViewSize(t,e){return this.getViewBounds(t,tf,ef),e.subVectors(ef,tf)}setViewOffset(t,e,n,i,s,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Al*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,s=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*i/l,e-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(s+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const cs=-90,us=1;class X_ extends Qe{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new zn(cs,us,t,e);i.layers=this.layers,this.add(i);const s=new zn(cs,us,t,e);s.layers=this.layers,this.add(s);const a=new zn(cs,us,t,e);a.layers=this.layers,this.add(a);const o=new zn(cs,us,t,e);o.layers=this.layers,this.add(o);const l=new zn(cs,us,t,e);l.layers=this.layers,this.add(l);const c=new zn(cs,us,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,s,a,o,l]=e;for(const c of e)this.remove(c);if(t===Fi)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===il)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,u]=this.children,h=t.getRenderTarget(),f=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),_=t.xr.enabled;t.xr.enabled=!1;const g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,s),t.setRenderTarget(n,1,i),t.render(e,a),t.setRenderTarget(n,2,i),t.render(e,o),t.setRenderTarget(n,3,i),t.render(e,l),t.setRenderTarget(n,4,i),t.render(e,c),n.texture.generateMipmaps=g,t.setRenderTarget(n,5,i),t.render(e,u),t.setRenderTarget(h,f,d),t.xr.enabled=_,n.texture.needsPMREMUpdate=!0}}class Kd extends Sn{constructor(t,e,n,i,s,a,o,l,c,u){t=t!==void 0?t:[],e=e!==void 0?e:Is,super(t,e,n,i,s,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Y_ extends fi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new Kd(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:ci}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new Zs(5,5,5),s=new ln({name:"CubemapFromEquirect",uniforms:Bs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Mn,blending:Bi});s.uniforms.tEquirect.value=e;const a=new wn(i,s),o=e.minFilter;return e.minFilter===Nr&&(e.minFilter=ci),new X_(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,i){const s=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,i);t.setRenderTarget(s)}}const $l=new z,q_=new z,$_=new Kt;class Ar{constructor(t=new z(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=$l.subVectors(n,e).cross(q_.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta($l),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||$_.getNormalMatrix(t),i=this.coplanarPoint($l).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const yr=new xl,go=new z;class $u{constructor(t=new Ar,e=new Ar,n=new Ar,i=new Ar,s=new Ar,a=new Ar){this.planes=[t,e,n,i,s,a]}set(t,e,n,i,s,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(i),o[4].copy(s),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Fi){const n=this.planes,i=t.elements,s=i[0],a=i[1],o=i[2],l=i[3],c=i[4],u=i[5],h=i[6],f=i[7],d=i[8],_=i[9],g=i[10],m=i[11],p=i[12],S=i[13],E=i[14],x=i[15];if(n[0].setComponents(l-s,f-c,m-d,x-p).normalize(),n[1].setComponents(l+s,f+c,m+d,x+p).normalize(),n[2].setComponents(l+a,f+u,m+_,x+S).normalize(),n[3].setComponents(l-a,f-u,m-_,x-S).normalize(),n[4].setComponents(l-o,f-h,m-g,x-E).normalize(),e===Fi)n[5].setComponents(l+o,f+h,m+g,x+E).normalize();else if(e===il)n[5].setComponents(o,h,g,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),yr.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),yr.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(yr)}intersectsSprite(t){return yr.center.set(0,0,0),yr.radius=.7071067811865476,yr.applyMatrix4(t.matrixWorld),this.intersectsSphere(yr)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(go.x=i.normal.x>0?t.max.x:t.min.x,go.y=i.normal.y>0?t.max.y:t.min.y,go.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(go)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function jd(){let r=null,t=!1,e=null,n=null;function i(s,a){e(s,a),n=r.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=r.requestAnimationFrame(i),t=!0)},stop:function(){r.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){r=s}}}function Z_(r){const t=new WeakMap;function e(o,l){const c=o.array,u=o.usage,h=c.byteLength,f=r.createBuffer();r.bindBuffer(l,f),r.bufferData(l,c,u),o.onUploadCallback();let d;if(c instanceof Float32Array)d=r.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?d=r.HALF_FLOAT:d=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=r.SHORT;else if(c instanceof Uint32Array)d=r.UNSIGNED_INT;else if(c instanceof Int32Array)d=r.INT;else if(c instanceof Int8Array)d=r.BYTE;else if(c instanceof Uint8Array)d=r.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:h}}function n(o,l,c){const u=l.array,h=l.updateRanges;if(r.bindBuffer(c,o),h.length===0)r.bufferSubData(c,0,u);else{h.sort((d,_)=>d.start-_.start);let f=0;for(let d=1;d<h.length;d++){const _=h[f],g=h[d];g.start<=_.start+_.count+1?_.count=Math.max(_.count,g.start+g.count-_.start):(++f,h[f]=g)}h.length=f+1;for(let d=0,_=h.length;d<_;d++){const g=h[d];r.bufferSubData(c,g.start*u.BYTES_PER_ELEMENT,u,g.start,g.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(r.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=t.get(o);(!u||u.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:i,remove:s,update:a}}class Ml extends cn{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const s=t/2,a=e/2,o=Math.floor(n),l=Math.floor(i),c=o+1,u=l+1,h=t/o,f=e/l,d=[],_=[],g=[],m=[];for(let p=0;p<u;p++){const S=p*f-a;for(let E=0;E<c;E++){const x=E*h-s;_.push(x,-S,0),g.push(0,0,1),m.push(E/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let S=0;S<o;S++){const E=S+c*p,x=S+c*(p+1),C=S+1+c*(p+1),A=S+1+c*p;d.push(E,x,A),d.push(x,C,A)}this.setIndex(d),this.setAttribute("position",new Ze(_,3)),this.setAttribute("normal",new Ze(g,3)),this.setAttribute("uv",new Ze(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ml(t.width,t.height,t.widthSegments,t.heightSegments)}}var K_=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,j_=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,J_=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Q_=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,tg=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,eg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ng=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,ig=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,rg=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,sg=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,ag=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,og=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,lg=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,cg=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,ug=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,hg=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,fg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,dg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,pg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,mg=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,_g=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,gg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,vg=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,xg=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Mg=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Sg=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,yg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Eg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Tg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,bg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,wg="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ag=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Cg=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Rg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Pg=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Dg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Lg=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Ug=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ig=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ng=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Fg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Og=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Bg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,zg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,kg=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Vg=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Hg=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Gg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Wg=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Xg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Yg=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,qg=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,$g=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Zg=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Kg=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,jg=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Jg=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Qg=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,t0=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,e0=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,n0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,i0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,r0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,s0=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,a0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,o0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,l0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,c0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,u0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,h0=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,f0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,d0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,p0=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,m0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,g0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,v0=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,x0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,M0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,S0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,y0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,E0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,T0=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,b0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,w0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,A0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,C0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,R0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,P0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,D0=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,L0=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,U0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,I0=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,N0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,F0=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,O0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,B0=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,z0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,k0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,V0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,H0=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,G0=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,W0=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,X0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Y0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,q0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,$0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Z0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,K0=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,j0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,J0=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Q0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,tv=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ev=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,nv=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,iv=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,rv=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,sv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,av=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ov=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,lv=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,cv=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,uv=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,hv=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,fv=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,dv=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,pv=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,mv=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,_v=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,gv=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,vv=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xv=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Mv=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Sv=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,yv=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ev=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Tv=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,bv=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,wv=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Av=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Cv=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Qt={alphahash_fragment:K_,alphahash_pars_fragment:j_,alphamap_fragment:J_,alphamap_pars_fragment:Q_,alphatest_fragment:tg,alphatest_pars_fragment:eg,aomap_fragment:ng,aomap_pars_fragment:ig,batching_pars_vertex:rg,batching_vertex:sg,begin_vertex:ag,beginnormal_vertex:og,bsdfs:lg,iridescence_fragment:cg,bumpmap_pars_fragment:ug,clipping_planes_fragment:hg,clipping_planes_pars_fragment:fg,clipping_planes_pars_vertex:dg,clipping_planes_vertex:pg,color_fragment:mg,color_pars_fragment:_g,color_pars_vertex:gg,color_vertex:vg,common:xg,cube_uv_reflection_fragment:Mg,defaultnormal_vertex:Sg,displacementmap_pars_vertex:yg,displacementmap_vertex:Eg,emissivemap_fragment:Tg,emissivemap_pars_fragment:bg,colorspace_fragment:wg,colorspace_pars_fragment:Ag,envmap_fragment:Cg,envmap_common_pars_fragment:Rg,envmap_pars_fragment:Pg,envmap_pars_vertex:Dg,envmap_physical_pars_fragment:Hg,envmap_vertex:Lg,fog_vertex:Ug,fog_pars_vertex:Ig,fog_fragment:Ng,fog_pars_fragment:Fg,gradientmap_pars_fragment:Og,lightmap_pars_fragment:Bg,lights_lambert_fragment:zg,lights_lambert_pars_fragment:kg,lights_pars_begin:Vg,lights_toon_fragment:Gg,lights_toon_pars_fragment:Wg,lights_phong_fragment:Xg,lights_phong_pars_fragment:Yg,lights_physical_fragment:qg,lights_physical_pars_fragment:$g,lights_fragment_begin:Zg,lights_fragment_maps:Kg,lights_fragment_end:jg,logdepthbuf_fragment:Jg,logdepthbuf_pars_fragment:Qg,logdepthbuf_pars_vertex:t0,logdepthbuf_vertex:e0,map_fragment:n0,map_pars_fragment:i0,map_particle_fragment:r0,map_particle_pars_fragment:s0,metalnessmap_fragment:a0,metalnessmap_pars_fragment:o0,morphinstance_vertex:l0,morphcolor_vertex:c0,morphnormal_vertex:u0,morphtarget_pars_vertex:h0,morphtarget_vertex:f0,normal_fragment_begin:d0,normal_fragment_maps:p0,normal_pars_fragment:m0,normal_pars_vertex:_0,normal_vertex:g0,normalmap_pars_fragment:v0,clearcoat_normal_fragment_begin:x0,clearcoat_normal_fragment_maps:M0,clearcoat_pars_fragment:S0,iridescence_pars_fragment:y0,opaque_fragment:E0,packing:T0,premultiplied_alpha_fragment:b0,project_vertex:w0,dithering_fragment:A0,dithering_pars_fragment:C0,roughnessmap_fragment:R0,roughnessmap_pars_fragment:P0,shadowmap_pars_fragment:D0,shadowmap_pars_vertex:L0,shadowmap_vertex:U0,shadowmask_pars_fragment:I0,skinbase_vertex:N0,skinning_pars_vertex:F0,skinning_vertex:O0,skinnormal_vertex:B0,specularmap_fragment:z0,specularmap_pars_fragment:k0,tonemapping_fragment:V0,tonemapping_pars_fragment:H0,transmission_fragment:G0,transmission_pars_fragment:W0,uv_pars_fragment:X0,uv_pars_vertex:Y0,uv_vertex:q0,worldpos_vertex:$0,background_vert:Z0,background_frag:K0,backgroundCube_vert:j0,backgroundCube_frag:J0,cube_vert:Q0,cube_frag:tv,depth_vert:ev,depth_frag:nv,distanceRGBA_vert:iv,distanceRGBA_frag:rv,equirect_vert:sv,equirect_frag:av,linedashed_vert:ov,linedashed_frag:lv,meshbasic_vert:cv,meshbasic_frag:uv,meshlambert_vert:hv,meshlambert_frag:fv,meshmatcap_vert:dv,meshmatcap_frag:pv,meshnormal_vert:mv,meshnormal_frag:_v,meshphong_vert:gv,meshphong_frag:vv,meshphysical_vert:xv,meshphysical_frag:Mv,meshtoon_vert:Sv,meshtoon_frag:yv,points_vert:Ev,points_frag:Tv,shadow_vert:bv,shadow_frag:wv,sprite_vert:Av,sprite_frag:Cv},vt={common:{diffuse:{value:new jt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Kt},alphaMap:{value:null},alphaMapTransform:{value:new Kt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Kt}},envmap:{envMap:{value:null},envMapRotation:{value:new Kt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Kt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Kt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Kt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Kt},normalScale:{value:new qt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Kt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Kt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Kt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Kt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new jt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new jt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Kt},alphaTest:{value:0},uvTransform:{value:new Kt}},sprite:{diffuse:{value:new jt(16777215)},opacity:{value:1},center:{value:new qt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Kt},alphaMap:{value:null},alphaMapTransform:{value:new Kt},alphaTest:{value:0}}},_i={basic:{uniforms:pn([vt.common,vt.specularmap,vt.envmap,vt.aomap,vt.lightmap,vt.fog]),vertexShader:Qt.meshbasic_vert,fragmentShader:Qt.meshbasic_frag},lambert:{uniforms:pn([vt.common,vt.specularmap,vt.envmap,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.fog,vt.lights,{emissive:{value:new jt(0)}}]),vertexShader:Qt.meshlambert_vert,fragmentShader:Qt.meshlambert_frag},phong:{uniforms:pn([vt.common,vt.specularmap,vt.envmap,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.fog,vt.lights,{emissive:{value:new jt(0)},specular:{value:new jt(1118481)},shininess:{value:30}}]),vertexShader:Qt.meshphong_vert,fragmentShader:Qt.meshphong_frag},standard:{uniforms:pn([vt.common,vt.envmap,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.roughnessmap,vt.metalnessmap,vt.fog,vt.lights,{emissive:{value:new jt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Qt.meshphysical_vert,fragmentShader:Qt.meshphysical_frag},toon:{uniforms:pn([vt.common,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.gradientmap,vt.fog,vt.lights,{emissive:{value:new jt(0)}}]),vertexShader:Qt.meshtoon_vert,fragmentShader:Qt.meshtoon_frag},matcap:{uniforms:pn([vt.common,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.fog,{matcap:{value:null}}]),vertexShader:Qt.meshmatcap_vert,fragmentShader:Qt.meshmatcap_frag},points:{uniforms:pn([vt.points,vt.fog]),vertexShader:Qt.points_vert,fragmentShader:Qt.points_frag},dashed:{uniforms:pn([vt.common,vt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Qt.linedashed_vert,fragmentShader:Qt.linedashed_frag},depth:{uniforms:pn([vt.common,vt.displacementmap]),vertexShader:Qt.depth_vert,fragmentShader:Qt.depth_frag},normal:{uniforms:pn([vt.common,vt.bumpmap,vt.normalmap,vt.displacementmap,{opacity:{value:1}}]),vertexShader:Qt.meshnormal_vert,fragmentShader:Qt.meshnormal_frag},sprite:{uniforms:pn([vt.sprite,vt.fog]),vertexShader:Qt.sprite_vert,fragmentShader:Qt.sprite_frag},background:{uniforms:{uvTransform:{value:new Kt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Qt.background_vert,fragmentShader:Qt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Kt}},vertexShader:Qt.backgroundCube_vert,fragmentShader:Qt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Qt.cube_vert,fragmentShader:Qt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Qt.equirect_vert,fragmentShader:Qt.equirect_frag},distanceRGBA:{uniforms:pn([vt.common,vt.displacementmap,{referencePosition:{value:new z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Qt.distanceRGBA_vert,fragmentShader:Qt.distanceRGBA_frag},shadow:{uniforms:pn([vt.lights,vt.fog,{color:{value:new jt(0)},opacity:{value:1}}]),vertexShader:Qt.shadow_vert,fragmentShader:Qt.shadow_frag}};_i.physical={uniforms:pn([_i.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Kt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Kt},clearcoatNormalScale:{value:new qt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Kt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Kt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Kt},sheen:{value:0},sheenColor:{value:new jt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Kt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Kt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Kt},transmissionSamplerSize:{value:new qt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Kt},attenuationDistance:{value:0},attenuationColor:{value:new jt(0)},specularColor:{value:new jt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Kt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Kt},anisotropyVector:{value:new qt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Kt}}]),vertexShader:Qt.meshphysical_vert,fragmentShader:Qt.meshphysical_frag};const vo={r:0,b:0,g:0},Er=new Ei,Rv=new Ce;function Pv(r,t,e,n,i,s,a){const o=new jt(0);let l=s===!0?0:1,c,u,h=null,f=0,d=null;function _(S){let E=S.isScene===!0?S.background:null;return E&&E.isTexture&&(E=(S.backgroundBlurriness>0?e:t).get(E)),E}function g(S){let E=!1;const x=_(S);x===null?p(o,l):x&&x.isColor&&(p(x,1),E=!0);const C=r.xr.getEnvironmentBlendMode();C==="additive"?n.buffers.color.setClear(0,0,0,1,a):C==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(r.autoClear||E)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function m(S,E){const x=_(E);x&&(x.isCubeTexture||x.mapping===gl)?(u===void 0&&(u=new wn(new Zs(1,1,1),new ln({name:"BackgroundCubeMaterial",uniforms:Bs(_i.backgroundCube.uniforms),vertexShader:_i.backgroundCube.vertexShader,fragmentShader:_i.backgroundCube.fragmentShader,side:Mn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(C,A,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),Er.copy(E.backgroundRotation),Er.x*=-1,Er.y*=-1,Er.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Er.y*=-1,Er.z*=-1),u.material.uniforms.envMap.value=x,u.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Rv.makeRotationFromEuler(Er)),u.material.toneMapped=le.getTransfer(x.colorSpace)!==ge,(h!==x||f!==x.version||d!==r.toneMapping)&&(u.material.needsUpdate=!0,h=x,f=x.version,d=r.toneMapping),u.layers.enableAll(),S.unshift(u,u.geometry,u.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new wn(new Ml(2,2),new ln({name:"BackgroundMaterial",uniforms:Bs(_i.background.uniforms),vertexShader:_i.background.vertexShader,fragmentShader:_i.background.fragmentShader,side:dr,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,c.material.toneMapped=le.getTransfer(x.colorSpace)!==ge,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(h!==x||f!==x.version||d!==r.toneMapping)&&(c.material.needsUpdate=!0,h=x,f=x.version,d=r.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null))}function p(S,E){S.getRGB(vo,$d(r)),n.buffers.color.setClear(vo.r,vo.g,vo.b,E,a)}return{getClearColor:function(){return o},setClearColor:function(S,E=1){o.set(S),l=E,p(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(S){l=S,p(o,l)},render:g,addToRenderList:m}}function Dv(r,t){const e=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=f(null);let s=i,a=!1;function o(v,D,P,I,V){let q=!1;const H=h(I,P,D);s!==H&&(s=H,c(s.object)),q=d(v,I,P,V),q&&_(v,I,P,V),V!==null&&t.update(V,r.ELEMENT_ARRAY_BUFFER),(q||a)&&(a=!1,x(v,D,P,I),V!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(V).buffer))}function l(){return r.createVertexArray()}function c(v){return r.bindVertexArray(v)}function u(v){return r.deleteVertexArray(v)}function h(v,D,P){const I=P.wireframe===!0;let V=n[v.id];V===void 0&&(V={},n[v.id]=V);let q=V[D.id];q===void 0&&(q={},V[D.id]=q);let H=q[I];return H===void 0&&(H=f(l()),q[I]=H),H}function f(v){const D=[],P=[],I=[];for(let V=0;V<e;V++)D[V]=0,P[V]=0,I[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:P,attributeDivisors:I,object:v,attributes:{},index:null}}function d(v,D,P,I){const V=s.attributes,q=D.attributes;let H=0;const Y=P.getAttributes();for(const B in Y)if(Y[B].location>=0){const L=V[B];let ot=q[B];if(ot===void 0&&(B==="instanceMatrix"&&v.instanceMatrix&&(ot=v.instanceMatrix),B==="instanceColor"&&v.instanceColor&&(ot=v.instanceColor)),L===void 0||L.attribute!==ot||ot&&L.data!==ot.data)return!0;H++}return s.attributesNum!==H||s.index!==I}function _(v,D,P,I){const V={},q=D.attributes;let H=0;const Y=P.getAttributes();for(const B in Y)if(Y[B].location>=0){let L=q[B];L===void 0&&(B==="instanceMatrix"&&v.instanceMatrix&&(L=v.instanceMatrix),B==="instanceColor"&&v.instanceColor&&(L=v.instanceColor));const ot={};ot.attribute=L,L&&L.data&&(ot.data=L.data),V[B]=ot,H++}s.attributes=V,s.attributesNum=H,s.index=I}function g(){const v=s.newAttributes;for(let D=0,P=v.length;D<P;D++)v[D]=0}function m(v){p(v,0)}function p(v,D){const P=s.newAttributes,I=s.enabledAttributes,V=s.attributeDivisors;P[v]=1,I[v]===0&&(r.enableVertexAttribArray(v),I[v]=1),V[v]!==D&&(r.vertexAttribDivisor(v,D),V[v]=D)}function S(){const v=s.newAttributes,D=s.enabledAttributes;for(let P=0,I=D.length;P<I;P++)D[P]!==v[P]&&(r.disableVertexAttribArray(P),D[P]=0)}function E(v,D,P,I,V,q,H){H===!0?r.vertexAttribIPointer(v,D,P,V,q):r.vertexAttribPointer(v,D,P,I,V,q)}function x(v,D,P,I){g();const V=I.attributes,q=P.getAttributes(),H=D.defaultAttributeValues;for(const Y in q){const B=q[Y];if(B.location>=0){let et=V[Y];if(et===void 0&&(Y==="instanceMatrix"&&v.instanceMatrix&&(et=v.instanceMatrix),Y==="instanceColor"&&v.instanceColor&&(et=v.instanceColor)),et!==void 0){const L=et.normalized,ot=et.itemSize,Ct=t.get(et);if(Ct===void 0)continue;const Vt=Ct.buffer,$=Ct.type,nt=Ct.bytesPerElement,_t=$===r.INT||$===r.UNSIGNED_INT||et.gpuType===Hu;if(et.isInterleavedBufferAttribute){const it=et.data,yt=it.stride,wt=et.offset;if(it.isInstancedInterleavedBuffer){for(let Ht=0;Ht<B.locationSize;Ht++)p(B.location+Ht,it.meshPerAttribute);v.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=it.meshPerAttribute*it.count)}else for(let Ht=0;Ht<B.locationSize;Ht++)m(B.location+Ht);r.bindBuffer(r.ARRAY_BUFFER,Vt);for(let Ht=0;Ht<B.locationSize;Ht++)E(B.location+Ht,ot/B.locationSize,$,L,yt*nt,(wt+ot/B.locationSize*Ht)*nt,_t)}else{if(et.isInstancedBufferAttribute){for(let it=0;it<B.locationSize;it++)p(B.location+it,et.meshPerAttribute);v.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=et.meshPerAttribute*et.count)}else for(let it=0;it<B.locationSize;it++)m(B.location+it);r.bindBuffer(r.ARRAY_BUFFER,Vt);for(let it=0;it<B.locationSize;it++)E(B.location+it,ot/B.locationSize,$,L,ot*nt,ot/B.locationSize*it*nt,_t)}}else if(H!==void 0){const L=H[Y];if(L!==void 0)switch(L.length){case 2:r.vertexAttrib2fv(B.location,L);break;case 3:r.vertexAttrib3fv(B.location,L);break;case 4:r.vertexAttrib4fv(B.location,L);break;default:r.vertexAttrib1fv(B.location,L)}}}}S()}function C(){R();for(const v in n){const D=n[v];for(const P in D){const I=D[P];for(const V in I)u(I[V].object),delete I[V];delete D[P]}delete n[v]}}function A(v){if(n[v.id]===void 0)return;const D=n[v.id];for(const P in D){const I=D[P];for(const V in I)u(I[V].object),delete I[V];delete D[P]}delete n[v.id]}function b(v){for(const D in n){const P=n[D];if(P[v.id]===void 0)continue;const I=P[v.id];for(const V in I)u(I[V].object),delete I[V];delete P[v.id]}}function R(){M(),a=!0,s!==i&&(s=i,c(s.object))}function M(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:R,resetDefaultState:M,dispose:C,releaseStatesOfGeometry:A,releaseStatesOfProgram:b,initAttributes:g,enableAttribute:m,disableUnusedAttributes:S}}function Lv(r,t,e){let n;function i(c){n=c}function s(c,u){r.drawArrays(n,c,u),e.update(u,n,1)}function a(c,u,h){h!==0&&(r.drawArraysInstanced(n,c,u,h),e.update(u,n,h))}function o(c,u,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,h);let d=0;for(let _=0;_<h;_++)d+=u[_];e.update(d,n,1)}function l(c,u,h,f){if(h===0)return;const d=t.get("WEBGL_multi_draw");if(d===null)for(let _=0;_<c.length;_++)a(c[_],u[_],f[_]);else{d.multiDrawArraysInstancedWEBGL(n,c,0,u,0,f,0,h);let _=0;for(let g=0;g<h;g++)_+=u[g]*f[g];e.update(_,n,1)}}this.setMode=i,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function Uv(r,t,e,n){let i;function s(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const b=t.get("EXT_texture_filter_anisotropic");i=r.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(b){return!(b!==ui&&n.convert(b)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(b){const R=b===zi&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(b!==Hi&&n.convert(b)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&b!==Ni&&!R)}function l(b){if(b==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=e.logarithmicDepthBuffer===!0,f=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),d=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),_=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=r.getParameter(r.MAX_TEXTURE_SIZE),m=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),p=r.getParameter(r.MAX_VERTEX_ATTRIBS),S=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),E=r.getParameter(r.MAX_VARYING_VECTORS),x=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),C=_>0,A=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:h,reverseDepthBuffer:f,maxTextures:d,maxVertexTextures:_,maxTextureSize:g,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:S,maxVaryings:E,maxFragmentUniforms:x,vertexTextures:C,maxSamples:A}}function Iv(r){const t=this;let e=null,n=0,i=!1,s=!1;const a=new Ar,o=new Kt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const d=h.length!==0||f||n!==0||i;return i=f,n=h.length,d},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,f){e=u(h,f,0)},this.setState=function(h,f,d){const _=h.clippingPlanes,g=h.clipIntersection,m=h.clipShadows,p=r.get(h);if(!i||_===null||_.length===0||s&&!m)s?u(null):c();else{const S=s?0:n,E=S*4;let x=p.clippingState||null;l.value=x,x=u(_,f,E,d);for(let C=0;C!==E;++C)x[C]=e[C];p.clippingState=x,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(h,f,d,_){const g=h!==null?h.length:0;let m=null;if(g!==0){if(m=l.value,_!==!0||m===null){const p=d+g*4,S=f.matrixWorldInverse;o.getNormalMatrix(S),(m===null||m.length<p)&&(m=new Float32Array(p));for(let E=0,x=d;E!==g;++E,x+=4)a.copy(h[E]).applyMatrix4(S,o),a.normal.toArray(m,x),m[x+3]=a.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=g,t.numIntersection=0,m}}function Nv(r){let t=new WeakMap;function e(a,o){return o===nl?a.mapping=Is:o===Bc&&(a.mapping=Ns),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===nl||o===Bc)if(t.has(a)){const l=t.get(a).texture;return e(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new Y_(l.height);return c.fromEquirectangularTexture(r,a),t.set(a,c),a.addEventListener("dispose",i),e(c.texture,a.mapping)}else return null}}return a}function i(a){const o=a.target;o.removeEventListener("dispose",i);const l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}class Zu extends Zd{constructor(t=-1,e=1,n=1,i=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-t,a=n+t,o=i+e,l=i-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const xs=4,nf=[.125,.215,.35,.446,.526,.582],Ur=20,Zl=new Zu,rf=new jt;let Kl=null,jl=0,Jl=0,Ql=!1;const Cr=(1+Math.sqrt(5))/2,hs=1/Cr,sf=[new z(-Cr,hs,0),new z(Cr,hs,0),new z(-hs,0,Cr),new z(hs,0,Cr),new z(0,Cr,-hs),new z(0,Cr,hs),new z(-1,1,-1),new z(1,1,-1),new z(-1,1,1),new z(1,1,1)];class af{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){Kl=this._renderer.getRenderTarget(),jl=this._renderer.getActiveCubeFace(),Jl=this._renderer.getActiveMipmapLevel(),Ql=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,n,i,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=cf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=lf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Kl,jl,Jl),this._renderer.xr.enabled=Ql,t.scissorTest=!1,xo(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Is||t.mapping===Ns?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Kl=this._renderer.getRenderTarget(),jl=this._renderer.getActiveCubeFace(),Jl=this._renderer.getActiveMipmapLevel(),Ql=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:ci,minFilter:ci,generateMipmaps:!1,type:zi,format:ui,colorSpace:Ys,depthBuffer:!1},i=of(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=of(t,e,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Fv(s)),this._blurMaterial=Ov(s,t,e)}return i}_compileMaterial(t){const e=new wn(this._lodPlanes[0],t);this._renderer.compile(e,Zl)}_sceneToCubeUV(t,e,n,i){const o=new zn(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(rf),u.toneMapping=cr,u.autoClear=!1;const d=new Ka({name:"PMREM.Background",side:Mn,depthWrite:!1,depthTest:!1}),_=new wn(new Zs,d);let g=!1;const m=t.background;m?m.isColor&&(d.color.copy(m),t.background=null,g=!0):(d.color.copy(rf),g=!0);for(let p=0;p<6;p++){const S=p%3;S===0?(o.up.set(0,l[p],0),o.lookAt(c[p],0,0)):S===1?(o.up.set(0,0,l[p]),o.lookAt(0,c[p],0)):(o.up.set(0,l[p],0),o.lookAt(0,0,c[p]));const E=this._cubeSize;xo(i,S*E,p>2?E:0,E,E),u.setRenderTarget(i),g&&u.render(_,o),u.render(t,o)}_.geometry.dispose(),_.material.dispose(),u.toneMapping=f,u.autoClear=h,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===Is||t.mapping===Ns;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=cf()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=lf());const s=i?this._cubemapMaterial:this._equirectMaterial,a=new wn(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=t;const l=this._cubeSize;xo(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,Zl)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const i=this._lodPlanes.length;for(let s=1;s<i;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=sf[(i-s-1)%sf.length];this._blur(t,s-1,s,a,o)}e.autoClear=n}_blur(t,e,n,i,s){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,i,"latitudinal",s),this._halfBlur(a,t,n,n,i,"longitudinal",s)}_halfBlur(t,e,n,i,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new wn(this._lodPlanes[i],c),f=c.uniforms,d=this._sizeLods[n]-1,_=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*Ur-1),g=s/_,m=isFinite(s)?1+Math.floor(u*g):Ur;m>Ur&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ur}`);const p=[];let S=0;for(let b=0;b<Ur;++b){const R=b/g,M=Math.exp(-R*R/2);p.push(M),b===0?S+=M:b<m&&(S+=2*M)}for(let b=0;b<p.length;b++)p[b]=p[b]/S;f.envMap.value=t.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:E}=this;f.dTheta.value=_,f.mipInt.value=E-n;const x=this._sizeLods[i],C=3*x*(i>E-xs?i-E+xs:0),A=4*(this._cubeSize-x);xo(e,C,A,3*x,2*x),l.setRenderTarget(e),l.render(h,Zl)}}function Fv(r){const t=[],e=[],n=[];let i=r;const s=r-xs+1+nf.length;for(let a=0;a<s;a++){const o=Math.pow(2,i);e.push(o);let l=1/o;a>r-xs?l=nf[a-r+xs-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],d=6,_=6,g=3,m=2,p=1,S=new Float32Array(g*_*d),E=new Float32Array(m*_*d),x=new Float32Array(p*_*d);for(let A=0;A<d;A++){const b=A%3*2/3-1,R=A>2?0:-1,M=[b,R,0,b+2/3,R,0,b+2/3,R+1,0,b,R,0,b+2/3,R+1,0,b,R+1,0];S.set(M,g*_*A),E.set(f,m*_*A);const v=[A,A,A,A,A,A];x.set(v,p*_*A)}const C=new cn;C.setAttribute("position",new je(S,g)),C.setAttribute("uv",new je(E,m)),C.setAttribute("faceIndex",new je(x,p)),t.push(C),i>xs&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function of(r,t,e){const n=new fi(r,t,e);return n.texture.mapping=gl,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function xo(r,t,e,n,i){r.viewport.set(t,e,n,i),r.scissor.set(t,e,n,i)}function Ov(r,t,e){const n=new Float32Array(Ur),i=new z(0,1,0);return new ln({name:"SphericalGaussianBlur",defines:{n:Ur,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Ku(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Bi,depthTest:!1,depthWrite:!1})}function lf(){return new ln({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ku(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Bi,depthTest:!1,depthWrite:!1})}function cf(){return new ln({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ku(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Bi,depthTest:!1,depthWrite:!1})}function Ku(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Bv(r){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===nl||l===Bc,u=l===Is||l===Ns;if(c||u){let h=t.get(o);const f=h!==void 0?h.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return e===null&&(e=new af(r)),h=c?e.fromEquirectangular(o,h):e.fromCubemap(o,h),h.texture.pmremVersion=o.pmremVersion,t.set(o,h),h.texture;if(h!==void 0)return h.texture;{const d=o.image;return c&&d&&d.height>0||u&&d&&i(d)?(e===null&&(e=new af(r)),h=c?e.fromEquirectangular(o):e.fromCubemap(o),h.texture.pmremVersion=o.pmremVersion,t.set(o,h),o.addEventListener("dispose",s),h.texture):null}}}return o}function i(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function zv(r){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const i=e(n);return i===null&&ua("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function kv(r,t,e,n){const i={},s=new WeakMap;function a(h){const f=h.target;f.index!==null&&t.remove(f.index);for(const _ in f.attributes)t.remove(f.attributes[_]);for(const _ in f.morphAttributes){const g=f.morphAttributes[_];for(let m=0,p=g.length;m<p;m++)t.remove(g[m])}f.removeEventListener("dispose",a),delete i[f.id];const d=s.get(f);d&&(t.remove(d),s.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function o(h,f){return i[f.id]===!0||(f.addEventListener("dispose",a),i[f.id]=!0,e.memory.geometries++),f}function l(h){const f=h.attributes;for(const _ in f)t.update(f[_],r.ARRAY_BUFFER);const d=h.morphAttributes;for(const _ in d){const g=d[_];for(let m=0,p=g.length;m<p;m++)t.update(g[m],r.ARRAY_BUFFER)}}function c(h){const f=[],d=h.index,_=h.attributes.position;let g=0;if(d!==null){const S=d.array;g=d.version;for(let E=0,x=S.length;E<x;E+=3){const C=S[E+0],A=S[E+1],b=S[E+2];f.push(C,A,A,b,b,C)}}else if(_!==void 0){const S=_.array;g=_.version;for(let E=0,x=S.length/3-1;E<x;E+=3){const C=E+0,A=E+1,b=E+2;f.push(C,A,A,b,b,C)}}else return;const m=new(kd(f)?qd:Yd)(f,1);m.version=g;const p=s.get(h);p&&t.remove(p),s.set(h,m)}function u(h){const f=s.get(h);if(f){const d=h.index;d!==null&&f.version<d.version&&c(h)}else c(h);return s.get(h)}return{get:o,update:l,getWireframeAttribute:u}}function Vv(r,t,e){let n;function i(f){n=f}let s,a;function o(f){s=f.type,a=f.bytesPerElement}function l(f,d){r.drawElements(n,d,s,f*a),e.update(d,n,1)}function c(f,d,_){_!==0&&(r.drawElementsInstanced(n,d,s,f*a,_),e.update(d,n,_))}function u(f,d,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,s,f,0,_);let m=0;for(let p=0;p<_;p++)m+=d[p];e.update(m,n,1)}function h(f,d,_,g){if(_===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<f.length;p++)c(f[p]/a,d[p],g[p]);else{m.multiDrawElementsInstancedWEBGL(n,d,0,s,f,0,g,0,_);let p=0;for(let S=0;S<_;S++)p+=d[S]*g[S];e.update(p,n,1)}}this.setMode=i,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function Hv(r){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(e.calls++,a){case r.TRIANGLES:e.triangles+=o*(s/3);break;case r.LINES:e.lines+=o*(s/2);break;case r.LINE_STRIP:e.lines+=o*(s-1);break;case r.LINE_LOOP:e.lines+=o*s;break;case r.POINTS:e.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function Gv(r,t,e){const n=new WeakMap,i=new ve;function s(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=u!==void 0?u.length:0;let f=n.get(o);if(f===void 0||f.count!==h){let v=function(){R.dispose(),n.delete(o),o.removeEventListener("dispose",v)};var d=v;f!==void 0&&f.texture.dispose();const _=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],S=o.morphAttributes.normal||[],E=o.morphAttributes.color||[];let x=0;_===!0&&(x=1),g===!0&&(x=2),m===!0&&(x=3);let C=o.attributes.position.count*x,A=1;C>t.maxTextureSize&&(A=Math.ceil(C/t.maxTextureSize),C=t.maxTextureSize);const b=new Float32Array(C*A*4*h),R=new Hd(b,C,A,h);R.type=Ni,R.needsUpdate=!0;const M=x*4;for(let D=0;D<h;D++){const P=p[D],I=S[D],V=E[D],q=C*A*4*D;for(let H=0;H<P.count;H++){const Y=H*M;_===!0&&(i.fromBufferAttribute(P,H),b[q+Y+0]=i.x,b[q+Y+1]=i.y,b[q+Y+2]=i.z,b[q+Y+3]=0),g===!0&&(i.fromBufferAttribute(I,H),b[q+Y+4]=i.x,b[q+Y+5]=i.y,b[q+Y+6]=i.z,b[q+Y+7]=0),m===!0&&(i.fromBufferAttribute(V,H),b[q+Y+8]=i.x,b[q+Y+9]=i.y,b[q+Y+10]=i.z,b[q+Y+11]=V.itemSize===4?i.w:1)}}f={count:h,texture:R,size:new qt(C,A)},n.set(o,f),o.addEventListener("dispose",v)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",a.morphTexture,e);else{let _=0;for(let m=0;m<c.length;m++)_+=c[m];const g=o.morphTargetsRelative?1:1-_;l.getUniforms().setValue(r,"morphTargetBaseInfluence",g),l.getUniforms().setValue(r,"morphTargetInfluences",c)}l.getUniforms().setValue(r,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(r,"morphTargetsTextureSize",f.size)}return{update:s}}function Wv(r,t,e,n){let i=new WeakMap;function s(l){const c=n.render.frame,u=l.geometry,h=t.get(l,u);if(i.get(h)!==c&&(t.update(h),i.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),i.get(l)!==c&&(e.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,r.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;i.get(f)!==c&&(f.update(),i.set(f,c))}return h}function a(){i=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:s,dispose:a}}class Jd extends Sn{constructor(t,e,n,i,s,a,o,l,c,u=Ts){if(u!==Ts&&u!==Os)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Ts&&(n=Xr),n===void 0&&u===Os&&(n=Fs),super(null,i,s,a,o,l,u,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:hi,this.minFilter=l!==void 0?l:hi,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Qd=new Sn,uf=new Jd(1,1),tp=new Hd,ep=new D_,np=new Kd,hf=[],ff=[],df=new Float32Array(16),pf=new Float32Array(9),mf=new Float32Array(4);function Ks(r,t,e){const n=r[0];if(n<=0||n>0)return r;const i=t*e;let s=hf[i];if(s===void 0&&(s=new Float32Array(i),hf[i]=s),t!==0){n.toArray(s,0);for(let a=1,o=0;a!==t;++a)o+=e,r[a].toArray(s,o)}return s}function We(r,t){if(r.length!==t.length)return!1;for(let e=0,n=r.length;e<n;e++)if(r[e]!==t[e])return!1;return!0}function Xe(r,t){for(let e=0,n=t.length;e<n;e++)r[e]=t[e]}function Sl(r,t){let e=ff[t];e===void 0&&(e=new Int32Array(t),ff[t]=e);for(let n=0;n!==t;++n)e[n]=r.allocateTextureUnit();return e}function Xv(r,t){const e=this.cache;e[0]!==t&&(r.uniform1f(this.addr,t),e[0]=t)}function Yv(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(We(e,t))return;r.uniform2fv(this.addr,t),Xe(e,t)}}function qv(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(We(e,t))return;r.uniform3fv(this.addr,t),Xe(e,t)}}function $v(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(We(e,t))return;r.uniform4fv(this.addr,t),Xe(e,t)}}function Zv(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(We(e,t))return;r.uniformMatrix2fv(this.addr,!1,t),Xe(e,t)}else{if(We(e,n))return;mf.set(n),r.uniformMatrix2fv(this.addr,!1,mf),Xe(e,n)}}function Kv(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(We(e,t))return;r.uniformMatrix3fv(this.addr,!1,t),Xe(e,t)}else{if(We(e,n))return;pf.set(n),r.uniformMatrix3fv(this.addr,!1,pf),Xe(e,n)}}function jv(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(We(e,t))return;r.uniformMatrix4fv(this.addr,!1,t),Xe(e,t)}else{if(We(e,n))return;df.set(n),r.uniformMatrix4fv(this.addr,!1,df),Xe(e,n)}}function Jv(r,t){const e=this.cache;e[0]!==t&&(r.uniform1i(this.addr,t),e[0]=t)}function Qv(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(We(e,t))return;r.uniform2iv(this.addr,t),Xe(e,t)}}function tx(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(We(e,t))return;r.uniform3iv(this.addr,t),Xe(e,t)}}function ex(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(We(e,t))return;r.uniform4iv(this.addr,t),Xe(e,t)}}function nx(r,t){const e=this.cache;e[0]!==t&&(r.uniform1ui(this.addr,t),e[0]=t)}function ix(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(We(e,t))return;r.uniform2uiv(this.addr,t),Xe(e,t)}}function rx(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(We(e,t))return;r.uniform3uiv(this.addr,t),Xe(e,t)}}function sx(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(We(e,t))return;r.uniform4uiv(this.addr,t),Xe(e,t)}}function ax(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?(uf.compareFunction=zd,s=uf):s=Qd,e.setTexture2D(t||s,i)}function ox(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||ep,i)}function lx(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||np,i)}function cx(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||tp,i)}function ux(r){switch(r){case 5126:return Xv;case 35664:return Yv;case 35665:return qv;case 35666:return $v;case 35674:return Zv;case 35675:return Kv;case 35676:return jv;case 5124:case 35670:return Jv;case 35667:case 35671:return Qv;case 35668:case 35672:return tx;case 35669:case 35673:return ex;case 5125:return nx;case 36294:return ix;case 36295:return rx;case 36296:return sx;case 35678:case 36198:case 36298:case 36306:case 35682:return ax;case 35679:case 36299:case 36307:return ox;case 35680:case 36300:case 36308:case 36293:return lx;case 36289:case 36303:case 36311:case 36292:return cx}}function hx(r,t){r.uniform1fv(this.addr,t)}function fx(r,t){const e=Ks(t,this.size,2);r.uniform2fv(this.addr,e)}function dx(r,t){const e=Ks(t,this.size,3);r.uniform3fv(this.addr,e)}function px(r,t){const e=Ks(t,this.size,4);r.uniform4fv(this.addr,e)}function mx(r,t){const e=Ks(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,e)}function _x(r,t){const e=Ks(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,e)}function gx(r,t){const e=Ks(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,e)}function vx(r,t){r.uniform1iv(this.addr,t)}function xx(r,t){r.uniform2iv(this.addr,t)}function Mx(r,t){r.uniform3iv(this.addr,t)}function Sx(r,t){r.uniform4iv(this.addr,t)}function yx(r,t){r.uniform1uiv(this.addr,t)}function Ex(r,t){r.uniform2uiv(this.addr,t)}function Tx(r,t){r.uniform3uiv(this.addr,t)}function bx(r,t){r.uniform4uiv(this.addr,t)}function wx(r,t,e){const n=this.cache,i=t.length,s=Sl(e,i);We(n,s)||(r.uniform1iv(this.addr,s),Xe(n,s));for(let a=0;a!==i;++a)e.setTexture2D(t[a]||Qd,s[a])}function Ax(r,t,e){const n=this.cache,i=t.length,s=Sl(e,i);We(n,s)||(r.uniform1iv(this.addr,s),Xe(n,s));for(let a=0;a!==i;++a)e.setTexture3D(t[a]||ep,s[a])}function Cx(r,t,e){const n=this.cache,i=t.length,s=Sl(e,i);We(n,s)||(r.uniform1iv(this.addr,s),Xe(n,s));for(let a=0;a!==i;++a)e.setTextureCube(t[a]||np,s[a])}function Rx(r,t,e){const n=this.cache,i=t.length,s=Sl(e,i);We(n,s)||(r.uniform1iv(this.addr,s),Xe(n,s));for(let a=0;a!==i;++a)e.setTexture2DArray(t[a]||tp,s[a])}function Px(r){switch(r){case 5126:return hx;case 35664:return fx;case 35665:return dx;case 35666:return px;case 35674:return mx;case 35675:return _x;case 35676:return gx;case 5124:case 35670:return vx;case 35667:case 35671:return xx;case 35668:case 35672:return Mx;case 35669:case 35673:return Sx;case 5125:return yx;case 36294:return Ex;case 36295:return Tx;case 36296:return bx;case 35678:case 36198:case 36298:case 36306:case 35682:return wx;case 35679:case 36299:case 36307:return Ax;case 35680:case 36300:case 36308:case 36293:return Cx;case 36289:case 36303:case 36311:case 36292:return Rx}}class Dx{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=ux(e.type)}}class Lx{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Px(e.type)}}class Ux{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let s=0,a=i.length;s!==a;++s){const o=i[s];o.setValue(t,e[o.id],n)}}}const tc=/(\w+)(\])?(\[|\.)?/g;function _f(r,t){r.seq.push(t),r.map[t.id]=t}function Ix(r,t,e){const n=r.name,i=n.length;for(tc.lastIndex=0;;){const s=tc.exec(n),a=tc.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){_f(e,c===void 0?new Dx(o,r,t):new Lx(o,r,t));break}else{let h=e.map[o];h===void 0&&(h=new Ux(o),_f(e,h)),e=h}}}class Go{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const s=t.getActiveUniform(e,i),a=t.getUniformLocation(e,s.name);Ix(s,a,this)}}setValue(t,e,n,i){const s=this.map[e];s!==void 0&&s.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let s=0,a=e.length;s!==a;++s){const o=e[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,s=t.length;i!==s;++i){const a=t[i];a.id in e&&n.push(a)}return n}}function gf(r,t,e){const n=r.createShader(t);return r.shaderSource(n,e),r.compileShader(n),n}const Nx=37297;let Fx=0;function Ox(r,t){const e=r.split(`
`),n=[],i=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let a=i;a<s;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}const vf=new Kt;function Bx(r){le._getMatrix(vf,le.workingColorSpace,r);const t=`mat3( ${vf.elements.map(e=>e.toFixed(4))} )`;switch(le.getTransfer(r)){case vl:return[t,"LinearTransferOETF"];case ge:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",r),[t,"LinearTransferOETF"]}}function xf(r,t,e){const n=r.getShaderParameter(t,r.COMPILE_STATUS),i=r.getShaderInfoLog(t).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const a=parseInt(s[1]);return e.toUpperCase()+`

`+i+`

`+Ox(r.getShaderSource(t),a)}else return i}function zx(r,t){const e=Bx(t);return[`vec4 ${r}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function kx(r,t){let e;switch(t){case s_:e="Linear";break;case a_:e="Reinhard";break;case o_:e="Cineon";break;case wd:e="ACESFilmic";break;case c_:e="AgX";break;case u_:e="Neutral";break;case l_:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+r+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Mo=new z;function Vx(){le.getLuminanceCoefficients(Mo);const r=Mo.x.toFixed(4),t=Mo.y.toFixed(4),e=Mo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Hx(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ha).join(`
`)}function Gx(r){const t=[];for(const e in r){const n=r[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Wx(r,t){const e={},n=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(t,i),a=s.name;let o=1;s.type===r.FLOAT_MAT2&&(o=2),s.type===r.FLOAT_MAT3&&(o=3),s.type===r.FLOAT_MAT4&&(o=4),e[a]={type:s.type,location:r.getAttribLocation(t,a),locationSize:o}}return e}function ha(r){return r!==""}function Mf(r,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Sf(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Xx=/^[ \t]*#include +<([\w\d./]+)>/gm;function pu(r){return r.replace(Xx,qx)}const Yx=new Map;function qx(r,t){let e=Qt[t];if(e===void 0){const n=Yx.get(t);if(n!==void 0)e=Qt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return pu(e)}const $x=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function yf(r){return r.replace($x,Zx)}function Zx(r,t,e,n){let i="";for(let s=parseInt(t);s<parseInt(e);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Ef(r){let t=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?t+=`
#define HIGH_PRECISION`:r.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Kx(r){let t="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===Td?t="SHADOWMAP_TYPE_PCF":r.shadowMapType===Bm?t="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===Di&&(t="SHADOWMAP_TYPE_VSM"),t}function jx(r){let t="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Is:case Ns:t="ENVMAP_TYPE_CUBE";break;case gl:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Jx(r){let t="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case Ns:t="ENVMAP_MODE_REFRACTION";break}return t}function Qx(r){let t="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case bd:t="ENVMAP_BLENDING_MULTIPLY";break;case i_:t="ENVMAP_BLENDING_MIX";break;case r_:t="ENVMAP_BLENDING_ADD";break}return t}function tM(r){const t=r.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function eM(r,t,e,n){const i=r.getContext(),s=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=Kx(e),c=jx(e),u=Jx(e),h=Qx(e),f=tM(e),d=Hx(e),_=Gx(s),g=i.createProgram();let m,p,S=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(ha).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(ha).join(`
`),p.length>0&&(p+=`
`)):(m=[Ef(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ha).join(`
`),p=[Ef(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==cr?"#define TONE_MAPPING":"",e.toneMapping!==cr?Qt.tonemapping_pars_fragment:"",e.toneMapping!==cr?kx("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Qt.colorspace_pars_fragment,zx("linearToOutputTexel",e.outputColorSpace),Vx(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ha).join(`
`)),a=pu(a),a=Mf(a,e),a=Sf(a,e),o=pu(o),o=Mf(o,e),o=Sf(o,e),a=yf(a),o=yf(o),e.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===Nh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Nh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const E=S+m+a,x=S+p+o,C=gf(i,i.VERTEX_SHADER,E),A=gf(i,i.FRAGMENT_SHADER,x);i.attachShader(g,C),i.attachShader(g,A),e.index0AttributeName!==void 0?i.bindAttribLocation(g,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(g,0,"position"),i.linkProgram(g);function b(D){if(r.debug.checkShaderErrors){const P=i.getProgramInfoLog(g).trim(),I=i.getShaderInfoLog(C).trim(),V=i.getShaderInfoLog(A).trim();let q=!0,H=!0;if(i.getProgramParameter(g,i.LINK_STATUS)===!1)if(q=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,g,C,A);else{const Y=xf(i,C,"vertex"),B=xf(i,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(g,i.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+P+`
`+Y+`
`+B)}else P!==""?console.warn("THREE.WebGLProgram: Program Info Log:",P):(I===""||V==="")&&(H=!1);H&&(D.diagnostics={runnable:q,programLog:P,vertexShader:{log:I,prefix:m},fragmentShader:{log:V,prefix:p}})}i.deleteShader(C),i.deleteShader(A),R=new Go(i,g),M=Wx(i,g)}let R;this.getUniforms=function(){return R===void 0&&b(this),R};let M;this.getAttributes=function(){return M===void 0&&b(this),M};let v=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return v===!1&&(v=i.getProgramParameter(g,Nx)),v},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(g),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Fx++,this.cacheKey=t,this.usedTimes=1,this.program=g,this.vertexShader=C,this.fragmentShader=A,this}let nM=0;class iM{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new rM(t),e.set(t,n)),n}}class rM{constructor(t){this.id=nM++,this.code=t,this.usedTimes=0}}function sM(r,t,e,n,i,s,a){const o=new Wd,l=new iM,c=new Set,u=[],h=i.logarithmicDepthBuffer,f=i.vertexTextures;let d=i.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(M){return c.add(M),M===0?"uv":`uv${M}`}function m(M,v,D,P,I){const V=P.fog,q=I.geometry,H=M.isMeshStandardMaterial?P.environment:null,Y=(M.isMeshStandardMaterial?e:t).get(M.envMap||H),B=Y&&Y.mapping===gl?Y.image.height:null,et=_[M.type];M.precision!==null&&(d=i.getMaxPrecision(M.precision),d!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",d,"instead."));const L=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,ot=L!==void 0?L.length:0;let Ct=0;q.morphAttributes.position!==void 0&&(Ct=1),q.morphAttributes.normal!==void 0&&(Ct=2),q.morphAttributes.color!==void 0&&(Ct=3);let Vt,$,nt,_t;if(et){const xt=_i[et];Vt=xt.vertexShader,$=xt.fragmentShader}else Vt=M.vertexShader,$=M.fragmentShader,l.update(M),nt=l.getVertexShaderID(M),_t=l.getFragmentShaderID(M);const it=r.getRenderTarget(),yt=r.state.buffers.depth.getReversed(),wt=I.isInstancedMesh===!0,Ht=I.isBatchedMesh===!0,te=!!M.map,Nt=!!M.matcap,Lt=!!Y,N=!!M.aoMap,xe=!!M.lightMap,Ot=!!M.bumpMap,k=!!M.normalMap,bt=!!M.displacementMap,se=!!M.emissiveMap,Pt=!!M.metalnessMap,w=!!M.roughnessMap,y=M.anisotropy>0,W=M.clearcoat>0,Q=M.dispersion>0,J=M.iridescence>0,K=M.sheen>0,ft=M.transmission>0,ct=y&&!!M.anisotropyMap,mt=W&&!!M.clearcoatMap,Xt=W&&!!M.clearcoatNormalMap,rt=W&&!!M.clearcoatRoughnessMap,lt=J&&!!M.iridescenceMap,It=J&&!!M.iridescenceThicknessMap,Ut=K&&!!M.sheenColorMap,Mt=K&&!!M.sheenRoughnessMap,$t=!!M.specularMap,Ft=!!M.specularColorMap,oe=!!M.specularIntensityMap,U=ft&&!!M.transmissionMap,ht=ft&&!!M.thicknessMap,Z=!!M.gradientMap,j=!!M.alphaMap,ut=M.alphaTest>0,dt=!!M.alphaHash,Bt=!!M.extensions;let ce=cr;M.toneMapped&&(it===null||it.isXRRenderTarget===!0)&&(ce=r.toneMapping);const Ue={shaderID:et,shaderType:M.type,shaderName:M.name,vertexShader:Vt,fragmentShader:$,defines:M.defines,customVertexShaderID:nt,customFragmentShaderID:_t,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:d,batching:Ht,batchingColor:Ht&&I._colorsTexture!==null,instancing:wt,instancingColor:wt&&I.instanceColor!==null,instancingMorph:wt&&I.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:it===null?r.outputColorSpace:it.isXRRenderTarget===!0?it.texture.colorSpace:Ys,alphaToCoverage:!!M.alphaToCoverage,map:te,matcap:Nt,envMap:Lt,envMapMode:Lt&&Y.mapping,envMapCubeUVHeight:B,aoMap:N,lightMap:xe,bumpMap:Ot,normalMap:k,displacementMap:f&&bt,emissiveMap:se,normalMapObjectSpace:k&&M.normalMapType===p_,normalMapTangentSpace:k&&M.normalMapType===Bd,metalnessMap:Pt,roughnessMap:w,anisotropy:y,anisotropyMap:ct,clearcoat:W,clearcoatMap:mt,clearcoatNormalMap:Xt,clearcoatRoughnessMap:rt,dispersion:Q,iridescence:J,iridescenceMap:lt,iridescenceThicknessMap:It,sheen:K,sheenColorMap:Ut,sheenRoughnessMap:Mt,specularMap:$t,specularColorMap:Ft,specularIntensityMap:oe,transmission:ft,transmissionMap:U,thicknessMap:ht,gradientMap:Z,opaque:M.transparent===!1&&M.blending===Es&&M.alphaToCoverage===!1,alphaMap:j,alphaTest:ut,alphaHash:dt,combine:M.combine,mapUv:te&&g(M.map.channel),aoMapUv:N&&g(M.aoMap.channel),lightMapUv:xe&&g(M.lightMap.channel),bumpMapUv:Ot&&g(M.bumpMap.channel),normalMapUv:k&&g(M.normalMap.channel),displacementMapUv:bt&&g(M.displacementMap.channel),emissiveMapUv:se&&g(M.emissiveMap.channel),metalnessMapUv:Pt&&g(M.metalnessMap.channel),roughnessMapUv:w&&g(M.roughnessMap.channel),anisotropyMapUv:ct&&g(M.anisotropyMap.channel),clearcoatMapUv:mt&&g(M.clearcoatMap.channel),clearcoatNormalMapUv:Xt&&g(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:rt&&g(M.clearcoatRoughnessMap.channel),iridescenceMapUv:lt&&g(M.iridescenceMap.channel),iridescenceThicknessMapUv:It&&g(M.iridescenceThicknessMap.channel),sheenColorMapUv:Ut&&g(M.sheenColorMap.channel),sheenRoughnessMapUv:Mt&&g(M.sheenRoughnessMap.channel),specularMapUv:$t&&g(M.specularMap.channel),specularColorMapUv:Ft&&g(M.specularColorMap.channel),specularIntensityMapUv:oe&&g(M.specularIntensityMap.channel),transmissionMapUv:U&&g(M.transmissionMap.channel),thicknessMapUv:ht&&g(M.thicknessMap.channel),alphaMapUv:j&&g(M.alphaMap.channel),vertexTangents:!!q.attributes.tangent&&(k||y),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,pointsUvs:I.isPoints===!0&&!!q.attributes.uv&&(te||j),fog:!!V,useFog:M.fog===!0,fogExp2:!!V&&V.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:yt,skinning:I.isSkinnedMesh===!0,morphTargets:q.morphAttributes.position!==void 0,morphNormals:q.morphAttributes.normal!==void 0,morphColors:q.morphAttributes.color!==void 0,morphTargetsCount:ot,morphTextureStride:Ct,numDirLights:v.directional.length,numPointLights:v.point.length,numSpotLights:v.spot.length,numSpotLightMaps:v.spotLightMap.length,numRectAreaLights:v.rectArea.length,numHemiLights:v.hemi.length,numDirLightShadows:v.directionalShadowMap.length,numPointLightShadows:v.pointShadowMap.length,numSpotLightShadows:v.spotShadowMap.length,numSpotLightShadowsWithMaps:v.numSpotLightShadowsWithMaps,numLightProbes:v.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:M.dithering,shadowMapEnabled:r.shadowMap.enabled&&D.length>0,shadowMapType:r.shadowMap.type,toneMapping:ce,decodeVideoTexture:te&&M.map.isVideoTexture===!0&&le.getTransfer(M.map.colorSpace)===ge,decodeVideoTextureEmissive:se&&M.emissiveMap.isVideoTexture===!0&&le.getTransfer(M.emissiveMap.colorSpace)===ge,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===gi,flipSided:M.side===Mn,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:Bt&&M.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Bt&&M.extensions.multiDraw===!0||Ht)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return Ue.vertexUv1s=c.has(1),Ue.vertexUv2s=c.has(2),Ue.vertexUv3s=c.has(3),c.clear(),Ue}function p(M){const v=[];if(M.shaderID?v.push(M.shaderID):(v.push(M.customVertexShaderID),v.push(M.customFragmentShaderID)),M.defines!==void 0)for(const D in M.defines)v.push(D),v.push(M.defines[D]);return M.isRawShaderMaterial===!1&&(S(v,M),E(v,M),v.push(r.outputColorSpace)),v.push(M.customProgramCacheKey),v.join()}function S(M,v){M.push(v.precision),M.push(v.outputColorSpace),M.push(v.envMapMode),M.push(v.envMapCubeUVHeight),M.push(v.mapUv),M.push(v.alphaMapUv),M.push(v.lightMapUv),M.push(v.aoMapUv),M.push(v.bumpMapUv),M.push(v.normalMapUv),M.push(v.displacementMapUv),M.push(v.emissiveMapUv),M.push(v.metalnessMapUv),M.push(v.roughnessMapUv),M.push(v.anisotropyMapUv),M.push(v.clearcoatMapUv),M.push(v.clearcoatNormalMapUv),M.push(v.clearcoatRoughnessMapUv),M.push(v.iridescenceMapUv),M.push(v.iridescenceThicknessMapUv),M.push(v.sheenColorMapUv),M.push(v.sheenRoughnessMapUv),M.push(v.specularMapUv),M.push(v.specularColorMapUv),M.push(v.specularIntensityMapUv),M.push(v.transmissionMapUv),M.push(v.thicknessMapUv),M.push(v.combine),M.push(v.fogExp2),M.push(v.sizeAttenuation),M.push(v.morphTargetsCount),M.push(v.morphAttributeCount),M.push(v.numDirLights),M.push(v.numPointLights),M.push(v.numSpotLights),M.push(v.numSpotLightMaps),M.push(v.numHemiLights),M.push(v.numRectAreaLights),M.push(v.numDirLightShadows),M.push(v.numPointLightShadows),M.push(v.numSpotLightShadows),M.push(v.numSpotLightShadowsWithMaps),M.push(v.numLightProbes),M.push(v.shadowMapType),M.push(v.toneMapping),M.push(v.numClippingPlanes),M.push(v.numClipIntersection),M.push(v.depthPacking)}function E(M,v){o.disableAll(),v.supportsVertexTextures&&o.enable(0),v.instancing&&o.enable(1),v.instancingColor&&o.enable(2),v.instancingMorph&&o.enable(3),v.matcap&&o.enable(4),v.envMap&&o.enable(5),v.normalMapObjectSpace&&o.enable(6),v.normalMapTangentSpace&&o.enable(7),v.clearcoat&&o.enable(8),v.iridescence&&o.enable(9),v.alphaTest&&o.enable(10),v.vertexColors&&o.enable(11),v.vertexAlphas&&o.enable(12),v.vertexUv1s&&o.enable(13),v.vertexUv2s&&o.enable(14),v.vertexUv3s&&o.enable(15),v.vertexTangents&&o.enable(16),v.anisotropy&&o.enable(17),v.alphaHash&&o.enable(18),v.batching&&o.enable(19),v.dispersion&&o.enable(20),v.batchingColor&&o.enable(21),M.push(o.mask),o.disableAll(),v.fog&&o.enable(0),v.useFog&&o.enable(1),v.flatShading&&o.enable(2),v.logarithmicDepthBuffer&&o.enable(3),v.reverseDepthBuffer&&o.enable(4),v.skinning&&o.enable(5),v.morphTargets&&o.enable(6),v.morphNormals&&o.enable(7),v.morphColors&&o.enable(8),v.premultipliedAlpha&&o.enable(9),v.shadowMapEnabled&&o.enable(10),v.doubleSided&&o.enable(11),v.flipSided&&o.enable(12),v.useDepthPacking&&o.enable(13),v.dithering&&o.enable(14),v.transmission&&o.enable(15),v.sheen&&o.enable(16),v.opaque&&o.enable(17),v.pointsUvs&&o.enable(18),v.decodeVideoTexture&&o.enable(19),v.decodeVideoTextureEmissive&&o.enable(20),v.alphaToCoverage&&o.enable(21),M.push(o.mask)}function x(M){const v=_[M.type];let D;if(v){const P=_i[v];D=sl.clone(P.uniforms)}else D=M.uniforms;return D}function C(M,v){let D;for(let P=0,I=u.length;P<I;P++){const V=u[P];if(V.cacheKey===v){D=V,++D.usedTimes;break}}return D===void 0&&(D=new eM(r,v,M,s),u.push(D)),D}function A(M){if(--M.usedTimes===0){const v=u.indexOf(M);u[v]=u[u.length-1],u.pop(),M.destroy()}}function b(M){l.remove(M)}function R(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:x,acquireProgram:C,releaseProgram:A,releaseShaderCache:b,programs:u,dispose:R}}function aM(){let r=new WeakMap;function t(a){return r.has(a)}function e(a){let o=r.get(a);return o===void 0&&(o={},r.set(a,o)),o}function n(a){r.delete(a)}function i(a,o,l){r.get(a)[o]=l}function s(){r=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:s}}function oM(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.z!==t.z?r.z-t.z:r.id-t.id}function Tf(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function bf(){const r=[];let t=0;const e=[],n=[],i=[];function s(){t=0,e.length=0,n.length=0,i.length=0}function a(h,f,d,_,g,m){let p=r[t];return p===void 0?(p={id:h.id,object:h,geometry:f,material:d,groupOrder:_,renderOrder:h.renderOrder,z:g,group:m},r[t]=p):(p.id=h.id,p.object=h,p.geometry=f,p.material=d,p.groupOrder=_,p.renderOrder=h.renderOrder,p.z=g,p.group=m),t++,p}function o(h,f,d,_,g,m){const p=a(h,f,d,_,g,m);d.transmission>0?n.push(p):d.transparent===!0?i.push(p):e.push(p)}function l(h,f,d,_,g,m){const p=a(h,f,d,_,g,m);d.transmission>0?n.unshift(p):d.transparent===!0?i.unshift(p):e.unshift(p)}function c(h,f){e.length>1&&e.sort(h||oM),n.length>1&&n.sort(f||Tf),i.length>1&&i.sort(f||Tf)}function u(){for(let h=t,f=r.length;h<f;h++){const d=r[h];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:n,transparent:i,init:s,push:o,unshift:l,finish:u,sort:c}}function lM(){let r=new WeakMap;function t(n,i){const s=r.get(n);let a;return s===void 0?(a=new bf,r.set(n,[a])):i>=s.length?(a=new bf,s.push(a)):a=s[i],a}function e(){r=new WeakMap}return{get:t,dispose:e}}function cM(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new z,color:new jt};break;case"SpotLight":e={position:new z,direction:new z,color:new jt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new z,color:new jt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new z,skyColor:new jt,groundColor:new jt};break;case"RectAreaLight":e={color:new jt,position:new z,halfWidth:new z,halfHeight:new z};break}return r[t.id]=e,e}}}function uM(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qt,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=e,e}}}let hM=0;function fM(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function dM(r){const t=new cM,e=uM(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new z);const i=new z,s=new Ce,a=new Ce;function o(c){let u=0,h=0,f=0;for(let M=0;M<9;M++)n.probe[M].set(0,0,0);let d=0,_=0,g=0,m=0,p=0,S=0,E=0,x=0,C=0,A=0,b=0;c.sort(fM);for(let M=0,v=c.length;M<v;M++){const D=c[M],P=D.color,I=D.intensity,V=D.distance,q=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)u+=P.r*I,h+=P.g*I,f+=P.b*I;else if(D.isLightProbe){for(let H=0;H<9;H++)n.probe[H].addScaledVector(D.sh.coefficients[H],I);b++}else if(D.isDirectionalLight){const H=t.get(D);if(H.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const Y=D.shadow,B=e.get(D);B.shadowIntensity=Y.intensity,B.shadowBias=Y.bias,B.shadowNormalBias=Y.normalBias,B.shadowRadius=Y.radius,B.shadowMapSize=Y.mapSize,n.directionalShadow[d]=B,n.directionalShadowMap[d]=q,n.directionalShadowMatrix[d]=D.shadow.matrix,S++}n.directional[d]=H,d++}else if(D.isSpotLight){const H=t.get(D);H.position.setFromMatrixPosition(D.matrixWorld),H.color.copy(P).multiplyScalar(I),H.distance=V,H.coneCos=Math.cos(D.angle),H.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),H.decay=D.decay,n.spot[g]=H;const Y=D.shadow;if(D.map&&(n.spotLightMap[C]=D.map,C++,Y.updateMatrices(D),D.castShadow&&A++),n.spotLightMatrix[g]=Y.matrix,D.castShadow){const B=e.get(D);B.shadowIntensity=Y.intensity,B.shadowBias=Y.bias,B.shadowNormalBias=Y.normalBias,B.shadowRadius=Y.radius,B.shadowMapSize=Y.mapSize,n.spotShadow[g]=B,n.spotShadowMap[g]=q,x++}g++}else if(D.isRectAreaLight){const H=t.get(D);H.color.copy(P).multiplyScalar(I),H.halfWidth.set(D.width*.5,0,0),H.halfHeight.set(0,D.height*.5,0),n.rectArea[m]=H,m++}else if(D.isPointLight){const H=t.get(D);if(H.color.copy(D.color).multiplyScalar(D.intensity),H.distance=D.distance,H.decay=D.decay,D.castShadow){const Y=D.shadow,B=e.get(D);B.shadowIntensity=Y.intensity,B.shadowBias=Y.bias,B.shadowNormalBias=Y.normalBias,B.shadowRadius=Y.radius,B.shadowMapSize=Y.mapSize,B.shadowCameraNear=Y.camera.near,B.shadowCameraFar=Y.camera.far,n.pointShadow[_]=B,n.pointShadowMap[_]=q,n.pointShadowMatrix[_]=D.shadow.matrix,E++}n.point[_]=H,_++}else if(D.isHemisphereLight){const H=t.get(D);H.skyColor.copy(D.color).multiplyScalar(I),H.groundColor.copy(D.groundColor).multiplyScalar(I),n.hemi[p]=H,p++}}m>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=vt.LTC_FLOAT_1,n.rectAreaLTC2=vt.LTC_FLOAT_2):(n.rectAreaLTC1=vt.LTC_HALF_1,n.rectAreaLTC2=vt.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=f;const R=n.hash;(R.directionalLength!==d||R.pointLength!==_||R.spotLength!==g||R.rectAreaLength!==m||R.hemiLength!==p||R.numDirectionalShadows!==S||R.numPointShadows!==E||R.numSpotShadows!==x||R.numSpotMaps!==C||R.numLightProbes!==b)&&(n.directional.length=d,n.spot.length=g,n.rectArea.length=m,n.point.length=_,n.hemi.length=p,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.pointShadow.length=E,n.pointShadowMap.length=E,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=S,n.pointShadowMatrix.length=E,n.spotLightMatrix.length=x+C-A,n.spotLightMap.length=C,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=b,R.directionalLength=d,R.pointLength=_,R.spotLength=g,R.rectAreaLength=m,R.hemiLength=p,R.numDirectionalShadows=S,R.numPointShadows=E,R.numSpotShadows=x,R.numSpotMaps=C,R.numLightProbes=b,n.version=hM++)}function l(c,u){let h=0,f=0,d=0,_=0,g=0;const m=u.matrixWorldInverse;for(let p=0,S=c.length;p<S;p++){const E=c[p];if(E.isDirectionalLight){const x=n.directional[h];x.direction.setFromMatrixPosition(E.matrixWorld),i.setFromMatrixPosition(E.target.matrixWorld),x.direction.sub(i),x.direction.transformDirection(m),h++}else if(E.isSpotLight){const x=n.spot[d];x.position.setFromMatrixPosition(E.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(E.matrixWorld),i.setFromMatrixPosition(E.target.matrixWorld),x.direction.sub(i),x.direction.transformDirection(m),d++}else if(E.isRectAreaLight){const x=n.rectArea[_];x.position.setFromMatrixPosition(E.matrixWorld),x.position.applyMatrix4(m),a.identity(),s.copy(E.matrixWorld),s.premultiply(m),a.extractRotation(s),x.halfWidth.set(E.width*.5,0,0),x.halfHeight.set(0,E.height*.5,0),x.halfWidth.applyMatrix4(a),x.halfHeight.applyMatrix4(a),_++}else if(E.isPointLight){const x=n.point[f];x.position.setFromMatrixPosition(E.matrixWorld),x.position.applyMatrix4(m),f++}else if(E.isHemisphereLight){const x=n.hemi[g];x.direction.setFromMatrixPosition(E.matrixWorld),x.direction.transformDirection(m),g++}}}return{setup:o,setupView:l,state:n}}function wf(r){const t=new dM(r),e=[],n=[];function i(u){c.camera=u,e.length=0,n.length=0}function s(u){e.push(u)}function a(u){n.push(u)}function o(){t.setup(e)}function l(u){t.setupView(e,u)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function pM(r){let t=new WeakMap;function e(i,s=0){const a=t.get(i);let o;return a===void 0?(o=new wf(r),t.set(i,[o])):s>=a.length?(o=new wf(r),a.push(o)):o=a[s],o}function n(){t=new WeakMap}return{get:e,dispose:n}}class mM extends $s{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=f_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class _M extends $s{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const gM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,vM=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function xM(r,t,e){let n=new $u;const i=new qt,s=new qt,a=new ve,o=new mM({depthPacking:d_}),l=new _M,c={},u=e.maxTextureSize,h={[dr]:Mn,[Mn]:dr,[gi]:gi},f=new ln({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new qt},radius:{value:4}},vertexShader:gM,fragmentShader:vM}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const _=new cn;_.setAttribute("position",new je(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new wn(_,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Td;let p=this.type;this.render=function(A,b,R){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;const M=r.getRenderTarget(),v=r.getActiveCubeFace(),D=r.getActiveMipmapLevel(),P=r.state;P.setBlending(Bi),P.buffers.color.setClear(1,1,1,1),P.buffers.depth.setTest(!0),P.setScissorTest(!1);const I=p!==Di&&this.type===Di,V=p===Di&&this.type!==Di;for(let q=0,H=A.length;q<H;q++){const Y=A[q],B=Y.shadow;if(B===void 0){console.warn("THREE.WebGLShadowMap:",Y,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;i.copy(B.mapSize);const et=B.getFrameExtents();if(i.multiply(et),s.copy(B.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(s.x=Math.floor(u/et.x),i.x=s.x*et.x,B.mapSize.x=s.x),i.y>u&&(s.y=Math.floor(u/et.y),i.y=s.y*et.y,B.mapSize.y=s.y)),B.map===null||I===!0||V===!0){const ot=this.type!==Di?{minFilter:hi,magFilter:hi}:{};B.map!==null&&B.map.dispose(),B.map=new fi(i.x,i.y,ot),B.map.texture.name=Y.name+".shadowMap",B.camera.updateProjectionMatrix()}r.setRenderTarget(B.map),r.clear();const L=B.getViewportCount();for(let ot=0;ot<L;ot++){const Ct=B.getViewport(ot);a.set(s.x*Ct.x,s.y*Ct.y,s.x*Ct.z,s.y*Ct.w),P.viewport(a),B.updateMatrices(Y,ot),n=B.getFrustum(),x(b,R,B.camera,Y,this.type)}B.isPointLightShadow!==!0&&this.type===Di&&S(B,R),B.needsUpdate=!1}p=this.type,m.needsUpdate=!1,r.setRenderTarget(M,v,D)};function S(A,b){const R=t.update(g);f.defines.VSM_SAMPLES!==A.blurSamples&&(f.defines.VSM_SAMPLES=A.blurSamples,d.defines.VSM_SAMPLES=A.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new fi(i.x,i.y)),f.uniforms.shadow_pass.value=A.map.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,r.setRenderTarget(A.mapPass),r.clear(),r.renderBufferDirect(b,null,R,f,g,null),d.uniforms.shadow_pass.value=A.mapPass.texture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,r.setRenderTarget(A.map),r.clear(),r.renderBufferDirect(b,null,R,d,g,null)}function E(A,b,R,M){let v=null;const D=R.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(D!==void 0)v=D;else if(v=R.isPointLight===!0?l:o,r.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0){const P=v.uuid,I=b.uuid;let V=c[P];V===void 0&&(V={},c[P]=V);let q=V[I];q===void 0&&(q=v.clone(),V[I]=q,b.addEventListener("dispose",C)),v=q}if(v.visible=b.visible,v.wireframe=b.wireframe,M===Di?v.side=b.shadowSide!==null?b.shadowSide:b.side:v.side=b.shadowSide!==null?b.shadowSide:h[b.side],v.alphaMap=b.alphaMap,v.alphaTest=b.alphaTest,v.map=b.map,v.clipShadows=b.clipShadows,v.clippingPlanes=b.clippingPlanes,v.clipIntersection=b.clipIntersection,v.displacementMap=b.displacementMap,v.displacementScale=b.displacementScale,v.displacementBias=b.displacementBias,v.wireframeLinewidth=b.wireframeLinewidth,v.linewidth=b.linewidth,R.isPointLight===!0&&v.isMeshDistanceMaterial===!0){const P=r.properties.get(v);P.light=R}return v}function x(A,b,R,M,v){if(A.visible===!1)return;if(A.layers.test(b.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&v===Di)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,A.matrixWorld);const I=t.update(A),V=A.material;if(Array.isArray(V)){const q=I.groups;for(let H=0,Y=q.length;H<Y;H++){const B=q[H],et=V[B.materialIndex];if(et&&et.visible){const L=E(A,et,M,v);A.onBeforeShadow(r,A,b,R,I,L,B),r.renderBufferDirect(R,null,I,L,A,B),A.onAfterShadow(r,A,b,R,I,L,B)}}}else if(V.visible){const q=E(A,V,M,v);A.onBeforeShadow(r,A,b,R,I,q,null),r.renderBufferDirect(R,null,I,q,A,null),A.onAfterShadow(r,A,b,R,I,q,null)}}const P=A.children;for(let I=0,V=P.length;I<V;I++)x(P[I],b,R,M,v)}function C(A){A.target.removeEventListener("dispose",C);for(const R in c){const M=c[R],v=A.target.uuid;v in M&&(M[v].dispose(),delete M[v])}}}const MM={[Dc]:Lc,[Uc]:Fc,[Ic]:Oc,[Us]:Nc,[Lc]:Dc,[Fc]:Uc,[Oc]:Ic,[Nc]:Us};function SM(r,t){function e(){let U=!1;const ht=new ve;let Z=null;const j=new ve(0,0,0,0);return{setMask:function(ut){Z!==ut&&!U&&(r.colorMask(ut,ut,ut,ut),Z=ut)},setLocked:function(ut){U=ut},setClear:function(ut,dt,Bt,ce,Ue){Ue===!0&&(ut*=ce,dt*=ce,Bt*=ce),ht.set(ut,dt,Bt,ce),j.equals(ht)===!1&&(r.clearColor(ut,dt,Bt,ce),j.copy(ht))},reset:function(){U=!1,Z=null,j.set(-1,0,0,0)}}}function n(){let U=!1,ht=!1,Z=null,j=null,ut=null;return{setReversed:function(dt){if(ht!==dt){const Bt=t.get("EXT_clip_control");ht?Bt.clipControlEXT(Bt.LOWER_LEFT_EXT,Bt.ZERO_TO_ONE_EXT):Bt.clipControlEXT(Bt.LOWER_LEFT_EXT,Bt.NEGATIVE_ONE_TO_ONE_EXT);const ce=ut;ut=null,this.setClear(ce)}ht=dt},getReversed:function(){return ht},setTest:function(dt){dt?it(r.DEPTH_TEST):yt(r.DEPTH_TEST)},setMask:function(dt){Z!==dt&&!U&&(r.depthMask(dt),Z=dt)},setFunc:function(dt){if(ht&&(dt=MM[dt]),j!==dt){switch(dt){case Dc:r.depthFunc(r.NEVER);break;case Lc:r.depthFunc(r.ALWAYS);break;case Uc:r.depthFunc(r.LESS);break;case Us:r.depthFunc(r.LEQUAL);break;case Ic:r.depthFunc(r.EQUAL);break;case Nc:r.depthFunc(r.GEQUAL);break;case Fc:r.depthFunc(r.GREATER);break;case Oc:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}j=dt}},setLocked:function(dt){U=dt},setClear:function(dt){ut!==dt&&(ht&&(dt=1-dt),r.clearDepth(dt),ut=dt)},reset:function(){U=!1,Z=null,j=null,ut=null,ht=!1}}}function i(){let U=!1,ht=null,Z=null,j=null,ut=null,dt=null,Bt=null,ce=null,Ue=null;return{setTest:function(xt){U||(xt?it(r.STENCIL_TEST):yt(r.STENCIL_TEST))},setMask:function(xt){ht!==xt&&!U&&(r.stencilMask(xt),ht=xt)},setFunc:function(xt,At,Zt){(Z!==xt||j!==At||ut!==Zt)&&(r.stencilFunc(xt,At,Zt),Z=xt,j=At,ut=Zt)},setOp:function(xt,At,Zt){(dt!==xt||Bt!==At||ce!==Zt)&&(r.stencilOp(xt,At,Zt),dt=xt,Bt=At,ce=Zt)},setLocked:function(xt){U=xt},setClear:function(xt){Ue!==xt&&(r.clearStencil(xt),Ue=xt)},reset:function(){U=!1,ht=null,Z=null,j=null,ut=null,dt=null,Bt=null,ce=null,Ue=null}}}const s=new e,a=new n,o=new i,l=new WeakMap,c=new WeakMap;let u={},h={},f=new WeakMap,d=[],_=null,g=!1,m=null,p=null,S=null,E=null,x=null,C=null,A=null,b=new jt(0,0,0),R=0,M=!1,v=null,D=null,P=null,I=null,V=null;const q=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let H=!1,Y=0;const B=r.getParameter(r.VERSION);B.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(B)[1]),H=Y>=1):B.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(B)[1]),H=Y>=2);let et=null,L={};const ot=r.getParameter(r.SCISSOR_BOX),Ct=r.getParameter(r.VIEWPORT),Vt=new ve().fromArray(ot),$=new ve().fromArray(Ct);function nt(U,ht,Z,j){const ut=new Uint8Array(4),dt=r.createTexture();r.bindTexture(U,dt),r.texParameteri(U,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(U,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Bt=0;Bt<Z;Bt++)U===r.TEXTURE_3D||U===r.TEXTURE_2D_ARRAY?r.texImage3D(ht,0,r.RGBA,1,1,j,0,r.RGBA,r.UNSIGNED_BYTE,ut):r.texImage2D(ht+Bt,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,ut);return dt}const _t={};_t[r.TEXTURE_2D]=nt(r.TEXTURE_2D,r.TEXTURE_2D,1),_t[r.TEXTURE_CUBE_MAP]=nt(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),_t[r.TEXTURE_2D_ARRAY]=nt(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),_t[r.TEXTURE_3D]=nt(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),it(r.DEPTH_TEST),a.setFunc(Us),Ot(!1),k(Ph),it(r.CULL_FACE),N(Bi);function it(U){u[U]!==!0&&(r.enable(U),u[U]=!0)}function yt(U){u[U]!==!1&&(r.disable(U),u[U]=!1)}function wt(U,ht){return h[U]!==ht?(r.bindFramebuffer(U,ht),h[U]=ht,U===r.DRAW_FRAMEBUFFER&&(h[r.FRAMEBUFFER]=ht),U===r.FRAMEBUFFER&&(h[r.DRAW_FRAMEBUFFER]=ht),!0):!1}function Ht(U,ht){let Z=d,j=!1;if(U){Z=f.get(ht),Z===void 0&&(Z=[],f.set(ht,Z));const ut=U.textures;if(Z.length!==ut.length||Z[0]!==r.COLOR_ATTACHMENT0){for(let dt=0,Bt=ut.length;dt<Bt;dt++)Z[dt]=r.COLOR_ATTACHMENT0+dt;Z.length=ut.length,j=!0}}else Z[0]!==r.BACK&&(Z[0]=r.BACK,j=!0);j&&r.drawBuffers(Z)}function te(U){return _!==U?(r.useProgram(U),_=U,!0):!1}const Nt={[Lr]:r.FUNC_ADD,[km]:r.FUNC_SUBTRACT,[Vm]:r.FUNC_REVERSE_SUBTRACT};Nt[Hm]=r.MIN,Nt[Gm]=r.MAX;const Lt={[Wm]:r.ZERO,[Xm]:r.ONE,[Ym]:r.SRC_COLOR,[Rc]:r.SRC_ALPHA,[Jm]:r.SRC_ALPHA_SATURATE,[Km]:r.DST_COLOR,[$m]:r.DST_ALPHA,[qm]:r.ONE_MINUS_SRC_COLOR,[Pc]:r.ONE_MINUS_SRC_ALPHA,[jm]:r.ONE_MINUS_DST_COLOR,[Zm]:r.ONE_MINUS_DST_ALPHA,[Qm]:r.CONSTANT_COLOR,[t_]:r.ONE_MINUS_CONSTANT_COLOR,[e_]:r.CONSTANT_ALPHA,[n_]:r.ONE_MINUS_CONSTANT_ALPHA};function N(U,ht,Z,j,ut,dt,Bt,ce,Ue,xt){if(U===Bi){g===!0&&(yt(r.BLEND),g=!1);return}if(g===!1&&(it(r.BLEND),g=!0),U!==zm){if(U!==m||xt!==M){if((p!==Lr||x!==Lr)&&(r.blendEquation(r.FUNC_ADD),p=Lr,x=Lr),xt)switch(U){case Es:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Na:r.blendFunc(r.ONE,r.ONE);break;case Dh:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Lh:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case Es:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Na:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case Dh:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Lh:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}S=null,E=null,C=null,A=null,b.set(0,0,0),R=0,m=U,M=xt}return}ut=ut||ht,dt=dt||Z,Bt=Bt||j,(ht!==p||ut!==x)&&(r.blendEquationSeparate(Nt[ht],Nt[ut]),p=ht,x=ut),(Z!==S||j!==E||dt!==C||Bt!==A)&&(r.blendFuncSeparate(Lt[Z],Lt[j],Lt[dt],Lt[Bt]),S=Z,E=j,C=dt,A=Bt),(ce.equals(b)===!1||Ue!==R)&&(r.blendColor(ce.r,ce.g,ce.b,Ue),b.copy(ce),R=Ue),m=U,M=!1}function xe(U,ht){U.side===gi?yt(r.CULL_FACE):it(r.CULL_FACE);let Z=U.side===Mn;ht&&(Z=!Z),Ot(Z),U.blending===Es&&U.transparent===!1?N(Bi):N(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),a.setFunc(U.depthFunc),a.setTest(U.depthTest),a.setMask(U.depthWrite),s.setMask(U.colorWrite);const j=U.stencilWrite;o.setTest(j),j&&(o.setMask(U.stencilWriteMask),o.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),o.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),se(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?it(r.SAMPLE_ALPHA_TO_COVERAGE):yt(r.SAMPLE_ALPHA_TO_COVERAGE)}function Ot(U){v!==U&&(U?r.frontFace(r.CW):r.frontFace(r.CCW),v=U)}function k(U){U!==Fm?(it(r.CULL_FACE),U!==D&&(U===Ph?r.cullFace(r.BACK):U===Om?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):yt(r.CULL_FACE),D=U}function bt(U){U!==P&&(H&&r.lineWidth(U),P=U)}function se(U,ht,Z){U?(it(r.POLYGON_OFFSET_FILL),(I!==ht||V!==Z)&&(r.polygonOffset(ht,Z),I=ht,V=Z)):yt(r.POLYGON_OFFSET_FILL)}function Pt(U){U?it(r.SCISSOR_TEST):yt(r.SCISSOR_TEST)}function w(U){U===void 0&&(U=r.TEXTURE0+q-1),et!==U&&(r.activeTexture(U),et=U)}function y(U,ht,Z){Z===void 0&&(et===null?Z=r.TEXTURE0+q-1:Z=et);let j=L[Z];j===void 0&&(j={type:void 0,texture:void 0},L[Z]=j),(j.type!==U||j.texture!==ht)&&(et!==Z&&(r.activeTexture(Z),et=Z),r.bindTexture(U,ht||_t[U]),j.type=U,j.texture=ht)}function W(){const U=L[et];U!==void 0&&U.type!==void 0&&(r.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function Q(){try{r.compressedTexImage2D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function J(){try{r.compressedTexImage3D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function K(){try{r.texSubImage2D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ft(){try{r.texSubImage3D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ct(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function mt(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Xt(){try{r.texStorage2D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function rt(){try{r.texStorage3D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function lt(){try{r.texImage2D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function It(){try{r.texImage3D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ut(U){Vt.equals(U)===!1&&(r.scissor(U.x,U.y,U.z,U.w),Vt.copy(U))}function Mt(U){$.equals(U)===!1&&(r.viewport(U.x,U.y,U.z,U.w),$.copy(U))}function $t(U,ht){let Z=c.get(ht);Z===void 0&&(Z=new WeakMap,c.set(ht,Z));let j=Z.get(U);j===void 0&&(j=r.getUniformBlockIndex(ht,U.name),Z.set(U,j))}function Ft(U,ht){const j=c.get(ht).get(U);l.get(ht)!==j&&(r.uniformBlockBinding(ht,j,U.__bindingPointIndex),l.set(ht,j))}function oe(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),a.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),u={},et=null,L={},h={},f=new WeakMap,d=[],_=null,g=!1,m=null,p=null,S=null,E=null,x=null,C=null,A=null,b=new jt(0,0,0),R=0,M=!1,v=null,D=null,P=null,I=null,V=null,Vt.set(0,0,r.canvas.width,r.canvas.height),$.set(0,0,r.canvas.width,r.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:it,disable:yt,bindFramebuffer:wt,drawBuffers:Ht,useProgram:te,setBlending:N,setMaterial:xe,setFlipSided:Ot,setCullFace:k,setLineWidth:bt,setPolygonOffset:se,setScissorTest:Pt,activeTexture:w,bindTexture:y,unbindTexture:W,compressedTexImage2D:Q,compressedTexImage3D:J,texImage2D:lt,texImage3D:It,updateUBOMapping:$t,uniformBlockBinding:Ft,texStorage2D:Xt,texStorage3D:rt,texSubImage2D:K,texSubImage3D:ft,compressedTexSubImage2D:ct,compressedTexSubImage3D:mt,scissor:Ut,viewport:Mt,reset:oe}}function Af(r,t,e,n){const i=yM(n);switch(e){case Dd:return r*t;case Ud:return r*t;case Id:return r*t*2;case Nd:return r*t/i.components*i.byteLength;case Xu:return r*t/i.components*i.byteLength;case Fd:return r*t*2/i.components*i.byteLength;case Yu:return r*t*2/i.components*i.byteLength;case Ld:return r*t*3/i.components*i.byteLength;case ui:return r*t*4/i.components*i.byteLength;case qu:return r*t*4/i.components*i.byteLength;case Bo:case zo:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case ko:case Vo:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Hc:case Wc:return Math.max(r,16)*Math.max(t,8)/4;case Vc:case Gc:return Math.max(r,8)*Math.max(t,8)/2;case Xc:case Yc:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case qc:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case $c:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Zc:return Math.floor((r+4)/5)*Math.floor((t+3)/4)*16;case Kc:return Math.floor((r+4)/5)*Math.floor((t+4)/5)*16;case jc:return Math.floor((r+5)/6)*Math.floor((t+4)/5)*16;case Jc:return Math.floor((r+5)/6)*Math.floor((t+5)/6)*16;case Qc:return Math.floor((r+7)/8)*Math.floor((t+4)/5)*16;case tu:return Math.floor((r+7)/8)*Math.floor((t+5)/6)*16;case eu:return Math.floor((r+7)/8)*Math.floor((t+7)/8)*16;case nu:return Math.floor((r+9)/10)*Math.floor((t+4)/5)*16;case iu:return Math.floor((r+9)/10)*Math.floor((t+5)/6)*16;case ru:return Math.floor((r+9)/10)*Math.floor((t+7)/8)*16;case su:return Math.floor((r+9)/10)*Math.floor((t+9)/10)*16;case au:return Math.floor((r+11)/12)*Math.floor((t+9)/10)*16;case ou:return Math.floor((r+11)/12)*Math.floor((t+11)/12)*16;case Ho:case lu:case cu:return Math.ceil(r/4)*Math.ceil(t/4)*16;case Od:case uu:return Math.ceil(r/4)*Math.ceil(t/4)*8;case hu:case fu:return Math.ceil(r/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function yM(r){switch(r){case Hi:case Cd:return{byteLength:1,components:1};case Fa:case Rd:case zi:return{byteLength:2,components:1};case Gu:case Wu:return{byteLength:2,components:4};case Xr:case Hu:case Ni:return{byteLength:4,components:1};case Pd:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}function EM(r,t,e,n,i,s,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new qt,u=new WeakMap;let h;const f=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(w,y){return d?new OffscreenCanvas(w,y):rl("canvas")}function g(w,y,W){let Q=1;const J=Pt(w);if((J.width>W||J.height>W)&&(Q=W/Math.max(J.width,J.height)),Q<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){const K=Math.floor(Q*J.width),ft=Math.floor(Q*J.height);h===void 0&&(h=_(K,ft));const ct=y?_(K,ft):h;return ct.width=K,ct.height=ft,ct.getContext("2d").drawImage(w,0,0,K,ft),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+K+"x"+ft+")."),ct}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),w;return w}function m(w){return w.generateMipmaps}function p(w){r.generateMipmap(w)}function S(w){return w.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?r.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function E(w,y,W,Q,J=!1){if(w!==null){if(r[w]!==void 0)return r[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let K=y;if(y===r.RED&&(W===r.FLOAT&&(K=r.R32F),W===r.HALF_FLOAT&&(K=r.R16F),W===r.UNSIGNED_BYTE&&(K=r.R8)),y===r.RED_INTEGER&&(W===r.UNSIGNED_BYTE&&(K=r.R8UI),W===r.UNSIGNED_SHORT&&(K=r.R16UI),W===r.UNSIGNED_INT&&(K=r.R32UI),W===r.BYTE&&(K=r.R8I),W===r.SHORT&&(K=r.R16I),W===r.INT&&(K=r.R32I)),y===r.RG&&(W===r.FLOAT&&(K=r.RG32F),W===r.HALF_FLOAT&&(K=r.RG16F),W===r.UNSIGNED_BYTE&&(K=r.RG8)),y===r.RG_INTEGER&&(W===r.UNSIGNED_BYTE&&(K=r.RG8UI),W===r.UNSIGNED_SHORT&&(K=r.RG16UI),W===r.UNSIGNED_INT&&(K=r.RG32UI),W===r.BYTE&&(K=r.RG8I),W===r.SHORT&&(K=r.RG16I),W===r.INT&&(K=r.RG32I)),y===r.RGB_INTEGER&&(W===r.UNSIGNED_BYTE&&(K=r.RGB8UI),W===r.UNSIGNED_SHORT&&(K=r.RGB16UI),W===r.UNSIGNED_INT&&(K=r.RGB32UI),W===r.BYTE&&(K=r.RGB8I),W===r.SHORT&&(K=r.RGB16I),W===r.INT&&(K=r.RGB32I)),y===r.RGBA_INTEGER&&(W===r.UNSIGNED_BYTE&&(K=r.RGBA8UI),W===r.UNSIGNED_SHORT&&(K=r.RGBA16UI),W===r.UNSIGNED_INT&&(K=r.RGBA32UI),W===r.BYTE&&(K=r.RGBA8I),W===r.SHORT&&(K=r.RGBA16I),W===r.INT&&(K=r.RGBA32I)),y===r.RGB&&W===r.UNSIGNED_INT_5_9_9_9_REV&&(K=r.RGB9_E5),y===r.RGBA){const ft=J?vl:le.getTransfer(Q);W===r.FLOAT&&(K=r.RGBA32F),W===r.HALF_FLOAT&&(K=r.RGBA16F),W===r.UNSIGNED_BYTE&&(K=ft===ge?r.SRGB8_ALPHA8:r.RGBA8),W===r.UNSIGNED_SHORT_4_4_4_4&&(K=r.RGBA4),W===r.UNSIGNED_SHORT_5_5_5_1&&(K=r.RGB5_A1)}return(K===r.R16F||K===r.R32F||K===r.RG16F||K===r.RG32F||K===r.RGBA16F||K===r.RGBA32F)&&t.get("EXT_color_buffer_float"),K}function x(w,y){let W;return w?y===null||y===Xr||y===Fs?W=r.DEPTH24_STENCIL8:y===Ni?W=r.DEPTH32F_STENCIL8:y===Fa&&(W=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===Xr||y===Fs?W=r.DEPTH_COMPONENT24:y===Ni?W=r.DEPTH_COMPONENT32F:y===Fa&&(W=r.DEPTH_COMPONENT16),W}function C(w,y){return m(w)===!0||w.isFramebufferTexture&&w.minFilter!==hi&&w.minFilter!==ci?Math.log2(Math.max(y.width,y.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?y.mipmaps.length:1}function A(w){const y=w.target;y.removeEventListener("dispose",A),R(y),y.isVideoTexture&&u.delete(y)}function b(w){const y=w.target;y.removeEventListener("dispose",b),v(y)}function R(w){const y=n.get(w);if(y.__webglInit===void 0)return;const W=w.source,Q=f.get(W);if(Q){const J=Q[y.__cacheKey];J.usedTimes--,J.usedTimes===0&&M(w),Object.keys(Q).length===0&&f.delete(W)}n.remove(w)}function M(w){const y=n.get(w);r.deleteTexture(y.__webglTexture);const W=w.source,Q=f.get(W);delete Q[y.__cacheKey],a.memory.textures--}function v(w){const y=n.get(w);if(w.depthTexture&&(w.depthTexture.dispose(),n.remove(w.depthTexture)),w.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(y.__webglFramebuffer[Q]))for(let J=0;J<y.__webglFramebuffer[Q].length;J++)r.deleteFramebuffer(y.__webglFramebuffer[Q][J]);else r.deleteFramebuffer(y.__webglFramebuffer[Q]);y.__webglDepthbuffer&&r.deleteRenderbuffer(y.__webglDepthbuffer[Q])}else{if(Array.isArray(y.__webglFramebuffer))for(let Q=0;Q<y.__webglFramebuffer.length;Q++)r.deleteFramebuffer(y.__webglFramebuffer[Q]);else r.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&r.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&r.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let Q=0;Q<y.__webglColorRenderbuffer.length;Q++)y.__webglColorRenderbuffer[Q]&&r.deleteRenderbuffer(y.__webglColorRenderbuffer[Q]);y.__webglDepthRenderbuffer&&r.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const W=w.textures;for(let Q=0,J=W.length;Q<J;Q++){const K=n.get(W[Q]);K.__webglTexture&&(r.deleteTexture(K.__webglTexture),a.memory.textures--),n.remove(W[Q])}n.remove(w)}let D=0;function P(){D=0}function I(){const w=D;return w>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+i.maxTextures),D+=1,w}function V(w){const y=[];return y.push(w.wrapS),y.push(w.wrapT),y.push(w.wrapR||0),y.push(w.magFilter),y.push(w.minFilter),y.push(w.anisotropy),y.push(w.internalFormat),y.push(w.format),y.push(w.type),y.push(w.generateMipmaps),y.push(w.premultiplyAlpha),y.push(w.flipY),y.push(w.unpackAlignment),y.push(w.colorSpace),y.join()}function q(w,y){const W=n.get(w);if(w.isVideoTexture&&bt(w),w.isRenderTargetTexture===!1&&w.version>0&&W.__version!==w.version){const Q=w.image;if(Q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{$(W,w,y);return}}e.bindTexture(r.TEXTURE_2D,W.__webglTexture,r.TEXTURE0+y)}function H(w,y){const W=n.get(w);if(w.version>0&&W.__version!==w.version){$(W,w,y);return}e.bindTexture(r.TEXTURE_2D_ARRAY,W.__webglTexture,r.TEXTURE0+y)}function Y(w,y){const W=n.get(w);if(w.version>0&&W.__version!==w.version){$(W,w,y);return}e.bindTexture(r.TEXTURE_3D,W.__webglTexture,r.TEXTURE0+y)}function B(w,y){const W=n.get(w);if(w.version>0&&W.__version!==w.version){nt(W,w,y);return}e.bindTexture(r.TEXTURE_CUBE_MAP,W.__webglTexture,r.TEXTURE0+y)}const et={[zc]:r.REPEAT,[Ir]:r.CLAMP_TO_EDGE,[kc]:r.MIRRORED_REPEAT},L={[hi]:r.NEAREST,[h_]:r.NEAREST_MIPMAP_NEAREST,[Qa]:r.NEAREST_MIPMAP_LINEAR,[ci]:r.LINEAR,[wl]:r.LINEAR_MIPMAP_NEAREST,[Nr]:r.LINEAR_MIPMAP_LINEAR},ot={[m_]:r.NEVER,[S_]:r.ALWAYS,[__]:r.LESS,[zd]:r.LEQUAL,[g_]:r.EQUAL,[M_]:r.GEQUAL,[v_]:r.GREATER,[x_]:r.NOTEQUAL};function Ct(w,y){if(y.type===Ni&&t.has("OES_texture_float_linear")===!1&&(y.magFilter===ci||y.magFilter===wl||y.magFilter===Qa||y.magFilter===Nr||y.minFilter===ci||y.minFilter===wl||y.minFilter===Qa||y.minFilter===Nr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(w,r.TEXTURE_WRAP_S,et[y.wrapS]),r.texParameteri(w,r.TEXTURE_WRAP_T,et[y.wrapT]),(w===r.TEXTURE_3D||w===r.TEXTURE_2D_ARRAY)&&r.texParameteri(w,r.TEXTURE_WRAP_R,et[y.wrapR]),r.texParameteri(w,r.TEXTURE_MAG_FILTER,L[y.magFilter]),r.texParameteri(w,r.TEXTURE_MIN_FILTER,L[y.minFilter]),y.compareFunction&&(r.texParameteri(w,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(w,r.TEXTURE_COMPARE_FUNC,ot[y.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===hi||y.minFilter!==Qa&&y.minFilter!==Nr||y.type===Ni&&t.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||n.get(y).__currentAnisotropy){const W=t.get("EXT_texture_filter_anisotropic");r.texParameterf(w,W.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,i.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy}}}function Vt(w,y){let W=!1;w.__webglInit===void 0&&(w.__webglInit=!0,y.addEventListener("dispose",A));const Q=y.source;let J=f.get(Q);J===void 0&&(J={},f.set(Q,J));const K=V(y);if(K!==w.__cacheKey){J[K]===void 0&&(J[K]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,W=!0),J[K].usedTimes++;const ft=J[w.__cacheKey];ft!==void 0&&(J[w.__cacheKey].usedTimes--,ft.usedTimes===0&&M(y)),w.__cacheKey=K,w.__webglTexture=J[K].texture}return W}function $(w,y,W){let Q=r.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(Q=r.TEXTURE_2D_ARRAY),y.isData3DTexture&&(Q=r.TEXTURE_3D);const J=Vt(w,y),K=y.source;e.bindTexture(Q,w.__webglTexture,r.TEXTURE0+W);const ft=n.get(K);if(K.version!==ft.__version||J===!0){e.activeTexture(r.TEXTURE0+W);const ct=le.getPrimaries(le.workingColorSpace),mt=y.colorSpace===nr?null:le.getPrimaries(y.colorSpace),Xt=y.colorSpace===nr||ct===mt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,y.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,y.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Xt);let rt=g(y.image,!1,i.maxTextureSize);rt=se(y,rt);const lt=s.convert(y.format,y.colorSpace),It=s.convert(y.type);let Ut=E(y.internalFormat,lt,It,y.colorSpace,y.isVideoTexture);Ct(Q,y);let Mt;const $t=y.mipmaps,Ft=y.isVideoTexture!==!0,oe=ft.__version===void 0||J===!0,U=K.dataReady,ht=C(y,rt);if(y.isDepthTexture)Ut=x(y.format===Os,y.type),oe&&(Ft?e.texStorage2D(r.TEXTURE_2D,1,Ut,rt.width,rt.height):e.texImage2D(r.TEXTURE_2D,0,Ut,rt.width,rt.height,0,lt,It,null));else if(y.isDataTexture)if($t.length>0){Ft&&oe&&e.texStorage2D(r.TEXTURE_2D,ht,Ut,$t[0].width,$t[0].height);for(let Z=0,j=$t.length;Z<j;Z++)Mt=$t[Z],Ft?U&&e.texSubImage2D(r.TEXTURE_2D,Z,0,0,Mt.width,Mt.height,lt,It,Mt.data):e.texImage2D(r.TEXTURE_2D,Z,Ut,Mt.width,Mt.height,0,lt,It,Mt.data);y.generateMipmaps=!1}else Ft?(oe&&e.texStorage2D(r.TEXTURE_2D,ht,Ut,rt.width,rt.height),U&&e.texSubImage2D(r.TEXTURE_2D,0,0,0,rt.width,rt.height,lt,It,rt.data)):e.texImage2D(r.TEXTURE_2D,0,Ut,rt.width,rt.height,0,lt,It,rt.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){Ft&&oe&&e.texStorage3D(r.TEXTURE_2D_ARRAY,ht,Ut,$t[0].width,$t[0].height,rt.depth);for(let Z=0,j=$t.length;Z<j;Z++)if(Mt=$t[Z],y.format!==ui)if(lt!==null)if(Ft){if(U)if(y.layerUpdates.size>0){const ut=Af(Mt.width,Mt.height,y.format,y.type);for(const dt of y.layerUpdates){const Bt=Mt.data.subarray(dt*ut/Mt.data.BYTES_PER_ELEMENT,(dt+1)*ut/Mt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Z,0,0,dt,Mt.width,Mt.height,1,lt,Bt)}y.clearLayerUpdates()}else e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Z,0,0,0,Mt.width,Mt.height,rt.depth,lt,Mt.data)}else e.compressedTexImage3D(r.TEXTURE_2D_ARRAY,Z,Ut,Mt.width,Mt.height,rt.depth,0,Mt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ft?U&&e.texSubImage3D(r.TEXTURE_2D_ARRAY,Z,0,0,0,Mt.width,Mt.height,rt.depth,lt,It,Mt.data):e.texImage3D(r.TEXTURE_2D_ARRAY,Z,Ut,Mt.width,Mt.height,rt.depth,0,lt,It,Mt.data)}else{Ft&&oe&&e.texStorage2D(r.TEXTURE_2D,ht,Ut,$t[0].width,$t[0].height);for(let Z=0,j=$t.length;Z<j;Z++)Mt=$t[Z],y.format!==ui?lt!==null?Ft?U&&e.compressedTexSubImage2D(r.TEXTURE_2D,Z,0,0,Mt.width,Mt.height,lt,Mt.data):e.compressedTexImage2D(r.TEXTURE_2D,Z,Ut,Mt.width,Mt.height,0,Mt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ft?U&&e.texSubImage2D(r.TEXTURE_2D,Z,0,0,Mt.width,Mt.height,lt,It,Mt.data):e.texImage2D(r.TEXTURE_2D,Z,Ut,Mt.width,Mt.height,0,lt,It,Mt.data)}else if(y.isDataArrayTexture)if(Ft){if(oe&&e.texStorage3D(r.TEXTURE_2D_ARRAY,ht,Ut,rt.width,rt.height,rt.depth),U)if(y.layerUpdates.size>0){const Z=Af(rt.width,rt.height,y.format,y.type);for(const j of y.layerUpdates){const ut=rt.data.subarray(j*Z/rt.data.BYTES_PER_ELEMENT,(j+1)*Z/rt.data.BYTES_PER_ELEMENT);e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,j,rt.width,rt.height,1,lt,It,ut)}y.clearLayerUpdates()}else e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,rt.width,rt.height,rt.depth,lt,It,rt.data)}else e.texImage3D(r.TEXTURE_2D_ARRAY,0,Ut,rt.width,rt.height,rt.depth,0,lt,It,rt.data);else if(y.isData3DTexture)Ft?(oe&&e.texStorage3D(r.TEXTURE_3D,ht,Ut,rt.width,rt.height,rt.depth),U&&e.texSubImage3D(r.TEXTURE_3D,0,0,0,0,rt.width,rt.height,rt.depth,lt,It,rt.data)):e.texImage3D(r.TEXTURE_3D,0,Ut,rt.width,rt.height,rt.depth,0,lt,It,rt.data);else if(y.isFramebufferTexture){if(oe)if(Ft)e.texStorage2D(r.TEXTURE_2D,ht,Ut,rt.width,rt.height);else{let Z=rt.width,j=rt.height;for(let ut=0;ut<ht;ut++)e.texImage2D(r.TEXTURE_2D,ut,Ut,Z,j,0,lt,It,null),Z>>=1,j>>=1}}else if($t.length>0){if(Ft&&oe){const Z=Pt($t[0]);e.texStorage2D(r.TEXTURE_2D,ht,Ut,Z.width,Z.height)}for(let Z=0,j=$t.length;Z<j;Z++)Mt=$t[Z],Ft?U&&e.texSubImage2D(r.TEXTURE_2D,Z,0,0,lt,It,Mt):e.texImage2D(r.TEXTURE_2D,Z,Ut,lt,It,Mt);y.generateMipmaps=!1}else if(Ft){if(oe){const Z=Pt(rt);e.texStorage2D(r.TEXTURE_2D,ht,Ut,Z.width,Z.height)}U&&e.texSubImage2D(r.TEXTURE_2D,0,0,0,lt,It,rt)}else e.texImage2D(r.TEXTURE_2D,0,Ut,lt,It,rt);m(y)&&p(Q),ft.__version=K.version,y.onUpdate&&y.onUpdate(y)}w.__version=y.version}function nt(w,y,W){if(y.image.length!==6)return;const Q=Vt(w,y),J=y.source;e.bindTexture(r.TEXTURE_CUBE_MAP,w.__webglTexture,r.TEXTURE0+W);const K=n.get(J);if(J.version!==K.__version||Q===!0){e.activeTexture(r.TEXTURE0+W);const ft=le.getPrimaries(le.workingColorSpace),ct=y.colorSpace===nr?null:le.getPrimaries(y.colorSpace),mt=y.colorSpace===nr||ft===ct?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,y.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,y.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,mt);const Xt=y.isCompressedTexture||y.image[0].isCompressedTexture,rt=y.image[0]&&y.image[0].isDataTexture,lt=[];for(let j=0;j<6;j++)!Xt&&!rt?lt[j]=g(y.image[j],!0,i.maxCubemapSize):lt[j]=rt?y.image[j].image:y.image[j],lt[j]=se(y,lt[j]);const It=lt[0],Ut=s.convert(y.format,y.colorSpace),Mt=s.convert(y.type),$t=E(y.internalFormat,Ut,Mt,y.colorSpace),Ft=y.isVideoTexture!==!0,oe=K.__version===void 0||Q===!0,U=J.dataReady;let ht=C(y,It);Ct(r.TEXTURE_CUBE_MAP,y);let Z;if(Xt){Ft&&oe&&e.texStorage2D(r.TEXTURE_CUBE_MAP,ht,$t,It.width,It.height);for(let j=0;j<6;j++){Z=lt[j].mipmaps;for(let ut=0;ut<Z.length;ut++){const dt=Z[ut];y.format!==ui?Ut!==null?Ft?U&&e.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,ut,0,0,dt.width,dt.height,Ut,dt.data):e.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,ut,$t,dt.width,dt.height,0,dt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ft?U&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,ut,0,0,dt.width,dt.height,Ut,Mt,dt.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,ut,$t,dt.width,dt.height,0,Ut,Mt,dt.data)}}}else{if(Z=y.mipmaps,Ft&&oe){Z.length>0&&ht++;const j=Pt(lt[0]);e.texStorage2D(r.TEXTURE_CUBE_MAP,ht,$t,j.width,j.height)}for(let j=0;j<6;j++)if(rt){Ft?U&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,lt[j].width,lt[j].height,Ut,Mt,lt[j].data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,$t,lt[j].width,lt[j].height,0,Ut,Mt,lt[j].data);for(let ut=0;ut<Z.length;ut++){const Bt=Z[ut].image[j].image;Ft?U&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,ut+1,0,0,Bt.width,Bt.height,Ut,Mt,Bt.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,ut+1,$t,Bt.width,Bt.height,0,Ut,Mt,Bt.data)}}else{Ft?U&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,Ut,Mt,lt[j]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,$t,Ut,Mt,lt[j]);for(let ut=0;ut<Z.length;ut++){const dt=Z[ut];Ft?U&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,ut+1,0,0,Ut,Mt,dt.image[j]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,ut+1,$t,Ut,Mt,dt.image[j])}}}m(y)&&p(r.TEXTURE_CUBE_MAP),K.__version=J.version,y.onUpdate&&y.onUpdate(y)}w.__version=y.version}function _t(w,y,W,Q,J,K){const ft=s.convert(W.format,W.colorSpace),ct=s.convert(W.type),mt=E(W.internalFormat,ft,ct,W.colorSpace),Xt=n.get(y),rt=n.get(W);if(rt.__renderTarget=y,!Xt.__hasExternalTextures){const lt=Math.max(1,y.width>>K),It=Math.max(1,y.height>>K);J===r.TEXTURE_3D||J===r.TEXTURE_2D_ARRAY?e.texImage3D(J,K,mt,lt,It,y.depth,0,ft,ct,null):e.texImage2D(J,K,mt,lt,It,0,ft,ct,null)}e.bindFramebuffer(r.FRAMEBUFFER,w),k(y)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Q,J,rt.__webglTexture,0,Ot(y)):(J===r.TEXTURE_2D||J>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,Q,J,rt.__webglTexture,K),e.bindFramebuffer(r.FRAMEBUFFER,null)}function it(w,y,W){if(r.bindRenderbuffer(r.RENDERBUFFER,w),y.depthBuffer){const Q=y.depthTexture,J=Q&&Q.isDepthTexture?Q.type:null,K=x(y.stencilBuffer,J),ft=y.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ct=Ot(y);k(y)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,ct,K,y.width,y.height):W?r.renderbufferStorageMultisample(r.RENDERBUFFER,ct,K,y.width,y.height):r.renderbufferStorage(r.RENDERBUFFER,K,y.width,y.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,ft,r.RENDERBUFFER,w)}else{const Q=y.textures;for(let J=0;J<Q.length;J++){const K=Q[J],ft=s.convert(K.format,K.colorSpace),ct=s.convert(K.type),mt=E(K.internalFormat,ft,ct,K.colorSpace),Xt=Ot(y);W&&k(y)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,Xt,mt,y.width,y.height):k(y)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Xt,mt,y.width,y.height):r.renderbufferStorage(r.RENDERBUFFER,mt,y.width,y.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function yt(w,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(r.FRAMEBUFFER,w),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Q=n.get(y.depthTexture);Q.__renderTarget=y,(!Q.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),q(y.depthTexture,0);const J=Q.__webglTexture,K=Ot(y);if(y.depthTexture.format===Ts)k(y)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,J,0,K):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,J,0);else if(y.depthTexture.format===Os)k(y)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,J,0,K):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,J,0);else throw new Error("Unknown depthTexture format")}function wt(w){const y=n.get(w),W=w.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==w.depthTexture){const Q=w.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),Q){const J=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,Q.removeEventListener("dispose",J)};Q.addEventListener("dispose",J),y.__depthDisposeCallback=J}y.__boundDepthTexture=Q}if(w.depthTexture&&!y.__autoAllocateDepthBuffer){if(W)throw new Error("target.depthTexture not supported in Cube render targets");yt(y.__webglFramebuffer,w)}else if(W){y.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)if(e.bindFramebuffer(r.FRAMEBUFFER,y.__webglFramebuffer[Q]),y.__webglDepthbuffer[Q]===void 0)y.__webglDepthbuffer[Q]=r.createRenderbuffer(),it(y.__webglDepthbuffer[Q],w,!1);else{const J=w.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,K=y.__webglDepthbuffer[Q];r.bindRenderbuffer(r.RENDERBUFFER,K),r.framebufferRenderbuffer(r.FRAMEBUFFER,J,r.RENDERBUFFER,K)}}else if(e.bindFramebuffer(r.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=r.createRenderbuffer(),it(y.__webglDepthbuffer,w,!1);else{const Q=w.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,J=y.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,J),r.framebufferRenderbuffer(r.FRAMEBUFFER,Q,r.RENDERBUFFER,J)}e.bindFramebuffer(r.FRAMEBUFFER,null)}function Ht(w,y,W){const Q=n.get(w);y!==void 0&&_t(Q.__webglFramebuffer,w,w.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),W!==void 0&&wt(w)}function te(w){const y=w.texture,W=n.get(w),Q=n.get(y);w.addEventListener("dispose",b);const J=w.textures,K=w.isWebGLCubeRenderTarget===!0,ft=J.length>1;if(ft||(Q.__webglTexture===void 0&&(Q.__webglTexture=r.createTexture()),Q.__version=y.version,a.memory.textures++),K){W.__webglFramebuffer=[];for(let ct=0;ct<6;ct++)if(y.mipmaps&&y.mipmaps.length>0){W.__webglFramebuffer[ct]=[];for(let mt=0;mt<y.mipmaps.length;mt++)W.__webglFramebuffer[ct][mt]=r.createFramebuffer()}else W.__webglFramebuffer[ct]=r.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){W.__webglFramebuffer=[];for(let ct=0;ct<y.mipmaps.length;ct++)W.__webglFramebuffer[ct]=r.createFramebuffer()}else W.__webglFramebuffer=r.createFramebuffer();if(ft)for(let ct=0,mt=J.length;ct<mt;ct++){const Xt=n.get(J[ct]);Xt.__webglTexture===void 0&&(Xt.__webglTexture=r.createTexture(),a.memory.textures++)}if(w.samples>0&&k(w)===!1){W.__webglMultisampledFramebuffer=r.createFramebuffer(),W.__webglColorRenderbuffer=[],e.bindFramebuffer(r.FRAMEBUFFER,W.__webglMultisampledFramebuffer);for(let ct=0;ct<J.length;ct++){const mt=J[ct];W.__webglColorRenderbuffer[ct]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,W.__webglColorRenderbuffer[ct]);const Xt=s.convert(mt.format,mt.colorSpace),rt=s.convert(mt.type),lt=E(mt.internalFormat,Xt,rt,mt.colorSpace,w.isXRRenderTarget===!0),It=Ot(w);r.renderbufferStorageMultisample(r.RENDERBUFFER,It,lt,w.width,w.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ct,r.RENDERBUFFER,W.__webglColorRenderbuffer[ct])}r.bindRenderbuffer(r.RENDERBUFFER,null),w.depthBuffer&&(W.__webglDepthRenderbuffer=r.createRenderbuffer(),it(W.__webglDepthRenderbuffer,w,!0)),e.bindFramebuffer(r.FRAMEBUFFER,null)}}if(K){e.bindTexture(r.TEXTURE_CUBE_MAP,Q.__webglTexture),Ct(r.TEXTURE_CUBE_MAP,y);for(let ct=0;ct<6;ct++)if(y.mipmaps&&y.mipmaps.length>0)for(let mt=0;mt<y.mipmaps.length;mt++)_t(W.__webglFramebuffer[ct][mt],w,y,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ct,mt);else _t(W.__webglFramebuffer[ct],w,y,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0);m(y)&&p(r.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(ft){for(let ct=0,mt=J.length;ct<mt;ct++){const Xt=J[ct],rt=n.get(Xt);e.bindTexture(r.TEXTURE_2D,rt.__webglTexture),Ct(r.TEXTURE_2D,Xt),_t(W.__webglFramebuffer,w,Xt,r.COLOR_ATTACHMENT0+ct,r.TEXTURE_2D,0),m(Xt)&&p(r.TEXTURE_2D)}e.unbindTexture()}else{let ct=r.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(ct=w.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),e.bindTexture(ct,Q.__webglTexture),Ct(ct,y),y.mipmaps&&y.mipmaps.length>0)for(let mt=0;mt<y.mipmaps.length;mt++)_t(W.__webglFramebuffer[mt],w,y,r.COLOR_ATTACHMENT0,ct,mt);else _t(W.__webglFramebuffer,w,y,r.COLOR_ATTACHMENT0,ct,0);m(y)&&p(ct),e.unbindTexture()}w.depthBuffer&&wt(w)}function Nt(w){const y=w.textures;for(let W=0,Q=y.length;W<Q;W++){const J=y[W];if(m(J)){const K=S(w),ft=n.get(J).__webglTexture;e.bindTexture(K,ft),p(K),e.unbindTexture()}}}const Lt=[],N=[];function xe(w){if(w.samples>0){if(k(w)===!1){const y=w.textures,W=w.width,Q=w.height;let J=r.COLOR_BUFFER_BIT;const K=w.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ft=n.get(w),ct=y.length>1;if(ct)for(let mt=0;mt<y.length;mt++)e.bindFramebuffer(r.FRAMEBUFFER,ft.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+mt,r.RENDERBUFFER,null),e.bindFramebuffer(r.FRAMEBUFFER,ft.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+mt,r.TEXTURE_2D,null,0);e.bindFramebuffer(r.READ_FRAMEBUFFER,ft.__webglMultisampledFramebuffer),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,ft.__webglFramebuffer);for(let mt=0;mt<y.length;mt++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(J|=r.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(J|=r.STENCIL_BUFFER_BIT)),ct){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,ft.__webglColorRenderbuffer[mt]);const Xt=n.get(y[mt]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Xt,0)}r.blitFramebuffer(0,0,W,Q,0,0,W,Q,J,r.NEAREST),l===!0&&(Lt.length=0,N.length=0,Lt.push(r.COLOR_ATTACHMENT0+mt),w.depthBuffer&&w.resolveDepthBuffer===!1&&(Lt.push(K),N.push(K),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,N)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,Lt))}if(e.bindFramebuffer(r.READ_FRAMEBUFFER,null),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),ct)for(let mt=0;mt<y.length;mt++){e.bindFramebuffer(r.FRAMEBUFFER,ft.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+mt,r.RENDERBUFFER,ft.__webglColorRenderbuffer[mt]);const Xt=n.get(y[mt]).__webglTexture;e.bindFramebuffer(r.FRAMEBUFFER,ft.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+mt,r.TEXTURE_2D,Xt,0)}e.bindFramebuffer(r.DRAW_FRAMEBUFFER,ft.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&l){const y=w.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[y])}}}function Ot(w){return Math.min(i.maxSamples,w.samples)}function k(w){const y=n.get(w);return w.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function bt(w){const y=a.render.frame;u.get(w)!==y&&(u.set(w,y),w.update())}function se(w,y){const W=w.colorSpace,Q=w.format,J=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||W!==Ys&&W!==nr&&(le.getTransfer(W)===ge?(Q!==ui||J!==Hi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",W)),y}function Pt(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(c.width=w.naturalWidth||w.width,c.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(c.width=w.displayWidth,c.height=w.displayHeight):(c.width=w.width,c.height=w.height),c}this.allocateTextureUnit=I,this.resetTextureUnits=P,this.setTexture2D=q,this.setTexture2DArray=H,this.setTexture3D=Y,this.setTextureCube=B,this.rebindTextures=Ht,this.setupRenderTarget=te,this.updateRenderTargetMipmap=Nt,this.updateMultisampleRenderTarget=xe,this.setupDepthRenderbuffer=wt,this.setupFrameBufferTexture=_t,this.useMultisampledRTT=k}function TM(r,t){function e(n,i=nr){let s;const a=le.getTransfer(i);if(n===Hi)return r.UNSIGNED_BYTE;if(n===Gu)return r.UNSIGNED_SHORT_4_4_4_4;if(n===Wu)return r.UNSIGNED_SHORT_5_5_5_1;if(n===Pd)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===Cd)return r.BYTE;if(n===Rd)return r.SHORT;if(n===Fa)return r.UNSIGNED_SHORT;if(n===Hu)return r.INT;if(n===Xr)return r.UNSIGNED_INT;if(n===Ni)return r.FLOAT;if(n===zi)return r.HALF_FLOAT;if(n===Dd)return r.ALPHA;if(n===Ld)return r.RGB;if(n===ui)return r.RGBA;if(n===Ud)return r.LUMINANCE;if(n===Id)return r.LUMINANCE_ALPHA;if(n===Ts)return r.DEPTH_COMPONENT;if(n===Os)return r.DEPTH_STENCIL;if(n===Nd)return r.RED;if(n===Xu)return r.RED_INTEGER;if(n===Fd)return r.RG;if(n===Yu)return r.RG_INTEGER;if(n===qu)return r.RGBA_INTEGER;if(n===Bo||n===zo||n===ko||n===Vo)if(a===ge)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Bo)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===zo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ko)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Vo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Bo)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===zo)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ko)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Vo)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Vc||n===Hc||n===Gc||n===Wc)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Vc)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Hc)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Gc)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Wc)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Xc||n===Yc||n===qc)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Xc||n===Yc)return a===ge?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===qc)return a===ge?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===$c||n===Zc||n===Kc||n===jc||n===Jc||n===Qc||n===tu||n===eu||n===nu||n===iu||n===ru||n===su||n===au||n===ou)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(n===$c)return a===ge?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Zc)return a===ge?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Kc)return a===ge?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===jc)return a===ge?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Jc)return a===ge?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Qc)return a===ge?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===tu)return a===ge?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===eu)return a===ge?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===nu)return a===ge?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===iu)return a===ge?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ru)return a===ge?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===su)return a===ge?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===au)return a===ge?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ou)return a===ge?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ho||n===lu||n===cu)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(n===Ho)return a===ge?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===lu)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===cu)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Od||n===uu||n===hu||n===fu)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(n===Ho)return s.COMPRESSED_RED_RGTC1_EXT;if(n===uu)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===hu)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===fu)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Fs?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:e}}class bM extends zn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class fa extends Qe{constructor(){super(),this.isGroup=!0,this.type="Group"}}const wM={type:"move"};class ec{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new fa,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new fa,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new fa,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new z),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const g of t.hand.values()){const m=e.getJointPose(g,n),p=this._getHandJoint(c,g);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),d=.02,_=.005;c.inputState.pinching&&f>d+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=d-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(wM)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new fa;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const AM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,CM=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class RM{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const i=new Sn,s=t.properties.get(i);s.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new ln({vertexShader:AM,fragmentShader:CM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new wn(new Ml(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class PM extends qs{constructor(t,e){super();const n=this;let i=null,s=1,a=null,o="local-floor",l=1,c=null,u=null,h=null,f=null,d=null,_=null;const g=new RM,m=e.getContextAttributes();let p=null,S=null;const E=[],x=[],C=new qt;let A=null;const b=new zn;b.viewport=new ve;const R=new zn;R.viewport=new ve;const M=[b,R],v=new bM;let D=null,P=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let nt=E[$];return nt===void 0&&(nt=new ec,E[$]=nt),nt.getTargetRaySpace()},this.getControllerGrip=function($){let nt=E[$];return nt===void 0&&(nt=new ec,E[$]=nt),nt.getGripSpace()},this.getHand=function($){let nt=E[$];return nt===void 0&&(nt=new ec,E[$]=nt),nt.getHandSpace()};function I($){const nt=x.indexOf($.inputSource);if(nt===-1)return;const _t=E[nt];_t!==void 0&&(_t.update($.inputSource,$.frame,c||a),_t.dispatchEvent({type:$.type,data:$.inputSource}))}function V(){i.removeEventListener("select",I),i.removeEventListener("selectstart",I),i.removeEventListener("selectend",I),i.removeEventListener("squeeze",I),i.removeEventListener("squeezestart",I),i.removeEventListener("squeezeend",I),i.removeEventListener("end",V),i.removeEventListener("inputsourceschange",q);for(let $=0;$<E.length;$++){const nt=x[$];nt!==null&&(x[$]=null,E[$].disconnect(nt))}D=null,P=null,g.reset(),t.setRenderTarget(p),d=null,f=null,h=null,i=null,S=null,Vt.stop(),n.isPresenting=!1,t.setPixelRatio(A),t.setSize(C.width,C.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){s=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){o=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function($){c=$},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return h},this.getFrame=function(){return _},this.getSession=function(){return i},this.setSession=async function($){if(i=$,i!==null){if(p=t.getRenderTarget(),i.addEventListener("select",I),i.addEventListener("selectstart",I),i.addEventListener("selectend",I),i.addEventListener("squeeze",I),i.addEventListener("squeezestart",I),i.addEventListener("squeezeend",I),i.addEventListener("end",V),i.addEventListener("inputsourceschange",q),m.xrCompatible!==!0&&await e.makeXRCompatible(),A=t.getPixelRatio(),t.getSize(C),i.renderState.layers===void 0){const nt={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(i,e,nt),i.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),S=new fi(d.framebufferWidth,d.framebufferHeight,{format:ui,type:Hi,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let nt=null,_t=null,it=null;m.depth&&(it=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,nt=m.stencil?Os:Ts,_t=m.stencil?Fs:Xr);const yt={colorFormat:e.RGBA8,depthFormat:it,scaleFactor:s};h=new XRWebGLBinding(i,e),f=h.createProjectionLayer(yt),i.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),S=new fi(f.textureWidth,f.textureHeight,{format:ui,type:Hi,depthTexture:new Jd(f.textureWidth,f.textureHeight,_t,void 0,void 0,void 0,void 0,void 0,void 0,nt),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),Vt.setContext(i),Vt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function q($){for(let nt=0;nt<$.removed.length;nt++){const _t=$.removed[nt],it=x.indexOf(_t);it>=0&&(x[it]=null,E[it].disconnect(_t))}for(let nt=0;nt<$.added.length;nt++){const _t=$.added[nt];let it=x.indexOf(_t);if(it===-1){for(let wt=0;wt<E.length;wt++)if(wt>=x.length){x.push(_t),it=wt;break}else if(x[wt]===null){x[wt]=_t,it=wt;break}if(it===-1)break}const yt=E[it];yt&&yt.connect(_t)}}const H=new z,Y=new z;function B($,nt,_t){H.setFromMatrixPosition(nt.matrixWorld),Y.setFromMatrixPosition(_t.matrixWorld);const it=H.distanceTo(Y),yt=nt.projectionMatrix.elements,wt=_t.projectionMatrix.elements,Ht=yt[14]/(yt[10]-1),te=yt[14]/(yt[10]+1),Nt=(yt[9]+1)/yt[5],Lt=(yt[9]-1)/yt[5],N=(yt[8]-1)/yt[0],xe=(wt[8]+1)/wt[0],Ot=Ht*N,k=Ht*xe,bt=it/(-N+xe),se=bt*-N;if(nt.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(se),$.translateZ(bt),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),yt[10]===-1)$.projectionMatrix.copy(nt.projectionMatrix),$.projectionMatrixInverse.copy(nt.projectionMatrixInverse);else{const Pt=Ht+bt,w=te+bt,y=Ot-se,W=k+(it-se),Q=Nt*te/w*Pt,J=Lt*te/w*Pt;$.projectionMatrix.makePerspective(y,W,Q,J,Pt,w),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function et($,nt){nt===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(nt.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(i===null)return;let nt=$.near,_t=$.far;g.texture!==null&&(g.depthNear>0&&(nt=g.depthNear),g.depthFar>0&&(_t=g.depthFar)),v.near=R.near=b.near=nt,v.far=R.far=b.far=_t,(D!==v.near||P!==v.far)&&(i.updateRenderState({depthNear:v.near,depthFar:v.far}),D=v.near,P=v.far),b.layers.mask=$.layers.mask|2,R.layers.mask=$.layers.mask|4,v.layers.mask=b.layers.mask|R.layers.mask;const it=$.parent,yt=v.cameras;et(v,it);for(let wt=0;wt<yt.length;wt++)et(yt[wt],it);yt.length===2?B(v,b,R):v.projectionMatrix.copy(b.projectionMatrix),L($,v,it)};function L($,nt,_t){_t===null?$.matrix.copy(nt.matrixWorld):($.matrix.copy(_t.matrixWorld),$.matrix.invert(),$.matrix.multiply(nt.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(nt.projectionMatrix),$.projectionMatrixInverse.copy(nt.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=du*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function($){l=$,f!==null&&(f.fixedFoveation=$),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=$)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(v)};let ot=null;function Ct($,nt){if(u=nt.getViewerPose(c||a),_=nt,u!==null){const _t=u.views;d!==null&&(t.setRenderTargetFramebuffer(S,d.framebuffer),t.setRenderTarget(S));let it=!1;_t.length!==v.cameras.length&&(v.cameras.length=0,it=!0);for(let wt=0;wt<_t.length;wt++){const Ht=_t[wt];let te=null;if(d!==null)te=d.getViewport(Ht);else{const Lt=h.getViewSubImage(f,Ht);te=Lt.viewport,wt===0&&(t.setRenderTargetTextures(S,Lt.colorTexture,f.ignoreDepthValues?void 0:Lt.depthStencilTexture),t.setRenderTarget(S))}let Nt=M[wt];Nt===void 0&&(Nt=new zn,Nt.layers.enable(wt),Nt.viewport=new ve,M[wt]=Nt),Nt.matrix.fromArray(Ht.transform.matrix),Nt.matrix.decompose(Nt.position,Nt.quaternion,Nt.scale),Nt.projectionMatrix.fromArray(Ht.projectionMatrix),Nt.projectionMatrixInverse.copy(Nt.projectionMatrix).invert(),Nt.viewport.set(te.x,te.y,te.width,te.height),wt===0&&(v.matrix.copy(Nt.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),it===!0&&v.cameras.push(Nt)}const yt=i.enabledFeatures;if(yt&&yt.includes("depth-sensing")){const wt=h.getDepthInformation(_t[0]);wt&&wt.isValid&&wt.texture&&g.init(t,wt,i.renderState)}}for(let _t=0;_t<E.length;_t++){const it=x[_t],yt=E[_t];it!==null&&yt!==void 0&&yt.update(it,nt,c||a)}ot&&ot($,nt),nt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:nt}),_=null}const Vt=new jd;Vt.setAnimationLoop(Ct),this.setAnimationLoop=function($){ot=$},this.dispose=function(){}}}const Tr=new Ei,DM=new Ce;function LM(r,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,$d(r)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,S,E,x){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),h(m,p)):p.isMeshPhongMaterial?(s(m,p),u(m,p)):p.isMeshStandardMaterial?(s(m,p),f(m,p),p.isMeshPhysicalMaterial&&d(m,p,x)):p.isMeshMatcapMaterial?(s(m,p),_(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),g(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,S,E):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Mn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Mn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const S=t.get(p),E=S.envMap,x=S.envMapRotation;E&&(m.envMap.value=E,Tr.copy(x),Tr.x*=-1,Tr.y*=-1,Tr.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(Tr.y*=-1,Tr.z*=-1),m.envMapRotation.value.setFromMatrix4(DM.makeRotationFromEuler(Tr)),m.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,S,E){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*S,m.scale.value=E*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,S){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Mn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=S.texture,m.transmissionSamplerSize.value.set(S.width,S.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,p){p.matcap&&(m.matcap.value=p.matcap)}function g(m,p){const S=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(S.matrixWorld),m.nearDistance.value=S.shadow.camera.near,m.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function UM(r,t,e,n){let i={},s={},a=[];const o=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function l(S,E){const x=E.program;n.uniformBlockBinding(S,x)}function c(S,E){let x=i[S.id];x===void 0&&(_(S),x=u(S),i[S.id]=x,S.addEventListener("dispose",m));const C=E.program;n.updateUBOMapping(S,C);const A=t.render.frame;s[S.id]!==A&&(f(S),s[S.id]=A)}function u(S){const E=h();S.__bindingPointIndex=E;const x=r.createBuffer(),C=S.__size,A=S.usage;return r.bindBuffer(r.UNIFORM_BUFFER,x),r.bufferData(r.UNIFORM_BUFFER,C,A),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,E,x),x}function h(){for(let S=0;S<o;S++)if(a.indexOf(S)===-1)return a.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(S){const E=i[S.id],x=S.uniforms,C=S.__cache;r.bindBuffer(r.UNIFORM_BUFFER,E);for(let A=0,b=x.length;A<b;A++){const R=Array.isArray(x[A])?x[A]:[x[A]];for(let M=0,v=R.length;M<v;M++){const D=R[M];if(d(D,A,M,C)===!0){const P=D.__offset,I=Array.isArray(D.value)?D.value:[D.value];let V=0;for(let q=0;q<I.length;q++){const H=I[q],Y=g(H);typeof H=="number"||typeof H=="boolean"?(D.__data[0]=H,r.bufferSubData(r.UNIFORM_BUFFER,P+V,D.__data)):H.isMatrix3?(D.__data[0]=H.elements[0],D.__data[1]=H.elements[1],D.__data[2]=H.elements[2],D.__data[3]=0,D.__data[4]=H.elements[3],D.__data[5]=H.elements[4],D.__data[6]=H.elements[5],D.__data[7]=0,D.__data[8]=H.elements[6],D.__data[9]=H.elements[7],D.__data[10]=H.elements[8],D.__data[11]=0):(H.toArray(D.__data,V),V+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,P,D.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function d(S,E,x,C){const A=S.value,b=E+"_"+x;if(C[b]===void 0)return typeof A=="number"||typeof A=="boolean"?C[b]=A:C[b]=A.clone(),!0;{const R=C[b];if(typeof A=="number"||typeof A=="boolean"){if(R!==A)return C[b]=A,!0}else if(R.equals(A)===!1)return R.copy(A),!0}return!1}function _(S){const E=S.uniforms;let x=0;const C=16;for(let b=0,R=E.length;b<R;b++){const M=Array.isArray(E[b])?E[b]:[E[b]];for(let v=0,D=M.length;v<D;v++){const P=M[v],I=Array.isArray(P.value)?P.value:[P.value];for(let V=0,q=I.length;V<q;V++){const H=I[V],Y=g(H),B=x%C,et=B%Y.boundary,L=B+et;x+=et,L!==0&&C-L<Y.storage&&(x+=C-L),P.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),P.__offset=x,x+=Y.storage}}}const A=x%C;return A>0&&(x+=C-A),S.__size=x,S.__cache={},this}function g(S){const E={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(E.boundary=4,E.storage=4):S.isVector2?(E.boundary=8,E.storage=8):S.isVector3||S.isColor?(E.boundary=16,E.storage=12):S.isVector4?(E.boundary=16,E.storage=16):S.isMatrix3?(E.boundary=48,E.storage=48):S.isMatrix4?(E.boundary=64,E.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),E}function m(S){const E=S.target;E.removeEventListener("dispose",m);const x=a.indexOf(E.__bindingPointIndex);a.splice(x,1),r.deleteBuffer(i[E.id]),delete i[E.id],delete s[E.id]}function p(){for(const S in i)r.deleteBuffer(i[S]);a=[],i={},s={}}return{bind:l,update:c,dispose:p}}class IM{constructor(t={}){const{canvas:e=E_(),context:n=null,depth:i=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=a;const _=new Uint32Array(4),g=new Int32Array(4);let m=null,p=null;const S=[],E=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=vn,this.toneMapping=cr,this.toneMappingExposure=1;const x=this;let C=!1,A=0,b=0,R=null,M=-1,v=null;const D=new ve,P=new ve;let I=null;const V=new jt(0);let q=0,H=e.width,Y=e.height,B=1,et=null,L=null;const ot=new ve(0,0,H,Y),Ct=new ve(0,0,H,Y);let Vt=!1;const $=new $u;let nt=!1,_t=!1;const it=new Ce,yt=new Ce,wt=new z,Ht=new ve,te={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Nt=!1;function Lt(){return R===null?B:1}let N=n;function xe(T,F){return e.getContext(T,F)}try{const T={alpha:!0,depth:i,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Vu}`),e.addEventListener("webglcontextlost",j,!1),e.addEventListener("webglcontextrestored",ut,!1),e.addEventListener("webglcontextcreationerror",dt,!1),N===null){const F="webgl2";if(N=xe(F,T),N===null)throw xe(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let Ot,k,bt,se,Pt,w,y,W,Q,J,K,ft,ct,mt,Xt,rt,lt,It,Ut,Mt,$t,Ft,oe,U;function ht(){Ot=new zv(N),Ot.init(),Ft=new TM(N,Ot),k=new Uv(N,Ot,t,Ft),bt=new SM(N,Ot),k.reverseDepthBuffer&&f&&bt.buffers.depth.setReversed(!0),se=new Hv(N),Pt=new aM,w=new EM(N,Ot,bt,Pt,k,Ft,se),y=new Nv(x),W=new Bv(x),Q=new Z_(N),oe=new Dv(N,Q),J=new kv(N,Q,se,oe),K=new Wv(N,J,Q,se),Ut=new Gv(N,k,w),rt=new Iv(Pt),ft=new sM(x,y,W,Ot,k,oe,rt),ct=new LM(x,Pt),mt=new lM,Xt=new pM(Ot),It=new Pv(x,y,W,bt,K,d,l),lt=new xM(x,K,k),U=new UM(N,se,k,bt),Mt=new Lv(N,Ot,se),$t=new Vv(N,Ot,se),se.programs=ft.programs,x.capabilities=k,x.extensions=Ot,x.properties=Pt,x.renderLists=mt,x.shadowMap=lt,x.state=bt,x.info=se}ht();const Z=new PM(x,N);this.xr=Z,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){const T=Ot.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=Ot.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return B},this.setPixelRatio=function(T){T!==void 0&&(B=T,this.setSize(H,Y,!1))},this.getSize=function(T){return T.set(H,Y)},this.setSize=function(T,F,G=!0){if(Z.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}H=T,Y=F,e.width=Math.floor(T*B),e.height=Math.floor(F*B),G===!0&&(e.style.width=T+"px",e.style.height=F+"px"),this.setViewport(0,0,T,F)},this.getDrawingBufferSize=function(T){return T.set(H*B,Y*B).floor()},this.setDrawingBufferSize=function(T,F,G){H=T,Y=F,B=G,e.width=Math.floor(T*G),e.height=Math.floor(F*G),this.setViewport(0,0,T,F)},this.getCurrentViewport=function(T){return T.copy(D)},this.getViewport=function(T){return T.copy(ot)},this.setViewport=function(T,F,G,X){T.isVector4?ot.set(T.x,T.y,T.z,T.w):ot.set(T,F,G,X),bt.viewport(D.copy(ot).multiplyScalar(B).round())},this.getScissor=function(T){return T.copy(Ct)},this.setScissor=function(T,F,G,X){T.isVector4?Ct.set(T.x,T.y,T.z,T.w):Ct.set(T,F,G,X),bt.scissor(P.copy(Ct).multiplyScalar(B).round())},this.getScissorTest=function(){return Vt},this.setScissorTest=function(T){bt.setScissorTest(Vt=T)},this.setOpaqueSort=function(T){et=T},this.setTransparentSort=function(T){L=T},this.getClearColor=function(T){return T.copy(It.getClearColor())},this.setClearColor=function(){It.setClearColor.apply(It,arguments)},this.getClearAlpha=function(){return It.getClearAlpha()},this.setClearAlpha=function(){It.setClearAlpha.apply(It,arguments)},this.clear=function(T=!0,F=!0,G=!0){let X=0;if(T){let O=!1;if(R!==null){const st=R.texture.format;O=st===qu||st===Yu||st===Xu}if(O){const st=R.texture.type,at=st===Hi||st===Xr||st===Fa||st===Fs||st===Gu||st===Wu,pt=It.getClearColor(),St=It.getClearAlpha(),zt=pt.r,Wt=pt.g,Tt=pt.b;at?(_[0]=zt,_[1]=Wt,_[2]=Tt,_[3]=St,N.clearBufferuiv(N.COLOR,0,_)):(g[0]=zt,g[1]=Wt,g[2]=Tt,g[3]=St,N.clearBufferiv(N.COLOR,0,g))}else X|=N.COLOR_BUFFER_BIT}F&&(X|=N.DEPTH_BUFFER_BIT),G&&(X|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),N.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",j,!1),e.removeEventListener("webglcontextrestored",ut,!1),e.removeEventListener("webglcontextcreationerror",dt,!1),mt.dispose(),Xt.dispose(),Pt.dispose(),y.dispose(),W.dispose(),K.dispose(),oe.dispose(),U.dispose(),ft.dispose(),Z.dispose(),Z.removeEventListener("sessionstart",gt),Z.removeEventListener("sessionend",Gt),Rt.stop()};function j(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),C=!0}function ut(){console.log("THREE.WebGLRenderer: Context Restored."),C=!1;const T=se.autoReset,F=lt.enabled,G=lt.autoUpdate,X=lt.needsUpdate,O=lt.type;ht(),se.autoReset=T,lt.enabled=F,lt.autoUpdate=G,lt.needsUpdate=X,lt.type=O}function dt(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function Bt(T){const F=T.target;F.removeEventListener("dispose",Bt),ce(F)}function ce(T){Ue(T),Pt.remove(T)}function Ue(T){const F=Pt.get(T).programs;F!==void 0&&(F.forEach(function(G){ft.releaseProgram(G)}),T.isShaderMaterial&&ft.releaseShaderCache(T))}this.renderBufferDirect=function(T,F,G,X,O,st){F===null&&(F=te);const at=O.isMesh&&O.matrixWorld.determinant()<0,pt=Ln(T,F,G,X,O);bt.setMaterial(X,at);let St=G.index,zt=1;if(X.wireframe===!0){if(St=J.getWireframeAttribute(G),St===void 0)return;zt=2}const Wt=G.drawRange,Tt=G.attributes.position;let Yt=Wt.start*zt,ue=(Wt.start+Wt.count)*zt;st!==null&&(Yt=Math.max(Yt,st.start*zt),ue=Math.min(ue,(st.start+st.count)*zt)),St!==null?(Yt=Math.max(Yt,0),ue=Math.min(ue,St.count)):Tt!=null&&(Yt=Math.max(Yt,0),ue=Math.min(ue,Tt.count));const fe=ue-Yt;if(fe<0||fe===1/0)return;oe.setup(O,X,pt,G,St);let Re,de=Mt;if(St!==null&&(Re=Q.get(St),de=$t,de.setIndex(Re)),O.isMesh)X.wireframe===!0?(bt.setLineWidth(X.wireframeLinewidth*Lt()),de.setMode(N.LINES)):de.setMode(N.TRIANGLES);else if(O.isLine){let Dt=X.linewidth;Dt===void 0&&(Dt=1),bt.setLineWidth(Dt*Lt()),O.isLineSegments?de.setMode(N.LINES):O.isLineLoop?de.setMode(N.LINE_LOOP):de.setMode(N.LINE_STRIP)}else O.isPoints?de.setMode(N.POINTS):O.isSprite&&de.setMode(N.TRIANGLES);if(O.isBatchedMesh)if(O._multiDrawInstances!==null)de.renderMultiDrawInstances(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount,O._multiDrawInstances);else if(Ot.get("WEBGL_multi_draw"))de.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else{const Dt=O._multiDrawStarts,bi=O._multiDrawCounts,pe=O._multiDrawCount,ii=St?Q.get(St).bytesPerElement:1,jr=Pt.get(X).currentProgram.getUniforms();for(let Un=0;Un<pe;Un++)jr.setValue(N,"_gl_DrawID",Un),de.render(Dt[Un]/ii,bi[Un])}else if(O.isInstancedMesh)de.renderInstances(Yt,fe,O.count);else if(G.isInstancedBufferGeometry){const Dt=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,bi=Math.min(G.instanceCount,Dt);de.renderInstances(Yt,fe,bi)}else de.render(Yt,fe)};function xt(T,F,G){T.transparent===!0&&T.side===gi&&T.forceSinglePass===!1?(T.side=Mn,T.needsUpdate=!0,Me(T,F,G),T.side=dr,T.needsUpdate=!0,Me(T,F,G),T.side=gi):Me(T,F,G)}this.compile=function(T,F,G=null){G===null&&(G=T),p=Xt.get(G),p.init(F),E.push(p),G.traverseVisible(function(O){O.isLight&&O.layers.test(F.layers)&&(p.pushLight(O),O.castShadow&&p.pushShadow(O))}),T!==G&&T.traverseVisible(function(O){O.isLight&&O.layers.test(F.layers)&&(p.pushLight(O),O.castShadow&&p.pushShadow(O))}),p.setupLights();const X=new Set;return T.traverse(function(O){if(!(O.isMesh||O.isPoints||O.isLine||O.isSprite))return;const st=O.material;if(st)if(Array.isArray(st))for(let at=0;at<st.length;at++){const pt=st[at];xt(pt,G,O),X.add(pt)}else xt(st,G,O),X.add(st)}),E.pop(),p=null,X},this.compileAsync=function(T,F,G=null){const X=this.compile(T,F,G);return new Promise(O=>{function st(){if(X.forEach(function(at){Pt.get(at).currentProgram.isReady()&&X.delete(at)}),X.size===0){O(T);return}setTimeout(st,10)}Ot.get("KHR_parallel_shader_compile")!==null?st():setTimeout(st,10)})};let At=null;function Zt(T){At&&At(T)}function gt(){Rt.stop()}function Gt(){Rt.start()}const Rt=new jd;Rt.setAnimationLoop(Zt),typeof self<"u"&&Rt.setContext(self),this.setAnimationLoop=function(T){At=T,Z.setAnimationLoop(T),T===null?Rt.stop():Rt.start()},Z.addEventListener("sessionstart",gt),Z.addEventListener("sessionend",Gt),this.render=function(T,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),Z.enabled===!0&&Z.isPresenting===!0&&(Z.cameraAutoUpdate===!0&&Z.updateCamera(F),F=Z.getCamera()),T.isScene===!0&&T.onBeforeRender(x,T,F,R),p=Xt.get(T,E.length),p.init(F),E.push(p),yt.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),$.setFromProjectionMatrix(yt),_t=this.localClippingEnabled,nt=rt.init(this.clippingPlanes,_t),m=mt.get(T,S.length),m.init(),S.push(m),Z.enabled===!0&&Z.isPresenting===!0){const st=x.xr.getDepthSensingMesh();st!==null&&kt(st,F,-1/0,x.sortObjects)}kt(T,F,0,x.sortObjects),m.finish(),x.sortObjects===!0&&m.sort(et,L),Nt=Z.enabled===!1||Z.isPresenting===!1||Z.hasDepthSensing()===!1,Nt&&It.addToRenderList(m,T),this.info.render.frame++,nt===!0&&rt.beginShadows();const G=p.state.shadowsArray;lt.render(G,T,F),nt===!0&&rt.endShadows(),this.info.autoReset===!0&&this.info.reset();const X=m.opaque,O=m.transmissive;if(p.setupLights(),F.isArrayCamera){const st=F.cameras;if(O.length>0)for(let at=0,pt=st.length;at<pt;at++){const St=st[at];ne(X,O,T,St)}Nt&&It.render(T);for(let at=0,pt=st.length;at<pt;at++){const St=st[at];Ne(m,T,St,St.viewport)}}else O.length>0&&ne(X,O,T,F),Nt&&It.render(T),Ne(m,T,F);R!==null&&(w.updateMultisampleRenderTarget(R),w.updateRenderTargetMipmap(R)),T.isScene===!0&&T.onAfterRender(x,T,F),oe.resetDefaultState(),M=-1,v=null,E.pop(),E.length>0?(p=E[E.length-1],nt===!0&&rt.setGlobalState(x.clippingPlanes,p.state.camera)):p=null,S.pop(),S.length>0?m=S[S.length-1]:m=null};function kt(T,F,G,X){if(T.visible===!1)return;if(T.layers.test(F.layers)){if(T.isGroup)G=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(F);else if(T.isLight)p.pushLight(T),T.castShadow&&p.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||$.intersectsSprite(T)){X&&Ht.setFromMatrixPosition(T.matrixWorld).applyMatrix4(yt);const at=K.update(T),pt=T.material;pt.visible&&m.push(T,at,pt,G,Ht.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||$.intersectsObject(T))){const at=K.update(T),pt=T.material;if(X&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Ht.copy(T.boundingSphere.center)):(at.boundingSphere===null&&at.computeBoundingSphere(),Ht.copy(at.boundingSphere.center)),Ht.applyMatrix4(T.matrixWorld).applyMatrix4(yt)),Array.isArray(pt)){const St=at.groups;for(let zt=0,Wt=St.length;zt<Wt;zt++){const Tt=St[zt],Yt=pt[Tt.materialIndex];Yt&&Yt.visible&&m.push(T,at,Yt,G,Ht.z,Tt)}}else pt.visible&&m.push(T,at,pt,G,Ht.z,null)}}const st=T.children;for(let at=0,pt=st.length;at<pt;at++)kt(st[at],F,G,X)}function Ne(T,F,G,X){const O=T.opaque,st=T.transmissive,at=T.transparent;p.setupLightsView(G),nt===!0&&rt.setGlobalState(x.clippingPlanes,G),X&&bt.viewport(D.copy(X)),O.length>0&&Te(O,F,G),st.length>0&&Te(st,F,G),at.length>0&&Te(at,F,G),bt.buffers.depth.setTest(!0),bt.buffers.depth.setMask(!0),bt.buffers.color.setMask(!0),bt.setPolygonOffset(!1)}function ne(T,F,G,X){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[X.id]===void 0&&(p.state.transmissionRenderTarget[X.id]=new fi(1,1,{generateMipmaps:!0,type:Ot.has("EXT_color_buffer_half_float")||Ot.has("EXT_color_buffer_float")?zi:Hi,minFilter:Nr,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:le.workingColorSpace}));const st=p.state.transmissionRenderTarget[X.id],at=X.viewport||D;st.setSize(at.z,at.w);const pt=x.getRenderTarget();x.setRenderTarget(st),x.getClearColor(V),q=x.getClearAlpha(),q<1&&x.setClearColor(16777215,.5),x.clear(),Nt&&It.render(G);const St=x.toneMapping;x.toneMapping=cr;const zt=X.viewport;if(X.viewport!==void 0&&(X.viewport=void 0),p.setupLightsView(X),nt===!0&&rt.setGlobalState(x.clippingPlanes,X),Te(T,G,X),w.updateMultisampleRenderTarget(st),w.updateRenderTargetMipmap(st),Ot.has("WEBGL_multisampled_render_to_texture")===!1){let Wt=!1;for(let Tt=0,Yt=F.length;Tt<Yt;Tt++){const ue=F[Tt],fe=ue.object,Re=ue.geometry,de=ue.material,Dt=ue.group;if(de.side===gi&&fe.layers.test(X.layers)){const bi=de.side;de.side=Mn,de.needsUpdate=!0,Ve(fe,G,X,Re,de,Dt),de.side=bi,de.needsUpdate=!0,Wt=!0}}Wt===!0&&(w.updateMultisampleRenderTarget(st),w.updateRenderTargetMipmap(st))}x.setRenderTarget(pt),x.setClearColor(V,q),zt!==void 0&&(X.viewport=zt),x.toneMapping=St}function Te(T,F,G){const X=F.isScene===!0?F.overrideMaterial:null;for(let O=0,st=T.length;O<st;O++){const at=T[O],pt=at.object,St=at.geometry,zt=X===null?at.material:X,Wt=at.group;pt.layers.test(G.layers)&&Ve(pt,F,G,St,zt,Wt)}}function Ve(T,F,G,X,O,st){T.onBeforeRender(x,F,G,X,O,st),T.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),O.onBeforeRender(x,F,G,X,T,st),O.transparent===!0&&O.side===gi&&O.forceSinglePass===!1?(O.side=Mn,O.needsUpdate=!0,x.renderBufferDirect(G,F,X,O,T,st),O.side=dr,O.needsUpdate=!0,x.renderBufferDirect(G,F,X,O,T,st),O.side=gi):x.renderBufferDirect(G,F,X,O,T,st),T.onAfterRender(x,F,G,X,O,st)}function Me(T,F,G){F.isScene!==!0&&(F=te);const X=Pt.get(T),O=p.state.lights,st=p.state.shadowsArray,at=O.state.version,pt=ft.getParameters(T,O.state,st,F,G),St=ft.getProgramCacheKey(pt);let zt=X.programs;X.environment=T.isMeshStandardMaterial?F.environment:null,X.fog=F.fog,X.envMap=(T.isMeshStandardMaterial?W:y).get(T.envMap||X.environment),X.envMapRotation=X.environment!==null&&T.envMap===null?F.environmentRotation:T.envMapRotation,zt===void 0&&(T.addEventListener("dispose",Bt),zt=new Map,X.programs=zt);let Wt=zt.get(St);if(Wt!==void 0){if(X.currentProgram===Wt&&X.lightsStateVersion===at)return he(T,pt),Wt}else pt.uniforms=ft.getUniforms(T),T.onBeforeCompile(pt,x),Wt=ft.acquireProgram(pt,St),zt.set(St,Wt),X.uniforms=pt.uniforms;const Tt=X.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Tt.clippingPlanes=rt.uniform),he(T,pt),X.needsLights=hn(T),X.lightsStateVersion=at,X.needsLights&&(Tt.ambientLightColor.value=O.state.ambient,Tt.lightProbe.value=O.state.probe,Tt.directionalLights.value=O.state.directional,Tt.directionalLightShadows.value=O.state.directionalShadow,Tt.spotLights.value=O.state.spot,Tt.spotLightShadows.value=O.state.spotShadow,Tt.rectAreaLights.value=O.state.rectArea,Tt.ltc_1.value=O.state.rectAreaLTC1,Tt.ltc_2.value=O.state.rectAreaLTC2,Tt.pointLights.value=O.state.point,Tt.pointLightShadows.value=O.state.pointShadow,Tt.hemisphereLights.value=O.state.hemi,Tt.directionalShadowMap.value=O.state.directionalShadowMap,Tt.directionalShadowMatrix.value=O.state.directionalShadowMatrix,Tt.spotShadowMap.value=O.state.spotShadowMap,Tt.spotLightMatrix.value=O.state.spotLightMatrix,Tt.spotLightMap.value=O.state.spotLightMap,Tt.pointShadowMap.value=O.state.pointShadowMap,Tt.pointShadowMatrix.value=O.state.pointShadowMatrix),X.currentProgram=Wt,X.uniformsList=null,Wt}function Se(T){if(T.uniformsList===null){const F=T.currentProgram.getUniforms();T.uniformsList=Go.seqWithValue(F.seq,T.uniforms)}return T.uniformsList}function he(T,F){const G=Pt.get(T);G.outputColorSpace=F.outputColorSpace,G.batching=F.batching,G.batchingColor=F.batchingColor,G.instancing=F.instancing,G.instancingColor=F.instancingColor,G.instancingMorph=F.instancingMorph,G.skinning=F.skinning,G.morphTargets=F.morphTargets,G.morphNormals=F.morphNormals,G.morphColors=F.morphColors,G.morphTargetsCount=F.morphTargetsCount,G.numClippingPlanes=F.numClippingPlanes,G.numIntersection=F.numClipIntersection,G.vertexAlphas=F.vertexAlphas,G.vertexTangents=F.vertexTangents,G.toneMapping=F.toneMapping}function Ln(T,F,G,X,O){F.isScene!==!0&&(F=te),w.resetTextureUnits();const st=F.fog,at=X.isMeshStandardMaterial?F.environment:null,pt=R===null?x.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:Ys,St=(X.isMeshStandardMaterial?W:y).get(X.envMap||at),zt=X.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,Wt=!!G.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),Tt=!!G.morphAttributes.position,Yt=!!G.morphAttributes.normal,ue=!!G.morphAttributes.color;let fe=cr;X.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(fe=x.toneMapping);const Re=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,de=Re!==void 0?Re.length:0,Dt=Pt.get(X),bi=p.state.lights;if(nt===!0&&(_t===!0||T!==v)){const $n=T===v&&X.id===M;rt.setState(X,T,$n)}let pe=!1;X.version===Dt.__version?(Dt.needsLights&&Dt.lightsStateVersion!==bi.state.version||Dt.outputColorSpace!==pt||O.isBatchedMesh&&Dt.batching===!1||!O.isBatchedMesh&&Dt.batching===!0||O.isBatchedMesh&&Dt.batchingColor===!0&&O.colorTexture===null||O.isBatchedMesh&&Dt.batchingColor===!1&&O.colorTexture!==null||O.isInstancedMesh&&Dt.instancing===!1||!O.isInstancedMesh&&Dt.instancing===!0||O.isSkinnedMesh&&Dt.skinning===!1||!O.isSkinnedMesh&&Dt.skinning===!0||O.isInstancedMesh&&Dt.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&Dt.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&Dt.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&Dt.instancingMorph===!1&&O.morphTexture!==null||Dt.envMap!==St||X.fog===!0&&Dt.fog!==st||Dt.numClippingPlanes!==void 0&&(Dt.numClippingPlanes!==rt.numPlanes||Dt.numIntersection!==rt.numIntersection)||Dt.vertexAlphas!==zt||Dt.vertexTangents!==Wt||Dt.morphTargets!==Tt||Dt.morphNormals!==Yt||Dt.morphColors!==ue||Dt.toneMapping!==fe||Dt.morphTargetsCount!==de)&&(pe=!0):(pe=!0,Dt.__version=X.version);let ii=Dt.currentProgram;pe===!0&&(ii=Me(X,F,O));let jr=!1,Un=!1,js=!1;const we=ii.getUniforms(),di=Dt.uniforms;if(bt.useProgram(ii.program)&&(jr=!0,Un=!0,js=!0),X.id!==M&&(M=X.id,Un=!0),jr||v!==T){bt.buffers.depth.getReversed()?(it.copy(T.projectionMatrix),b_(it),w_(it),we.setValue(N,"projectionMatrix",it)):we.setValue(N,"projectionMatrix",T.projectionMatrix),we.setValue(N,"viewMatrix",T.matrixWorldInverse);const Xi=we.map.cameraPosition;Xi!==void 0&&Xi.setValue(N,wt.setFromMatrixPosition(T.matrixWorld)),k.logarithmicDepthBuffer&&we.setValue(N,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&we.setValue(N,"isOrthographic",T.isOrthographicCamera===!0),v!==T&&(v=T,Un=!0,js=!0)}if(O.isSkinnedMesh){we.setOptional(N,O,"bindMatrix"),we.setOptional(N,O,"bindMatrixInverse");const $n=O.skeleton;$n&&($n.boneTexture===null&&$n.computeBoneTexture(),we.setValue(N,"boneTexture",$n.boneTexture,w))}O.isBatchedMesh&&(we.setOptional(N,O,"batchingTexture"),we.setValue(N,"batchingTexture",O._matricesTexture,w),we.setOptional(N,O,"batchingIdTexture"),we.setValue(N,"batchingIdTexture",O._indirectTexture,w),we.setOptional(N,O,"batchingColorTexture"),O._colorsTexture!==null&&we.setValue(N,"batchingColorTexture",O._colorsTexture,w));const Js=G.morphAttributes;if((Js.position!==void 0||Js.normal!==void 0||Js.color!==void 0)&&Ut.update(O,G,ii),(Un||Dt.receiveShadow!==O.receiveShadow)&&(Dt.receiveShadow=O.receiveShadow,we.setValue(N,"receiveShadow",O.receiveShadow)),X.isMeshGouraudMaterial&&X.envMap!==null&&(di.envMap.value=St,di.flipEnvMap.value=St.isCubeTexture&&St.isRenderTargetTexture===!1?-1:1),X.isMeshStandardMaterial&&X.envMap===null&&F.environment!==null&&(di.envMapIntensity.value=F.environmentIntensity),Un&&(we.setValue(N,"toneMappingExposure",x.toneMappingExposure),Dt.needsLights&&be(di,js),st&&X.fog===!0&&ct.refreshFogUniforms(di,st),ct.refreshMaterialUniforms(di,X,B,Y,p.state.transmissionRenderTarget[T.id]),Go.upload(N,Se(Dt),di,w)),X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(Go.upload(N,Se(Dt),di,w),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&we.setValue(N,"center",O.center),we.setValue(N,"modelViewMatrix",O.modelViewMatrix),we.setValue(N,"normalMatrix",O.normalMatrix),we.setValue(N,"modelMatrix",O.matrixWorld),X.isShaderMaterial||X.isRawShaderMaterial){const $n=X.uniformsGroups;for(let Xi=0,Yi=$n.length;Xi<Yi;Xi++){const Rh=$n[Xi];U.update(Rh,ii),U.bind(Rh,ii)}}return ii}function be(T,F){T.ambientLightColor.needsUpdate=F,T.lightProbe.needsUpdate=F,T.directionalLights.needsUpdate=F,T.directionalLightShadows.needsUpdate=F,T.pointLights.needsUpdate=F,T.pointLightShadows.needsUpdate=F,T.spotLights.needsUpdate=F,T.spotLightShadows.needsUpdate=F,T.rectAreaLights.needsUpdate=F,T.hemisphereLights.needsUpdate=F}function hn(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(T,F,G){Pt.get(T.texture).__webglTexture=F,Pt.get(T.depthTexture).__webglTexture=G;const X=Pt.get(T);X.__hasExternalTextures=!0,X.__autoAllocateDepthBuffer=G===void 0,X.__autoAllocateDepthBuffer||Ot.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),X.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(T,F){const G=Pt.get(T);G.__webglFramebuffer=F,G.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(T,F=0,G=0){R=T,A=F,b=G;let X=!0,O=null,st=!1,at=!1;if(T){const St=Pt.get(T);if(St.__useDefaultFramebuffer!==void 0)bt.bindFramebuffer(N.FRAMEBUFFER,null),X=!1;else if(St.__webglFramebuffer===void 0)w.setupRenderTarget(T);else if(St.__hasExternalTextures)w.rebindTextures(T,Pt.get(T.texture).__webglTexture,Pt.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const Tt=T.depthTexture;if(St.__boundDepthTexture!==Tt){if(Tt!==null&&Pt.has(Tt)&&(T.width!==Tt.image.width||T.height!==Tt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");w.setupDepthRenderbuffer(T)}}const zt=T.texture;(zt.isData3DTexture||zt.isDataArrayTexture||zt.isCompressedArrayTexture)&&(at=!0);const Wt=Pt.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Wt[F])?O=Wt[F][G]:O=Wt[F],st=!0):T.samples>0&&w.useMultisampledRTT(T)===!1?O=Pt.get(T).__webglMultisampledFramebuffer:Array.isArray(Wt)?O=Wt[G]:O=Wt,D.copy(T.viewport),P.copy(T.scissor),I=T.scissorTest}else D.copy(ot).multiplyScalar(B).floor(),P.copy(Ct).multiplyScalar(B).floor(),I=Vt;if(bt.bindFramebuffer(N.FRAMEBUFFER,O)&&X&&bt.drawBuffers(T,O),bt.viewport(D),bt.scissor(P),bt.setScissorTest(I),st){const St=Pt.get(T.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+F,St.__webglTexture,G)}else if(at){const St=Pt.get(T.texture),zt=F||0;N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,St.__webglTexture,G||0,zt)}M=-1},this.readRenderTargetPixels=function(T,F,G,X,O,st,at){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let pt=Pt.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&at!==void 0&&(pt=pt[at]),pt){bt.bindFramebuffer(N.FRAMEBUFFER,pt);try{const St=T.texture,zt=St.format,Wt=St.type;if(!k.textureFormatReadable(zt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!k.textureTypeReadable(Wt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=T.width-X&&G>=0&&G<=T.height-O&&N.readPixels(F,G,X,O,Ft.convert(zt),Ft.convert(Wt),st)}finally{const St=R!==null?Pt.get(R).__webglFramebuffer:null;bt.bindFramebuffer(N.FRAMEBUFFER,St)}}},this.readRenderTargetPixelsAsync=async function(T,F,G,X,O,st,at){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let pt=Pt.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&at!==void 0&&(pt=pt[at]),pt){const St=T.texture,zt=St.format,Wt=St.type;if(!k.textureFormatReadable(zt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!k.textureTypeReadable(Wt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(F>=0&&F<=T.width-X&&G>=0&&G<=T.height-O){bt.bindFramebuffer(N.FRAMEBUFFER,pt);const Tt=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,Tt),N.bufferData(N.PIXEL_PACK_BUFFER,st.byteLength,N.STREAM_READ),N.readPixels(F,G,X,O,Ft.convert(zt),Ft.convert(Wt),0);const Yt=R!==null?Pt.get(R).__webglFramebuffer:null;bt.bindFramebuffer(N.FRAMEBUFFER,Yt);const ue=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await T_(N,ue,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,Tt),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,st),N.deleteBuffer(Tt),N.deleteSync(ue),st}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(T,F=null,G=0){T.isTexture!==!0&&(ua("WebGLRenderer: copyFramebufferToTexture function signature has changed."),F=arguments[0]||null,T=arguments[1]);const X=Math.pow(2,-G),O=Math.floor(T.image.width*X),st=Math.floor(T.image.height*X),at=F!==null?F.x:0,pt=F!==null?F.y:0;w.setTexture2D(T,0),N.copyTexSubImage2D(N.TEXTURE_2D,G,0,0,at,pt,O,st),bt.unbindTexture()},this.copyTextureToTexture=function(T,F,G=null,X=null,O=0){T.isTexture!==!0&&(ua("WebGLRenderer: copyTextureToTexture function signature has changed."),X=arguments[0]||null,T=arguments[1],F=arguments[2],O=arguments[3]||0,G=null);let st,at,pt,St,zt,Wt,Tt,Yt,ue;const fe=T.isCompressedTexture?T.mipmaps[O]:T.image;G!==null?(st=G.max.x-G.min.x,at=G.max.y-G.min.y,pt=G.isBox3?G.max.z-G.min.z:1,St=G.min.x,zt=G.min.y,Wt=G.isBox3?G.min.z:0):(st=fe.width,at=fe.height,pt=fe.depth||1,St=0,zt=0,Wt=0),X!==null?(Tt=X.x,Yt=X.y,ue=X.z):(Tt=0,Yt=0,ue=0);const Re=Ft.convert(F.format),de=Ft.convert(F.type);let Dt;F.isData3DTexture?(w.setTexture3D(F,0),Dt=N.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(w.setTexture2DArray(F,0),Dt=N.TEXTURE_2D_ARRAY):(w.setTexture2D(F,0),Dt=N.TEXTURE_2D),N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,F.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,F.unpackAlignment);const bi=N.getParameter(N.UNPACK_ROW_LENGTH),pe=N.getParameter(N.UNPACK_IMAGE_HEIGHT),ii=N.getParameter(N.UNPACK_SKIP_PIXELS),jr=N.getParameter(N.UNPACK_SKIP_ROWS),Un=N.getParameter(N.UNPACK_SKIP_IMAGES);N.pixelStorei(N.UNPACK_ROW_LENGTH,fe.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,fe.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,St),N.pixelStorei(N.UNPACK_SKIP_ROWS,zt),N.pixelStorei(N.UNPACK_SKIP_IMAGES,Wt);const js=T.isDataArrayTexture||T.isData3DTexture,we=F.isDataArrayTexture||F.isData3DTexture;if(T.isRenderTargetTexture||T.isDepthTexture){const di=Pt.get(T),Js=Pt.get(F),$n=Pt.get(di.__renderTarget),Xi=Pt.get(Js.__renderTarget);bt.bindFramebuffer(N.READ_FRAMEBUFFER,$n.__webglFramebuffer),bt.bindFramebuffer(N.DRAW_FRAMEBUFFER,Xi.__webglFramebuffer);for(let Yi=0;Yi<pt;Yi++)js&&N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Pt.get(T).__webglTexture,O,Wt+Yi),T.isDepthTexture?(we&&N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Pt.get(F).__webglTexture,O,ue+Yi),N.blitFramebuffer(St,zt,st,at,Tt,Yt,st,at,N.DEPTH_BUFFER_BIT,N.NEAREST)):we?N.copyTexSubImage3D(Dt,O,Tt,Yt,ue+Yi,St,zt,st,at):N.copyTexSubImage2D(Dt,O,Tt,Yt,ue+Yi,St,zt,st,at);bt.bindFramebuffer(N.READ_FRAMEBUFFER,null),bt.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else we?T.isDataTexture||T.isData3DTexture?N.texSubImage3D(Dt,O,Tt,Yt,ue,st,at,pt,Re,de,fe.data):F.isCompressedArrayTexture?N.compressedTexSubImage3D(Dt,O,Tt,Yt,ue,st,at,pt,Re,fe.data):N.texSubImage3D(Dt,O,Tt,Yt,ue,st,at,pt,Re,de,fe):T.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,O,Tt,Yt,st,at,Re,de,fe.data):T.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,O,Tt,Yt,fe.width,fe.height,Re,fe.data):N.texSubImage2D(N.TEXTURE_2D,O,Tt,Yt,st,at,Re,de,fe);N.pixelStorei(N.UNPACK_ROW_LENGTH,bi),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,pe),N.pixelStorei(N.UNPACK_SKIP_PIXELS,ii),N.pixelStorei(N.UNPACK_SKIP_ROWS,jr),N.pixelStorei(N.UNPACK_SKIP_IMAGES,Un),O===0&&F.generateMipmaps&&N.generateMipmap(Dt),bt.unbindTexture()},this.copyTextureToTexture3D=function(T,F,G=null,X=null,O=0){return T.isTexture!==!0&&(ua("WebGLRenderer: copyTextureToTexture3D function signature has changed."),G=arguments[0]||null,X=arguments[1]||null,T=arguments[2],F=arguments[3],O=arguments[4]||0),ua('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(T,F,G,X,O)},this.initRenderTarget=function(T){Pt.get(T).__webglFramebuffer===void 0&&w.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?w.setTextureCube(T,0):T.isData3DTexture?w.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?w.setTexture2DArray(T,0):w.setTexture2D(T,0),bt.unbindTexture()},this.resetState=function(){A=0,b=0,R=null,bt.reset(),oe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Fi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=le._getDrawingBufferColorSpace(t),e.unpackColorSpace=le._getUnpackColorSpace()}}class ju{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new jt(t),this.density=e}clone(){return new ju(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class NM extends Qe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ei,this.environmentIntensity=1,this.environmentRotation=new Ei,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Wo extends $s{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new jt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Cf=new Ce,mu=new Gd,So=new xl,yo=new z;class Xo extends Qe{constructor(t=new cn,e=new Wo){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,s=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),So.copy(n.boundingSphere),So.applyMatrix4(i),So.radius+=s,t.ray.intersectsSphere(So)===!1)return;Cf.copy(i).invert(),mu.copy(t.ray).applyMatrix4(Cf);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,h=n.attributes.position;if(c!==null){const f=Math.max(0,a.start),d=Math.min(c.count,a.start+a.count);for(let _=f,g=d;_<g;_++){const m=c.getX(_);yo.fromBufferAttribute(h,m),Rf(yo,m,l,i,t,e,this)}}else{const f=Math.max(0,a.start),d=Math.min(h.count,a.start+a.count);for(let _=f,g=d;_<g;_++)yo.fromBufferAttribute(h,_),Rf(yo,_,l,i,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Rf(r,t,e,n,i,s,a){const o=mu.distanceSqToPoint(r);if(o<e){const l=new z;mu.closestPointToPoint(r,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}class Ju extends Sn{constructor(t,e,n,i,s,a,o,l,c){super(t,e,n,i,s,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Qu extends cn{constructor(t=.5,e=1,n=32,i=1,s=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:i,thetaStart:s,thetaLength:a},n=Math.max(3,n),i=Math.max(1,i);const o=[],l=[],c=[],u=[];let h=t;const f=(e-t)/i,d=new z,_=new qt;for(let g=0;g<=i;g++){for(let m=0;m<=n;m++){const p=s+m/n*a;d.x=h*Math.cos(p),d.y=h*Math.sin(p),l.push(d.x,d.y,d.z),c.push(0,0,1),_.x=(d.x/e+1)/2,_.y=(d.y/e+1)/2,u.push(_.x,_.y)}h+=f}for(let g=0;g<i;g++){const m=g*(n+1);for(let p=0;p<n;p++){const S=p+m,E=S,x=S+n+1,C=S+n+2,A=S+1;o.push(E,x,A),o.push(x,C,A)}}this.setIndex(o),this.setAttribute("position",new Ze(l,3)),this.setAttribute("normal",new Ze(c,3)),this.setAttribute("uv",new Ze(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Qu(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class th extends cn{constructor(t=1,e=32,n=16,i=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:s,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const u=[],h=new z,f=new z,d=[],_=[],g=[],m=[];for(let p=0;p<=n;p++){const S=[],E=p/n;let x=0;p===0&&a===0?x=.5/e:p===n&&l===Math.PI&&(x=-.5/e);for(let C=0;C<=e;C++){const A=C/e;h.x=-t*Math.cos(i+A*s)*Math.sin(a+E*o),h.y=t*Math.cos(a+E*o),h.z=t*Math.sin(i+A*s)*Math.sin(a+E*o),_.push(h.x,h.y,h.z),f.copy(h).normalize(),g.push(f.x,f.y,f.z),m.push(A+x,1-E),S.push(c++)}u.push(S)}for(let p=0;p<n;p++)for(let S=0;S<e;S++){const E=u[p][S+1],x=u[p][S],C=u[p+1][S],A=u[p+1][S+1];(p!==0||a>0)&&d.push(E,x,A),(p!==n-1||l<Math.PI)&&d.push(x,C,A)}this.setIndex(d),this.setAttribute("position",new Ze(_,3)),this.setAttribute("normal",new Ze(g,3)),this.setAttribute("uv",new Ze(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new th(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class FM extends $s{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new jt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new jt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Bd,this.normalScale=new qt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ei,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class eh extends Qe{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new jt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}const nc=new Ce,Pf=new z,Df=new z;class ip{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new qt(512,512),this.map=null,this.mapPass=null,this.matrix=new Ce,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new $u,this._frameExtents=new qt(1,1),this._viewportCount=1,this._viewports=[new ve(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Pf.setFromMatrixPosition(t.matrixWorld),e.position.copy(Pf),Df.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Df),e.updateMatrixWorld(),nc.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(nc),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(nc)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Lf=new Ce,ra=new z,ic=new z;class OM extends ip{constructor(){super(new zn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new qt(4,2),this._viewportCount=6,this._viewports=[new ve(2,1,1,1),new ve(0,1,1,1),new ve(3,1,1,1),new ve(1,1,1,1),new ve(3,0,1,1),new ve(1,0,1,1)],this._cubeDirections=[new z(1,0,0),new z(-1,0,0),new z(0,0,1),new z(0,0,-1),new z(0,1,0),new z(0,-1,0)],this._cubeUps=[new z(0,1,0),new z(0,1,0),new z(0,1,0),new z(0,1,0),new z(0,0,1),new z(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,i=this.matrix,s=t.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),ra.setFromMatrixPosition(t.matrixWorld),n.position.copy(ra),ic.copy(n.position),ic.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(ic),n.updateMatrixWorld(),i.makeTranslation(-ra.x,-ra.y,-ra.z),Lf.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Lf)}}class BM extends eh{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new OM}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class zM extends ip{constructor(){super(new Zu(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class rc extends eh{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Qe.DEFAULT_UP),this.updateMatrix(),this.target=new Qe,this.shadow=new zM}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class kM extends eh{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class rp{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Uf(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=Uf();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function Uf(){return performance.now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Vu}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Vu);function Li(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function sp(r,t){r.prototype=Object.create(t.prototype),r.prototype.constructor=r,r.__proto__=t}/*!
 * GSAP 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Xn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Oa={duration:.5,overwrite:!1,delay:0},nh,tn,Ae,ti=1e8,Ee=1/ti,_u=Math.PI*2,VM=_u/4,HM=0,ap=Math.sqrt,GM=Math.cos,WM=Math.sin,Ke=function(t){return typeof t=="string"},Ie=function(t){return typeof t=="function"},Gi=function(t){return typeof t=="number"},ih=function(t){return typeof t>"u"},Ti=function(t){return typeof t=="object"},An=function(t){return t!==!1},rh=function(){return typeof window<"u"},Eo=function(t){return Ie(t)||Ke(t)},op=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},un=Array.isArray,XM=/random\([^)]+\)/g,YM=/,\s*/g,If=/(?:-?\.?\d|\.)+/gi,lp=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Ms=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,sc=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,cp=/[+-]=-?[.\d]+/,qM=/[^,'"\[\]\s]+/gi,$M=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,De,pi,gu,sh,Yn={},al={},up,hp=function(t){return(al=zs(t,Yn))&&Dn},ah=function(t,e){return console.warn("Invalid property",t,"set to",e,"Missing plugin? gsap.registerPlugin()")},Ba=function(t,e){return!e&&console.warn(t)},fp=function(t,e){return t&&(Yn[t]=e)&&al&&(al[t]=e)||Yn},za=function(){return 0},ZM={suppressEvents:!0,isStart:!0,kill:!1},Yo={suppressEvents:!0,kill:!1},KM={suppressEvents:!0},oh={},ur=[],vu={},dp,Bn={},ac={},Nf=30,qo=[],lh="",ch=function(t){var e=t[0],n,i;if(Ti(e)||Ie(e)||(t=[t]),!(n=(e._gsap||{}).harness)){for(i=qo.length;i--&&!qo[i].targetTest(e););n=qo[i]}for(i=t.length;i--;)t[i]&&(t[i]._gsap||(t[i]._gsap=new Np(t[i],n)))||t.splice(i,1);return t},Br=function(t){return t._gsap||ch(ei(t))[0]._gsap},pp=function(t,e,n){return(n=t[e])&&Ie(n)?t[e]():ih(n)&&t.getAttribute&&t.getAttribute(e)||n},Cn=function(t,e){return(t=t.split(",")).forEach(e)||t},Fe=function(t){return Math.round(t*1e5)/1e5||0},Pe=function(t){return Math.round(t*1e7)/1e7||0},ws=function(t,e){var n=e.charAt(0),i=parseFloat(e.substr(2));return t=parseFloat(t),n==="+"?t+i:n==="-"?t-i:n==="*"?t*i:t/i},jM=function(t,e){for(var n=e.length,i=0;t.indexOf(e[i])<0&&++i<n;);return i<n},ol=function(){var t=ur.length,e=ur.slice(0),n,i;for(vu={},ur.length=0,n=0;n<t;n++)i=e[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},uh=function(t){return!!(t._initted||t._startAt||t.add)},mp=function(t,e,n,i){ur.length&&!tn&&ol(),t.render(e,n,!!(tn&&e<0&&uh(t))),ur.length&&!tn&&ol()},_p=function(t){var e=parseFloat(t);return(e||e===0)&&(t+"").match(qM).length<2?e:Ke(t)?t.trim():t},gp=function(t){return t},qn=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},JM=function(t){return function(e,n){for(var i in n)i in e||i==="duration"&&t||i==="ease"||(e[i]=n[i])}},zs=function(t,e){for(var n in e)t[n]=e[n];return t},Ff=function r(t,e){for(var n in e)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(t[n]=Ti(e[n])?r(t[n]||(t[n]={}),e[n]):e[n]);return t},ll=function(t,e){var n={},i;for(i in t)i in e||(n[i]=t[i]);return n},Sa=function(t){var e=t.parent||De,n=t.keyframes?JM(un(t.keyframes)):qn;if(An(t.inherit))for(;e;)n(t,e.vars.defaults),e=e.parent||e._dp;return t},QM=function(t,e){for(var n=t.length,i=n===e.length;i&&n--&&t[n]===e[n];);return n<0},vp=function(t,e,n,i,s){var a=t[i],o;if(s)for(o=e[s];a&&a[s]>o;)a=a._prev;return a?(e._next=a._next,a._next=e):(e._next=t[n],t[n]=e),e._next?e._next._prev=e:t[i]=e,e._prev=a,e.parent=e._dp=t,e},yl=function(t,e,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=e._prev,a=e._next;s?s._next=a:t[n]===e&&(t[n]=a),a?a._prev=s:t[i]===e&&(t[i]=s),e._next=e._prev=e.parent=null},pr=function(t,e){t.parent&&(!e||t.parent.autoRemoveChildren)&&t.parent.remove&&t.parent.remove(t),t._act=0},zr=function(t,e){if(t&&(!e||e._end>t._dur||e._start<0))for(var n=t;n;)n._dirty=1,n=n.parent;return t},tS=function(t){for(var e=t.parent;e&&e.parent;)e._dirty=1,e.totalDuration(),e=e.parent;return t},xu=function(t,e,n,i){return t._startAt&&(tn?t._startAt.revert(Yo):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(e,!0,i))},eS=function r(t){return!t||t._ts&&r(t.parent)},Of=function(t){return t._repeat?ks(t._tTime,t=t.duration()+t._rDelay)*t:0},ks=function(t,e){var n=Math.floor(t=Pe(t/e));return t&&n===t?n-1:n},cl=function(t,e){return(t-e._start)*e._ts+(e._ts>=0?0:e._dirty?e.totalDuration():e._tDur)},El=function(t){return t._end=Pe(t._start+(t._tDur/Math.abs(t._ts||t._rts||Ee)||0))},Tl=function(t,e){var n=t._dp;return n&&n.smoothChildTiming&&t._ts&&(t._start=Pe(n._time-(t._ts>0?e/t._ts:((t._dirty?t.totalDuration():t._tDur)-e)/-t._ts)),El(t),n._dirty||zr(n,t)),t},xp=function(t,e){var n;if((e._time||!e._dur&&e._initted||e._start<t._time&&(e._dur||!e.add))&&(n=cl(t.rawTime(),e),(!e._dur||ja(0,e.totalDuration(),n)-e._tTime>Ee)&&e.render(n,!0)),zr(t,e)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(n=t;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;t._zTime=-Ee}},vi=function(t,e,n,i){return e.parent&&pr(e),e._start=Pe((Gi(n)?n:n||t!==De?jn(t,n,e):t._time)+e._delay),e._end=Pe(e._start+(e.totalDuration()/Math.abs(e.timeScale())||0)),vp(t,e,"_first","_last",t._sort?"_start":0),Mu(e)||(t._recent=e),i||xp(t,e),t._ts<0&&Tl(t,t._tTime),t},Mp=function(t,e){return(Yn.ScrollTrigger||ah("scrollTrigger",e))&&Yn.ScrollTrigger.create(e,t)},Sp=function(t,e,n,i,s){if(fh(t,e,s),!t._initted)return 1;if(!n&&t._pt&&!tn&&(t._dur&&t.vars.lazy!==!1||!t._dur&&t.vars.lazy)&&dp!==Vn.frame)return ur.push(t),t._lazy=[s,i],1},nS=function r(t){var e=t.parent;return e&&e._ts&&e._initted&&!e._lock&&(e.rawTime()<0||r(e))},Mu=function(t){var e=t.data;return e==="isFromStart"||e==="isStart"},iS=function(t,e,n,i){var s=t.ratio,a=e<0||!e&&(!t._start&&nS(t)&&!(!t._initted&&Mu(t))||(t._ts<0||t._dp._ts<0)&&!Mu(t))?0:1,o=t._rDelay,l=0,c,u,h;if(o&&t._repeat&&(l=ja(0,t._tDur,e),u=ks(l,o),t._yoyo&&u&1&&(a=1-a),u!==ks(t._tTime,o)&&(s=1-a,t.vars.repeatRefresh&&t._initted&&t.invalidate())),a!==s||tn||i||t._zTime===Ee||!e&&t._zTime){if(!t._initted&&Sp(t,e,i,n,l))return;for(h=t._zTime,t._zTime=e||(n?Ee:0),n||(n=e&&!h),t.ratio=a,t._from&&(a=1-a),t._time=0,t._tTime=l,c=t._pt;c;)c.r(a,c.d),c=c._next;e<0&&xu(t,e,n,!0),t._onUpdate&&!n&&Gn(t,"onUpdate"),l&&t._repeat&&!n&&t.parent&&Gn(t,"onRepeat"),(e>=t._tDur||e<0)&&t.ratio===a&&(a&&pr(t,1),!n&&!tn&&(Gn(t,a?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=e)},rS=function(t,e,n){var i;if(n>e)for(i=t._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>e)return i;i=i._next}else for(i=t._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<e)return i;i=i._prev}},Vs=function(t,e,n,i){var s=t._repeat,a=Pe(e)||0,o=t._tTime/t._tDur;return o&&!i&&(t._time*=a/t._dur),t._dur=a,t._tDur=s?s<0?1e10:Pe(a*(s+1)+t._rDelay*s):a,o>0&&!i&&Tl(t,t._tTime=t._tDur*o),t.parent&&El(t),n||zr(t.parent,t),t},Bf=function(t){return t instanceof bn?zr(t):Vs(t,t._dur)},sS={_start:0,endTime:za,totalDuration:za},jn=function r(t,e,n){var i=t.labels,s=t._recent||sS,a=t.duration()>=ti?s.endTime(!1):t._dur,o,l,c;return Ke(e)&&(isNaN(e)||e in i)?(l=e.charAt(0),c=e.substr(-1)==="%",o=e.indexOf("="),l==="<"||l===">"?(o>=0&&(e=e.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(e.substr(1))||0)*(c?(o<0?s:n).totalDuration()/100:1)):o<0?(e in i||(i[e]=a),i[e]):(l=parseFloat(e.charAt(o-1)+e.substr(o+1)),c&&n&&(l=l/100*(un(n)?n[0]:n).totalDuration()),o>1?r(t,e.substr(0,o-1),n)+l:a+l)):e==null?a:+e},ya=function(t,e,n){var i=Gi(e[1]),s=(i?2:1)+(t<2?0:1),a=e[s],o,l;if(i&&(a.duration=e[1]),a.parent=n,t){for(o=a,l=n;l&&!("immediateRender"in o);)o=l.vars.defaults||{},l=An(l.vars.inherit)&&l.parent;a.immediateRender=An(o.immediateRender),t<2?a.runBackwards=1:a.startAt=e[s-1]}return new ke(e[0],a,e[s+1])},vr=function(t,e){return t||t===0?e(t):e},ja=function(t,e,n){return n<t?t:n>e?e:n},an=function(t,e){return!Ke(t)||!(e=$M.exec(t))?"":e[1]},aS=function(t,e,n){return vr(n,function(i){return ja(t,e,i)})},Su=[].slice,yp=function(t,e){return t&&Ti(t)&&"length"in t&&(!e&&!t.length||t.length-1 in t&&Ti(t[0]))&&!t.nodeType&&t!==pi},oS=function(t,e,n){return n===void 0&&(n=[]),t.forEach(function(i){var s;return Ke(i)&&!e||yp(i,1)?(s=n).push.apply(s,ei(i)):n.push(i)})||n},ei=function(t,e,n){return Ae&&!e&&Ae.selector?Ae.selector(t):Ke(t)&&!n&&(gu||!Hs())?Su.call((e||sh).querySelectorAll(t),0):un(t)?oS(t,n):yp(t)?Su.call(t,0):t?[t]:[]},yu=function(t){return t=ei(t)[0]||Ba("Invalid scope")||{},function(e){var n=t.current||t.nativeElement||t;return ei(e,n.querySelectorAll?n:n===t?Ba("Invalid scope")||sh.createElement("div"):t)}},Ep=function(t){return t.sort(function(){return .5-Math.random()})},Tp=function(t){if(Ie(t))return t;var e=Ti(t)?t:{each:t},n=kr(e.ease),i=e.from||0,s=parseFloat(e.base)||0,a={},o=i>0&&i<1,l=isNaN(i)||o,c=e.axis,u=i,h=i;return Ke(i)?u=h={center:.5,edges:.5,end:1}[i]||0:!o&&l&&(u=i[0],h=i[1]),function(f,d,_){var g=(_||e).length,m=a[g],p,S,E,x,C,A,b,R,M;if(!m){if(M=e.grid==="auto"?0:(e.grid||[1,ti])[1],!M){for(b=-ti;b<(b=_[M++].getBoundingClientRect().left)&&M<g;);M<g&&M--}for(m=a[g]=[],p=l?Math.min(M,g)*u-.5:i%M,S=M===ti?0:l?g*h/M-.5:i/M|0,b=0,R=ti,A=0;A<g;A++)E=A%M-p,x=S-(A/M|0),m[A]=C=c?Math.abs(c==="y"?x:E):ap(E*E+x*x),C>b&&(b=C),C<R&&(R=C);i==="random"&&Ep(m),m.max=b-R,m.min=R,m.v=g=(parseFloat(e.amount)||parseFloat(e.each)*(M>g?g-1:c?c==="y"?g/M:M:Math.max(M,g/M))||0)*(i==="edges"?-1:1),m.b=g<0?s-g:s,m.u=an(e.amount||e.each)||0,n=n&&g<0?MS(n):n}return g=(m[f]-m.min)/m.max||0,Pe(m.b+(n?n(g):g)*m.v)+m.u}},Eu=function(t){var e=Math.pow(10,((t+"").split(".")[1]||"").length);return function(n){var i=Pe(Math.round(parseFloat(n)/t)*t*e);return(i-i%1)/e+(Gi(n)?0:an(n))}},bp=function(t,e){var n=un(t),i,s;return!n&&Ti(t)&&(i=n=t.radius||ti,t.values?(t=ei(t.values),(s=!Gi(t[0]))&&(i*=i)):t=Eu(t.increment)),vr(e,n?Ie(t)?function(a){return s=t(a),Math.abs(s-a)<=i?s:a}:function(a){for(var o=parseFloat(s?a.x:a),l=parseFloat(s?a.y:0),c=ti,u=0,h=t.length,f,d;h--;)s?(f=t[h].x-o,d=t[h].y-l,f=f*f+d*d):f=Math.abs(t[h]-o),f<c&&(c=f,u=h);return u=!i||c<=i?t[u]:a,s||u===a||Gi(a)?u:u+an(a)}:Eu(t))},wp=function(t,e,n,i){return vr(un(t)?!e:n===!0?!!(n=0):!i,function(){return un(t)?t[~~(Math.random()*t.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((t-n/2+Math.random()*(e-t+n*.99))/n)*n*i)/i})},lS=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(i){return e.reduce(function(s,a){return a(s)},i)}},cS=function(t,e){return function(n){return t(parseFloat(n))+(e||an(n))}},uS=function(t,e,n){return Cp(t,e,0,1,n)},Ap=function(t,e,n){return vr(n,function(i){return t[~~e(i)]})},hS=function r(t,e,n){var i=e-t;return un(t)?Ap(t,r(0,t.length),e):vr(n,function(s){return(i+(s-t)%i)%i+t})},fS=function r(t,e,n){var i=e-t,s=i*2;return un(t)?Ap(t,r(0,t.length-1),e):vr(n,function(a){return a=(s+(a-t)%s)%s||0,t+(a>i?s-a:a)})},ka=function(t){return t.replace(XM,function(e){var n=e.indexOf("[")+1,i=e.substring(n||7,n?e.indexOf("]"):e.length-1).split(YM);return wp(n?i:+i[0],n?0:+i[1],+i[2]||1e-5)})},Cp=function(t,e,n,i,s){var a=e-t,o=i-n;return vr(s,function(l){return n+((l-t)/a*o||0)})},dS=function r(t,e,n,i){var s=isNaN(t+e)?0:function(d){return(1-d)*t+d*e};if(!s){var a=Ke(t),o={},l,c,u,h,f;if(n===!0&&(i=1)&&(n=null),a)t={p:t},e={p:e};else if(un(t)&&!un(e)){for(u=[],h=t.length,f=h-2,c=1;c<h;c++)u.push(r(t[c-1],t[c]));h--,s=function(_){_*=h;var g=Math.min(f,~~_);return u[g](_-g)},n=e}else i||(t=zs(un(t)?[]:{},t));if(!u){for(l in e)hh.call(o,t,l,"get",e[l]);s=function(_){return mh(_,o)||(a?t.p:t)}}}return vr(n,s)},zf=function(t,e,n){var i=t.labels,s=ti,a,o,l;for(a in i)o=i[a]-e,o<0==!!n&&o&&s>(o=Math.abs(o))&&(l=a,s=o);return l},Gn=function(t,e,n){var i=t.vars,s=i[e],a=Ae,o=t._ctx,l,c,u;if(s)return l=i[e+"Params"],c=i.callbackScope||t,n&&ur.length&&ol(),o&&(Ae=o),u=l?s.apply(c,l):s.call(c),Ae=a,u},da=function(t){return pr(t),t.scrollTrigger&&t.scrollTrigger.kill(!!tn),t.progress()<1&&Gn(t,"onInterrupt"),t},Ss,Rp=[],Pp=function(t){if(t)if(t=!t.name&&t.default||t,rh()||t.headless){var e=t.name,n=Ie(t),i=e&&!n&&t.init?function(){this._props=[]}:t,s={init:za,render:mh,add:hh,kill:PS,modifier:RS,rawVars:0},a={targetTest:0,get:0,getSetter:ph,aliases:{},register:0};if(Hs(),t!==i){if(Bn[e])return;qn(i,qn(ll(t,s),a)),zs(i.prototype,zs(s,ll(t,a))),Bn[i.prop=e]=i,t.targetTest&&(qo.push(i),oh[e]=1),e=(e==="css"?"CSS":e.charAt(0).toUpperCase()+e.substr(1))+"Plugin"}fp(e,i),t.register&&t.register(Dn,i,Rn)}else Rp.push(t)},ye=255,pa={aqua:[0,ye,ye],lime:[0,ye,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,ye],navy:[0,0,128],white:[ye,ye,ye],olive:[128,128,0],yellow:[ye,ye,0],orange:[ye,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[ye,0,0],pink:[ye,192,203],cyan:[0,ye,ye],transparent:[ye,ye,ye,0]},oc=function(t,e,n){return t+=t<0?1:t>1?-1:0,(t*6<1?e+(n-e)*t*6:t<.5?n:t*3<2?e+(n-e)*(2/3-t)*6:e)*ye+.5|0},Dp=function(t,e,n){var i=t?Gi(t)?[t>>16,t>>8&ye,t&ye]:0:pa.black,s,a,o,l,c,u,h,f,d,_;if(!i){if(t.substr(-1)===","&&(t=t.substr(0,t.length-1)),pa[t])i=pa[t];else if(t.charAt(0)==="#"){if(t.length<6&&(s=t.charAt(1),a=t.charAt(2),o=t.charAt(3),t="#"+s+s+a+a+o+o+(t.length===5?t.charAt(4)+t.charAt(4):"")),t.length===9)return i=parseInt(t.substr(1,6),16),[i>>16,i>>8&ye,i&ye,parseInt(t.substr(7),16)/255];t=parseInt(t.substr(1),16),i=[t>>16,t>>8&ye,t&ye]}else if(t.substr(0,3)==="hsl"){if(i=_=t.match(If),!e)l=+i[0]%360/360,c=+i[1]/100,u=+i[2]/100,a=u<=.5?u*(c+1):u+c-u*c,s=u*2-a,i.length>3&&(i[3]*=1),i[0]=oc(l+1/3,s,a),i[1]=oc(l,s,a),i[2]=oc(l-1/3,s,a);else if(~t.indexOf("="))return i=t.match(lp),n&&i.length<4&&(i[3]=1),i}else i=t.match(If)||pa.transparent;i=i.map(Number)}return e&&!_&&(s=i[0]/ye,a=i[1]/ye,o=i[2]/ye,h=Math.max(s,a,o),f=Math.min(s,a,o),u=(h+f)/2,h===f?l=c=0:(d=h-f,c=u>.5?d/(2-h-f):d/(h+f),l=h===s?(a-o)/d+(a<o?6:0):h===a?(o-s)/d+2:(s-a)/d+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(u*100+.5)),n&&i.length<4&&(i[3]=1),i},Lp=function(t){var e=[],n=[],i=-1;return t.split(hr).forEach(function(s){var a=s.match(Ms)||[];e.push.apply(e,a),n.push(i+=a.length+1)}),e.c=n,e},kf=function(t,e,n){var i="",s=(t+i).match(hr),a=e?"hsla(":"rgba(",o=0,l,c,u,h;if(!s)return t;if(s=s.map(function(f){return(f=Dp(f,e,1))&&a+(e?f[0]+","+f[1]+"%,"+f[2]+"%,"+f[3]:f.join(","))+")"}),n&&(u=Lp(t),l=n.c,l.join(i)!==u.c.join(i)))for(c=t.replace(hr,"1").split(Ms),h=c.length-1;o<h;o++)i+=c[o]+(~l.indexOf(o)?s.shift()||a+"0,0,0,0)":(u.length?u:s.length?s:n).shift());if(!c)for(c=t.split(hr),h=c.length-1;o<h;o++)i+=c[o]+s[o];return i+c[h]},hr=(function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",t;for(t in pa)r+="|"+t+"\\b";return new RegExp(r+")","gi")})(),pS=/hsl[a]?\(/,Up=function(t){var e=t.join(" "),n;if(hr.lastIndex=0,hr.test(e))return n=pS.test(e),t[1]=kf(t[1],n),t[0]=kf(t[0],n,Lp(t[1])),!0},Va,Vn=(function(){var r=Date.now,t=500,e=33,n=r(),i=n,s=1e3/240,a=s,o=[],l,c,u,h,f,d,_=function g(m){var p=r()-i,S=m===!0,E,x,C,A;if((p>t||p<0)&&(n+=p-e),i+=p,C=i-n,E=C-a,(E>0||S)&&(A=++h.frame,f=C-h.time*1e3,h.time=C=C/1e3,a+=E+(E>=s?4:s-E),x=1),S||(l=c(g)),x)for(d=0;d<o.length;d++)o[d](C,f,A,m)};return h={time:0,frame:0,tick:function(){_(!0)},deltaRatio:function(m){return f/(1e3/(m||60))},wake:function(){up&&(!gu&&rh()&&(pi=gu=window,sh=pi.document||{},Yn.gsap=Dn,(pi.gsapVersions||(pi.gsapVersions=[])).push(Dn.version),hp(al||pi.GreenSockGlobals||!pi.gsap&&pi||{}),Rp.forEach(Pp)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&h.sleep(),c=u||function(m){return setTimeout(m,a-h.time*1e3+1|0)},Va=1,_(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(l),Va=0,c=za},lagSmoothing:function(m,p){t=m||1/0,e=Math.min(p||33,t)},fps:function(m){s=1e3/(m||240),a=h.time*1e3+s},add:function(m,p,S){var E=p?function(x,C,A,b){m(x,C,A,b),h.remove(E)}:m;return h.remove(m),o[S?"unshift":"push"](E),Hs(),E},remove:function(m,p){~(p=o.indexOf(m))&&o.splice(p,1)&&d>=p&&d--},_listeners:o},h})(),Hs=function(){return!Va&&Vn.wake()},ae={},mS=/^[\d.\-M][\d.\-,\s]/,_S=/["']/g,gS=function(t){for(var e={},n=t.substr(1,t.length-3).split(":"),i=n[0],s=1,a=n.length,o,l,c;s<a;s++)l=n[s],o=s!==a-1?l.lastIndexOf(","):l.length,c=l.substr(0,o),e[i]=isNaN(c)?c.replace(_S,"").trim():+c,i=l.substr(o+1).trim();return e},vS=function(t){var e=t.indexOf("(")+1,n=t.indexOf(")"),i=t.indexOf("(",e);return t.substring(e,~i&&i<n?t.indexOf(")",n+1):n)},xS=function(t){var e=(t+"").split("("),n=ae[e[0]];return n&&e.length>1&&n.config?n.config.apply(null,~t.indexOf("{")?[gS(e[1])]:vS(t).split(",").map(_p)):ae._CE&&mS.test(t)?ae._CE("",t):n},MS=function(t){return function(e){return 1-t(1-e)}},kr=function(t,e){return t&&(Ie(t)?t:ae[t]||xS(t))||e},Kr=function(t,e,n,i){n===void 0&&(n=function(l){return 1-e(1-l)}),i===void 0&&(i=function(l){return l<.5?e(l*2)/2:1-e((1-l)*2)/2});var s={easeIn:e,easeOut:n,easeInOut:i},a;return Cn(t,function(o){ae[o]=Yn[o]=s,ae[a=o.toLowerCase()]=n;for(var l in s)ae[a+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=ae[o+"."+l]=s[l]}),s},Ip=function(t){return function(e){return e<.5?(1-t(1-e*2))/2:.5+t((e-.5)*2)/2}},lc=function r(t,e,n){var i=e>=1?e:1,s=(n||(t?.3:.45))/(e<1?e:1),a=s/_u*(Math.asin(1/i)||0),o=function(u){return u===1?1:i*Math.pow(2,-10*u)*WM((u-a)*s)+1},l=t==="out"?o:t==="in"?function(c){return 1-o(1-c)}:Ip(o);return s=_u/s,l.config=function(c,u){return r(t,c,u)},l},cc=function r(t,e){e===void 0&&(e=1.70158);var n=function(a){return a?--a*a*((e+1)*a+e)+1:0},i=t==="out"?n:t==="in"?function(s){return 1-n(1-s)}:Ip(n);return i.config=function(s){return r(t,s)},i};Cn("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,t){var e=t<5?t+1:t;Kr(r+",Power"+(e-1),t?function(n){return Math.pow(n,e)}:function(n){return n},function(n){return 1-Math.pow(1-n,e)},function(n){return n<.5?Math.pow(n*2,e)/2:1-Math.pow((1-n)*2,e)/2})});ae.Linear.easeNone=ae.none=ae.Linear.easeIn;Kr("Elastic",lc("in"),lc("out"),lc());(function(r,t){var e=1/t,n=2*e,i=2.5*e,s=function(o){return o<e?r*o*o:o<n?r*Math.pow(o-1.5/t,2)+.75:o<i?r*(o-=2.25/t)*o+.9375:r*Math.pow(o-2.625/t,2)+.984375};Kr("Bounce",function(a){return 1-s(1-a)},s)})(7.5625,2.75);Kr("Expo",function(r){return Math.pow(2,10*(r-1))*r+r*r*r*r*r*r*(1-r)});Kr("Circ",function(r){return-(ap(1-r*r)-1)});Kr("Sine",function(r){return r===1?1:-GM(r*VM)+1});Kr("Back",cc("in"),cc("out"),cc());ae.SteppedEase=ae.steps=Yn.SteppedEase={config:function(t,e){t===void 0&&(t=1);var n=1/t,i=t+(e?0:1),s=e?1:0,a=1-Ee;return function(o){return((i*ja(0,a,o)|0)+s)*n}}};Oa.ease=ae["quad.out"];Cn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return lh+=r+","+r+"Params,"});var Np=function(t,e){this.id=HM++,t._gsap=this,this.target=t,this.harness=e,this.get=e?e.get:pp,this.set=e?e.getSetter:ph},Ha=(function(){function r(e){this.vars=e,this._delay=+e.delay||0,(this._repeat=e.repeat===1/0?-2:e.repeat||0)&&(this._rDelay=e.repeatDelay||0,this._yoyo=!!e.yoyo||!!e.yoyoEase),this._ts=1,Vs(this,+e.duration,1,1),this.data=e.data,Ae&&(this._ctx=Ae,Ae.data.push(this)),Va||Vn.wake()}var t=r.prototype;return t.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},t.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},t.totalDuration=function(n){return arguments.length?(this._dirty=0,Vs(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(n,i){if(Hs(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(Tl(this,n),!s._dp||s.parent||xp(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&vi(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===Ee||!this._initted&&this._dur&&n||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),mp(this,n,i)),this},t.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+Of(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},t.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},t.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+Of(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},t.iteration=function(n,i){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,i):this._repeat?ks(this._tTime,s)+1:1},t.timeScale=function(n,i){if(!arguments.length)return this._rts===-Ee?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?cl(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-Ee?0:this._rts,this.totalTime(ja(-Math.abs(this._delay),this.totalDuration(),s),i!==!1),El(this),tS(this)},t.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Hs(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Ee&&(this._tTime-=Ee)))),this):this._ps},t.startTime=function(n){if(arguments.length){this._start=Pe(n);var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&vi(i,this,this._start-this._delay),this}return this._start},t.endTime=function(n){return this._start+(An(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?cl(i.rawTime(n),this):this._tTime:this._tTime},t.revert=function(n){n===void 0&&(n=KM);var i=tn;return tn=n,uh(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),tn=i,this},t.globalTime=function(n){for(var i=this,s=arguments.length?n:i.rawTime();i;)s=i._start+s/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},t.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,Bf(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,Bf(this),i?this.time(i):this}return this._rDelay},t.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},t.seek=function(n,i){return this.totalTime(jn(this,n),An(i))},t.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,An(i)),this._dur||(this._zTime=-Ee),this},t.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},t.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},t.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-Ee:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-Ee,this},t.isActive=function(){var n=this.parent||this._dp,i=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=i&&s<this.endTime(!0)-Ee)},t.eventCallback=function(n,i,s){var a=this.vars;return arguments.length>1?(i?(a[n]=i,s&&(a[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=i)):delete a[n],this):a[n]},t.then=function(n){var i=this,s=i._prom;return new Promise(function(a){var o=Ie(n)?n:gp,l=function(){var u=i.then;i.then=null,s&&s(),Ie(o)&&(o=o(i))&&(o.then||o===i)&&(i.then=u),a(o),i.then=u};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?l():i._prom=l})},t.kill=function(){da(this)},r})();qn(Ha.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Ee,_prom:0,_ps:!1,_rts:1});var bn=(function(r){sp(t,r);function t(n,i){var s;return n===void 0&&(n={}),s=r.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=An(n.sortChildren),De&&vi(n.parent||De,Li(s),i),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&Mp(Li(s),n.scrollTrigger),s}var e=t.prototype;return e.to=function(i,s,a){return ya(0,arguments,this),this},e.from=function(i,s,a){return ya(1,arguments,this),this},e.fromTo=function(i,s,a,o){return ya(2,arguments,this),this},e.set=function(i,s,a){return s.duration=0,s.parent=this,Sa(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new ke(i,s,jn(this,a),1),this},e.call=function(i,s,a){return vi(this,ke.delayedCall(0,i,s),a)},e.staggerTo=function(i,s,a,o,l,c,u){return a.duration=s,a.stagger=a.stagger||o,a.onComplete=c,a.onCompleteParams=u,a.parent=this,new ke(i,a,jn(this,l)),this},e.staggerFrom=function(i,s,a,o,l,c,u){return a.runBackwards=1,Sa(a).immediateRender=An(a.immediateRender),this.staggerTo(i,s,a,o,l,c,u)},e.staggerFromTo=function(i,s,a,o,l,c,u,h){return o.startAt=a,Sa(o).immediateRender=An(o.immediateRender),this.staggerTo(i,s,o,l,c,u,h)},e.render=function(i,s,a){var o=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=i<=0?0:Pe(i),h=this._zTime<0!=i<0&&(this._initted||!c),f,d,_,g,m,p,S,E,x,C,A,b;if(this!==De&&u>l&&i>=0&&(u=l),u!==this._tTime||a||h){if(o!==this._time&&c&&(u+=this._time-o,i+=this._time-o),f=u,x=this._start,E=this._ts,p=!E,h&&(c||(o=this._zTime),(i||!s)&&(this._zTime=i)),this._repeat){if(A=this._yoyo,m=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(m*100+i,s,a);if(f=Pe(u%m),u===l?(g=this._repeat,f=c):(C=Pe(u/m),g=~~C,g&&g===C&&(f=c,g--),f>c&&(f=c)),C=ks(this._tTime,m),!o&&this._tTime&&C!==g&&this._tTime-C*m-this._dur<=0&&(C=g),A&&g&1&&(f=c-f,b=1),g!==C&&!this._lock){var R=A&&C&1,M=R===(A&&g&1);if(g<C&&(R=!R),o=R?0:u%c?c:u,this._lock=1,this.render(o||(b?0:Pe(g*m)),s,!c)._lock=0,this._tTime=u,!s&&this.parent&&Gn(this,"onRepeat"),this.vars.repeatRefresh&&!b&&(this.invalidate()._lock=1,C=g),o&&o!==this._time||p!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,M&&(this._lock=2,o=R?c:-1e-4,this.render(o,!0),this.vars.repeatRefresh&&!b&&this.invalidate()),this._lock=0,!this._ts&&!p)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(S=rS(this,Pe(o),Pe(f)),S&&(u-=f-(f=S._start))),this._tTime=u,this._time=f,this._act=!!E,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,o=0),!o&&u&&c&&!s&&!C&&(Gn(this,"onStart"),this._tTime!==u))return this;if(f>=o&&i>=0)for(d=this._first;d;){if(_=d._next,(d._act||f>=d._start)&&d._ts&&S!==d){if(d.parent!==this)return this.render(i,s,a);if(d.render(d._ts>0?(f-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(f-d._start)*d._ts,s,a),f!==this._time||!this._ts&&!p){S=0,_&&(u+=this._zTime=-Ee);break}}d=_}else{d=this._last;for(var v=i<0?i:f;d;){if(_=d._prev,(d._act||v<=d._end)&&d._ts&&S!==d){if(d.parent!==this)return this.render(i,s,a);if(d.render(d._ts>0?(v-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(v-d._start)*d._ts,s,a||tn&&uh(d)),f!==this._time||!this._ts&&!p){S=0,_&&(u+=this._zTime=v?-Ee:Ee);break}}d=_}}if(S&&!s&&(this.pause(),S.render(f>=o?0:-Ee)._zTime=f>=o?1:-1,this._ts))return this._start=x,El(this),this.render(i,s,a);this._onUpdate&&!s&&Gn(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&o)&&(x===this._start||Math.abs(E)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&pr(this,1),!s&&!(i<0&&!o)&&(u||o||!l)&&(Gn(this,u===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},e.add=function(i,s){var a=this;if(Gi(s)||(s=jn(this,s,i)),!(i instanceof Ha)){if(un(i))return i.forEach(function(o){return a.add(o,s)}),this;if(Ke(i))return this.addLabel(i,s);if(Ie(i))i=ke.delayedCall(0,i);else return this}return this!==i?vi(this,i,s):this},e.getChildren=function(i,s,a,o){i===void 0&&(i=!0),s===void 0&&(s=!0),a===void 0&&(a=!0),o===void 0&&(o=-ti);for(var l=[],c=this._first;c;)c._start>=o&&(c instanceof ke?s&&l.push(c):(a&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,s,a)))),c=c._next;return l},e.getById=function(i){for(var s=this.getChildren(1,1,1),a=s.length;a--;)if(s[a].vars.id===i)return s[a]},e.remove=function(i){return Ke(i)?this.removeLabel(i):Ie(i)?this.killTweensOf(i):(i.parent===this&&yl(this,i),i===this._recent&&(this._recent=this._last),zr(this))},e.totalTime=function(i,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Pe(Vn.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),r.prototype.totalTime.call(this,i,s),this._forcing=0,this):this._tTime},e.addLabel=function(i,s){return this.labels[i]=jn(this,s),this},e.removeLabel=function(i){return delete this.labels[i],this},e.addPause=function(i,s,a){var o=ke.delayedCall(0,s||za,a);return o.data="isPause",this._hasPause=1,vi(this,o,jn(this,i))},e.removePause=function(i){var s=this._first;for(i=jn(this,i);s;)s._start===i&&s.data==="isPause"&&pr(s),s=s._next},e.killTweensOf=function(i,s,a){for(var o=this.getTweensOf(i,a),l=o.length;l--;)rr!==o[l]&&o[l].kill(i,s);return this},e.getTweensOf=function(i,s){for(var a=[],o=ei(i),l=this._first,c=Gi(s),u;l;)l instanceof ke?jM(l._targets,o)&&(c?(!rr||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&a.push(l):(u=l.getTweensOf(o,s)).length&&a.push.apply(a,u),l=l._next;return a},e.tweenTo=function(i,s){s=s||{};var a=this,o=jn(a,i),l=s,c=l.startAt,u=l.onStart,h=l.onStartParams,f=l.immediateRender,d,_=ke.to(a,qn({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:o,overwrite:"auto",duration:s.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale())||Ee,onStart:function(){if(a.pause(),!d){var m=s.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale());_._dur!==m&&Vs(_,m,0,1).render(_._time,!0,!0),d=1}u&&u.apply(_,h||[])}},s));return f?_.render(0):_},e.tweenFromTo=function(i,s,a){return this.tweenTo(s,qn({startAt:{time:jn(this,i)}},a))},e.recent=function(){return this._recent},e.nextLabel=function(i){return i===void 0&&(i=this._time),zf(this,jn(this,i))},e.previousLabel=function(i){return i===void 0&&(i=this._time),zf(this,jn(this,i),1)},e.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+Ee)},e.shiftChildren=function(i,s,a){a===void 0&&(a=0);var o=this._first,l=this.labels,c;for(i=Pe(i);o;)o._start>=a&&(o._start+=i,o._end+=i),o=o._next;if(s)for(c in l)l[c]>=a&&(l[c]+=i);return zr(this)},e.invalidate=function(i){var s=this._first;for(this._lock=0;s;)s.invalidate(i),s=s._next;return r.prototype.invalidate.call(this,i)},e.clear=function(i){i===void 0&&(i=!0);for(var s=this._first,a;s;)a=s._next,this.remove(s),s=a;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),zr(this)},e.totalDuration=function(i){var s=0,a=this,o=a._last,l=ti,c,u,h;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-i:i));if(a._dirty){for(h=a.parent;o;)c=o._prev,o._dirty&&o.totalDuration(),u=o._start,u>l&&a._sort&&o._ts&&!a._lock?(a._lock=1,vi(a,o,u-o._delay,1)._lock=0):l=u,u<0&&o._ts&&(s-=u,(!h&&!a._dp||h&&h.smoothChildTiming)&&(a._start+=Pe(u/a._ts),a._time-=u,a._tTime-=u),a.shiftChildren(-u,!1,-1/0),l=0),o._end>s&&o._ts&&(s=o._end),o=c;Vs(a,a===De&&a._time>s?a._time:s,1,1),a._dirty=0}return a._tDur},t.updateRoot=function(i){if(De._ts&&(mp(De,cl(i,De)),dp=Vn.frame),Vn.frame>=Nf){Nf+=Xn.autoSleep||120;var s=De._first;if((!s||!s._ts)&&Xn.autoSleep&&Vn._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||Vn.sleep()}}},t})(Ha);qn(bn.prototype,{_lock:0,_hasPause:0,_forcing:0});var SS=function(t,e,n,i,s,a,o){var l=new Rn(this._pt,t,e,0,1,Vp,null,s),c=0,u=0,h,f,d,_,g,m,p,S;for(l.b=n,l.e=i,n+="",i+="",(p=~i.indexOf("random("))&&(i=ka(i)),a&&(S=[n,i],a(S,t,e),n=S[0],i=S[1]),f=n.match(sc)||[];h=sc.exec(i);)_=h[0],g=i.substring(c,h.index),d?d=(d+1)%5:g.substr(-5)==="rgba("&&(d=1),_!==f[u++]&&(m=parseFloat(f[u-1])||0,l._pt={_next:l._pt,p:g||u===1?g:",",s:m,c:_.charAt(1)==="="?ws(m,_)-m:parseFloat(_)-m,m:d&&d<4?Math.round:0},c=sc.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=o,(cp.test(i)||p)&&(l.e=0),this._pt=l,l},hh=function(t,e,n,i,s,a,o,l,c,u){Ie(i)&&(i=i(s||0,t,a));var h=t[e],f=n!=="get"?n:Ie(h)?c?t[e.indexOf("set")||!Ie(t["get"+e.substr(3)])?e:"get"+e.substr(3)](c):t[e]():h,d=Ie(h)?c?wS:zp:dh,_;if(Ke(i)&&(~i.indexOf("random(")&&(i=ka(i)),i.charAt(1)==="="&&(_=ws(f,i)+(an(f)||0),(_||_===0)&&(i=_))),!u||f!==i||Tu)return!isNaN(f*i)&&i!==""?(_=new Rn(this._pt,t,e,+f||0,i-(f||0),typeof h=="boolean"?CS:kp,0,d),c&&(_.fp=c),o&&_.modifier(o,this,t),this._pt=_):(!h&&!(e in t)&&ah(e,i),SS.call(this,t,e,f,i,d,l||Xn.stringFilter,c))},yS=function(t,e,n,i,s){if(Ie(t)&&(t=Ea(t,s,e,n,i)),!Ti(t)||t.style&&t.nodeType||un(t)||op(t))return Ke(t)?Ea(t,s,e,n,i):t;var a={},o;for(o in t)a[o]=Ea(t[o],s,e,n,i);return a},Fp=function(t,e,n,i,s,a){var o,l,c,u;if(Bn[t]&&(o=new Bn[t]).init(s,o.rawVars?e[t]:yS(e[t],i,s,a,n),n,i,a)!==!1&&(n._pt=l=new Rn(n._pt,s,t,0,1,o.render,o,0,o.priority),n!==Ss))for(c=n._ptLookup[n._targets.indexOf(s)],u=o._props.length;u--;)c[o._props[u]]=l;return o},rr,Tu,fh=function r(t,e,n){var i=t.vars,s=i.ease,a=i.startAt,o=i.immediateRender,l=i.lazy,c=i.onUpdate,u=i.runBackwards,h=i.yoyoEase,f=i.keyframes,d=i.autoRevert,_=t._dur,g=t._startAt,m=t._targets,p=t.parent,S=p&&p.data==="nested"?p.vars.targets:m,E=t._overwrite==="auto"&&!nh,x=t.timeline,C=i.easeReverse||h,A,b,R,M,v,D,P,I,V,q,H,Y,B;if(x&&(!f||!s)&&(s="none"),t._ease=kr(s,Oa.ease),t._rEase=C&&(kr(C)||t._ease),t._from=!x&&!!i.runBackwards,t._from&&(t.ratio=1),!x||f&&!i.stagger){if(I=m[0]?Br(m[0]).harness:0,Y=I&&i[I.prop],A=ll(i,oh),g&&(g._zTime<0&&g.progress(1),e<0&&u&&o&&!d?g.render(-1,!0):g.revert(u&&_?Yo:ZM),g._lazy=0),a){if(pr(t._startAt=ke.set(m,qn({data:"isStart",overwrite:!1,parent:p,immediateRender:!0,lazy:!g&&An(l),startAt:null,delay:0,onUpdate:c&&function(){return Gn(t,"onUpdate")},stagger:0},a))),t._startAt._dp=0,t._startAt._sat=t,e<0&&(tn||!o&&!d)&&t._startAt.revert(Yo),o&&_&&e<=0&&n<=0){e&&(t._zTime=e);return}}else if(u&&_&&!g){if(e&&(o=!1),R=qn({overwrite:!1,data:"isFromStart",lazy:o&&!g&&An(l),immediateRender:o,stagger:0,parent:p},A),Y&&(R[I.prop]=Y),pr(t._startAt=ke.set(m,R)),t._startAt._dp=0,t._startAt._sat=t,e<0&&(tn?t._startAt.revert(Yo):t._startAt.render(-1,!0)),t._zTime=e,!o)r(t._startAt,Ee,Ee);else if(!e)return}for(t._pt=t._ptCache=0,l=_&&An(l)||l&&!_,b=0;b<m.length;b++){if(v=m[b],P=v._gsap||ch(m)[b]._gsap,t._ptLookup[b]=q={},vu[P.id]&&ur.length&&ol(),H=S===m?b:S.indexOf(v),I&&(V=new I).init(v,Y||A,t,H,S)!==!1&&(t._pt=M=new Rn(t._pt,v,V.name,0,1,V.render,V,0,V.priority),V._props.forEach(function(et){q[et]=M}),V.priority&&(D=1)),!I||Y)for(R in A)Bn[R]&&(V=Fp(R,A,t,H,v,S))?V.priority&&(D=1):q[R]=M=hh.call(t,v,R,"get",A[R],H,S,0,i.stringFilter);t._op&&t._op[b]&&t.kill(v,t._op[b]),E&&t._pt&&(rr=t,De.killTweensOf(v,q,t.globalTime(e)),B=!t.parent,rr=0),t._pt&&l&&(vu[P.id]=1)}D&&Hp(t),t._onInit&&t._onInit(t)}t._onUpdate=c,t._initted=(!t._op||t._pt)&&!B,f&&e<=0&&x.render(ti,!0,!0)},ES=function(t,e,n,i,s,a,o,l){var c=(t._pt&&t._ptCache||(t._ptCache={}))[e],u,h,f,d;if(!c)for(c=t._ptCache[e]=[],f=t._ptLookup,d=t._targets.length;d--;){if(u=f[d][e],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==e&&u.fp!==e;)u=u._next;if(!u)return Tu=1,t.vars[e]="+=0",fh(t,o),Tu=0,l?Ba(e+" not eligible for reset. Try splitting into individual properties"):1;c.push(u)}for(d=c.length;d--;)h=c[d],u=h._pt||h,u.s=(i||i===0)&&!s?i:u.s+(i||0)+a*u.c,u.c=n-u.s,h.e&&(h.e=Fe(n)+an(h.e)),h.b&&(h.b=u.s+an(h.b))},TS=function(t,e){var n=t[0]?Br(t[0]).harness:0,i=n&&n.aliases,s,a,o,l;if(!i)return e;s=zs({},e);for(a in i)if(a in s)for(l=i[a].split(","),o=l.length;o--;)s[l[o]]=s[a];return s},bS=function(t,e,n,i){var s=e.ease||i||"power1.inOut",a,o;if(un(e))o=n[t]||(n[t]=[]),e.forEach(function(l,c){return o.push({t:c/(e.length-1)*100,v:l,e:s})});else for(a in e)o=n[a]||(n[a]=[]),a==="ease"||o.push({t:parseFloat(t),v:e[a],e:s})},Ea=function(t,e,n,i,s){return Ie(t)?t.call(e,n,i,s):Ke(t)&&~t.indexOf("random(")?ka(t):t},Op=lh+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",Bp={};Cn(Op+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return Bp[r]=1});var ke=(function(r){sp(t,r);function t(n,i,s,a){var o;typeof i=="number"&&(s.duration=i,i=s,s=null),o=r.call(this,a?i:Sa(i))||this;var l=o.vars,c=l.duration,u=l.delay,h=l.immediateRender,f=l.stagger,d=l.overwrite,_=l.keyframes,g=l.defaults,m=l.scrollTrigger,p=i.parent||De,S=(un(n)||op(n)?Gi(n[0]):"length"in i)?[n]:ei(n),E,x,C,A,b,R,M,v;if(o._targets=S.length?ch(S):Ba("GSAP target "+n+" not found. https://gsap.com",!Xn.nullTargetWarn)||[],o._ptLookup=[],o._overwrite=d,_||f||Eo(c)||Eo(u)){i=o.vars;var D=i.easeReverse||i.yoyoEase;if(E=o.timeline=new bn({data:"nested",defaults:g||{},targets:p&&p.data==="nested"?p.vars.targets:S}),E.kill(),E.parent=E._dp=Li(o),E._start=0,f||Eo(c)||Eo(u)){if(A=S.length,M=f&&Tp(f),Ti(f))for(b in f)~Op.indexOf(b)&&(v||(v={}),v[b]=f[b]);for(x=0;x<A;x++)C=ll(i,Bp),C.stagger=0,D&&(C.easeReverse=D),v&&zs(C,v),R=S[x],C.duration=+Ea(c,Li(o),x,R,S),C.delay=(+Ea(u,Li(o),x,R,S)||0)-o._delay,!f&&A===1&&C.delay&&(o._delay=u=C.delay,o._start+=u,C.delay=0),E.to(R,C,M?M(x,R,S):0),E._ease=ae.none;E.duration()?c=u=0:o.timeline=0}else if(_){Sa(qn(E.vars.defaults,{ease:"none"})),E._ease=kr(_.ease||i.ease||"none");var P=0,I,V,q;if(un(_))_.forEach(function(H){return E.to(S,H,">")}),E.duration();else{C={};for(b in _)b==="ease"||b==="easeEach"||bS(b,_[b],C,_.easeEach);for(b in C)for(I=C[b].sort(function(H,Y){return H.t-Y.t}),P=0,x=0;x<I.length;x++)V=I[x],q={ease:V.e,duration:(V.t-(x?I[x-1].t:0))/100*c},q[b]=V.v,E.to(S,q,P),P+=q.duration;E.duration()<c&&E.to({},{duration:c-E.duration()})}}c||o.duration(c=E.duration())}else o.timeline=0;return d===!0&&!nh&&(rr=Li(o),De.killTweensOf(S),rr=0),vi(p,Li(o),s),i.reversed&&o.reverse(),i.paused&&o.paused(!0),(h||!c&&!_&&o._start===Pe(p._time)&&An(h)&&eS(Li(o))&&p.data!=="nested")&&(o._tTime=-Ee,o.render(Math.max(0,-u)||0)),m&&Mp(Li(o),m),o}var e=t.prototype;return e.render=function(i,s,a){var o=this._time,l=this._tDur,c=this._dur,u=i<0,h=i>l-Ee&&!u?l:i<Ee?0:i,f,d,_,g,m,p,S,E;if(!c)iS(this,i,s,a);else if(h!==this._tTime||!i||a||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u||this._lazy){if(f=h,E=this.timeline,this._repeat){if(g=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(g*100+i,s,a);if(f=Pe(h%g),h===l?(_=this._repeat,f=c):(m=Pe(h/g),_=~~m,_&&_===m?(f=c,_--):f>c&&(f=c)),p=this._yoyo&&_&1,p&&(f=c-f),m=ks(this._tTime,g),f===o&&!a&&this._initted&&_===m)return this._tTime=h,this;_!==m&&this.vars.repeatRefresh&&!p&&!this._lock&&f!==g&&this._initted&&(this._lock=a=1,this.render(Pe(g*_),!0).invalidate()._lock=0)}if(!this._initted){if(Sp(this,u?i:f,a,s,h))return this._tTime=0,this;if(o!==this._time&&!(a&&this.vars.repeatRefresh&&_!==m))return this;if(c!==this._dur)return this.render(i,s,a)}if(this._rEase){var x=f<o;if(x!==this._inv){var C=x?o:c-o;this._inv=x,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=o,this._invRecip=C?(x?-1:1)/C:0,this._invScale=x?-this.ratio:1-this.ratio,this._invEase=x?this._rEase:this._ease}this.ratio=S=this._invRatio+this._invScale*this._invEase((f-this._invTime)*this._invRecip)}else this.ratio=S=this._ease(f/c);if(this._from&&(this.ratio=S=1-S),this._tTime=h,this._time=f,!this._act&&this._ts&&(this._act=1,this._lazy=0),!o&&h&&!s&&!m&&(Gn(this,"onStart"),this._tTime!==h))return this;for(d=this._pt;d;)d.r(S,d.d),d=d._next;E&&E.render(i<0?i:E._dur*E._ease(f/this._dur),s,a)||this._startAt&&(this._zTime=i),this._onUpdate&&!s&&(u&&xu(this,i,s,a),Gn(this,"onUpdate")),this._repeat&&_!==m&&this.vars.onRepeat&&!s&&this.parent&&Gn(this,"onRepeat"),(h===this._tDur||!h)&&this._tTime===h&&(u&&!this._onUpdate&&xu(this,i,!0,!0),(i||!c)&&(h===this._tDur&&this._ts>0||!h&&this._ts<0)&&pr(this,1),!s&&!(u&&!o)&&(h||o||p)&&(Gn(this,h===l?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom()))}return this},e.targets=function(){return this._targets},e.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),r.prototype.invalidate.call(this,i)},e.resetTo=function(i,s,a,o,l){Va||Vn.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||fh(this,c),u=this._ease(c/this._dur),ES(this,i,s,a,o,u,c,l)?this.resetTo(i,s,a,o,1):(Tl(this,0),this.parent||vp(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},e.kill=function(i,s){if(s===void 0&&(s="all"),!i&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?da(this):this.scrollTrigger&&this.scrollTrigger.kill(!!tn),this;if(this.timeline){var a=this.timeline.totalDuration();return this.timeline.killTweensOf(i,s,rr&&rr.vars.overwrite!==!0)._first||da(this),this.parent&&a!==this.timeline.totalDuration()&&Vs(this,this._dur*this.timeline._tDur/a,0,1),this}var o=this._targets,l=i?ei(i):o,c=this._ptLookup,u=this._pt,h,f,d,_,g,m,p;if((!s||s==="all")&&QM(o,l))return s==="all"&&(this._pt=0),da(this);for(h=this._op=this._op||[],s!=="all"&&(Ke(s)&&(g={},Cn(s,function(S){return g[S]=1}),s=g),s=TS(o,s)),p=o.length;p--;)if(~l.indexOf(o[p])){f=c[p],s==="all"?(h[p]=s,_=f,d={}):(d=h[p]=h[p]||{},_=s);for(g in _)m=f&&f[g],m&&((!("kill"in m.d)||m.d.kill(g)===!0)&&yl(this,m,"_pt"),delete f[g]),d!=="all"&&(d[g]=1)}return this._initted&&!this._pt&&u&&da(this),this},t.to=function(i,s){return new t(i,s,arguments[2])},t.from=function(i,s){return ya(1,arguments)},t.delayedCall=function(i,s,a,o){return new t(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:s,onReverseComplete:s,onCompleteParams:a,onReverseCompleteParams:a,callbackScope:o})},t.fromTo=function(i,s,a){return ya(2,arguments)},t.set=function(i,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new t(i,s)},t.killTweensOf=function(i,s,a){return De.killTweensOf(i,s,a)},t})(Ha);qn(ke.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Cn("staggerTo,staggerFrom,staggerFromTo",function(r){ke[r]=function(){var t=new bn,e=Su.call(arguments,0);return e.splice(r==="staggerFromTo"?5:4,0,0),t[r].apply(t,e)}});var dh=function(t,e,n){return t[e]=n},zp=function(t,e,n){return t[e](n)},wS=function(t,e,n,i){return t[e](i.fp,n)},AS=function(t,e,n){return t.setAttribute(e,n)},ph=function(t,e){return Ie(t[e])?zp:ih(t[e])&&t.setAttribute?AS:dh},kp=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e6)/1e6,e)},CS=function(t,e){return e.set(e.t,e.p,!!(e.s+e.c*t),e)},Vp=function(t,e){var n=e._pt,i="";if(!t&&e.b)i=e.b;else if(t===1&&e.e)i=e.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*t):Math.round((n.s+n.c*t)*1e4)/1e4)+i,n=n._next;i+=e.c}e.set(e.t,e.p,i,e)},mh=function(t,e){for(var n=e._pt;n;)n.r(t,n.d),n=n._next},RS=function(t,e,n,i){for(var s=this._pt,a;s;)a=s._next,s.p===i&&s.modifier(t,e,n),s=a},PS=function(t){for(var e=this._pt,n,i;e;)i=e._next,e.p===t&&!e.op||e.op===t?yl(this,e,"_pt"):e.dep||(n=1),e=i;return!n},DS=function(t,e,n,i){i.mSet(t,e,i.m.call(i.tween,n,i.mt),i)},Hp=function(t){for(var e=t._pt,n,i,s,a;e;){for(n=e._next,i=s;i&&i.pr>e.pr;)i=i._next;(e._prev=i?i._prev:a)?e._prev._next=e:s=e,(e._next=i)?i._prev=e:a=e,e=n}t._pt=s},Rn=(function(){function r(e,n,i,s,a,o,l,c,u){this.t=n,this.s=s,this.c=a,this.p=i,this.r=o||kp,this.d=l||this,this.set=c||dh,this.pr=u||0,this._next=e,e&&(e._prev=this)}var t=r.prototype;return t.modifier=function(n,i,s){this.mSet=this.mSet||this.set,this.set=DS,this.m=n,this.mt=s,this.tween=i},r})();Cn(lh+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(r){return oh[r]=1});Yn.TweenMax=Yn.TweenLite=ke;Yn.TimelineLite=Yn.TimelineMax=bn;De=new bn({sortChildren:!1,defaults:Oa,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Xn.stringFilter=Up;var Vr=[],$o={},LS=[],Vf=0,US=0,uc=function(t){return($o[t]||LS).map(function(e){return e()})},bu=function(){var t=Date.now(),e=[];t-Vf>2&&(uc("matchMediaInit"),Vr.forEach(function(n){var i=n.queries,s=n.conditions,a,o,l,c;for(o in i)a=pi.matchMedia(i[o]).matches,a&&(l=1),a!==s[o]&&(s[o]=a,c=1);c&&(n.revert(),l&&e.push(n))}),uc("matchMediaRevert"),e.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),Vf=t,uc("matchMedia"))},Gp=(function(){function r(e,n){this.selector=n&&yu(n),this.data=[],this._r=[],this.isReverted=!1,this.id=US++,e&&this.add(e)}var t=r.prototype;return t.add=function(n,i,s){Ie(n)&&(s=i,i=n,n=Ie);var a=this,o=function(){var c=Ae,u=a.selector,h;return c&&c!==a&&c.data.push(a),s&&(a.selector=yu(s)),Ae=a,h=i.apply(a,arguments),Ie(h)&&a._r.push(h),Ae=c,a.selector=u,a.isReverted=!1,h};return a.last=o,n===Ie?o(a,function(l){return a.add(null,l)}):n?a[n]=o:o},t.ignore=function(n){var i=Ae;Ae=null,n(this),Ae=i},t.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof r?n.push.apply(n,i.getTweens()):i instanceof ke&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(n,i){var s=this;if(n?(function(){for(var o=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(u){return o.splice(o.indexOf(u),1)}));for(o.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,h){return h.g-u.g||-1/0}).forEach(function(u){return u.t.revert(n)}),l=s.data.length;l--;)c=s.data[l],c instanceof bn?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof ke)&&c.revert&&c.revert(n);s._r.forEach(function(u){return u(n,s)}),s.isReverted=!0})():this.data.forEach(function(o){return o.kill&&o.kill()}),this.clear(),i)for(var a=Vr.length;a--;)Vr[a].id===this.id&&Vr.splice(a,1)},t.revert=function(n){this.kill(n||{})},r})(),IS=(function(){function r(e){this.contexts=[],this.scope=e,Ae&&Ae.data.push(this)}var t=r.prototype;return t.add=function(n,i,s){Ti(n)||(n={matches:n});var a=new Gp(0,s||this.scope),o=a.conditions={},l,c,u;Ae&&!a.selector&&(a.selector=Ae.selector),this.contexts.push(a),i=a.add("onMatch",i),a.queries=n;for(c in n)c==="all"?u=1:(l=pi.matchMedia(n[c]),l&&(Vr.indexOf(a)<0&&Vr.push(a),(o[c]=l.matches)&&(u=1),l.addListener?l.addListener(bu):l.addEventListener("change",bu)));return u&&i(a,function(h){return a.add(null,h)}),this},t.revert=function(n){this.kill(n||{})},t.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},r})(),ul={registerPlugin:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];e.forEach(function(i){return Pp(i)})},timeline:function(t){return new bn(t)},getTweensOf:function(t,e){return De.getTweensOf(t,e)},getProperty:function(t,e,n,i){Ke(t)&&(t=ei(t)[0]);var s=Br(t||{}).get,a=n?gp:_p;return n==="native"&&(n=""),t&&(e?a((Bn[e]&&Bn[e].get||s)(t,e,n,i)):function(o,l,c){return a((Bn[o]&&Bn[o].get||s)(t,o,l,c))})},quickSetter:function(t,e,n){if(t=ei(t),t.length>1){var i=t.map(function(u){return Dn.quickSetter(u,e,n)}),s=i.length;return function(u){for(var h=s;h--;)i[h](u)}}t=t[0]||{};var a=Bn[e],o=Br(t),l=o.harness&&(o.harness.aliases||{})[e]||e,c=a?function(u){var h=new a;Ss._pt=0,h.init(t,n?u+n:u,Ss,0,[t]),h.render(1,h),Ss._pt&&mh(1,Ss)}:o.set(t,l);return a?c:function(u){return c(t,l,n?u+n:u,o,1)}},quickTo:function(t,e,n){var i,s=Dn.to(t,qn((i={},i[e]="+=0.1",i.paused=!0,i.stagger=0,i),n||{})),a=function(l,c,u){return s.resetTo(e,l,c,u)};return a.tween=s,a},isTweening:function(t){return De.getTweensOf(t,!0).length>0},defaults:function(t){return t&&t.ease&&(t.ease=kr(t.ease,Oa.ease)),Ff(Oa,t||{})},config:function(t){return Ff(Xn,t||{})},registerEffect:function(t){var e=t.name,n=t.effect,i=t.plugins,s=t.defaults,a=t.extendTimeline;(i||"").split(",").forEach(function(o){return o&&!Bn[o]&&!Yn[o]&&Ba(e+" effect requires "+o+" plugin.")}),ac[e]=function(o,l,c){return n(ei(o),qn(l||{},s),c)},a&&(bn.prototype[e]=function(o,l,c){return this.add(ac[e](o,Ti(l)?l:(c=l)&&{},this),c)})},registerEase:function(t,e){ae[t]=kr(e)},parseEase:function(t,e){return arguments.length?kr(t,e):ae},getById:function(t){return De.getById(t)},exportRoot:function(t,e){t===void 0&&(t={});var n=new bn(t),i,s;for(n.smoothChildTiming=An(t.smoothChildTiming),De.remove(n),n._dp=0,n._time=n._tTime=De._time,i=De._first;i;)s=i._next,(e||!(!i._dur&&i instanceof ke&&i.vars.onComplete===i._targets[0]))&&vi(n,i,i._start-i._delay),i=s;return vi(De,n,0),n},context:function(t,e){return t?new Gp(t,e):Ae},matchMedia:function(t){return new IS(t)},matchMediaRefresh:function(){return Vr.forEach(function(t){var e=t.conditions,n,i;for(i in e)e[i]&&(e[i]=!1,n=1);n&&t.revert()})||bu()},addEventListener:function(t,e){var n=$o[t]||($o[t]=[]);~n.indexOf(e)||n.push(e)},removeEventListener:function(t,e){var n=$o[t],i=n&&n.indexOf(e);i>=0&&n.splice(i,1)},utils:{wrap:hS,wrapYoyo:fS,distribute:Tp,random:wp,snap:bp,normalize:uS,getUnit:an,clamp:aS,splitColor:Dp,toArray:ei,selector:yu,mapRange:Cp,pipe:lS,unitize:cS,interpolate:dS,shuffle:Ep},install:hp,effects:ac,ticker:Vn,updateRoot:bn.updateRoot,plugins:Bn,globalTimeline:De,core:{PropTween:Rn,globals:fp,Tween:ke,Timeline:bn,Animation:Ha,getCache:Br,_removeLinkedListItem:yl,reverting:function(){return tn},context:function(t){return t&&Ae&&(Ae.data.push(t),t._ctx=Ae),Ae},suppressOverwrites:function(t){return nh=t}}};Cn("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return ul[r]=ke[r]});Vn.add(bn.updateRoot);Ss=ul.to({},{duration:0});var NS=function(t,e){for(var n=t._pt;n&&n.p!==e&&n.op!==e&&n.fp!==e;)n=n._next;return n},FS=function(t,e){var n=t._targets,i,s,a;for(i in e)for(s=n.length;s--;)a=t._ptLookup[s][i],a&&(a=a.d)&&(a._pt&&(a=NS(a,i)),a&&a.modifier&&a.modifier(e[i],t,n[s],i))},hc=function(t,e){return{name:t,headless:1,rawVars:1,init:function(i,s,a){a._onInit=function(o){var l,c;if(Ke(s)&&(l={},Cn(s,function(u){return l[u]=1}),s=l),e){l={};for(c in s)l[c]=e(s[c]);s=l}FS(o,s)}}}},Dn=ul.registerPlugin({name:"attr",init:function(t,e,n,i,s){var a,o,l;this.tween=n;for(a in e)l=t.getAttribute(a)||"",o=this.add(t,"setAttribute",(l||0)+"",e[a],i,s,0,0,a),o.op=a,o.b=l,this._props.push(a)},render:function(t,e){for(var n=e._pt;n;)tn?n.set(n.t,n.p,n.b,n):n.r(t,n.d),n=n._next}},{name:"endArray",headless:1,init:function(t,e){for(var n=e.length;n--;)this.add(t,n,t[n]||0,e[n],0,0,0,0,0,1)}},hc("roundProps",Eu),hc("modifiers"),hc("snap",bp))||ul;ke.version=bn.version=Dn.version="3.15.0";up=1;rh()&&Hs();ae.Power0;ae.Power1;ae.Power2;ae.Power3;ae.Power4;ae.Linear;ae.Quad;ae.Cubic;ae.Quart;ae.Quint;ae.Strong;ae.Elastic;ae.Back;ae.SteppedEase;ae.Bounce;ae.Sine;ae.Expo;ae.Circ;/*!
 * CSSPlugin 3.15.0
 * https://gsap.com
 *
 * Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Hf,sr,As,_h,Fr,Gf,gh,OS=function(){return typeof window<"u"},Wi={},Rr=180/Math.PI,Cs=Math.PI/180,fs=Math.atan2,Wf=1e8,vh=/([A-Z])/g,BS=/(left|right|width|margin|padding|x)/i,zS=/[\s,\(]\S/,xi={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},wu=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},kS=function(t,e){return e.set(e.t,e.p,t===1?e.e:Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},VS=function(t,e){return e.set(e.t,e.p,t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},HS=function(t,e){return e.set(e.t,e.p,t===1?e.e:t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},GS=function(t,e){var n=e.s+e.c*t;e.set(e.t,e.p,~~(n+(n<0?-.5:.5))+e.u,e)},Wp=function(t,e){return e.set(e.t,e.p,t?e.e:e.b,e)},Xp=function(t,e){return e.set(e.t,e.p,t!==1?e.b:e.e,e)},WS=function(t,e,n){return t.style[e]=n},XS=function(t,e,n){return t.style.setProperty(e,n)},YS=function(t,e,n){return t._gsap[e]=n},qS=function(t,e,n){return t._gsap.scaleX=t._gsap.scaleY=n},$S=function(t,e,n,i,s){var a=t._gsap;a.scaleX=a.scaleY=n,a.renderTransform(s,a)},ZS=function(t,e,n,i,s){var a=t._gsap;a[e]=n,a.renderTransform(s,a)},Le="transform",Pn=Le+"Origin",KS=function r(t,e){var n=this,i=this.target,s=i.style,a=i._gsap;if(t in Wi&&s){if(this.tfm=this.tfm||{},t!=="transform")t=xi[t]||t,~t.indexOf(",")?t.split(",").forEach(function(o){return n.tfm[o]=Ui(i,o)}):this.tfm[t]=a.x?a[t]:Ui(i,t),t===Pn&&(this.tfm.zOrigin=a.zOrigin);else return xi.transform.split(",").forEach(function(o){return r.call(n,o,e)});if(this.props.indexOf(Le)>=0)return;a.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(Pn,e,"")),t=Le}(s||e)&&this.props.push(t,e,s[t])},Yp=function(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))},jS=function(){var t=this.props,e=this.target,n=e.style,i=e._gsap,s,a;for(s=0;s<t.length;s+=3)t[s+1]?t[s+1]===2?e[t[s]](t[s+2]):e[t[s]]=t[s+2]:t[s+2]?n[t[s]]=t[s+2]:n.removeProperty(t[s].substr(0,2)==="--"?t[s]:t[s].replace(vh,"-$1").toLowerCase());if(this.tfm){for(a in this.tfm)i[a]=this.tfm[a];i.svg&&(i.renderTransform(),e.setAttribute("data-svg-origin",this.svgo||"")),s=gh(),(!s||!s.isStart)&&!n[Le]&&(Yp(n),i.zOrigin&&n[Pn]&&(n[Pn]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},qp=function(t,e){var n={target:t,props:[],revert:jS,save:KS};return t._gsap||Dn.core.getCache(t),e&&t.style&&t.nodeType&&e.split(",").forEach(function(i){return n.save(i)}),n},$p,Au=function(t,e){var n=sr.createElementNS?sr.createElementNS((e||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):sr.createElement(t);return n&&n.style?n:sr.createElement(t)},Wn=function r(t,e,n){var i=getComputedStyle(t);return i[e]||i.getPropertyValue(e.replace(vh,"-$1").toLowerCase())||i.getPropertyValue(e)||!n&&r(t,Gs(e)||e,1)||""},Xf="O,Moz,ms,Ms,Webkit".split(","),Gs=function(t,e,n){var i=e||Fr,s=i.style,a=5;if(t in s&&!n)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);a--&&!(Xf[a]+t in s););return a<0?null:(a===3?"ms":a>=0?Xf[a]:"")+t},Cu=function(){OS()&&window.document&&(Hf=window,sr=Hf.document,As=sr.documentElement,Fr=Au("div")||{style:{}},Au("div"),Le=Gs(Le),Pn=Le+"Origin",Fr.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",$p=!!Gs("perspective"),gh=Dn.core.reverting,_h=1)},Yf=function(t){var e=t.ownerSVGElement,n=Au("svg",e&&e.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=t.cloneNode(!0),s;i.style.display="block",n.appendChild(i),As.appendChild(n);try{s=i.getBBox()}catch{}return n.removeChild(i),As.removeChild(n),s},qf=function(t,e){for(var n=e.length;n--;)if(t.hasAttribute(e[n]))return t.getAttribute(e[n])},Zp=function(t){var e,n;try{e=t.getBBox()}catch{e=Yf(t),n=1}return e&&(e.width||e.height)||n||(e=Yf(t)),e&&!e.width&&!e.x&&!e.y?{x:+qf(t,["x","cx","x1"])||0,y:+qf(t,["y","cy","y1"])||0,width:0,height:0}:e},Kp=function(t){return!!(t.getCTM&&(!t.parentNode||t.ownerSVGElement)&&Zp(t))},mr=function(t,e){if(e){var n=t.style,i;e in Wi&&e!==Pn&&(e=Le),n.removeProperty?(i=e.substr(0,2),(i==="ms"||e.substr(0,6)==="webkit")&&(e="-"+e),n.removeProperty(i==="--"?e:e.replace(vh,"-$1").toLowerCase())):n.removeAttribute(e)}},ar=function(t,e,n,i,s,a){var o=new Rn(t._pt,e,n,0,1,a?Xp:Wp);return t._pt=o,o.b=i,o.e=s,t._props.push(n),o},$f={deg:1,rad:1,turn:1},JS={grid:1,flex:1},_r=function r(t,e,n,i){var s=parseFloat(n)||0,a=(n+"").trim().substr((s+"").length)||"px",o=Fr.style,l=BS.test(e),c=t.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),h=100,f=i==="px",d=i==="%",_,g,m,p;if(i===a||!s||$f[i]||$f[a])return s;if(a!=="px"&&!f&&(s=r(t,e,n,"px")),p=t.getCTM&&Kp(t),(d||a==="%")&&(Wi[e]||~e.indexOf("adius")))return _=p?t.getBBox()[l?"width":"height"]:t[u],Fe(d?s/_*h:s/100*_);if(o[l?"width":"height"]=h+(f?a:i),g=i!=="rem"&&~e.indexOf("adius")||i==="em"&&t.appendChild&&!c?t:t.parentNode,p&&(g=(t.ownerSVGElement||{}).parentNode),(!g||g===sr||!g.appendChild)&&(g=sr.body),m=g._gsap,m&&d&&m.width&&l&&m.time===Vn.time&&!m.uncache)return Fe(s/m.width*h);if(d&&(e==="height"||e==="width")){var S=t.style[e];t.style[e]=h+i,_=t[u],S?t.style[e]=S:mr(t,e)}else(d||a==="%")&&!JS[Wn(g,"display")]&&(o.position=Wn(t,"position")),g===t&&(o.position="static"),g.appendChild(Fr),_=Fr[u],g.removeChild(Fr),o.position="absolute";return l&&d&&(m=Br(g),m.time=Vn.time,m.width=g[u]),Fe(f?_*s/h:_&&s?h/_*s:0)},Ui=function(t,e,n,i){var s;return _h||Cu(),e in xi&&e!=="transform"&&(e=xi[e],~e.indexOf(",")&&(e=e.split(",")[0])),Wi[e]&&e!=="transform"?(s=Wa(t,i),s=e!=="transformOrigin"?s[e]:s.svg?s.origin:fl(Wn(t,Pn))+" "+s.zOrigin+"px"):(s=t.style[e],(!s||s==="auto"||i||~(s+"").indexOf("calc("))&&(s=hl[e]&&hl[e](t,e,n)||Wn(t,e)||pp(t,e)||(e==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?_r(t,e,s,n)+n:s},QS=function(t,e,n,i){if(!n||n==="none"){var s=Gs(e,t,1),a=s&&Wn(t,s,1);a&&a!==n?(e=s,n=a):e==="borderColor"&&(n=Wn(t,"borderTopColor"))}var o=new Rn(this._pt,t.style,e,0,1,Vp),l=0,c=0,u,h,f,d,_,g,m,p,S,E,x,C;if(o.b=n,o.e=i,n+="",i+="",i.substring(0,6)==="var(--"&&(i=Wn(t,i.substring(4,i.indexOf(")")))),i==="auto"&&(g=t.style[e],t.style[e]=i,i=Wn(t,e)||i,g?t.style[e]=g:mr(t,e)),u=[n,i],Up(u),n=u[0],i=u[1],f=n.match(Ms)||[],C=i.match(Ms)||[],C.length){for(;h=Ms.exec(i);)m=h[0],S=i.substring(l,h.index),_?_=(_+1)%5:(S.substr(-5)==="rgba("||S.substr(-5)==="hsla(")&&(_=1),m!==(g=f[c++]||"")&&(d=parseFloat(g)||0,x=g.substr((d+"").length),m.charAt(1)==="="&&(m=ws(d,m)+x),p=parseFloat(m),E=m.substr((p+"").length),l=Ms.lastIndex-E.length,E||(E=E||Xn.units[e]||x,l===i.length&&(i+=E,o.e+=E)),x!==E&&(d=_r(t,e,g,E)||0),o._pt={_next:o._pt,p:S||c===1?S:",",s:d,c:p-d,m:_&&_<4||e==="zIndex"?Math.round:0});o.c=l<i.length?i.substring(l,i.length):""}else o.r=e==="display"&&i==="none"?Xp:Wp;return cp.test(i)&&(o.e=0),this._pt=o,o},Zf={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},ty=function(t){var e=t.split(" "),n=e[0],i=e[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(t=n,n=i,i=t),e[0]=Zf[n]||n,e[1]=Zf[i]||i,e.join(" ")},ey=function(t,e){if(e.tween&&e.tween._time===e.tween._dur){var n=e.t,i=n.style,s=e.u,a=n._gsap,o,l,c;if(s==="all"||s===!0)i.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)o=s[c],Wi[o]&&(l=1,o=o==="transformOrigin"?Pn:Le),mr(n,o);l&&(mr(n,Le),a&&(a.svg&&n.removeAttribute("transform"),i.scale=i.rotate=i.translate="none",Wa(n,1),a.uncache=1,Yp(i)))}},hl={clearProps:function(t,e,n,i,s){if(s.data!=="isFromStart"){var a=t._pt=new Rn(t._pt,e,n,0,0,ey);return a.u=i,a.pr=-10,a.tween=s,t._props.push(n),1}}},Ga=[1,0,0,1,0,0],jp={},Jp=function(t){return t==="matrix(1, 0, 0, 1, 0, 0)"||t==="none"||!t},Kf=function(t){var e=Wn(t,Le);return Jp(e)?Ga:e.substr(7).match(lp).map(Fe)},xh=function(t,e){var n=t._gsap||Br(t),i=t.style,s=Kf(t),a,o,l,c;return n.svg&&t.getAttribute("transform")?(l=t.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?Ga:s):(s===Ga&&!t.offsetParent&&t!==As&&!n.svg&&(l=i.display,i.display="block",a=t.parentNode,(!a||!t.offsetParent&&!t.getBoundingClientRect().width)&&(c=1,o=t.nextElementSibling,As.appendChild(t)),s=Kf(t),l?i.display=l:mr(t,"display"),c&&(o?a.insertBefore(t,o):a?a.appendChild(t):As.removeChild(t))),e&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},Ru=function(t,e,n,i,s,a){var o=t._gsap,l=s||xh(t,!0),c=o.xOrigin||0,u=o.yOrigin||0,h=o.xOffset||0,f=o.yOffset||0,d=l[0],_=l[1],g=l[2],m=l[3],p=l[4],S=l[5],E=e.split(" "),x=parseFloat(E[0])||0,C=parseFloat(E[1])||0,A,b,R,M;n?l!==Ga&&(b=d*m-_*g)&&(R=x*(m/b)+C*(-g/b)+(g*S-m*p)/b,M=x*(-_/b)+C*(d/b)-(d*S-_*p)/b,x=R,C=M):(A=Zp(t),x=A.x+(~E[0].indexOf("%")?x/100*A.width:x),C=A.y+(~(E[1]||E[0]).indexOf("%")?C/100*A.height:C)),i||i!==!1&&o.smooth?(p=x-c,S=C-u,o.xOffset=h+(p*d+S*g)-p,o.yOffset=f+(p*_+S*m)-S):o.xOffset=o.yOffset=0,o.xOrigin=x,o.yOrigin=C,o.smooth=!!i,o.origin=e,o.originIsAbsolute=!!n,t.style[Pn]="0px 0px",a&&(ar(a,o,"xOrigin",c,x),ar(a,o,"yOrigin",u,C),ar(a,o,"xOffset",h,o.xOffset),ar(a,o,"yOffset",f,o.yOffset)),t.setAttribute("data-svg-origin",x+" "+C)},Wa=function(t,e){var n=t._gsap||new Np(t);if("x"in n&&!e&&!n.uncache)return n;var i=t.style,s=n.scaleX<0,a="px",o="deg",l=getComputedStyle(t),c=Wn(t,Pn)||"0",u,h,f,d,_,g,m,p,S,E,x,C,A,b,R,M,v,D,P,I,V,q,H,Y,B,et,L,ot,Ct,Vt,$,nt;return u=h=f=g=m=p=S=E=x=0,d=_=1,n.svg=!!(t.getCTM&&Kp(t)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[Le]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Le]!=="none"?l[Le]:"")),i.scale=i.rotate=i.translate="none"),b=xh(t,n.svg),n.svg&&(n.uncache?(B=t.getBBox(),c=n.xOrigin-B.x+"px "+(n.yOrigin-B.y)+"px",Y=""):Y=!e&&t.getAttribute("data-svg-origin"),Ru(t,Y||c,!!Y||n.originIsAbsolute,n.smooth!==!1,b)),C=n.xOrigin||0,A=n.yOrigin||0,b!==Ga&&(D=b[0],P=b[1],I=b[2],V=b[3],u=q=b[4],h=H=b[5],b.length===6?(d=Math.sqrt(D*D+P*P),_=Math.sqrt(V*V+I*I),g=D||P?fs(P,D)*Rr:0,S=I||V?fs(I,V)*Rr+g:0,S&&(_*=Math.abs(Math.cos(S*Cs))),n.svg&&(u-=C-(C*D+A*I),h-=A-(C*P+A*V))):(nt=b[6],Vt=b[7],L=b[8],ot=b[9],Ct=b[10],$=b[11],u=b[12],h=b[13],f=b[14],R=fs(nt,Ct),m=R*Rr,R&&(M=Math.cos(-R),v=Math.sin(-R),Y=q*M+L*v,B=H*M+ot*v,et=nt*M+Ct*v,L=q*-v+L*M,ot=H*-v+ot*M,Ct=nt*-v+Ct*M,$=Vt*-v+$*M,q=Y,H=B,nt=et),R=fs(-I,Ct),p=R*Rr,R&&(M=Math.cos(-R),v=Math.sin(-R),Y=D*M-L*v,B=P*M-ot*v,et=I*M-Ct*v,$=V*v+$*M,D=Y,P=B,I=et),R=fs(P,D),g=R*Rr,R&&(M=Math.cos(R),v=Math.sin(R),Y=D*M+P*v,B=q*M+H*v,P=P*M-D*v,H=H*M-q*v,D=Y,q=B),m&&Math.abs(m)+Math.abs(g)>359.9&&(m=g=0,p=180-p),d=Fe(Math.sqrt(D*D+P*P+I*I)),_=Fe(Math.sqrt(H*H+nt*nt)),R=fs(q,H),S=Math.abs(R)>2e-4?R*Rr:0,x=$?1/($<0?-$:$):0),n.svg&&(Y=t.getAttribute("transform"),n.forceCSS=t.setAttribute("transform","")||!Jp(Wn(t,Le)),Y&&t.setAttribute("transform",Y))),Math.abs(S)>90&&Math.abs(S)<270&&(s?(d*=-1,S+=g<=0?180:-180,g+=g<=0?180:-180):(_*=-1,S+=S<=0?180:-180)),e=e||n.uncache,n.x=u-((n.xPercent=u&&(!e&&n.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-u)?-50:0)))?t.offsetWidth*n.xPercent/100:0)+a,n.y=h-((n.yPercent=h&&(!e&&n.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-h)?-50:0)))?t.offsetHeight*n.yPercent/100:0)+a,n.z=f+a,n.scaleX=Fe(d),n.scaleY=Fe(_),n.rotation=Fe(g)+o,n.rotationX=Fe(m)+o,n.rotationY=Fe(p)+o,n.skewX=S+o,n.skewY=E+o,n.transformPerspective=x+a,(n.zOrigin=parseFloat(c.split(" ")[2])||!e&&n.zOrigin||0)&&(i[Pn]=fl(c)),n.xOffset=n.yOffset=0,n.force3D=Xn.force3D,n.renderTransform=n.svg?iy:$p?Qp:ny,n.uncache=0,n},fl=function(t){return(t=t.split(" "))[0]+" "+t[1]},fc=function(t,e,n){var i=an(e);return Fe(parseFloat(e)+parseFloat(_r(t,"x",n+"px",i)))+i},ny=function(t,e){e.z="0px",e.rotationY=e.rotationX="0deg",e.force3D=0,Qp(t,e)},br="0deg",sa="0px",wr=") ",Qp=function(t,e){var n=e||this,i=n.xPercent,s=n.yPercent,a=n.x,o=n.y,l=n.z,c=n.rotation,u=n.rotationY,h=n.rotationX,f=n.skewX,d=n.skewY,_=n.scaleX,g=n.scaleY,m=n.transformPerspective,p=n.force3D,S=n.target,E=n.zOrigin,x="",C=p==="auto"&&t&&t!==1||p===!0;if(E&&(h!==br||u!==br)){var A=parseFloat(u)*Cs,b=Math.sin(A),R=Math.cos(A),M;A=parseFloat(h)*Cs,M=Math.cos(A),a=fc(S,a,b*M*-E),o=fc(S,o,-Math.sin(A)*-E),l=fc(S,l,R*M*-E+E)}m!==sa&&(x+="perspective("+m+wr),(i||s)&&(x+="translate("+i+"%, "+s+"%) "),(C||a!==sa||o!==sa||l!==sa)&&(x+=l!==sa||C?"translate3d("+a+", "+o+", "+l+") ":"translate("+a+", "+o+wr),c!==br&&(x+="rotate("+c+wr),u!==br&&(x+="rotateY("+u+wr),h!==br&&(x+="rotateX("+h+wr),(f!==br||d!==br)&&(x+="skew("+f+", "+d+wr),(_!==1||g!==1)&&(x+="scale("+_+", "+g+wr),S.style[Le]=x||"translate(0, 0)"},iy=function(t,e){var n=e||this,i=n.xPercent,s=n.yPercent,a=n.x,o=n.y,l=n.rotation,c=n.skewX,u=n.skewY,h=n.scaleX,f=n.scaleY,d=n.target,_=n.xOrigin,g=n.yOrigin,m=n.xOffset,p=n.yOffset,S=n.forceCSS,E=parseFloat(a),x=parseFloat(o),C,A,b,R,M;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=Cs,c*=Cs,C=Math.cos(l)*h,A=Math.sin(l)*h,b=Math.sin(l-c)*-f,R=Math.cos(l-c)*f,c&&(u*=Cs,M=Math.tan(c-u),M=Math.sqrt(1+M*M),b*=M,R*=M,u&&(M=Math.tan(u),M=Math.sqrt(1+M*M),C*=M,A*=M)),C=Fe(C),A=Fe(A),b=Fe(b),R=Fe(R)):(C=h,R=f,A=b=0),(E&&!~(a+"").indexOf("px")||x&&!~(o+"").indexOf("px"))&&(E=_r(d,"x",a,"px"),x=_r(d,"y",o,"px")),(_||g||m||p)&&(E=Fe(E+_-(_*C+g*b)+m),x=Fe(x+g-(_*A+g*R)+p)),(i||s)&&(M=d.getBBox(),E=Fe(E+i/100*M.width),x=Fe(x+s/100*M.height)),M="matrix("+C+","+A+","+b+","+R+","+E+","+x+")",d.setAttribute("transform",M),S&&(d.style[Le]=M)},ry=function(t,e,n,i,s){var a=360,o=Ke(s),l=parseFloat(s)*(o&&~s.indexOf("rad")?Rr:1),c=l-i,u=i+c+"deg",h,f;return o&&(h=s.split("_")[1],h==="short"&&(c%=a,c!==c%(a/2)&&(c+=c<0?a:-a)),h==="cw"&&c<0?c=(c+a*Wf)%a-~~(c/a)*a:h==="ccw"&&c>0&&(c=(c-a*Wf)%a-~~(c/a)*a)),t._pt=f=new Rn(t._pt,e,n,i,c,kS),f.e=u,f.u="deg",t._props.push(n),f},jf=function(t,e){for(var n in e)t[n]=e[n];return t},sy=function(t,e,n){var i=jf({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",a=n.style,o,l,c,u,h,f,d,_;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),a[Le]=e,o=Wa(n,1),mr(n,Le),n.setAttribute("transform",c)):(c=getComputedStyle(n)[Le],a[Le]=e,o=Wa(n,1),a[Le]=c);for(l in Wi)c=i[l],u=o[l],c!==u&&s.indexOf(l)<0&&(d=an(c),_=an(u),h=d!==_?_r(n,l,c,_):parseFloat(c),f=parseFloat(u),t._pt=new Rn(t._pt,o,l,h,f-h,wu),t._pt.u=_||0,t._props.push(l));jf(o,i)};Cn("padding,margin,Width,Radius",function(r,t){var e="Top",n="Right",i="Bottom",s="Left",a=(t<3?[e,n,i,s]:[e+s,e+n,i+n,i+s]).map(function(o){return t<2?r+o:"border"+o+r});hl[t>1?"border"+r:r]=function(o,l,c,u,h){var f,d;if(arguments.length<4)return f=a.map(function(_){return Ui(o,_,c)}),d=f.join(" "),d.split(f[0]).length===5?f[0]:d;f=(u+"").split(" "),d={},a.forEach(function(_,g){return d[_]=f[g]=f[g]||f[(g-1)/2|0]}),o.init(l,d,h)}});var tm={name:"css",register:Cu,targetTest:function(t){return t.style&&t.nodeType},init:function(t,e,n,i,s){var a=this._props,o=t.style,l=n.vars.startAt,c,u,h,f,d,_,g,m,p,S,E,x,C,A,b,R,M;_h||Cu(),this.styles=this.styles||qp(t),R=this.styles.props,this.tween=n;for(g in e)if(g!=="autoRound"&&(u=e[g],!(Bn[g]&&Fp(g,e,n,i,t,s)))){if(d=typeof u,_=hl[g],d==="function"&&(u=u.call(n,i,t,s),d=typeof u),d==="string"&&~u.indexOf("random(")&&(u=ka(u)),_)_(this,t,g,u,n)&&(b=1);else if(g.substr(0,2)==="--")c=(getComputedStyle(t).getPropertyValue(g)+"").trim(),u+="",hr.lastIndex=0,hr.test(c)||(m=an(c),p=an(u),p?m!==p&&(c=_r(t,g,c,p)+p):m&&(u+=m)),this.add(o,"setProperty",c,u,i,s,0,0,g),a.push(g),R.push(g,0,o[g]);else if(d!=="undefined"){if(l&&g in l?(c=typeof l[g]=="function"?l[g].call(n,i,t,s):l[g],Ke(c)&&~c.indexOf("random(")&&(c=ka(c)),an(c+"")||c==="auto"||(c+=Xn.units[g]||an(Ui(t,g))||""),(c+"").charAt(1)==="="&&(c=Ui(t,g))):c=Ui(t,g),f=parseFloat(c),S=d==="string"&&u.charAt(1)==="="&&u.substr(0,2),S&&(u=u.substr(2)),h=parseFloat(u),g in xi&&(g==="autoAlpha"&&(f===1&&Ui(t,"visibility")==="hidden"&&h&&(f=0),R.push("visibility",0,o.visibility),ar(this,o,"visibility",f?"inherit":"hidden",h?"inherit":"hidden",!h)),g!=="scale"&&g!=="transform"&&(g=xi[g],~g.indexOf(",")&&(g=g.split(",")[0]))),E=g in Wi,E){if(this.styles.save(g),M=u,d==="string"&&u.substring(0,6)==="var(--"){if(u=Wn(t,u.substring(4,u.indexOf(")"))),u.substring(0,5)==="calc("){var v=t.style.perspective;t.style.perspective=u,u=Wn(t,"perspective"),v?t.style.perspective=v:mr(t,"perspective")}h=parseFloat(u)}if(x||(C=t._gsap,C.renderTransform&&!e.parseTransform||Wa(t,e.parseTransform),A=e.smoothOrigin!==!1&&C.smooth,x=this._pt=new Rn(this._pt,o,Le,0,1,C.renderTransform,C,0,-1),x.dep=1),g==="scale")this._pt=new Rn(this._pt,C,"scaleY",C.scaleY,(S?ws(C.scaleY,S+h):h)-C.scaleY||0,wu),this._pt.u=0,a.push("scaleY",g),g+="X";else if(g==="transformOrigin"){R.push(Pn,0,o[Pn]),u=ty(u),C.svg?Ru(t,u,0,A,0,this):(p=parseFloat(u.split(" ")[2])||0,p!==C.zOrigin&&ar(this,C,"zOrigin",C.zOrigin,p),ar(this,o,g,fl(c),fl(u)));continue}else if(g==="svgOrigin"){Ru(t,u,1,A,0,this);continue}else if(g in jp){ry(this,C,g,f,S?ws(f,S+u):u);continue}else if(g==="smoothOrigin"){ar(this,C,"smooth",C.smooth,u);continue}else if(g==="force3D"){C[g]=u;continue}else if(g==="transform"){sy(this,u,t);continue}}else g in o||(g=Gs(g)||g);if(E||(h||h===0)&&(f||f===0)&&!zS.test(u)&&g in o)m=(c+"").substr((f+"").length),h||(h=0),p=an(u)||(g in Xn.units?Xn.units[g]:m),m!==p&&(f=_r(t,g,c,p)),this._pt=new Rn(this._pt,E?C:o,g,f,(S?ws(f,S+h):h)-f,!E&&(p==="px"||g==="zIndex")&&e.autoRound!==!1?GS:wu),this._pt.u=p||0,E&&M!==u?(this._pt.b=c,this._pt.e=M,this._pt.r=HS):m!==p&&p!=="%"&&(this._pt.b=c,this._pt.r=VS);else if(g in o)QS.call(this,t,g,c,S?S+u:u);else if(g in t)this.add(t,g,c||t[g],S?S+u:u,i,s);else if(g!=="parseTransform"){ah(g,u);continue}E||(g in o?R.push(g,0,o[g]):typeof t[g]=="function"?R.push(g,2,t[g]()):R.push(g,1,c||t[g])),a.push(g)}}b&&Hp(this)},render:function(t,e){if(e.tween._time||!gh())for(var n=e._pt;n;)n.r(t,n.d),n=n._next;else e.styles.revert()},get:Ui,aliases:xi,getSetter:function(t,e,n){var i=xi[e];return i&&i.indexOf(",")<0&&(e=i),e in Wi&&e!==Pn&&(t._gsap.x||Ui(t,"x"))?n&&Gf===n?e==="scale"?qS:YS:(Gf=n||{})&&(e==="scale"?$S:ZS):t.style&&!ih(t.style[e])?WS:~e.indexOf("-")?XS:ph(t,e)},core:{_removeProperty:mr,_getMatrix:xh}};Dn.utils.checkPrefix=Gs;Dn.core.getStyleSaver=qp;(function(r,t,e,n){var i=Cn(r+","+t+","+e,function(s){Wi[s]=1});Cn(t,function(s){Xn.units[s]="deg",jp[s]=1}),xi[i[13]]=r+","+t,Cn(n,function(s){var a=s.split(":");xi[a[1]]=i[a[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Cn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){Xn.units[r]="px"});Dn.registerPlugin(tm);var ir=Dn.registerPlugin(tm)||Dn;ir.core.Tween;function ay(r,t){for(var e=0;e<t.length;e++){var n=t[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(r,n.key,n)}}function oy(r,t,e){return t&&ay(r.prototype,t),r}/*!
 * Observer 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Je,Zo,Hn,or,lr,Rs,em,Pr,Ps,nm,Oi,oi,im,rm=function(){return Je||typeof window<"u"&&(Je=window.gsap)&&Je.registerPlugin&&Je},sm=1,ys=[],re=[],Si=[],Ta=Date.now,Pu=function(t,e){return e},ly=function(){var t=Ps.core,e=t.bridge||{},n=t._scrollers,i=t._proxies;n.push.apply(n,re),i.push.apply(i,Si),re=n,Si=i,Pu=function(a,o){return e[a](o)}},fr=function(t,e){return~Si.indexOf(t)&&Si[Si.indexOf(t)+1][e]},ba=function(t){return!!~nm.indexOf(t)},dn=function(t,e,n,i,s){return t.addEventListener(e,n,{passive:i!==!1,capture:!!s})},fn=function(t,e,n,i){return t.removeEventListener(e,n,!!i)},To="scrollLeft",bo="scrollTop",Du=function(){return Oi&&Oi.isPressed||re.cache++},dl=function(t,e){var n=function i(s){if(s||s===0){sm&&(Hn.history.scrollRestoration="manual");var a=Oi&&Oi.isPressed;s=i.v=Math.round(s)||(Oi&&Oi.iOS?1:0),t(s),i.cacheID=re.cache,a&&Pu("ss",s)}else(e||re.cache!==i.cacheID||Pu("ref"))&&(i.cacheID=re.cache,i.v=t());return i.v+i.offset};return n.offset=0,t&&n},xn={s:To,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:dl(function(r){return arguments.length?Hn.scrollTo(r,Ge.sc()):Hn.pageXOffset||or[To]||lr[To]||Rs[To]||0})},Ge={s:bo,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:xn,sc:dl(function(r){return arguments.length?Hn.scrollTo(xn.sc(),r):Hn.pageYOffset||or[bo]||lr[bo]||Rs[bo]||0})},En=function(t,e){return(e&&e._ctx&&e._ctx.selector||Je.utils.toArray)(t)[0]||(typeof t=="string"&&Je.config().nullTargetWarn!==!1?console.warn("Element not found:",t):null)},cy=function(t,e){for(var n=e.length;n--;)if(e[n]===t||e[n].contains(t))return!0;return!1},gr=function(t,e){var n=e.s,i=e.sc;ba(t)&&(t=or.scrollingElement||lr);var s=re.indexOf(t),a=i===Ge.sc?1:2;!~s&&(s=re.push(t)-1),re[s+a]||dn(t,"scroll",Du);var o=re[s+a],l=o||(re[s+a]=dl(fr(t,n),!0)||(ba(t)?i:dl(function(c){return arguments.length?t[n]=c:t[n]})));return l.target=t,o||(l.smooth=Je.getProperty(t,"scrollBehavior")==="smooth"),l},Lu=function(t,e,n){var i=t,s=t,a=Ta(),o=a,l=e||50,c=Math.max(500,l*3),u=function(_,g){var m=Ta();g||m-a>l?(s=i,i=_,o=a,a=m):n?i+=_:i=s+(_-s)/(m-o)*(a-o)},h=function(){s=i=n?0:i,o=a=0},f=function(_){var g=o,m=s,p=Ta();return(_||_===0)&&_!==i&&u(_),a===o||p-o>c?0:(i+(n?m:-m))/((n?p:a)-g)*1e3};return{update:u,reset:h,getVelocity:f}},aa=function(t,e){return e&&!t._gsapAllow&&t.cancelable!==!1&&t.preventDefault(),t.changedTouches?t.changedTouches[0]:t},Jf=function(t){var e=Math.max.apply(Math,t),n=Math.min.apply(Math,t);return Math.abs(e)>=Math.abs(n)?e:n},am=function(){Ps=Je.core.globals().ScrollTrigger,Ps&&Ps.core&&ly()},om=function(t){return Je=t||rm(),!Zo&&Je&&typeof document<"u"&&document.body&&(Hn=window,or=document,lr=or.documentElement,Rs=or.body,nm=[Hn,or,lr,Rs],Je.utils.clamp,im=Je.core.context||function(){},Pr="onpointerenter"in Rs?"pointer":"mouse",em=Oe.isTouch=Hn.matchMedia&&Hn.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in Hn||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,oi=Oe.eventTypes=("ontouchstart"in lr?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in lr?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return sm=0},500),Zo=1),Ps||am(),Zo};xn.op=Ge;re.cache=0;var Oe=(function(){function r(e){this.init(e)}var t=r.prototype;return t.init=function(n){Zo||om(Je)||console.warn("Please gsap.registerPlugin(Observer)"),Ps||am();var i=n.tolerance,s=n.dragMinimum,a=n.type,o=n.target,l=n.lineHeight,c=n.debounce,u=n.preventDefault,h=n.onStop,f=n.onStopDelay,d=n.ignore,_=n.wheelSpeed,g=n.event,m=n.onDragStart,p=n.onDragEnd,S=n.onDrag,E=n.onPress,x=n.onRelease,C=n.onRight,A=n.onLeft,b=n.onUp,R=n.onDown,M=n.onChangeX,v=n.onChangeY,D=n.onChange,P=n.onToggleX,I=n.onToggleY,V=n.onHover,q=n.onHoverEnd,H=n.onMove,Y=n.ignoreCheck,B=n.isNormalizer,et=n.onGestureStart,L=n.onGestureEnd,ot=n.onWheel,Ct=n.onEnable,Vt=n.onDisable,$=n.onClick,nt=n.scrollSpeed,_t=n.capture,it=n.allowClicks,yt=n.lockAxis,wt=n.onLockAxis;this.target=o=En(o)||lr,this.vars=n,d&&(d=Je.utils.toArray(d)),i=i||1e-9,s=s||0,_=_||1,nt=nt||1,a=a||"wheel,touch,pointer",c=c!==!1,l||(l=parseFloat(Hn.getComputedStyle(Rs).lineHeight)||22);var Ht,te,Nt,Lt,N,xe,Ot,k=this,bt=0,se=0,Pt=n.passive||!u&&n.passive!==!1,w=gr(o,xn),y=gr(o,Ge),W=w(),Q=y(),J=~a.indexOf("touch")&&!~a.indexOf("pointer")&&oi[0]==="pointerdown",K=ba(o),ft=o.ownerDocument||or,ct=[0,0,0],mt=[0,0,0],Xt=0,rt=function(){return Xt=Ta()},lt=function(At,Zt){return(k.event=At)&&d&&cy(At.target,d)||Zt&&J&&At.pointerType!=="touch"||Y&&Y(At,Zt)},It=function(){k._vx.reset(),k._vy.reset(),te.pause(),h&&h(k)},Ut=function(){var At=k.deltaX=Jf(ct),Zt=k.deltaY=Jf(mt),gt=Math.abs(At)>=i,Gt=Math.abs(Zt)>=i;D&&(gt||Gt)&&D(k,At,Zt,ct,mt),gt&&(C&&k.deltaX>0&&C(k),A&&k.deltaX<0&&A(k),M&&M(k),P&&k.deltaX<0!=bt<0&&P(k),bt=k.deltaX,ct[0]=ct[1]=ct[2]=0),Gt&&(R&&k.deltaY>0&&R(k),b&&k.deltaY<0&&b(k),v&&v(k),I&&k.deltaY<0!=se<0&&I(k),se=k.deltaY,mt[0]=mt[1]=mt[2]=0),(Lt||Nt)&&(H&&H(k),Nt&&(m&&Nt===1&&m(k),S&&S(k),Nt=0),Lt=!1),xe&&!(xe=!1)&&wt&&wt(k),N&&(ot(k),N=!1),Ht=0},Mt=function(At,Zt,gt){ct[gt]+=At,mt[gt]+=Zt,k._vx.update(At),k._vy.update(Zt),c?Ht||(Ht=requestAnimationFrame(Ut)):Ut()},$t=function(At,Zt){yt&&!Ot&&(k.axis=Ot=Math.abs(At)>Math.abs(Zt)?"x":"y",xe=!0),Ot!=="y"&&(ct[2]+=At,k._vx.update(At,!0)),Ot!=="x"&&(mt[2]+=Zt,k._vy.update(Zt,!0)),c?Ht||(Ht=requestAnimationFrame(Ut)):Ut()},Ft=function(At){if(!lt(At,1)){At=aa(At,u);var Zt=At.clientX,gt=At.clientY,Gt=Zt-k.x,Rt=gt-k.y,kt=k.isDragging;k.x=Zt,k.y=gt,(kt||(Gt||Rt)&&(Math.abs(k.startX-Zt)>=s||Math.abs(k.startY-gt)>=s))&&(Nt||(Nt=kt?2:1),kt||(k.isDragging=!0),$t(Gt,Rt))}},oe=k.onPress=function(xt){lt(xt,1)||xt&&xt.button||(k.axis=Ot=null,te.pause(),k.isPressed=!0,xt=aa(xt),bt=se=0,k.startX=k.x=xt.clientX,k.startY=k.y=xt.clientY,k._vx.reset(),k._vy.reset(),dn(B?o:ft,oi[1],Ft,Pt,!0),k.deltaX=k.deltaY=0,E&&E(k))},U=k.onRelease=function(xt){if(!lt(xt,1)){fn(B?o:ft,oi[1],Ft,!0);var At=!isNaN(k.y-k.startY),Zt=k.isDragging,gt=Zt&&(Math.abs(k.x-k.startX)>3||Math.abs(k.y-k.startY)>3),Gt=aa(xt);!gt&&At&&(k._vx.reset(),k._vy.reset(),u&&it&&Je.delayedCall(.08,function(){if(Ta()-Xt>300&&!xt.defaultPrevented){if(xt.target.click)xt.target.click();else if(ft.createEvent){var Rt=ft.createEvent("MouseEvents");Rt.initMouseEvent("click",!0,!0,Hn,1,Gt.screenX,Gt.screenY,Gt.clientX,Gt.clientY,!1,!1,!1,!1,0,null),xt.target.dispatchEvent(Rt)}}})),k.isDragging=k.isGesturing=k.isPressed=!1,h&&Zt&&!B&&te.restart(!0),Nt&&Ut(),p&&Zt&&p(k),x&&x(k,gt)}},ht=function(At){return At.touches&&At.touches.length>1&&(k.isGesturing=!0)&&et(At,k.isDragging)},Z=function(){return(k.isGesturing=!1)||L(k)},j=function(At){if(!lt(At)){var Zt=w(),gt=y();Mt((Zt-W)*nt,(gt-Q)*nt,1),W=Zt,Q=gt,h&&te.restart(!0)}},ut=function(At){if(!lt(At)){At=aa(At,u),ot&&(N=!0);var Zt=(At.deltaMode===1?l:At.deltaMode===2?Hn.innerHeight:1)*_;Mt(At.deltaX*Zt,At.deltaY*Zt,0),h&&!B&&te.restart(!0)}},dt=function(At){if(!lt(At)){var Zt=At.clientX,gt=At.clientY,Gt=Zt-k.x,Rt=gt-k.y;k.x=Zt,k.y=gt,Lt=!0,h&&te.restart(!0),(Gt||Rt)&&$t(Gt,Rt)}},Bt=function(At){k.event=At,V(k)},ce=function(At){k.event=At,q(k)},Ue=function(At){return lt(At)||aa(At,u)&&$(k)};te=k._dc=Je.delayedCall(f||.25,It).pause(),k.deltaX=k.deltaY=0,k._vx=Lu(0,50,!0),k._vy=Lu(0,50,!0),k.scrollX=w,k.scrollY=y,k.isDragging=k.isGesturing=k.isPressed=!1,im(this),k.enable=function(xt){return k.isEnabled||(dn(K?ft:o,"scroll",Du),a.indexOf("scroll")>=0&&dn(K?ft:o,"scroll",j,Pt,_t),a.indexOf("wheel")>=0&&dn(o,"wheel",ut,Pt,_t),(a.indexOf("touch")>=0&&em||a.indexOf("pointer")>=0)&&(dn(o,oi[0],oe,Pt,_t),dn(ft,oi[2],U),dn(ft,oi[3],U),it&&dn(o,"click",rt,!0,!0),$&&dn(o,"click",Ue),et&&dn(ft,"gesturestart",ht),L&&dn(ft,"gestureend",Z),V&&dn(o,Pr+"enter",Bt),q&&dn(o,Pr+"leave",ce),H&&dn(o,Pr+"move",dt)),k.isEnabled=!0,k.isDragging=k.isGesturing=k.isPressed=Lt=Nt=!1,k._vx.reset(),k._vy.reset(),W=w(),Q=y(),xt&&xt.type&&oe(xt),Ct&&Ct(k)),k},k.disable=function(){k.isEnabled&&(ys.filter(function(xt){return xt!==k&&ba(xt.target)}).length||fn(K?ft:o,"scroll",Du),k.isPressed&&(k._vx.reset(),k._vy.reset(),fn(B?o:ft,oi[1],Ft,!0)),fn(K?ft:o,"scroll",j,_t),fn(o,"wheel",ut,_t),fn(o,oi[0],oe,_t),fn(ft,oi[2],U),fn(ft,oi[3],U),fn(o,"click",rt,!0),fn(o,"click",Ue),fn(ft,"gesturestart",ht),fn(ft,"gestureend",Z),fn(o,Pr+"enter",Bt),fn(o,Pr+"leave",ce),fn(o,Pr+"move",dt),k.isEnabled=k.isPressed=k.isDragging=!1,Vt&&Vt(k))},k.kill=k.revert=function(){k.disable();var xt=ys.indexOf(k);xt>=0&&ys.splice(xt,1),Oi===k&&(Oi=0)},ys.push(k),B&&ba(o)&&(Oi=k),k.enable(g)},oy(r,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),r})();Oe.version="3.15.0";Oe.create=function(r){return new Oe(r)};Oe.register=om;Oe.getAll=function(){return ys.slice()};Oe.getById=function(r){return ys.filter(function(t){return t.vars.id===r})[0]};rm()&&Je.registerPlugin(Oe);/*!
 * ScrollTrigger 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Et,gs,ie,_e,kn,me,Mh,pl,Xa,wa,ma,wo,rn,bl,Uu,_n,Qf,td,vs,lm,dc,cm,mn,Iu,um,hm,tr,Nu,Sh,Ds,yh,Aa,Fu,pc,Ao=1,sn=Date.now,mc=sn(),ni=0,_a=0,ed=function(t,e,n){var i=On(t)&&(t.substr(0,6)==="clamp("||t.indexOf("max")>-1);return n["_"+e+"Clamp"]=i,i?t.substr(6,t.length-7):t},nd=function(t,e){return e&&(!On(t)||t.substr(0,6)!=="clamp(")?"clamp("+t+")":t},uy=function r(){return _a&&requestAnimationFrame(r)},id=function(){return bl=1},rd=function(){return bl=0},mi=function(t){return t},ga=function(t){return Math.round(t*1e5)/1e5||0},fm=function(){return typeof window<"u"},dm=function(){return Et||fm()&&(Et=window.gsap)&&Et.registerPlugin&&Et},Yr=function(t){return!!~Mh.indexOf(t)},pm=function(t){return(t==="Height"?yh:ie["inner"+t])||kn["client"+t]||me["client"+t]},mm=function(t){return fr(t,"getBoundingClientRect")||(Yr(t)?function(){return tl.width=ie.innerWidth,tl.height=yh,tl}:function(){return Ii(t)})},hy=function(t,e,n){var i=n.d,s=n.d2,a=n.a;return(a=fr(t,"getBoundingClientRect"))?function(){return a()[i]}:function(){return(e?pm(s):t["client"+s])||0}},fy=function(t,e){return!e||~Si.indexOf(t)?mm(t):function(){return tl}},Mi=function(t,e){var n=e.s,i=e.d2,s=e.d,a=e.a;return Math.max(0,(n="scroll"+i)&&(a=fr(t,n))?a()-mm(t)()[s]:Yr(t)?(kn[n]||me[n])-pm(i):t[n]-t["offset"+i])},Co=function(t,e){for(var n=0;n<vs.length;n+=3)(!e||~e.indexOf(vs[n+1]))&&t(vs[n],vs[n+1],vs[n+2])},On=function(t){return typeof t=="string"},on=function(t){return typeof t=="function"},va=function(t){return typeof t=="number"},Dr=function(t){return typeof t=="object"},oa=function(t,e,n){return t&&t.progress(e?0:1)&&n&&t.pause()},ds=function(t,e,n){if(t.enabled){var i=t._ctx?t._ctx.add(function(){return e(t,n)}):e(t,n);i&&i.totalTime&&(t.callbackAnimation=i)}},ps=Math.abs,_m="left",gm="top",Eh="right",Th="bottom",Hr="width",Gr="height",Ca="Right",Ra="Left",Pa="Top",Da="Bottom",ze="padding",Jn="margin",Ws="Width",bh="Height",He="px",Qn=function(t){return ie.getComputedStyle(t.nodeType===Node.DOCUMENT_NODE?t.scrollingElement:t)},dy=function(t){var e=Qn(t).position;t.style.position=e==="absolute"||e==="fixed"?e:"relative"},sd=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},Ii=function(t,e){var n=e&&Qn(t)[Uu]!=="matrix(1, 0, 0, 1, 0, 0)"&&Et.to(t,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),i=t.getBoundingClientRect?t.getBoundingClientRect():t.scrollingElement.getBoundingClientRect();return n&&n.progress(0).kill(),i},ml=function(t,e){var n=e.d2;return t["offset"+n]||t["client"+n]||0},vm=function(t){var e=[],n=t.labels,i=t.duration(),s;for(s in n)e.push(n[s]/i);return e},py=function(t){return function(e){return Et.utils.snap(vm(t),e)}},wh=function(t){var e=Et.utils.snap(t),n=Array.isArray(t)&&t.slice(0).sort(function(i,s){return i-s});return n?function(i,s,a){a===void 0&&(a=.001);var o;if(!s)return e(i);if(s>0){for(i-=a,o=0;o<n.length;o++)if(n[o]>=i)return n[o];return n[o-1]}else for(o=n.length,i+=a;o--;)if(n[o]<=i)return n[o];return n[0]}:function(i,s,a){a===void 0&&(a=.001);var o=e(i);return!s||Math.abs(o-i)<a||o-i<0==s<0?o:e(s<0?i-t:i+t)}},my=function(t){return function(e,n){return wh(vm(t))(e,n.direction)}},Ro=function(t,e,n,i){return n.split(",").forEach(function(s){return t(e,s,i)})},$e=function(t,e,n,i,s){return t.addEventListener(e,n,{passive:!i,capture:!!s})},qe=function(t,e,n,i){return t.removeEventListener(e,n,!!i)},Po=function(t,e,n){n=n&&n.wheelHandler,n&&(t(e,"wheel",n),t(e,"touchmove",n))},ad={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},Do={toggleActions:"play",anticipatePin:0},_l={top:0,left:0,center:.5,bottom:1,right:1},Ko=function(t,e){if(On(t)){var n=t.indexOf("="),i=~n?+(t.charAt(n-1)+1)*parseFloat(t.substr(n+1)):0;~n&&(t.indexOf("%")>n&&(i*=e/100),t=t.substr(0,n-1)),t=i+(t in _l?_l[t]*e:~t.indexOf("%")?parseFloat(t)*e/100:parseFloat(t)||0)}return t},Lo=function(t,e,n,i,s,a,o,l){var c=s.startColor,u=s.endColor,h=s.fontSize,f=s.indent,d=s.fontWeight,_=_e.createElement("div"),g=Yr(n)||fr(n,"pinType")==="fixed",m=t.indexOf("scroller")!==-1,p=g?me:n.tagName==="IFRAME"?n.contentDocument.body:n,S=t.indexOf("start")!==-1,E=S?c:u,x="border-color:"+E+";font-size:"+h+";color:"+E+";font-weight:"+d+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return x+="position:"+((m||l)&&g?"fixed;":"absolute;"),(m||l||!g)&&(x+=(i===Ge?Eh:Th)+":"+(a+parseFloat(f))+"px;"),o&&(x+="box-sizing:border-box;text-align:left;width:"+o.offsetWidth+"px;"),_._isStart=S,_.setAttribute("class","gsap-marker-"+t+(e?" marker-"+e:"")),_.style.cssText=x,_.innerText=e||e===0?t+"-"+e:t,p.children[0]?p.insertBefore(_,p.children[0]):p.appendChild(_),_._offset=_["offset"+i.op.d2],jo(_,0,i,S),_},jo=function(t,e,n,i){var s={display:"block"},a=n[i?"os2":"p2"],o=n[i?"p2":"os2"];t._isFlipped=i,s[n.a+"Percent"]=i?-100:0,s[n.a]=i?"1px":0,s["border"+a+Ws]=1,s["border"+o+Ws]=0,s[n.p]=e+"px",Et.set(t,s)},ee=[],Ou={},Ya,od=function(){return sn()-ni>34&&(Ya||(Ya=requestAnimationFrame(Vi)))},ms=function(){(!mn||!mn.isPressed||mn.startX>me.clientWidth)&&(re.cache++,mn?Ya||(Ya=requestAnimationFrame(Vi)):Vi(),ni||$r("scrollStart"),ni=sn())},_c=function(){hm=ie.innerWidth,um=ie.innerHeight},xa=function(t){re.cache++,(t===!0||!rn&&!cm&&!_e.fullscreenElement&&!_e.webkitFullscreenElement&&(!Iu||hm!==ie.innerWidth||Math.abs(ie.innerHeight-um)>ie.innerHeight*.25))&&pl.restart(!0)},qr={},_y=[],xm=function r(){return qe(Jt,"scrollEnd",r)||Or(!0)},$r=function(t){return qr[t]&&qr[t].map(function(e){return e()})||_y},Fn=[],Mm=function(t){for(var e=0;e<Fn.length;e+=5)(!t||Fn[e+4]&&Fn[e+4].query===t)&&(Fn[e].style.cssText=Fn[e+1],Fn[e].getBBox&&Fn[e].setAttribute("transform",Fn[e+2]||""),Fn[e+3].uncache=1)},Sm=function(){return re.forEach(function(t){return on(t)&&++t.cacheID&&(t.rec=t())})},Ah=function(t,e){var n;for(_n=0;_n<ee.length;_n++)n=ee[_n],n&&(!e||n._ctx===e)&&(t?n.kill(1):n.revert(!0,!0));Aa=!0,e&&Mm(e),e||$r("revert")},ym=function(t,e){re.cache++,(e||!gn)&&re.forEach(function(n){return on(n)&&n.cacheID++&&(n.rec=0)}),On(t)&&(ie.history.scrollRestoration=Sh=t)},gn,Wr=0,ld,gy=function(){if(ld!==Wr){var t=ld=Wr;requestAnimationFrame(function(){return t===Wr&&Or(!0)})}},Em=function(){me.appendChild(Ds),yh=!mn&&Ds.offsetHeight||ie.innerHeight,me.removeChild(Ds)},cd=function(t){return Xa(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(e){return e.style.display=t?"none":"block"})},Or=function(t,e){if(kn=_e.documentElement,me=_e.body,Mh=[ie,_e,kn,me],ni&&!t&&!Aa){$e(Jt,"scrollEnd",xm);return}Em(),gn=Jt.isRefreshing=!0,Aa||Sm();var n=$r("refreshInit");lm&&Jt.sort(),e||Ah(),re.forEach(function(i){on(i)&&(i.smooth&&(i.target.style.scrollBehavior="auto"),i(0))}),ee.slice(0).forEach(function(i){return i.refresh()}),Aa=!1,ee.forEach(function(i){if(i._subPinOffset&&i.pin){var s=i.vars.horizontal?"offsetWidth":"offsetHeight",a=i.pin[s];i.revert(!0,1),i.adjustPinSpacing(i.pin[s]-a),i.refresh()}}),Fu=1,cd(!0),ee.forEach(function(i){var s=Mi(i.scroller,i._dir),a=i.vars.end==="max"||i._endClamp&&i.end>s,o=i._startClamp&&i.start>=s;(a||o)&&i.setPositions(o?s-1:i.start,a?Math.max(o?s:i.start+1,s):i.end,!0)}),cd(!1),Fu=0,n.forEach(function(i){return i&&i.render&&i.render(-1)}),re.forEach(function(i){on(i)&&(i.smooth&&requestAnimationFrame(function(){return i.target.style.scrollBehavior="smooth"}),i.rec&&i(i.rec))}),ym(Sh,1),pl.pause(),Wr++,gn=2,Vi(2),ee.forEach(function(i){return on(i.vars.onRefresh)&&i.vars.onRefresh(i)}),gn=Jt.isRefreshing=!1,$r("refresh")},Bu=0,Jo=1,La,Vi=function(t){if(t===2||!gn&&!Aa){Jt.isUpdating=!0,La&&La.update(0);var e=ee.length,n=sn(),i=n-mc>=50,s=e&&ee[0].scroll();if(Jo=Bu>s?-1:1,gn||(Bu=s),i&&(ni&&!bl&&n-ni>200&&(ni=0,$r("scrollEnd")),ma=mc,mc=n),Jo<0){for(_n=e;_n-- >0;)ee[_n]&&ee[_n].update(0,i);Jo=1}else for(_n=0;_n<e;_n++)ee[_n]&&ee[_n].update(0,i);Jt.isUpdating=!1}Ya=0},zu=[_m,gm,Th,Eh,Jn+Da,Jn+Ca,Jn+Pa,Jn+Ra,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],Qo=zu.concat([Hr,Gr,"boxSizing","max"+Ws,"max"+bh,"position",Jn,ze,ze+Pa,ze+Ca,ze+Da,ze+Ra]),vy=function(t,e,n){Ls(n);var i=t._gsap;if(i.spacerIsNative)Ls(i.spacerState);else if(t._gsap.swappedIn){var s=e.parentNode;s&&(s.insertBefore(t,e),s.removeChild(e))}t._gsap.swappedIn=!1},gc=function(t,e,n,i){if(!t._gsap.swappedIn){for(var s=zu.length,a=e.style,o=t.style,l;s--;)l=zu[s],a[l]=n[l];a.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(a.display="inline-block"),o[Th]=o[Eh]="auto",a.flexBasis=n.flexBasis||"auto",a.overflow="visible",a.boxSizing="border-box",a[Hr]=ml(t,xn)+He,a[Gr]=ml(t,Ge)+He,a[ze]=o[Jn]=o[gm]=o[_m]="0",Ls(i),o[Hr]=o["max"+Ws]=n[Hr],o[Gr]=o["max"+bh]=n[Gr],o[ze]=n[ze],t.parentNode!==e&&(t.parentNode.insertBefore(e,t),e.appendChild(t)),t._gsap.swappedIn=!0}},xy=/([A-Z])/g,Ls=function(t){if(t){var e=t.t.style,n=t.length,i=0,s,a;for((t.t._gsap||Et.core.getCache(t.t)).uncache=1;i<n;i+=2)a=t[i+1],s=t[i],a?e[s]=a:e[s]&&e.removeProperty(s.replace(xy,"-$1").toLowerCase())}},Uo=function(t){for(var e=Qo.length,n=t.style,i=[],s=0;s<e;s++)i.push(Qo[s],n[Qo[s]]);return i.t=t,i},My=function(t,e,n){for(var i=[],s=t.length,a=n?8:0,o;a<s;a+=2)o=t[a],i.push(o,o in e?e[o]:t[a+1]);return i.t=t.t,i},tl={left:0,top:0},ud=function(t,e,n,i,s,a,o,l,c,u,h,f,d,_){on(t)&&(t=t(l)),On(t)&&t.substr(0,3)==="max"&&(t=f+(t.charAt(4)==="="?Ko("0"+t.substr(3),n):0));var g=d?d.time():0,m,p,S;if(d&&d.seek(0),isNaN(t)||(t=+t),va(t))d&&(t=Et.utils.mapRange(d.scrollTrigger.start,d.scrollTrigger.end,0,f,t)),o&&jo(o,n,i,!0);else{on(e)&&(e=e(l));var E=(t||"0").split(" "),x,C,A,b;S=En(e,l)||me,x=Ii(S)||{},(!x||!x.left&&!x.top)&&Qn(S).display==="none"&&(b=S.style.display,S.style.display="block",x=Ii(S),b?S.style.display=b:S.style.removeProperty("display")),C=Ko(E[0],x[i.d]),A=Ko(E[1]||"0",n),t=x[i.p]-c[i.p]-u+C+s-A,o&&jo(o,A,i,n-A<20||o._isStart&&A>20),n-=n-A}if(_&&(l[_]=t||-.001,t<0&&(t=0)),a){var R=t+n,M=a._isStart;m="scroll"+i.d2,jo(a,R,i,M&&R>20||!M&&(h?Math.max(me[m],kn[m]):a.parentNode[m])<=R+1),h&&(c=Ii(o),h&&(a.style[i.op.p]=c[i.op.p]-i.op.m-a._offset+He))}return d&&S&&(m=Ii(S),d.seek(f),p=Ii(S),d._caScrollDist=m[i.p]-p[i.p],t=t/d._caScrollDist*f),d&&d.seek(g),d?t:Math.round(t)},Sy=/(webkit|moz|length|cssText|inset)/i,hd=function(t,e,n,i){if(t.parentNode!==e){var s=t.style,a,o;if(e===me){t._stOrig=s.cssText,o=Qn(t);for(a in o)!+a&&!Sy.test(a)&&o[a]&&typeof s[a]=="string"&&a!=="0"&&(s[a]=o[a]);s.top=n,s.left=i}else s.cssText=t._stOrig;Et.core.getCache(t).uncache=1,e.appendChild(t)}},Tm=function(t,e,n){var i=e,s=i;return function(a){var o=Math.round(t());return o!==i&&o!==s&&Math.abs(o-i)>3&&Math.abs(o-s)>3&&(a=o,n&&n()),s=i,i=Math.round(a),i}},Io=function(t,e,n){var i={};i[e.p]="+="+n,Et.set(t,i)},fd=function(t,e){var n=gr(t,e),i="_scroll"+e.p2,s=function a(o,l,c,u,h){var f=a.tween,d=l.onComplete,_={};c=c||n();var g=Tm(n,c,function(){f.kill(),a.tween=0});return h=u&&h||0,u=u||o-c,f&&f.kill(),l[i]=o,l.inherit=!1,l.modifiers=_,_[i]=function(){return g(c+u*f.ratio+h*f.ratio*f.ratio)},l.onUpdate=function(){re.cache++,a.tween&&Vi()},l.onComplete=function(){a.tween=0,d&&d.call(f)},f=a.tween=Et.to(t,l),f};return t[i]=n,n.wheelHandler=function(){return s.tween&&s.tween.kill()&&(s.tween=0)},$e(t,"wheel",n.wheelHandler),Jt.isTouch&&$e(t,"touchmove",n.wheelHandler),s},Jt=(function(){function r(e,n){gs||r.register(Et)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),Nu(this),this.init(e,n)}var t=r.prototype;return t.init=function(n,i){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!_a){this.update=this.refresh=this.kill=mi;return}n=sd(On(n)||va(n)||n.nodeType?{trigger:n}:n,Do);var s=n,a=s.onUpdate,o=s.toggleClass,l=s.id,c=s.onToggle,u=s.onRefresh,h=s.scrub,f=s.trigger,d=s.pin,_=s.pinSpacing,g=s.invalidateOnRefresh,m=s.anticipatePin,p=s.onScrubComplete,S=s.onSnapComplete,E=s.once,x=s.snap,C=s.pinReparent,A=s.pinSpacer,b=s.containerAnimation,R=s.fastScrollEnd,M=s.preventOverlaps,v=n.horizontal||n.containerAnimation&&n.horizontal!==!1?xn:Ge,D=!h&&h!==0,P=En(n.scroller||ie),I=Et.core.getCache(P),V=Yr(P),q=("pinType"in n?n.pinType:fr(P,"pinType")||V&&"fixed")==="fixed",H=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],Y=D&&n.toggleActions.split(" "),B="markers"in n?n.markers:Do.markers,et=V?0:parseFloat(Qn(P)["border"+v.p2+Ws])||0,L=this,ot=n.onRefreshInit&&function(){return n.onRefreshInit(L)},Ct=hy(P,V,v),Vt=fy(P,V),$=0,nt=0,_t=0,it=gr(P,v),yt,wt,Ht,te,Nt,Lt,N,xe,Ot,k,bt,se,Pt,w,y,W,Q,J,K,ft,ct,mt,Xt,rt,lt,It,Ut,Mt,$t,Ft,oe,U,ht,Z,j,ut,dt,Bt,ce;if(L._startClamp=L._endClamp=!1,L._dir=v,m*=45,L.scroller=P,L.scroll=b?b.time.bind(b):it,te=it(),L.vars=n,i=i||n.animation,"refreshPriority"in n&&(lm=1,n.refreshPriority===-9999&&(La=L)),I.tweenScroll=I.tweenScroll||{top:fd(P,Ge),left:fd(P,xn)},L.tweenTo=yt=I.tweenScroll[v.p],L.scrubDuration=function(gt){ht=va(gt)&&gt,ht?U?U.duration(gt):U=Et.to(i,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:ht,paused:!0,onComplete:function(){return p&&p(L)}}):(U&&U.progress(1).kill(),U=0)},i&&(i.vars.lazy=!1,i._initted&&!L.isReverted||i.vars.immediateRender!==!1&&n.immediateRender!==!1&&i.duration()&&i.render(0,!0,!0),L.animation=i.pause(),i.scrollTrigger=L,L.scrubDuration(h),Ft=0,l||(l=i.vars.id)),x&&((!Dr(x)||x.push)&&(x={snapTo:x}),"scrollBehavior"in me.style&&Et.set(V?[me,kn]:P,{scrollBehavior:"auto"}),re.forEach(function(gt){return on(gt)&&gt.target===(V?_e.scrollingElement||kn:P)&&(gt.smooth=!1)}),Ht=on(x.snapTo)?x.snapTo:x.snapTo==="labels"?py(i):x.snapTo==="labelsDirectional"?my(i):x.directional!==!1?function(gt,Gt){return wh(x.snapTo)(gt,sn()-nt<500?0:Gt.direction)}:Et.utils.snap(x.snapTo),Z=x.duration||{min:.1,max:2},Z=Dr(Z)?wa(Z.min,Z.max):wa(Z,Z),j=Et.delayedCall(x.delay||ht/2||.1,function(){var gt=it(),Gt=sn()-nt<500,Rt=yt.tween;if((Gt||Math.abs(L.getVelocity())<10)&&!Rt&&!bl&&$!==gt){var kt=(gt-Lt)/w,Ne=i&&!D?i.totalProgress():kt,ne=Gt?0:(Ne-oe)/(sn()-ma)*1e3||0,Te=Et.utils.clamp(-kt,1-kt,ps(ne/2)*ne/.185),Ve=kt+(x.inertia===!1?0:Te),Me,Se,he=x,Ln=he.onStart,be=he.onInterrupt,hn=he.onComplete;if(Me=Ht(Ve,L),va(Me)||(Me=Ve),Se=Math.max(0,Math.round(Lt+Me*w)),gt<=N&&gt>=Lt&&Se!==gt){if(Rt&&!Rt._initted&&Rt.data<=ps(Se-gt))return;x.inertia===!1&&(Te=Me-kt),yt(Se,{duration:Z(ps(Math.max(ps(Ve-Ne),ps(Me-Ne))*.185/ne/.05||0)),ease:x.ease||"power3",data:ps(Se-gt),onInterrupt:function(){return j.restart(!0)&&be&&ds(L,be)},onComplete:function(){L.update(),$=it(),i&&!D&&(U?U.resetTo("totalProgress",Me,i._tTime/i._tDur):i.progress(Me)),Ft=oe=i&&!D?i.totalProgress():L.progress,S&&S(L),hn&&ds(L,hn)}},gt,Te*w,Se-gt-Te*w),Ln&&ds(L,Ln,yt.tween)}}else L.isActive&&$!==gt&&j.restart(!0)}).pause()),l&&(Ou[l]=L),f=L.trigger=En(f||d!==!0&&d),ce=f&&f._gsap&&f._gsap.stRevert,ce&&(ce=ce(L)),d=d===!0?f:En(d),On(o)&&(o={targets:f,className:o}),d&&(_===!1||_===Jn||(_=!_&&d.parentNode&&d.parentNode.style&&Qn(d.parentNode).display==="flex"?!1:ze),L.pin=d,wt=Et.core.getCache(d),wt.spacer?y=wt.pinState:(A&&(A=En(A),A&&!A.nodeType&&(A=A.current||A.nativeElement),wt.spacerIsNative=!!A,A&&(wt.spacerState=Uo(A))),wt.spacer=J=A||_e.createElement("div"),J.classList.add("pin-spacer"),l&&J.classList.add("pin-spacer-"+l),wt.pinState=y=Uo(d)),n.force3D!==!1&&Et.set(d,{force3D:!0}),L.spacer=J=wt.spacer,$t=Qn(d),rt=$t[_+v.os2],ft=Et.getProperty(d),ct=Et.quickSetter(d,v.a,He),gc(d,J,$t),Q=Uo(d)),B){se=Dr(B)?sd(B,ad):ad,k=Lo("scroller-start",l,P,v,se,0),bt=Lo("scroller-end",l,P,v,se,0,k),K=k["offset"+v.op.d2];var Ue=En(fr(P,"content")||P);xe=this.markerStart=Lo("start",l,Ue,v,se,K,0,b),Ot=this.markerEnd=Lo("end",l,Ue,v,se,K,0,b),b&&(Bt=Et.quickSetter([xe,Ot],v.a,He)),!q&&!(Si.length&&fr(P,"fixedMarkers")===!0)&&(dy(V?me:P),Et.set([k,bt],{force3D:!0}),It=Et.quickSetter(k,v.a,He),Mt=Et.quickSetter(bt,v.a,He))}if(b){var xt=b.vars.onUpdate,At=b.vars.onUpdateParams;b.eventCallback("onUpdate",function(){L.update(0,0,1),xt&&xt.apply(b,At||[])})}if(L.previous=function(){return ee[ee.indexOf(L)-1]},L.next=function(){return ee[ee.indexOf(L)+1]},L.revert=function(gt,Gt){if(!Gt)return L.kill(!0);var Rt=gt!==!1||!L.enabled,kt=rn;Rt!==L.isReverted&&(Rt&&(ut=Math.max(it(),L.scroll.rec||0),_t=L.progress,dt=i&&i.progress()),xe&&[xe,Ot,k,bt].forEach(function(Ne){return Ne.style.display=Rt?"none":"block"}),Rt&&(rn=L,L.update(Rt)),d&&(!C||!L.isActive)&&(Rt?vy(d,J,y):gc(d,J,Qn(d),lt)),Rt||L.update(Rt),rn=kt,L.isReverted=Rt)},L.refresh=function(gt,Gt,Rt,kt){if(!((rn||!L.enabled)&&!Gt)){if(d&&gt&&ni){$e(r,"scrollEnd",xm);return}!gn&&ot&&ot(L),rn=L,yt.tween&&!Rt&&(yt.tween.kill(),yt.tween=0),U&&U.pause(),g&&i&&(i.revert({kill:!1}).invalidate(),i.getChildren?i.getChildren(!0,!0,!1).forEach(function(Re){return Re.vars.immediateRender&&Re.render(0,!0,!0)}):i.vars.immediateRender&&i.render(0,!0,!0)),L.isReverted||L.revert(!0,!0),L._subPinOffset=!1;var Ne=Ct(),ne=Vt(),Te=b?b.duration():Mi(P,v),Ve=w<=.01||!w,Me=0,Se=kt||0,he=Dr(Rt)?Rt.end:n.end,Ln=n.endTrigger||f,be=Dr(Rt)?Rt.start:n.start||(n.start===0||!f?0:d?"0 0":"0 100%"),hn=L.pinnedContainer=n.pinnedContainer&&En(n.pinnedContainer,L),T=f&&Math.max(0,ee.indexOf(L))||0,F=T,G,X,O,st,at,pt,St,zt,Wt,Tt,Yt,ue,fe;for(B&&Dr(Rt)&&(ue=Et.getProperty(k,v.p),fe=Et.getProperty(bt,v.p));F-- >0;)pt=ee[F],pt.end||pt.refresh(0,1)||(rn=L),St=pt.pin,St&&(St===f||St===d||St===hn)&&!pt.isReverted&&(Tt||(Tt=[]),Tt.unshift(pt),pt.revert(!0,!0)),pt!==ee[F]&&(T--,F--);for(on(be)&&(be=be(L)),be=ed(be,"start",L),Lt=ud(be,f,Ne,v,it(),xe,k,L,ne,et,q,Te,b,L._startClamp&&"_startClamp")||(d?-.001:0),on(he)&&(he=he(L)),On(he)&&!he.indexOf("+=")&&(~he.indexOf(" ")?he=(On(be)?be.split(" ")[0]:"")+he:(Me=Ko(he.substr(2),Ne),he=On(be)?be:(b?Et.utils.mapRange(0,b.duration(),b.scrollTrigger.start,b.scrollTrigger.end,Lt):Lt)+Me,Ln=f)),he=ed(he,"end",L),N=Math.max(Lt,ud(he||(Ln?"100% 0":Te),Ln,Ne,v,it()+Me,Ot,bt,L,ne,et,q,Te,b,L._endClamp&&"_endClamp"))||-.001,Me=0,F=T;F--;)pt=ee[F]||{},St=pt.pin,St&&pt.start-pt._pinPush<=Lt&&!b&&pt.end>0&&(G=pt.end-(L._startClamp?Math.max(0,pt.start):pt.start),(St===f&&pt.start-pt._pinPush<Lt||St===hn)&&isNaN(be)&&(Me+=G*(1-pt.progress)),St===d&&(Se+=G));if(Lt+=Me,N+=Me,L._startClamp&&(L._startClamp+=Me),L._endClamp&&!gn&&(L._endClamp=N||-.001,N=Math.min(N,Mi(P,v))),w=N-Lt||(Lt-=.01)&&.001,Ve&&(_t=Et.utils.clamp(0,1,Et.utils.normalize(Lt,N,ut))),L._pinPush=Se,xe&&Me&&(G={},G[v.a]="+="+Me,hn&&(G[v.p]="-="+it()),Et.set([xe,Ot],G)),d&&!(Fu&&L.end>=Mi(P,v)))G=Qn(d),st=v===Ge,O=it(),mt=parseFloat(ft(v.a))+Se,!Te&&N>1&&(Yt=(V?_e.scrollingElement||kn:P).style,Yt={style:Yt,value:Yt["overflow"+v.a.toUpperCase()]},V&&Qn(me)["overflow"+v.a.toUpperCase()]!=="scroll"&&(Yt.style["overflow"+v.a.toUpperCase()]="scroll")),gc(d,J,G),Q=Uo(d),X=Ii(d,!0),zt=q&&gr(P,st?xn:Ge)(),_?(lt=[_+v.os2,w+Se+He],lt.t=J,F=_===ze?ml(d,v)+w+Se:0,F&&(lt.push(v.d,F+He),J.style.flexBasis!=="auto"&&(J.style.flexBasis=F+He)),Ls(lt),hn&&ee.forEach(function(Re){Re.pin===hn&&Re.vars.pinSpacing!==!1&&(Re._subPinOffset=!0)}),q&&it(ut)):(F=ml(d,v),F&&J.style.flexBasis!=="auto"&&(J.style.flexBasis=F+He)),q&&(at={top:X.top+(st?O-Lt:zt)+He,left:X.left+(st?zt:O-Lt)+He,boxSizing:"border-box",position:"fixed"},at[Hr]=at["max"+Ws]=Math.ceil(X.width)+He,at[Gr]=at["max"+bh]=Math.ceil(X.height)+He,at[Jn]=at[Jn+Pa]=at[Jn+Ca]=at[Jn+Da]=at[Jn+Ra]="0",at[ze]=G[ze],at[ze+Pa]=G[ze+Pa],at[ze+Ca]=G[ze+Ca],at[ze+Da]=G[ze+Da],at[ze+Ra]=G[ze+Ra],W=My(y,at,C),gn&&it(0)),i?(Wt=i._initted,dc(1),i.render(i.duration(),!0,!0),Xt=ft(v.a)-mt+w+Se,Ut=Math.abs(w-Xt)>1,q&&Ut&&W.splice(W.length-2,2),i.render(0,!0,!0),Wt||i.invalidate(!0),i.parent||i.totalTime(i.totalTime()),dc(0)):Xt=w,Yt&&(Yt.value?Yt.style["overflow"+v.a.toUpperCase()]=Yt.value:Yt.style.removeProperty("overflow-"+v.a));else if(f&&it()&&!b)for(X=f.parentNode;X&&X!==me;)X._pinOffset&&(Lt-=X._pinOffset,N-=X._pinOffset),X=X.parentNode;Tt&&Tt.forEach(function(Re){return Re.revert(!1,!0)}),L.start=Lt,L.end=N,te=Nt=gn?ut:it(),!b&&!gn&&(te<ut&&it(ut),L.scroll.rec=0),L.revert(!1,!0),nt=sn(),j&&($=-1,j.restart(!0)),rn=0,i&&D&&(i._initted||dt)&&i.progress()!==dt&&i.progress(dt||0,!0).render(i.time(),!0,!0),(Ve||_t!==L.progress||b||g||i&&!i._initted)&&(i&&!D&&(i._initted||_t||i.vars.immediateRender!==!1)&&i.totalProgress(b&&Lt<-.001&&!_t?Et.utils.normalize(Lt,N,0):_t,!0),L.progress=Ve||(te-Lt)/w===_t?0:_t),d&&_&&(J._pinOffset=Math.round(L.progress*Xt)),U&&U.invalidate(),isNaN(ue)||(ue-=Et.getProperty(k,v.p),fe-=Et.getProperty(bt,v.p),Io(k,v,ue),Io(xe,v,ue-(kt||0)),Io(bt,v,fe),Io(Ot,v,fe-(kt||0))),Ve&&!gn&&L.update(),u&&!gn&&!Pt&&(Pt=!0,u(L),Pt=!1)}},L.getVelocity=function(){return(it()-Nt)/(sn()-ma)*1e3||0},L.endAnimation=function(){oa(L.callbackAnimation),i&&(U?U.progress(1):i.paused()?D||oa(i,L.direction<0,1):oa(i,i.reversed()))},L.labelToScroll=function(gt){return i&&i.labels&&(Lt||L.refresh()||Lt)+i.labels[gt]/i.duration()*w||0},L.getTrailing=function(gt){var Gt=ee.indexOf(L),Rt=L.direction>0?ee.slice(0,Gt).reverse():ee.slice(Gt+1);return(On(gt)?Rt.filter(function(kt){return kt.vars.preventOverlaps===gt}):Rt).filter(function(kt){return L.direction>0?kt.end<=Lt:kt.start>=N})},L.update=function(gt,Gt,Rt){if(!(b&&!Rt&&!gt)){var kt=gn===!0?ut:L.scroll(),Ne=gt?0:(kt-Lt)/w,ne=Ne<0?0:Ne>1?1:Ne||0,Te=L.progress,Ve,Me,Se,he,Ln,be,hn,T;if(Gt&&(Nt=te,te=b?it():kt,x&&(oe=Ft,Ft=i&&!D?i.totalProgress():ne)),m&&d&&!rn&&!Ao&&ni&&(!ne&&Lt<kt+(kt-Nt)/(sn()-ma)*m?ne=1e-4:ne===1&&N>kt+(kt-Nt)/(sn()-ma)*m&&(ne=.9999)),ne!==Te&&L.enabled){if(Ve=L.isActive=!!ne&&ne<1,Me=!!Te&&Te<1,be=Ve!==Me,Ln=be||!!ne!=!!Te,L.direction=ne>Te?1:-1,L.progress=ne,Ln&&!rn&&(Se=ne&&!Te?0:ne===1?1:Te===1?2:3,D&&(he=!be&&Y[Se+1]!=="none"&&Y[Se+1]||Y[Se],T=i&&(he==="complete"||he==="reset"||he in i))),M&&(be||T)&&(T||h||!i)&&(on(M)?M(L):L.getTrailing(M).forEach(function(O){return O.endAnimation()})),D||(U&&!rn&&!Ao?(U._dp._time-U._start!==U._time&&U.render(U._dp._time-U._start),U.resetTo?U.resetTo("totalProgress",ne,i._tTime/i._tDur):(U.vars.totalProgress=ne,U.invalidate().restart())):i&&i.totalProgress(ne,!!(rn&&(nt||gt)))),d){if(gt&&_&&(J.style[_+v.os2]=rt),!q)ct(ga(mt+Xt*ne));else if(Ln){if(hn=!gt&&ne>Te&&N+1>kt&&kt+1>=Mi(P,v),C)if(!gt&&(Ve||hn)){var F=Ii(d,!0),G=kt-Lt;hd(d,me,F.top+(v===Ge?G:0)+He,F.left+(v===Ge?0:G)+He)}else hd(d,J);Ls(Ve||hn?W:Q),Ut&&ne<1&&Ve||ct(mt+(ne===1&&!hn?Xt:0))}}x&&!yt.tween&&!rn&&!Ao&&j.restart(!0),o&&(be||E&&ne&&(ne<1||!pc))&&Xa(o.targets).forEach(function(O){return O.classList[Ve||E?"add":"remove"](o.className)}),a&&!D&&!gt&&a(L),Ln&&!rn?(D&&(T&&(he==="complete"?i.pause().totalProgress(1):he==="reset"?i.restart(!0).pause():he==="restart"?i.restart(!0):i[he]()),a&&a(L)),(be||!pc)&&(c&&be&&ds(L,c),H[Se]&&ds(L,H[Se]),E&&(ne===1?L.kill(!1,1):H[Se]=0),be||(Se=ne===1?1:3,H[Se]&&ds(L,H[Se]))),R&&!Ve&&Math.abs(L.getVelocity())>(va(R)?R:2500)&&(oa(L.callbackAnimation),U?U.progress(1):oa(i,he==="reverse"?1:!ne,1))):D&&a&&!rn&&a(L)}if(Mt){var X=b?kt/b.duration()*(b._caScrollDist||0):kt;It(X+(k._isFlipped?1:0)),Mt(X)}Bt&&Bt(-kt/b.duration()*(b._caScrollDist||0))}},L.enable=function(gt,Gt){L.enabled||(L.enabled=!0,$e(P,"resize",xa),V||$e(P,"scroll",ms),ot&&$e(r,"refreshInit",ot),gt!==!1&&(L.progress=_t=0,te=Nt=$=it()),Gt!==!1&&L.refresh())},L.getTween=function(gt){return gt&&yt?yt.tween:U},L.setPositions=function(gt,Gt,Rt,kt){if(b){var Ne=b.scrollTrigger,ne=b.duration(),Te=Ne.end-Ne.start;gt=Ne.start+Te*gt/ne,Gt=Ne.start+Te*Gt/ne}L.refresh(!1,!1,{start:nd(gt,Rt&&!!L._startClamp),end:nd(Gt,Rt&&!!L._endClamp)},kt),L.update()},L.adjustPinSpacing=function(gt){if(lt&&gt){var Gt=lt.indexOf(v.d)+1;lt[Gt]=parseFloat(lt[Gt])+gt+He,lt[1]=parseFloat(lt[1])+gt+He,Ls(lt)}},L.disable=function(gt,Gt){if(gt!==!1&&L.revert(!0,!0),L.enabled&&(L.enabled=L.isActive=!1,Gt||U&&U.pause(),ut=0,wt&&(wt.uncache=1),ot&&qe(r,"refreshInit",ot),j&&(j.pause(),yt.tween&&yt.tween.kill()&&(yt.tween=0)),!V)){for(var Rt=ee.length;Rt--;)if(ee[Rt].scroller===P&&ee[Rt]!==L)return;qe(P,"resize",xa),V||qe(P,"scroll",ms)}},L.kill=function(gt,Gt){L.disable(gt,Gt),U&&!Gt&&U.kill(),l&&delete Ou[l];var Rt=ee.indexOf(L);Rt>=0&&ee.splice(Rt,1),Rt===_n&&Jo>0&&_n--,Rt=0,ee.forEach(function(kt){return kt.scroller===L.scroller&&(Rt=1)}),Rt||gn||(L.scroll.rec=0),i&&(i.scrollTrigger=null,gt&&i.revert({kill:!1}),Gt||i.kill()),xe&&[xe,Ot,k,bt].forEach(function(kt){return kt.parentNode&&kt.parentNode.removeChild(kt)}),La===L&&(La=0),d&&(wt&&(wt.uncache=1),Rt=0,ee.forEach(function(kt){return kt.pin===d&&Rt++}),Rt||(wt.spacer=0)),n.onKill&&n.onKill(L)},ee.push(L),L.enable(!1,!1),ce&&ce(L),i&&i.add&&!w){var Zt=L.update;L.update=function(){L.update=Zt,re.cache++,Lt||N||L.refresh()},Et.delayedCall(.01,L.update),w=.01,Lt=N=0}else L.refresh();d&&gy()},r.register=function(n){return gs||(Et=n||dm(),fm()&&window.document&&r.enable(),gs=_a),gs},r.defaults=function(n){if(n)for(var i in n)Do[i]=n[i];return Do},r.disable=function(n,i){_a=0,ee.forEach(function(a){return a[i?"kill":"disable"](n)}),qe(ie,"wheel",ms),qe(_e,"scroll",ms),clearInterval(wo),qe(_e,"touchcancel",mi),qe(me,"touchstart",mi),Ro(qe,_e,"pointerdown,touchstart,mousedown",id),Ro(qe,_e,"pointerup,touchend,mouseup",rd),pl.kill(),Co(qe);for(var s=0;s<re.length;s+=3)Po(qe,re[s],re[s+1]),Po(qe,re[s],re[s+2])},r.enable=function(){if(ie=window,_e=document,kn=_e.documentElement,me=_e.body,Et){if(Xa=Et.utils.toArray,wa=Et.utils.clamp,Nu=Et.core.context||mi,dc=Et.core.suppressOverwrites||mi,Sh=ie.history.scrollRestoration||"auto",Bu=ie.pageYOffset||0,Et.core.globals("ScrollTrigger",r),me){_a=1,Ds=document.createElement("div"),Ds.style.height="100vh",Ds.style.position="absolute",Em(),uy(),Oe.register(Et),r.isTouch=Oe.isTouch,tr=Oe.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),Iu=Oe.isTouch===1,$e(ie,"wheel",ms),Mh=[ie,_e,kn,me],Et.matchMedia?(r.matchMedia=function(u){var h=Et.matchMedia(),f;for(f in u)h.add(f,u[f]);return h},Et.addEventListener("matchMediaInit",function(){Sm(),Ah()}),Et.addEventListener("matchMediaRevert",function(){return Mm()}),Et.addEventListener("matchMedia",function(){Or(0,1),$r("matchMedia")}),Et.matchMedia().add("(orientation: portrait)",function(){return _c(),_c})):console.warn("Requires GSAP 3.11.0 or later"),_c(),$e(_e,"scroll",ms);var n=me.hasAttribute("style"),i=me.style,s=i.borderTopStyle,a=Et.core.Animation.prototype,o,l;for(a.revert||Object.defineProperty(a,"revert",{value:function(){return this.time(-.01,!0)}}),i.borderTopStyle="solid",o=Ii(me),Ge.m=Math.round(o.top+Ge.sc())||0,xn.m=Math.round(o.left+xn.sc())||0,s?i.borderTopStyle=s:i.removeProperty("border-top-style"),n||(me.setAttribute("style",""),me.removeAttribute("style")),wo=setInterval(od,250),Et.delayedCall(.5,function(){return Ao=0}),$e(_e,"touchcancel",mi),$e(me,"touchstart",mi),Ro($e,_e,"pointerdown,touchstart,mousedown",id),Ro($e,_e,"pointerup,touchend,mouseup",rd),Uu=Et.utils.checkPrefix("transform"),Qo.push(Uu),gs=sn(),pl=Et.delayedCall(.2,Or).pause(),vs=[_e,"visibilitychange",function(){var u=ie.innerWidth,h=ie.innerHeight;_e.hidden?(Qf=u,td=h):(Qf!==u||td!==h)&&xa()},_e,"DOMContentLoaded",Or,ie,"load",Or,ie,"resize",xa],Co($e),ee.forEach(function(u){return u.enable(0,1)}),l=0;l<re.length;l+=3)Po(qe,re[l],re[l+1]),Po(qe,re[l],re[l+2])}else if(_e){var c=function u(){r.enable(),_e.removeEventListener("DOMContentLoaded",u)};_e.addEventListener("DOMContentLoaded",c)}}},r.config=function(n){"limitCallbacks"in n&&(pc=!!n.limitCallbacks);var i=n.syncInterval;i&&clearInterval(wo)||(wo=i)&&setInterval(od,i),"ignoreMobileResize"in n&&(Iu=r.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&(Co(qe)||Co($e,n.autoRefreshEvents||"none"),cm=(n.autoRefreshEvents+"").indexOf("resize")===-1)},r.scrollerProxy=function(n,i){var s=En(n),a=re.indexOf(s),o=Yr(s);~a&&re.splice(a,o?6:2),i&&(o?Si.unshift(ie,i,me,i,kn,i):Si.unshift(s,i))},r.clearMatchMedia=function(n){ee.forEach(function(i){return i._ctx&&i._ctx.query===n&&i._ctx.kill(!0,!0)})},r.isInViewport=function(n,i,s){var a=(On(n)?En(n):n).getBoundingClientRect(),o=a[s?Hr:Gr]*i||0;return s?a.right-o>0&&a.left+o<ie.innerWidth:a.bottom-o>0&&a.top+o<ie.innerHeight},r.positionInViewport=function(n,i,s){On(n)&&(n=En(n));var a=n.getBoundingClientRect(),o=a[s?Hr:Gr],l=i==null?o/2:i in _l?_l[i]*o:~i.indexOf("%")?parseFloat(i)*o/100:parseFloat(i)||0;return s?(a.left+l)/ie.innerWidth:(a.top+l)/ie.innerHeight},r.killAll=function(n){if(ee.slice(0).forEach(function(s){return s.vars.id!=="ScrollSmoother"&&s.kill()}),n!==!0){var i=qr.killAll||[];qr={},i.forEach(function(s){return s()})}},r})();Jt.version="3.15.0";Jt.saveStyles=function(r){return r?Xa(r).forEach(function(t){if(t&&t.style){var e=Fn.indexOf(t);e>=0&&Fn.splice(e,5),Fn.push(t,t.style.cssText,t.getBBox&&t.getAttribute("transform"),Et.core.getCache(t),Nu())}}):Fn};Jt.revert=function(r,t){return Ah(!r,t)};Jt.create=function(r,t){return new Jt(r,t)};Jt.refresh=function(r){return r?xa(!0):(gs||Jt.register())&&Or(!0)};Jt.update=function(r){return++re.cache&&Vi(r===!0?2:0)};Jt.clearScrollMemory=ym;Jt.maxScroll=function(r,t){return Mi(r,t?xn:Ge)};Jt.getScrollFunc=function(r,t){return gr(En(r),t?xn:Ge)};Jt.getById=function(r){return Ou[r]};Jt.getAll=function(){return ee.filter(function(r){return r.vars.id!=="ScrollSmoother"})};Jt.isScrolling=function(){return!!ni};Jt.snapDirectional=wh;Jt.addEventListener=function(r,t){var e=qr[r]||(qr[r]=[]);~e.indexOf(t)||e.push(t)};Jt.removeEventListener=function(r,t){var e=qr[r],n=e&&e.indexOf(t);n>=0&&e.splice(n,1)};Jt.batch=function(r,t){var e=[],n={},i=t.interval||.016,s=t.batchMax||1e9,a=function(c,u){var h=[],f=[],d=Et.delayedCall(i,function(){u(h,f),h=[],f=[]}).pause();return function(_){h.length||d.restart(!0),h.push(_.trigger),f.push(_),s<=h.length&&d.progress(1)}},o;for(o in t)n[o]=o.substr(0,2)==="on"&&on(t[o])&&o!=="onRefreshInit"?a(o,t[o]):t[o];return on(s)&&(s=s(),$e(Jt,"refresh",function(){return s=t.batchMax()})),Xa(r).forEach(function(l){var c={};for(o in n)c[o]=n[o];c.trigger=l,e.push(Jt.create(c))}),e};var dd=function(t,e,n,i){return e>i?t(i):e<0&&t(0),n>i?(i-e)/(n-e):n<0?e/(e-n):1},vc=function r(t,e){e===!0?t.style.removeProperty("touch-action"):t.style.touchAction=e===!0?"auto":e?"pan-"+e+(Oe.isTouch?" pinch-zoom":""):"none",t===kn&&r(me,e)},No={auto:1,scroll:1},yy=function(t){var e=t.event,n=t.target,i=t.axis,s=(e.changedTouches?e.changedTouches[0]:e).target,a=s._gsap||Et.core.getCache(s),o=sn(),l;if(!a._isScrollT||o-a._isScrollT>2e3){for(;s&&s!==me&&(s.scrollHeight<=s.clientHeight&&s.scrollWidth<=s.clientWidth||!(No[(l=Qn(s)).overflowY]||No[l.overflowX]));)s=s.parentNode;a._isScroll=s&&s!==n&&!Yr(s)&&(No[(l=Qn(s)).overflowY]||No[l.overflowX]),a._isScrollT=o}(a._isScroll||i==="x")&&(e.stopPropagation(),e._gsapAllow=!0)},bm=function(t,e,n,i){return Oe.create({target:t,capture:!0,debounce:!1,lockAxis:!0,type:e,onWheel:i=i&&yy,onPress:i,onDrag:i,onScroll:i,onEnable:function(){return n&&$e(_e,Oe.eventTypes[0],md,!1,!0)},onDisable:function(){return qe(_e,Oe.eventTypes[0],md,!0)}})},Ey=/(input|label|select|textarea)/i,pd,md=function(t){var e=Ey.test(t.target.tagName);(e||pd)&&(t._gsapAllow=!0,pd=e)},Ty=function(t){Dr(t)||(t={}),t.preventDefault=t.isNormalizer=t.allowClicks=!0,t.type||(t.type="wheel,touch"),t.debounce=!!t.debounce,t.id=t.id||"normalizer";var e=t,n=e.normalizeScrollX,i=e.momentum,s=e.allowNestedScroll,a=e.onRelease,o,l,c=En(t.target)||kn,u=Et.core.globals().ScrollSmoother,h=u&&u.get(),f=tr&&(t.content&&En(t.content)||h&&t.content!==!1&&!h.smooth()&&h.content()),d=gr(c,Ge),_=gr(c,xn),g=1,m=(Oe.isTouch&&ie.visualViewport?ie.visualViewport.scale*ie.visualViewport.width:ie.outerWidth)/ie.innerWidth,p=0,S=on(i)?function(){return i(o)}:function(){return i||2.8},E,x,C=bm(c,t.type,!0,s),A=function(){return x=!1},b=mi,R=mi,M=function(){l=Mi(c,Ge),R=wa(tr?1:0,l),n&&(b=wa(0,Mi(c,xn))),E=Wr},v=function(){f._gsap.y=ga(parseFloat(f._gsap.y)+d.offset)+"px",f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(f._gsap.y)+", 0, 1)",d.offset=d.cacheID=0},D=function(){if(x){requestAnimationFrame(A);var B=ga(o.deltaY/2),et=R(d.v-B);if(f&&et!==d.v+d.offset){d.offset=et-d.v;var L=ga((parseFloat(f&&f._gsap.y)||0)-d.offset);f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+L+", 0, 1)",f._gsap.y=L+"px",d.cacheID=re.cache,Vi()}return!0}d.offset&&v(),x=!0},P,I,V,q,H=function(){M(),P.isActive()&&P.vars.scrollY>l&&(d()>l?P.progress(1)&&d(l):P.resetTo("scrollY",l))};return f&&Et.set(f,{y:"+=0"}),t.ignoreCheck=function(Y){return tr&&Y.type==="touchmove"&&D()||g>1.05&&Y.type!=="touchstart"||o.isGesturing||Y.touches&&Y.touches.length>1},t.onPress=function(){x=!1;var Y=g;g=ga((ie.visualViewport&&ie.visualViewport.scale||1)/m),P.pause(),Y!==g&&vc(c,g>1.01?!0:n?!1:"x"),I=_(),V=d(),M(),E=Wr},t.onRelease=t.onGestureStart=function(Y,B){if(d.offset&&v(),!B)q.restart(!0);else{re.cache++;var et=S(),L,ot;n&&(L=_(),ot=L+et*.05*-Y.velocityX/.227,et*=dd(_,L,ot,Mi(c,xn)),P.vars.scrollX=b(ot)),L=d(),ot=L+et*.05*-Y.velocityY/.227,et*=dd(d,L,ot,Mi(c,Ge)),P.vars.scrollY=R(ot),P.invalidate().duration(et).play(.01),(tr&&P.vars.scrollY>=l||L>=l-1)&&Et.to({},{onUpdate:H,duration:et})}a&&a(Y)},t.onWheel=function(){P._ts&&P.pause(),sn()-p>1e3&&(E=0,p=sn())},t.onChange=function(Y,B,et,L,ot){if(Wr!==E&&M(),B&&n&&_(b(L[2]===B?I+(Y.startX-Y.x):_()+B-L[1])),et){d.offset&&v();var Ct=ot[2]===et,Vt=Ct?V+Y.startY-Y.y:d()+et-ot[1],$=R(Vt);Ct&&Vt!==$&&(V+=$-Vt),d($)}(et||B)&&Vi()},t.onEnable=function(){vc(c,n?!1:"x"),Jt.addEventListener("refresh",H),$e(ie,"resize",H),d.smooth&&(d.target.style.scrollBehavior="auto",d.smooth=_.smooth=!1),C.enable()},t.onDisable=function(){vc(c,!0),qe(ie,"resize",H),Jt.removeEventListener("refresh",H),C.kill()},t.lockAxis=t.lockAxis!==!1,o=new Oe(t),o.iOS=tr,tr&&!d()&&d(1),tr&&Et.ticker.add(mi),q=o._dc,P=Et.to(o,{ease:"power4",paused:!0,inherit:!1,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:Tm(d,d(),function(){return P.pause()})},onUpdate:Vi,onComplete:q.vars.onComplete}),o};Jt.sort=function(r){if(on(r))return ee.sort(r);var t=ie.pageYOffset||0;return Jt.getAll().forEach(function(e){return e._sortY=e.trigger?t+e.trigger.getBoundingClientRect().top:e.start+ie.innerHeight}),ee.sort(r||function(e,n){return(e.vars.refreshPriority||0)*-1e6+(e.vars.containerAnimation?1e6:e._sortY)-((n.vars.containerAnimation?1e6:n._sortY)+(n.vars.refreshPriority||0)*-1e6)})};Jt.observe=function(r){return new Oe(r)};Jt.normalizeScroll=function(r){if(typeof r>"u")return mn;if(r===!0&&mn)return mn.enable();if(r===!1){mn&&mn.kill(),mn=r;return}var t=r instanceof Oe?r:Ty(r);return mn&&mn.target===t.target&&mn.kill(),Yr(t.target)&&(mn=t),t};Jt.core={_getVelocityProp:Lu,_inputObserver:bm,_scrollers:re,_proxies:Si,bridge:{ss:function(){ni||$r("scrollStart"),ni=sn()},ref:function(){return rn}}};dm()&&Et.registerPlugin(Jt);const la=new z;function Kn(r,t,e,n,i,s){const a=2*Math.PI*i/4,o=Math.max(s-2*i,0),l=Math.PI/4;la.copy(t),la[n]=0,la.normalize();const c=.5*a/(a+o),u=1-la.angleTo(r)/l;return Math.sign(la[e])===1?u*c:o/(a+o)+c+c*(1-u)}class _d extends Zs{constructor(t=1,e=1,n=1,i=2,s=.1){if(i=i*2+1,s=Math.min(t/2,e/2,n/2,s),super(1,1,1,i,i,i),i===1)return;const a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;const o=new z,l=new z,c=new z(t,e,n).divideScalar(2).subScalar(s),u=this.attributes.position.array,h=this.attributes.normal.array,f=this.attributes.uv.array,d=u.length/6,_=new z,g=.5/i;for(let m=0,p=0;m<u.length;m+=3,p+=2)switch(o.fromArray(u,m),l.copy(o),l.x-=Math.sign(l.x)*g,l.y-=Math.sign(l.y)*g,l.z-=Math.sign(l.z)*g,l.normalize(),u[m+0]=c.x*Math.sign(o.x)+l.x*s,u[m+1]=c.y*Math.sign(o.y)+l.y*s,u[m+2]=c.z*Math.sign(o.z)+l.z*s,h[m+0]=l.x,h[m+1]=l.y,h[m+2]=l.z,Math.floor(m/d)){case 0:_.set(1,0,0),f[p+0]=Kn(_,l,"z","y",s,n),f[p+1]=1-Kn(_,l,"y","z",s,e);break;case 1:_.set(-1,0,0),f[p+0]=1-Kn(_,l,"z","y",s,n),f[p+1]=1-Kn(_,l,"y","z",s,e);break;case 2:_.set(0,1,0),f[p+0]=1-Kn(_,l,"x","z",s,t),f[p+1]=Kn(_,l,"z","x",s,n);break;case 3:_.set(0,-1,0),f[p+0]=1-Kn(_,l,"x","z",s,t),f[p+1]=1-Kn(_,l,"z","x",s,n);break;case 4:_.set(0,0,1),f[p+0]=1-Kn(_,l,"x","y",s,t),f[p+1]=1-Kn(_,l,"y","x",s,e);break;case 5:_.set(0,0,-1),f[p+0]=Kn(_,l,"x","y",s,t),f[p+1]=1-Kn(_,l,"y","x",s,e);break}}}const gd=.035,vd=.1,xc=.006,Fo=.12,Mc=[0,.01,.02,.035,.05,.065,.08,.1,.35,.5,.65,.9,.92,.935,.95,.965,.98,.99,1],by=[{nx:1,ny:0,nz:0,rx:0,ry:0,rz:-1,ux:0,uy:1,uz:0},{nx:-1,ny:0,nz:0,rx:0,ry:0,rz:1,ux:0,uy:1,uz:0},{nx:0,ny:1,nz:0,rx:1,ry:0,rz:0,ux:0,uy:0,uz:-1},{nx:0,ny:-1,nz:0,rx:1,ry:0,rz:0,ux:0,uy:0,uz:1},{nx:0,ny:0,nz:1,rx:1,ry:0,rz:0,ux:0,uy:1,uz:0},{nx:0,ny:0,nz:-1,rx:-1,ry:0,rz:0,ux:0,uy:1,uz:0}];function wy(r,t,e){const n=Math.max(0,Math.min(1,(e-r)/(t-r)));return n*n*(3-2*n)}function ca(r,t){const e=Math.min(r,1-r,t,1-t);if(e<=gd)return xc;if(e<=vd){const n=wy(gd,vd,e);return xc+(-.008-xc)*n}return-.008}class Ay extends cn{constructor(t=1){super();const e=[],n=[],i=[],s=[],a=Mc.length,o=.5-Fo;let l=0;for(let c=0;c<6;c++){const u=by[c],h=l;for(let d=0;d<a;d++){const _=Mc[d];for(let g=0;g<a;g++){const m=Mc[g],p=ca(m,_),S=u.nx*.5+u.rx*(m-.5)+u.ux*(_-.5),E=u.ny*.5+u.ry*(m-.5)+u.uy*(_-.5),x=u.nz*.5+u.rz*(m-.5)+u.uz*(_-.5),C=Math.max(-o,Math.min(o,S)),A=Math.max(-o,Math.min(o,E)),b=Math.max(-o,Math.min(o,x));let R=S-C,M=E-A,v=x-b;const D=Math.sqrt(R*R+M*M+v*v);let P,I,V,q,H,Y;D>1e-6?(R/=D,M/=D,v/=D,q=C+R*Fo,H=A+M*Fo,Y=b+v*Fo,P=R,I=M,V=v):(q=S,H=E,Y=x,P=u.nx,I=u.ny,V=u.nz),q+=P*p,H+=I*p,Y+=V*p;const B=.003,et=(ca(Math.min(m+B,1),_)-ca(Math.max(m-B,0),_))/(Math.min(m+B,1)-Math.max(m-B,0)),L=(ca(m,Math.min(_+B,1))-ca(m,Math.max(_-B,0)))/(Math.min(_+B,1)-Math.max(_-B,0));let ot=P-u.rx*et-u.ux*L,Ct=I-u.ry*et-u.uy*L,Vt=V-u.rz*et-u.uz*L;const $=Math.sqrt(ot*ot+Ct*Ct+Vt*Vt);ot/=$,Ct/=$,Vt/=$,e.push(q*t,H*t,Y*t),n.push(ot,Ct,Vt),i.push(m,_),l++}}const f=s.length;for(let d=0;d<a-1;d++)for(let _=0;_<a-1;_++){const g=h+d*a+_,m=h+d*a+(_+1),p=h+(d+1)*a+(_+1),S=h+(d+1)*a+_;s.push(S,g,p),s.push(g,m,p)}this.addGroup(f,s.length-f,c)}this.setAttribute("position",new Ze(e,3)),this.setAttribute("normal",new Ze(n,3)),this.setAttribute("uv",new Ze(i,2)),this.setIndex(s)}}const Cy=[3,4,1,6,2,5],Ry=512;function Py(r,t){const e=t*.06;r.fillStyle="#000",r.fillRect(0,0,t,e),r.fillRect(0,t-e,t,e),r.fillRect(0,0,e,t),r.fillRect(t-e,0,e,t)}function Dy(r,t,e){r.fillStyle=e,r.fillRect(0,0,t,t)}function Ly(r,t,e,n,i){const s=Math.floor(e*.62),a=e/2,o=e/2+s*.04;r.save(),r.font=`bold ${s}px "Helvetica Neue", Helvetica, Arial, sans-serif`,r.textAlign="center",r.textBaseline="middle",r.lineJoin="round";const l=String(t);r.strokeStyle=i,r.lineWidth=Math.max(Math.floor(s*.07),4),r.strokeText(l,a,o),r.fillStyle=n,r.fillText(l,a,o),r.restore()}function Uy(r,t,e,n){const i=Ry,s=document.createElement("canvas");s.width=i,s.height=i;const a=s.getContext("2d");Dy(a,i,t),Ly(a,r,i,e,n),Py(a,i);const o=new Ju(s);return o.needsUpdate=!0,o.colorSpace=vn,o.minFilter=ci,o.generateMipmaps=!1,o.anisotropy=16,o}const xd={normal:{body:"#ffffff",num:"#1a1a1a",stroke:"#000000"},golden:{body:"#ffffff",num:"#b8860b",stroke:"#000000"},fire:{body:"#1a0a0a",num:"#ff4444",stroke:"#000000"},ice:{body:"#f0f9ff",num:"#0369a1",stroke:"#0a1628"},arcane:{body:"#faf5ff",num:"#7c3aed",stroke:"#1a0a3a"},shadow:{body:"#1a0a2e",num:"#ffffff",stroke:"#1a0a3a"},wild:{body:"#ffffff",num:"#1a1a1a",stroke:"#000000"}};function Iy(r="normal"){const t=xd[r]||xd.normal;return Cy.map(e=>{const n=Uy(e,t.body,t.num,t.stroke);return new FM({map:n,metalness:0,roughness:.35})})}class Ny{constructor(t,e=80){this.maxParticles=e,this.particles=[],this.head=0;const n=new Float32Array(e*3),i=new Float32Array(e),s=new Float32Array(e);for(let l=0;l<e;l++)n[l*3]=0,n[l*3+1]=-1e3,n[l*3+2]=0,i[l]=0,s[l]=0,this.particles.push({life:0,x:0,y:0,z:0});const a=new cn;a.setAttribute("position",new je(n,3)),a.setAttribute("aAlpha",new je(i,1)),a.setAttribute("aSize",new je(s,1));const o=new ln({uniforms:{uColor:{value:new jt(16747578)}},vertexShader:`
                attribute float aAlpha;
                attribute float aSize;
                varying float vAlpha;
                void main() {
                    vAlpha = aAlpha;
                    vec4 mv = modelViewMatrix * vec4(position, 1.0);
                    gl_PointSize = aSize * (300.0 / -mv.z);
                    gl_Position = projectionMatrix * mv;
                }
            `,fragmentShader:`
                uniform vec3 uColor;
                varying float vAlpha;
                void main() {
                    vec2 c = gl_PointCoord - 0.5;
                    float d = length(c);
                    float glow = smoothstep(0.5, 0.0, d);
                    gl_FragColor = vec4(uColor, glow * vAlpha);
                }
            `,transparent:!0,blending:Na,depthWrite:!1});this.points=new Xo(a,o),this.points.frustumCulled=!1,t.add(this.points),this.geometry=a}emit(t,e,n){const i=this.particles[this.head];i.life=1,i.x=t,i.y=e,i.z=n,this.head=(this.head+1)%this.maxParticles}setColor(t){this.points.material.uniforms.uColor.value.setHex(t)}update(t){const e=this.geometry.attributes.position.array,n=this.geometry.attributes.aAlpha.array,i=this.geometry.attributes.aSize.array;for(let s=0;s<this.maxParticles;s++){const a=this.particles[s];if(a.life>0){a.life-=t*1.8;const o=Math.max(0,a.life);e[s*3]=a.x,e[s*3+1]=a.y,e[s*3+2]=a.z,n[s]=o*.8,i[s]=o*.5+.1}else n[s]=0,i[s]=0}this.geometry.attributes.position.needsUpdate=!0,this.geometry.attributes.aAlpha.needsUpdate=!0,this.geometry.attributes.aSize.needsUpdate=!0}setVisible(t){this.points.visible=t}}class Fy{constructor(t){const e=new Qu(.5,.6,64),n=new ln({uniforms:{uColor:{value:new jt(16755268)},uProgress:{value:0},uOpacity:{value:0}},vertexShader:`
                varying vec2 vUv;
                void main() {
                    vUv = uv;
                    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
                }
            `,fragmentShader:`
                uniform vec3 uColor;
                uniform float uProgress;
                uniform float uOpacity;
                varying vec2 vUv;
                void main() {
                    // Ring edge glow — fades toward outer edge
                    float edge = smoothstep(0.0, 0.3, vUv.x) * smoothstep(1.0, 0.7, vUv.x);
                    float fade = 1.0 - uProgress;
                    gl_FragColor = vec4(uColor, edge * fade * uOpacity);
                }
            `,transparent:!0,blending:Na,depthWrite:!1,side:gi});this.mesh=new wn(e,n),this.mesh.rotation.x=-Math.PI/2,this.mesh.visible=!1,t.add(this.mesh),this.progress=1,this.active=!1}trigger(t,e,n,i=16755268){this.mesh.position.set(t,e,n),this.mesh.material.uniforms.uColor.value.setHex(i),this.progress=0,this.active=!0,this.mesh.visible=!0}update(t){if(!this.active)return;if(this.progress+=t*1.5,this.progress>=1){this.active=!1,this.mesh.visible=!1;return}const e=.5+this.progress*4;this.mesh.scale.setScalar(e),this.mesh.material.uniforms.uProgress.value=this.progress,this.mesh.material.uniforms.uOpacity.value=1}}const Sc=[{preset:"normal",emissive:10066329,name:"normal"},{preset:"golden",emissive:16763972,name:"golden"},{preset:"fire",emissive:16724753,name:"fire"},{preset:"ice",emissive:4500223,name:"ice"},{preset:"arcane",emissive:10049023,name:"arcane"},{preset:"shadow",emissive:8926156,name:"shadow"},{preset:"wild",emissive:16739125,name:"wild"}];function Oy(r,t){const e=new IM({canvas:r,antialias:!0,alpha:!1,powerPreference:"high-performance"});e.setSize(t.width,t.height),e.setPixelRatio(t.dpr),e.toneMapping=wd,e.toneMappingExposure=1.3,e.outputColorSpace=vn;const n=new NM;n.background=zy(),n.fog=new ju(657944,.02);const i=new zn(40,t.width/t.height,.1,100);i.position.set(0,0,7);const s=By(n),a=ky(),o=new fa;n.add(o);const l=yc(1.4,Sc[0],a,!0);l.userData.role="hero",o.add(l);const c=[];for(let _=0;_<4;_++){const g=Sc[_+1],m=yc(.55,g);m.userData.role="orbiter",m.userData.index=_,m.userData.orbitAngle=_/4*Math.PI*2,m.userData.orbitRadius=2.2+_%2*.5,m.userData.orbitSpeed=.2+_*.05,m.userData.yOffset=(_-1.5)*.4,m.visible=!1,o.add(m),c.push(m)}const u=[];for(let _=0;_<7;_++){const g=Sc[_],m=yc(.35,g);m.userData.role="collection",m.userData.index=_,m.visible=!1,o.add(m),u.push(m)}o.userData.hero=l,o.userData.orbiters=c,o.userData.collection=u;const h=Vy(n);Hy(n);const f=new Ny(n,80),d=new Fy(n);return{scene:n,camera:i,renderer:e,dice:o,particles:h,lights:s,trail:f,shockwave:d}}function By(r){const t=new rc(16772829,1.8);t.position.set(3,5,4),r.add(t);const e=new rc(6719743,.6);e.position.set(-4,1,3),r.add(e);const n=new rc(16739125,.8);n.position.set(0,-2,-4),r.add(n);const i=new BM(16766720,.5,10);i.position.set(0,4,2),r.add(i);const s=new kM(2236996,.8);return r.add(s),{key:t,fill:e,rim:n,top:i}}function yc(r,t,e,n=!1){const i=n?new Ay(r):new _d(r,r,r,4,r*.07),s=Iy(t.preset),a=new wn(i,s),o=new _d(r*1.04,r*1.04,r*1.04,3,r*.08),l=new Ka({color:t.emissive,transparent:!0,opacity:.03,side:Mn});return a.add(new wn(o,l)),a.userData.style=t,a}function zy(){const t=document.createElement("canvas");t.width=1024,t.height=1024;const e=t.getContext("2d"),n=e.createLinearGradient(0,0,0,1024);n.addColorStop(0,"#08081a"),n.addColorStop(.3,"#0c0c22"),n.addColorStop(.6,"#0a0a1c"),n.addColorStop(1,"#060612"),e.fillStyle=n,e.fillRect(0,0,1024,1024);const i=e.createRadialGradient(1024*.75,1024*.2,0,1024*.75,1024*.2,1024*.45);i.addColorStop(0,"rgba(255, 120, 50, 0.18)"),i.addColorStop(.5,"rgba(200, 60, 20, 0.09)"),i.addColorStop(1,"transparent"),e.fillStyle=i,e.fillRect(0,0,1024,1024);const s=e.createRadialGradient(1024*.15,1024*.55,0,1024*.15,1024*.55,1024*.4);s.addColorStop(0,"rgba(80, 80, 240, 0.15)"),s.addColorStop(.5,"rgba(40, 30, 150, 0.07)"),s.addColorStop(1,"transparent"),e.fillStyle=s,e.fillRect(0,0,1024,1024);const a=e.createRadialGradient(1024*.5,1024*.85,0,1024*.5,1024*.85,1024*.35);a.addColorStop(0,"rgba(150, 50, 220, 0.12)"),a.addColorStop(.6,"rgba(100, 30, 160, 0.06)"),a.addColorStop(1,"transparent"),e.fillStyle=a,e.fillRect(0,0,1024,1024);const o=e.createRadialGradient(1024*.1,1024*.15,0,1024*.1,1024*.15,1024*.3);o.addColorStop(0,"rgba(50, 200, 200, 0.1)"),o.addColorStop(1,"transparent"),e.fillStyle=o,e.fillRect(0,0,1024,1024);const l=new Ju(t);return l.colorSpace=vn,l}function ky(){const t=document.createElement("canvas");t.width=512,t.height=512;const e=t.getContext("2d"),n=e.createRadialGradient(512/2,512/3,0,512/2,512/2,512);n.addColorStop(0,"#2a1040"),n.addColorStop(.3,"#16213e"),n.addColorStop(.6,"#0a1628"),n.addColorStop(1,"#000000"),e.fillStyle=n,e.fillRect(0,0,512,512);const i=e.createRadialGradient(512*.75,512*.2,0,512*.75,512*.2,512*.3);i.addColorStop(0,"rgba(255, 107, 53, 0.4)"),i.addColorStop(1,"transparent"),e.fillStyle=i,e.fillRect(0,0,512,512);const s=e.createRadialGradient(512*.15,512*.7,0,512*.15,512*.7,512*.25);s.addColorStop(0,"rgba(80, 80, 255, 0.3)"),s.addColorStop(1,"transparent"),e.fillStyle=s,e.fillRect(0,0,512,512);const a=new Ju(t);return a.mapping=nl,a}function Vy(r){const e=new Float32Array(1800),n=new Float32Array(600);for(let p=0;p<600;p++)e[p*3]=(Math.random()-.5)*18,e[p*3+1]=(Math.random()-.5)*12,e[p*3+2]=(Math.random()-.5)*10-2,n[p]=.015+Math.random()*.025;const i=new cn;i.setAttribute("position",new je(e,3)),i.setAttribute("aSize",new je(n,1));const s=new Wo({color:14544639,size:.03,transparent:!0,opacity:.8,sizeAttenuation:!0}),a=new Xo(i,s);r.add(a);const o=120,l=new Float32Array(o*3);for(let p=0;p<o;p++)l[p*3]=(Math.random()-.5)*20,l[p*3+1]=(Math.random()-.5)*14,l[p*3+2]=(Math.random()-.5)*8-3;const c=new cn;c.setAttribute("position",new je(l,3));const u=new Wo({color:16739125,size:.055,transparent:!0,opacity:.7,sizeAttenuation:!0}),h=new Xo(c,u);r.add(h);const f=30,d=new Float32Array(f*3);for(let p=0;p<f;p++)d[p*3]=(Math.random()-.5)*16,d[p*3+1]=(Math.random()-.5)*10,d[p*3+2]=(Math.random()-.5)*6-2;const _=new cn;_.setAttribute("position",new je(d,3));const g=new Wo({color:16777215,size:.07,transparent:!0,opacity:.9,sizeAttenuation:!0}),m=new Xo(_,g);return r.add(m),a.userData.accent=h,a.userData.burst=m,a}function Hy(r){const t=new th(.5,16,16);[{pos:[-5,2,-7],color:16739125,opacity:.06,scale:3},{pos:[5,-1,-9],color:4474111,opacity:.05,scale:4},{pos:[-2,-3,-6],color:16746496,opacity:.04,scale:2.5},{pos:[3,3,-8],color:8926156,opacity:.04,scale:3.5},{pos:[0,-4,-10],color:2254506,opacity:.03,scale:5}].forEach(({pos:n,color:i,opacity:s,scale:a})=>{const o=new Ka({color:i,transparent:!0,opacity:s}),l=new wn(t,o);l.position.set(...n),l.scale.setScalar(a),l.userData.baseOpacity=s,r.add(l)})}const wm={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class Ja{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const Gy=new Zu(-1,1,1,-1,0,1);class Wy extends cn{constructor(){super(),this.setAttribute("position",new Ze([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Ze([0,2,0,0,2,0],2))}}const Xy=new Wy;class Am{constructor(t){this._mesh=new wn(Xy,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,Gy)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}}class Cm extends Ja{constructor(t,e){super(),this.textureID=e!==void 0?e:"tDiffuse",t instanceof ln?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=sl.clone(t.uniforms),this.material=new ln({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this.fsQuad=new Am(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class Md extends Ja{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){const i=t.getContext(),s=t.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),s.buffers.stencil.setFunc(i.ALWAYS,a,4294967295),s.buffers.stencil.setClear(o),s.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.color.setMask(!0),s.buffers.depth.setMask(!0),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(i.EQUAL,1,4294967295),s.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),s.buffers.stencil.setLocked(!0)}}class Yy extends Ja{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}}class qy{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){const n=t.getSize(new qt);this._width=n.width,this._height=n.height,e=new fi(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:zi}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Cm(wm),this.copyPass.material.blending=Bi,this.clock=new rp}swapBuffers(){const t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){const e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());const e=this.renderer.getRenderTarget();let n=!1;for(let i=0,s=this.passes.length;i<s;i++){const a=this.passes[i];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),a.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),a.needsSwap){if(n){const o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}Md!==void 0&&(a instanceof Md?n=!0:a instanceof Yy&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){const e=this.renderer.getSize(new qt);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;const n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(n,i)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class $y extends Ja{constructor(t,e,n=null,i=null,s=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=s,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new jt}render(t,e,n){const i=t.autoClear;t.autoClear=!1;let s,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(s=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(s),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),t.autoClear=i}}const Zy={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new jt(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class Xs extends Ja{constructor(t,e,n,i){super(),this.strength=e!==void 0?e:1,this.radius=n,this.threshold=i,this.resolution=t!==void 0?new qt(t.x,t.y):new qt(256,256),this.clearColor=new jt(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let s=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new fi(s,a,{type:zi}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){const f=new fi(s,a,{type:zi});f.texture.name="UnrealBloomPass.h"+h,f.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(f);const d=new fi(s,a,{type:zi});d.texture.name="UnrealBloomPass.v"+h,d.texture.generateMipmaps=!1,this.renderTargetsVertical.push(d),s=Math.round(s/2),a=Math.round(a/2)}const o=Zy;this.highPassUniforms=sl.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=i,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new ln({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];const l=[3,5,7,9,11];s=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new qt(1/s,1/a),s=Math.round(s/2),a=Math.round(a/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new z(1,1,1),new z(1,1,1),new z(1,1,1),new z(1,1,1),new z(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const u=wm;this.copyUniforms=sl.clone(u.uniforms),this.blendMaterial=new ln({uniforms:this.copyUniforms,vertexShader:u.vertexShader,fragmentShader:u.fragmentShader,blending:Na,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new jt,this.oldClearAlpha=1,this.basic=new Ka,this.fsQuad=new Am(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(t,e){let n=Math.round(t/2),i=Math.round(e/2);this.renderTargetBright.setSize(n,i);for(let s=0;s<this.nMips;s++)this.renderTargetsHorizontal[s].setSize(n,i),this.renderTargetsVertical[s].setSize(n,i),this.separableBlurMaterials[s].uniforms.invSize.value=new qt(1/n,1/i),n=Math.round(n/2),i=Math.round(i/2)}render(t,e,n,i,s){t.getClearColor(this._oldClearColor),this.oldClearAlpha=t.getClearAlpha();const a=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),s&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,t.setRenderTarget(null),t.clear(),this.fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this.fsQuad.render(t);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=Xs.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this.fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=Xs.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this.fsQuad.render(t),o=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this.fsQuad.render(t),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,s&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(n),this.fsQuad.render(t)),t.setClearColor(this._oldClearColor,this.oldClearAlpha),t.autoClear=a}getSeperableBlurMaterial(t){const e=[];for(let n=0;n<t;n++)e.push(.39894*Math.exp(-.5*n*n/(t*t))/t);return new ln({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new qt(.5,.5)},direction:{value:new qt(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}getCompositeMaterial(t){return new ln({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}}Xs.BlurDirectionX=new qt(1,0);Xs.BlurDirectionY=new qt(0,1);const Ky={uniforms:{tDiffuse:{value:null},uTime:{value:0},uRGBShift:{value:.0015},uVignette:{value:.15},uContrast:{value:1.02},uBrightness:{value:0}},vertexShader:`
        varying vec2 vUv;
        void main() {
            vUv = uv;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
    `,fragmentShader:`
        uniform sampler2D tDiffuse;
        uniform float uTime;
        uniform float uRGBShift;
        uniform float uVignette;
        uniform float uContrast;
        uniform float uBrightness;
        varying vec2 vUv;

        vec3 adjustContrast(vec3 color, float contrast) {
            return (color - 0.5) * contrast + 0.5;
        }

        void main() {
            vec2 uv = vUv;
            vec2 center = uv - 0.5;
            float dist = length(center);

            // Chromatic aberration (stronger at edges)
            float shift = uRGBShift * dist;
            vec2 dir = normalize(center);

            float r = texture2D(tDiffuse, uv + dir * shift).r;
            float g = texture2D(tDiffuse, uv).g;
            float b = texture2D(tDiffuse, uv - dir * shift).b;
            vec3 color = vec3(r, g, b);

            // Contrast adjustment
            color = adjustContrast(color, uContrast);

            // Brightness
            color += uBrightness;

            // Vignette
            float vignette = 1.0 - dist * dist * uVignette;
            color *= vignette;

            // Subtle film grain
            float grain = (fract(sin(dot(uv * uTime * 0.01, vec2(12.9898, 78.233))) * 43758.5453) - 0.5) * 0.015;
            color += grain;

            gl_FragColor = vec4(color, 1.0);
        }
    `};function jy(r,t,e,n){const i=new qy(r),s=new $y(t,e);i.addPass(s);const a=new Xs(new qt(n.width,n.height),.6,.7,.75);i.addPass(a);const o=new Cm(Ky);i.addPass(o);const l=i.render.bind(i);return i.render=function(c){o.uniforms.uTime.value=n.time;const u=Math.abs(n.scrollTarget-n.scroll);o.uniforms.uRGBShift.value=.0012+u*.025,o.uniforms.uVignette.value=.15+u*.3,a.strength=.6+u*2,l(c)},i}function Jy(r,t){return Jt.defaults({scroller:r}),Jt.scrollerProxy(r,{scrollTop(n){return arguments.length&&(r.scrollTop=n),r.scrollTop},getBoundingClientRect(){return{top:0,left:0,width:window.innerWidth,height:window.innerHeight}}}),r.querySelectorAll(".section").forEach((n,i)=>{const s=n.querySelector(".section-content")||n.querySelector(".hero-content"),a=n.querySelectorAll(".feature-card");s&&(n.classList.contains("section-hero")||(s.dataset.sectionIdx=i,s.style.transformOrigin="50% 50% -500px",s.style.willChange="transform, opacity",a.length>0&&ir.to(a,{opacity:1,"--revealY":"0px",duration:.8,stagger:.12,ease:"power3.out",scrollTrigger:{trigger:n,scroller:r,start:"top 50%",end:"top 20%",toggleActions:"play none none reverse"}})))}),r.addEventListener("scroll",()=>{Jt.update()}),{ScrollTrigger:Jt}}function Qy(r){const t=r.textContent;r.textContent="";const e=[];for(let n=0;n<t.length;n++){const i=document.createElement("span");i.textContent=t[n]===" "?" ":t[n],i.className="char",i.style.display="inline-block",i.style.willChange="transform, opacity",r.appendChild(i),e.push(i)}return e}function tE(r,t){const e=r/Math.max(t-1,1),i=e*Math.PI*2*2.5,s=(e-.5)*400,a=Math.sin(i)*80,o=i*(180/Math.PI),l=.4+Math.cos(i)*.25,c=.3+(Math.cos(i)+1)*.35;return{x:a,y:s,rotateZ:o,scale:l,opacity:c}}function eE(r){const t=r.querySelectorAll(".hero-title .line"),e=r.querySelector(".hero-subtitle");t.forEach((n,i)=>{const s=Qy(n);s.forEach((a,o)=>{const l=tE(o,s.length);ir.set(a,{x:l.x,y:l.y,rotateZ:l.rotateZ,scale:l.scale,opacity:0})}),ir.to(s,{x:0,y:0,rotateZ:0,scale:1,opacity:1,duration:1.6,stagger:.035,ease:"power3.inOut",delay:.4+i*.4}),ir.to(n,{opacity:1,duration:.01,delay:.39+i*.4})}),e&&(ir.set(e,{opacity:0,y:20,letterSpacing:"0.8em"}),ir.to(e,{opacity:1,y:0,letterSpacing:"0.35em",duration:1.2,ease:"power2.out",delay:1.8}))}ir.registerPlugin(Jt);const Ec=[{bg:[.04,.04,.08],accent:[1,.42,.21]},{bg:[.05,.04,.03],accent:[.94,.75,.15]},{bg:[.04,.03,.08],accent:[.65,.55,.98]},{bg:[.03,.05,.04],accent:[.2,.82,.6]},{bg:[.05,.03,.06],accent:[.96,.29,.69]},{bg:[.05,.04,.03],accent:[1,.42,.21]}],tt={scroll:0,scrollTarget:0,mouse:{x:0,y:0},mouseTarget:{x:0,y:0},width:window.innerWidth,height:window.innerHeight,dpr:Math.min(window.devicePixelRatio,2),time:0,section:0,loaded:!1,drag:{active:!1,lastX:0,lastY:0,velX:0,velY:0},spinX:0,spinY:0},nE=new rp,Zr=document.getElementById("webgl"),yi=document.getElementById("scroll-container"),{scene:er,camera:el,renderer:ku,dice:Ma,particles:Qi,lights:_s,trail:Oo,shockwave:Tc}=Oy(Zr,tt),Rm=jy(ku,er,el,tt);Jy(yi);eE(yi);window.addEventListener("load",()=>{tt.loaded=!0,document.body.classList.add("loaded")});requestAnimationFrame(Nm);const Pm=document.querySelectorAll(".nav-dot"),bc=document.querySelector(".scroll-hint");Pm.forEach(r=>{r.addEventListener("click",()=>{const t=parseInt(r.dataset.index),e=yi.scrollHeight-tt.height,n=t/5*e;yi.scrollTo({top:n,behavior:"smooth"})})});const Sd=document.querySelector(".nav-progress");function iE(){const r=Math.round(tt.scroll*5);Pm.forEach((t,e)=>{t.classList.toggle("active",e===r)}),Sd&&(Sd.textContent=String(r+1).padStart(2,"0")),bc&&tt.scroll>.02&&(bc.style.opacity="0",bc.style.transition="opacity 0.6s ease")}const Ua=document.getElementById("cursor-glow"),rE=document.querySelectorAll(".feature-card");function sE(){rE.forEach(r=>{const t=parseFloat(r.dataset.depth)||.5,e=tt.mouse.x*t*14,n=tt.mouse.y*t*14;r.style.setProperty("--px",`${e}px`),r.style.setProperty("--py",`${n}px`)})}document.querySelectorAll(".section-content[data-section-idx]");function aE(){const r=tt.scroll*5;document.querySelectorAll("[data-section-idx]").forEach(e=>{const n=parseInt(e.dataset.sectionIdx),i=r-n,s=Math.sign(i),a=Math.abs(i),o=a*a*(3-2*a),l=s*o*70,c=Math.max(0,1-a*1.5),u=tt.mouse.y*-3*c,h=tt.mouse.x*4*c,f=c*20,d=Math.max(0,1-a*.5),_=c*.6,g=`rgba(255, 107, 53, ${_})`;e.style.transform=`rotateY(${l+h}deg) rotateX(${u}deg) translateZ(${f}px)`,e.style.opacity=d,e.style.boxShadow=_>.05?`0 0 ${20+c*30}px ${g}, 0 8px 32px rgba(0,0,0,0.4), inset 0 0 ${c*15}px rgba(255,107,53,${_*.2})`:"0 8px 32px rgba(0,0,0,0.4)",e.style.borderColor=`rgba(255, 107, 53, ${_*.5})`,e.classList.toggle("in-focus",c>.6)})}window.addEventListener("mousemove",r=>{tt.mouseTarget.x=(r.clientX/tt.width-.5)*2,tt.mouseTarget.y=(r.clientY/tt.height-.5)*2,Ua&&(Ua.style.left=r.clientX+"px",Ua.style.top=r.clientY+"px")});function Ch(){return tt.scroll<.18}function Dm(r,t){Ch()&&(tt.drag.active=!0,tt.drag.lastX=r,tt.drag.lastY=t,tt.drag.velX=0,tt.drag.velY=0,document.body.style.cursor="grabbing")}function Lm(r,t){if(!tt.drag.active)return;const e=r-tt.drag.lastX,n=t-tt.drag.lastY;tt.drag.velY=e*.008,tt.drag.velX=n*.008,tt.spinY+=tt.drag.velY,tt.spinX+=tt.drag.velX,tt.drag.lastX=r,tt.drag.lastY=t}function Um(){tt.drag.active=!1,document.body.style.cursor=""}Zr.addEventListener("mousedown",r=>Dm(r.clientX,r.clientY));window.addEventListener("mousemove",r=>{tt.drag.active&&Lm(r.clientX,r.clientY)});window.addEventListener("mouseup",Um);Zr.addEventListener("touchstart",r=>{Ch()&&r.touches.length===1&&Dm(r.touches[0].clientX,r.touches[0].clientY)},{passive:!0});Zr.addEventListener("touchmove",r=>{tt.drag.active&&r.touches.length===1&&Lm(r.touches[0].clientX,r.touches[0].clientY)},{passive:!0});Zr.addEventListener("touchend",Um,{passive:!0});Zr.addEventListener("mousemove",()=>{tt.drag.active||(Zr.style.cursor=Ch()?"grab":"default")});let yd;function oE(){clearTimeout(yd),yd=setTimeout(()=>{tt.width=window.innerWidth,tt.height=window.innerHeight,tt.dpr=Math.min(window.devicePixelRatio,2),el&&(el.aspect=tt.width/tt.height,el.updateProjectionMatrix(),ku.setSize(tt.width,tt.height),ku.setPixelRatio(tt.dpr),Rm.setSize(tt.width,tt.height))},100)}window.addEventListener("resize",oE);window.addEventListener("keydown",r=>{const e=(yi.scrollHeight-tt.height)/5;if(r.key==="ArrowDown"||r.key===" "){r.preventDefault();const n=Math.min(Math.floor(tt.scrollTarget*5)+1,5);yi.scrollTo({top:n*e,behavior:"smooth"})}else if(r.key==="ArrowUp"){r.preventDefault();const n=Math.max(Math.ceil(tt.scrollTarget*5)-1,0);yi.scrollTo({top:n*e,behavior:"smooth"})}});yi.addEventListener("scroll",()=>{const r=yi.scrollHeight-tt.height;tt.scrollTarget=r>0?yi.scrollTop/r:0});function Ia(r,t){return 1-Math.exp(Math.log(1-Math.min(r,.999))*(t*60))}function Im(r,t){const e=Ec.length-1,n=r*e,i=Math.min(Math.floor(n),e-1),s=n-i,a=Ec[i][t],o=Ec[Math.min(i+1,e)][t];return[a[0]+(o[0]-a[0])*s,a[1]+(o[1]-a[1])*s,a[2]+(o[2]-a[2])*s]}function Nm(){requestAnimationFrame(Nm);const r=Math.min(nE.getDelta(),.05);tt.time+=r;const t=Ia(.06,r),e=Ia(.04,r);tt.scroll+=(tt.scrollTarget-tt.scroll)*t,tt.mouse.x+=(tt.mouseTarget.x-tt.mouse.x)*e,tt.mouse.y+=(tt.mouseTarget.y-tt.mouse.y)*e,tt.section=Math.floor(tt.scroll*5.999),iE(),cE(r),uE(r),hE(r),lE(r),sE(),aE(),Rm.render(r)}let wc=!1;function lE(r){const t=tt.scroll*5,e=Ma.userData.hero;if(Oo){const n=t>=1&&t<2;if(Oo.setVisible(n),n&&e){const i=t-1;i>.15&&i<.9&&Oo.emit(e.position.x,e.position.y,e.position.z)}Oo.update(r)}Tc&&(t>=1.97&&t<2.05&&!wc&&(wc=!0,Tc.trigger(0,-.6,-.5,16755268)),(t<1.9||t>2.2)&&(wc=!1),Tc.update(r))}function Ed(r){const t=Math.exp(-r*4),e=r*12;return Math.abs(Math.sin(e))*t}const Ac=Math.PI*2;function Cc(r,t,e){let n=(t-r)%Ac;return n>Math.PI?n-=Ac:n<-Math.PI&&(n+=Ac),r+n*e}function cE(r){const[t,e,n]=Im(tt.scroll,"accent");if(_s&&_s.rim&&_s.rim.color.setRGB(t,e,n),_s&&_s.fill&&_s.fill.color.lerp(new jt(t*.3,e*.3,n*.5+.3),.02),er&&er.fog){const i=.015+Math.sin(tt.time*.1)*.005;er.fog.density+=(i-er.fog.density)*.02,er.fog.color.lerp(new jt(t*.06,e*.06,n*.08+.02),.01)}Ua&&(Ua.style.background=`radial-gradient(circle, rgba(${Math.round(t*255)}, ${Math.round(e*255)}, ${Math.round(n*255)}, 0.08) 0%, transparent 65%)`),er&&er.children.forEach((i,s)=>{var a;if(i.isMesh&&i.material&&i.material.transparent&&((a=i.geometry)==null?void 0:a.type)==="SphereGeometry"){i.position.y+=Math.sin(tt.time*.15+s*1.7)*r*.08,i.position.x+=Math.cos(tt.time*.1+s*2.3)*r*.05;const o=.7+Math.sin(tt.time*.2+s*1.1)*.3;i.material.opacity=i.userData.baseOpacity?i.userData.baseOpacity*o:i.material.opacity}})}function uE(r){if(!Ma)return;const t=tt.scroll,e=tt.time,n=t*5,i=Ma.userData.hero,s=Ma.userData.orbiters,a=Ma.userData.collection;n>=1&&!tt.drag.active&&(tt.spinX*=.9,tt.spinY*=.9,tt.drag.velX*=.9,tt.drag.velY*=.9);let o=0,l=0,c=0,u=1,h=0,f=0,d=0;if(n<1){const P=n;u=1.6-P*.3,l=Math.sin(e*.3)*.08,c=1-P*.5,tt.drag.active||(tt.spinY+=r*.25,tt.spinY+=tt.drag.velY,tt.spinX+=tt.drag.velX,tt.drag.velX*=.92,tt.drag.velY*=.92),tt.spinX=Math.max(-1.2,Math.min(1.2,tt.spinX)),h=P*Math.PI*.5+tt.spinX,f=P*Math.PI*.6+tt.spinY,d=Math.sin(e*.15)*.03,tt.drag.active||(o+=tt.mouse.x*.15,l+=-tt.mouse.y*.1)}else if(n<2){const P=n-1;if(P<.15){const I=P/.15;c=.5+I*.3,l=-I*.2,u=1.3+I*.1,h=e*.08-I*.2,f=e*.12,d=-I*.15}else if(P<.4){const I=(P-.15)/.25,V=1-(1-I)*(1-I);c=.8-V*2.5,l=-.2+V*1,o=V*.5,u=1.4-V*.5,h=I*Math.PI*1.2,f=I*Math.PI*1.5,d=I*Math.PI*.4}else if(P<.85){const I=(P-.4)/.45,V=4*I*(1-I);c=-1.7+I*.5,l=.8+V*.8-I*1.2,o=.5+I*.3,u=.9;const q=1-I*.6;h=Math.PI*1.2+I*Math.PI*.8*q,f=Math.PI*1.5+I*Math.PI*1*q,d=Math.PI*.4+I*Math.PI*.3*q}else{const I=(P-.85)/.15,V=I*I;c=-1.2+V*.5,l=-.4+Ed(I)*.3,o=.8-V*.8,u=.9-V*.1,h=Math.PI*2+I*.15,f=Math.PI*2.5+I*.1,d=Math.PI*.7}}else if(n<3){const P=n-2,I=Math.min(1,P*3);o=0,l=-.3,c=-.5,u=.6*(1-I),h=Math.PI*.5,f=0,d=0}else if(n<4){const P=Math.min(1,(n-3)*3);o=0,u=.8*P,l=.1,h=Math.PI*.2+Math.sin(e*.3)*.06,f=e*.08,d=.03}else if(n<5){const P=n-4;l=-.4+P*2+Math.sin(e*.3)*.06,u=.8+P*.35,h=Math.sin(e*.35)*.12,f=e*.35,d=Math.cos(e*.3)*.06}else u=1.3,l=Math.sin(e*.2)*.05,h=Math.sin(e*.1)*.06,f=e*.04,d=0;if(n>=1&&n<2){const P=Math.abs(tt.scrollTarget-tt.scroll);d+=Math.cos(e*4)*P*.6}if(n>=1){const P=n<2?.05:.15;o+=tt.mouse.x*P,l+=-tt.mouse.y*P*.7}const _=Ia(.04,r);let g=.05;n>=1&&n<2&&(g=.08),tt.drag.active&&(g=.3);const m=Ia(g,r);i.position.x+=(o-i.position.x)*_,i.position.y+=(l-i.position.y)*_,i.position.z+=(c-i.position.z)*_,n<2?(i.rotation.x+=(h-i.rotation.x)*m,i.rotation.y+=(f-i.rotation.y)*m,i.rotation.z+=(d-i.rotation.z)*m):(i.rotation.x=Cc(i.rotation.x,h,m),i.rotation.y=Cc(i.rotation.y,f,m),i.rotation.z=Cc(i.rotation.z,d,m));const p=i.scale.x;i.scale.setScalar(p+(u-p)*Ia(.06,r)),i.visible=i.scale.x>.04;const S=i.children.find(P=>P.isPointLight);S&&(S.intensity=.15+Math.sin(e*1.5)*.1),[i,...s,...a].forEach(P=>{P.userData.shaderMat&&(P.userData.shaderMat.uniforms.uTime.value=e)});const C=Math.max(0,Math.min(1,(n-2)/.6))*Math.max(0,Math.min(1,(3.5-n)/.5)),A=[{x:0,y:0,z:0},{x:0,y:Math.PI,z:0},{x:0,y:Math.PI/2,z:0},{x:0,y:-Math.PI/2,z:0},{x:-Math.PI/2,y:0,z:0},{x:Math.PI/2,y:0,z:0},{x:Math.PI/4,y:Math.PI/4,z:0}],b=[0,1,2,3],R=[4,5,6],M=[];b.forEach((P,I)=>M[P]={col:I,row:0,cols:4}),R.forEach((P,I)=>M[P]={col:I,row:1,cols:3}),a.forEach((P,I)=>{if(P.visible=C>.01,!P.visible)return;const V=I*.07,q=Math.max(0,Math.min(1,(C-V)/(1-V))),H=1-(1-q)*(1-q),Y=M[I],B=.95,et=.95,L=(Y.col-(Y.cols-1)/2)*B,Ct=.35-Y.row*et+(1-H)*3.5,Vt=H>.8?Ed((H-.8)/.2)*.18:0,$=H>.95?1:0,nt=$*Math.sin(e*1.2+I*.9)*.06,_t=$*Math.cos(e*.8+I*1.3)*.03;P.position.x=L*H+_t,P.position.y=Ct+Vt+nt,P.position.z=-.5;const it=A[I%A.length],yt=1-H,wt=$*e*(.2+I%3*.08);P.rotation.x=it.x+yt*Math.PI*4*(1+I*.3),P.rotation.y=it.y+yt*Math.PI*3+wt,P.rotation.z=it.z+yt*.5,P.scale.setScalar(.62*H)});const D=n>=3&&n<4?Math.min(1,(n-3)/.4):0;s.forEach((P,I)=>{if(P.visible=D>.01,!P.visible)return;const{orbitAngle:V,orbitRadius:q,orbitSpeed:H,yOffset:Y}=P.userData,B=V+e*H,et=q*D*.8;P.position.x=i.position.x+Math.cos(B)*et,P.position.y=i.position.y+Math.sin(B*.6)*.4+Y*D,P.position.z=Math.sin(B)*et*.3-.3,P.rotation.x=e*(H+.3),P.rotation.y=e*(H+.2),P.scale.setScalar(D*.8)})}function hE(r){if(!Qi)return;const t=Math.abs(tt.scrollTarget-tt.scroll),e=1+t*12,n=Qi.geometry.attributes.position.array,i=n.length/3;for(let o=0;o<i;o++){const l=o*3;n[l+1]+=r*.02*e*(.3+Math.sin(o*.1)*.7),n[l+1]>6&&(n[l+1]=-6),n[l]+=Math.sin(tt.time*.15+o*.3)*r*.01}Qi.geometry.attributes.position.needsUpdate=!0,Qi.rotation.y=tt.time*.008,Qi.material.opacity=.7+Math.sin(tt.time*1.5)*.15,Qi.scale.y=1+t*4;const s=Qi.userData.accent;if(s){const o=s.geometry.attributes.position.array,l=o.length/3;for(let f=0;f<l;f++){const d=f*3;o[d+1]+=r*.03*e*(.4+Math.cos(f*.2)*.6),o[d+1]>7&&(o[d+1]=-7),o[d]+=Math.cos(tt.time*.12+f*.7)*r*.02}s.geometry.attributes.position.needsUpdate=!0,s.rotation.y=-tt.time*.006;const[c,u,h]=Im(tt.scroll,"accent");s.material.color.setRGB(c,u,h),s.material.opacity=.6+Math.sin(tt.time*.8)*.15}const a=Qi.userData.burst;a&&(a.rotation.y=tt.time*.004,a.rotation.x=Math.sin(tt.time*.05)*.02,a.material.opacity=.5+Math.sin(tt.time*2.5)*.4,a.material.size=.06+Math.sin(tt.time*1.8)*.02)}
