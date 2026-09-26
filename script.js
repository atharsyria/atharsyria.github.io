const artistGrid = document.getElementById("artistGrid");

const artists = [
  {
    name: "عبادة العبود",
    type: "ممثل أكاديمي",

    bio: "خريج الجامعة العربية الدولية – كلية الفنون، قسم التمثيل والإخراج السينمائي، دفعة 2025.",

    works: `
      <strong>الأعمال المسرحية</strong><br><br>

      الاغتصاب — الدور: الأب مائير — إشراف: نسرين فندي<br>
      عطيل — الدور: عطيل — إشراف: عجاج سليم<br>
      صاحبة اللوكاندا — الدور: الفارس — إشراف: رباب كنعان<br>
      اليوم السابع — الدور: البروفيسور إكس — إشراف: كفاح الخوص

      <br><br>

      <strong>الأفلام السينمائية</strong><br><br>

      لعنة التفكير — المخرج: جان الدريعي<br>
      وطن بلا فيتو — المخرج: أيهم الضبع<br>
      الفلاح — المخرج: أيهم الضبع<br>
      صاحب الصورة — المخرج: رنا كراد

      <br><br>

      <strong>المهارات</strong><br><br>

      التمثيل المسرحي · التمثيل أمام الكاميرا · التقديم والإلقاء ·
      الأداء الصوتي · التعبير الجسدي · العمل الجماعي
    `
  }
];

function showArtists(filter = "all") {
  const filteredArtists =
    filter === "all"
      ? artists
      : artists.filter(artist => artist.type === filter);

  artistGrid.innerHTML = filteredArtists.map(artist => `
    <article class="artist">

      <div class="portrait">
        <img
          src="IMG20240626114749.jpg"
          alt="عبادة العبود"
        >
      </div>

      <div class="artist-info">

        <p class="eyebrow">${artist.type}</p>

        <h3>
          <a href="obada-alabboud.html">${artist.name}</a>
        </h3>

        <p>${artist.bio}</p>

        <div class="works">
          ${artist.works}
        </div>

        <div class="gallery">

          <img
            src="IMG20240626114749.jpg"
            alt="عبادة العبود"
            loading="lazy"
          >

          <img
            src="IMG-20260705-WA0309.jpg"
            alt="عبادة العبود"
            loading="lazy"
          >

          <img
            src="IMG-20260703-WA0090.jpg"
            alt="عبادة العبود"
            loading="lazy"
          >

          <img
            src="Screenshot_٢٠٢٦٠٦٢٨_١٢٥٠٥٦_Instagram.jpg"
            alt="عبادة العبود"
            loading="lazy"
          >

          <img
            src="IMG_20260405_145630_249.jpg"
            alt="عبادة العبود"
            loading="lazy"
          >

          <img
            src="IMG_20260405_150222_107.jpg"
            alt="عبادة العبود"
            loading="lazy"
          >

          <img
            src="IMG_20260405_145555_061.jpg"
            alt="عبادة العبود"
            loading="lazy"
          >

          <img
            src="IMG_20260405_145610_598.jpg"
            alt="عبادة العبود"
            loading="lazy"
          >

          <img
            src="IMG_20260405_145604_097.jpg"
            alt="عبادة العبود"
            loading="lazy"
          >

          <img
            src="IMG_20260405_145625_402.jpg"
            alt="عبادة العبود"
            loading="lazy"
          >

          <img
            src="IMG_20260405_145514_833.jpg"
            alt="عبادة العبود"
            loading="lazy"
          >

          <img
            src="IMG-20260403-WA0094.jpg"
            alt="عبادة العبود"
            loading="lazy"
          >

        </div>

      </div>

    </article>
  `).join("");
}

showArtists();

const filters = document.querySelectorAll(".filter");

filters.forEach(button => {
  button.addEventListener("click", () => {

    filters.forEach(btn => btn.classList.remove("active"));

    button.classList.add("active");

    showArtists(button.dataset.filter);
  });
});


const articleGrid = document.getElementById("articleGrid");

const articles = [
  {
    tag: "بدايات",
    title: "المسرح كخطوة أولى نحو الفنان",
    text: "كيف يمكن للتجربة المسرحية أن تصنع شخصية الممثل وتمنحه أدواته الأولى؟",
    date: "2026"
  },
  {
    tag: "فن سوري",
    title: "الفنان السوري بين الخشبة والشاشة",
    text: "قراءة في اختلاف التجربة بين المسرح والسينما والتلفزيون.",
    date: "2026"
  },
  {
    tag: "ملفات",
    title: "لماذا نحتاج إلى أرشيف للفن السوري؟",
    text: "محاولة لبناء ذاكرة تجمع الفنانين وأعمالهم وتجاربهم في مكان واحد.",
    date: "2026"
  }
];

articleGrid.innerHTML = articles.map(article => `
  <article class="article">

    <span class="tag">${article.tag}</span>

    <h3>${article.title}</h3>

    <p>${article.text}</p>

    <span class="date">${article.date}</span>

  </article>
`).join("");
