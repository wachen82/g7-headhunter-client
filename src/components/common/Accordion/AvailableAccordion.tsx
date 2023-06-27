import { BasicAccordion } from './BasicAccordion';
import { apiUrl } from '../../../config/api';

export const AvailableAccordion = () => <BasicAccordion tab={1} url={`${apiUrl}/hr`} />
