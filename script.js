// ====== แก้ไขข้อมูลร้านและเมนูตรงนี้ ======
// แต่ละรายการ: [ชื่อ, ชื่อภาษาลาว, HOT, ICE, SHAKE]  (null = ไม่มี แสดงเป็น –)
const SHOP = { name: 'DADA CAFE', lao: 'ດາດາ ຄາເຟ', tagline: 'ORGANIC COFFEE ROASTERS', note: 'Prices in Kip · K = 1,000 ₭' };

const SIGNATURE = {
  featured: { name: 'Iced Americano Honey Lemon', lao: 'ກາເຟດຳ ນ້ຳເຜິ້ງໝາກນາວ', label: 'ICE', price: '57K' },
  items: [
    { name: 'Americano Orange', lao: 'ອາເມຣິກາໂນ ນ້ຳໝາກກ້ຽງ', price: '65K', emoji: '🍊' },
    { name: 'Coconut Americano', lao: 'ອາເມຣິກາໂນ ນ້ຳໝາກພ້າວ', price: '65K', emoji: '🥥' },
    { name: 'Iced Latte', lao: 'ລາເຕ້ເຢັນ', price: '55K', emoji: '🥛' },
    { name: 'Iced Cappuccino', lao: 'ຄາປູຊິໂນເຢັນ', price: '50K', emoji: '☕' },
  ],
};

const SECTIONS = {
  coffee: {
    title: 'COFFEE', lao: 'ກາເຟ', color: '#8a5530', cols: ['HOT', 'ICE', 'SHAKE'],
    items: [
      ['Americano', 'ອາເມຣິກາໂນ', '40K', '43K', null],
      ['Latte', 'ລາເຕ້', '45K', '55K', '65K'],
      ['Cappuccino', 'ຄາປູຊິໂນ', '42K', '50K', '65K'],
      ['Espresso', 'ເອສເປຣສໂຊ', '35K', '50K', '55K'],
      ['Mocha', 'ມອຄຄາ', '50K', '59K', '69K'],
      ['Flat White', 'ແຟລັດໄວ', '40K', '50K', null],
      ['Vanilla Latte', 'ວານິລາລາເຕ້', '50K', '58K', null],
      ['Caramel Latte', 'ຄາຣາເມວລາເຕ້', '50K', '58K', '75K'],
      ['Hazelnut Cappuccino', 'ເຮເຊວນັດ ຄາປູຊິໂນ', '50K', '58K', null],
      ['Espresso Macchiato', 'ມັກຄີອາໂຕ', '45K', null, null],
      ['Black Honey Lemon', 'ກາເຟດຳ ນ້ຳເຜິ້ງໝາກນາວ', '50K', '57K', null],
      ['Black Soda', 'ກາເຟດຳ ໂຊດາ', null, '50K', null],
      ['Black Orange Juice', 'ກາເຟດຳ ນ້ຳໝາກກ້ຽງ', null, '65K', null],
      ['Cold Brew', 'ໂຄລບຣູ', null, '65K', null],
      ['Drip Coffee', 'ກາເຟດຣິບ', '65K', '70K', null],
    ],
  },
  tea: {
    title: 'TEA & MILK', color: '#4f9a6a', cols: ['HOT', 'ICE', 'SHAKE'],
    items: [
      ['Matcha', 'ມັດຊະ', '60K', '65K', '75K'],
      ['Chocolate', 'ຊັອກໂກແລັດ', '50K', '57K', '65K'],
      ['Milk Tea', 'ຊານົມ', null, '57K', '65K'],
      ['Milk', 'ນົມ', '50K', '55K', '59K'],
      ['Lemon Tea', 'ຊາໝາກນາວ', '45K', '50K', null],
      ['Honey Lemon', 'ນ້ຳເຜິ້ງໝາກນາວ', '45K', '50K', null],
    ],
  },
  hotTea: {
    title: 'HOT TEA', lao: 'ຊາຮ້ອນ', color: '#4f9a6a', price: '45K',
    items: [['Green Tea', 'ຊາຂຽວ'], ['Black Tea', 'ຊາດຳ'], ['Butterfly Pea Tea', 'ຊາດອກອັນຊັນ'], ['Dilmah Tea', 'ຊາດິວມາ']],
  },
  soda: {
    title: 'ITALIAN SODA', color: '#4a7fb0', cols: ['ICE'],
    items: [
      ['Lemon Soda', 'ໂຊດາໝາກນາວ', '50K'],
      ['Raspberry Soda', 'ໂຊດາຣາສເບີຣີ', '55K'],
      ['Strawberry Soda', 'ໂຊດາສະຕໍເບີຣີ', '55K'],
      ['Passion Fruit Soda', 'ໂຊດາໝາກເສົາວະລົດ', '55K'],
      ['Peach Soda', 'ໂຊດາພີດ', '55K'],
      ['Blue Lemon Soda', 'ໂຊດາບລູເລມອນ', '55K'],
    ],
  },
  shake: {
    title: 'FRUIT SHAKE', color: '#d9803f', cols: ['SHAKE'],
    items: [
      ['Mango', 'ໝາກມ່ວງ', '55K'], ['Melon', 'ແຕງໄທ', '55K'], ['Orange Juice', 'ນ້ຳໝາກກ້ຽງ', '50K'],
      ['Watermelon', 'ໝາກໂມ', '55K'], ['Apple', 'ໝາກແອັບເປິ້ນ', '55K'], ['Banana', 'ໝາກກ້ວຍ', '55K'],
      ['Strawberry Banana', 'ສະຕໍເບີຣີ ໝາກກ້ວຍ', '65K'], ['Banana Almond', 'ໝາກກ້ວຍ ອາມອນ', '65K'],
      ['Strawberry Milk', 'ນົມສະຕໍເບີຣີ', '57K'], ['Strawberry Yogurt', 'ສະຕໍເບີຣີ ໂຍເກິດ', '75K'],
    ],
  },
};
const BEANS = ['Catimor', 'Typica', 'Ethiopia', 'Robusta', 'Catuai', 'Costa Rica', 'Java'];
// ==========================================

