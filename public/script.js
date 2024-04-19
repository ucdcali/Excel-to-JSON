const showDetails = (header, data) => {
  console.log(data);
  const details = document.getElementById('details');
  details.innerHTML = data.map((cell, index) => `<div>${header[index]}: ${cell}</div>`).join('');
};

console.log('hello');