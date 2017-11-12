import { Module } from '@nestjs/common';
import { db } from '../providers/database.providers'

@Module({
  components: [...db],
  exports: [...db]  
})
export class DatabaseModule {}