const esc = s => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const cell = v => `<span class="c ${v ? '' : 'none'}">${v ? esc(v) : '–'}</span>`;

function tableHTML(sec, items, { title = true } = {}) {
  const n = sec.cols.length;
  const head = title ? `
    <div class="t-head" style="--c:${sec.color}; --n:${n}">
      <h3>${esc(sec.title)}${sec.lao ? ` <small>${esc(sec.lao)}</small>` : ''}</h3>
      ${sec.cols.map(c => `<span class="c">${c}</span>`).join('')}
    </div>` : '';
  const rows = items.map(it => {
    const vals = it.slice(2);
    return `<div class="row" style="--n:${n}">
      <span class="nm">${esc(it[0])}<small>${esc(it[1])}</small></span>
      ${vals.map(cell).join('')}
    </div>`;
  }).join('');
  return `<div class="tbl" style="--c:${sec.color}">${head}${rows}</div>`;
}

const hotTeaHTML = () => {
  const s = SECTIONS.hotTea;
  return `<div class="tbl hot" style="--c:${s.color}">
    <div class="t-head" style="--c:${s.color}; --n:1"><h3>${s.title} <small>${s.lao}</small></h3><span class="c big">${s.price}</span></div>
    ${s.items.map(i => `<div class="row" style="--n:0"><span class="nm">${esc(i[0])}</span><span class="lao-r">${esc(i[1])}</span></div>`).join('')}
  </div>`;
};

const signatureHTML = () => `
  <div class="eyebrow">SIGNATURE</div>
  <div class="feature">
    <div class="f-emoji">🧊</div>
    <div class="f-text"><b>${esc(SIGNATURE.featured.name)}</b><small>${esc(SIGNATURE.featured.lao)}</small></div>
    <div class="f-price"><span>${SIGNATURE.featured.label}</span>${SIGNATURE.featured.price}</div>
  </div>
  <div class="sig-grid">
    ${SIGNATURE.items.map(i => `
      <div class="sig">
        <div class="s-emoji">${i.emoji}</div>
        <b>${esc(i.name)}</b><small>${esc(i.lao)}</small>
        <span class="badge">${i.price}</span>
      </div>`).join('')}
  </div>`;

