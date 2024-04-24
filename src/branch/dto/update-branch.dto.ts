import { PartialType } from '@nestjs/mapped-types';
import { CreateBranchDto } from './create-branch.dto';

export class UpdateBranchDto extends PartialType(CreateBranchDto) {
  name: string;
  address: string;
  call_number: string;
}
