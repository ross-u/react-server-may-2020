//      routes/task-routes.js
const express = require('express');
const mongoose = require('mongoose');
const taskRouter = express.Router();

const Project = require('./../models/project-model');
const Task = require('./../models/task-model');

// GET '/api/(projects/:projectId/ NOT USING THIS PART )tasks/:taskId'   => to retrieve a specific task
taskRouter.get("/tasks/:taskId", (req, res, next) => {
    const {taskId} = req.params;
    Task
        .findById(taskId)
        .then((task) => {
            res
                .status(200)
                .json(task)
        }).catch((err) => {
            res.status(500).json(err)
        })
})

// POST '/api/tasks'      => to create a new task
taskRouter.post("/tasks", (req, res, next) => {
    // data that the server gets from form OR Axios OR fetch
    const {title, description, projectId} = req.body
    // use "projectId" inside postman
    Task
        .create({title, description, project: projectId})
        .then((createdTask) => {
            res
                .status(201)    // Created
                .json(createdTask)
        })
        .catch((err) => {
            res
                .status(500)  // Internal Server Error
                .json(err)
        });

})
// PUT '/api/tasks/:id'    => to update a specific task


// DELETE '/api/tasks/:id'     => to delete a specific task
taskRouter.delete("/tasks/:taskId", (req, res, next) => {
    const {taskId} = req.params;
})

module.exports = taskRouter;

