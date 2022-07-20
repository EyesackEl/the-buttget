module.exports = {
    format_date: (date) => {
        return date.toLocaleDateString();
    },
    format_money: (int) => {
        return '$' + (int / 100).toFixed(2);
    },
}