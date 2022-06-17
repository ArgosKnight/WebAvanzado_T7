import { prisma } from "../../db";

let  stories =[
    {
        id: 1,
        name: "Harry Potter",
        author: "K.K Rowling",
        image:"",
        descripcion: "lalalalalalalla",
    },
];

export const list = async (req, res) =>{
    try {
        const stories = await prisma.store.findMany();

        res.status(200).json({
            ok: true,
            date: stories
        })
    } catch (error) {
        return res.status(500).json({
         ok: false,
            data: error,
        });
    }
};


//POST
export const store = (req, res) =>{
    const body = req.body;
    body.id=stories.length + 1;
    stories.push(body);
    
    return res.status(201).json({
        ok:true,
        data:"Store success",
    });
};

export const update = (req, res) =>{

    try {
        const body = req.body;
        body.Id = stories.length +1;
        stories.put(body);

        return res.status(201).json({
            ok:true,
            data:"Update succes",
        });
    } catch (error) {
        return res.status(500).json({
            ok: false,
            data: error.message,
        });
    }

};

export const destroy = (req, res) =>{

    try {
        const {id} = req.params;
        stories = stories.filter((story) => story.id != id);

        return res.status(200).json({
            ok: true,
            data: stories,
        })
    } catch (error) {
        return res.status(500).json({
            ok: false,
            data: error.message,
            });
    }

};