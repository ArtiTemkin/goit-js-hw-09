!function(){function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},t={},i=n.parcelRequired7c6;null==i&&((i=function(e){if(e in o)return o[e].exports;if(e in t){var n=t[e];delete t[e];var i={id:e,exports:{}};return o[e]=i,n.call(i.exports,i,i.exports),i.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,n){t[e]=n},n.parcelRequired7c6=i);var a=i("iU1Pc"),u=document.querySelector("form"),r=u.querySelector('input[name="delay"]'),l=document.querySelector('input[name="step"]'),c=document.querySelector('input[name="amount"]');function d(n){e(a).Notify.success("✅ Fulfilled promise ".concat(n.position," in ").concat(n.delay,"ms"))}function f(n){e(a).Notify.failure("❌ Rejected promise ".concat(n.position," in ").concat(n.delay,"ms"))}u.addEventListener("submit",(function(e){e.preventDefault(),(n=1,o=r.value,t=n,new Promise((function(e,n){setTimeout((function(){Math.random()>.3?e({position:t,delay:o}):n({position:t,delay:o})}),o)}))).then((function(e){d({position:e.position,delay:e.delay})})).catch((function(e){f({position:e.position,delay:e.delay})})).finally((function(){var e=2,n=Number(r.value),o=Number(l.value)+n,t=setInterval((function(){Math.random()>.3?d({position:e,delay:o}):f({position:e,delay:o}),o+=Number(l.value),e++>=c.value&&window.clearInterval(t)}),Number(l.value))}));var n,o,t}))}();
//# sourceMappingURL=03-promises.547acef6.js.map
