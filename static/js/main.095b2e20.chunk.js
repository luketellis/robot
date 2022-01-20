(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],[,,,,,,,,,,,,function(t,e,r){},,,,,,,,,function(t,e,r){},function(t,e,r){},,function(t,e,r){},function(t,e,r){},function(t,e,r){},function(t,e,r){},function(t,e,r){},function(t,e,r){},function(t,e,r){"use strict";r.r(e);var n=r(2),o=r.n(n),c=r(13),i=r.n(c),a=(r(21),r(3)),s=r(8),d=r(9),b=(r(12),r(7)),u=(r(22),r(1)),l=["label"];var j=function(t){var e=t.label,r=void 0===e?"I am a button":e,n=Object(b.a)(t,l);return Object(u.jsx)("button",Object(a.a)(Object(a.a)({className:""},n),{},{children:r}))},h=(r(24),r(25),r(26),r(14));function f(t){var e,r=t.coordinateText,n=t.robot,o=t.setActive;return Object(u.jsxs)("span",{className:"gridcell",children:[r,n&&Object(u.jsx)(h.a,{onClick:function(){return o(n.id,"active",!0)},className:"".concat((e=n.direction,e.toLowerCase())," robot robot").concat(n.id)})]})}var O="The active robot is now robot ",v="The proposed grid cell is already occupied",w="The argument passed in appears to be incorrect",T='DIRECTIONS can only be "NORTH", "SOUTH", "EAST" or "WEST"',x='"PLACE", "MOVE", "LEFT", "RIGHT", "REPORT" are the only valid commands',p='PLACE commands should be in the following format "PLACE 1,2,NORTH"',E="You cannot create any more robots",m="There is no active robot",y="Instruction would result in the robot being outside of the grid";var g=new function(){this.num_rows=5,this.num_columns=5,this.max_robots=5},A=function(t){return!(t.x<0||t.y<0)&&!(t.x>g.num_columns-1||t.y>g.num_rows-1)},R=function(t,e){return t.filter((function(t){return t.coordinate.x==e.x&&t.coordinate.y==e.y})).length};function S(t){for(var e=t.robotArray,r=void 0===e?[]:e,n=t.rowNumber,o=t.setActive,c=[],i=function(t,e){var n=!1;return r.forEach((function(r){r.coordinate.x===t&&r.coordinate.y===e&&(n=r)})),n},a=0;a<g.num_columns;a++)c.push(Object(u.jsx)(f,{coordinateText:"".concat(a,", ").concat(n),robot:i(a,n),setActive:o},"".concat(a,", ").concat(n)));return Object(u.jsx)("div",{className:"row",children:c})}function N(t){for(var e=t.robotArray,r=t.setActive,n=[],o=g.num_rows-1;o>-1;o--)n.push(Object(u.jsx)(S,{rowNumber:o,robotArray:e,setActive:r},o));return Object(u.jsx)("div",{className:"grid",children:n})}r(27);var C=function(t){var e=t.headerRowType,r=void 0===e?"false":e,n=t.data;return Object(u.jsx)(o.a.Fragment,{children:r?Object(u.jsx)("th",{className:"tableHeader",children:n}):Object(u.jsx)("td",{className:"tableData",children:n})})},H=(r(28),r(15)),k=r(16);var I=function(t){var e=t.tableData,r=void 0===e?[]:e,n=t.tableHeadings,o=void 0===n?[]:n,c=t.setActive,i=o.map((function(t,e){return Object(u.jsx)(C,{data:t,headerRowType:!0},e)})),a=r.map((function(t,e){return Object(u.jsxs)("tr",{className:"robot".concat(t.id),children:[Object(u.jsx)(C,{data:t.id,headerRowType:!1},"".concat(t.id,"-id")),Object(u.jsx)(C,{data:JSON.stringify(t.coordinate),headerRowType:!1},"".concat(t.id,"-coordinate")),Object(u.jsx)(C,{data:t.direction,headerRowType:!1},"".concat(t.id,"-direction")),Object(u.jsx)(C,{data:t.active?Object(u.jsx)(H.a,{}):Object(u.jsx)(k.a,{onClick:function(){return c(t.id,"active",!0)}}),headerRowType:!1},"".concat(t.id,"-active"))]},e)}));return Object(u.jsxs)("table",{className:"table",children:[Object(u.jsx)("thead",{children:Object(u.jsx)("tr",{children:i})}),Object(u.jsx)("tbody",{className:"table",children:a})]})},L=["helperText"];var U=function(t){var e=t.helperText,r=Object(b.a)(t,L);return Object(u.jsxs)("span",{children:[Object(u.jsx)("span",{className:"",children:Object(u.jsx)("input",Object(a.a)({},r))}),e&&Object(u.jsx)("div",{children:Object(u.jsx)("span",{children:e})})]})},P=(r(29),Object.freeze({NORTH:"NORTH",EAST:"EAST",SOUTH:"SOUTH",WEST:"WEST"}));function F(t,e,r,n){this.id=t,this.coordinate=e,this.direction=r,this.active=n}var W=function(t){var e=t.activeRobot,r=t.displayToast,n=t.updateActiveRobot,o=t.robotArray,c=function(){if(!e)throw new Error(m);return!0};return Object(u.jsxs)("div",{className:"robotMovementBar",children:[Object(u.jsx)("h2",{children:"Active Robot Commands"}),Object(u.jsx)(j,{label:"Move Robot Forward",onClick:function(){try{c();var t=function(t){if(!t)throw new Error(m);if(!t.direction)throw new Error(m);var e=Object(a.a)({},t.coordinate);switch(t.direction){case P.NORTH:e.y++;break;case P.EAST:e.x++;break;case P.SOUTH:e.y--;break;case P.WEST:e.x--;break;default:throw new Error(T)}if(!A(e))throw new Error(y);return e}(e);if(R(o,t))throw new Error(v);e.coordinate=t,n(e.id,"coordinate",e.coordinate)}catch(i){r(i.message)}}}),Object(u.jsx)(j,{label:"Turn Robot Left",onClick:function(){try{c(),function(t){if(!t)throw new Error("Current robot is not defined");switch(t.direction){case P.NORTH:t.direction=P.WEST;break;case P.EAST:t.direction=P.NORTH;break;case P.SOUTH:t.direction=P.EAST;break;case P.WEST:t.direction=P.SOUTH;break;default:throw new Error("Active robot direction is not defined")}}(e),n(e.id,"direction",e.direction)}catch(t){r(t.message)}}}),Object(u.jsx)(j,{label:"Turn Robot Right",onClick:function(){try{c(),function(t){if(!t)throw new Error("Current robot is not defined");switch(t.direction){case P.NORTH:t.direction=P.EAST;break;case P.EAST:t.direction=P.SOUTH;break;case P.SOUTH:t.direction=P.WEST;break;case P.WEST:t.direction=P.NORTH;break;default:throw new Error("Current direction is not defined")}}(e),n(e.id,"direction",e.direction)}catch(t){r(t.message)}}})]})};var _=function(t,e){this.x=t,this.y=e},D=(Object.freeze({PLACE:1,MOVE:2,LEFT:3,RIGHT:4,REPORT:5}),function(t,e){var r=t.split(",");if(3!==r.length)throw new Error(p);if(r[0].isNan||r[1].isNan)throw new Error(p);var n=new _(r[0],r[1]);if(!A(n))throw new Error(y);if(R(e,n))throw new Error(v);if(!(r[2].toUpperCase()in P))throw new Error(p);return!0}),M=r(11);var B=function(){var t=Object(n.useState)([]),e=Object(d.a)(t,2),r=e[0],o=e[1],c=Object(n.useState)(""),i=Object(d.a)(c,2),b=i[0],l=i[1],h=Object(n.useState)(""),f=Object(d.a)(h,2),v=f[0],T=f[1],m=function(t,e,n){try{var c=Object(s.a)(r),i=c.filter((function(e){return e.id===t})),d=c.filter((function(e){return e.id!==t}));"active"===e&&d.forEach((function(t){t.active=!1}));var b=Object(a.a)({},i[0]);b[e]=n;var u=[].concat(Object(s.a)(d),[b]);u.sort((function(t,e){return t.id-e.id})),o(u),"active"===e&&v.id!==t&&y(O+t,"\u2714\ufe0f"),T(b)}catch(l){return void y(l.message)}},y=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"\u26a0\ufe0f";M.b.error(t,{icon:e})};return Object(u.jsx)("div",{className:"App",children:Object(u.jsxs)("header",{className:"App-header",children:[Object(u.jsx)("div",{children:Object(u.jsx)(M.a,{toastOptions:{duration:2e3}})}),Object(u.jsx)("h1",{children:"Robot"}),Object(u.jsx)(I,{tableHeadings:["ID","Coordinate","Direction","Active"],tableData:r,setActive:m}),Object(u.jsx)(U,{helperText:"",placeholder:"Enter Starting Instructions",onChange:function(t){l(t.target.value)},value:b}),Object(u.jsx)(j,{label:"Create New Robot",onClick:function(){var t;try{!function(t){if(t>=g.max_robots)throw new Error(E)}(r.length),function(t,e){if(!t||"string"!==typeof t)throw new Error(w);var r=t.split(" ");if(r.length>2)throw new Error(x);if(2!==r.length||"PLACE"!==r[0].toUpperCase())throw new Error(p);D(r[1],e)}(b,r),t=function(t,e,r){var n=t.split(" ");t.split(" ");var o=n[1].split(",");return new F(e,new _(parseInt(o[0]),parseInt(o[1])),o[2],r)}(b,r.length+1,!v),o((function(e){return[].concat(Object(s.a)(e),[t])})),l("")}catch(e){return void y(e.message)}!v&&T(t)},disabled:!b}),Object(u.jsx)(W,{activeRobot:v,displayToast:y,updateActiveRobot:m,robotArray:r}),Object(u.jsx)(N,{robotArray:r,setActive:m})]})})},J=function(t){t&&t instanceof Function&&r.e(3).then(r.bind(null,31)).then((function(e){var r=e.getCLS,n=e.getFID,o=e.getFCP,c=e.getLCP,i=e.getTTFB;r(t),n(t),o(t),c(t),i(t)}))};i.a.render(Object(u.jsx)(o.a.StrictMode,{children:Object(u.jsx)(B,{})}),document.getElementById("root")),J()}],[[30,1,2]]]);
//# sourceMappingURL=main.095b2e20.chunk.js.map