const beansHTML = () => `
  <div class="eyebrow">DRIP COFFEE BEANS</div>
  <h2 class="beans-h">เลือกเมล็ดกาแฟ<br><small>Choose your beans</small></h2>
  <div class="bean-grid">
    ${BEANS.map(b => `<div class="bean"><span>🫘</span>${esc(b)}</div>`).join('')}
  </div>
  <p class="note" style="text-align:center;margin-top:6cqw">${SHOP.tagline}</p>`;

// ====== เมนูอาหาร (รูปอยู่ที่ images/food/<img>-NN.jpg ตามลำดับรายการ) ======
// รายการ: [ชื่อ, ราคา, หมายเหตุ]  (ขึ้นบรรทัดใหม่ในราคาด้วย \n)
const FOOD = {
  breakfast: { title: 'Breakfast', lao: 'ອາຫານເຊົ້າ', color: '#d9803f', per: 3, items: [
    ['Shrimp Rice Congee', '70K'], ['Pork Rice Congee', '65K'], ['Chicken Rice Congee', '65K'],
    ['Bread & Egg', '60K'], ['Omelette Bacon', '105K'], ['Double Bacon', '99K'],
    ['Sausage Ham', '99K'], ['Bacon Egg', '99K'],
    ['Avocado Egg Sandwich', 'L 95K\nS 62K'], ['Tuna Sandwich', 'L 89K\nS 58K'],
    ['Egg Sandwich', 'L 89K\nS 58K'], ['Ham Cheese', 'L 95K\nS 62K'],
    ['Tuna Avocado & Egg', '140K', 'Croissant'], ['Avocado Egg', '132K', 'Croissant'],
    ['Bacon Egg', '132K', 'Croissant'], ['Avocado Scrambled Eggs', '132K', 'Croissant'],
    ['Ham & Cheese', '125K', 'Croissant'], ['Tuna & Egg', '125K', 'Croissant'],
  ] },
  rice: { title: 'Rice', lao: 'ເຂົ້າ', color: '#b5532a', per: 3, items: [
    ['Pork & Kailan Rice', '68K', '+ Fried egg 10K'], ['Seafood Kailan Rice', '78K', '+ Fried egg 10K'],
    ['Chicken & Kailan Rice', '68K', '+ Fried egg 10K'], ['Seafood Fried Rice', '60K'],
    ['Pork Fried Rice', '55K'], ['Chicken Fried Rice', '55K'], ['Tuna Fried Rice', '60K'],
    ['Tofu Fried Rice', '55K'], ['Tonkatsu', '105K'],
    ['Holy Basil Chicken Rice', '65K', '+ Fried egg 10K'], ['Basil Beef over Rice', '78K', '+ Fried egg 10K'],
    ['Basil Pork Rice', '75K', '+ Fried egg 10K'], ['Basil Tuna Rice', '75K', '+ Fried egg 10K'],
    ['Holy Basil Seafood Rice', '70K', '+ Fried egg 10K'], ['Minced Pork Omelette Rice', '70K'],
    ['Sweet & Sour Pork', '68K', '+ Fried egg 10K'], ['Sweet & Sour Shrimp', '72K', '+ Fried egg 10K'],
    ['Sweet & Sour Chicken', '68K', '+ Fried egg 10K'], ['Pork Curry with Rice', '120K'],
    ['Chicken Curry with Rice', '115K'], ['Beef Curry with Rice', '130K'],
    ['Stir-fried Mixed Vegetables', '60K'], ['Steamed Rice', '25K'], ['Fried Egg', '13K'],
  ] },
  burger: { title: 'Burgers', lao: '', color: '#8a5330', per: 3, items: [
    ['Bacon Burger', '130K'], ['Chicken Burger', '125K'], ['Spicy Burger', '125K'],
    ['Basic Burger', '115K'], ['Classic Burger', '125K'], ['Tower Burger', '185K'],
    ['French Fries', '55K'], ['Cheese Burger', '130K'], ['Mini Burger', '125K'],
    ['Set 1', '95K', 'Crispy chicken burger'], ['Set 2', '110K', 'Crispy chicken burger + Pepsi'],
    ['Set 3', '145K', 'Crispy chicken burger + Pepsi'],
  ] },
  salad: { title: 'Salad', lao: 'ສະລັດ', color: '#4f9a6a', per: 3, items: [
    ['Chicken Salad', '100K'], ['Avocado Salad', '99K'], ['Chicken Salad with Boiled Egg', '115K'],
    ['Chicken, Boiled Egg & Avocado Salad', '150K'], ['Crispy Shrimp Salad', '140K'],
    ['Tuna Salad', '100K'], ['Mixed Fruit Salad with Yogurt', '95K'],
    ['Tuna, Avocado & Boiled Egg Salad', '135K', '+ Boiled egg 10K'],
  ] },
  steak: { title: 'Steak & Noodles', lao: '', color: '#7a4a6a', per: 3, items: [
    ['Spaghetti Carbonara', '95K'], ['Spaghetti Spicy Seafood', '105K'],
    ['Fried Chicken', '80K'], ['Korean Fried Chicken', '85K'],
    ['Pork Chop Steak', '175K'], ['Chicken Steak', '145K'],
    ['Shin Ramyun', '75K', 'Chicken + boiled egg + cheese'], ['Jam Pong', '83K', 'Squid + egg + cheese'],
  ] },
  bakery: { title: 'Bakery', lao: '', color: '#a0643a', per: 3, items: [
    ['Cookie Cornflake', '60K'], ['Cookie Chocolate Chips', '60K'], ['Cookie Oat', '60K'],
    ['Almond Croissant', '60K'], ['Choco Almond Croissant', '65K'], ['Pain Suisse', '55K'],
    ['Butter Croissant', '50K'], ['Garlic Cheese Bun', '55K'],
  ] },
};

