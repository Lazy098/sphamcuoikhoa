const item1 = document.querySelector("div.item1");
const item2 = document.querySelector("div.item2");
const item3 = document.querySelector("div.item3");
const item4 = document.querySelector("div.item4");
const item5 = document.querySelector("div.item5");
const item6 = document.querySelector("div.item6");
const item7 = document.querySelector("div.item7");
const item8 = document.querySelector("div.item8");
const item9 = document.querySelector("div.item9");
const item10 = document.querySelector("div.item10");
const item11 = document.querySelector("div.item11");
const item12 = document.querySelector("div.item12");
const info = document.querySelector("div.info");
const close = document.querySelector("span.close");
const container = document.querySelector("div.container");
const buyBtn = document.querySelector("button.buyBtn");
const cutomerName = document.querySelector("input.customerName");
const cutomerAdress = document.querySelector("input.customerAdress");
const cutomerPhone = document.querySelector("input.customerPhone");
const more = document.querySelector("button.more");
const data = [
  "Chổi lau nhà : 2.000.000d",
  "Bộ nồi inox : 1.000.000d",
  "Máy ép da nang : 500.000d",
  "Combo 4 món : 2.500.000 d",
  "Nồi com diện : 1.500.000 d",
  "Chảo nướng : 2.300.000 d",
  "Combo 9 : 2.000.000 d",
  "Combo 10 : 3.000.000 d",
  "Combo 11 : 4.000.000 d",
  "Combo 12 : 5.000.000 d",
  "Combo 13 : 6.000.000 d",
  "Combo 14 : 8.000.000 d",
];
item1.addEventListener("click", () => {
  info.style.display = "block";
  container.style.backgroundColor = "rgba(0,0,0,0.4)";
  buyBtn.insertAdjacentHTML("beforebegin", `<h2>${data[0]}</h2>`);
});

item2.addEventListener("click", () => {
  info.style.display = "block";
  container.style.backgroundColor = "rgba(0,0,0,0.4)";
  buyBtn.insertAdjacentHTML("beforebegin", `<h2>${data[1]}</h2>`);
});

item3.addEventListener("click", () => {
  info.style.display = "block";
  container.style.backgroundColor = "rgba(0,0,0,0.4)";
  buyBtn.insertAdjacentHTML("beforebegin", `<h2>${data[2]}</h2>`);
});

item4.addEventListener("click", () => {
  info.style.display = "block";
  container.style.backgroundColor = "rgba(0,0,0,0.4)";
  buyBtn.insertAdjacentHTML("beforebegin", `<h2>${data[3]}</h2>`);
});

item5.addEventListener("click", () => {
  info.style.display = "block";
  container.style.backgroundColor = "rgba(0,0,0,0.4)";
  buyBtn.insertAdjacentHTML("beforebegin", `<h2>${data[4]}</h2>`);
});

item6.addEventListener("click", () => {
  info.style.display = "block";
  container.style.backgroundColor = "rgba(0,0,0,0.4)";
  buyBtn.insertAdjacentHTML("beforebegin", `<h2>${data[5]}</h2>`);
});

close.addEventListener("click", () => {
  info.style.display = "none";
  container.style.backgroundColor = "rgb(240,255,255)";
  location.reload();
});

more.addEventListener("click", () => {
  item6.insertAdjacentHTML("afterend",`<div class="item item7">
  <img src="https://trustreview.vn/wp-content/uploads/2020/11/noi-chien-khong-dau-loai-nao-tot.jpg"
      class="item_img">
</div>
<div class="item item8">
  <img src="https://bizweb.dktcdn.net/100/367/623/themes/738859/assets/slider_2.jpg?1655433992949"
      class="item_img">
</div>
<div class="item item9">
  <img src="https://cdn2.cellphones.com.vn/358x/media/catalog/product/n/o/noi-chien-khong-dau-xiaomi-mi-smart-air-fryer-1_2.jpg"
      class="item_img">
</div>
<div class="item item10">
  <img src="https://bizweb.dktcdn.net/100/402/179/themes/785106/assets/slider_1.jpg?1603853305671"
      class="item_img">
</div>
<div class="item item11">
  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSo8s2zOc62ahu0SSR-S6H7b16K1CbqbD2mfg&usqp=CAU"
      class="item_img">
</div>
<div class="item item12">
  <img src="https://icdn.dantri.com.vn/thumb_w/640/2021/01/21/1601-dantri-bearsuadocx-1611201534381.jpeg"
      class="item_img">
</div>`)
});
