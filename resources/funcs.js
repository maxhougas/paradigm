const FRAMURL = 'framconts.htm#'

const LOGOPAGES = ['Logo', []]
const MISSIONPAGES = ['Mission Statement', []]
const METAPAYL = ['Meta', [LOGOPAGES, MISSIONPAGES]]

const SKILLTOYPAGES = ['Skill Toys', ['Begleri', 'Knuckle Rolers']]
const PUZZLEPAGES = ['Puzzles', ['Puzzles of the First Kind', 'Puzzles of the Second Kind']]
const STOREPAYL = ['Store', [SKILLTOYPAGES, PUZZLEPAGES]]

const GPGS = [METAPAYL, STOREPAYL]

const PAGES = ['Logo', 'Just A Page', 'Begleri', 'Knuckle Rollers']
const FILLER = '*Begel Larry'
const LFILLER = '*PARADIGM TOYS*SKILL TOYS*BEGLERI*KNUCKLE ROLLERS*WEARABLES*CLASSIC PUZZELS*LOREM IPSUM*AND A FEW OTHER THINGS AS WELL'
const BLANK = 'THIS SPACE INTENTIONALLY LEFT BLANK'

const TAGLINE = 'Paradigm Toys – Skill Toys. Fidgets. Puzzles.'
const ALTTAGLINE = 'Paradigm Toys - Play with Prupose.'
const MISSIONSTATEMENT = 'Paradigm Toys offers high-quality skill toys, fidgets, and puzzles for enthusiasts seeking a unique, tactile experience.'

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
 sn.style.borderColor = 'var(--alt-border-col)'
 sn.style.justifyContent = 'flex-start'
 sn.style.padding = '0rem 1rem 0rem 0rem'

 return sn
}

function mklogo()
{
 let img = document.createElement('img')
 img.src = 'resources/Color Logo No-Subtext.png'
 img.alt = 'Paradigm Toys Logo – Skill Toys, Fidgets, Puzzles'
 img.style.width = '50%'

 let imgbx = document.createElement('div')
 imgbx.className = 'imagebox'
 imgbx.style.borderStyle = 'none solid none none'
 imgbx.style.borderColor = 'var(--alt-border-col)'
 imgbx.style.padding = 'none'
 let tag = document.createElement('h1')
 tag.innerHTML = TAGLINE
 let hint = document.createElement('div')
 hint.innerHTML = '(scroll down)'
 imgbx.append(img,tag,hint)


 let spcbx = document.createElement('div')
 spcbx.className = 'spacebox'
 spcbx.style.margin = '0.5rem'
 spcbx.style.minWidth = '15rem'
 spcbx.style.width = '15rem'
 spcbx.innerHTML = BLANK 
 
 let fullwidth = document.createElement('div')
 fullwidth.style.flexFlow = 'row nowrap'
 fullwidth.append(imgbx,spcbx)

 return fullwidth 
}

function mkframe() {
 let fram = document.createElement('iframe')
 fram.id = 'frame-outside'
 fram.className = 'frame'
 fram.title = 'Paradigm Toys main frame'
 fram.src = 'framconts.htm'
 fram.style.width = '100%'
 fram.style.height = '100%'
 fram.style.borderStyle = 'none'

 let frambx = document.createElement('div')
 frambx.appendChild(fram)

 return frambx
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

function mkanchor(superego)
{
 let anchor = document.createElement('a')
 anchor.id = superego
 return anchor
}

function mkpage(pagename)
{
 let page = document.createElement('div')
 page.className = 'page'
 page.id = sannam(pagename)
 page.style.display = 'grid'
 page.style.padding = '0.5rem'
 page.style.gap = '0.5rem'
 page.style.width = '100vw'
 page.style.height = '100vh'

 return page
}

function mkpages(gpgs)
{
 let allpgs = []
 function mkoneacc(sect)
 {
  allpgs = allpgs.concat(sect[1].length ? sect[1] : [sect[0]])
 }
 function mksect(sect)
 {
  sect[1].forEach(e => mkoneacc(e))
 }
 gpgs.forEach(e => mksect(e))

 let pg = []
 function finagglepage(e)
 {
  thispg = mkpage(sannam(e))
  thispg.innerHTML = '<h1>'+e+'</h1>'
  pg.push(thispg)
/*
  document.getElementById('frame-inner').appendChild(thispg)
*/
 }
 allpgs.forEach(e => finagglepage(e))

 pg[0].innerHTML = ''
 pg[0].appendChild(mklogo())

 pg[1].innerHTML = '<h1>'+MISSIONSTATEMENT+'</h1>'

 return pg;
}

function mkcover()
{
 let cover = mkpage('cover')
 cover.style.gridTemplate = '3rem minmax(0%,100%) 3rem / 15rem minmax(0%,100%) '

 let mar = mkmarquee(LFILLER)
 mar.style.gridColumn = '1 / span 2'
 mar.style.borderStyle = 'none none solid none'
 mar.style.borderColor = 'var(--alt-border-col)'

 let sn = mksidenav()
 sn.id = 'sidenav'
 sn.className = 'sidenav'
 sn.style.gridColumn = '1'

 let fram = mkframe()
 fram.style.gridColumn = '2 / span 2'

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

function mkaccordionel(txt,cbf)
{
 el = document.createElement('div')
 el.className = 'accordion-element'
 el.style.padding = '0.5rem'
 el.style.display = 'none'
 el.style.flexFlow = 'row nowrap'
 //el.style.justifyContent = 'flex-start'
 el.style.borderStyle = 'solid'
 el.style.gridColumn = 2
 el.innerHTML = txt
 el.addEventListener('click', () => cbf(txt))

 return el
}

function sannam(txt)
{
 return txt.toLowerCase().replaceAll(' ','')
}

function chframsec(txt)
{
 document.getElementById('frame-outside').src = FRAMURL + sannam(txt)
}

function operateaccordion(first)
{
 ch = first.parentElement.children
 let i
 for(i=1;i<ch.length;++i)
  ch.item(i).style.display = ch.item(i).style.display == 'flex' ? 'none' : 'flex'
}

function mkaccordion(head, txt, cbf)
{
 if(!Array.isArray(txt))
  throw new Error('txt is not array in mksnaccordion')

 let acc = document.createElement('div')
 acc.className = 'accordion'
 acc.style.display = 'grid'
 acc.style.gridTemplateColumns = '2fr 8fr'
 acc.style.height = 'min-content'

 let first = document.createElement('div')
 first.className = 'accordion-first accordion-element'
 first.style.padding = '0.5rem'
 first.style.justifyContent = 'flex-start'
 first.style.borderStyle = 'solid'
 first.style.gridColumn = '1 / span 2'
 first.innerHTML = head
 if(txt.length)
  first.addEventListener('click', e => operateaccordion(e.target))
 else
  first.addEventListener('click', () => cbf(head))

 acc.appendChild(first)

 let i
 for(i = 0; i < txt.length; ++i)
  acc.appendChild(mkaccordionel(txt[i], cbf))

 return acc
}

function mksnsection(payl)
{
 sect = document.createElement('div')
 sect.className = 'sidenav-section'
 head = document.createElement('h1')
 head.innerHTML = payl[0]
 sect.appendChild(head)

 let accs = payl[1].map(e => mkaccordion(e[0],e[1],chframsec))
 sect.append(...accs)

 sect.style.height = 'min-content'

 return sect
}


function mkaccordions(gpgs)
{
 sects = []
 gpgs.forEach(e => sects.push(mksnsection(e)))

 return sects
}

