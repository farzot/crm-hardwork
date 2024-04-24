import { Target } from "../../target/entities/target.entity";
import { LidStage } from "../../lid_stage/entities/lid_stage.entity";
import { LidStatus } from "../../lid_status/entities/lid_status.entity";
import { ReasonLid } from "../../reason_lid/entities/reason_lid.entity";
import { Group } from "../../group/entities/group.entity";
export declare class Lid {
    id: number;
    first_name: string;
    last_name: string;
    phone: string;
    target_id: Target;
    lid_stage_id: LidStage;
    test_date: Date;
    trial_lesson_date: Date;
    trial_lesson_time: string;
    trial_lesson_group_id: Group;
    lid_status_id: LidStatus;
    cancel_reason_id: ReasonLid;
}
