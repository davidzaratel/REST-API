const { Router } = require('express');
const controllers = require('../controllers');

const router = Router();

router.get('/',(req,res) => res.send('Welcome'))

router.post('/users',controllers.createUser); //insertar un nuevo usuario
router.get('/users',controllers.getAllUsers); //leer todos los usuarios
//router.get('/users',controllers.getAllUsers); //actualizar un usuario
//router.get('/users',controllers.getAllUsers); //borrar un usuario
router.post('/cursos',controllers.createCurso); //insertar un nuevo curso
router.get('/cursos',controllers.getAllCursos); //leer todos los cursos

module.exports = router;
