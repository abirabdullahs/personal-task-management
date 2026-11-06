
/* ================= i18n ================= */
const BN_DIGITS='০১২৩৪৫৬৭৮৯';
const L={
 bn:{
  today:'আজ',cal:'ক্যালেন্ডার',search:'খুঁজুন',settings:'সেটিংস',
  weekdays:['রবি','সোম','মঙ্গল','বুধ','বৃহঃ','শুক্র','শনি'],
  weekdaysFull:['রবিবার','সোমবার','মঙ্গলবার','বুধবার','বৃহস্পতিবার','শুক্রবার','শনিবার'],
  months:['জানুয়ারি','ফেব্রুয়ারি','মার্চ','এপ্রিল','মে','জুন','জুলাই','আগস্ট','সেপ্টেম্বর','অক্টোবর','নভেম্বর','ডিসেম্বর'],
  done:'হয়েছে',of:'এর মধ্যে',nothing:'আজ কোনো কাজ নেই',next:'পরবর্তী',
  overdue:'বাকি পড়ে আছে',takeToday:'আজকে নাও',skip:'ছেড়ে দাও',skipAll:'সব ছেড়ে দাও',
  month:'মাস',week:'সপ্তাহ',add:'যোগ করো',noTasks:'কোনো কাজ নেই',
  titlePh:'কী কাজ?',date:'তারিখ',tomorrow:'কাল',dayafter:'পরশু',start:'শুরু',end:'শেষ',
  dur30:'৩০ মি',dur1:'১ ঘণ্টা',dur2:'২ ঘণ্টা',noTime:'সময় নেই',
  category:'ধরন',more:'আরও অপশন',remind:'কখন মনে করাবো',off:'বন্ধ',
  r30:'৩০ মিনিট আগে',r60:'১ ঘণ্টা আগে',r120:'২ ঘণ্টা আগে',r1440:'১ দিন আগে',
  repeat:'পুনরাবৃত্তি',rNone:'একবার',rDaily:'প্রতিদিন',rWeekly:'প্রতি সপ্তাহ',rMonthly:'প্রতি মাস',
  priority:'গুরুত্ব',pLow:'কম',pNorm:'সাধারণ',pHigh:'বেশি',notes:'নোট',
  specialHint:'বিশেষ কাজ: আগের দিন রাতেও মনে করাবে',save:'সংরক্ষণ',del:'মুছে ফেলো',
  confirmDel:'এই কাজটি মুছে ফেলবে?',saved:'সংরক্ষিত',deleted:'মুছে ফেলা হয়েছে',
  cats:{work:'অফিস',family:'পরিবার',personal:'ব্যক্তিগত',study:'পড়াশোনা',health:'স্বাস্থ্য'},
  all:'সব',searchPh:'কাজ খুঁজুন…',
  language:'ভাষা',theme:'থিম',auto:'অটো',light:'হালকা',dark:'গাঢ়',
  defRemind:'ডিফল্ট রিমাইন্ডার',morning:'সকালের সারাংশ',morningSub:'প্রতিদিন আজকের কাজের সংখ্যা জানাবে',
  morningAt:'সারাংশের সময়',eveAt:'বিশেষ কাজের আগের রাতের সময়',
  backup:'ব্যাকআপ',copyBackup:'ব্যাকআপ কপি করো',restore:'ব্যাকআপ ফেরাও',copied:'কপি হয়েছে',
  pasteHere:'ব্যাকআপ টেক্সট এখানে পেস্ট করো',restored:'ফিরে এসেছে',badBackup:'ব্যাকআপ ঠিক নেই',
  testNotif:'টেস্ট নোটিফিকেশন (৫ সেকেন্ডে)',testSent:'৫ সেকেন্ড অপেক্ষা করো',
  notifOff:'নোটিফিকেশনের অনুমতি দেওয়া নেই',
  inH:(h,m)=>(h?h+' ঘণ্টা ':'')+(m?m+' মিনিট ':'')+'পরে',
  startsIn:'শুরু হবে',morningTitle:'আজকের কাজ',morningBody:n=>n+'টি কাজ আছে',
  tomorrowPre:'কাল: ',snooze:'১০ মিনিট পরে',markDone:'হয়েছে',snoozed:'১০ মিনিট পরে মনে করাবো',
  daysBefore:'আগের দিন',minBefore:m=>m>=1440?'১ দিন আগে':m>=60?(m/60)+' ঘণ্টা আগে':m+' মিনিট আগে',
  period:h=>h<4?'রাত':h<6?'ভোর':h<12?'সকাল':h<15?'দুপুর':h<18?'বিকাল':h<20?'সন্ধ্যা':'রাত',
  fmtTime:(h,m,p)=>p+' '+(h%12||12)+':'+String(m).padStart(2,'0'),
  allDay:'সারাদিন',dayTitle:(d,w,mo)=>w+', '+d+' '+mo,
  favs:'ফেভারিট',favHint:'ফেভারিটে সেভ হবে — পরের বার এক ট্যাপে',routine:'প্রতিদিনের কাজ',routineSub:'একবার সেট করলে রোজ আসবে। বন্ধ/চালু বা বদল এখান থেকেই।',
  noRoutine:'কোনো রুটিন নেই',noFavs:'ফেভারিট নেই — কাজ যোগ করার সময় ♡ চাপো',routineEvery:'প্রতিদিন কখন',
  whichDays:'কোন কোন দিন',addSlot:'আলাদা তারিখ/সময়',sheetHint:'♡ ফেভারিট · ★ বিশেষ (আগের দিনও মনে করাবে)',
  saveN:n=>n+'টি কাজ সংরক্ষণ',savedN:n=>n+'টি কাজ সংরক্ষিত',
  shareBackup:'ব্যাকআপ ফাইল সেভ/শেয়ার',restoreFile:'ফাইল থেকে ফেরাও',qPh:'লিখো: রবিবার সকাল ৯:৩০ জিম',qNeedTitle:'কাজের নামও লিখো',bkRemind:'সাপ্তাহিক ব্যাকআপ রিমাইন্ডার',bkRemindSub:'ট্যাপ করলে ব্যাকআপ ফাইল Drive এ সেভ করার স্ক্রিন খুলবে',bkDay:'কোন বার (রাত ৯টায়)',bkTitle:'ব্যাকআপ নাও',bkBody:'ট্যাপ করো, ফাইলটা Google Drive এ সেভ করে রাখো',bkLast:'শেষ ব্যাকআপ',bkNever:'এখনো নেওয়া হয়নি',
  dbNote:'ডেটা ফোনের SQLite ডাটাবেসে আছে। নিরাপদ থাকতে মাঝে মাঝে ব্যাকআপ ফাইল সেভ করে রাখো (Drive/WhatsApp এ)।',webNote:'ব্রাউজার মোড: ডেটা ব্রাউজারে সেভ হচ্ছে।',
  hello:'হ্যালো',niceDay:'আজকের দিনটা ভালো কাটুক',progress:'অগ্রগতি',running:'চলছে',allDayShort:'সারাদিন',
  newTask:'নতুন কাজ',editTask:'কাজ এডিট',create:'কাজ তৈরি করো',tasks:'কাজ',
  nextTask:'পরের কাজ',upcoming:'আসন্ন কাজ',noUpcoming:'কোনো আসন্ন কাজ নেই',dayWord:'দিন',hrWord:'ঘণ্টা',minWord:'মিনিট',
  weekStart:6
 },
 en:{
  today:'Today',cal:'Calendar',search:'Search',settings:'Settings',
  weekdays:['Sun','Mon','Tue','Wed','Thu','Fri','Sat'],
  weekdaysFull:['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'],
  months:['January','February','March','April','May','June','July','August','September','October','November','December'],
  done:'done',of:'of',nothing:'Nothing planned today',next:'Next',
  overdue:'Overdue',takeToday:'Move to today',skip:'Skip',skipAll:'Skip all',
  month:'Month',week:'Week',add:'Add',noTasks:'No tasks',
  titlePh:'What to do?',date:'Date',tomorrow:'Tomorrow',dayafter:'Day after',start:'Start',end:'End',
  dur30:'30 min',dur1:'1 hr',dur2:'2 hr',noTime:'No time',
  category:'Category',more:'More options',remind:'Remind me',off:'Off',
  r30:'30 min before',r60:'1 hr before',r120:'2 hr before',r1440:'1 day before',
  repeat:'Repeat',rNone:'Once',rDaily:'Daily',rWeekly:'Weekly',rMonthly:'Monthly',
  priority:'Priority',pLow:'Low',pNorm:'Normal',pHigh:'High',notes:'Notes',
  specialHint:'Special: also reminds the evening before',save:'Save',del:'Delete',
  confirmDel:'Delete this task?',saved:'Saved',deleted:'Deleted',
  cats:{work:'Work',family:'Family',personal:'Personal',study:'Study',health:'Health'},
  all:'All',searchPh:'Search tasks…',
  language:'Language',theme:'Theme',auto:'Auto',light:'Light',dark:'Dark',
  defRemind:'Default reminder',morning:'Morning summary',morningSub:'Daily count of today’s tasks',
  morningAt:'Summary time',eveAt:'Evening-before time for special tasks',
  backup:'Backup',copyBackup:'Copy backup',restore:'Restore backup',copied:'Copied',
  pasteHere:'Paste backup text here',restored:'Restored',badBackup:'Invalid backup',
  testNotif:'Test notification (in 5 s)',testSent:'Wait 5 seconds',
  notifOff:'Notification permission is off',
  inH:(h,m)=>'in '+(h?h+' hr ':'')+(m?m+' min':''),
  startsIn:'Starts',morningTitle:'Today’s tasks',morningBody:n=>n+' task'+(n===1?'':'s')+' today',
  tomorrowPre:'Tomorrow: ',snooze:'Snooze 10 min',markDone:'Done',snoozed:'Will remind in 10 min',
  minBefore:m=>m>=1440?'1 day before':m>=60?(m/60)+' hr before':m+' min before',
  period:h=>h<12?'AM':'PM',
  fmtTime:(h,m,p)=>(h%12||12)+':'+String(m).padStart(2,'0')+' '+p,
  allDay:'All day',dayTitle:(d,w,mo)=>w+', '+mo+' '+d,
  favs:'Favorites',favHint:'Saved as favorite — one tap next time',routine:'Daily routine',routineSub:'Set once, repeats every day. Pause or edit here.',
  noRoutine:'No routines yet',noFavs:'No favorites — tap ♡ when adding a task',routineEvery:'Every day at',
  whichDays:'Which days',addSlot:'Another date/time',sheetHint:'♡ favorite · ★ special (reminds the day before too)',
  saveN:n=>'Save '+n+' tasks',savedN:n=>n+' tasks saved',
  shareBackup:'Save/share backup file',restoreFile:'Restore from file',qPh:'Type: sunday 9:30am gym',qNeedTitle:'Add the task name too',bkRemind:'Weekly backup reminder',bkRemindSub:'Tap it to open the share sheet and save the file to Drive',bkDay:'Day (at 9 PM)',bkTitle:'Time to back up',bkBody:'Tap and save the file to Google Drive',bkLast:'Last backup',bkNever:'Never',
  dbNote:'Data lives in the phone’s SQLite database. Save a backup file now and then (Drive/WhatsApp).',webNote:'Browser mode: data is stored in the browser.',
  hello:'Hello',niceDay:'Have a nice day',progress:'Progress',running:'Now',allDayShort:'All day',
  newTask:'New Task',editTask:'Edit Task',create:'Create Task',tasks:'Tasks',
  nextTask:'Next task',upcoming:'Upcoming',noUpcoming:'No upcoming tasks',dayWord:'d',hrWord:'h',minWord:'min',
  weekStart:0
 }
};
const CATS={work:'#2f6fd8',family:'#d9623b',personal:'#7c5cc4',study:'#c79a1b',health:'#2f9e6b'};

