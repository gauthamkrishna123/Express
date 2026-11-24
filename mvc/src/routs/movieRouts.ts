import { getMovieById,getMovies,addMovie,updateMovie,deleteMovie,highRatedMovie,sortMovie,totalMovie,searchMovie,highratedmovie,leastratedmovie ,belowThree,releaseYear} from './../controllers/movieController.js';
import { Router } from "express";


const router = Router()
router.delete("/delete/:id",deleteMovie)

router.post("/add",addMovie)
router.put("/update/:id",updateMovie)
router.get("/movies",getMovies);
router.get("/byid/:id",getMovieById)
router.get("/movies/highrated",highRatedMovie)
router.get("/sort",sortMovie)
router.get("/total",totalMovie)
router.get("/search",searchMovie)
router.get("/toprated",highratedmovie)
router.get("/least",leastratedmovie)
router.get("/below3",belowThree)
router.get("/release/:year",releaseYear)
export default router