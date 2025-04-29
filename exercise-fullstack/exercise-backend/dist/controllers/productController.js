"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const model_abstract_1 = __importDefault(require("../abstracts/model.abstract"));
const Product_1 = __importDefault(require("../models/Product")); // Sequelize model
class ProductController extends model_abstract_1.default {
    getAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const products = yield Product_1.default.findAll();
                res.status(200).json({
                    status: "success",
                    message: "Products fetched successfully",
                    data: products,
                });
            }
            catch (error) {
                res.status(500).json({
                    status: "error",
                    message: error.message,
                });
            }
        });
    }
    getById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const product = yield Product_1.default.findByPk(req.params.id);
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
            }
            catch (error) {
                res.status(500).json({
                    status: "error",
                    message: error.message,
                });
            }
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const newProduct = yield Product_1.default.create(req.body);
                res.status(201).json({
                    status: "success",
                    message: "Product created successfully",
                    data: newProduct,
                });
            }
            catch (error) {
                res.status(500).json({
                    status: "error",
                    message: error.message,
                });
            }
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const product = yield Product_1.default.findByPk(req.params.id);
                if (!product) {
                    res.status(404).json({
                        status: "error",
                        message: "Product not found",
                    });
                    return;
                }
                yield product.update(req.body);
                res.status(200).json({
                    status: "success",
                    message: "Product updated successfully",
                    data: product,
                });
            }
            catch (error) {
                res.status(500).json({
                    status: "error",
                    message: error.message,
                });
            }
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const product = yield Product_1.default.findByPk(req.params.id);
                if (!product) {
                    res.status(404).json({
                        status: "error",
                        message: "Product not found",
                    });
                    return;
                }
                yield product.destroy();
                res.status(200).json({
                    status: "success",
                    message: "Product deleted successfully",
                });
            }
            catch (error) {
                res.status(500).json({
                    status: "error",
                    message: error.message,
                });
            }
        });
    }
}
exports.default = new ProductController();
