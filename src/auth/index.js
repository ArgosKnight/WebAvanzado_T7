import jwt from "jsonwebtoken";
import { secret } from "../../config";



export const signToken = (payload)=>{
    return jwt.sign(payload, secret);
};

export const verifyToken = (token) =>{
    return jwt.verify(token, secret)
};

export const getToken = (authorization, res) =>{
    if(!authorization){
        return res.status(403),json({
            ok: false,
            data: "Invaled format",
        });
    }
    return authorization.split("")(1);
};;

export const checkToken = (req, res, next) =>{
    const authorization = req.headers.authorization;
    console.log("authorization", authorization);

    const token = getToken(authorization, res);

    const decoded = verifyToken(token);

    if (!decoded){
        return res.status(403).json({
            ok: false,
            data: "Invalid data",
        });
    };

    req.decoded = decoded;
    next();
}