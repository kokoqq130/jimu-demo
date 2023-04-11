import React, {ReactNode} from 'react';
import { AnswerIcon, ChoiceIcon } from "@/components/Icons";
export let num = 0;
export enum formFieldsTypes {
  choice = 'choice', // 选择题
  answer = 'answer'// 问答题
}
export enum componentType {
  WfjtestAnswerField = formFieldsTypes.answer,
  WfjtestChoiceField = formFieldsTypes.choice
}
export interface FormTypes {
  name: string;
  icon: ReactNode | undefined;
  type: formFieldsTypes
}
export const formTypes: FormTypes[] = [{
  name: '选择题',
  icon: <ChoiceIcon />,
  type: formFieldsTypes.choice,
}, {
  name: '问答题',
  icon: <AnswerIcon />,
  type: formFieldsTypes.answer,
}, ];