/* ================= state ================= */
const KEY='kaj.v1';
const defaults={tasks:[],favs:[],settings:{name:'Abir',lang:'bn',theme:'auto',remind:120,morning:true,morningTime:'07:30',eveTime:'20:00',lastCat:'work',backupRemind:true,backupDay:5,lastBackup:''}};
let S;
function load(){
  try{const r=JSON.parse(localStorage.getItem(KEY));S=r&&r.tasks?r:structuredClone(defaults)}catch(e){S=structuredClone(defaults)}
  S.settings=Object.assign({},defaults.settings,S.settings||{});S.favs=S.favs||[];
}
function persist(){try{localStorage.setItem(KEY,JSON.stringify(S))}catch(e){}; reschedule();dbSave()}
const T=()=>L[S.settings.lang];
const ui={view:'today',calMode:'week',sel:null,month:null,q:'',fcat:'all',fpri:'all'};

/* ================= helpers ================= */
const pad=n=>String(n).padStart(2,'0');
const dk=d=>`${d.getFullYear()}-${pad(d.getMonth()+1)}-${pad(d.getDate())}`;
const pk=s=>{const [y,m,d]=s.split('-').map(Number);return new Date(y,m-1,d)};
const addDays=(s,n)=>{const d=pk(s);d.setDate(d.getDate()+n);return dk(d)};
const dtms=(ds,hm)=>{const [y,m,d]=ds.split('-').map(Number);const [h,mi]=(hm||'00:00').split(':').map(Number);return new Date(y,m-1,d,h,mi).getTime()};
const todayKey=()=>dk(new Date());
const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const num=x=>{x=String(x);return S.settings.lang==='bn'?x.replace(/\d/g,d=>BN_DIGITS[d]):x};
const uid=()=>Date.now().toString(36)+Math.random().toString(36).slice(2,6);
function fmtTime(hm){if(!hm)return T().allDay;const [h,m]=hm.split(':').map(Number);return num(T().fmtTime(h,m,T().period(h)))}
const addMin=(hm,mins)=>{const [h,m]=hm.split(':').map(Number);const t=h*60+m+mins;return t>=1440?'23:59':`${pad(Math.floor(t/60))}:${pad(t%60)}`};
function dayTitle(ds){const d=pk(ds);return T().dayTitle(num(d.getDate()),T().weekdaysFull[d.getDay()],T().months[d.getMonth()])}
function nextHour(){const d=new Date();return `${pad((d.getHours()+1)%24)}:00`}

/* ================= occurrences ================= */
function occurs(t,ds){
  if(t.paused||ds<t.date)return false;
  if(t.repeat==='none'||!t.repeat)return ds===t.date;
  const a=pk(t.date),b=pk(ds);
  if(t.repeat==='daily')return true;
  if(t.repeat==='weekly')return a.getDay()===b.getDay();
  if(t.repeat==='monthly')return a.getDate()===b.getDate();
  return false;
}
const byTime=(a,b)=>(a.t.start||'').localeCompare(b.t.start||'')||a.t.title.localeCompare(b.t.title);
function occ(ds){
  return S.tasks.filter(t=>occurs(t,ds)).map(t=>({t,ds,done:!!(t.done&&t.done[ds]),skip:!!(t.skip&&t.skip[ds])})).filter(o=>!o.skip).sort(byTime);
}
function endMs(o){
  const t=o.t;
  if(t.end)return dtms(o.ds,t.end);
  if(t.start)return dtms(o.ds,t.start);
  return dtms(o.ds,'23:59');
}
const isLate=o=>!o.done&&endMs(o)<Date.now();
function isNow(o){
  if(o.done||!o.t.start||o.ds!==todayKey())return false;
  const s=dtms(o.ds,o.t.start),e=o.t.end?dtms(o.ds,o.t.end):s+60*60000;
  const n=Date.now();return n>=s&&n<e;
}
function overdueList(){
  const out=[],today=todayKey();
  for(let i=1;i<=14;i++){occ(addDays(today,-i)).forEach(o=>{if(!o.done)out.push(o)})}
  return out;
}
const catColor=c=>CATS[c]||'#888';

