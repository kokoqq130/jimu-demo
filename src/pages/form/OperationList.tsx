import React, {FC, useEffect, useMemo, useRef} from "react";
import {  ArrayField as ArrayFieldType } from '@formily/core';
import { clone } from '@formily/shared'
import { Popover } from "antd-mobile";
import { PopoverRef } from "antd-mobile/es/components/popover";
import {message} from "antd";
import {useMount, useUnmount} from "ahooks";
import {StyleoOperationList, StyleoOperationListBtn} from "@/assets/styleds/Form";
import { OptionDownIcon, OptionUpIcon} from "@/components/Icons";
import { ReactComponent as ThreeDotIconfrom }  from "@/assets/icons/svg/dot.svg";
import { ReactComponent as OptionCopyIcon }  from "@/assets/icons/svg/copy.svg";
import { ReactComponent as OptionRemoveIcon }  from "@/assets/icons/svg/remove.svg";
import {getModuleId} from "@/pages/form/util/DealData";
import {arrComponentObs} from "@/pages/form/ArrayComponent";
import {observer} from "@formily/react";
import {observable} from "@formily/reactive";
export const operationObs: {
  isShow: boolean;
} = observable({
  isShow: false,
});
interface IOperationListProps {
  index: number
  optionField: ArrayFieldType
}

const OperationList: FC<React.PropsWithChildren<IOperationListProps>> =  observer( ({ index, optionField }) => {
  const popoverRef = useRef<PopoverRef>()
  const isTop = index === 0;
  const isBottom = index + 1 === optionField.value.length;
  let timer: any = null;
  useMount(() => {
    if (operationObs.isShow) {
      popoverRef?.current.show();
    } else {
      popoverRef?.current.hide();
    }
  })
  useUnmount(() => {
    if (timer) {
      clearTimeout(timer);
    }
  })
  const createOperationList = () => <StyleoOperationList>
      <div onClick={async (e) => {
        e.stopPropagation();
        if (!(optionField.value.length < 100)) {
          message.warning('抱歉，当前最多支持添加100题。');
        } else {
          // if (!optionField.value[index].choiceArr) {
          //     optionField.value[index].choiceArr = ['', '', ''];
          // }
          const copyValue = clone(optionField.value[index])
          copyValue.moduleId = getModuleId();
          // if (!copyValue.choiceArr) {
          //   copyValue.choiceArr = ['', '', ''];
          // }
          await optionField.push?.(copyValue);
          arrComponentObs.activateIndex = optionField.value.length;
          operationObs.isShow = false
        }
      }}>
        <OptionCopyIcon />
        复制
      </div>
      <div onClick={async () => {
        await optionField.remove(index)
        arrComponentObs.activateIndex = -1;
        operationObs.isShow = false
      }}>
        <OptionRemoveIcon />
        删除
      </div>
      <div className={isTop ? 'gray' : ''} onClick={async () => {
        if (!isTop) {
          await optionField.moveUp(index);
          arrComponentObs.activateIndex = -1;
          operationObs.isShow = false
        }
      }}>
        <OptionUpIcon color={isTop ? '#ccc' : null} />
        上移
      </div>
      <div className={isBottom ? 'gray' : ''} onClick={async () => {
        if (!isBottom) {
          await optionField.moveDown(index);
          arrComponentObs.activateIndex = -1;
          operationObs.isShow = false
        }
      }}>
        <OptionDownIcon color={isBottom ? '#ccc' : null} />
        下移
      </div>
    </StyleoOperationList>
  return <Popover
    content={createOperationList()}
    trigger='click'
    placement='left'
    ref={popoverRef}
    visible={operationObs.isShow}
  >
    <StyleoOperationListBtn onClick={() => {
      timer = setTimeout(() => {
        operationObs.isShow = !operationObs.isShow;
      } , 200);
    }}>
      <ThreeDotIconfrom />
    </StyleoOperationListBtn>
  </Popover>
})
export default OperationList;