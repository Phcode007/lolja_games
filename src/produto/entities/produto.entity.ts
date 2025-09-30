import { IsNotEmpty, IsNumber } from 'class-validator';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'tb_produtos' })
export class Produto {
  @PrimaryGeneratedColumn()
  id: number;

  @IsNotEmpty()
  @Column({ length: 100, nullable: false })
  tipo: string;

  @IsNotEmpty()
  @Column({ length: 100, nullable: false })
  console: string;

  @IsNumber({ maxDecimalPlaces: 2 })
  @IsNotEmpty()
  @Column({ type: 'decimal', precision: 10, scale: 2 })
  preco: number;
}
