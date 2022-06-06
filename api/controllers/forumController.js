import Forum from "../models/forumModel.js";

export const getTopic = async (request, response) => {
    try {
        const products = await Forum.find();
        response.json(products);
    } catch (error) {
        response.status(500).json({message: error.message});
    }
   
}

export const getTopicById = async (request, response) => {
    const cekId = await Forum.findById(request.params.id);
    if(!cekId) return response.status(404).json({message: "Data tidak ditemukan"});
    try {
        const product = await Forum.findById(request.params.id);
        response.json(product);
    } catch (error) {
        response.status(404).json({message: error.message});
    }
   
}

export const addTopic = async (request, response) => {
    const product = new Forum(request.body);
    try {
        const savedProduct = await product.save();
        response.status(201).json(savedProduct);
    } catch (error) {
        response.status(400).json({message: error.message});
    }
   
}

export const updateTopic = async (request, response) => {
    const cekId = await Forum.findById(request.params.id);
    if(!cekId) return response.status(404).json({message: "Data tidak ditemukan"});
    try {
        const updatedProduct = await Forum.updateOne({_id: request.params.id}, {$set: request.body});
        response.status(200).json(updatedProduct);
    } catch (error) {
        response.status(400).json({message: error.message});
    }
   
}

export const deleteTopic = async (request, response) => {
    const cekId = await Forum.findById(request.params.id);
    if(!cekId) return response.status(404).json({message: "Data tidak ditemukan"});
    try {
        const deletedProduct = await Forum.deleteOne({_id: request.params.id});
        response.status(200).json(deletedProduct);
    } catch (error) {
        response.status(400).json({message: error.message});
    }
   
}
