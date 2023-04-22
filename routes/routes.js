const express = require('express');
const router = express.Router()

const ObjectId = require('mongoose').Types.ObjectId
const Employee = require('../models/employee')

// get all employee
router.get('/', (req, res) => {
    Employee.find((err, doc) => {
        if (err) {
            console.log(err)
        } else {
            res.send(doc)
        }
    })
})

// get single employee
router.get('/:id', (req, res) => {
    if(ObjectId.isValid(req.params.id)) {
        Employee.findById(req.params.id, (err, doc) => {
            if (err) {
                console.log(err)
            } else {
                res.send(doc)
            }
        })
    }else {
        return res.status(400).send('No record found with ID' + req.params.id)
    }
})


// create a new employee 
router.post('/', (req, res) => {
    let emp = new Employee({
        name: req.body.name,
        position: req.body.position,
        dept: req.body.dept
    })
    emp.save((err, doc) => {
        if (err) {
            console.log(err)
        } else {
            res.send(doc)
        }
    })
})

// find Id and update employee
router.put('/:id', (req, res) => {
    let emp = {
        name: req.body.name,
        position: req.body.position,
        dept: req.body.dept
    }

    if(ObjectId.isValid(req.params.id)) {
        Employee.findByIdAndUpdate(req.params.id, {$set: emp}, {new: true}, (err, doc) => {
            if (err) {
                console.log(err)
            } else {
                res.send(doc)
            }
        })
    }else {
        return res.status(400).send('No record found with ID' + req.params.id)
    }
})

// find Id and remove employee
router.get('/:id', (req, res) => {
    if(ObjectId.isValid(req.params.id)) {
        Employee.findByIdAndRemove(req.params.id, (err, doc) => {
            if (err) {
                console.log(err)
            } else {
                res.send(doc)
            }
        })
    }else {
        return res.status(400).send('No record found with ID' + req.params.id)
    }
})


module.exports = router
