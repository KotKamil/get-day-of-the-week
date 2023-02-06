module.exports = getDayOfTheWeek = (date) => {
    return new Date(date).getDay();
}

module.exports = getMonthLength = (year, month) => {
    return new Date(year, month, 0).getDate();
}