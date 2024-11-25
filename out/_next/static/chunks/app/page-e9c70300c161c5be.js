(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[974],{3100:(e,s,a)=>{Promise.resolve().then(a.bind(a,5078))},5078:(e,s,a)=>{"use strict";a.r(s),a.d(s,{default:()=>M});var l=a(5155),t=a(2115),i=a(1551),n=a(3463),r=a(9795);function c(){for(var e=arguments.length,s=Array(e),a=0;a<e;a++)s[a]=arguments[a];return(0,r.QP)((0,n.$)(s))}let d=i.bL,o=t.forwardRef((e,s)=>{let{className:a,...t}=e;return(0,l.jsx)(i.B8,{ref:s,className:c("inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground",a),...t})});o.displayName=i.B8.displayName;let h=t.forwardRef((e,s)=>{let{className:a,...t}=e;return(0,l.jsx)(i.l9,{ref:s,className:c("inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm",a),...t})});h.displayName=i.l9.displayName;let x=t.forwardRef((e,s)=>{let{className:a,...t}=e;return(0,l.jsx)(i.UC,{ref:s,className:c("mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",a),...t})});x.displayName=i.UC.displayName;let m=t.forwardRef((e,s)=>{let{className:a,...t}=e;return(0,l.jsx)("div",{ref:s,className:c("rounded-lg border bg-card text-card-foreground shadow-sm",a),...t})});m.displayName="Card";let u=t.forwardRef((e,s)=>{let{className:a,...t}=e;return(0,l.jsx)("div",{ref:s,className:c("flex flex-col space-y-1.5 p-6",a),...t})});u.displayName="CardHeader";let j=t.forwardRef((e,s)=>{let{className:a,...t}=e;return(0,l.jsx)("div",{ref:s,className:c("text-2xl font-semibold leading-none tracking-tight",a),...t})});j.displayName="CardTitle",t.forwardRef((e,s)=>{let{className:a,...t}=e;return(0,l.jsx)("div",{ref:s,className:c("text-sm text-muted-foreground",a),...t})}).displayName="CardDescription";let f=t.forwardRef((e,s)=>{let{className:a,...t}=e;return(0,l.jsx)("div",{ref:s,className:c("p-6 pt-0",a),...t})});f.displayName="CardContent",t.forwardRef((e,s)=>{let{className:a,...t}=e;return(0,l.jsx)("div",{ref:s,className:c("flex items-center p-6 pt-0",a),...t})}).displayName="CardFooter";var p=a(1214);let v=t.forwardRef((e,s)=>{let{className:a,...t}=e;return(0,l.jsxs)(p.bL,{ref:s,className:c("relative flex w-full touch-none select-none items-center",a),...t,children:[(0,l.jsx)(p.CC,{className:"relative h-2 w-full grow overflow-hidden rounded-full bg-secondary",children:(0,l.jsx)(p.Q6,{className:"absolute h-full bg-primary"})}),(0,l.jsx)(p.zi,{className:"block h-5 w-5 rounded-full border-2 border-primary bg-background ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"})]})});v.displayName=p.bL.displayName;let g=()=>{let e=(0,t.useRef)(null),s=(0,t.useRef)(null),a=(0,t.useRef)(0),[i,n]=(0,t.useState)(148),[r,c]=(0,t.useState)(.015),[d,o]=(0,t.useState)(6.6),[h,x]=(0,t.useState)(.017);return(0,t.useEffect)(()=>{let l=e.current,t=l.getContext("2d"),n=l.width,c=l.height,o=c/2,x=2*Math.PI/(Math.sqrt(d/h)/i),m=2*Math.PI*i,u=e=>{t.clearRect(0,0,n,c),t.strokeStyle="#e5e7eb",t.beginPath(),t.moveTo(0,o),t.lineTo(n,o),t.stroke(),t.beginPath(),t.strokeStyle="#3b82f6",t.lineWidth=2;for(let s=0;s<n;s++){let a=o+1e3*r*Math.sin(x*s-m*e);0===s?t.moveTo(s,a):t.lineTo(s,a)}t.stroke()},j=()=>{a.current+=.001,u(a.current),s.current=requestAnimationFrame(j)};return j(),()=>{s.current&&cancelAnimationFrame(s.current)}},[i,r,d,h]),(0,l.jsxs)(m,{children:[(0,l.jsx)(u,{children:(0,l.jsx)(j,{children:"Simulaci\xf3n de Oscilador"})}),(0,l.jsx)(f,{children:(0,l.jsxs)("div",{className:"space-y-6",children:[(0,l.jsx)("div",{className:"w-full bg-white rounded-lg overflow-hidden",children:(0,l.jsx)("canvas",{ref:e,width:800,height:200,className:"w-full"})}),(0,l.jsxs)("div",{className:"grid grid-cols-2 gap-6",children:[(0,l.jsxs)("div",{className:"space-y-2",children:[(0,l.jsxs)("div",{className:"flex justify-between",children:[(0,l.jsx)("span",{children:"Frecuencia:"}),(0,l.jsxs)("span",{children:[i," Hz"]})]}),(0,l.jsx)(v,{value:[i],onValueChange:e=>{let[s]=e;return n(s)},min:50,max:300,step:1})]}),(0,l.jsxs)("div",{className:"space-y-2",children:[(0,l.jsxs)("div",{className:"flex justify-between",children:[(0,l.jsx)("span",{children:"Amplitud:"}),(0,l.jsxs)("span",{children:[(1e3*r).toFixed(1)," mm"]})]}),(0,l.jsx)(v,{value:[1e3*r],onValueChange:e=>{let[s]=e;return c(s/1e3)},min:5,max:30,step:.1})]}),(0,l.jsxs)("div",{className:"space-y-2",children:[(0,l.jsxs)("div",{className:"flex justify-between",children:[(0,l.jsx)("span",{children:"Tensi\xf3n:"}),(0,l.jsxs)("span",{children:[d.toFixed(1)," N"]})]}),(0,l.jsx)(v,{value:[d],onValueChange:e=>{let[s]=e;return o(s)},min:1,max:20,step:.1})]}),(0,l.jsxs)("div",{className:"space-y-2",children:[(0,l.jsxs)("div",{className:"flex justify-between",children:[(0,l.jsx)("span",{children:"Densidad lineal:"}),(0,l.jsxs)("span",{children:[(1e3*h).toFixed(1)," g/m"]})]}),(0,l.jsx)(v,{value:[1e3*h],onValueChange:e=>{let[s]=e;return x(s/1e3)},min:5,max:50,step:.1})]})]}),(0,l.jsxs)("div",{className:"grid grid-cols-2 gap-4 bg-gray-50 p-4 rounded-lg text-sm",children:[(0,l.jsxs)("div",{className:"space-y-1",children:[(0,l.jsxs)("p",{className:"text-blue-600",children:["• Velocidad de propagaci\xf3n: ",Math.sqrt(d/h).toFixed(1)," m/s"]}),(0,l.jsxs)("p",{children:["• Longitud de onda: ",(Math.sqrt(d/h)/i).toFixed(2)," m"]}),(0,l.jsxs)("p",{children:["• Potencia transmitida: ",(.5*h*Math.pow(2*Math.PI*i,2)*Math.pow(r,2)*Math.sqrt(d/h)).toFixed(3)," W"]})]}),(0,l.jsxs)("div",{className:"space-y-1",children:[(0,l.jsxs)("p",{children:["• Frecuencia angular: ",(2*Math.PI*i).toFixed(1)," rad/s"]}),(0,l.jsxs)("p",{children:["• N\xfamero de onda: ",(2*Math.PI*i/Math.sqrt(d/h)).toFixed(2)," rad/m"]}),(0,l.jsxs)("p",{children:["• Energ\xeda: ",(.5*h*Math.pow(2*Math.PI*i,2)*Math.pow(r,2)*(Math.sqrt(d/h)/i)).toFixed(3)," J"]})]})]})]})})]})},b=()=>{let e=(0,t.useRef)(null),s=(0,t.useRef)(null),a=(0,t.useRef)(0),[i,n]=(0,t.useState)("particles"),[r]=(0,t.useState)(2),[c]=(0,t.useState)(.8);return(0,t.useEffect)(()=>{let l=e.current,t=l.getContext("2d"),i=l.width,n=l.height,r=n/2,c=e=>{t.clearRect(0,0,i,n),t.fillStyle="#000000",t.fillRect(0,0,i,n),t.fillStyle="#FFD700",t.beginPath(),t.arc(50,r,20,0,2*Math.PI),t.fill();for(let s=80;s<i;s+=20)for(let a=50;a<n-50;a+=20){let l=(Math.sin(Math.sqrt((s-50)**2+(a-r)**2)/50-e)+1)/2;t.fillStyle="rgb(".concat(Math.floor(255*l),", ").concat(Math.floor(255*l),", ").concat(Math.floor(255*l),")"),t.beginPath(),t.arc(s,a,3,0,2*Math.PI),t.fill()}},d=()=>{a.current+=.1,c(a.current),s.current=requestAnimationFrame(d)};return d(),()=>{s.current&&cancelAnimationFrame(s.current)}},[]),(0,l.jsxs)(m,{className:"w-full",children:[(0,l.jsx)(u,{children:(0,l.jsx)(j,{children:"Simulaci\xf3n de Ondas 2D"})}),(0,l.jsx)(f,{children:(0,l.jsxs)("div",{className:"space-y-6",children:[(0,l.jsx)("canvas",{ref:e,width:800,height:400,className:"bg-gray-900 rounded-lg w-full"}),(0,l.jsxs)("div",{className:"flex space-x-4",children:[(0,l.jsxs)("div",{children:[(0,l.jsx)("input",{type:"radio",id:"particles",name:"viewMode",value:"particles",checked:"particles"===i,onChange:e=>n(e.target.value),className:"mr-2"}),(0,l.jsx)("label",{htmlFor:"particles",children:"Part\xedculas"})]}),(0,l.jsxs)("div",{children:[(0,l.jsx)("input",{type:"radio",id:"waves",name:"viewMode",value:"waves",checked:"waves"===i,onChange:e=>n(e.target.value),className:"mr-2"}),(0,l.jsx)("label",{htmlFor:"waves",children:"Ondas"})]}),(0,l.jsxs)("div",{children:[(0,l.jsx)("input",{type:"radio",id:"both",name:"viewMode",value:"both",checked:"both"===i,onChange:e=>n(e.target.value),className:"mr-2"}),(0,l.jsx)("label",{htmlFor:"both",children:"Ambos"})]})]})]})})]})};a(1491);var N=a(3950);let y=()=>{let e=(0,t.useRef)(null),s=(0,t.useRef)(null),a=(0,t.useRef)(0),[i,n]=(0,t.useState)(.8),[r,c]=(0,t.useState)(2),[d,o]=(0,t.useState)(100),[h,x]=(0,t.useState)(10),[p,g]=(0,t.useState)(.01),[b,y]=(0,t.useState)(.01),[w,M]=(0,t.useState)("particles"),F=1/r,C=2*Math.PI*r,k=2*Math.PI/d,S=Math.sqrt(h/p),P=.5*p*Math.pow(C,2)*Math.pow(i,2)*d,I=P*r;return(0,t.useEffect)(()=>{let l=e.current,t=l.getContext("2d"),n=l.width,r=l.height,c=r/2,o=e=>{if(t.clearRect(0,0,n,r),t.fillStyle="#000000",t.fillRect(0,0,n,r),t.fillStyle="#FFD700",t.beginPath(),t.arc(50,c,20,0,2*Math.PI),t.fill(),"particles"===w||"both"===w)for(let s=80;s<n;s+=20)for(let a=50;a<r-50;a+=20){let l=Math.sqrt((s-50)**2+(a-c)**2),n=(i*Math.exp(-b*l)*Math.sin(k*l-C*e)+1)/2;t.fillStyle="rgb(".concat(Math.floor(255*n),", \n                               ").concat(Math.floor(255*n),", \n                               ").concat(Math.floor(255*n),")"),t.beginPath(),t.arc(s,a,3,0,2*Math.PI),t.fill()}if("waves"===w||"both"===w)for(let s=0;s<n;s+=d/4){let a=Math.abs(Math.sin(k*s-C*e));t.strokeStyle="rgba(0, 255, 255, ".concat(.5*a,")"),t.beginPath(),t.arc(50,c,s,0,2*Math.PI),t.stroke()}},h=()=>{a.current+=.02,o(a.current),s.current=requestAnimationFrame(h)};return h(),()=>{s.current&&cancelAnimationFrame(s.current)}},[i,r,d,b,w,k,C]),(0,l.jsxs)(m,{className:"w-full",children:[(0,l.jsx)(u,{children:(0,l.jsx)(j,{children:"Simulaci\xf3n Comprensiva de Ondas"})}),(0,l.jsx)(f,{children:(0,l.jsxs)("div",{className:"space-y-6",children:[(0,l.jsx)("canvas",{ref:e,width:800,height:400,className:"bg-gray-900 rounded-lg w-full"}),(0,l.jsx)("div",{className:"bg-gray-50 p-6 rounded-lg text-lg overflow-x-auto",children:(0,l.jsxs)("div",{className:"space-y-6",children:[(0,l.jsx)("div",{className:"mb-4",children:(0,l.jsx)(N.BlockMath,{math:"y(x,t) = ".concat(i.toFixed(2),"\\sin(").concat(k.toFixed(3),"x - ").concat(C.toFixed(2),"t)")})}),(0,l.jsx)("div",{className:"mb-6",children:(0,l.jsx)(N.BlockMath,{math:"\\begin{cases} \n                    k = \\frac{2\\pi}{\\lambda} = ".concat(k.toFixed(3)," \\text{ rad/m}\\\\[1em]\n                    \\omega = 2\\pi f = ").concat(C.toFixed(2)," \\text{ rad/s}\\\\[1em]\n                    v = \\sqrt{\\frac{T}{\\mu}} = ").concat(S.toFixed(2)," \\text{ m/s}\n                  \\end{cases}")})}),(0,l.jsx)("div",{className:"mb-4",children:(0,l.jsx)(N.BlockMath,{math:"E = \\frac{1}{2}\\mu\\omega^2A^2\\lambda = ".concat(P.toFixed(3)," \\text{ J}")})}),(0,l.jsxs)("div",{children:[(0,l.jsx)(N.BlockMath,{math:"\\frac{\\partial^2 y}{\\partial t^2} = \\frac{T}{\\mu}\\frac{\\partial^2 y}{\\partial x^2}"}),(0,l.jsxs)("div",{className:"text-sm text-gray-600 mt-2",children:["Ecuaci\xf3n diferencial de onda en una dimensi\xf3n, donde:",(0,l.jsxs)("ul",{className:"list-disc pl-5 mt-1",children:[(0,l.jsx)("li",{children:"T es la tensi\xf3n de la cuerda"}),(0,l.jsx)("li",{children:"μ es la densidad lineal de masa"}),(0,l.jsx)("li",{children:"∂\xb2y/∂t\xb2 es la aceleraci\xf3n transversal"}),(0,l.jsx)("li",{children:"∂\xb2y/∂x\xb2 es la curvatura de la cuerda"})]})]})]}),(0,l.jsx)("div",{className:"mt-4 pt-4 border-t border-gray-200",children:(0,l.jsx)(N.BlockMath,{math:"\\begin{aligned}\n                    v &= \\lambda f = \\frac{\\omega}{k} = ".concat(S.toFixed(2)," \\text{ m/s}\\\\[1em]\n                    T &= \\frac{1}{f} = ").concat(F.toFixed(3)," \\text{ s}\n                  \\end{aligned}")})})]})}),(0,l.jsxs)("div",{className:"grid grid-cols-2 gap-4",children:[(0,l.jsxs)("div",{className:"space-y-2",children:[(0,l.jsxs)("div",{className:"flex justify-between",children:[(0,l.jsxs)("span",{children:["Amplitud (",(0,l.jsx)(N.InlineMath,{math:"A"}),"):"]}),(0,l.jsxs)("span",{children:[i.toFixed(2)," m"]})]}),(0,l.jsx)(v,{value:[i],onValueChange:e=>{let[s]=e;return n(s)},min:.1,max:1,step:.1})]}),(0,l.jsxs)("div",{className:"space-y-2",children:[(0,l.jsxs)("div",{className:"flex justify-between",children:[(0,l.jsxs)("span",{children:["Frecuencia (",(0,l.jsx)(N.InlineMath,{math:"f"}),"):"]}),(0,l.jsxs)("span",{children:[r," Hz"]})]}),(0,l.jsx)(v,{value:[r],onValueChange:e=>{let[s]=e;return c(s)},min:.5,max:5,step:.1})]}),(0,l.jsxs)("div",{className:"space-y-2",children:[(0,l.jsxs)("div",{className:"flex justify-between",children:[(0,l.jsxs)("span",{children:["Longitud de onda (",(0,l.jsx)(N.InlineMath,{math:"\\lambda"}),"):"]}),(0,l.jsxs)("span",{children:[d," m"]})]}),(0,l.jsx)(v,{value:[d],onValueChange:e=>{let[s]=e;return o(s)},min:50,max:200,step:10})]}),(0,l.jsxs)("div",{className:"space-y-2",children:[(0,l.jsxs)("div",{className:"flex justify-between",children:[(0,l.jsxs)("span",{children:["Tensi\xf3n (",(0,l.jsx)(N.InlineMath,{math:"T"}),"):"]}),(0,l.jsxs)("span",{children:[h," N"]})]}),(0,l.jsx)(v,{value:[h],onValueChange:e=>{let[s]=e;return x(s)},min:1,max:20,step:1})]}),(0,l.jsxs)("div",{className:"space-y-2",children:[(0,l.jsxs)("div",{className:"flex justify-between",children:[(0,l.jsxs)("span",{children:["Densidad lineal (",(0,l.jsx)(N.InlineMath,{math:"\\mu"}),"):"]}),(0,l.jsxs)("span",{children:[p," kg/m"]})]}),(0,l.jsx)(v,{value:[p],onValueChange:e=>{let[s]=e;return g(s)},min:.001,max:.05,step:.001})]}),(0,l.jsxs)("div",{className:"space-y-2",children:[(0,l.jsxs)("div",{className:"flex justify-between",children:[(0,l.jsxs)("span",{children:["Factor de amortiguamiento (",(0,l.jsx)(N.InlineMath,{math:"\\alpha"}),"):"]}),(0,l.jsx)("span",{children:b.toFixed(3)})]}),(0,l.jsx)(v,{value:[b],onValueChange:e=>{let[s]=e;return y(s)},min:0,max:.05,step:.001})]})]}),(0,l.jsxs)("div",{className:"flex space-x-4",children:[(0,l.jsxs)("div",{children:[(0,l.jsx)("input",{type:"radio",id:"particles",name:"viewMode",value:"particles",checked:"particles"===w,onChange:e=>M(e.target.value),className:"mr-2"}),(0,l.jsx)("label",{htmlFor:"particles",children:"Part\xedculas"})]}),(0,l.jsxs)("div",{children:[(0,l.jsx)("input",{type:"radio",id:"waves",name:"viewMode",value:"waves",checked:"waves"===w,onChange:e=>M(e.target.value),className:"mr-2"}),(0,l.jsx)("label",{htmlFor:"waves",children:"Frentes de onda"})]}),(0,l.jsxs)("div",{children:[(0,l.jsx)("input",{type:"radio",id:"both",name:"viewMode",value:"both",checked:"both"===w,onChange:e=>M(e.target.value),className:"mr-2"}),(0,l.jsx)("label",{htmlFor:"both",children:"Ambos"})]})]}),(0,l.jsxs)("div",{className:"grid grid-cols-2 gap-4 bg-gray-50 p-4 rounded-lg text-sm",children:[(0,l.jsxs)("div",{className:"space-y-1",children:[(0,l.jsxs)("p",{children:["• Periodo (",(0,l.jsx)(N.InlineMath,{math:"T"}),"): ",F.toFixed(3)," s"]}),(0,l.jsxs)("p",{children:["• Frecuencia angular (",(0,l.jsx)(N.InlineMath,{math:"\\omega"}),"): ",C.toFixed(1)," rad/s"]}),(0,l.jsxs)("p",{children:["• N\xfamero de onda (",(0,l.jsx)(N.InlineMath,{math:"k"}),"): ",k.toFixed(3)," rad/m"]}),(0,l.jsxs)("p",{children:["• Velocidad de propagaci\xf3n (",(0,l.jsx)(N.InlineMath,{math:"v"}),"): ",S.toFixed(1)," m/s"]})]}),(0,l.jsxs)("div",{className:"space-y-1",children:[(0,l.jsxs)("p",{children:["• Longitud de onda (",(0,l.jsx)(N.InlineMath,{math:"\\lambda"}),"): ",d," m"]}),(0,l.jsxs)("p",{children:["• Energ\xeda (",(0,l.jsx)(N.InlineMath,{math:"E"}),"): ",P.toFixed(3)," J"]}),(0,l.jsxs)("p",{children:["• Potencia (",(0,l.jsx)(N.InlineMath,{math:"P"}),"): ",I.toFixed(3)," W"]}),(0,l.jsxs)("p",{children:["• ",(0,l.jsx)(N.InlineMath,{math:"v = \\lambda f"})," = ",(d*r).toFixed(1)," m/s"]})]})]})]})})]})},w=()=>(0,l.jsxs)("div",{className:"w-full max-w-6xl mx-auto p-4 space-y-4",children:[(0,l.jsxs)(d,{defaultValue:"comprehensive",className:"w-full",children:[(0,l.jsxs)(o,{className:"grid w-full grid-cols-3",children:[(0,l.jsx)(h,{value:"comprehensive",children:"Simulaci\xf3n Comprensiva"}),(0,l.jsx)(h,{value:"2d",children:"Ondas 2D"}),(0,l.jsx)(h,{value:"oscillator",children:"Oscilador"})]}),(0,l.jsx)(x,{value:"comprehensive",children:(0,l.jsx)(y,{})}),(0,l.jsx)(x,{value:"2d",children:(0,l.jsx)(b,{})}),(0,l.jsx)(x,{value:"oscillator",children:(0,l.jsx)(g,{})})]}),(0,l.jsxs)("div",{className:"text-sm text-gray-600 mt-4",children:[(0,l.jsx)("p",{className:"mb-2",children:"Esta aplicaci\xf3n incluye tres simulaciones diferentes:"}),(0,l.jsxs)("ul",{className:"list-disc pl-5 space-y-1",children:[(0,l.jsxs)("li",{children:[(0,l.jsx)("strong",{children:"Simulaci\xf3n Comprensiva:"})," Visualizaci\xf3n detallada de ondas con todos los par\xe1metros f\xedsicos y ecuaciones."]}),(0,l.jsxs)("li",{children:[(0,l.jsx)("strong",{children:"Ondas 2D:"})," Visualizaci\xf3n de la propagaci\xf3n de ondas en dos dimensiones con part\xedculas y frentes de onda."]}),(0,l.jsxs)("li",{children:[(0,l.jsx)("strong",{children:"Oscilador:"})," Simulaci\xf3n de un oscilador arm\xf3nico simple con control preciso de par\xe1metros."]})]})]})]});function M(){return(0,l.jsx)("main",{className:"min-h-screen p-4 md:p-8",children:(0,l.jsxs)("div",{className:"container mx-auto",children:[(0,l.jsx)("h1",{className:"text-3xl font-bold text-center mb-8",children:"Simulador de Ondas Mec\xe1nicas"}),(0,l.jsx)(w,{})]})})}}},e=>{var s=s=>e(e.s=s);e.O(0,[562,913,539,441,517,358],()=>s(3100)),_N_E=e.O()}]);