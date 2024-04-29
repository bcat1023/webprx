var input = document.getElementById('url')
var statusT = document.getElementById('status')

// Algorithm to complete a url and test for a valid address
function validate(input) {
    // Regular expression to detect if the input is a valid URL
    const urlPattern = /^(https?:\/\/)?([a-z\d.-]+\.[a-z]{2,})(:[0-9]+)?(\/.*)?$/i;

    // Function to fix incomplete URL by adding 'http://' if missing
    function fixIncompleteUrl(url) {
        if (!url.startsWith('http://') && !url.startsWith('https://')) {
            url = 'http://' + url;
        }
        return url;
    }

    // Check if input matches the URL pattern
    const match = input.match(urlPattern);
    if (match) {
        // Extract the matched components
        const protocol = match[1] || 'http://';
        const domain = match[2];
        const port = match[3] || '';
        const path = match[4] || '';

        // Construct the corrected URL
        const correctedUrl = protocol + domain + port + path;
        
        // Return the corrected URL
        return correctedUrl;
    } else {
        // If input doesn't match the URL pattern, return null
        statusT.innerText = 'Invalid URL'
        throw new Error('Invalid URL, cannot continue')
    }
}

input.addEventListener('keyup', (key) => {
    execute()
});


document.querySelector("#initiate").addEventListener('click', () => {
    execute()
});

function execute() {
    var hostname = top.window.location.href;
    if(hostname == 'about:blank') {
        console.log('All clear, domain is about:blank')
        statusT.innerText = 'Loading...'
        validUrl = validate(input.value)
        window.location.assign(validUrl);
    } else {
        statusT.innerText = `Bad Hostname... ${hostname}`
        throw new Error(`Bad Hostname... ${hostname}`)
    }
}