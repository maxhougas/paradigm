const FRAMURL = 'framconts.htm#'

const LOGOPAGES = ['Logo', []]
const MISSIONPAGES = ['Mission Statement', []]
const METAPAYL = ['Meta', [LOGOPAGES, MISSIONPAGES]]

const SKILLTOYPAGES = ['Skill Toys', ['Begleri', 'Knuckle Rolers']]
const PUZZLEPAGES = ['Puzzles', ['Puzzles of the First Kind', 'Puzzles of the Second Kind']]
const STOREPAYL = ['Store', [SKILLTOYPAGES, PUZZLEPAGES]]

const GPGS = [METAPAYL, STOREPAYL]

const FILLER = '*Begel Larry'
const LFILLER = '*PARADIGM TOYS*SKILL TOYS*BEGLERI*KNUCKLE ROLLERS*WEARABLES*CLASSIC PUZZELS*LOREM IPSUM*AND A FEW OTHER THINGS AS WELL'
const BLANK = 'THIS SPACE INTENTIONALLY LEFT BLANK'

const MARQUEETEXT = 'Skill Toys. Puzzles. Fidgets. Skill Toys. Puzzles. Fidgets. Skill Toys. Puzzles. Fidgets. Skill Toys. Puzzles. Fidgets. Skill Toys. Puzzles. Fidgets.&nbsp'

const TAGLINE = 'Paradigm Toys – Skill Toys. Fidgets. Puzzles.'
const ALTTAGLINE = 'Paradigm Toys - Play with Prupose.'
const MISSIONSTATEMENT = 'Paradigm Toys offers high-quality skill toys, fidgets, and puzzles for enthusiasts seeking a unique, tactile experience.'

const BEGLERI = [
 {desc:'DESCRIPTION',pric:'$59.95',stat:'resources/Rotating_Display.blend10000.png',dyn:'resources/Vertebrae_Bead_render_v3_Optimized.gif',link:'https://www.etsy.com/shop/ParadigmToys'},
 {desc:'DESCRIPTION',pric:'$59.95',stat:'resources/Rotating_Display.blend10000.png',dyn:'resources/Vertebrae_Bead_render_v3_Optimized.gif',link:'https://www.etsy.com/shop/ParadigmToys'},
 {desc:'DESCRIPTION',pric:'$59.95',stat:'resources/Rotating_Display.blend10000.png',dyn:'resources/Vertebrae_Bead_render_v3_Optimized.gif',link:'https://www.etsy.com/shop/ParadigmToys'},
 {desc:'DESCRIPTION',pric:'$59.95',stat:'resources/Rotating_Display.blend10000.png',dyn:'resources/Vertebrae_Bead_render_v3_Optimized.gif',link:'https://www.etsy.com/shop/ParadigmToys'},
 {desc:'DESCRIPTION',pric:'$59.95',stat:'resources/Rotating_Display.blend10000.png',dyn:'resources/Vertebrae_Bead_render_v3_Optimized.gif',link:'https://www.etsy.com/shop/ParadigmToys'},
 {desc:'DESCRIPTION',pric:'$59.95',stat:'resources/Rotating_Display.blend10000.png',dyn:'resources/Vertebrae_Bead_render_v3_Optimized.gif',link:'https://www.etsy.com/shop/ParadigmToys'},
 {desc:'DESCRIPTION',pric:'$59.95',stat:'resources/Rotating_Display.blend10000.png',dyn:'resources/Vertebrae_Bead_render_v3_Optimized.gif',link:'https://www.etsy.com/shop/ParadigmToys'},
 {desc:'DESCRIPTION',pric:'$59.95',stat:'resources/Rotating_Display.blend10000.png',dyn:'resources/Vertebrae_Bead_render_v3_Optimized.gif',link:'https://www.etsy.com/shop/ParadigmToys'},
 {desc:'DESCRIPTION',pric:'$59.95',stat:'resources/Rotating_Display.blend10000.png',dyn:'resources/Vertebrae_Bead_render_v3_Optimized.gif',link:'https://www.etsy.com/shop/ParadigmToys'},
 {desc:'DESCRIPTION',pric:'$59.95',stat:'resources/Rotating_Display.blend10000.png',dyn:'resources/Vertebrae_Bead_render_v3_Optimized.gif',link:'https://www.etsy.com/shop/ParadigmToys'}
]

const PAGES = [
 {pagename:'Logo',inner:mklogo()},
 {pagename:'Mission Statement',inner:mkh1(MISSIONSTATEMENT)},
 {pagename:'Begleri',inner:mkdisplayboxes(BEGLERI),length:true},
 {pagename:'Knuckle Rollers',inner:mkh1('Knuckle Rollers')}
]

function mkh1(txt = 'DE FAULT')
{
 let head = document.createElement("h1")
 head.innerHTML = txt
 return head
}

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
 marquee.style.borderRadius = '0rem'
 marquee.appendChild(slide)

 return marquee
}

function mktopnav()
{
}

/*
function mksidenav()
{
 let sn = document.createElement('div')
 sn.className = 'sidenav'
 sn.style.borderStyle = 'hidden solid hidden hidden'
 sn.style.borderColor = 'var(--alt-border-col)'
 sn.style.justifyContent = 'flex-start'
 sn.style.padding = '0rem 0.5rem 0rem 0.5rem'
 sn.style.backgroundColor = 'var(--griptape-gray-dark)'

 return sn
}
*/

