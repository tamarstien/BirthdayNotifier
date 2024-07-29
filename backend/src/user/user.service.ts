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

    async updateUser(id, newUser: User) {
        const user = new this.userModel({
            userName: newUser.userName,
            birthDate: newUser.birthDate
          
        })
        const result = await this.userModel.findByIdAndUpdate(id, newUser);
        return 'updated';
    }
 

}