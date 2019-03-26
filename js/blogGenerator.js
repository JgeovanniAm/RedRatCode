const generate = function(array, parent) {
  function append(elementStr, inner) {
    let element = document.createElement(elementStr);
    element.innerText = inner;
    parent.appendChild(element);
    return element;
  }
  function elements() {
    array.forEach(o => {
      if (o.title) {
        append('h3', o.title);
      }
      if (o.image) {
        append('img').src = o.image;
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
// generate(
//   [
//     {
//       title: `Hello World`,
//       text: `Lorem ipsum dolor sit amet consectetur 
//             adipisicing elit. Earum, alias deleniti tempore 
//             omnis sint minima recusandae at, non obcaecati 
//             molestiae necessitatibus? Unde id doloribus vel, 
//             laboriosam eaque fugiat sit nesciunt.`,
//       image: `https://images.pexels.com/photos/1418354/pexels-photo-1418354.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500`,
//       link: `hello Alisson - https://www.pexels.com/`
//     }
//   ],
//   blog
// ).elements();
