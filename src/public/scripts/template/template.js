const createTemplateOption = (wilayah, data) => {
  let option = "";
  data.forEach((item) => {
    option += `<option value="${item.province || item}" name="${
      item.province || item
    }" data-wilayah="${wilayah}">${item.province || item}</option>`;
  });
  return option;
};

const createTemplateCardVaksinasi = (cardDataItem) => {
  var btn_next = document.getElementById("btn_next");
  var btn_prev = document.getElementById("btn_prev");
  let card = "";

  var listing_table = document.querySelector(".list-vaksinasi");
  var btn_prev = document.getElementById("btn_prev");
  var page_span = document.getElementById("page");

  btn_prev.style.visibility = "hidden";
  page_span.innerHTML = 1;
  for (let i = 0; i < 3; i++) {
    listing_table.innerHTML += `
        <div class="vaksinasi-item text-left" data-aos="zoom-in" data-aos-duration="500" data-aos="flip-left" data-aos-easing="ease-in-out" data-aos-anchor-placement="top-center" data-aos-offset="-200">
          <div class="card p-3">
            <div class="card-body">
              <h5 class="card-title">${cardDataItem[i].province} - ${
      cardDataItem[i].city
    }</h5>
              <h6 class="card-subtitle mb-2 text-muted">${
                cardDataItem[i].title
              }</h6>
              <div class="card-text mb-2">
                <ul class="list-group list-group-flush">
                  <li class="list-group-item p-0">Alamat : 
                    <ul class="list-group list-group-flush">
                      <li class="list-group-item pt-0">${
                        cardDataItem[i].address
                      }</li>
                      <li class="list-group-item pt-0"><a href="${
                        cardDataItem[i].map
                      }" target="_blank">Open Map</a></li>
                    </ul>
                  </li>
                  <li class="list-group-item p-0">Hari Operasional : 
                    <ul class="list-group list-group-flush">
                      <li class="list-group-item pt-0">${
                        cardDataItem[i].datestart
                      } - ${cardDataItem[i].dateend}</li>
                    </ul>
                  </li>
                  <li class="list-group-item p-0">Waktu Operasional : 
                    <ul class="list-group list-group-flush">
                      <li class="list-group-item pt-0">${
                        cardDataItem[i].timestart
                      } - ${cardDataItem[i].timeend}</li>
                    </ul>
                  </li>
                  <li class="list-group-item p-0">Usia : 
                    <ul class="list-group list-group-flush">
                      <li class="list-group-item pt-0">${
                        cardDataItem[i].agerange
                      }</li>
                    </ul>
                  </li>
                  <li class="list-group-item p-0">Deskripsi : 
                    <ul class="list-group list-group-flush">
                      <li class="list-group-item pt-0">${
                        cardDataItem[i].description
                      }</li>
                    </ul>
                  </li>
                </ul>
              </div>
              <p class="mb-0">Pendaftaran : ${cardDataItem[i].registration}</p>
              <p class="ml-auto text-danger">${
                cardDataItem[i].isfree ? "Gratis" : "-"
              }</p>
            </div>
          </div>
      </div>`;
  }

  var current_page = 1;
  var obj_per_page = 3;
  function totNumPages() {
    return Math.ceil(cardDataItem.length / obj_per_page);
  }

  btn_next.addEventListener("click", () => {
    if (current_page < totNumPages()) {
      current_page++;
      change(current_page);
    }
  });

  btn_prev.addEventListener("click", () => {
    if (current_page > 1) {
      current_page--;
      change(current_page);
    }
  });

  function change(page) {
    var btn_next = document.getElementById("btn_next");
    var btn_prev = document.getElementById("btn_prev");
    var listing_table = document.querySelector(".list-vaksinasi");
    var page_span = document.getElementById("page");
    if (page < 1) page = 1;
    if (page > totNumPages()) page = totNumPages();

    listing_table.innerHTML = "";
    for (var i = (page - 1) * obj_per_page; i < page * obj_per_page; i++) {
      listing_table.innerHTML += `
        <div class="vaksinasi-item text-left" data-aos="zoom-in" data-aos-duration="500" data-aos="flip-left" data-aos-easing="ease-in-out" data-aos-anchor-placement="top-center" data-aos-offset="-200">
          <div class="card p-3">
            <div class="card-body">
              <h5 class="card-title">${cardDataItem[i].province} - ${
        cardDataItem[i].city
      }</h5>
              <h6 class="card-subtitle mb-2 text-muted">${
                cardDataItem[i].title
              }</h6>
              <div class="card-text mb-2">
                <ul class="list-group list-group-flush">
                  <li class="list-group-item p-0">Alamat : 
                    <ul class="list-group list-group-flush">
                      <li class="list-group-item pt-0">${
                        cardDataItem[i].address
                      }</li>
                      <li class="list-group-item pt-0"><a href="${
                        cardDataItem[i].map
                      }" target="_blank">Open Map</a></li>
                    </ul>
                  </li>
                  <li class="list-group-item p-0">Hari Operasional : 
                    <ul class="list-group list-group-flush">
                      <li class="list-group-item pt-0">${
                        cardDataItem[i].datestart
                      } - ${cardDataItem[i].dateend}</li>
                    </ul>
                  </li>
                  <li class="list-group-item p-0">Waktu Operasional : 
                    <ul class="list-group list-group-flush">
                      <li class="list-group-item pt-0">${
                        cardDataItem[i].timestart
                      } - ${cardDataItem[i].timeend}</li>
                    </ul>
                  </li>
                  <li class="list-group-item p-0">Usia : 
                    <ul class="list-group list-group-flush">
                      <li class="list-group-item pt-0">${
                        cardDataItem[i].agerange
                      }</li>
                    </ul>
                  </li>
                  <li class="list-group-item p-0">Deskripsi : 
                    <ul class="list-group list-group-flush">
                      <li class="list-group-item pt-0">${
                        cardDataItem[i].description
                      }</li>
                    </ul>
                  </li>
                </ul>
              </div>
              <p class="mb-0">Pendaftaran : ${cardDataItem[i].registration}</p>
              <p class="ml-auto text-danger">${
                cardDataItem[i].isfree ? "Gratis" : "-"
              }</p>
            </div>
          </div>
      </div>`;
    }
    page_span.innerHTML = page;
    if (page == 1) {
      btn_prev.style.visibility = "hidden";
    } else {
      btn_prev.style.visibility = "visible";
    }
    if (page == totNumPages()) {
      btn_next.style.visibility = "hidden";
    } else {
      btn_next.style.visibility = "visible";
    }
  }
};

const createTemplateLoader = () =>
  `<div class="loader lds-spinner m-auto"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>`;
