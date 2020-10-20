window.axios = require('axios');

window.axios.defaults.headers.common = {
    'X-Requested-With': 'XMLHttpRequest',
    'X-CSRF-TOKEN': Laravel.csrfToken,
    'Authorization': 'Bearer ' + Laravel.apiToken
}
