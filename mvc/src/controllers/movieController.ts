import type { Request,Response } from "express";

import { movies } from "../models/movieModel.js";
import type { Movie } from "../types/movie.js";

//get all movies

export const getMovies = (req:Request,res:Response)=>{
    res.status(200).json(movies)
}

//get movie by id

export const getMovieById = (req:Request,res:Response)=>{
    const id = Number(req.params.id);
    const movie = movies.find(m=>m.id === id);
    if(!movie){
        return res.status(404).json({
            message:"movie not found"
        })
    }
    res.status(200).json(movie)
}

//add movie

export const addMovie = (req:Request,res:Response)=>{
    const {title,rating,year} = req.body;
    const ratelimit = rating>=1 && rating <=5
    if(!ratelimit){
        return res.status(400).json({
            message:"rating must be between 1-5"
        })
    }
    const sametitle =movies.find(movie =>movie.title.toLowerCase() === title.toLowerCase())
    console.log(sametitle?.title);
    
    if(sametitle){
        return res.status(400).json({
            message:"this movie already exist"
        })
    }
    const newMovie :Movie ={
        id:movies.length+1,
        title,
        rating,
        year
    };
    movies.push(newMovie);
    res.status(200).json({
        message:"movie added successfully",
        movie:newMovie
    })
}

//update movie
export const updateMovie = (req:Request,res:Response)=>{
    const id =Number(req.params.id);
    const movie = movies.find(m=>m.id=== id);

    if(!movie){
        return res.status(400).json({
            message:"movie not found"
        })
    }
    movie.title =req.body.title;
    movie.rating=req.body.rating;
    movie.year=req.body.year;

    const ratelimit = movie.rating <=5 && movie.rating >=1
    if(!ratelimit){
        return res.status(400).json({
            message:"rating must be in the range of 1 to 5"
        })
    }
    res.status(200).json({
        message:"movie updated successfully",
        movie
    })
}

//delete movie

export const deleteMovie =(req:Request,res:Response)=>{
    const id = Number(req.params.id);
    const index = movies.findIndex(m => m.id === id);

    if(index === -1){
        return res.status(400).json({
            message:"movie not found"
        })
    }
    movies.splice(index,1);
    res.status(200).json({
        message:'movie deleted'
    })
}
    
    //get movie by rating greater than 4

    export const highRatedMovie = (req:Request,res:Response)=>{

        const Highrate = movies.filter(m=>m.rating > 4)
        res.status(200).json(Highrate)
    }

    //search movie by title

    export const searchMovie  =(req:Request,res:Response)=>{
        const title = req.query.title as string;
        const movie = movies.find(movie => movie.title.toLowerCase() === title.toLowerCase());
        if(!movie){
            return res.status(400).json({
                message:"movie not found"
            })
        }
        res.status(200).json(movie)
    }

    //sort by rating

    export const sortMovie = (req:Request,res:Response)=>{
        const sorted =[...movies].sort((a,b) =>b.rating - a.rating)
        res.status(200).json(sorted)
    }

    //highest rated movie

    export const highratedmovie= (req:Request,res:Response)=>{
        const sorted = [...movies].sort((a,b)=>b.rating - a.rating)
        res.status(200).json({
            message:"top rated movie",
            moviename:sorted[0]
        })
    }
    // rating below 3

    export const belowThree = (req:Request,res:Response)=>{
        const rate3 = movies.filter(movie => movie.rating <= 3);
        res.status(200).json({
            message:"rating below 3",
            rating_below_3:rate3
        })
    }
    //least rated movie
        export const leastratedmovie= (req:Request,res:Response)=>{
        const sorted = [...movies].sort((a,b)=>a.rating - b.rating)
        res.status(200).json({
            message:"least rated movie",
            moviename:sorted[0]
        })
    }
    //total movies

    export const totalMovie =(req:Request,res:Response)=>{
        res.status(200).json({
            totalmovies:movies.length
        })
    }

    //filter by release year

    export const releaseYear =(req:Request,res:Response)=>{
        const year = Number(req.params.year);

        const movieReleaseYear = movies.filter(movie => movie.year === year);

        res.status(200).json({
            message:"released on this year",
            movieReleaseYear
        })
    }