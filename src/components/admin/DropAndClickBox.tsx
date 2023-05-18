import * as React from 'react';
import { Grid } from '@mui/material';
import { useState } from 'react';
import { getCsvFile } from '../../utils/csvUtils';
import { FileButton } from './FileButton';
import { DropBox } from './DropBox';
import { uploadCsvFile } from '../../utils/uploadCsv';
import { ErrorList, ErrorOrErrorWithField } from './ErrorList';
import theme from '../../theme';
import { CustomSnackBar } from '../common/CustomSnackBar/CustomSnackBar';
import { useSnackBar } from '../../hooks/useSnackBar';
import { SnackBarEnum } from '../../types/formValues';

export const DropAndClickBox = () => {
    const [active, setActive] = useState<boolean>(false);
    const [errors, setErrors] = useState<ErrorOrErrorWithField[]>([]);

    const {
        snackBarMessage,
        snackBarType,
        isSnackBarOpen,
        hideSnackBar,
        showSnackBar,
    } = useSnackBar();
    const handleDrop = async (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setActive(false);
        const csvFile = await getCsvFile(e.dataTransfer.files);
        if (!csvFile) {
            return;
        }
    };

    const handleFileInputChange = async (
        e: React.ChangeEvent<HTMLInputElement>
    ) => {
        e.preventDefault();
        const csvFile = await getCsvFile((e.target.files as FileList) || []);
        if (!csvFile) {
            return;
        }

        const { success, message } = (await uploadCsvFile(
            csvFile,
            setErrors
        )) as { success: boolean; message: string };
        console.log(success);
        showSnackBar(
            success
                ? 'Plik csv dodany prawidłowo. Maile zostały wysłane do użytkowników'
                : message,
            success ? SnackBarEnum.SUCCESS_MESSAGE : undefined
        );
    };

    return (
        <>
            <Grid
                container
                spacing={2}
                alignItems="center"
                justifyContent="center"
            >
                <Grid item>
                    <FileButton handleFileInputChange={handleFileInputChange} />
                </Grid>
                <Grid item>
                    <p
                        style={{
                            padding: '1rem',
                            color: theme.palette.text.primary,
                        }}
                    >
                        lub
                    </p>
                </Grid>
                <Grid item>
                    <DropBox
                        active={active}
                        setActive={setActive}
                        handleDrop={handleDrop}
                    />
                </Grid>
            </Grid>

            {errors.length > 0 && <ErrorList errors={errors} />}
            {isSnackBarOpen && (
                <CustomSnackBar
                    setAction={hideSnackBar}
                    actionState={isSnackBarOpen}
                    message={snackBarMessage}
                    type={snackBarType}
                />
            )}
        </>
    );
};
