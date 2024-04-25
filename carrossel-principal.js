function changeImage() {
    var image = document.getElementById('myImage');
    if (image.src.endsWith('cd-aposentato.png')) {
      image.src = 'cd-servidorf.png';
      image.alt = 'Imagem 2';
    } else {
      image.src = 'cd-aposentato.png';
      image.alt = 'Imagem 1';
    }
  }