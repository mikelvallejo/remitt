function formatAmount(amount) {
    return new Intl.NumberFormat('de-DE').format(amount).slice(0, -2);
}

export default formatAmount