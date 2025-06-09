// helpers.js

export const formatDate = (dateInput, format = 'MM/DD/YYYY') => {
    let date;

    if (dateInput instanceof Date) {
        date = dateInput;
    } else if (typeof dateInput === 'string' || typeof dateInput === 'number') {
        date = new Date(dateInput);
    } else {
        console.error('Invalid date input provided to formatDate. Expected Date object, string, or number.', dateInput);
        return null;
    }

    if (isNaN(date.getTime())) {
        console.error('Invalid date generated from input to formatDate.', dateInput);
        return null;
    }

    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const seconds = date.getSeconds().toString().padStart(2, '0');
    const milliseconds = date.getMilliseconds().toString().padStart(3, '0');
    const dayOfWeek = date.getDay();

    const formatMap = {
        'YYYY': year,
        'YY': year.toString().slice(-2),
        'MM': month,
        'M': (date.getMonth() + 1).toString(),
        'DD': day,
        'D': date.getDate().toString(),
        'HH': hours, // 24-hour format
        'H': date.getHours().toString(),
        'mm': minutes,
        'ss': seconds,
        'SSS': milliseconds,
        'A': date.getHours() >= 12 ? 'PM' : 'AM',
        'hh': (date.getHours() % 12 || 12).toString().padStart(2, '0'),
        'h': (date.getHours() % 12 || 12).toString(),
        'd': dayOfWeek,
        'ddd': ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'][dayOfWeek],
        'dddd': ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][dayOfWeek],
    };

    let formattedDate = format;
    for (const token in formatMap) {
        const regex = new RegExp(token, 'g');
        formattedDate = formattedDate.replace(regex, formatMap[token]);
    }

    return formattedDate;
};

export const createTimeStamp = (dateInput = new Date()) => {
    if (typeof dateInput === 'number' && !isNaN(dateInput)) {
        return dateInput; // Already a timestamp
    }

    let date;
    if (dateInput instanceof Date) {
        date = dateInput;
    } else if (typeof dateInput === 'string') {
        date = new Date(dateInput);
    } else {
        console.error('Invalid date input provided to createTimeStamp. Expected Date object, string, or number.', dateInput);
        return null;
    }

    if (isNaN(date.getTime())) {
        console.error('Invalid date generated from input to createTimeStamp.', dateInput);
        return null;
    }

    return date.getTime();
};


export const createCustomId = () => {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
    let id = ''
    for (let i = 0; i < 20; i++) {
        id += chars[Math.floor(Math.random() * chars.length)]

    }
    return id
}