/* ================= notifications ================= */
const HORIZON=21,MAXN=300;
const LN=()=>window.Capacitor&&Capacitor.isNativePlatform&&Capacitor.isNativePlatform()?Capacitor.Plugins.LocalNotifications:null;
let webPlan=[];
function buildPlan(){
  const out=[],now=Date.now(),today=todayKey(),st=S.settings,t=T();
  const push=(at,title,body,tid,ds,type)=>{if(at>now)out.push({at,title,body,tid,ds,type})};
  for(let i=0;i<=HORIZON;i++){
    const ds=addDays(today,i),list=occ(ds).filter(o=>!o.done);
    list.forEach(o=>{
      const k=o.t;
      if(k.start&&k.remind>=0){
        push(dtms(ds,k.start)-k.remind*60000,k.title,
          (k.remind?num(t.minBefore(k.remind))+' · ':'')+fmtTime(k.start),k.id,ds);
      }
      if(k.special){
        push(dtms(addDays(ds,-1),st.eveTime),t.tomorrowPre+k.title,fmtTime(k.start),k.id,ds);
      }
    });
    if(st.morning&&list.length)push(dtms(ds,st.morningTime),t.morningTitle,t.morningBody(num(list.length)),null,ds);
    if(st.backupRemind&&pk(ds).getDay()===st.backupDay&&st.lastBackup!==ds)push(dtms(ds,'21:00'),t.bkTitle,t.bkBody,null,ds,'backup');
  }
  out.sort((a,b)=>a.at-b.at);
  return out.slice(0,MAXN).map((p,i)=>Object.assign(p,{id:i+1}));
}
let rsTimer;
function reschedule(){clearTimeout(rsTimer);rsTimer=setTimeout(doSchedule,300)}
async function doSchedule(){
  const plan=buildPlan();webPlan=plan.map(p=>Object.assign({fired:false},p));
  widgetSync();
  const ln=LN();if(!ln)return;
  try{
    const pend=await ln.getPending();
    const mine=(pend.notifications||[]).filter(n=>n.id<100000).map(n=>({id:n.id}));
    if(mine.length)await ln.cancel({notifications:mine});
    if(!plan.length)return;
    await ln.schedule({notifications:plan.map(p=>({
      id:p.id,title:p.title,body:p.body,channelId:'tasks',...(p.type?{}:{actionTypeId:'TASK'}),
      schedule:{at:new Date(p.at),allowWhileIdle:true},extra:{tid:p.tid,ds:p.ds,type:p.type||''}
    }))});
  }catch(e){console.log('schedule fail',e)}
}
async function initNative(){
  const ln=LN();
  if(!ln){ if('Notification' in window&&Notification.permission==='default')Notification.requestPermission(); return; }
  try{
    await ln.requestPermissions();
    await ln.createChannel({id:'tasks',name:'Task reminders',importance:4,vibration:true,visibility:1});
    await ln.registerActionTypes({types:[{id:'TASK',actions:[{id:'snooze',title:T().snooze},{id:'done',title:T().markDone}]}]});
    ln.addListener('localNotificationActionPerformed',async e=>{
      const n=e.notification,x=n.extra||{};
      if(x.type==='backup'){shareBackup();return}
      if(e.actionId==='snooze'){
        await ln.schedule({notifications:[{id:100000+(Date.now()%900000),title:n.title,body:n.body,channelId:'tasks',actionTypeId:'TASK',
          schedule:{at:new Date(Date.now()+10*60000),allowWhileIdle:true},extra:x}]});
      }else if(e.actionId==='done'&&x.tid){setDone(x.tid,x.ds,true)}
      else render();
    });
  }catch(e){console.log('native init fail',e)}
}
/* browser fallback: only fires while page is open */
setInterval(()=>{
  if(LN())return;const now=Date.now();
  webPlan.forEach(p=>{
    if(!p.fired&&p.at<=now&&p.at>now-120000){p.fired=true;
      if('Notification' in window&&Notification.permission==='granted')new Notification(p.title,{body:p.body});
      else toast(p.title+' — '+p.body);}
  });
},15000);
async function testNotif(){
  const ln=LN();
  if(ln){
    const p=await ln.checkPermissions();
    if(p.display!=='granted'){const r=await ln.requestPermissions();if(r.display!=='granted'){toast(T().notifOff);return}}
    await ln.schedule({notifications:[{id:100001,title:'কাজ',body:'Test ✓',channelId:'tasks',actionTypeId:'TASK',schedule:{at:new Date(Date.now()+5000),allowWhileIdle:true}}]});
  }else{
    if('Notification' in window&&Notification.permission!=='granted')await Notification.requestPermission();
    setTimeout(()=>{if('Notification' in window&&Notification.permission==='granted')new Notification('কাজ',{body:'Test ✓'});else toast('Test ✓')},5000);
  }
  toast(T().testSent);
}

/* ================= home-screen widget (Android) ================= */
const KW=()=>window.Capacitor&&Capacitor.isNativePlatform&&Capacitor.isNativePlatform()?Capacitor.Plugins.KajWidget:null;
function widgetSync(){
  const kw=KW();if(!kw)return;
  try{
    const now=Date.now(),t=T(),today=todayKey(),items=[];
    for(let i=0;i<=HORIZON&&items.length<12;i++){
      const ds=addDays(today,i);
      occ(ds).forEach(o=>{
        if(o.done||!o.t.start)return;
        const at=dtms(ds,o.t.start);if(at<=now)return;
        items.push({title:o.t.title,at,color:catColor(o.t.cat),time:fmtTime(o.t.start),day:i===0?t.today:i===1?t.tomorrow:dayTitle(ds)});
      });
    }
    items.sort((a,b)=>a.at-b.at);
    kw.update({json:JSON.stringify({bn:S.settings.lang==='bn',label:t.nextTask,listLabel:t.upcoming,empty:t.noUpcoming,d:t.dayWord,h:t.hrWord,m:t.minWord,items:items.slice(0,12)})});
  }catch(e){console.log('widget sync fail',e)}
}

/* ================= actions ================= */
function setDone(id,ds,val){
  const t=S.tasks.find(x=>x.id===id);if(!t)return;
  t.done=t.done||{};if(val)t.done[ds]=1;else delete t.done[ds];
  persist();render();
}
function skipOcc(id,ds){const t=S.tasks.find(x=>x.id===id);if(!t)return;t.skip=t.skip||{};t.skip[ds]=1;persist();render()}
function takeToday(id,ds){
  const t=S.tasks.find(x=>x.id===id);if(!t)return;
  if(t.repeat&&t.repeat!=='none'){const c=Object.assign({},t,{id:uid(),date:todayKey(),repeat:'none',done:{},skip:{}});S.tasks.push(c);skipOcc(id,ds);return}
  t.date=todayKey();persist();render();
}

