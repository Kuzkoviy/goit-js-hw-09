import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */const t=document.querySelector(".feedback-form"),o=t.elements.email,r=t.elements.message,m="feedback-form-state";let e={email:"",message:""};l();t.addEventListener("input",()=>{e={email:o.value.trim(),message:r.value.trim()},localStorage.setItem(m,JSON.stringify(e))});t.addEventListener("submit",a=>{a.preventDefault(),o.value.trim()&&r.value.trim()&&(console.log(JSON.parse(localStorage.getItem(m))),localStorage.removeItem(m),t.reset())});function l(){const a=localStorage.getItem(m);a&&(e=JSON.parse(a),o.value=e.email,r.value=e.message)}
//# sourceMappingURL=commonHelpers2.js.map
