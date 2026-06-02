//practica N2 NOMBRE:CHURA CALA DIALN THOMAS
const express = require('express');
const app = express();
const db = require('./db');

app.use(express.json());

// Ejercicio 1: POST /categorias - Registrar una nueva categoría
app.post('/categorias', (req,res)=>{

    const {nombre, descripcion} = req.body;

    const sql =
    `INSERT INTO categorias(nombre,descripcion)
    VALUES (?,?)`;

    db.query(sql,[nombre,descripcion],(err,result)=>{

        if(err){
            return res.status(500).json(err);
        }

        res.json({
            mensaje:"Categoria creada",
            id:result.insertId
        });
    });
});

// Ejercicio 2: GET /categorias - Mostrar todas las categorías
app.get('/categorias',(req,res)=>{

    db.query(
        "SELECT * FROM categorias",
        (err,result)=>{

            if(err){
                return res.status(500).json(err);
            }

            res.json(result);
        }
    );
});

// Ejercicio 3: GET /categorias/:id - Mostrar una categoría y sus productos
app.get('/categorias/:id',(req,res)=>{

    const id = req.params.id;

    const sql = `
    SELECT
    c.id,
    c.nombre,
    c.descripcion,
    p.id AS productoId,
    p.nombre AS producto,
    p.precio
    FROM categorias c
    LEFT JOIN productos p
    ON c.id = p.categoriaId
    WHERE c.id = ?`;

    db.query(sql,[id],(err,result)=>{

        if(err){
            return res.status(500).json(err);
        }

        res.json(result);
    });
});

// Ejercicio 4: PATCH /categorias/:id - Actualizar una categoría
app.patch('/categorias/:id',(req,res)=>{

    const id = req.params.id;

    const {nombre,descripcion} = req.body;

    const sql = `
    UPDATE categorias
    SET nombre=?,
        descripcion=?,
        updatedAt=NOW()
    WHERE id=?`;

    db.query(
        sql,
        [nombre,descripcion,id],
        (err,result)=>{

            if(err){
                return res.status(500).json(err);
            }

            res.json({
                mensaje:"Categoria actualizada"
            });
        }
    );
});

// Ejercicio 5: DELETE /categorias/:id - Eliminar una categoría y sus productos
app.delete('/categorias/:id',(req,res)=>{

    const id = req.params.id;

    db.query(
        "DELETE FROM categorias WHERE id=?",
        [id],
        (err,result)=>{

            if(err){
                return res.status(500).json(err);
            }

            res.json({
                mensaje:"Categoria eliminada y sus productos también"
            });
        }
    );
});

app.listen(3001,()=>{
    console.log("Servidor ejecutándose en puerto 3001");
});