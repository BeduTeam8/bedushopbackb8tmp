//FromS5
const { Sequelize, DataTypes, Op } = require('sequelize');
const Review = require('../models/reviews');

function createReview(req, res) {
    const body = req.body;
    Review.create(body).then(review => {
        res.status(201).json(review);
    });
}

async function getReview(req, res) {
    const id = req.params.id;
    const review = await Review.findByPk(id);
    res.status(200).json(review);
}

async function getReviews(req, res) {
    const reviews = await Review.findAll();
    res.status(200).json(reviews);    
}

async function updateReview(req, res) {
    const id = req.params.id;
    const review = req.body;
    await Review.update(review, {where: {id: id}});
    const review_updated = await Review.findByPk(id);
    res.status(200).json(review_updated);
}

async function deleteReview(req, res) {
    const id = req.params.id;
    const deleted = Review.destroy(
        {where: {id: id} }
    );
    res.status(200).json(deleted);
}

module.exports = {
    createReview,
    getReview,
    getReviews,
    updateReview,
    deleteReview
}