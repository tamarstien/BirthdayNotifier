import { User } from './user.model';
import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { UserService } from './user.service';


@Controller('user')
export class UserController {
    constructor (private userService: UserService) {}

    @Get()
    getAll() {
        try {
            return this.userService.getAll();
        } catch (error) {
            console.log(error)
        }
    }
}