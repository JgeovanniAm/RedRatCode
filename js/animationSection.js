function AnimateSection() {
  const list_subtitle = document.querySelector('.list-subtitle');
  const title = document.querySelector('.title-js');
  const html = document.querySelector('html');
  let topHtml = html.scrollTop;
  let array = [title, list_subtitle];

  for (let item = 0; item < array.length; item++) {
    let topitem = array[item].offsetTop;
    array[item].style.opacity = 0;
    array[item].style.position = 'absolute';
    array[item].style.top = '25%';
    array[item].style.transition = '0.3s  ease-in-out';

    if (topHtml >= topitem + 200) {
      array[item].style.opacity = 1;
      array[item].style.position = 'absolute';
      array[item].style.top = '15%';
      array[item].style.transition = '1.4s  ease-in-out';

      if (topHtml > topitem + 1100) {
        array[item].style.opacity = 0;
        array[item].style.position = 'absolute';
        array[item].style.transition = '2s  ease-in-out';
      }
    }
  }
}

document.addEventListener('scroll', AnimateSection)