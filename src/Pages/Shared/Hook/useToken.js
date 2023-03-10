import { useEffect, useState } from "react";

const useToken = (user) => {
    const [token, setToken] = useState(' ');
console.log(user)
    useEffect(() => {
        const email = user?.user?.email;
        console.log(email);

        const currentuser = { email };
        if (email) {
            fetch(`https://gold-beautiful-kingfisher.cyclic.app/users/${email}`, {
                method: "PUT",
                headers: {
                    "content-type": "application/json",
                },
                body: JSON.stringify(currentuser),
            })
                .then((res) => res.json())
                .then((data) => {
                    console.log("data inside useToken", data);
                    const accessToken = data.token;
                    console.log(accessToken);
                    localStorage.setItem("accessToken", accessToken);
                    setToken(accessToken);

                });
        }
    }, [user]);
    return [token];
};

export default useToken;