export const _incomplete_phone = /^[0-9-)(+\s]+$/;
export const _incomplete_email = /^[a-zA-Z_.@]+$/;
export const _email = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
export const _phone = /^(?:(?:\(?(?:00|\+)([1-4]\d\d|[1-9]\d*)\)?)[\-\.\ \\\/]?)?((?:\(?\d{1,}\)?[\-\.\ \\\/]?)+)(?:[\-\.\ \\\/]?(?:#|ext\.?|extension|x)[\-\.\ \\\/]?(\d+))?$/i;