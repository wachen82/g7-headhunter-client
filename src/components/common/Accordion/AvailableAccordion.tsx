import { BasicAccordion } from './BasicAccordion';
import { apiUrl } from '../../../config/api';

export const AvailableAccordion = () => {
    return <BasicAccordion url={`${apiUrl}/hr`}/>
};
