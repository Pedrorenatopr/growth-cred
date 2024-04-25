function changeImage() {
    var image = document.getElementById('myImage');
    if (image.src.endsWith('consignado-teste.png')) {
      image.src = 'pj-teste-3.png';
      image.alt = 'Imagem 2';
    } else {
      image.src = 'consignado-teste.png';
      image.alt = 'Imagem 1';
    }
  }