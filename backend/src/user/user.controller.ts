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

    @Get('/:id')
    getById(@Param('id') id: string) {
        try {
            return this.userService.getById(id);
        } catch (error) {
            console.log(error)
        }
    }

    @Put('/:id')
    updateUser(@Param('id') id, @Body() newUser: User) {
        try {
            const result = this.userService.updateUser(id, newUser);
            return result;
        } catch (error) {
            console.log(error);
        }
    }


    @Post()
    insertUser(@Body() newUser: User) {
        console.log(newUser)
        try {
            const result = this.userService.insertUser(newUser);
            return result;
        } catch (error) {
            console.log(error);
        }
    }
   

}