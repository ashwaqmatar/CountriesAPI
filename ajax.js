/// <reference path="jquery-3.6.0.js" />

function getAjaxDataAsync(url) {
    return new Promise((resolve, reject) => {
        $.ajax({
            url: url,
            success: data => resolve(data),
            error: err => reject(err)
        });
    });
}
