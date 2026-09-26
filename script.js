const artistGrid = document.getElementById("artistGrid");

const artists = [
  {
    name: "عباده العبود",
    type: "تمثيل",
    bio: "ممثل خريج الجامعة العربية الدولية – كلية الفنون، قسم التمثيل والإخراج السينمائي، دفعة 2025.",
    works: "الاغتصاب، عطيل، صاحبة اللوكاندا، اليوم السابع."
  }
];

function showArtists(filter = "all") {
  const filteredArtists =
    filter === "all"
      ? artists
      : artists.filter(artist => artist.type === filter);

  artistGrid.innerHTML = filteredArtists.map(artist => `
    <article class="artist">
      <div class="portrait"></div>

      <div class="artist-info">
        <p class="eyebrow">${artist.type}</p>
        <h3>${artist.name}</h3>
        <p>${artist.bio}</p>
        <p>من أعماله: ${artist.works}</p>
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



