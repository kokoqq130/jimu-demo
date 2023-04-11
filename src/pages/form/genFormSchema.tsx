import {createSchemaField} from "@formily/react";
import {Input} from "@formily/antd-mobile";
import { ArrayItems, Checkbox } from '@formily/antd';
import {
  StyledFormilyMobileInput,
  StyledFormilyMobileFormGrid,
  StyledFormilyMobileFormItem,
  StyledFormilyMobileHInput,
  StyledFormilyMobileHFormitem,
  StyledFormilyMobileHTextarea,
  StyledFormilyMobileTextarea,
  StyledFormLayout,
  StyledFormilyMobileHDesc,
} from '@/assets/styleds/FormilyAntdMobile';
import {
  StyledFormilyMobilePreviewFormItem,
  StyledFormilyMobilePreviewCheckboxGroup, StyledFormilyMobilePreviewRadioGroup, StyledFormilyMobilePreviewTextarea,
} from '@/assets/styleds/EditPreview';
import AnswerField from "@/pages/form/AnswerField";
import ChoiceField from "@/pages/form/ChoiceField";
import BaseField, {DisabledRemove} from "@/pages/form/BaseField";
import {
  StyledFormilyArrayBase,
  StyledFormilyArrayRemove,
  StyledFormilyArraySortHandle,
  StyledFormilyArrayAddition,
  StyledFormilyArrayWarp
} from "@/assets/styleds/FormilyAntd";
import ArrayComponent from "@/pages/form/ArrayComponent";



const SchemaField = createSchemaField({
  components: {
    Input,
    WfjtestFormilyMobileInput: StyledFormilyMobileInput,
    WfjtestFormilyMobileHTextarea: StyledFormilyMobileHTextarea,
    WfjtestFormilyMobileTextarea: StyledFormilyMobileTextarea,
    WfjtestFormilyMobileFormItem: StyledFormilyMobileFormItem,
    WfjtestFormilyMobileHInput: StyledFormilyMobileHInput,
    WfjtestFormilyMobileFormGrid: StyledFormilyMobileFormGrid,
    WfjtestFormilyMobileHFormitem: StyledFormilyMobileHFormitem,
    WfjtestAnswerField: AnswerField,
    WfjtestChoiceField: ChoiceField,
    WfjtestArrayItems: ArrayItems,
    WfjtestBaseField: BaseField,
    WfjtestDisabledRemove: DisabledRemove,
    WfjtestFormilyArrayWarp: StyledFormilyArrayWarp,
    WfjtestFormilyArrayBase: StyledFormilyArrayBase,
    WfjtestFormilyArrayRemove: StyledFormilyArrayRemove,
    WfjtestFormilyArraySortHandle: StyledFormilyArraySortHandle,
    WfjtestFormilyArrayAddition: StyledFormilyArrayAddition,
    WfjtestArrayComponent: ArrayComponent,
    WfjtestCheckbox: Checkbox,
    WfjtestFormilyMobilePreviewFormItem: StyledFormilyMobilePreviewFormItem,
    WfjtestFormilyMobilePreviewTextarea: StyledFormilyMobilePreviewTextarea,
    WfjtestFormilyMobilePreviewCheckboxGroup: StyledFormilyMobilePreviewCheckboxGroup,
    WfjtestFormilyMobilePreviewRadioGroup: StyledFormilyMobilePreviewRadioGroup,
    WfjtestFormLayout: StyledFormLayout,
    WfjtestFormilyMobileHDesc: StyledFormilyMobileHDesc,
  },
})
export default SchemaField