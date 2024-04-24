import { Stuff } from '../../stuff/entities/stuff.entity';
import { Role } from '../../role/entities/role.entity';
export declare class StuffRole {
    id: number;
    stuffId: Stuff;
    roleId: Role;
}
