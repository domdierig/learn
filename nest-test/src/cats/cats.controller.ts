import { Controller, Get, Req, Post } from "@nestjs/common";
import { Request } from "express";

@Controller("cats")
export class CatsController {
    @Post()
    create(): string {
        return "this action adds a new cat";
    }

    @Get()
    getAllCats(@Req() request: Request): string {
        return "this action returns all cats";
    }
}