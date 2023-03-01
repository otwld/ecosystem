import {
  Body,
  Controller,
  MaxFileSizeValidator,
  ParseFilePipe,
  Post,
  UploadedFile,
  UseInterceptors
} from '@nestjs/common';
import "multer";
import {FileInterceptor} from '@nestjs/platform-express';
import {ResourceService} from '../services/resource.service';
import {FileCategory} from '../constants/file-types.constant';

export class CreateResourceDto {
  storageEngine: 's3' | 'external';
  path: string;
  fileCategory: FileCategory;
  url?: string;
}

@Controller('resources')
export class ResourceController {
  constructor(private readonly resourceService: ResourceService) {
  }
  @Post()
  @UseInterceptors(FileInterceptor('file'))
  uploadResource(@Body() body: CreateResourceDto, @UploadedFile(
    new ParseFilePipe({
      fileIsRequired: false,
      validators: [
        new MaxFileSizeValidator({maxSize: 1000000}),
        // ... Set of file validator instances here
      ]
    })
  )
    file: Express.Multer.File) {
    return this.resourceService.createSavableResource(body, file)
  }
}
