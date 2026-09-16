(function(){
const $=s=>document.querySelector(s), $$=s=>document.querySelectorAll(s);
window.addEventListener('load',()=>setTimeout(()=>$('#preloader').style.display='none',650));
window.addEventListener('scroll',()=>$('#navbar').classList.toggle('scrolled',scrollY>50));
$('#nav-toggle').onclick=()=>document.body.classList.toggle('mobile-open');
$$('#mobile-menu a').forEach(a=>a.onclick=()=>document.body.classList.remove('mobile-open'));
function toast(t){const x=$('#toast');x.textContent=t;x.classList.add('show');setTimeout(()=>x.classList.remove('show'),2200)}
const samples={
 '0x71c9...9F21':{score:78,type:'EOA',hops:7,entity:'Exchange',conf:'91%',risk:'HIGH RISK'},
 '0x9b7a...C441':{score:61,type:'EOA',hops:4,entity:'Exchange',conf:'84%',risk:'ELEVATED'},
 '0x4a12...77D0':{score:93,type:'Contract',hops:11,entity:'Mixer / Bridge',conf:'96%',risk:'CRITICAL'}
};
function apply(d){$('#score').textContent=d.score;$('#resultScore').textContent=d.score;$('#walletType').textContent=d.type;$('#hops').textContent=d.hops;$('#entityMatch').textContent=d.entity;$('#confidence').textContent=d.conf;$('#riskTitle').textContent=d.risk;$('#meter').style.width=d.score+'%';$('#resultChain').textContent=$('#chain').value;}
$$('.sample').forEach(b=>b.onclick=()=>{const w=b.dataset.wallet;$('#wallet').value=w;apply(samples[w]);toast('Sample investigation loaded')});
$('#demoBtn').onclick=()=>{$('#wallet').value='0x71c9...9F21';$('#amount').value='2.45 ETH';$('#description').value='Victim reports funds sent to a suspected investment scam wallet.';apply(samples['0x71c9...9F21']);$('#report').scrollIntoView({behavior:'smooth'});toast('Demo case loaded')};
$('#scanForm').onsubmit=e=>{e.preventDefault();const raw=$('#wallet').value.trim();let d=samples[raw]||{score:Math.floor(45+Math.random()*48),type:raw.toLowerCase().includes('contract')?'Contract':'EOA',hops:Math.floor(2+Math.random()*10),entity:'Unknown / pending',conf:Math.floor(72+Math.random()*24)+'%',risk:'ANALYSIS READY'};apply(d);$('#results').style.display='block';setTimeout(()=>$('#results').scrollIntoView({behavior:'smooth'}),100);toast('Blockchain analysis completed · demo data')};
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)e.target.classList.add('show')}),{threshold:.12});$$('.reveal').forEach(x=>io.observe(x));
// lightweight Three.js hero object
if(window.THREE){const c=$('#webgl'),scene=new THREE.Scene(),cam=new THREE.PerspectiveCamera(50,innerWidth/innerHeight,.1,100);cam.position.z=5;const r=new THREE.WebGLRenderer({alpha:true,antialias:true});r.setPixelRatio(Math.min(devicePixelRatio,1.7));r.setSize(innerWidth,innerHeight);c.appendChild(r.domElement);const g=new THREE.Group();scene.add(g);const geo=new THREE.IcosahedronGeometry(1.35,1);const mat=new THREE.MeshBasicMaterial({color:0x55d6ff,wireframe:true,transparent:true,opacity:.28});const mesh=new THREE.Mesh(geo,mat);g.add(mesh);const inner=new THREE.Mesh(new THREE.IcosahedronGeometry(.72,1),new THREE.MeshBasicMaterial({color:0xf0a24b,wireframe:true,transparent:true,opacity:.18}));g.add(inner);const pts=new THREE.Points(new THREE.BufferGeometry().setFromPoints(Array.from({length:180},()=>new THREE.Vector3((Math.random()-.5)*7,(Math.random()-.5)*7,(Math.random()-.5)*4))),new THREE.PointsMaterial({color:0x55d6ff,size:.018,transparent:true,opacity:.45}));scene.add(pts);let mx=0,my=0;addEventListener('mousemove',e=>{mx=(e.clientX/innerWidth-.5)*.7;my=(e.clientY/innerHeight-.5)*.35});function loop(){requestAnimationFrame(loop);g.rotation.y+=.0025;g.rotation.x+=(my-g.rotation.x)*.01;g.rotation.y+=(mx-g.rotation.y)*.01;inner.rotation.z-=.004;pts.rotation.y-=.0005;r.render(scene,cam)}loop();addEventListener('resize',()=>{cam.aspect=innerWidth/innerHeight;cam.updateProjectionMatrix();r.setSize(innerWidth,innerHeight)})}
})();
