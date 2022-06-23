const nextValues = item => {
  return {
    avOrigen: item?.from?.title,
    origen: item?.from?.subtitle,
  };
};

const functions = {
  nextValues,
};

export default functions;
