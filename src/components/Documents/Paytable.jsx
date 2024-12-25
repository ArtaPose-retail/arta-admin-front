import React, { Fragment } from 'react'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Box } from '@mui/material';
import { NoItem } from '../UI/NoItem';
import { useSelector } from 'react-redux';

import { persianDate, persianTimeTehran, separateBy3, toPersian } from '../../utils/setting';
import { HourglassEmpty } from '@mui/icons-material';
export function Row(props) {

    const { row } = props;



    return (
        <Fragment>
            <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>

                <TableCell
                    align="center"
                    sx={{ color: (theme) => theme.typography.color, fontWeight: 500 }}
                >
                    {toPersian(row?.id ?? 0)}
                    {/* {row?.method_id == 1 ? "نقدی" : row?.method_id == 2 ? "پوز" : "تخفیف"} */}
                </TableCell>
                <TableCell
                    sx={{ color: (theme) => theme.typography.color, fontWeight: 500 }}
                    align="center"
                >
                    {toPersian(row?.public_id ?? 0)}
                </TableCell>
                <TableCell
                    sx={{ color: (theme) => theme.typography.color, fontWeight: 500 }}
                    align="center"
                >
                    {toPersian(separateBy3(row?.amount ?? 0))}ریال
                </TableCell>

                <TableCell
                    sx={{ color: (theme) => theme.typography.color, fontWeight: 500 }}
                    align="center"
                >
                    {toPersian(persianTimeTehran(row?.created_at ?? 0))}
                </TableCell>
                <TableCell
                    sx={{ color: (theme) => theme.typography.color, fontWeight: 500 }}
                    align="center"
                >
                    {toPersian(persianDate(row?.created_at ?? 0))}
                </TableCell>
            </TableRow>

        </Fragment>
    );
}

function Paytable() {
    const { DocPayList, loading } = useSelector((state) => state.document)
    return (
        <>
            {!loading ? <Box
                sx={{
                    width: "100%",
                    height: "200px",
                    overflowY: "scroll",
                    overflowX: "hidden",
                }}
            >   {DocPayList?.length > 0 ? <TableContainer>
                <Table aria-label="collapsible table">
                    <TableHead>
                        <TableRow>

                            <TableCell
                                sx={{ color: (theme) => theme.palette.disable.main }}
                                align="center"
                            >
                                عنوان
                            </TableCell>
                            <TableCell
                                sx={{ color: (theme) => theme.palette.disable.main }}
                                align="center"
                            >
                                شماره تراکنش
                            </TableCell>
                            <TableCell
                                sx={{ color: (theme) => theme.palette.disable.main }}
                                align="center"
                            >
                                مبلغ
                            </TableCell>

                            <TableCell
                                sx={{ color: (theme) => theme.palette.disable.main }}
                                align="center"
                            >
                                زمان
                            </TableCell>
                            <TableCell
                                sx={{ color: (theme) => theme.palette.disable.main }}
                                align="center"
                            >
                                تاریخ
                            </TableCell>
                            {/* <TableCell sx={{ color: theme => theme.palette.disable.main }} align="center">Protein&nbsp;(g)</TableCell> */}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {DocPayList.map((row, index) => (
                            <Row key={index} row={row} />
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
                :
                <NoItem />
                }</Box> : <HourglassEmpty />}
        </>
    )
}

export default Paytable