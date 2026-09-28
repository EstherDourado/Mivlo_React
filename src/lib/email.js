import emailjs from '@emailjs/browser';

emailjs.init("X3V0LsxeybMt3sxZT");

export const sendEmail = (formData) => {
    const serviceID = "service_2t1qmzg";
    const templateID = "template_1vjsdqs";
    return emailjs.send(serviceID, templateID, formData);
};