/* ================= render ================= */
const $=s=>document.querySelector(s);
const ICON={
  today:'<svg viewBox="0 0 24 24"><path d="M4 11l8-7 8 7"/><path d="M6 10v9h12v-9"/><path d="M10 19v-5h4v5"/></svg>',
  clip:'<svg viewBox="0 0 24 24"><rect x="6" y="5" width="12" height="15" rx="2"/><path d="M9.5 5V4h5v1M9.5 11h5M9.5 15h5"/></svg>',
  cal:'<svg viewBox="0 0 24 24"><rect x="3.5" y="5" width="17" height="15" rx="2"/><path d="M8 3v4M16 3v4M3.5 10h17"/></svg>',
  search:'<svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="6.5"/><path d="M16 16l4 4"/></svg>',
  settings:'<svg viewBox="0 0 24 24"><path d="M4 7h10M18 7h2M4 17h2M10 17h10"/><circle cx="16" cy="7" r="2"/><circle cx="8" cy="17" r="2"/></svg>'
};
function renderNav(){
  const t=T();
  $('#nav').innerHTML=['today','cal','search','settings'].map(v=>`<button class="${ui.view===v?'on':''}" data-act="view" data-v="${v}" aria-label="${t[v]}">${ICON[v]}<i class="nd"></i></button>`).join('');
  $('#fab').style.display=(ui.view==='settings'||ui.view==='today')?'none':'flex';
  $('#qa').style.display=ui.view==='today'?'block':'none';$('#qin').placeholder=t.qPh;
}
function rowHTML(o,opt={}){
  const t=o.t,T_=T();
  const meta=[`<b class="mt">${t.start?fmtTime(t.start):T_.allDay}</b>`,`<i class="dot" style="background:${catColor(t.cat)}"></i>${T_.cats[t.cat]||''}`];
  if(t.repeat&&t.repeat!=='none')meta.push({daily:T_.rDaily,weekly:T_.rWeekly,monthly:T_.rMonthly}[t.repeat]);
  if(opt.showDate)meta.push(dayTitle(o.ds));
  const cls=['row',o.done?'done':'',isNow(o)?'now':'',isLate(o)?'late':''].join(' ');
  return `<div class="${cls}" data-act="edit" data-id="${t.id}" data-ds="${o.ds}">
    <div class="ico">${ICON.clip}</div>
    <div class="mid"><div class="ttl">${esc(t.title)}${t.special?'<span class="star">★</span>':''}${t.prio===2?'<span class="pri">!</span>':''}</div>
    <div class="meta">${meta.join(' · ')}</div>${opt.acts||''}</div>
    <button class="chk" data-act="toggle" data-id="${t.id}" data-ds="${o.ds}" aria-label="done"><span>${o.done?'✓':''}</span></button></div>`;
}
function cardHTML(o){
  const t=o.t,T_=T(),ds=o.ds,now=Date.now();
  let left,pct=0,right='';
  if(!t.start){left=T_.allDayShort}
  else{
    const s=dtms(ds,t.start),e=t.end?dtms(ds,t.end):s+60*60000;
    if(isNow(o)){left=T_.running;pct=Math.max(0,Math.min(100,Math.round((now-s)/(e-s)*100)));right=num(pct)+'%'}
    else{const m=Math.max(0,Math.round((s-now)/60000));left=num(T_.inH(Math.floor(m/60),m%60).trim());pct=Math.round(Math.max(0,1-m/180)*100)}
  }
  return `<div class="hcard" data-act="edit" data-id="${t.id}" data-ds="${ds}">
    <div class="hc-top">${t.start?fmtTime(t.start):T_.allDayShort}</div>
    <div class="hc-ttl">${esc(t.title)}</div>
    <div class="hc-bot"><span>${left}</span><span>${right}</span></div>
    <div class="hc-bar"><i style="width:${pct}%"></i></div></div>`;
}
function viewToday(){
  const t=T(),ds=todayKey(),list=occ(ds),d=new Date(),nowS=Date.now();
  const dn=list.filter(o=>o.done).length;
  const nm=(S.settings.name||'').trim();
  let h=`<div class="hello"><div><h1>${t.hello}${nm?', <b>'+esc(nm)+'</b>':''}!</h1><div class="sub">${t.niceDay} · ${dayTitle(ds)}</div></div>${nm?`<div class="avatar">${esc(nm.charAt(0).toUpperCase())}</div>`:''}</div>`;
  const up=list.filter(o=>!o.done&&!isLate(o)).sort((a,b)=>(isNow(b)-isNow(a))||(!a.t.start-!b.t.start)||(a.t.start||'').localeCompare(b.t.start||'')).slice(0,6);
  if(up.length)h+=`<div class="hcards">${up.map(cardHTML).join('')}</div>`;
  const od=overdueList();
  if(od.length){
    h+=`<div class="sec"><span>${t.overdue} (${num(od.length)})</span><button data-act="skipall">${t.skipAll}</button></div><div class="list over">`;
    h+=od.map(o=>rowHTML(o,{showDate:true,acts:`<div class="acts"><button data-act="take" data-id="${o.t.id}" data-ds="${o.ds}">${t.takeToday}</button><button class="mute" data-act="skip" data-id="${o.t.id}" data-ds="${o.ds}">${t.skip}</button></div>`})).join('');
    h+='</div>';
  }
  h+=`<div class="sec"><span>${t.progress}</span>${list.length?`<em>${num(dn)} / ${num(list.length)} ${t.done}</em>`:''}</div>`;
  if(!list.length){h+=`<div class="empty">${t.nothing}</div>`}
  else{
    h+=`<div class="bar"><i style="width:${Math.round(dn/list.length*100)}%"></i></div><div class="list">`;let placed=false;
    list.forEach(o=>{
      if(!placed&&o.t.start&&dtms(ds,o.t.start)>nowS&&!isNow(o)){h+=`<div class="nowline">${fmtTime(pad(d.getHours())+':'+pad(d.getMinutes()))}</div>`;placed=true}
      h+=rowHTML(o);
    });
    if(!placed)h+=`<div class="nowline">${fmtTime(pad(d.getHours())+':'+pad(d.getMinutes()))}</div>`;
    h+='</div>';
  }
  return h;
}
function monthGrid(){
  const t=T(),m=ui.month,first=new Date(m.y,m.m,1),ws=t.weekStart;
  const offset=(first.getDay()-ws+7)%7,start=new Date(m.y,m.m,1-offset);
  let h=`<div class="grid">`+Array.from({length:7},(_,i)=>`<div class="wd">${t.weekdays[(ws+i)%7]}</div>`).join('');
  for(let i=0;i<42;i++){
    const d=new Date(start.getFullYear(),start.getMonth(),start.getDate()+i),ds=dk(d);
    if(i>=35&&d.getMonth()!==m.m)break;
    const cats=[...new Set(occ(ds).map(o=>o.t.cat))].slice(0,3);
    h+=`<button class="cell ${d.getMonth()!==m.m?'out':''} ${ds===todayKey()?'today':''} ${ds===ui.sel?'sel':''}" data-act="pick" data-ds="${ds}"><b>${num(d.getDate())}</b><span class="dots">${cats.map(c=>`<i style="background:${catColor(c)}"></i>`).join('')}</span></button>`;
  }
  return h+'</div>';
}
function dayList(ds,compact){
  const t=T(),list=occ(ds);
  return list.length?`<div class="list">${list.map(o=>rowHTML(o)).join('')}</div>`:`<div class="empty" style="padding:${compact?8:20}px 0">${t.noTasks}</div>`;
}
function dayBlock(ds,compact){
  return `<div class="dayhead"><span>${dayTitle(ds)}</span></div>`+dayList(ds,compact);
}
function weekStrip(){
  const t=T(),s=weekStart(ui.sel);
  return `<div class="strip">`+Array.from({length:7},(_,i)=>{
    const ds=addDays(s,i),d=pk(ds),has=occ(ds).length;
    return `<button class="pill ${ds===ui.sel?'sel':''} ${ds===todayKey()?'tod':''}" data-act="pick" data-ds="${ds}"><b>${num(d.getDate())}</b><small>${t.weekdays[d.getDay()]}</small><i class="${has?'has':''}"></i></button>`;
  }).join('')+`</div>`;
}
function viewCal(){
  const t=T();
  if(!ui.sel)ui.sel=todayKey();
  if(!ui.month){const d=pk(ui.sel);ui.month={y:d.getFullYear(),m:d.getMonth()}}
  let title,h='';
  if(ui.calMode==='month')title=`${t.months[ui.month.m]} ${num(ui.month.y)}`;
  else{const s=weekStart(ui.sel),e=addDays(s,6);title=`${num(pk(s).getDate())} ${t.months[pk(s).getMonth()].slice(0,3)} – ${num(pk(e).getDate())} ${t.months[pk(e).getMonth()].slice(0,3)}`}
  h+=`<div class="calttl"><h1>${title}</h1><button class="addpill" data-act="add" data-ds="${ui.sel}">+ ${t.add}</button></div>
  <div class="calhead"><div class="seg"><button class="${ui.calMode==='week'?'on':''}" data-act="mode" data-v="week">${t.week}</button><button class="${ui.calMode==='month'?'on':''}" data-act="mode" data-v="month">${t.month}</button></div>
  <div class="nav"><button data-act="prev">‹</button><button data-act="gotoday" style="width:auto;font-size:13px;padding:0 10px">${t.today}</button><button data-act="next">›</button></div></div>`;
  if(ui.calMode==='month'){h+=monthGrid()+dayBlock(ui.sel)}
  else{h+=weekStrip()+`<div class="sec"><span>${t.tasks} · ${dayTitle(ui.sel)}</span></div>`+dayList(ui.sel)}
  return h;
}
function weekStart(ds){const d=pk(ds),off=(d.getDay()-T().weekStart+7)%7;return addDays(ds,-off)}
function viewSearch(){
  const t=T(),q=ui.q.trim().toLowerCase();
  let list=S.tasks.filter(k=>(!q||(k.title+' '+(k.notes||'')).toLowerCase().includes(q))&&(ui.fcat==='all'||k.cat===ui.fcat)&&(ui.fpri==='all'||String(k.prio)===ui.fpri));
  list.sort((a,b)=>b.date.localeCompare(a.date));
  let h=`<input class="field" id="q" placeholder="${t.searchPh}" value="${esc(ui.q)}">`;
  h+=`<div class="chips"><button class="chip ${ui.fcat==='all'?'on':''}" data-act="fcat" data-v="all">${t.all}</button>`+
    Object.keys(CATS).map(c=>`<button class="chip ${ui.fcat===c?'on':''}" data-act="fcat" data-v="${c}"><i class="dot" style="background:${catColor(c)}"></i>${t.cats[c]}</button>`).join('')+`</div>`;
  h+=`<div class="chips"><button class="chip ${ui.fpri==='all'?'on':''}" data-act="fpri" data-v="all">${t.all}</button><button class="chip ${ui.fpri==='2'?'on':''}" data-act="fpri" data-v="2">${t.pHigh}</button><button class="chip ${ui.fpri==='1'?'on':''}" data-act="fpri" data-v="1">${t.pNorm}</button><button class="chip ${ui.fpri==='0'?'on':''}" data-act="fpri" data-v="0">${t.pLow}</button></div>`;
  h+=list.length?`<div class="list">${list.map(k=>rowHTML({t:k,ds:k.date,done:!!(k.done&&k.done[k.date])},{showDate:true})).join('')}</div>`:`<div class="empty">${t.noTasks}</div>`;
  return h;
}
function viewSettings(){
  const t=T(),s=S.settings,native=!!LN();
  const seg=(key,opts)=>`<div class="seg">${opts.map(([v,l])=>`<button class="${String(s[key])===String(v)?'on':''}" data-act="set" data-k="${key}" data-v="${v}">${l}</button>`).join('')}</div>`;
  const routines=S.tasks.filter(k=>k.routine).sort((a,b)=>(a.start||'').localeCompare(b.start||''));
  return `<h1>${t.settings}</h1>
  <div class="sec"><span>${t.routine}</span><button data-act="addroutine">+ ${t.add}</button></div>
  <div class="sub" style="margin-bottom:4px">${t.routineSub}</div>
  <div class="list">${routines.length?routines.map(k=>`<div class="set" data-act="edit" data-id="${k.id}" data-ds="${k.date}" style="${k.paused?'opacity:.5':''}"><span style="min-width:0"><span style="color:var(--muted);font-size:13px">${fmtTime(k.start)}</span><br>${esc(k.title)}</span><button class="sw ${k.paused?'':'on'}" data-act="pause" data-id="${k.id}" aria-label="on/off"></button></div>`).join(''):`<div class="empty">${t.noRoutine}</div>`}</div>
  <div class="sec"><span>${t.favs}</span></div>
  <div class="list">${S.favs.length?S.favs.map((f,i)=>`<div class="set"><span><i class="dot" style="background:${catColor(f.cat)}"></i> ${esc(f.title)}${f.start?` <span style="color:var(--muted);font-size:13px">· ${fmtTime(f.start)}</span>`:''}</span><button class="x" data-act="delfav" data-i="${i}" aria-label="remove">×</button></div>`).join(''):`<div class="empty">${t.noFavs}</div>`}</div>
  <div class="sec"><span>${t.settings}</span></div>
  <div class="set"><span>${t.language}</span>${seg('lang',[['bn','বাংলা'],['en','English']])}</div>
  <div class="set"><span>${t.theme}</span>${seg('theme',[['auto',t.auto],['light',t.light],['dark',t.dark]])}</div>
  <div class="set"><span>${t.defRemind}</span><select class="field" style="width:auto;padding:8px" id="defRemind">${[[-1,t.off],[30,t.r30],[60,t.r60],[120,t.r120],[1440,t.r1440]].map(([v,l])=>`<option value="${v}" ${s.remind==v?'selected':''}>${l}</option>`).join('')}</select></div>
  <div class="set"><span>${t.morning}<small>${t.morningSub}</small></span><button class="sw ${s.morning?'on':''}" data-act="togmorning"></button></div>
  <div class="set"><span>${t.morningAt}</span><input type="time" class="field" style="width:auto" id="morningTime" value="${s.morningTime}"></div>
  <div class="set"><span>${t.eveAt}</span><input type="time" class="field" style="width:auto" id="eveTime" value="${s.eveTime}"></div>
  <div class="set"><span>${t.testNotif}</span><button class="chip" data-act="testnotif">▶</button></div>
  <div class="sec"><span>${t.backup}</span></div>
  <div class="hint" style="margin:0 0 6px">${native?t.dbNote:t.webNote}</div>
  <div class="set"><span>${t.bkRemind}<small>${t.bkRemindSub}</small></span><button class="sw ${s.backupRemind?'on':''}" data-act="togbackup"></button></div>
  <div class="set"><span>${t.bkDay}</span><select class="field" style="width:auto;padding:8px" id="backupDay">${t.weekdaysFull.map((n,i)=>`<option value="${i}" ${s.backupDay==i?'selected':''}>${n}</option>`).join('')}</select></div>
  <div class="hint" style="margin:8px 0">${t.bkLast}: ${s.lastBackup?dayTitle(s.lastBackup):t.bkNever}</div>
  <div class="chips"><button class="chip" data-act="sharebackup">${t.shareBackup}</button><button class="chip" data-act="restorefile">${t.restoreFile}</button></div>
  <div class="chips"><button class="chip" data-act="copybackup">${t.copyBackup}</button><button class="chip" data-act="restore">${t.restore}</button></div>
  <input type="file" id="fileIn" accept=".json,application/json" hidden>`;
}
function render(){
  const root=document.documentElement;
  root.lang=S.settings.lang;
  if(S.settings.theme==='auto')root.removeAttribute('data-theme');else root.setAttribute('data-theme',S.settings.theme);
  const main=$('#main'),keep=main.scrollTop;
  main.innerHTML={today:viewToday,cal:viewCal,search:viewSearch,settings:viewSettings}[ui.view]();
  main.scrollTop=keep;
  renderNav();
}

