// import { Module } from '@nestjs/common';
// import { AppController } from './app.controller';
// import { AppService } from './app.service';
// import { TypeOrmModule } from '@nestjs/typeorm';
// import { User } from './user.entity';
// import { AuthController } from './auth/auth.controller';
// import { AuthService } from './auth/auth.service';


// @Module({
//   imports: [
//     TypeOrmModule.forRoot({
//       type: 'postgres',
//       host  : 'localhost',
//       port: 5432,
//       username: 'postgres',
//       password: '11Andy11',
//       database: 'postgres',
//       entities: [User],
//       synchronize: true,
//     }),
//     TypeOrmModule.forFeature([User]),
//   ],
//   controllers: [AppController, AuthController],
//   providers: [AppService, AuthService],
// })
// export class AppModule {}
