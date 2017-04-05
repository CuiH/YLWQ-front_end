/**
 * Created by CuiH on 2017/3/31.
 */

export class Notification {
	id: number;
	title: string;
	content: string;
	type: string;
	create_time: string;
	object_id: number;
	object_name: string;
	subject_id: number;
	subject_name: string;
	is_read: number;
	opened: boolean = false;
}
