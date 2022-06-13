const createTemplateOption = (wilayah, data) => {
  let option = '';
  data.forEach((item) => {
    option += `<option value="${item.province || item}" name="${
      item.province || item
    }" data-wilayah="${wilayah}">${item.province || item}</option>`;
  });
  return option;
};

const createTemplateCardVaksinasi = (cardDataItem) => {
  let card = '';

  cardDataItem.forEach((item) => {
    card += `
    <div class="vaksinasi-item text-left" data-aos="zoom-in" data-aos-duration="500" data-aos="flip-left" data-aos-easing="ease-in-out" data-aos-anchor-placement="top-center" data-aos-offset="-200">
      <div class="card p-3">
        <div class="card-body">
          <h5 class="card-title">${item.province} - ${item.city}</h5>
          <h6 class="card-subtitle mb-2 text-muted">${item.title}</h6>
          <div class="card-text mb-2">
            <ul class="list-group list-group-flush">
              <li class="list-group-item p-0">Alamat : 
                <ul class="list-group list-group-flush">
                  <li class="list-group-item pt-0">${item.address}</li>
                  <li class="list-group-item pt-0"><a href="${
                    item.map
                  }" target="_blank">Open Map</a></li>
                </ul>
              </li>
              <li class="list-group-item p-0">Hari Operasional : 
                <ul class="list-group list-group-flush">
                  <li class="list-group-item pt-0">${item.datestart} - ${
      item.dateend
    }</li>
                </ul>
              </li>
              <li class="list-group-item p-0">Waktu Operasional : 
                <ul class="list-group list-group-flush">
                  <li class="list-group-item pt-0">${item.timestart} - ${
      item.timeend
    }</li>
                </ul>
              </li>
              <li class="list-group-item p-0">Usia : 
                <ul class="list-group list-group-flush">
                  <li class="list-group-item pt-0">${item.agerange}</li>
                </ul>
              </li>
              <li class="list-group-item p-0">Deskripsi : 
                <ul class="list-group list-group-flush">
                  <li class="list-group-item pt-0">${item.description}</li>
                </ul>
              </li>
            </ul>
          </div>
          <p class="mb-0">Pendaftaran : ${item.registration}</p>
          <p class="ml-auto text-danger">${item.isfree ? 'Gratis' : '-'}</p>
        </div>
      </div>
  </div>`;
  });

  return card;
};

const createTemplateLoader = () =>
  `<div class="loader lds-spinner m-auto"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>`;
