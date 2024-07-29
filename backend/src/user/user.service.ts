import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './user.model';



@Injectable()
export class UserService {
    constructor( @InjectModel('User') private readonly userModel: Model<User>) {}

    async getAll() {
        const result = await this.userModel.find();
        return result as  User[];
    }

    async getById(id: string) {
        const result = await this.userModel.findOne({_id: id});
        return result as  User;
    }
     
    // async create(user: User) {
    //     const newUser = new this.userModel({
    //         userName: user.userName,
    //         birthDate: user.birthDate
    //     });
    //     const result = await newUser.save();
    //     return result.userName;
    // }

    async insertUser(newUser: User) {
        // console.log(newUser.userName)
        const user = new this.userModel({
            userName: newUser.userName,
            birthDate: newUser.birthDate

        })
        const result = await user.save();
        // console.log(result.userName)
        return result;
    }

    // async create(userName: string, birthDate: Date): Promise<User> {
    //     const newUser = new this.userModel({ userName, birthDate });
    //     return newUser.save();
    //   }

}