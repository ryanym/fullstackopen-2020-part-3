(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{14:function(e,n,t){e.exports=t(37)},19:function(e,n,t){},37:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),o=t(13),c=t.n(o),l=(t(19),t(2)),u=function(e){var n=e.addPerson,t=e.newName,a=e.handleNameChange,o=e.newNumber,c=e.handleNumberChange;return r.a.createElement("div",null,r.a.createElement("form",{onSubmit:n},r.a.createElement("div",null,"name: ",r.a.createElement("input",{value:t,onChange:a})),r.a.createElement("div",null,"number: ",r.a.createElement("input",{value:o,onChange:c})),r.a.createElement("div",null,r.a.createElement("button",{type:"submit"},"add"))))},i=function(e){var n=e.persons,t=e.handleDelete;return r.a.createElement("div",null,r.a.createElement("table",null,r.a.createElement("tbody",null,n.map((function(e){return r.a.createElement("tr",{key:e.name},r.a.createElement("td",null," ",e.name," "),r.a.createElement("td",null,"  ",e.number," "),r.a.createElement("td",null," ",r.a.createElement("button",{onClick:function(){return t(e)}}," delete ")," "))})))))},m=function(e){var n=e.newFilter,t=e.handleFilterChange;return r.a.createElement("div",null,r.a.createElement("form",null,r.a.createElement("div",null,"filter shown with: ",r.a.createElement("input",{value:n,onChange:t}))))},d=function(e){var n=e.name,t=e.status,a={color:"red",fontSize:20,backgroundColor:"lightgrey",borderStyle:"solid",border:"5px solid red",padding:10,marginBottom:10,borderRadius:5},o="Added ".concat(n),c="Information of ".concat(n," has already been removed from server"),l="".concat(n);return 1===t?r.a.createElement("p",{style:a}," ",l," "):2===t?r.a.createElement("p",{style:a}," ",c," "):0===t?r.a.createElement("p",{style:{color:"green",fontSize:20,backgroundColor:"lightgrey",border:"5px solid green",padding:10,marginBottom:10,borderRadius:5}}," ",o," "):null},s=t(3),f=t.n(s),h="/api/persons",b=function(){return f.a.get(h).then((function(e){return e.data}))},E=function(e){return f.a.post(h,e).then((function(e){return e.data}))},p=function(e,n){return f.a.put("".concat(h,"/").concat(e),n).then((function(e){return e.data}))},g=function(e){return f.a.delete("".concat(h,"/").concat(e)).then((function(e){return e.data}))},v=function(){var e=Object(a.useState)([]),n=Object(l.a)(e,2),t=n[0],o=n[1],c=Object(a.useState)(""),s=Object(l.a)(c,2),f=s[0],h=s[1],v=Object(a.useState)(""),w=Object(l.a)(v,2),C=w[0],j=w[1],y=Object(a.useState)(""),O=Object(l.a)(y,2),k=O[0],S=O[1],N=Object(a.useState)(-1),B=Object(l.a)(N,2),D=B[0],F=B[1],x=Object(a.useState)(""),P=Object(l.a)(x,2),z=P[0],A=P[1];Object(a.useEffect)((function(){b().then((function(e){o(e)}))}),[]);var I=k?t.filter((function(e){return-1!==e.name.toLowerCase().search(k.toLowerCase())})):t;return r.a.createElement("div",null,r.a.createElement("h2",null,"Phonebook"),r.a.createElement(d,{name:z,status:D}),r.a.createElement(m,{newFilter:k,handleFilterChange:function(e){S(e.target.value)}}),r.a.createElement("h3",null,"Add a new"),r.a.createElement(u,{addPerson:function(e){e.preventDefault();var n={name:f,number:C},a=t.find((function(e){return e.name===n.name}));void 0===a?E(n).then((function(e){o(t.concat(e)),F(0),A(n.name)})).catch((function(e){F(1),A(e.response.data.error)})):window.confirm("".concat(n.name," is already added to phonebook, replace old number with a new one?"))&&p(a.id,n).then((function(e){o(t.map((function(n){return n.id===e.id?e:n})))})).catch((function(e){console.log(e),F(1),A(e.response.data.error)}));h(""),j(""),setTimeout((function(){F(-1),A("")}),3e3)},newName:f,handleNameChange:function(e){h(e.target.value)},newNumber:C,handleNumberChange:function(e){j(e.target.value)}}),r.a.createElement("h3",null,"Numbers"),r.a.createElement(i,{persons:I,handleDelete:function(e){return function(e){window.confirm("Delete ".concat(e.name))&&(g(e.id).then((function(){o(t.filter((function(n){return n.id!==e.id})))})).catch((function(n){F(2),A(e.name)})),h(""),j(""),setTimeout((function(){F(-1),A("")}),3e3))}(e)}}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(v,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[14,1,2]]]);
//# sourceMappingURL=main.2296ca37.chunk.js.map