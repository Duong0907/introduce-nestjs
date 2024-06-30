import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  private users: User[] = [];
  create(createUserDto: CreateUserDto) {
    const user = new User();

    // id hiện tại bằng độ dài của mảng users
    user.id = this.users.length;
    user.name = createUserDto.name;
    user.age = createUserDto.age;
    this.users.push(user);

    return user;
  }

  findAll() {
    return this.users;
  }
}
