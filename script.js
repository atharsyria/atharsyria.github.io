const artists = [
  {
    name: "فنان سوري",
    type: "تمثيل",
    description: "صفحة تعريفية عن الفنان وأعماله وتجربته."
  },
  {
    name: "فنانة سورية",
    type: "إخراج",
    description: "مسيرة فنية وأعمال وتجارب في الإخراج."
  },
  {
    name: "موسيقي سوري",
    type: "موسيقى",
    description: "تجربة موسيقية وأعمال تركت أثرًا في المشهد السوري."
  },
  {
    name: "كاتب سوري",
    type: "كتابة",
    description: "كاتب وأعماله وتجربته في الأدب والفن."
  }
];

const articles = [
  {
    title: "الفن السوري بين الذاكرة والحاضر",
    category: "مقال",
    description: "قراءة في علاقة الفنان السوري بذاكرته وبيئته وتجربته."
  },
  {
    title: "لماذا يبقى المسرح؟",
    category: "مسرح",
    description: "عن المسرح كمساحة للقاء الإنسان بالإنسان."
  },
  {
    title: "من الكواليس",
    category: "كواليس",
    description: "حكايات وتجارب من خلف الستار."
  }
];

const artistGrid = document.getElementById("artistGrid");
const articleGrid = document.getElementById("articleGrid");

function showArtists(filter = "all") {
  artistGrid.innerHTML = "";

  const filteredArtists =
    filter === "all"
      ? artists
      : artists.filter(artist => artist.type === filter);

  filteredArtists.forEach(artist => {
    const card = document.createElement("article");

    card.className = "artist-card";

    card.innerHTML = `
      <div class="artist-image">
        <span>أثر</span>
      </div>

      <div class="artist-info">
        <p class="eyebrow">${artist.type}</p>
        <h3>${artist.name}</h3>
        <p>${artist.description}</p>
        <a href="#" class="more">اقرأ عن الفنان ←</a>
      </div>
    `;

    artistGrid.appendChild(card);
  });
}

function showArticles() {
  articleGrid.innerHTML = "";

  articles.forEach(article => {
    const card = document.createElement("article");

    card.className = "article-card";

    card.innerHTML = `
      <div class="article-content">
        <p class="eyebrow">${article.category}</p>
        <h3>${article.title}</h3>
        <p>${article.description}</p>
        <a href="#" class="more">اقرأ المقال ←</a>
      </div>
    `;

    articleGrid.appendChild(card);
  });
}

document.querySelectorAll(".filter").forEach(button => {
  button.addEventListener("click", () => {
    document
      .querySelectorAll(".filter")
      .forEach(btn => btn.classList.remove("active"));

    button.classList.add("active");

    showArtists(button.dataset.filter);
  });
});

showArtists();
showArticles();



