import emailjs from '@emailjs/browser';

const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "X3V0LsxeybMt3sxZT";
const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || "service_2t1qmzg";
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "template_1vjsdqs";

emailjs.init(PUBLIC_KEY);

export const sendEmail = (formData) => {
    return emailjs.send(SERVICE_ID, TEMPLATE_ID, formData);
};
