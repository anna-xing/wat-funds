function sumTransactions() {
    return Array.from(document.getElementsByTagName('td'))
        .filter(item => item.innerText.includes('$'))
        .map(item => parseFloat(item.innerText.slice(2)))
        .reduce((prev, curr) => prev + curr)
        .toFixed(2);
}