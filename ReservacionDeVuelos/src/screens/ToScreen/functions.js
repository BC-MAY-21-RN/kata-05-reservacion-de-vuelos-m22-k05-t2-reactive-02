const nextValues = (to, values) => {
  return {
    avDestino: to?.title,
    destino: to?.subtitle,
    ...values,
  };
};

const functions = {
  nextValues,
};

export default functions;
