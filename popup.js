/**
 * Set value for sum of all transactions on popup
 */
function showSum(val) {
	document.getElementById('sum-text').innerText = val;
}

/**
 * Prompt content script to return sum of all transactions
 */
chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.tabs.sendMessage(tabs[0].id, { msg: 'sum' }, (response) => {
        if (response?.status === 'done') {
            showSum(response.sum);
        }
    });
});