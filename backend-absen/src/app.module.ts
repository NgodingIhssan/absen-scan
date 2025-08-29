import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { SuperAdminModule } from './super-admin/super-admin.module';
import { AdminModule } from './admin/admin.module';
import { KaprogModule } from './kaprog/kaprog.module';
import { PegawaiModule } from './pegawai/pegawai.module';

@Module({
  imports: [
    ConfigModule.forRoot({

      isGlobal: true,
    }),
    PrismaModule,
    CommonModule,
    AuthModule,
    UsersModule,
    SuperAdminModule,
    AdminModule,
    KaprogModule,
    PegawaiModule,
  ],
})
export class AppModule {}