const foodRow = (img, n, it) => `
  <div class="fi">
    <img src="images/food/${img}-${String(n).padStart(2, '0')}.jpg" alt="${esc(it[0])}">
    <div class="fn"><b>${esc(it[0])}</b>${it[2] ? `<small>${esc(it[2])}</small>` : ''}</div>
    <div class="fp">${esc(it[1]).replace('\n', '<br>')}</div>
  </div>`;

function foodPages(key) {
  const c = FOOD[key];
  const out = [];
  const total = Math.ceil(c.items.length / c.per);
  const base = Math.floor(c.items.length / total);
  const extra = c.items.length % total; // หน้าแรก ๆ ได้รายการเพิ่ม เพื่อให้แต่ละหน้าจำนวนใกล้เคียงกัน
  let start = 0;
  for (let p = 0; p < total; p++) {
    const size = base + (p < extra ? 1 : 0);
    const rows = c.items.slice(start, start + size).map((it, i) => foodRow(key, start + i + 1, it)).join('');
    start += size;
    out.push(`<h2 class="fh" style="--c:${c.color}">${esc(c.title)}${c.lao ? ` <small>${esc(c.lao)}</small>` : ''}${total > 1 ? `<em>${p + 1}/${total}</em>` : ''}</h2><div class="fl ${c.per <= 4 ? 'big' : ''}">${rows}</div>`);
  }
  return out;
}

const dividerHTML = () => `
  <div class="divider">
    <div class="d-emoji">🍽️</div>
    <h2 style="border:0">FOOD MENU</h2>
    <div class="d-lao">ອາຫານ</div>
    <p class="text">Breakfast · Rice · Burgers<br>Salad · Steak &amp; Noodles · Bakery</p>
    <p class="note" style="text-align:center;margin-top:8cqw">${SHOP.note}</p>
  </div>`;

// สร้างหน้า + สารบัญ (เลขหน้าคำนวณอัตโนมัติ)
const cof = SECTIONS.coffee;
const sh = SECTIONS.shake;
const roomy = h => h.replace('class="tbl"', 'class="tbl roomy"').replace('class="tbl hot"', 'class="tbl hot roomy"');
const pages = [];
const TOC = [];
const add = (p, toc) => { if (toc) TOC.push([toc[0], toc[1] || '', pages.length]); pages.push(p); };

add({ cls: 'cover', html: `
    <div class="logo">☕</div>
    <div class="lao-name">${SHOP.lao}</div>
    <div class="en-name">${SHOP.name}</div>
    <div class="script">Coffee<br>Menu</div>
    <div class="tag">${SHOP.tagline}</div>` });
