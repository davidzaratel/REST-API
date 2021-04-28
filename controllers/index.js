//leer todos los modelos creados
const models = require("../database/models");

const createUser = async(req, res) => {
    try{
        const user = await models.User.create(req.body);
        return res.status(201).json({
            user
        });
    } catch (error){
        return res.status(500).json({ error: error.message});
    }
};

const getAllUsers = async(req, res) => {
    console.log('getting users');
    try{
        const users = await models.User.findAll({
            //lo que va aquí adentro maneja las relaciones entre tablas
            include:[]
        });
        return res.status(200).json({users});
    } catch (error){
        return res.status(500).json({error: error.message});
    }
};

const createCurso = async(req, res) => {
    try{
        const curso = await models.Curso.create(req.body);
        return res.status(201).json({
            curso
        });
    } catch (error){
        return res.status(500).json({ error: error.message});
    }
};

const getAllCursos = async(req, res) => {
    console.log('getting cursos');
    try{
        const cursos = await models.Curso.findAll({
            //lo que va aquí adentro maneja las relaciones entre tablas
            include:[]
        });
        return res.status(200).json({cursos});
    } catch (error){
        return res.status(500).json({error: error.message});
    }
};

module.exports = {
    createUser,
    getAllUsers,
    createCurso,
    getAllCursos
};
