const fetchJSON = async (url, func) => {
  const r = await fetch(url)
    .then(res => res.json())
    .then(json => json);
  func(r);
};
