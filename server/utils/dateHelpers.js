function getWeekIdentifier() {
  const d = new Date();
  // Set to nearest Thursday: current date + 4 - current day number
  // Make Sunday's day number 7
  const day = d.getDay() === 0 ? 7 : d.getDay();
  d.setDate(d.getDate() + 4 - day);
  const yearStart = new Date(d.getFullYear(), 0, 1);
  const weekNo = Math.ceil((((d - yearStart) / 86400000) + 1) / 7);
  return `${d.getFullYear()}-W${weekNo}`;
}

module.exports = { getWeekIdentifier };
