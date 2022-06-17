import { prisma } from "../../db";



export const index = async (req, res) =>{
    try {
        const users = await prisma.user.findMany();

        res.status(200).json({
            ok:true,
            data: users,
        });
        
    } catch (error) {
        return res.status(500).json({
            ok: false,
            data: error,
        });
    };
};


export const store = (req, res) =>{
    try {

        const user = await prisma.user.create({
            data: {...req.body}
        })
        return res.status(201).json({
            ok: true,
            data,
        })
        
    } catch (error) {
        return res.status(500).json({
            ok: false,
            data: error,
        });
    };
};

export const update = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await prisma.user.update({
        where: { id: Number(id) },
        data: { ...req.body },
        });
    return res.status(200).json({
        ok: true,
        data: user,
    });
    }catch (error) {
        return res.status(500).json({
        ok: false,
        data: error.message,
    });
    }
};
  

export const destroy = async (req, res) => {
    try {
        const { id } = req.params;
        await prisma.user.delete({
        where: { id: Number(id) },
    });
    return res.status(200).json({
        ok: true,
        data: "User deleted",
    });
    }catch (error) {
        return res.status(500).json({
        ok: false,
        data: error.message,
        });
    }
};
  