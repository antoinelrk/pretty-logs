const sendMessage = (message, status) => {
    const defaultStatus = `➡️`;
    status != null ? status : defaultStatus;
    let rawDate = new Date();
    const dateFormatted = `${setDate(rawDate.getDate())}/${setDate(rawDate.getMonth())}/${setDate(rawDate.getFullYear())}`;
    const tileFormatted = `${setDate(rawDate.getHours())}:${setDate(rawDate.getMinutes())}:${setDate(rawDate.getSeconds())}`;
    console.log(`${status} [${dateFormatted} ${tileFormatted}]: ` + message);
}

const setDate = (value) => {
    return (value > 9 ? value : '0' + (value == 0 ? value + 1 : value));
}

export default {
    sendMessage
}