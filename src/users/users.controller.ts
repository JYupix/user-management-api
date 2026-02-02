import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { UserResponseDto } from './dto/user-response.dto';
import { CreateUserDto } from './dto/create-user.dto';
import { FindUsersDto } from './dto/find-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get()
  findAll(@Query() filters: FindUsersDto) {
    return this.usersService.findAll(filters);
  }

  @Get('active')
  findAllActive(@Query('page') page?: number, @Query('limit') limit?: number) {
    return this.usersService.findAllActive(page, limit);
  }

  @Get(':id')
  getUserById(@Param('id') id: string): Promise<UserResponseDto> {
    return this.usersService.getUserById(id);
  }

  @Post()
  createUser(@Body() dto: CreateUserDto): Promise<UserResponseDto> {
    return this.usersService.createUser(dto);
  }

  @Patch(':id')
  updateUser(
    @Param('id') id: string,
    @Body() dto: UpdateUserDto,
  ): Promise<UserResponseDto> {
    return this.usersService.updateUser(id, dto);
  }

  @Delete(':id')
  deleteUser(@Param('id') id: string): Promise<{ message: string }> {
    return this.usersService.deleteSoftUser(id);
  }

  @Patch(':id/restore')
  restoreUser(@Param('id') id: string): Promise<{ message: string }> {
    return this.usersService.restoreUser(id);
  }
}
