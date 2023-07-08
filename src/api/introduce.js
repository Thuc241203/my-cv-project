import instance from "./config";

const getIntroduce = () => {
    return instance.get("/introduce");
};
const updateIntroduce = (introduce) => {
    return instance.put(`/introduce/${introduce.id}`, introduce);
};

export { getIntroduce, updateIntroduce };