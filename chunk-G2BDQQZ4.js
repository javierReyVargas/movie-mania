import{a as E,b as W,c as B,d as I,e as V}from"./chunk-EUCLFBRQ.js";import{K as d,L as D,M as F,N as j}from"./chunk-IB5CPOH3.js";import{Ca as y,Da as l,H as s,Ha as c,I as p,Ka as P,La as L,M as u,N as f,_a as T,aa as g,ca as C,cb as k,gb as O,hb as S,ma as _,ra as h,sa as x,ta as M,ua as v,va as b,wa as i,xa as o,za as w}from"./chunk-XSMBJP3E.js";function G(t,e){t&1&&(i(0,"mat-card",2)(1,"mat-card-content")(2,"p"),c(3," Watchlist is empty "),o()(),i(4,"mat-card-actions")(5,"button",3),c(6," Comeback to the main list "),o()()())}function R(t,e){if(t&1){let r=w();i(0,"item-movie",5),y("goToDetail",function(n){u(r);let m=l(2);return f(m.onGoToDetail(n))}),o()}if(t&2){let r=e.$implicit;_("movie",r)}}function q(t,e){if(t&1&&(v(0,R,1,1,"item-movie",6,M),i(2,"button",4),c(3," < "),o()),t&2){let r=l();b(r.watchList())}}var tt=(()=>{let e=class e{constructor(){this.router=s(O),this.movieService=s(d),this.watchList=g(()=>this.movieService.arrMoviesInLocalStorage())}onGoToDetail(a){this.router.navigate(["detail"],{queryParams:{id:a.id}})}};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=p({type:e,selectors:[["watch-list"]],standalone:!0,features:[P([d]),L],decls:3,vars:1,consts:[[1,"container"],["class","card-empty"],[1,"card-empty"],["mat-stroked-button","","color","warn","routerLink","/"],["mat-fab","","color","warn","routerLink","/",1,"btn-back"],[3,"movie","goToDetail"],[3,"movie"]],template:function(n,m){n&1&&(i(0,"section",0),h(1,G,7,0,"mat-card",1)(2,q,4,0),o()),n&2&&(C(1),x(1,m.watchList().length==0?1:2))},dependencies:[T,k,I,E,B,W,j,D,F,S,V],styles:[".container[_ngcontent-%COMP%]{min-height:100vh;background:rgb(2,0,36);background:linear-gradient(90deg,rgb(2,0,36) 0%,rgb(101,7,14) 29%,rgb(121,9,9) 35%,rgb(115,18,20) 38%,rgb(104,37,43) 44%,rgb(89,62,73) 52%,rgb(96,114,117) 100%);display:flex;justify-content:center;flex-direction:column;align-items:center}.container[_ngcontent-%COMP%]   .card-empty[_ngcontent-%COMP%]{height:20vh;text-align:center}.container[_ngcontent-%COMP%]   .card-empty[_ngcontent-%COMP%]   mat-card-actions[_ngcontent-%COMP%]{justify-content:center}.container[_ngcontent-%COMP%]   .btn-back[_ngcontent-%COMP%]{position:fixed;bottom:50px;right:30px;font-size:30px}@media only screen and (min-width: 600px) and (max-width: 1024px){.container[_ngcontent-%COMP%]{flex-direction:row;flex-wrap:wrap;justify-content:center}}@media only screen and (min-width: 1025px){.container[_ngcontent-%COMP%]{flex-direction:row;flex-wrap:wrap;justify-content:center}}"]});let t=e;return t})();export{tt as WatchListComponent};