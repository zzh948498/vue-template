(function(){"use strict";const o="pong",t="production";let s=1;self.onmessage=e=>{e.data==="ping"?self.postMessage({msg:`${o} - ${s++}`,mode:t}):e.data==="clear"&&(s=1,self.postMessage({msg:null,mode:null}))}})();