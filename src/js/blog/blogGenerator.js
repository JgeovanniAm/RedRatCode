const generate = function(array, parent) {
  function append(elementStr, inner) {
    let element = document.createElement(elementStr);
    element.innerText = inner || '';
    parent.appendChild(element);
    return element;
  }
  function elements() {
    array.forEach(o => {
      if (o.title) {
        append('h3', o.title);
      }
      if (o.image) {
        append('i').style.setProperty('background-image', `url(${o.image})`);
      }
      if (o.text) {
        append('p', o.text);
      }
      if (o.link) {
        let re = /(.*) - (.*)/;
        let results = re.exec(o.link);
        let name = results[1];
        let link = results[2];
        let anchor = append('a', name);
        anchor.href = link;
        anchor.setAttribute('target', '_blank');
      }
    });
  }
  return {
    elements: elements
  };
};

