function lzw_encode(r){for(var n,t={},e=(r+"").split(""),o=[],h=e[0],l=256,a=1;a<e.length;a++)null!=t[h+(n=e[a])]?h+=n:(o.push(h.length>1?t[h]:h.charCodeAt(0)),t[h+n]=l,l++,h=n);o.push(h.length>1?t[h]:h.charCodeAt(0));for(a=0;a<o.length;a++)o[a]=String.fromCharCode(o[a]);return o.join("")}function lzw_decode(r){for(var n,t={},e=(r+"").split(""),o=e[0],h=o,l=[o],a=256,c=1;c<e.length;c++){var u=e[c].charCodeAt(0);n=u<256?e[c]:t[u]?t[u]:h+o,l.push(n),o=n.charAt(0),t[a]=h+o,a++,h=n}return l.join("")}
