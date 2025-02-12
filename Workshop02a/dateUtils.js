function getCurrentDate() {
    return new Date();
}

function formatDate(date) {
    return date.toISOString().split('T')[0];
}

module.exports = { getCurrentDate, formatDate};