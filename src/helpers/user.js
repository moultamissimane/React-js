export const getUser = () => {
    const user = localStorage.getItem("user_wings");
    if(user !== null) {
        const {email , password} =  JSON.parse(user);
        return {email , password};
    }
    return null;
};
