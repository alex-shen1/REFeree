import React, { useEffect } from "react";

import { auth, googleProvider } from "../firebase"

export function login(referrer) {
    useEffect(() => {
        console.log(referrer);
    }, [referrer]);

    return "";
}