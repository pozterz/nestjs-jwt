import { Module } from '@nestjs/common';
import { UserModule } from './user.module'
import { AuthModule } from './auth.module'

@Module({
    modules: [
        UserModule,
        AuthModule
    ],
})
export class ApplicationModule {}