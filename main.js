const checkIsProductionMode = () => {
  return import.meta.env.PROD;
};

export { checkIsProductionMode };
