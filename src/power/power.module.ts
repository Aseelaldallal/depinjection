import { Module } from '@nestjs/common';
import { PowerService } from './power.service';

@Module({
  // Providers: Things that can be used as dependencies for other classes
  providers: [PowerService],
  exports: [PowerService], // make this class available to other modules in project
})
export class PowerModule {}