add({ html: '' }); // สารบัญ เติมทีหลัง
add({ html: signatureHTML() }, ['Signature']);
add({ html: dividerHTML() });
[['breakfast', 'Breakfast', 'ອາຫານເຊົ້າ'], ['rice', 'Rice', 'ເຂົ້າ'], ['burger', 'Burgers'],
 ['salad', 'Salad', 'ສະລັດ'], ['steak', 'Steak & Noodles'], ['bakery', 'Bakery']].forEach(([k, t, l]) => {
  foodPages(k).forEach((h, i) => add({ html: h }, i === 0 ? [t, l] : null));
});
add({ html: tableHTML(cof, cof.items.slice(0, 10)) }, ['Coffee', 'ກາເຟ']);
add({ html: roomy(tableHTML({ ...cof, title: 'BLACK & BREW', lao: 'ກາເຟດຳ' }, cof.items.slice(10))) });
add({ html: roomy(tableHTML(SECTIONS.tea, SECTIONS.tea.items)) }, ['Tea & Milk', 'ຊາ ນົມ']);
add({ html: roomy(hotTeaHTML()) + '<div class="big-emoji">🍵</div>' }, ['Hot Tea', 'ຊາຮ້ອນ']);
add({ html: roomy(tableHTML(SECTIONS.soda, SECTIONS.soda.items)) }, ['Italian Soda', 'ໂຊດາ']);
add({ html: tableHTML(sh, sh.items.slice(0, 6)) }, ['Fruit Shake', 'ໝາກໄມ້ປັ່ນ']);
add({ html: roomy(tableHTML(sh, sh.items.slice(6))) + `<p class="note">${SHOP.note}</p>` });
add({ html: beansHTML() }, ['Drip Coffee Beans', 'ເມັດກາເຟ']);
add({ cls: 'cover', html: `
    <div class="logo">🙏</div>
    <div class="lao-name">ຂອບໃຈ</div>
    <div class="en-name">THANK YOU</div>
    <div class="tag">${SHOP.name} · ${SHOP.tagline}</div>` });
if (pages.length % 2) throw new Error('จำนวนหน้าต้องเป็นเลขคู่ (ตอนนี้ ' + pages.length + ')');

pages[1].html = `
  <h2>MENU</h2>
  <div class="toc">
    ${TOC.map(t => `<button class="toc-item" data-page="${t[2]}"><span><b>${esc(t[0])}</b><small>${esc(t[1])}</small></span><i>${t[2] + 1}</i></button>`).join('')}
  </div>
  <p class="note" style="text-align:center">กดที่หัวข้อเพื่อไปยังหน้านั้น</p>`;

// ====== สร้างแผ่นหนังสือ ======
const book = document.getElementById('book');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const indicator = document.getElementById('indicator');

const sheetCount = pages.length / 2;
const sheets = [];

for (let i = 0; i < sheetCount; i++) {
  const front = pages[i * 2];
  const back = pages[i * 2 + 1];
  const el = document.createElement('div');
  el.className = 'sheet';
  el.innerHTML = `
    <div class="page front ${front.cls || ''}">${front.html}${front.cls ? '' : `<div class="page-no">${i * 2 + 1}</div>`}</div>
    <div class="page back ${back.cls || ''}">${back.html}${back.cls ? '' : `<div class="page-no">${i * 2 + 2}</div>`}</div>`;
  el.addEventListener('click', e => {
    if (mobile.matches) return nav(e.clientX < innerWidth / 2 ? -1 : 1);
    goTo(el.classList.contains('flipped') ? current - 1 : current + 1);
  });
  book.appendChild(el);
  sheets.push(el);
}

// โหมดมือถือ: แสดงทีละหน้า
const mobile = matchMedia('(max-width: 700px)');
// มือถือ: หนึ่งหน้า = หนึ่งใบ หมุนพับรอบสันหนังสือด้านซ้าย
const mbook = document.getElementById('mbook');
const leaves = pages.map((p, i) => {
  const el = document.createElement('div');
  el.className = 'leaf';
  el.style.zIndex = pages.length - i;
  el.innerHTML = `<div class="page front ${p.cls || ''}">${p.html}${p.cls ? '' : `<div class="page-no">${i + 1}</div>`}<div class="shade"></div></div>`;
  mbook.appendChild(el);
  return el;
});
mbook.addEventListener('click', e => nav(e.clientX < innerWidth / 2 ? -1 : 1));

