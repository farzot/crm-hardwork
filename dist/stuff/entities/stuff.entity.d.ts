import { StuffRole } from "../../stuff_role/entities/stuff_role.entity";
export declare class Stuff {
    id: number;
    first_name: string;
    last_name: string;
    phone_number: string;
    email: string;
    password: string;
    is_active: boolean;
    stuffRoles: StuffRole[];
}
