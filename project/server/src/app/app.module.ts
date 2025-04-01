import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostModule } from '../post/post.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres', // Cambia esto si tienes un usuario diferente
      password: 'pass', // Cambia esto por tu contraseña
      database: 'posts_db', // Nombre de la base de datos
      autoLoadEntities: true,
      synchronize: true, // ¡Solo para desarrollo! Usa migraciones en producción
    }),
    PostModule,
  ],
})
export class AppModule {}