import dayjs from 'dayjs';
import isToday from 'dayjs/plugin/isToday';
import isBetween from 'dayjs/plugin/isBetween';

dayjs.extend(isToday);
dayjs.extend(isBetween);

export default dayjs;
