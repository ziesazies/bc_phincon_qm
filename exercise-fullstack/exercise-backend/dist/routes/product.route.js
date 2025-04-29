"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const productController_1 = __importDefault(require("../controllers/productController"));
const router = express_1.default.Router();
router.get("/", productController_1.default.getAll);
router.get("/:id", productController_1.default.getById);
router.post("/", productController_1.default.create);
router.put("/:id", productController_1.default.update);
router.delete("/:id", productController_1.default.delete);
exports.default = router;
