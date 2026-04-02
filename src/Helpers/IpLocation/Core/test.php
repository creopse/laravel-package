<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <title>IP Geolocation — Test</title>
    <style>
        *,
        *::before,
        *::after {
            box-sizing: border-box;
        }

        body {
            font-family: system-ui, sans-serif;
            font-size: 14px;
            background: #f5f5f5;
            color: #333;
            margin: 0;
            padding: 32px 16px;
        }

        section {
            max-width: 480px;
            margin: 0 auto 32px;
            background: #fff;
            border: 1px solid #ddd;
            border-radius: 6px;
            padding: 24px;
        }

        h2 {
            margin: 0 0 20px;
            font-size: 16px;
        }

        label {
            display: block;
            margin-bottom: 4px;
            font-weight: 600;
            font-size: 12px;
            text-transform: uppercase;
            letter-spacing: 0.05em;
            color: #555;
        }

        input[type="text"],
        select {
            display: block;
            width: 100%;
            padding: 8px 10px;
            margin-bottom: 16px;
            border: 1px solid #ccc;
            border-radius: 4px;
            font-size: 14px;
        }

        input[type="text"]:focus,
        select:focus {
            outline: 2px solid #0070f3;
            border-color: transparent;
        }

        button {
            width: 100%;
            padding: 10px;
            background: #0070f3;
            color: #fff;
            border: none;
            border-radius: 4px;
            font-size: 14px;
            cursor: pointer;
        }

        button:hover {
            background: #005bb5;
        }

        button:disabled {
            background: #999;
            cursor: not-allowed;
        }

        #result {
            max-width: 760px;
            margin: 0 auto;
        }

        #result-message {
            padding: 12px 16px;
            border-radius: 4px;
            font-size: 14px;
        }

        #result-message.error {
            background: #fee;
            border: 1px solid #fcc;
            color: #900;
        }

        table {
            width: 100%;
            border-collapse: collapse;
            background: #fff;
            border: 1px solid #ddd;
            border-radius: 6px;
            overflow: hidden;
        }

        th,
        td {
            padding: 10px 14px;
            text-align: left;
            border-bottom: 1px solid #eee;
        }

        th {
            background: #f8f8f8;
            font-weight: 600;
            font-size: 12px;
            text-transform: uppercase;
            letter-spacing: 0.05em;
            color: #555;
        }

        tr:last-child td {
            border-bottom: none;
        }
    </style>
</head>

<body>
    <section>
        <h2>IP Geolocation</h2>

        <label for="ip-address">IP Address</label>
        <input type="text" placeholder="e.g. 8.8.8.8" id="ip-address" autocomplete="off">

        <label for="source">Source</label>
        <select id="source">
            <option value="auto"      selected>Auto (fallback chain)</option>
            <option value="geoplugin">GeoPlugin</option>
            <option value="ipapicom" >ip-api.com</option>
            <option value="ipapicoapi">ipapi.co</option>
            <option value="ipinfo"   >IpInfo</option>
            <option value="ipdata"   >IpData</option>
        </select>

        <button id="btn-lookup">Look up</button>
    </section>

    <section id="result"></section>

    <script>
        (function () {
            var btn    = document.getElementById('btn-lookup');
            var result = document.getElementById('result');

            btn.addEventListener('click', function () {
                var ip     = document.getElementById('ip-address').value.trim();
                var source = document.getElementById('source').value;

                if (!ip) {
                    showError('Please enter an IP address.');
                    return;
                }

                btn.disabled    = true;
                btn.textContent = 'Loading…';
                result.innerHTML = '';

                var xhr = new XMLHttpRequest();

                xhr.onreadystatechange = function () {
                    if (xhr.readyState !== XMLHttpRequest.DONE) return;

                    btn.disabled    = false;
                    btn.textContent = 'Look up';

                    if (xhr.status === 200) {
                        try {
                            var parsed = JSON.parse(xhr.responseText);

                            if (typeof parsed === 'string') {
                                showError(parsed);
                                return;
                            }

                            var keys   = Object.keys(parsed);
                            var header = '<thead><tr>' + keys.map(function (k) { return '<th>' + escapeHtml(k) + '</th>'; }).join('') + '</tr></thead>';
                            var body   = '<tbody><tr>' + Object.values(parsed).map(function (v) { return '<td>' + escapeHtml(String(v ?? '')) + '</td>'; }).join('') + '</tr></tbody>';

                            result.innerHTML = '<table>' + header + body + '</table>';
                        } catch (e) {
                            result.innerHTML = '<pre>' + escapeHtml(xhr.responseText) + '</pre>';
                        }
                    } else {
                        showError('Request failed (HTTP ' + xhr.status + ').');
                    }
                };

                var url = window.location.protocol + '//' + window.location.hostname
                    + '/server/ip/location/' + encodeURIComponent(ip) + '/' + encodeURIComponent(source);

                xhr.open('GET', url, true);

                // Set the API key from the page's meta tag or a JS variable
                // defined by your server-side template — never hardcode it here.
                var apiKey = (typeof CREOPSE_API_KEY !== 'undefined') ? CREOPSE_API_KEY : '';
                if (apiKey) {
                    xhr.setRequestHeader('X-API-Key', apiKey);
                }

                xhr.send();
            });

            function showError(msg) {
                result.innerHTML = '<p id="result-message" class="error">' + escapeHtml(msg) + '</p>';
            }

            function escapeHtml(str) {
                return str
                    .replace(/&/g,  '&amp;')
                    .replace(/</g,  '&lt;')
                    .replace(/>/g,  '&gt;')
                    .replace(/"/g,  '&quot;')
                    .replace(/'/g,  '&#039;');
            }
        })();
    </script>
</body>

</html>
