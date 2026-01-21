function mkmarquee(txt = 'DE FAULT ')
{
 let marquee = document.createElement('div')
 let slide = document.createElement('div')
 let munit = document.createElement('div')
 let head = document.createElement('h1')

 head.className = 'marquee-text'
 head.innerHTML = txt
 head.style.textWrap = 'nowrap'

 munit.style.className = 'marquee-unit'
 munit.style.flexFlow = 'row nowrap'
 munit.style.minWidth = '50%'
 munit.style.width = 'max-content'
 munit.appendChild(head)

 slide.className = 'marquee-slide'
 slide.style.flexFlow = 'row nowrap'
 slide.style.justifyContent = 'flex-start'
 slide.style.minWidth = '200%'
 slide.style.width = 'max-content'
 slide.append(munit,munit.cloneNode(true))
 slide.animate([
   {transform: 'translateX(0%)'},
   {transform: 'translateX(-50%)'}
  ],{
   duration: 30000,
   iterations: Infinity,
 })

 marquee.className = 'marquee'
 marquee.style.alignItems = 'flex-start'
 marquee.style.justifyContent = 'flex-start'
 marquee.style.overflow = 'hidden'
 marquee.appendChild(slide)

 return marquee
}

function mksidenav()
{
 let sn = document.createElement('div')
 sn.className = 'sidenav'
 sn.style.borderStyle = 'hidden solid hidden hidden'
 sn.style.borderColor = 'var(--juicebox-orange-dark)'
 sn.style.justifyContent = 'flex-start'
/*
 sn.style.backgroundColor = 'var(--juicebox-orange)'
*/

 return sn
}

function mklogo()
{
 let imgbx = document.createElement('div')
 imgbx.className = 'imagebox'
 imgbx.style.width = '100vw'
 imgbx.style.height = '100vh'
 
 let img = document.createElement('img')
 img.src = 'resources/Color Logo No-Subtext.png'
 img.alt = 'Paradigm Toys Logo – Skill Toys, Fidgets, Puzzles'
 img.style.width = '50%'

 imgbx.appendChild(img)

 return imgbx 
}

function mkframe() {
 let fram = document.createElement('iframe')
 fram.title = 'Paradigm Toys main frame'
 fram.src = 'framconts.htm'
 fram.style.width = '100%'
 fram.style.height = '100%'
 fram.style.borderStyle = 'none'

 return fram
}

function mkfooter()
{
 let foot = document.createElement('div')
 foot.className = 'footer'
 foot.style.borderTop = '0.25rem solid'
 foot.style.borderBottom = '0.25rem solid'
 foot.style.justifyContent = 'space-between'
 foot.style.flexFlow = 'row nowrap'
 foot.style.padding = '1rem 2rem'
 foot.style.fontSize = '1rem'

 let left = document.createElement('div')
 left.style.width = '0rem'

 let cw = document.createElement('div')
 const d = new Date()
 cw.innerHTML = '© ' + d.getFullYear() + ' Paradigm Toys'
 cw.style.width = 'max-content'
 cw.style.flexFlow = 'row nowrap'

 let img = document.createElement('img')
 img.src = 'resources/Flat Logo Reduced.png' 
 img.style.height = '1rem'

 foot.append(left,cw,img)

 return foot
}

function mkcover()
{
 let cover = document.createElement('div')
 cover.className = 'cover'
 cover.style.width = '100vw'
 cover.style.height = '100vh'
 cover.style.padding = '0.5rem'
 cover.style.display = 'grid'
 cover.style.gridTemplate = '3rem minmax(0%,100%) 3rem / 15rem'
 cover.style.gap = '0.5rem'

 let st = 'Short Test'
 let marstring = '*PARADIGM TOYS*SKILL TOYS*BEGLERI*KNUCKLE ROLLERS*WEARABLES*CLASSIC PUZZELS*LOREM IPSUM*AND A FEW OTHER THINGS AS WELL'
 let welcome = 'Welcome to Paradigm Toys, home of professional begleri! '
 let mar = mkmarquee(marstring)
 mar.style.gridColumn = '1 / span 2'
 mar.style.backgroundColor = 'var(--paradigm-pink)'
 mar.style.borderStyle = 'none none solid none'
 mar.style.borderColor = 'var(--paradigm-pink-dark)'
/*
 let mar2 = mkmarquee(marstring)
 mar2.style.gridColumn = '1 / span 2'
 mar2.style.backgroundColor = 'var(--paradigm-pink)'
 mar2.style.gridColumn = '1 / span 2'
*/

 let sn = mksidenav()
/*
 sn.style.gridColumns = '2 / 1 / span 1 / span 1' 
*/
 sn.id = 'sidenav'

 let fram = mkframe()
/*
 fram.style.gridArea = '2 / 2'
*/

 let foot = mkfooter()
 foot.style.gridColumn = '1 / span 2'

 cover.append(mar,sn,fram,foot)
 return cover
}

function mkdisplaybox()
{
 let dbox = document.createElement('div')
 dbox.className = 'display-box'
 let p0 = document.createElement('div')
 p0.style.backgroundColor = 'white'
 p0.innerHTML = 'PICTURE OF SKILL TOY'
 let p1 = document.createElement('div')
 p1.style.backgroundColor = 'white'
 p1.innerHTML = 'DESCRIPTION OF SKILL TOY'

 dbox.append(p0,p1)

 return dbox
}

function mkaccordionel(text)
{
 el = document.createElement('div')
 el.innerHTML = text
 el.className = 'accordion-element'
 el.style.padding = '0.5rem'
 el.style.display = 'none'
 el.style.flexFlow = 'row nowrap'
 el.style.justifyContent = 'flex-start'
 el.style.borderStyle = 'solid'
 el.style.gridColumn = 2

 return el
}

function mkaccordion(text, links = null)
{
 if(!Array.isArray(text))
  text = [text];
 let acc = document.createElement('div')
 acc.className = 'accordion'
 acc.style.display = 'grid'
 acc.style.gridTemplateColumns = '1fr 9fr'
 acc.style.height = 'min-content'

 let first = document.createElement('div')
 first.className = 'accordion-first'
 first.style.padding = '0.5rem'
 first.style.flexFlow = 'row nowrap'
 first.style.justifyContent = 'flex-start'
 first.style.borderStyle = 'solid'
 first.style.gridColumn = '1 / span 2'

 first.innerHTML = text[0]
 first.addEventListener('click', e => operateaccordion(e.target))
 acc.appendChild(first)
 let i
 for(i = 1; i < text.length; ++i)
  acc.appendChild(mkaccordionel(text[i]))

 return acc
}

function operateaccordion(first)
{
 ch = first.parentElement.children
 let i
 for(i=1;i<ch.length;++i)
  ch.item(i).style.display = ch.item(i).style.display == 'flex' ? 'none' : 'flex'
}
