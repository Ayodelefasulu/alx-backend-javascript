// 8-getBudgetCurrentYear.js

function getCurrentYear() {
  const date = new Date();
  return date.getFullYear();
}

export default function getBudgetForCurrentYear(income, gdp, capita) {
  const currentYear = getCurrentYear();

  // Use computed property names to dynamically create property names
  return {
    [`income-${currentYear}`]: income,
    [`gdp-${currentYear}`]: gdp,
    [`capita-${currentYear}`]: capita
  };
}