/* ================= quick add (natural text) ================= */
const WD_RE=[/^(robi|rabi)bar$/,/^(shom|som|shomo|somo)bar$/,/^(mongol|mongal|mangal)bar$/,/^(budh|bud)bar$/,/^(brihosh?poti|brihaspoti|brishpoti|brihospoti)bar$/,/^(shukr?o|sukr?o|shukkur)bar$/,/^(shoni|soni|shani)bar$/];
const WD_BN=['রবিবার','সোমবার','মঙ্গলবার','বুধবার','বৃহস্পতিবার','শুক্রবার','শনিবার'];
const WD_EN=['sunday','monday','tuesday','wednesday','thursday','friday','saturday'];
const PERIODS={am:['shokal','sokal','sokale','shokale','bhor','vor','সকাল','সকালে','ভোর','morning'],
  noon:['dupur','dupure','duhur','দুপুর','দুপুরে','noon'],
  pm:['bikel','bikal','bikele','বিকাল','বিকেল','বিকালে','shondha','shondhya','sondha','shondhyay','সন্ধ্যা','সন্ধ্যায়','evening'],
  night:['raat','rat','raate','রাত','রাতে','night']};
const TODAY_W=['aj','ajke','আজ','আজকে','today'],TMR_W=['kal','kalke','কাল','কালকে','tomorrow'],PORSHU_W=['porshu','পরশু'];
const DAILY_W=['protidin','prottidin','roj','rooj','প্রতিদিন','রোজ','everyday','daily'],EVERY_W=['prottek','proti','prottik','প্রতি','প্রত্যেক','every'];
const FILLER=['at','on','e','te','tay','ta','ey','a','er'];
function resolveHour(h,period,ap){
  if(ap==='am')return h%12;if(ap==='pm')return h%12+12;
  if(h>=13)return h%24;
  if(period==='am')return h;
  if(period==='noon')return h<10?(h===12?12:h+12):h;
  if(period==='pm')return h<12?h+12:h;
  if(period==='night')return h===12?0:(h<5?h:h+12);
  return h===12?12:(h<7?h+12:h);
}
function parseQuick(raw){
  let s=(raw||'').trim();if(!s)return null;
  s=s.replace(/[০-৯]/g,d=>BN_DIGITS.indexOf(d));
  const toks=s.split(/\s+/),low=toks.map(x=>x.toLowerCase().replace(/[,;।]+$/,'')),n=toks.length,used=Array(n).fill(false);
  let dateOff=null,wd=null,repeat='none',period=null,hh=null,mm=0,ap=null;
  low.forEach((w,i)=>{
    if(TODAY_W.includes(w)){dateOff=0;used[i]=true}
    else if(TMR_W.includes(w)){dateOff=1;used[i]=true}
    else if(PORSHU_W.includes(w)){dateOff=2;used[i]=true}
    else if(DAILY_W.includes(w)){repeat='daily';used[i]=true}
    else{
      let d=WD_RE.findIndex(r=>r.test(w));if(d<0)d=WD_BN.indexOf(w);if(d<0)d=WD_EN.indexOf(w);
      if(d>=0&&wd===null){wd=d;used[i]=true;if(i>0&&EVERY_W.includes(low[i-1])){repeat='weekly';used[i-1]=true}}
      else if(period===null){for(const k in PERIODS){if(PERIODS[k].includes(w)){period=k;used[i]=true;break}}}
    }
  });
  const hasPeriod=period!==null;
  for(let i=0;i<n&&hh===null;i++){
    if(used[i])continue;const w=low[i];let m;
    if(m=w.match(/^(\d{1,2})[.:](\d{2})(am|pm)?$/)){hh=+m[1];mm=+m[2];ap=m[3]||null;used[i]=true}
    else if(m=w.match(/^(\d{1,2})(am|pm)$/)){hh=+m[1];ap=m[2];used[i]=true}
    else if(m=w.match(/^(\d{1,2})(ta|tay|te|টা|টায়)$/)){hh=+m[1];used[i]=true}
    else if(m=w.match(/^(\d{1,2})$/)){
      const nx=low[i+1];
      if(nx&&/^(ta|tay|te|টা|টায়)$/.test(nx)){hh=+m[1];used[i]=used[i+1]=true}
      else if(nx&&/^(am|pm)$/.test(nx)){hh=+m[1];ap=nx;used[i]=used[i+1]=true}
      else if(hasPeriod){hh=+m[1];used[i]=true}
    }
    if(hh!==null&&(hh>24||mm>59)){hh=null;mm=0;ap=null;used[i]=false}
  }
  for(let i=0;i<n;i++)if(!used[i]&&FILLER.includes(low[i])&&((i>0&&used[i-1])||(i<n-1&&used[i+1])))used[i]=true;
  const title=toks.filter((_,i)=>!used[i]).join(' ').trim();
  if(!title)return null;
  let start='';
  if(hh!==null){const h=resolveHour(hh,period,ap)%24;start=`${pad(h)}:${pad(mm)}`}
  const base=todayKey();let date=base;
  if(wd!==null){
    let off=(wd-new Date().getDay()+7)%7;
    if(off===0&&start&&dtms(base,start)<=Date.now())off=7;
    date=addDays(base,off);
  }else if(dateOff!==null)date=addDays(base,dateOff);
  return {title,date,start,repeat};
}
function quickPreview(){
  const el=$('#qprev'),v=$('#qin').value,r=parseQuick(v),t=T();
  if(!v.trim()){el.innerHTML='';return}
  if(!r){el.textContent=t.qNeedTitle;return}
  const f=S.favs.find(x=>x.key===favKey(r.title));
  const st=r.start||(f&&f.start)||'';
  el.innerHTML=`${dayTitle(r.date)} · ${st?fmtTime(st):t.allDay}${r.repeat==='daily'?' · '+t.rDaily:r.repeat==='weekly'?' · '+t.rWeekly:''} → <b>${esc(r.title)}</b>${f?' ♥':''}`;
}
function quickSubmit(){
  const inp=$('#qin'),r=parseQuick(inp.value);
  if(!r){inp.classList.remove('shake');void inp.offsetWidth;inp.classList.add('shake');return}
  const f=S.favs.find(x=>x.key===favKey(r.title));
  const k={id:uid(),title:r.title,date:r.date,start:r.start,end:'',cat:S.settings.lastCat,prio:1,special:false,remind:S.settings.remind,repeat:r.repeat,notes:'',done:{},skip:{}};
  if(f){Object.assign(k,{cat:f.cat,prio:f.prio,special:f.special,remind:f.remind,notes:f.notes||''});
    if(!r.start&&f.start){k.start=f.start;k.end=f.dur?addMin(f.start,f.dur):''}
    else if(r.start&&f.dur)k.end=addMin(r.start,f.dur);
    if(r.repeat==='none')k.repeat=f.repeat}
  S.tasks.push(k);inp.value='';$('#qprev').innerHTML='';persist();render();
  toast(`${T().saved}: ${dayTitle(k.date)}${k.start?' · '+fmtTime(k.start):''}`);
}

