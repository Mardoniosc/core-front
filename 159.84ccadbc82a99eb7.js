"use strict";(self.webpackChunkstandart=self.webpackChunkstandart||[]).push([[159],{7159:(te,m,i)=>{i.r(m),i.d(m,{LogModule:()=>oe});var r=i(4666),v=i(4466),C=i(9706),p=i(58),e=i(2560),_=i(8280);let A=(()=>{class o extends _.e{constructor(t){super("/historicoacesso",t),this.injector=t}}return o.\u0275fac=function(t){return new(t||o)(e.LFG(e.zs3))},o.\u0275prov=e.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})();var n=i(4410),d=i(6060),u=i(6659),f=i(6714),g=i(2802);function Z(o,a){1&o&&(e.TgZ(0,"mat-header-cell"),e._uU(1," C\xf3digo "),e.qZA())}function T(o,a){if(1&o&&(e.TgZ(0,"mat-cell"),e._uU(1),e.qZA()),2&o){const t=a.$implicit;e.xp6(1),e.hij(" ",t.id," ")}}function w(o,a){1&o&&(e.TgZ(0,"mat-header-cell"),e._uU(1," Data Acesso "),e.qZA())}function N(o,a){if(1&o&&(e.TgZ(0,"mat-cell"),e._uU(1),e.ALo(2,"date"),e.qZA()),2&o){const t=a.$implicit;e.xp6(1),e.hij(" ",e.xi3(2,1,t.dataAcesso,"d/MM/Y")," ")}}function Y(o,a){1&o&&(e.TgZ(0,"mat-header-cell"),e._uU(1," Usu\xe1rio "),e.qZA())}function H(o,a){if(1&o&&(e.TgZ(0,"mat-cell"),e._uU(1),e.qZA()),2&o){const t=a.$implicit;e.xp6(1),e.hij(" ",t.usuarioNome," ")}}function D(o,a){1&o&&(e.TgZ(0,"mat-header-cell"),e._uU(1," IP Origem "),e.qZA())}function U(o,a){if(1&o&&(e.TgZ(0,"mat-cell"),e._uU(1),e.qZA()),2&o){const t=a.$implicit;e.xp6(1),e.hij(" ",t.loginIp?t.loginIp:"0.0.0.0"," ")}}function Q(o,a){1&o&&e._UZ(0,"mat-header-row")}function S(o,a){1&o&&e._UZ(0,"mat-row")}const h=function(){return["id","dataAcesso","usuarioNome","loginIp"]};function q(o,a){if(1&o&&(e.TgZ(0,"div",1)(1,"mat-table",6),e.ynx(2,7),e.YNc(3,Z,2,0,"mat-header-cell",8),e.YNc(4,T,2,1,"mat-cell",9),e.BQk(),e.ynx(5,10),e.YNc(6,w,2,0,"mat-header-cell",8),e.YNc(7,N,3,4,"mat-cell",9),e.BQk(),e.ynx(8,11),e.YNc(9,Y,2,0,"mat-header-cell",8),e.YNc(10,H,2,1,"mat-cell",9),e.BQk(),e.ynx(11,12),e.YNc(12,D,2,0,"mat-header-cell",8),e.YNc(13,U,2,1,"mat-cell",9),e.BQk(),e.YNc(14,Q,1,0,"mat-header-row",13),e.YNc(15,S,1,0,"mat-row",14),e.qZA()()),2&o){const t=e.oxw();e.xp6(1),e.Q6J("dataSource",t.resources),e.xp6(13),e.Q6J("matHeaderRowDef",e.DdM(3,h)),e.xp6(1),e.Q6J("matRowDefColumns",e.DdM(4,h))}}function y(o,a){1&o&&e._UZ(0,"app-not-found-data",15)}function I(o,a){if(1&o){const t=e.EpF();e.TgZ(0,"div",16)(1,"mat-paginator",17),e.NdJ("page",function(s){e.CHM(t);const l=e.oxw();return e.KtG(l.paginacao(s))}),e.qZA()()}if(2&o){const t=e.oxw();e.xp6(1),e.Q6J("length",t.length)("pageSize",t.pageSize)("pageSizeOptions",t.pageSizeOptions)}}let J=(()=>{class o extends p.d{constructor(t,c){super(t,c),this.injector=t,this.acessoService=c}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(e.zs3),e.Y36(A))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-acesso"]],features:[e.qOj],decls:6,vars:5,consts:[[1,"absolute","inset-0","flex","flex-col","min-w-0","overflow-hidden","bg-card","dark:bg-transparent"],["cdkScrollable","",1,"flex","flex-col","flex-auto","min-w-0","overflow-y-auto"],["page-title","Logs Acesso","placeholder-text","Buscar por nome",3,"show-button","show-search","pesquisar"],["class","flex flex-col flex-auto min-w-0 overflow-y-auto","cdkScrollable","",4,"ngIf"],["class","h-full","mensagem","Nenhum registro de perfils encontrado!",4,"ngIf"],["class","flex flex-0 flex-col",4,"ngIf"],[3,"dataSource"],["matColumnDef","id"],[4,"matHeaderCellDef"],[4,"matCellDef"],["matColumnDef","dataAcesso",1,"cursor-pointer"],["matColumnDef","usuarioNome",1,"cursor-pointer"],["matColumnDef","loginIp",1,"cursor-pointer"],[4,"matHeaderRowDef"],[4,"matRowDef","matRowDefColumns"],["mensagem","Nenhum registro de perfils encontrado!",1,"h-full"],[1,"flex","flex-0","flex-col"],["aria-label","Select page",1,"flex","justify-end","border-t",3,"length","pageSize","pageSizeOptions","page"]],template:function(t,c){1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"app-page-header",2),e.NdJ("pesquisar",function(l){return c.filtrarResource(l)}),e.qZA(),e.YNc(3,q,16,5,"div",3),e.YNc(4,y,1,0,"app-not-found-data",4),e.qZA(),e.YNc(5,I,2,3,"div",5),e.qZA()),2&t&&(e.xp6(2),e.Q6J("show-button",!1)("show-search",!1),e.xp6(1),e.Q6J("ngIf",c.length>0),e.xp6(1),e.Q6J("ngIf",c.length<=0),e.xp6(1),e.Q6J("ngIf",c.length>0))},dependencies:[r.O5,n.BZ,n.fO,n.as,n.w1,n.Dz,n.nj,n.ge,n.ev,n.XQ,n.Gk,d.NW,u.PQ,f.J,g.q,r.uU]}),o})(),z=(()=>{class o extends _.e{constructor(t){super("/historicoslog",t),this.injector=t}}return o.\u0275fac=function(t){return new(t||o)(e.LFG(e.zs3))},o.\u0275prov=e.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})();function b(o,a){1&o&&(e.TgZ(0,"mat-header-cell"),e._uU(1," C\xf3digo "),e.qZA())}function j(o,a){if(1&o&&(e.TgZ(0,"mat-cell"),e._uU(1),e.qZA()),2&o){const t=a.$implicit;e.xp6(1),e.hij(" ",t.id," ")}}function B(o,a){1&o&&(e.TgZ(0,"mat-header-cell"),e._uU(1," Data Acesso "),e.qZA())}function O(o,a){if(1&o&&(e.TgZ(0,"mat-cell"),e._uU(1),e.ALo(2,"date"),e.qZA()),2&o){const t=a.$implicit;e.xp6(1),e.hij(" ",e.xi3(2,1,t.dataAcesso,"d/MM/Y")," ")}}function M(o,a){1&o&&(e.TgZ(0,"mat-header-cell"),e._uU(1," Usu\xe1rio "),e.qZA())}function k(o,a){if(1&o&&(e.TgZ(0,"mat-cell"),e._uU(1),e.qZA()),2&o){const t=a.$implicit;e.xp6(1),e.hij(" ",t.usuarioNome," ")}}function F(o,a){1&o&&(e.TgZ(0,"mat-header-cell"),e._uU(1," IP Origem "),e.qZA())}function R(o,a){if(1&o&&(e.TgZ(0,"mat-cell"),e._uU(1),e.qZA()),2&o){const t=a.$implicit;e.xp6(1),e.hij(" ",t.loginIp?t.loginIp:"0.0.0.0"," ")}}function $(o,a){1&o&&(e.TgZ(0,"mat-header-cell"),e._uU(1," Opera\xe7\xe3o "),e.qZA())}function L(o,a){if(1&o&&(e.TgZ(0,"mat-cell"),e._uU(1),e.qZA()),2&o){const t=a.$implicit;e.xp6(1),e.hij(" ",t.operacao," ")}}function E(o,a){1&o&&(e.TgZ(0,"mat-header-cell"),e._uU(1," Tabela "),e.qZA())}function G(o,a){if(1&o&&(e.TgZ(0,"mat-cell"),e._uU(1),e.qZA()),2&o){const t=a.$implicit;e.xp6(1),e.hij(" ",t.tabela," ")}}function P(o,a){1&o&&e._UZ(0,"mat-header-row")}function X(o,a){1&o&&e._UZ(0,"mat-row")}const x=function(){return["id","dataAcesso","usuarioNome","loginIp","operacao","tabela"]};function K(o,a){if(1&o&&(e.TgZ(0,"div",1)(1,"mat-table",6),e.ynx(2,7),e.YNc(3,b,2,0,"mat-header-cell",8),e.YNc(4,j,2,1,"mat-cell",9),e.BQk(),e.ynx(5,10),e.YNc(6,B,2,0,"mat-header-cell",8),e.YNc(7,O,3,4,"mat-cell",9),e.BQk(),e.ynx(8,11),e.YNc(9,M,2,0,"mat-header-cell",8),e.YNc(10,k,2,1,"mat-cell",9),e.BQk(),e.ynx(11,12),e.YNc(12,F,2,0,"mat-header-cell",8),e.YNc(13,R,2,1,"mat-cell",9),e.BQk(),e.ynx(14,13),e.YNc(15,$,2,0,"mat-header-cell",8),e.YNc(16,L,2,1,"mat-cell",9),e.BQk(),e.ynx(17,14),e.YNc(18,E,2,0,"mat-header-cell",8),e.YNc(19,G,2,1,"mat-cell",9),e.BQk(),e.YNc(20,P,1,0,"mat-header-row",15),e.YNc(21,X,1,0,"mat-row",16),e.qZA()()),2&o){const t=e.oxw();e.xp6(1),e.Q6J("dataSource",t.resources),e.xp6(19),e.Q6J("matHeaderRowDef",e.DdM(3,x)),e.xp6(1),e.Q6J("matRowDefColumns",e.DdM(4,x))}}function W(o,a){1&o&&e._UZ(0,"app-not-found-data",17)}function V(o,a){if(1&o){const t=e.EpF();e.TgZ(0,"div",18)(1,"mat-paginator",19),e.NdJ("page",function(s){e.CHM(t);const l=e.oxw();return e.KtG(l.paginacao(s))}),e.qZA()()}if(2&o){const t=e.oxw();e.xp6(1),e.Q6J("length",t.length)("pageSize",t.pageSize)("pageSizeOptions",t.pageSizeOptions)}}const ee=[{path:"acesso",component:J},{path:"historico",component:(()=>{class o extends p.d{constructor(t,c){super(t,c),this.injector=t,this.historicoService=c}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(e.zs3),e.Y36(z))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-historico"]],features:[e.qOj],decls:6,vars:5,consts:[[1,"absolute","inset-0","flex","flex-col","min-w-0","overflow-hidden","bg-card","dark:bg-transparent"],["cdkScrollable","",1,"flex","flex-col","flex-auto","min-w-0","overflow-y-auto"],["page-title","Hit\xf3rico Usu\xe1rio","placeholder-text","Buscar por nome",3,"show-button","show-search","pesquisar"],["class","flex flex-col flex-auto min-w-0 overflow-y-auto","cdkScrollable","",4,"ngIf"],["class","h-full","mensagem","Nenhum registro de perfils encontrado!",4,"ngIf"],["class","flex flex-0 flex-col",4,"ngIf"],[3,"dataSource"],["matColumnDef","id"],[4,"matHeaderCellDef"],[4,"matCellDef"],["matColumnDef","dataAcesso",1,"cursor-pointer"],["matColumnDef","usuarioNome",1,"cursor-pointer"],["matColumnDef","loginIp",1,"cursor-pointer"],["matColumnDef","operacao",1,"cursor-pointer"],["matColumnDef","tabela",1,"cursor-pointer"],[4,"matHeaderRowDef"],[4,"matRowDef","matRowDefColumns"],["mensagem","Nenhum registro de perfils encontrado!",1,"h-full"],[1,"flex","flex-0","flex-col"],["aria-label","Select page",1,"flex","justify-end","border-t",3,"length","pageSize","pageSizeOptions","page"]],template:function(t,c){1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"app-page-header",2),e.NdJ("pesquisar",function(l){return c.filtrarResource(l)}),e.qZA(),e.YNc(3,K,22,5,"div",3),e.YNc(4,W,1,0,"app-not-found-data",4),e.qZA(),e.YNc(5,V,2,3,"div",5),e.qZA()),2&t&&(e.xp6(2),e.Q6J("show-button",!1)("show-search",!1),e.xp6(1),e.Q6J("ngIf",c.length>0),e.xp6(1),e.Q6J("ngIf",c.length<=0),e.xp6(1),e.Q6J("ngIf",c.length>0))},dependencies:[r.O5,n.BZ,n.fO,n.as,n.w1,n.Dz,n.nj,n.ge,n.ev,n.XQ,n.Gk,d.NW,u.PQ,f.J,g.q,r.uU]}),o})()}];let oe=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[r.ez,C.Bz.forChild(ee),v.m]}),o})()}}]);
//# sourceMappingURL=159.84ccadbc82a99eb7.js.map