export function enhance({app,button,profile,admin}) {
 const layout=app.querySelector('.layout');if(!layout)return;
 const side=layout.querySelector('.sidebar');
 const headings=[...side.querySelectorAll('h3')];
 const chatHeading=headings.find(h=>h.textContent.trim()==='Chatlar');
 const groupHeading=headings.find(h=>h.textContent.trim()==='Guruhlar');
 const search=side.querySelector('input');
 const hint=search?.nextElementSibling;
 const results=hint?.nextElementSibling;
 const chatList=chatHeading?.nextElementSibling;
 const groupCreate=groupHeading?.nextElementSibling;
 const groupJoin=groupCreate?.nextElementSibling;
 const groupList=groupJoin?.nextElementSibling;
 const chatParts=[chatHeading,chatList],groupParts=[groupHeading,groupCreate,groupJoin,groupList],contactParts=[search,hint,results];
 const setMode=mode=>{
  side.classList.add('sidebar-open');
  for(const el of chatParts)if(el)el.hidden=mode!=='chats';
  for(const el of groupParts)if(el)el.hidden=mode!=='groups';
  for(const el of contactParts)if(el)el.hidden=mode!=='contacts';
  if(mode==='contacts')search?.focus();
  for(const b of rail.querySelectorAll('.rail-item[data-mode]'))b.classList.toggle('active',b.dataset.mode===mode);
 };
 const rail=document.createElement('nav');rail.className='nav-rail';
 const logo=document.createElement('div');logo.className='rail-logo';logo.textContent='N';rail.append(logo);
 for(const [mode,label] of [['chats','☏ Chatlar'],['groups','♧ Guruhlar'],['contacts','♙ Kontaktlar']]){
  const b=button(label,()=>setMode(mode));b.className='rail-item';b.dataset.mode=mode;rail.append(b);
 }
 const settings=button('⚙ Sozlamalar',profile);settings.className='rail-item';rail.append(settings);
 const adminButton=button('♛ Admin',admin);adminButton.className='rail-item admin-rail';adminButton.hidden=true;rail.append(adminButton);
 const details=document.createElement('aside');details.className='detail-pane';
 const icon=document.createElement('div');icon.className='detail-avatar';icon.textContent='N';
 const title=document.createElement('h2');title.textContent='NexChat';
 const description=document.createElement('p');description.textContent='Suhbatni tanlang';
 details.append(icon,title,description);
 layout.prepend(rail);layout.append(details);
 setMode('chats');
 side.classList.remove('sidebar-open');
 return {details,adminButton,setMode};
}
