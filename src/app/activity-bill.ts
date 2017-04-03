import {ActivityBillItem} from "./activity-bill-item";
import {ActivityBillParticipantPayment} from "./activity-bill-participant-payment";
/**
 * Created by CuiH on 2017/4/3.
 */

export class ActivityBill {
	id: number;
	note: string = "";
	activity_id: number;

	activityBillItems: ActivityBillItem[];
	activityBillParticipantPayments: ActivityBillParticipantPayment[];
}