/* ================= sheet ================= */
let draft=null;
const favKey=s=>String(s||'').trim().toLowerCase();
const toMin=hm=>{const [h,m]=hm.split(':').map(Number);return h*60+m};
function openSheet(id,ds,opts={}){
  if(id){const k=S.tasks.find(x=>x.id===id);if(!k)return;draft=structuredClone(k);draft._edit=true;draft.slots=[{date:k.date,start:k.start||'',end:k.end||''}]}
  else draft={id:uid(),title:'',cat:S.settings.lastCat,prio:1,special:false,remind:S.settings.remind,repeat:opts.routine?'daily':'none',notes:'',done:{},skip:{},
    routine:!!opts.routine,slots:[{date:ds||todayKey(),start:nextHour(),end:''}]};
  draft.fav=!!draft.title&&S.favs.some(f=>f.key===favKey(draft.title));
  draft._more=!!draft._edit||!!draft.routine;
  buildSheet();
  $('#scrim').classList.add('show');$('#sheet').classList.add('show');$('#sheet').scrollTop=0;
  history.pushState({sheet:1},'');
  if(!draft._edit)setTimeout(()=>$('#f-title')&&$('#f-title').focus(),200);
}
function buildSheet(){
  const t=T(),sh=$('#sheet'),sc=sh.scrollTop;
  const chips=(g,opts)=>`<div class="chips">${opts.map(([v,l,dot])=>`<button class="chip ${String(draft[g])===String(v)?'on':''}" data-act="chip" data-g="${g}" data-v="${v}">${dot?`<i class="dot" style="background:${dot}"></i>`:''}${l}</button>`).join('')}</div>`;
  const favRow=(!draft._edit&&S.favs.length)?`<div class="lbl">${t.favs}</div><div class="chips hscroll">${S.favs.map((f,i)=>`<button class="chip" data-act="usefav" data-i="${i}"><i class="dot" style="background:${catColor(f.cat)}"></i>${esc(f.title)}</button>`).join('')}</div>`:'';
  let when='';
  if(draft.routine){
    const s=draft.slots[0];
    when=`<div class="lbl">${t.routineEvery}</div><div class="two"><input type="time" class="field" data-slot="0" data-f="start" value="${s.start}"><input type="time" class="field" data-slot="0" data-f="end" value="${s.end}"></div>`;
  }else{
    const sel=new Set(draft.slots.map(s=>s.date)),td=todayKey();
    const days=Array.from({length:14},(_,i)=>addDays(td,i));
    when=`<div class="lbl">${t.whichDays}</div><div class="chips hscroll">${days.map((d,i)=>`<button class="chip ${sel.has(d)?'on':''}" data-act="dayslot" data-ds="${d}">${i===0?t.today:i===1?t.tomorrow:t.weekdays[pk(d).getDay()]+' '+num(pk(d).getDate())}</button>`).join('')}</div>
    ${draft.slots.map((s,i)=>`<div class="slot"><div class="slotrow"><input type="date" class="field" data-slot="${i}" data-f="date" value="${s.date}">${draft.slots.length>1?`<button class="x" data-act="rmslot" data-i="${i}" aria-label="remove">×</button>`:''}</div>
      <div class="two"><input type="time" class="field" data-slot="${i}" data-f="start" value="${s.start}"><input type="time" class="field" data-slot="${i}" data-f="end" value="${s.end}"></div></div>`).join('')}
    <button class="chip" data-act="addslot">+ ${t.addSlot}</button>`;
  }
  const hint=[draft.special?'★ '+t.specialHint:'',draft.fav?'♥ '+t.favHint:''].filter(Boolean).join('<br>');
  sh.innerHTML=`
   <div class="shead"><div class="shtop"><button class="sback" data-act="closesheet" aria-label="back">←</button><span>${draft._edit?t.editTask:t.newTask}</span><i></i></div>
   <div class="titlerow"><input class="field" id="f-title" placeholder="${t.titlePh}" value="${esc(draft.title)}" enterkeyhint="done">
     <button class="starbtn ${draft.fav?'on':''}" id="f-fav" aria-label="favorite">${draft.fav?'♥':'♡'}</button>
     <button class="starbtn ${draft.special?'on':''}" id="f-star" aria-label="special">★</button></div>
   <div class="hint">${hint||t.sheetHint}</div></div>
   <div class="sbody">
   ${favRow}
   ${when}
   <div class="chips"><button class="chip" data-act="dur" data-m="30">${t.dur30}</button><button class="chip" data-act="dur" data-m="60">${t.dur1}</button><button class="chip" data-act="dur" data-m="120">${t.dur2}</button><button class="chip" data-act="dur" data-m="0">${t.noTime}</button></div>
   <div class="lbl">${t.category}</div>
   ${chips('cat',Object.keys(CATS).map(c=>[c,t.cats[c],CATS[c]]))}
   <details ${draft._more?'open':''}><summary>${t.more} ›</summary>
     <div class="lbl">${t.remind}</div>${chips('remind',[[-1,t.off],[30,t.r30],[60,t.r60],[120,t.r120],[1440,t.r1440]])}
     ${draft.routine?'':`<div class="lbl">${t.repeat}</div>`+chips('repeat',[['none',t.rNone],['daily',t.rDaily],['weekly',t.rWeekly],['monthly',t.rMonthly]])}
     <div class="lbl">${t.priority}</div>${chips('prio',[[0,t.pLow],[1,t.pNorm],[2,t.pHigh]])}
     <div class="lbl">${t.notes}</div><textarea class="field" id="f-notes" rows="2">${esc(draft.notes||'')}</textarea>
   </details>
   <button class="save" id="f-save">${draft.slots.length>1?t.saveN(num(draft.slots.length)):(draft._edit?t.save:t.create)}</button>
   ${draft._edit?`<button class="del" id="f-del">${t.del}</button>`:''}</div>`;
  sh.scrollTop=sc;
}
function closeSheet(fromPop){
  $('#scrim').classList.remove('show');$('#sheet').classList.remove('show');draft=null;
  if(!fromPop&&history.state&&history.state.sheet)history.back();
}
function saveDraft(){
  const title=(draft.title||'').trim();
  if(!title){const e=$('#f-title');e.classList.remove('shake');void e.offsetWidth;e.classList.add('shake');e.focus();return}
  const base=Object.assign({},draft);['_edit','_more','slots','fav'].forEach(k=>delete base[k]);
  base.title=title;base.notes=(draft.notes||'').trim();
  if(draft.routine)base.repeat='daily';
  const seen=new Set();
  const slots=draft.slots.filter(s=>{const k=s.date+'|'+s.start;if(!s.date||seen.has(k))return false;seen.add(k);return true});
  if(!slots.length)slots.push({date:todayKey(),start:'',end:''});
  slots.forEach((s,i)=>{
    const k=Object.assign({},base,{date:s.date,start:s.start||'',end:(s.start&&s.end&&s.end>s.start)?s.end:''});
    if(i>0){k.id=uid();k.done={};k.skip={}}
    const idx=S.tasks.findIndex(x=>x.id===k.id);
    if(idx>=0)S.tasks[idx]=k;else S.tasks.push(k);
  });
  const key=favKey(title),s0=slots[0];
  S.favs=S.favs.filter(f=>f.key!==key);
  if(draft.fav)S.favs.push({key,title,cat:base.cat,prio:base.prio,special:!!base.special,remind:base.remind,
    repeat:draft.routine?'none':base.repeat,notes:base.notes,start:s0.start||'',dur:(s0.start&&s0.end&&s0.end>s0.start)?toMin(s0.end)-toMin(s0.start):0});
  S.settings.lastCat=base.cat;
  const n=slots.length;
  closeSheet();persist();render();toast(n>1?T().savedN(num(n)):T().saved);
}
function toast(m){const e=$('#toast');e.textContent=m;e.classList.add('show');clearTimeout(toast.t);toast.t=setTimeout(()=>e.classList.remove('show'),1800)}

