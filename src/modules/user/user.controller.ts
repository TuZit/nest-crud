import { Controller } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  // su dung dependency inject
  // Thay cho việc phải khởi tạo const userService = new UserService();
  constructor(private readonly userService: UserService) {}

  method1() {
    //   const userService1 = new UserService();
    return this.userService.getUsers();
  }
}
