import { Controller, Get, Req, Post, HttpCode, Header, Redirect, Query, Param, Body } from "@nestjs/common";
import { Request } from "express";
import { CreateCatDto } from "./dto/create-cat.dto";
import { CatsService } from "./cats.service";
import { Cat } from "./interfaces/cat.interface";


@Controller("cats")
export class CatsController {
    constructor(private readonly catsService: CatsService) {}

    @Post()
    async create(@Body() createCatDto: CreateCatDto) {
        this.catsService.create(createCatDto);
    }

    @Get()
    async getAll(): Promise<Cat[]> {
        return this.catsService.getAll();
    }

    // @Post()
    // @HttpCode(204)
    // @Header("Cache-Control", "none")
    // create(): string {
    //     return "this action adds a new cat";
    // }

    // @Get()
    // getAllCats(@Req() request: Request): string {
    //     return "this action returns all cats";
    // }

    // @Get(":id")
    // getCat(@Param() params): string {
    //     console.log(params.id);
    //     return `this action return a #${params.id} cat`;
    // }

    // @Get("ab*cd")
    // routeWildcards(): string {
    //     return "this route uses a wildcard";
    // }

    // @Get("docs")
    // @Redirect("https://docs.nestjs.com", 302)
    // getDocs(@Query("version") version) {
    //     if(version && version === 5) {
    //         return { url: "https://docs.nestjs.com/v5/" }
    //     }
    // }
}