/* ================= SQLite (phone) ================= */
const SQL=()=>window.Capacitor&&Capacitor.isNativePlatform&&Capacitor.isNativePlatform()?Capacitor.Plugins.CapacitorSQLite:null;
const DBN='kaj';let dbReady=false,dbTimer,dbQ=Promise.resolve();
async function dbInit(){
  const q=SQL();if(!q)return false;
  try{
    try{await q.createConnection({database:DBN,version:1,encrypted:false,mode:'no-encryption',readonly:false})}catch(e){}
    await q.open({database:DBN,readonly:false});
    await q.execute({database:DBN,transaction:true,statements:
      'CREATE TABLE IF NOT EXISTS tasks(id TEXT PRIMARY KEY NOT NULL, data TEXT NOT NULL);'+
      'CREATE TABLE IF NOT EXISTS kv(k TEXT PRIMARY KEY NOT NULL, v TEXT NOT NULL);'});
    dbReady=true;return true;
  }catch(e){console.log('sqlite init fail',e);return false}
}
async function dbLoad(){
  const q=SQL();
  const tr=await q.query({database:DBN,statement:'SELECT id, data FROM tasks',values:[]});
  const kr=await q.query({database:DBN,statement:'SELECT k, v FROM kv',values:[]});
  const tasks=(tr.values||[]).map(r=>{try{return JSON.parse(r.data)}catch(e){return null}}).filter(Boolean);
  const kv={};(kr.values||[]).forEach(r=>{try{kv[r.k]=JSON.parse(r.v)}catch(e){}});
  if(!tasks.length&&!kv.settings)return null;
  return {tasks,settings:kv.settings,favs:kv.favs};
}
function dbSave(){
  if(!dbReady)return;
  clearTimeout(dbTimer);
  dbTimer=setTimeout(()=>{
    const set=[{statement:'DELETE FROM tasks;',values:[]}];
    S.tasks.forEach(t=>set.push({statement:'INSERT INTO tasks(id, data) VALUES (?, ?);',values:[t.id,JSON.stringify(t)]}));
    set.push({statement:'INSERT OR REPLACE INTO kv(k, v) VALUES (?, ?);',values:['settings',JSON.stringify(S.settings)]});
    set.push({statement:'INSERT OR REPLACE INTO kv(k, v) VALUES (?, ?);',values:['favs',JSON.stringify(S.favs)]});
    dbQ=dbQ.then(()=>SQL().executeSet({database:DBN,set,transaction:true})).catch(e=>console.log('sqlite save fail',e));
  },250);
}
async function dbBoot(){
  if(!(await dbInit()))return;
  try{
    const d=await dbLoad();
    if(d){S={tasks:d.tasks,settings:Object.assign({},defaults.settings,d.settings||{}),favs:d.favs||[]};
      try{localStorage.setItem(KEY,JSON.stringify(S))}catch(e){}
      render();reschedule()}
    else dbSave();
  }catch(e){console.log('sqlite load fail',e)}
}

