import { Request, Response } from "express";
import AbstractModel from "../abstracts/model.abstract";
import Product from "../models/Product"; // Sequelize model

class ProductController extends AbstractModel {
    async getAll(req: Request, res: Response): Promise<void> {
        try {
            const products = await Product.findAll();
            res.status(200).json({
                status: "success",
                message: "Products fetched successfully",
                data: products,
            });
        } catch (error: any) {
            res.status(500).json({
                status: "error",
                message: error.message,
            });
        }
    }

    async getById(req: Request, res: Response): Promise<void> {
        try {
            const product = await Product.findByPk(req.params.id);
            if (!product) {
                res.status(404).json({
                    status: "error",
                    message: "Product not found",
                });
                return;
            }
            res.status(200).json({
                status: "success",
                message: "Product fetched successfully",
                data: product,
            });
        } catch (error: any) {
            res.status(500).json({
                status: "error",
                message: error.message,
            });
        }
    }

    async create(req: Request, res: Response): Promise<void> {
        try {
            const newProduct = await Product.create(req.body);
            res.status(201).json({
                status: "success",
                message: "Product created successfully",
                data: newProduct,
            });
        } catch (error: any) {
            res.status(500).json({
                status: "error",
                message: error.message,
            });
        }
    }

    async update(req: Request, res: Response): Promise<void> {
        try {
            const product = await Product.findByPk(req.params.id);
            if (!product) {
                res.status(404).json({
                    status: "error",
                    message: "Product not found",
                });
                return;
            }
            await product.update(req.body);
            res.status(200).json({
                status: "success",
                message: "Product updated successfully",
                data: product,
            });
        } catch (error: any) {
            res.status(500).json({
                status: "error",
                message: error.message,
            });
        }
    }

    async delete(req: Request, res: Response): Promise<void> {
        try {
            const product = await Product.findByPk(req.params.id);
            if (!product) {
                res.status(404).json({
                    status: "error",
                    message: "Product not found",
                });
                return;
            }
            await product.destroy();
            res.status(200).json({
                status: "success",
                message: "Product deleted successfully",
            });
        } catch (error: any) {
            res.status(500).json({
                status: "error",
                message: error.message,
            });
        }
    }
}

export default new ProductController();
