import instance from "./config";

const getContact = () => {
    return instance.get("/contact");
};
const updateContact = (contact) => {
    return instance.put(`/contact/`, contact);
};

export { getContact, updateContact };