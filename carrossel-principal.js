function changeImage() {
    var image = document.getElementById('myImage');
    if (image.src.endsWith('pf-teste.png')) {
      image.src = 'pj-teste-3.png';
      image.alt = 'Imagem 2';
    } else {
      image.src = 'pf-teste.png';
      image.alt = 'Imagem 1';
    }
  }