let current = 0; // จำนวนแผ่นที่พลิกแล้ว
let page = 0;    // หน้าที่เห็น (เฉพาะมือถือ)
const lastPage = pages.length - 1;

function updateZ(immediate) {
  sheets.forEach((s, i) => {
    const z = i < current ? i : sheetCount - i;
    if (immediate) s.style.zIndex = z;
    else setTimeout(() => (s.style.zIndex = z), 450);
  });
}

function render(immediate) {
  sheets.forEach((s, i) => s.classList.toggle('flipped', i < current));
  const m = mobile.matches;
  book.classList.toggle('at-start', !m && current === 0);
  book.classList.toggle('at-end', !m && current === sheetCount);
  book.classList.toggle('m-right', m && page % 2 === 0);
  book.classList.toggle('m-left', m && page % 2 === 1);
  prevBtn.disabled = m ? page === 0 : current === 0;
  nextBtn.disabled = m ? page === lastPage : current === sheetCount;
  indicator.textContent = m
    ? (page === 0 ? 'ปก' : page === lastPage ? 'ปกหลัง' : `หน้า ${page + 1} / ${pages.length}`)
    : (current === 0 ? 'ปก' : current === sheetCount ? 'ปกหลัง' : `หน้า ${current * 2} - ${current * 2 + 1}`);
  updateZ(immediate);
}

function goTo(n, immediate) {
  current = Math.max(0, Math.min(sheetCount, n));
  render(immediate);
}

function goPage(p) {
  page = Math.max(0, Math.min(lastPage, p));
  current = Math.min(sheetCount, Math.ceil(page / 2));
  leaves.forEach((l, i) => l.classList.toggle('turned', i < page));
  prevBtn.disabled = page === 0;
  nextBtn.disabled = page === lastPage;
  indicator.textContent = page === 0 ? 'ปก' : page === lastPage ? 'ปกหลัง' : `หน้า ${page + 1} / ${pages.length}`;
}

const nav = d => (mobile.matches ? goPage(page + d) : goTo(current + d));

prevBtn.addEventListener('click', () => nav(-1));
nextBtn.addEventListener('click', () => nav(1));

document.addEventListener('keydown', e => {
  if (e.key === 'ArrowRight') nav(1);
  if (e.key === 'ArrowLeft') nav(-1);
});

let touchX = null;
document.addEventListener('touchstart', e => { touchX = e.touches[0].clientX; }, { passive: true });
document.addEventListener('touchend', e => {
  if (touchX === null) return;
  const dx = e.changedTouches[0].clientX - touchX;
  if (Math.abs(dx) > 50) nav(dx < 0 ? 1 : -1);
  touchX = null;
});

// สารบัญ: กดแล้วข้ามไปหน้านั้น
document.querySelector('.stage').addEventListener('click', e => {
  const t = e.target.closest('.toc-item');
  if (!t) return;
  e.stopPropagation();
  const p = +t.dataset.page;
  if (mobile.matches) goPage(p);
  else goTo(p % 2 ? (p - 1) / 2 + 1 : p / 2);
}, true);

// สลับโหมดเมื่อหมุนจอ/ย่อขยายหน้าต่าง
const onModeChange = () => {
  if (mobile.matches) goPage(Math.min(lastPage, current * 2));
  else goTo(current, true);
};
// Safari รุ่นเก่า (iOS < 14) ไม่มี addEventListener บน MediaQueryList
if (mobile.addEventListener) mobile.addEventListener('change', onModeChange);
else mobile.addListener(onModeChange);

goTo(0, true);
goPage(0);
// เปิดหน้าตรง ๆ: index.html?page=N (นับจาก 0)
const startPage = new URLSearchParams(location.search).get('page');
if (startPage !== null && !isNaN(+startPage)) {
  const p = Math.max(0, Math.min(lastPage, +startPage));
  mobile.matches ? goPage(p) : goTo(p % 2 ? (p + 1) / 2 : p / 2, true);
}
