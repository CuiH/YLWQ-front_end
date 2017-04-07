import {ActivityBillItem} from "./activity-bill-item";
import {ActivityBillParticipantPayment} from "./activity-bill-participant-payment";
/**
 * Created by CuiH on 2017/4/3.
 */

export class ActivityBill {
	id: number;
	status: string;
	publish_time: string;
	last_modify_time: string;
	publisher_user_id: number;
	publisher_username: string;

	activityBillItems: ActivityBillItem[] = [];
	activityBillParticipantPayments: ActivityBillParticipantPayment[] = [];
}
