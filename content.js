/**
 * Calculates sum of all transactions on the page
 * @returns sum of all transactions
 */
function sumTransactions() {
    return Array.from(document.getElementsByTagName('td'))
        .filter(item => item.innerText.includes('$'))
        .map(item => parseFloat(item.innerText.slice(2)))
        .reduce((prev, curr) => prev + curr)
        .toFixed(2);
}

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
	if (request.msg === 'sum') {
        const sum = sumTransactions();
		sendResponse({ status: 'done', sum });
	}
});