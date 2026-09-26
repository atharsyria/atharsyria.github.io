const artistGrid = document.getElementById("artistGrid");

artistGrid.innerHTML = `
  <article class="artist-card">
    <div class="artist-info">
      <p class="eyebrow">تمثيل</p>
      <h3>عبادة العبود</h3>
      <p>
        ممثل خريج الجامعة العربية الدولية – كلية الفنون،
        قسم التمثيل والإخراج السينمائي، دفعة 2025.
      </p>
      <p>
        من أعماله المسرحية: الاغتصاب، عطيل، صاحبة اللوكاندا،
        واليوم السابع.
      </p>
    </div>
  </article>
`;

const articleGrid = document.getElementById("articleGrid");

articleGrid.innerHTML = `
  <article class="article-card">
    <div class="article-content">
      <p class="eyebrow">أثر سوري</p>
      <h3>الفن السوري بين الذاكرة والحاضر</h3>
      <p>
        مساحة للكتابة عن الفنانين السوريين وتجاربهم وأعمالهم.
      </p>
    </div>
  </article>
`;
