const nextValues = item => {
  return {
    avOrigen: item?.title,
    origen: item?.subtitle,
  };
};

const functions = {
  nextValues,
};

export default functions;