function mklogo()
{
 let img = document.createElement('img')
 img.src = 'resources/Color Logo No-Subtext.png'
 img.alt = 'Paradigm Toys Logo – Skill Toys, Fidgets, Puzzles'
 img.style.width = '50%'

 let imgbx = document.createElement('div')
 imgbx.className = 'imagebox'
 imgbx.style.height = 'min-content'

 let tag = document.createElement('h1')
 tag.innerHTML = TAGLINE

 let hint = document.createElement('div')
 hint.innerHTML = '(scroll down)'
 imgbx.append(img,tag,hint)

 let fullwidth = document.createElement('div')
 fullwidth.style.flexFlow = 'row nowrap'
 fullwidth.append(imgbx)
 fullwidth.className = 'fullwidth'

 return fullwidth 
}

function mkframe()
{
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
 foot.style.borderStyle = 'solid none solid none'
 foot.style.height = '100%' // 'calc(2*var(--def-border-width) + 3rem)'

 let cw = document.createElement('div')
 const d = new Date()
 cw.innerHTML = '<text>© ' + d.getFullYear() + ' Paradigm Toys</text>'
 cw.style.gridColumn = '2'

 let img = document.createElement('img')
 img.src = 'resources/Flat Logo Reduced.png' 
 img.style.height = '1rem'

 let imgbox = document.createElement('div')
 imgbox.style.height = '100%'
 imgbox.style.width = '100%'
 imgbox.style.flexDirection = 'row'
 imgbox.style.justifyContent = 'right'
 imgbox.style.gridColumn = '3'
 imgbox.append(img)

 foot.append(cw,imgbox)

 return foot
}

function mkanchor(superego)
{
 let anchor = document.createElement('a')
 anchor.id = superego
 return anchor
}

function mkdisplaybox(description, price, staticpic, dynamicpic, url)
{
 let imgguy = document.createElement('img');
 imgguy.className = 'imgguy'
 imgguy.src = staticpic
 imgguy.style.maxWidth = '100%'
 imgguy.style.maxHeight = '100%'

 let pinkbox = document.createElement('div');
 pinkbox.className = 'pinkbox'
 pinkbox.style.backgroundColor = 'var(--paradigm-pink)'
 pinkbox.style.flexDirection = 'row'
 pinkbox.style.height = '3rem'
 pinkbox.style.padding = '1rem'
 pinkbox.innerHTML = '<text style="color:white">View on Etsy&nbsp</text><img style="height:1rem" src="resources/Link-Icon.png"/>'

 let whitebox = document.createElement('div');
 whitebox.className = 'whitebox'
 whitebox.style.borderRadius = '0rem 0rem 1rem 1rem'
 whitebox.style.backgroundColor = 'rgba(255,255,255,0.75)'
 whitebox.style.position = 'absolute'
 whitebox.style.top = 'calc(100% - 5rem)'
 whitebox.style.height = '5rem'
 whitebox.style.display = 'none'
 whitebox.style.padding = '1rem'
 whitebox.append(pinkbox)

 let picbox = document.createElement('div')
 picbox.className = 'picbox'
 picbox.style.position = 'relative'
 picbox.style.backgroundColor = 'var(--alt-bgd-col)'
 picbox.append(imgguy,whitebox)

 let desc = document.createElement('div')
 desc.style.maxWidth = '50%'
 desc.innerHTML = '<text>'+description+'</text>'

 let pric = document.createElement('div')
 pric.style.maxWidth = '50%'
 pric.style.justifyContent = 'right'
 pric.style.flexFlow = 'row nowrap'
 pric.innerHTML = '<text>'+price+'</text>'

 let wordbox = document.createElement('div')
 wordbox.className = 'wordbox'
 wordbox.style.flexFlow = 'row nowrap'
 wordbox.style.backgroundColor = 'var(--alt-bgd-col)'
 wordbox.style.height = '100%'
 wordbox.style.padding = '1rem'
 wordbox.append(desc,pric)

 function mausing(e,inout)
 {
  let pic = e.target.firstElementChild.firstElementChild
  let mod = e.target.firstElementChild.children[1]
  pic.src = inout ? dynamicpic : staticpic
  mod.style.display = inout ? 'flex' : 'none'
 }

 let dbox = document.createElement('div')
 dbox.className = 'display-box'
 dbox.append(picbox,wordbox)
 dbox.addEventListener('mouseenter',e => mausing(e,true))
 dbox.addEventListener('mouseleave',e => mausing(e,false))

 let outerlink = document.createElement('a')
 outerlink.className = 'display-box-out'
 outerlink.href = url
 outerlink.target = '_top'
 outerlink.append(dbox)

 return outerlink 
}

function mkdisplayboxes(prods)
{
 let boxes = document.createElement('div')
 boxes.className = 'products'
 prods.forEach(e => boxes.append(mkdisplaybox(e.desc,e.pric,e.stat,e.dyn,e.link)))

 return boxes
}

function mkpage(pagename, inner, length = false)
{
 let page = document.createElement('div')
 page.className = length ? 'page-long' : 'page-short'
 page.id = sannam(pagename)
 page.append(inner)

 return page
}

function mkpages(pages)
{
 return pages.map(e => mkpage(e.pagename,e.inner,e.length ?? false))
}

function mkcover()
{
 let cover = document.createElement('div')
 cover.style.height = '100vh'
 cover.style.width = '100vw'
 cover.className = 'cover'

 let mar = mkmarquee(MARQUEETEXT)
 mar.style.gridColumn = '1'

 let fram = mkframe()
 fram.style.gridColumn = '1'

 let foot = mkfooter()
 foot.style.gridColumn = '1'

 cover.append(mar,fram,foot)
 return cover
}

function mkaccordionel(txt,cbf)
{
 el = document.createElement('div')
 el.className = 'accordion-element'
 el.style.padding = '0.5rem'
 el.style.display = 'none'
 el.style.flexFlow = 'row nowrap'
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

