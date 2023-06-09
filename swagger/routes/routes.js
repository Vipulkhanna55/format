import express from "express";
const router=express.Router();
/**
 * @swagger
 * components:
 *   schemas:
 *     Book:
 *       type: object
 *       required:
 *         - title
 *         - author
 *         - finished
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated id of the book
 *         title:
 *           type: string
 *           description: The title of your book
 *         author:
 *           type: string
 *           description: The book author
 *         finished:
 *           type: boolean
 *           description: Whether you have finished reading the book
 *         createdAt:
 *           type: string
 *           format: date
 *           description: The date the book was added
 *       example:
 *         id: d5fE_asz
 *         title: The New Turing Omnibus
 *         author: Alexander K. Dewdney
 *         finished: false
 *         createdAt: 2020-03-10T04:05:06.157Z
 */
/**
 * @swagger
 * tags:
 *   name: hello
 *   description: The hello  API
 * /hello:
 *   get:
 *     summary: Get a new hello
 *     requestBody:
 *       required: false
 *       content:
 *         application/json:
 *     responses:
 *       400:
 *         description: Fetched hello Succcessfully.
 *         content:
 *           application/json:  
 *       500:
 *         description: Some server error
 *
 */



router.get('/',(req,res)=>{
    res.send("Hello there user");

})

export  {router};