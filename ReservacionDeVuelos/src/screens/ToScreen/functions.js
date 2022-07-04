const nextValues = (to, values) => {
  return {
    avDestino: to?.title,
    destino: to?.subtitle,
    ...values,
  };
};

const newArray = (array, data) => {
  const newArrayitems = [];
  array.forEach(element => {
    if (
      element.value.subtitle !== data.origen &&
      element.value.titie !== data.avOrigen
    ) {
      newArrayitems.push(element);
    }
  });
  return newArrayitems;
};

const functions = {
  nextValues,
  newArray,
};

export default functions;
