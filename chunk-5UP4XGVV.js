import{i as h,x as E,y}from"./chunk-5KXX2KWJ.js";import"./chunk-QSB7XY46.js";import{Db as i,Eb as c,Na as x,Pa as r,Y as p,Za as f,da as s,ea as d,ib as u,mb as _,nb as g,ob as v,pb as t,qb as n,rb as C,tb as S,vb as b,wb as m}from"./chunk-3FORFANY.js";function w(a,l){if(a&1){let e=S();t(0,"div",1),C(1,"img",2),t(2,"div",3)(3,"h2",4),i(4),n(),t(5,"p",5),i(6,"REF. NUMBER: "),t(7,"span",4),i(8),n()(),t(9,"p"),i(10,"Price: "),t(11,"span",4),i(12),n(),i(13," EUR "),t(14,"button",6),b("click",function(){let P=s(e).$implicit,k=m();return d(k.cart.remove(P))}),t(15,"mat-icon"),i(16,"remove_shopping_cart"),n(),i(17," Remove "),n()()()()}if(a&2){let e=l.$implicit,o=m();r(),u("src",o.baseUrl+e.photoSrc,x)("alt",e.photoAlt),r(3),c(e.title),r(4),c(e.code),r(4),c(e.price)}}var I=class a{baseUrl="https://katalog.tecline.com.pl/en/";cart=p(h);static \u0275fac=function(e){return new(e||a)};static \u0275cmp=f({type:a,selectors:[["app-cart"]],decls:4,vars:0,consts:[[1,"font-bold","my-9","text-xl"],[1,"flex","gap-4","mb-4","w-full"],[1,"w-[100px]","h-[100px]",3,"src","alt"],[1,"flex-auto"],[1,"font-bold"],[1,"my-2"],["mat-stroked-button","",1,"float-right",3,"click"]],template:function(e,o){e&1&&(t(0,"h1",0),i(1,"Your Order"),n(),g(2,w,18,5,"div",1,_)),e&2&&(r(2),v(o.cart.products()))},dependencies:[y,E],encapsulation:2})};export{I as CartPage};
