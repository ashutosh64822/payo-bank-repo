function getValueById(id) {
    const value = document.getElementById(id).value;
    const convertedValue = parseInt(value);
    return convertedValue;
}

function getInnerTextById(id) {
    const value = document.getElementById(id).innerText;
    const convertedValue = parseFloat(value);
    return convertedValue;
}

function getValue(id, value) {
    document.getElementById(id).innerText = value;
}