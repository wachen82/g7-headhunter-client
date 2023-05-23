import { BasicAccordion } from './BasicAccordion';
import { apiUrl } from '../../../config/api';
import { useParams } from 'react-router-dom';

export const ReservedAccordion = () => {
    const { id } = useParams();
    return <BasicAccordion tab={2} url={`${apiUrl}/hr/${id}`} add="add"/>
};
