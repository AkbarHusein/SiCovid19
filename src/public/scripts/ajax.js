let result = [];

/* *Kasus harian */
$(async () => {
  try {
    const loader = createTemplateLoader();
    $('.count-data').append(loader);

    const harian = await fetch(`${API_ENDPOINT.KASUS_HARIAN}`);
    const harianData = await harian.json();
    $('.count-data .loader').remove();

    $("[data-covid='kasus']").append(harianData.cases);
    $("[data-covid='kematian']").append(harianData.deaths);
    $("[data-covid='sembuh']").append(harianData.recovered);

    let date = new Date(harianData.updated);

    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    const hour = date.getHours();
    const minute = date.getMinutes();

    const lastUpdate = `${day}/${month}/${year} ${hour}:${minute}`;

    $('.last-update').append(lastUpdate);
  } catch (error) {
    $('.count-data .loader').remove();
    $('.count-data').append(
      `<div class="alert alert-danger">Network Error</div>`
    );
  }
});

$(async () => {
  try {
    const loader = createTemplateLoader();
    $('.list-vaksinasi').append(loader);

    const data = await fetch(
      `${API_ENDPOINT.LOCATION('Sumatera Utara', 'Kota Medan')}`
    );

    const response = await data.json();
    const responseJson = response.data;

    const cardItem = createTemplateCardVaksinasi(responseJson);
    $('.list-vaksinasi .loader').remove();
    $('.list-vaksinasi').append(cardItem);
  } catch (error) {
    $('.list-vaksinasi .loader').remove();
    $('.count-data').append(
      `<div class="alert alert-danger">Network Error</div>`
    );
  }
});

/**
 * Cari data berdasarkan wilayah
 **/

/* *Provinsi */
$(async () => {
  try {
    const provinsi = await fetch(`${API_ENDPOINT.REGIONS}`);
    const provinsiJson = await provinsi.json();
    const provinsiData = provinsiJson.data;

    result = provinsiData;

    const options = createTemplateOption('provinsi', provinsiData);
    $("[data-wilayah='provinsi']").replaceWith(options);
  } catch (error) {
    $("[data-wilayah='provinsi']").replaceWith('Network Error');
  }
});

/* *Kota */
$(() => {
  const provinsiElement = $('#filterProvinsi');

  provinsiElement.on('change', (e) => {
    const provinsi = e.target.value;

    result.forEach((province) => {
      if (province.province === provinsi) {
        const options = createTemplateOption('kota', province.city);
        $("[data-wilayah='kota']").replaceWith(options);
      }
    });
  });
});

/* *Button */
$(() => {
  const btnTemukan = $('.btn-temukan');

  btnTemukan.on('click', async (e) => {
    e.preventDefault();

    const provinsi = $('#filterProvinsi').val();
    const kota = $('#filterKota').val();

    if (
      provinsi.toLowerCase() === 'provinsi' ||
      kota.toLocaleLowerCase() === 'kabupaten/kota'
    ) {
      alert('Pilih Provinsi dan Kota');
    } else {
      try {
        $('.vaksinasi-item').remove();
        $('.list-vaksinasi').append(createTemplateLoader());

        const data = await fetch(`${API_ENDPOINT.LOCATION(provinsi, kota)}`);

        const response = await data.json();
        const responseJson = response.data;

        createTemplateCardVaksinasi(responseJson);
        if (responseJson.length != 0) {
          $('.loader').remove();
          // $('.list-vaksinasi').append(cardItem);
        } else {
          $('.loader').remove();
          $('.list-vaksinasi').append(
            `<div id="alert-error" class="alert alert-info" role="alert"><strong>Jadwal Vaksinasi tidak ditemukan!</strong></div>`
          );
        }
      } catch (error) {
        $('.loader').remove();
        $('.list-vaksinasi').append('Network Error');
      }
    }
  });
});
