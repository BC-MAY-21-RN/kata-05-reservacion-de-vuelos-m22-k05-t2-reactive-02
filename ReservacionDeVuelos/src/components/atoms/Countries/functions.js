const getText = (data, index, index2) => {
  if (index === 0 && index2 === 0) {
    return data.avOrigen;
  } else {
    if (index === 0 && index2 === 1) {
      return data.avDestino;
    } else {
      if (index === 1 && index2 === 0) {
        return data.origen;
      } else {
        return data.destino;
      }
    }
  }
};

const functions = {getText};

export default functions;
