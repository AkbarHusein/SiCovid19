const $ = require('jquery');
const API_ENDPOINT = require('../../global/apiEndpoint');
const CONFIG = require('../../global/config');

const {
  createTemplateOption,
  createTemplateCardVaksinasi,
} = require('../../views/templates/template.js');

const Home = {
  async render() {
    return `
      <section id="home" class="mb-5">
        <div class="jumbotron text-center text-sm-left bg-transparent row wrapper">
          <div class="col-md left-column">
            <p class="lead d-inline-block content-title">
              <img src="./assets/icons/virus-lab-research-magnifier-2.svg" alt="" srcset="">
              <span>Waspada Covid/span>
            </p>
            <h1>Aku, Kamu, Kita Semua </br><span class="two">Bisa Kalahkan</span></br> <span class="three">Covid-19</span></h1>
            <a class="btn btn-primary btn-lg rounded-pill btn-ayovaksin" href="#vaksinasi" role="button">Ayo Vaksin</a>  
          </div>
          <div class="col-md right-column p-0">
            <img src="./assets/images/hero_image.png" alt="Hero Image" class="w-100">
          </div>
        </div>
        <div class="data-wrapper">
          <div class="data-covid row text-center">
            <div class="col-12 col-md-4 col-sm-6">
              <div class="data-title">
                <p class="m-0">Kasus</p>
              </div>
              <div class="count-data">
                <p data-covid="kasus" class="text-warning"></p>
              </div>
            </div>
            <div class="col-12 col-md-4 col-sm-6">
              <div class="data-title">
                <p class="m-0">Kematian</p>
              </div>
              <div class="count-data">
                <p data-covid="kematian" class="text-danger"></p>
              </div>
            </div>
            <div class="col-12 col-md-4 col-sm-12">
              <div class="data-title">
                <p class="m-0">Sembuh</p>
              </div>
              <div class="count-data">
                <p data-covid="sembuh" class="text-success"></p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="protokol" class="mb-5">
        <div class="wrapper text-center row">
            <div class="section-header col-12 mb-5">
              <p class="lead d-inline-block content-title">
                <img src="./assets/icons/vaccine-protection-shield.svg" alt="" srcset="">
                <span>Protokol</span>
              </p>
              <h2 class="section-header-text">Patuhi Protokol Kesehatan Agar Terhindar Dari Covid-19</h2>
            </div>
            <div class="section-content col-12">
              <div class="row">
                <div class="col-12 col-md-6 ilustration-wrapper d-lg-flex d-md-flex align-items-center mb-5">
                    <div class="ilustration-image">
                      <img src="./assets/images/maskman.png" alt="Orang menggunakan masker" class="w-100 h-auto">
                    </div>
                    <div class="ilustration-text mt-3">
                      <h3 class="text-left font-weight-bold">Memakai Masker</h3>
                      <p class="text-left">Selalu menggunakan masker ketika ingin berpergian keluar rumah</p>
                    </div>
                </div>
                <div class="col-12 col-md-6 ilustration-wrapper d-lg-flex d-md-flex align-items-center mb-5">
                    <div class="ilustration-image">
                      <img src="./assets/images/washinghand.png" alt="orang mencuci tangan" class="w-100 h-auto">
                    </div>
                    <div class="ilustration-text mt-3">
                      <h3 class="text-left font-weight-bold">Mencuci Tangan</h3>
                      <p class="text-left">Sesering mungkin mencuci tangan atau memakai handsanitizer</p>
                    </div>
                </div>
              </div>
              <div class="row">
                <div class="col-12 col-md-6 ilustration-wrapper d-lg-flex d-md-flex align-items-center mb-5">
                    <div class="ilustration-image">
                      <img src="./assets/images/market.png" alt="pasar swalayan" class="w-100 h-auto">
                    </div>
                    <div class="ilustration-text mt-3">
                      <h3 class="text-left font-weight-bold">Hindari Swalayan</h3>
                      <p class="text-left">Hindari swalayan dan tempat-tempat pemicu penyebab kerumunan</p>
                    </div>
                </div>
                <div class="col-12 col-md-6 ilustration-wrapper d-lg-flex d-md-flex align-items-center mb-5">
                    <div class="ilustration-image">
                      <img src="./assets/images/coughing.jpg" alt="Orang batuk menutup mulut" class="w-100 h-auto">
                    </div>
                    <div class="ilustration-text mt-3">
                      <h3 class="text-left font-weight-bold">Menutup Mulut Bila Batuk</h3>
                      <p class="text-left">Tutuplah mulut Anda bila hendak bersin ataupun batuk</p>
                    </div>
                </div>
              </div>
            </div>
        </div>
      </section>
      <section id="vaksinasi" class="mb-5">
      <div class="wrapper text-center row">
          <div class="section-header col-12 mb-3">
              <p class="lead d-inline-block content-title">
                  <img src="./assets/icons/Date_range_duotone_line.svg" alt="" srcset="">
                  <span>Vaksinasi</span>
              </p>
              <h2 class="section-header-text">Ayo Vaksinasi!</h2>
          </div>
          <div class="filter-tools col-12">
              <form method="get" class="form-inline justify-content-center">
                  <select class="form-control custom-select mr-sm-2 mb-2 mb-lg-0 text-center" id="filterProvinsi">
                      <option selected>Provinsi</option>
                      <option value="0" name="0" data-wilayah="provinsi">...</option>
                  </select>
                  <select class="form-control custom-select mr-sm-2 mb-2 mb-lg-0 text-center" id="filterKota">
                      <option selected>Kabupaten/Kota</option>
                      <option value="0" name="0" data-wilayah="kota">...</option>
                  </select>
                  <button type="submit" class="btn btn-primary btn-temukan">Temukan</button>
              </form>
          </div>
          <div class="vaksinasi-wrapper col-12 mt-5">
              <h5 class="text-center mb-3">Daftar Vaksinasi</h5>
              <div class="list-vaksinasi">
                <div class="loader lds-spinner m-auto"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
              </div>
          </div>
      </div>
    </section>
    `;
  },

  async afterRender() {
    /* *Data from API https://api.covid19.bnn.go.id/v3/covid-19 */
    const settingsCovid = {
      url: `${API_ENDPOINT.KASUS_HARIAN}`,
      method: 'GET',
      timeout: 0,
    };
    $.ajax(settingsCovid).done((response) => {
      $("[data-covid='kasus']").append(response.cases);
      $("[data-covid='kematian']").append(response.deaths);
      $("[data-covid='sembuh']").append(response.recovered);
    });

    try {
      const data = await fetch(
        `${API_ENDPOINT.LOCATION('DKI Jakarta', 'Kota Jakarta Pusat')}`
      );
      const dataJson = await data.json();
      const dataLocation = dataJson.data;

      /* Remove Loader */
      $('.loader').remove();

      const cardItem = createTemplateCardVaksinasi(dataLocation);
      $('.list-vaksinasi').append(cardItem);
    } catch (error) {
      console.log(error);
    }
  },
};

module.exports = Home;
