import{r as n,j as o,C as c,a as e,b as l,O as d,P as h,u as m}from"./index-9d475e52.js";const p=({isMobile:a})=>{const s=m("./computer_and_laptop/scene.gltf"),t=n.useRef();return o("mesh",{children:[e("ambientLight",{intensity:1.5,color:"white"}),e("spotLight",{ref:t,color:"white",intensity:3,distance:100,angle:30,penumbra:.2,decay:2,position:[20,20,45]}),e("primitive",{object:s.scene,scale:a?.05:.1,position:a?[0,-1.5,0]:[2,-2,1]})]})},f=()=>{const[a,s]=n.useState(!1);return n.useEffect(()=>{const t=window.matchMedia("(max-width: 500px)");s(t.matches);const r=i=>{s(i.matches)};return t.addEventListener("change",r),()=>{t.removeEventListener("change",r)}},[]),o(c,{frameloop:"demand",shadows:!0,dpr:[1,2],camera:{position:[10,10,45],fov:10,aspect:window.innerWidth/window.innerHeight},gl:{preserveDrawingBuffer:!0},children:[o(n.Suspense,{fallback:e(l,{}),children:[e(d,{enableZoom:!1,position:0,maxPolarAngle:Math.PI/2.2,minPolarAngle:Math.PI/2.5}),e(p,{isMobile:a})]}),e(h,{all:!0})]})};export{f as default};