/* ================= backup ================= */
const exportData=()=>({app:'kaj',v:2,tasks:S.tasks,settings:S.settings,favs:S.favs});
function importData(r){
  if(!r||!Array.isArray(r.tasks))throw 0;
  S={tasks:r.tasks,settings:Object.assign({},defaults.settings,r.settings||{}),favs:r.favs||[]};
  persist();render();toast(T().restored);
}
async function shareBackup(){
  const name=`kaj-backup-${todayKey()}.json`,txt=JSON.stringify(exportData(),null,1);
  const P=window.Capacitor&&Capacitor.Plugins;
  try{
    if(LN()&&P.Filesystem&&P.Share){
      const r=await P.Filesystem.writeFile({path:name,data:txt,directory:'CACHE',encoding:'utf8'});
      await P.Share.share({title:name,files:[r.uri]});
    }else{
      const a=document.createElement('a');a.href=URL.createObjectURL(new Blob([txt],{type:'application/json'}));a.download=name;a.click();
    }
    S.settings.lastBackup=todayKey();persist();if(ui.view==='settings')render();
  }catch(e){console.log('share fail',e);try{await navigator.clipboard.writeText(txt);toast(T().copied)}catch(_){prompt('Backup',txt)}}
}

/* ================= events ================= */
document.addEventListener('click',async ev=>{
  const b=ev.target.closest('[data-act],#f-save,#f-del,#f-star,#f-fav,#scrim,#qgo,#qplus');if(!b)return;
  const a=b.dataset.act,id=b.dataset.id,ds=b.dataset.ds,v=b.dataset.v;
  if(b.id==='qgo'){quickSubmit();return}
  if(b.id==='qplus'){openSheet(null,todayKey());return}
  if(b.id==='scrim'){closeSheet();return}
  if(b.id==='f-save'){saveDraft();return}
  if(b.id==='f-star'){draft.special=!draft.special;buildSheet();return}
  if(b.id==='f-fav'){draft.fav=!draft.fav;buildSheet();return}
  if(b.id==='f-del'){if(confirm(T().confirmDel)){S.tasks=S.tasks.filter(x=>x.id!==draft.id);closeSheet();persist();render();toast(T().deleted)}return}
  switch(a){
    case 'closesheet':closeSheet();break;
    case 'view':ui.view=v;render();$('#main').scrollTop=0;break;
    case 'toggle':{ev.stopPropagation();const t=S.tasks.find(x=>x.id===id);setDone(id,ds,!(t.done&&t.done[ds]));break}
    case 'edit':if(!ev.target.closest('.chk,.acts'))openSheet(id,ds);break;
    case 'add':openSheet(null,ds||(ui.view==='cal'?ui.sel:todayKey()));break;
    case 'addroutine':openSheet(null,todayKey(),{routine:true});break;
    case 'pause':{const t=S.tasks.find(x=>x.id===id);t.paused=!t.paused;persist();render();break}
    case 'delfav':S.favs.splice(Number(b.dataset.i),1);persist();render();break;
    case 'take':takeToday(id,ds);break;
    case 'skip':skipOcc(id,ds);break;
    case 'skipall':overdueList().forEach(o=>{const t=o.t;t.skip=t.skip||{};t.skip[o.ds]=1});persist();render();break;
    case 'pick':ui.sel=ds;{const d=pk(ds);ui.month={y:d.getFullYear(),m:d.getMonth()}}render();break;
    case 'mode':ui.calMode=v;render();break;
    case 'prev':case 'next':{const n=a==='next'?1:-1;
      if(ui.calMode==='month'){let{y,m}=ui.month;m+=n;if(m<0){m=11;y--}if(m>11){m=0;y++}ui.month={y,m};ui.sel=dk(new Date(y,m,1))}
      else{ui.sel=addDays(ui.sel,7*n);const d=pk(ui.sel);ui.month={y:d.getFullYear(),m:d.getMonth()}}
      render();break}
    case 'gotoday':ui.sel=todayKey();ui.month=null;render();break;
    case 'fcat':ui.fcat=v;render();break;
    case 'fpri':ui.fpri=v;render();break;
    /* sheet */
    case 'chip':{const g=b.dataset.g;draft[g]=(g==='cat'||g==='repeat')?v:Number(v);buildSheet();break}
    case 'dayslot':{
      const i=draft.slots.findIndex(s=>s.date===ds);
      if(i>=0){if(draft.slots.length>1)draft.slots.splice(i,1)}
      else{const ref=draft.slots[draft.slots.length-1];draft.slots.push({date:ds,start:ref.start,end:ref.end});draft.slots.sort((x,y)=>x.date.localeCompare(y.date))}
      buildSheet();break}
    case 'addslot':{const ref=draft.slots[draft.slots.length-1];draft.slots.push({date:addDays(ref.date,1),start:ref.start,end:ref.end});buildSheet();break}
    case 'rmslot':draft.slots.splice(Number(b.dataset.i),1);buildSheet();break;
    case 'dur':{const m=Number(b.dataset.m);
      draft.slots.forEach(s=>{if(m===0){s.start='';s.end=''}else{if(!s.start)s.start=nextHour();s.end=addMin(s.start,m)}});buildSheet();break}
    case 'usefav':{const f=S.favs[Number(b.dataset.i)];if(!f)break;
      Object.assign(draft,{title:f.title,cat:f.cat,prio:f.prio,special:f.special,remind:f.remind,notes:f.notes||'',fav:true});
      if(!draft.routine)draft.repeat=f.repeat;
      draft.slots.forEach(s=>{s.start=f.start||'';s.end=(f.start&&f.dur)?addMin(f.start,f.dur):''});
      draft._more=true;buildSheet();break}
    /* settings */
    case 'set':S.settings[b.dataset.k]=v;persist();render();break;
    case 'togmorning':S.settings.morning=!S.settings.morning;persist();render();break;
    case 'togbackup':S.settings.backupRemind=!S.settings.backupRemind;persist();render();break;
    case 'testnotif':testNotif();break;
    case 'sharebackup':shareBackup();break;
    case 'restorefile':$('#fileIn').click();break;
    case 'copybackup':{const txt=JSON.stringify(exportData());
      try{await navigator.clipboard.writeText(txt);toast(T().copied)}catch(e){prompt('Backup',txt)}break}
    case 'restore':{const txt=prompt(T().pasteHere);if(!txt)break;
      try{importData(JSON.parse(txt))}catch(e){toast(T().badBackup)}break}
  }
});
document.addEventListener('input',ev=>{
  const e=ev.target;
  if(e.id==='q'){ui.q=e.value;const pos=e.selectionStart;render();const n=$('#q');n.focus();n.setSelectionRange(pos,pos)}
  if(e.id==='qin')quickPreview();
  if(!draft)return;
  if(e.id==='f-title')draft.title=e.value;
  if(e.id==='f-notes')draft.notes=e.value;
});
document.addEventListener('change',ev=>{
  const e=ev.target;
  if(e.id==='backupDay'){S.settings.backupDay=Number(e.value);persist()}
  if(e.id==='defRemind'){S.settings.remind=Number(e.value);persist()}
  if(e.id==='morningTime'||e.id==='eveTime'){S.settings[e.id]=e.value||S.settings[e.id];persist()}
  if(e.id==='fileIn'&&e.files[0]){
    const fr=new FileReader();
    fr.onload=()=>{try{importData(JSON.parse(fr.result))}catch(_){toast(T().badBackup)}e.value=''};
    fr.readAsText(e.files[0]);
  }
  if(draft&&e.dataset&&e.dataset.slot!==undefined){draft.slots[Number(e.dataset.slot)][e.dataset.f]=e.value;buildSheet()}
});
document.addEventListener('toggle',ev=>{if(draft&&ev.target.tagName==='DETAILS')draft._more=ev.target.open},true);
document.addEventListener('keydown',ev=>{if(ev.key==='Enter'&&ev.target.id==='f-title'){ev.preventDefault();saveDraft()}
  if(ev.key==='Enter'&&ev.target.id==='qin'){ev.preventDefault();quickSubmit()}});
$('#fab').addEventListener('click',()=>openSheet(null,ui.view==='cal'?ui.sel:todayKey()));
window.addEventListener('popstate',()=>{if(draft)closeSheet(true)});
document.addEventListener('visibilitychange',()=>{if(!document.hidden){render();reschedule()}});
setInterval(()=>{if(!draft&&!document.hidden&&ui.view!=='settings'&&ui.view!=='search')render()},60000);

/* ================= boot ================= */
load();render();initNative().then(()=>doSchedule());dbBoot();
