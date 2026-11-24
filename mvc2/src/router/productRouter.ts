import { Router } from "express";
import { getProducts,addProduct,updateProduct ,pricegt,highestsort,totalp,byName,expensive} from "../controller/productController.js";

 const router = Router();
router.post("/add",addProduct)
router.post("/up/:id",updateProduct)
router.get("/product",getProducts);
router.get("/gt",pricegt)
router.get("/highest",highestsort)
router.get("/total",totalp)
router.get("/byname",byName)
router.get("/expensive",expensive)


export default router