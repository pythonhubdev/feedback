import {
	StepPersonalInfo as CommonPersonalInfo,
	type PersonalInfoData,
} from "../common/StepPersonalInfo";

interface StepPersonalInfoProps {
	data: PersonalInfoData;
	onChange: (data: PersonalInfoData) => void;
}

export function StepPersonalInfo(props: StepPersonalInfoProps) {
	return (
		<CommonPersonalInfo
			data={props.data}
			onChange={props.onChange}
			variant="career"
		/>
	);
}

export type { PersonalInfoData };
