async function DataCrawler(plId) {
  const url = `https://raw.githubusercontent.com/Jecobae/YouTubeJson/master/${plId}.json`;

  const options = {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      Content_Type: 'application/json;charset=UTF-8',
    },
  };

  let res = await fetch(url, options);
  let resOk = res && res.ok;

  if (resOk) {
    return await res.json();
  }
}

export default DataCrawler;
