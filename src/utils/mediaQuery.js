const customMediaQuery = (maxWidth) =>
  `@media (max-width: ${maxWidth}px)`;

export const media = {
  custom: customMediaQuery,
  tabletL: customMediaQuery(1500),
  tableG: customMediaQuery(1300),
  tabletM: customMediaQuery(1000),
  phone: customMediaQuery(650),
};