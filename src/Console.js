const sendMessage = (message, status) => {
    const defaultStatus = `➡️\u0020`;
    status = (status != null ? status : status = defaultStatus);
    // status = (status != null ? (isBuggedEmoji(status) ? status = `${status}\u0020` : status) : status = defaultStatus);
    let rawDate = new Date();
    const dateFormatted = `${setDate(rawDate.getDate())}/${setDate(rawDate.getMonth())}/${setDate(rawDate.getFullYear())}`;
    const tileFormatted = `${setDate(rawDate.getHours())}:${setDate(rawDate.getMinutes())}:${setDate(rawDate.getSeconds())}`;
    console.log(`${status} [${dateFormatted} ${tileFormatted}]: ` + message);
}

const setDate = (value) => {
    return (value > 9 ? value : '0' + (value == 0 ? value + 1 : value));
}

// const isBuggedEmoji = (value) => {
//     let emojies = ['✔️', '⚗️', '➡️', '⚙️'];
//     return emojies.filter(emo => emo == value).length > 0;
// }

export default {
    sendMessage
}