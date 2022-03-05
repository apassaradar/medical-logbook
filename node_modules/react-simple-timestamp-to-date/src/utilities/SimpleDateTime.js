module.exports = function SimpleDateTime(props){

        return (formatDateToReadable(props));
}

let formatDateToReadable = (props) => {

    let dateSeparator = props.dateSeparator ? props.dateSeparator : ' ';
    let timeSeparator = props.timeSeparator ? props.timeSeparator : ' ';
    let dateFormat = props.dateFormat ? props.dateFormat : '';
    let timeFormat = props.timeFormat ? props.timeFormat : '';;
    let showTime = props.showTime ? parseInt(props.showTime) : 1;
    let showDate = props.showDate ? parseInt(props.showDate) : 1;
    let meridians = props.meridians ? parseInt(props.meridians) : 0;
    let DateToFormat = props.children;

    if (!isValidDate(DateToFormat)) {
        if (!isNaN(DateToFormat)) {
            DateToFormat = new Date(DateToFormat * 1000);
            if (!DateToFormat) {
                return "Invalid Date1";
            }
        }
        else {
            DateToFormat = new Date(DateToFormat);
            if (!isValidDate(DateToFormat)) {
                return "Invalid Date2";
            }
        }
    }

    if (!isValidDate(DateToFormat)) {
        return "Invalid Date3";
    }

    let date = DateToFormat.getDate();
    let month = DateToFormat.getMonth() + 1;
    let year = DateToFormat.getFullYear();
    let hour = DateToFormat.getHours();
    let minutes = DateToFormat.getMinutes();
    let seconds = DateToFormat.getSeconds();

    if (showDate && showTime) {
        return formatDate(date, month, year, dateSeparator, dateFormat) + ' ' + formatTime(hour, minutes, seconds, timeSeparator, timeFormat, meridians)
    }
    else if (showDate && !showTime) {
        return formatDate(date, month, year, dateSeparator, dateFormat)
    }
    else if (!showDate && showTime) {
        return formatTime(hour, minutes, seconds, timeSeparator, timeFormat, meridians)
    }
    else {
        return formatDate(date, month, year, dateSeparator, dateFormat) + ' ' + formatTime(hour, minutes, seconds, timeSeparator, timeFormat, meridians)
    }
}

let formatDate = (date, month, year, dateSeparator, format) => {
    switch (format) {
        case 'DMY':
            return `${date < 10 ? `0${date}` : `${date}`}${dateSeparator}${month < 10 ? `0${month}` : `${month}`}${dateSeparator}${year}`
        case 'MDY':
            return `${month < 10 ? `0${month}` : `${month}`}${dateSeparator}${date < 10 ? `0${date}` : `${date}`}${dateSeparator}${year}`
        case 'MYD':
            return `${month < 10 ? `0${month}` : `${month}`}${dateSeparator}${year}${dateSeparator}${date < 10 ? `0${date}` : `${date}`}`
        default:
            return `${year}${dateSeparator}${month < 10 ? `0${month}` : `${month}`}${dateSeparator}${date < 10 ? `0${date}` : `${date}`}`
    }

}
let formatTime = (hour, minutes, seconds, timeSeparator, timeFormat, meridians) => {
    let ampm = 'am';
    if (meridians) {
        if (hour > 11)
            ampm = 'pm';
        if (hour > 12)
            hour = parseInt(hour % 12)
    }

    switch (timeFormat) {
        case 'HMS':
            return `${hour < 10 ? `0${hour}` : `${hour}`}${timeSeparator}${minutes < 10 ? `0${minutes}` : `${minutes}`}${timeSeparator}${seconds < 10 ? `0${seconds}` : `${seconds}`} ${meridians ? `${ampm}` : ``} `
        case 'HSM':
            return `${hour < 10 ? `0${hour}` : `${hour}`}${timeSeparator}${seconds < 10 ? `0${seconds}` : `${seconds}`}${timeSeparator}${minutes < 10 ? `0${minutes}` : `${minutes}`} ${meridians ? `${ampm}` : ``} `
        case 'MHS':
            return `${minutes < 10 ? `0${minutes}` : `${minutes}`}${timeSeparator}${hour < 10 ? `0${hour}` : `${hour}`}${timeSeparator}${seconds < 10 ? `0${seconds}` : `${seconds}`} ${meridians ? `${ampm}` : ``}`
        case 'MSH':
            return `${minutes < 10 ? `0${minutes}` : `${minutes}`}${timeSeparator}${seconds < 10 ? `0${seconds}` : `${seconds}`}${timeSeparator}${hour < 10 ? `0${hour}` : `${hour}`} ${meridians ? `${ampm}` : ``}`
        case 'SMH':
            return `${seconds < 10 ? `0${seconds}` : `${seconds}`}${timeSeparator}${minutes < 10 ? `0${minutes}` : `${minutes}`}${timeSeparator}${hour < 10 ? `0${hour}` : `${hour}`} ${meridians ? `${ampm}` : ``}`
        case 'SHM':
            return `${seconds < 10 ? `0${seconds}` : `${seconds}`}${timeSeparator}${hour < 10 ? `0${hour}` : `${hour}`}${timeSeparator}${minutes < 10 ? `0${minutes}` : `${minutes}`} ${meridians ? `${ampm}` : ``}`
        default:
            return `${hour < 10 ? `0${hour}` : `${hour}`}${timeSeparator}${minutes < 10 ? `0${minutes}` : `${minutes}`}${timeSeparator}${seconds < 10 ? `0${seconds}` : `${seconds}`} ${meridians ? `${ampm}` : ``}`
    }
}

function isValidDate(date) {
    return date && Object.prototype.toString.call(date) === "[object Date]" && !isNaN(date);
}