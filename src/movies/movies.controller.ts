import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { CreateMovieDto } from './dto/create-movie.dto';

@Controller('movies')
export class MoviesController {
    @Get()
    findAll(): string {
        return 'Get all movies';
    }

    @Get(':id')
    findOne(@Param('id') id): string {
        return `Movie ${id}`;
    }

    @Post()
    create(@Body() createItemDto: CreateMovieDto): string {
        return `Name: ${createItemDto.name}, Desc: ${createItemDto.description}, Price: ${createItemDto.price}` ;
    }

    @Delete(':id')
    delete(@Param('id') id): string {
        return `Delete ${id}`
    }

    @Put(':id')
    update(@Body() updateMovieDto: CreateMovieDto, @Param('id') id): string {
        return `Update ${id} - Update Movie ${updateMovieDto.name}`
    }
}
